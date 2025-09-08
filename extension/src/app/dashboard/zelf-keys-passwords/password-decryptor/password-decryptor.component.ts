import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import * as faceapi from "@vladmandic/face-api";
import { ChromeService } from "app/chrome.service";
import { HttpWrapperService } from "app/http-wrapper.service";
import { Wallet } from "app/wallet";
import { environment } from "environments/environment";
import { WebcamComponent, WebcamImage, WebcamInitError, WebcamModule } from "ngx-webcam";
import { Observable, Subject, takeUntil } from "rxjs";
import { DataPassingService } from "../../../services/data-passing.service";
import { PopoutCommunicationService } from "../../../services/popout-communication.service";
import { WalletService } from "../../../wallet.service";

export interface BiometricData {
    faceBase64: string;
    password?: string;
    retrievedData?: any;
}

@Component({
    selector: "app-password-decryptor",
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        WebcamModule,
        RouterModule,
    ],
    templateUrl: "./password-decryptor.component.html",
    styleUrls: ["./password-decryptor.component.scss"],
})
export class PasswordDecryptorComponent implements OnInit, OnDestroy {
    @ViewChild("maskResult", { static: false }) public maskResultCanvasRef: ElementRef | undefined;
    @ViewChild("toSend", { static: false }) public ToSendCanvasRef: ElementRef | undefined;
    @ViewChild("webcam", { static: false }) public webcamRef?: WebcamComponent;

    @Input() passwordData: any = {};
    @Output() canNavigate: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() error: EventEmitter<any> = new EventEmitter<any>();
    @Output() imageCaptured: EventEmitter<string> = new EventEmitter<string>();
    @Output() biometricsSuccess: EventEmitter<BiometricData> = new EventEmitter<BiometricData>();
    @Output() biometricsCancel: EventEmitter<void> = new EventEmitter<void>();

    private unsubscriber$: Subject<void> = new Subject<void>();
    private _takePicture: Subject<void> = new Subject<void>();
    private _intervals: any = {};

    // Camera and face detection properties
    camera = {
        isLoading: true,
        hasPermissions: true,
        isLowQuality: false,
        dimensions: {
            video: { width: 0, height: 0, max: { width: 400, height: 300 } },
            result: { width: 0, height: 0, offsetX: 0, offsetY: 0 },
            real: { width: 0, height: 0, offsetX: 0, offsetY: 0 },
        } as { [key: string]: { width: number; height: number; offsetX?: number; offsetY?: number; max?: { width: number; height: number } } },
        configuration: {
            facingMode: "user",
            width: { ideal: 1920 },
            height: { ideal: 1080 },
        },
    };

    face = {
        video: { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 }, margin: { x: 0, y: 0 } },
        real: { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 }, margin: { x: 0, y: 0 } },
        minHeight: 80, // Further reduced from 100
        minPixels: 80, // Further reduced from 100
        successPosition: 0,
        threshold: 0.1, // Further reduced from 0.15 (even more forgiving)
    };

    response = {
        base64Image: "",
        isLoading: false,
    };
    apiKeysSessionJWT: string;
    errorFace: any = null;
    lastFace: any;
    aspectRatio = 0.75;
    masterPassword: string = "";

    // Password decryption specific properties
    dataType: string = "passwords";
    dataTitle: string = "Password";
    wallet!: Wallet;
    shareables!: any;
    passwordId: string = "";

    // Make Math and Date available in template
    Math = Math;
    Date = Date;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _httpWrapperService: HttpWrapperService,
        private _walletService: WalletService,
        private _router: Router,
        private dataPassingService: DataPassingService,
        private chromeService: ChromeService,
        private popoutCommunicationService: PopoutCommunicationService
    ) {
        this.apiKeysSessionJWT = "";

        this.shareables = {
            wallet: {},
        };
    }

    async ngOnInit(): Promise<void> {
        // Get password data from popout communication service
        this._getPasswordDataFromPopoutService();

        await this._setWallet();

        // Initialize ZelfKey session
        this.initZelfKeySession();

        // Wait for decryption data from background script before starting camera
        this._waitForDecryptionData();
    }

    private async _setWallet(): Promise<any> {
        const wallet = await this._walletService.getFirstWalletFromStorage();

        if (!wallet?.name) {
            this._router.navigate(["/welcome"]);
            return;
        }

        this.shareables.wallet = wallet;
        this.wallet = this.shareables.wallet;

        this._changeDetectorRef.detectChanges();
    }

    /**
     * Get password data from the popout communication service
     */
    private _getPasswordDataFromPopoutService(): void {
        const popoutData = this.popoutCommunicationService.getDecryptionData();

        if (popoutData) {
            this.passwordId = popoutData.passwordId;
            this.passwordData = {
                publicData: popoutData.publicData,
                masterPassword: popoutData.masterPassword,
            };
        } else {
            this.passwordData = {};
        }

        // Set master password if available
        if (this.passwordData.masterPassword) {
            this.masterPassword = this.passwordData.masterPassword;
        }
    }

    /**
     * Wait for decryption data from background script before starting camera
     */
    private _waitForDecryptionData(): void {
        // Check if we already have data
        if (this.passwordId && this.passwordData.publicData?.zelfProof) {
            console.log("PasswordDecryptor: Decryption data already available, starting camera");
            this._initializeBiometrics();
            return;
        }

        // Subscribe to decryption data changes
        this.popoutCommunicationService.decryptionData$.pipe(takeUntil(this.unsubscriber$)).subscribe((data) => {
            if (data) {
                console.log("PasswordDecryptor: Received decryption data from background script:", data);
                this.passwordId = data.passwordId;
                this.passwordData = {
                    publicData: data.publicData,
                    masterPassword: data.masterPassword,
                };

                // Set master password if available
                if (this.passwordData.masterPassword) {
                    this.masterPassword = this.passwordData.masterPassword;
                }

                // Now start the camera
                this._initializeBiometrics();
            }
        });
    }

    ngOnDestroy(): void {
        // Clear intervals
        if (this._intervals.detectFace) {
            clearInterval(this._intervals.detectFace);
        }
        if (this._intervals.checkNgxVideo) {
            clearInterval(this._intervals.checkNgxVideo);
        }

        // Stop camera stream
        this._stopCamera();

        // Complete observables
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    get takePicture$(): Observable<void> {
        return this._takePicture.asObservable();
    }

    async initZelfKeySession(): Promise<void> {
        console.log("PasswordDecryptor: Initializing ZelfKey session...");

        // The wallet service now caches the JWT token
        await this._walletService.initZelfKeySession();

        // Get the cached token
        const jwt = await this._walletService.getZelfKeyJWT();
        console.log("PasswordDecryptor: JWT token from wallet service:", jwt ? "Present" : "Missing");

        if (jwt) {
            this.apiKeysSessionJWT = jwt;
            console.log("PasswordDecryptor: JWT token set successfully");
        } else {
            console.error("PasswordDecryptor: No JWT token available!");
        }
    }

    /**
     * Handle successful biometrics verification
     */
    onBiometricsSuccess(faceBase64: string, password?: string): void {
        // Stop camera before emitting success
        this._stopCamera();

        // The actual decryption and result setting is handled in _retrievePasswordData
        // This method is called after the API call is complete
        this.biometricsSuccess.emit({
            faceBase64,
            password: this.masterPassword || password,
        });
    }

    /**
     * Handle biometrics cancellation
     */
    onBiometricsCancel(): void {
        // Stop camera before closing
        this._stopCamera();

        const result = {
            success: false,
            error: "User cancelled decryption",
        };

        // Set cancellation result in the popout communication service
        this.popoutCommunicationService.setDecryptionResult(result);

        // Send result back to background script
        this.sendDecryptionResultToBackground(result);

        // Close the popup after a short delay to ensure message is sent
        setTimeout(() => {
            this.closePopup();
        }, 100);

        this.biometricsCancel.emit();
    }

    /**
     * Stop camera stream and cleanup
     */
    private _stopCamera(): void {
        try {
            // Stop the webcam component
            if (this.webcamRef) {
                // Access the native video element and stop its stream
                const videoElement = this.webcamRef.nativeVideoElement;
                if (videoElement && videoElement.srcObject) {
                    const stream = videoElement.srcObject as MediaStream;
                    if (stream) {
                        stream.getTracks().forEach((track) => {
                            track.stop();
                        });
                    }
                    videoElement.srcObject = null;
                }
            }
        } catch (error) {
            console.warn("Error stopping camera:", error);
        }
    }

    private async _initializeBiometrics(): Promise<void> {
        try {
            // Always wait for the wallet service to load the models
            this._walletService.faceapi$.pipe(takeUntil(this.unsubscriber$)).subscribe(async (isLoaded) => {
                if (!isLoaded) return;

                this.camera.isLoading = false;
                await this._setMaxVideoDimensions();
                this._startNgxVideoInterval();
            });
        } catch (error) {
            console.error("❌ Error initializing biometrics:", error);
            this.error.emit(error);
        }
    }

    private async _setMaxVideoDimensions(): Promise<void> {
        // For popup mode, use the exact popup dimensions (375x600)
        const popupWidth = 375;
        const popupHeight = 600;

        // Use full popup dimensions since camera container fills entire height
        const viewportWidth = popupWidth; // Full width
        const viewportHeight = popupHeight; // Full height

        // Set viewport dimensions (what we display)
        this.camera.dimensions.video.width = viewportWidth;
        this.camera.dimensions.video.height = viewportHeight;

        // Set result dimensions (for processing)
        this.camera.dimensions.result.width = viewportWidth;
        this.camera.dimensions.result.height = viewportHeight;

        // Initialize face dimensions based on viewport
        this.face.video = this._getCenterAndRadius(viewportHeight, viewportWidth);

        this._changeDetectorRef.markForCheck();
    }

    private _startNgxVideoInterval(): void {
        if (this._intervals.checkNgxVideo) {
            clearInterval(this._intervals.checkNgxVideo);
            this._intervals.checkNgxVideo = null;
        }

        this._intervals.checkNgxVideo = setInterval(this._checkVideoStreamReady, 100);
    }

    private _checkVideoStreamReady = () => {
        const videoNgx = this.webcamRef?.nativeVideoElement;

        if (!videoNgx) return;

        clearInterval(this._intervals.checkNgxVideo);
        this._intervals.checkNgxVideo = null;

        videoNgx.addEventListener(
            "loadeddata",
            () => {
                this._startFaceDetectionInterval();
                this.canNavigate.emit(true);

                this._setVideoDimensions(videoNgx);
                this._drawOvalCenterAndMask();
            },
            { once: true }
        );

        this._setVideoDimensions(videoNgx);
        this._drawOvalCenterAndMask();
    };

    private _setVideoDimensions(videoElement: HTMLVideoElement) {
        // Force the video to fill the entire container
        const containerWidth = 375; // Popup width
        const containerHeight = 600; // Full popup height

        // Set the video element dimensions directly
        videoElement.style.width = `${containerWidth}px`;
        videoElement.style.height = `${containerHeight}px`;
        videoElement.style.objectFit = "cover";
        videoElement.style.objectPosition = "center";

        this.camera.dimensions.video.height = containerHeight;
        this.camera.dimensions.video.width = containerWidth;
        this.camera.dimensions.result = { height: 0, width: 0, offsetX: 0, offsetY: 0 };

        this._setResultDimensions("result", containerHeight, containerWidth);

        this.face.video = this._getCenterAndRadius(containerHeight, containerWidth);

        const maskResultCanvas = this.maskResultCanvasRef?.nativeElement;

        if (maskResultCanvas) {
            maskResultCanvas.style.marginLeft = `0px`;
            maskResultCanvas.style.marginTop = `0px`;
        }

        this._changeDetectorRef.markForCheck();
    }

    private _getCenterAndRadius(
        height: number,
        width: number
    ): { center: { x: number; y: number }; radius: { x: number; y: number }; margin: { x: number; y: number } } {
        const center = {
            x: width / 2,
            y: height / 2,
        };

        const margin = {
            y: height * 0.05,
            x: 0,
        };

        margin.x = margin.y * 0.8;

        const radius = {
            y: height * 0.35, // Reduced from 0.42 (smaller oval)
            x: 0,
        };

        radius.x = radius.y * this.aspectRatio;

        if (radius.x * 2 >= width) {
            radius.x = width * 0.48;
            radius.y = radius.x / this.aspectRatio;
        }

        return { center, radius, margin };
    }

    private _setResultDimensions(type: string, height: number, width: number): void {
        const dimensions = this.camera.dimensions[type as keyof typeof this.camera.dimensions] as any;
        if (!dimensions) return;

        dimensions.height = height;
        dimensions.offsetY = 0;
        dimensions.width = Math.min(2.8 * (this.face.real?.radius?.x || 0), width);
        dimensions.offsetX = (this.face.real?.center?.x || 0) - dimensions.width / 2;
    }

    private _drawOvalCenterAndMask(): void {
        const maskResultCanvas = this.maskResultCanvasRef?.nativeElement;
        if (!maskResultCanvas) {
            return;
        }

        const ctx = maskResultCanvas.getContext("2d");
        if (!ctx) {
            return;
        }

        const videoDim = this.camera.dimensions.video;
        if (!videoDim.width || !videoDim.height) {
            return;
        }
        maskResultCanvas.width = videoDim.width;
        maskResultCanvas.height = videoDim.height;

        const { center, radius } = this.face.video || { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 } };

        ctx.clearRect(0, 0, maskResultCanvas.width, maskResultCanvas.height);

        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fillRect(0, 0, maskResultCanvas.width, maskResultCanvas.height);

        ctx.globalCompositeOperation = "destination-out";

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.beginPath();
        ctx.ellipse(center.x, center.y, radius.x, radius.y, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.globalCompositeOperation = "source-over";
    }

    private _drawStatusOval(ctx: any, isOk: boolean): void {
        const { center, radius } = this.face.video || { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 } };

        ctx.beginPath();
        ctx.ellipse(center.x, center.y, radius.x, radius.y, 0, 0, 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.strokeStyle = isOk ? "green" : "red";
        ctx.stroke();
        ctx.closePath();
    }

    private _inRange(value: number, min: number, max: number): boolean {
        return value >= min && value <= max;
    }

    private _isFaceCentered(nose: any): void {
        const faceCenterX = nose.x;
        const faceCenterY = nose.y;

        const { center, margin } = this.face.real || { center: { x: 0, y: 0 }, margin: { x: 0, y: 0 } };

        const inRangeX = this._inRange(faceCenterX, center.x - margin.x, center.x + margin.x);
        const inRangeY = this._inRange(faceCenterY, center.y, center.y + margin.y * 2.5);

        const isFaceCentered = inRangeX && inRangeY;

        if (isFaceCentered) return;

        let direction = "";

        if (!inRangeX) direction += `${faceCenterX < center.x - margin.x ? "←" : "→"}`;
        if (!inRangeY) direction += `${faceCenterY < center.y ? "↓" : "↑"}`;

        this.errorFace = {
            canvas: direction,
            subtitle: "Center your face in the oval",
            title: "Center your face",
        };
    }

    private _isFaceClose(landmarks: any): void {
        const realDim = this.camera.dimensions.real || { height: 0, width: 0 };
        const totalFaceArea = landmarks.imageHeight * landmarks.imageWidth;
        const totalImageArea = realDim.height * realDim.width;
        const faceProportion = totalFaceArea / totalImageArea;

        if (faceProportion < this.face.threshold || landmarks.imageHeight < this.face.minPixels || landmarks.imageWidth < this.face.minPixels) {
            this.errorFace = {
                title: "Get closer",
                subtitle: "Move your face closer to the camera",
            };
        }
    }

    private _startFaceDetectionInterval(): void {
        if (this._intervals.detectFace) {
            clearInterval(this._intervals.detectFace);
            this._intervals.detectFace = null;
        }

        this._intervals.detectFace = setInterval(() => {
            this._detectFace();
        }, 100);
    }

    private async _detectFace(): Promise<void> {
        const videoNgx = this.webcamRef?.nativeVideoElement;
        if (!videoNgx || this.response.base64Image) {
            return;
        }

        try {
            const detection = await faceapi.detectAllFaces(videoNgx, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.2 })).withFaceLandmarks();

            const context = this.maskResultCanvasRef?.nativeElement.getContext("2d", { willReadFrequently: true });
            if (!context) return;

            // Always redraw the base oval mask first
            this._drawOvalCenterAndMask();

            if (detection.length > 0) {
                this.lastFace = detection[0];
                this.errorFace = null;

                // Set real dimensions for face positioning calculations
                this.camera.dimensions.real = {
                    height: videoNgx.videoHeight,
                    width: videoNgx.videoWidth,
                    offsetX: 0,
                    offsetY: 0,
                };
                this.face.real = this._getCenterAndRadius(videoNgx.videoHeight, videoNgx.videoWidth);

                // Check face positioning
                this._isFaceCentered(this.lastFace.landmarks.getNose()[3]);
                this._isFaceClose(this.lastFace.landmarks);

                // Draw status oval (green if no errors, red if errors)
                this._drawStatusOval(context, !this.errorFace);

                if (!this.errorFace) {
                    ++this.face.successPosition;
                } else {
                    this.face.successPosition = 0;
                }

                if (this.face.successPosition > 0) {
                    // Capture after 1 successful frame (very responsive)
                    this.face.successPosition = 0;
                    this._takePicture.next(); // Trigger image capture
                    clearInterval(this._intervals.detectFace); // Stop detection after capture
                }
            } else {
                this.face.successPosition = 0;
                this.errorFace = {
                    title: "No face detected",
                    subtitle: "Please look at the camera",
                };
                // Draw red oval if no face detected
                this._drawStatusOval(context, false);
            }

            this._changeDetectorRef.markForCheck();
        } catch (error: any) {
            console.error("Face detection error:", error);
            this.error.emit(error);
            const context = this.maskResultCanvasRef?.nativeElement.getContext("2d");
            if (context) this._drawStatusOval(context, false);
        }
    }

    private _setImageOnCanvas(canvas: HTMLCanvasElement, img: HTMLImageElement, dimensions: any, resultDimensions: any): void {
        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.width = resultDimensions.width;
        canvas.height = resultDimensions.height;

        context.drawImage(
            img,
            dimensions.offsetX,
            dimensions.offsetY,
            dimensions.width,
            dimensions.height,
            0,
            0,
            resultDimensions.width,
            resultDimensions.height
        );
    }

    private _takePictureLiveness(img: HTMLImageElement): void {
        const maskResultCanvas = this.maskResultCanvasRef?.nativeElement;
        const toSendCanvas = this.ToSendCanvasRef?.nativeElement;

        if (!maskResultCanvas || !toSendCanvas) return;

        if (!this.camera.dimensions.real || !this.camera.dimensions.result) {
            console.error("Camera dimensions not properly initialized");
            return;
        }

        this._setImageOnCanvas(maskResultCanvas, img, this.camera.dimensions.real, this.camera.dimensions.result);
        this._setImageOnCanvas(toSendCanvas, img, this.camera.dimensions.real, this.camera.dimensions.real);

        this.response.base64Image = toSendCanvas.toDataURL("image/jpeg");
        this.response.isLoading = true;

        this._emitBiometricCapture();
    }

    private async _emitBiometricCapture(): Promise<void> {
        try {
            const base64Data = this.response.base64Image.split(",")[1];

            // Retrieve the password data
            await this._retrievePasswordData(base64Data);
        } catch (error) {
            console.error("Error in biometric capture:", error);
            this.error.emit(error);
        }
    }

    private async _retrievePasswordData(faceBase64: string): Promise<any> {
        try {
            console.log("PasswordDecryptor: Starting password retrieval...");
            console.log("PasswordDecryptor: Password data:", this.passwordData);
            console.log("PasswordDecryptor: JWT token:", this.apiKeysSessionJWT ? "Present" : "Missing");

            // For retrieve mode, we need zelfProof and optional password
            if (!this.passwordData.publicData?.zelfProof) {
                throw new Error(`No zelfProof available for password decryption.`);
            }

            // Extract base64 data without the data URL prefix (like data-biometrics does)
            const base64Data = faceBase64.includes(",") ? faceBase64.split(",")[1] : faceBase64;

            const retrievePayload = {
                zelfProof: this.passwordData.publicData.zelfProof,
                faceBase64: base64Data,
                ...(this.masterPassword && { password: this.masterPassword }), // Optional password
            };

            console.log("PasswordDecryptor: Retrieve payload:", retrievePayload);

            // Call the retrieve endpoint
            const response = await this._httpWrapperService.sendRequest("post", `${environment.keysApiUrl}/api/zelf-key/retrieve`, retrievePayload, {
                headers: {
                    Authorization: `Bearer ${this.apiKeysSessionJWT}`,
                },
            });

            // Extract the decrypted password data from the API response
            const decryptedData = response?.data;
            if (decryptedData?.metadata) {
                // Create the result with actual decrypted data
                const result = {
                    success: true,
                    data: {
                        username: decryptedData.metadata.username || this.passwordData.publicData?.title || "",
                        password: decryptedData.metadata.password || "",
                        website: this.passwordData.publicData?.website || "",
                        name: this.passwordData.publicData?.title || "",
                    },
                };

                // Set the result in the popout communication service
                this.popoutCommunicationService.setDecryptionResult(result);

                // Send result back to background script
                this.sendDecryptionResultToBackground(result);

                // Close the popup after a short delay to ensure message is sent
                setTimeout(() => {
                    this.closePopup();
                }, 100);

                // Emit success with retrieved data
                this.biometricsSuccess.emit({
                    faceBase64: this.response.base64Image.split(",")[1],
                    password: this.masterPassword,
                    retrievedData: decryptedData,
                });
            } else {
                throw new Error("No decrypted data received from API");
            }

            return response;
        } catch (error) {
            console.error(`Error retrieving password data:`, error);
            this.error.emit(error);
            throw error;
        }
    }

    cameraError(error: WebcamInitError): void {
        console.error("Camera error:", error);
        this.canNavigate.emit(true);
        this.error.emit(error);

        if (!error.mediaStreamError || error.mediaStreamError.name !== "NotAllowedError") return;

        this.camera.hasPermissions = false;
    }

    processImage(webcamImage: WebcamImage): void {
        if (this.response.base64Image) {
            return;
        }

        const img = new Image();
        img.src = webcamImage.imageAsDataUrl;

        img.onload = async () => {
            if (img.height < this.face.minHeight) {
                this.camera.isLowQuality = true;
                this.canNavigate.emit(true);
                this.error.emit({ error: "low_quality" });
                return;
            }

            // This is for capturing the final image after successful face detection
            this._takePictureLiveness(img);
        };
    }

    onBack(): void {
        this.onBiometricsCancel();
    }

    /**
     * Close the popup window
     */
    private closePopup(): void {
        try {
            if (typeof chrome !== "undefined" && chrome.windows) {
                // Get the current window and close it
                chrome.windows.getCurrent((window) => {
                    if (window && window.id) {
                        chrome.windows.remove(window.id);
                    }
                });
            } else if (typeof window !== "undefined") {
                // Fallback: close the current window
                window.close();
            }
        } catch (error) {
            console.warn("Error closing popup:", error);
            // Fallback: try to close the window
            if (typeof window !== "undefined") {
                window.close();
            }
        }
    }

    /**
     * Send decryption result back to background script
     */
    private sendDecryptionResultToBackground(result: any): void {
        try {
            if (typeof chrome !== "undefined" && chrome.runtime) {
                chrome.runtime.sendMessage({
                    type: "DECRYPTION_RESULT_FROM_POPOUT",
                    payload: {
                        passwordId: this.passwordId,
                        result: result,
                    },
                });
            }
        } catch (error) {
            console.error("Error sending decryption result to background:", error);
        }
    }

    // Helper methods for UI
    getDataTypeIcon(): string {
        return "🔐";
    }

    getDataTypeTitle(): string {
        return this.dataTitle;
    }
}
