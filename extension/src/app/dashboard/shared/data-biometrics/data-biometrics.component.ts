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
import { WebcamComponent, WebcamImage, WebcamInitError, WebcamModule } from "ngx-webcam";
import { Observable, Subject, takeUntil } from "rxjs";

import { HttpWrapperService } from "app/http-wrapper.service";
import { Wallet } from "app/wallet";
import { ZelfLoaderComponent } from "app/zelf-loader/zelf-loader.component";
import { environment } from "environments/environment";
import { DataPassingService } from "../../../services/data-passing.service";
import { WalletService } from "../../../wallet.service";

export interface BiometricData {
    faceBase64: string;
    password?: string;
    retrievedData?: any;
}

@Component({
    selector: "app-data-biometrics",
    standalone: true,
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        RouterModule,
        TranslocoModule,
        WebcamModule,
        ZelfLoaderComponent,
    ],
    templateUrl: "./data-biometrics.component.html",
    styleUrls: ["./data-biometrics.component.scss"],
})
export class DataBiometricsComponent implements OnInit, OnDestroy {
    @ViewChild("maskResult", { static: false }) public maskResultCanvasRef: ElementRef | undefined;
    @ViewChild("toSend", { static: false }) public ToSendCanvasRef: ElementRef | undefined;
    @ViewChild("webcam", { static: false }) public webcamRef?: WebcamComponent;
    @ViewChild("dataBiometricsContainer", { static: false }) public dataBiometricsContainerRef?: ElementRef;

    @Input() isDecryptMode: boolean = false;
    @Input() itemData: any = {};

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
            video: { width: 0, height: 0, max: { width: 800, height: 600 } },
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
        minHeight: 150, // Reduced from 200
        minPixels: 150, // Reduced from 200
        successPosition: 0,
        threshold: 0.15, // Reduced from 0.25 (lower = less strict)
    };

    response = {
        base64Image: "",
        isLoading: false,
    };
    apiKeysSessionJWT: string;
    errorFace: any = null;
    lastFace: any;
    aspectRatio = 0.5625; // 16:9 aspect ratio for landscape
    masterPassword: string = "";

    // Error handling
    apiError: string = "";
    hasApiError: boolean = false;

    // Category-specific properties
    dataType: string = "";
    dataTitle: string = "";
    wallet!: Wallet;
    hasMasterPassword!: boolean;
    shareables!: any;
    useMasterPassword: boolean = false;

    // Active Liveness Detection properties
    livenessDetection = {
        isActive: false,
        currentStep: 0,
        totalSteps: 3,
        steps: [
            { name: "Center", angle: 0, tolerance: 15, completed: false },
            { name: "Left", angle: -30, tolerance: 15, completed: false },
            { name: "Right", angle: 30, tolerance: 15, completed: false },
        ],
        faceAngles: [] as number[],
        requiredHoldTime: 1000, // 1 second to hold position
        holdStartTime: 0,
        isHolding: false,
    };

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _httpWrapperService: HttpWrapperService,
        private _walletService: WalletService,
        private _router: Router,
        private dataPassingService: DataPassingService
    ) {
        this.apiKeysSessionJWT = "";

        this.shareables = {
            wallet: {},
        };
    }

    async ngOnInit(): Promise<void> {
        // First, get the dataType from the route path
        const currentPath = this._router.url;

        if (currentPath.includes("/notes/")) {
            this.dataType = "notes";
            this.dataTitle = "Note";
        } else if (currentPath.includes("/passwords/")) {
            this.dataType = "passwords";
            this.dataTitle = "Password";
        } else if (currentPath.includes("/payment-cards/")) {
            this.dataType = "payment-cards";
            this.dataTitle = "Payment Card";
        }

        // Get data from service instead of query params
        this._getDataFromService();

        await this._setWallet();

        // Initialize ZelfKey session
        this.initZelfKeySession();

        // Initialize biometric verification
        this._initializeBiometrics();
    }

    private async _setWallet(): Promise<any> {
        const wallet = await this._walletService.getFirstWalletFromStorage();

        if (!wallet?.name) {
            this._router.navigate(["/welcome"]);

            return;
        }

        this.shareables.wallet = wallet;

        this.wallet = this.shareables.wallet;

        this.hasMasterPassword = wallet.hasPassword || false;

        this._changeDetectorRef.detectChanges();
    }

    /**
     * Get data from the data passing service or input
     */
    private _getDataFromService(): void {
        // If itemData is provided as input (for decrypt mode), use it
        if (this.itemData && Object.keys(this.itemData).length > 0) {
            // Use input itemData
        } else {
            // Otherwise, get data from service based on data type
            const serviceData = this.dataPassingService.getData(this.dataType);

            if (serviceData) {
                this.itemData = serviceData;
            } else {
                this.itemData = {};
            }
        }

        // Set master password if available
        if ((this.dataType === "notes" || this.dataType === "passwords") && this.itemData.masterPassword) {
            this.masterPassword = this.itemData.masterPassword;
        }
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
        // The wallet service now caches the JWT token
        await this._walletService.initZelfKeySession();

        // Get the cached token
        const jwt = await this._walletService.getZelfKeyJWT();

        if (jwt) {
            this.apiKeysSessionJWT = jwt;
        }
    }

    /**
     * Handle successful biometrics verification in decrypt mode
     */
    onBiometricsSuccess(faceBase64: string, password?: string): void {
        if (this.isDecryptMode) {
            // Stop camera before emitting success
            this._stopCamera();
            this.biometricsSuccess.emit({
                faceBase64,
                password: this.masterPassword || password,
            });
        }
    }

    /**
     * Handle biometrics cancellation in both decrypt and create modes
     */
    onBiometricsCancel(): void {
        // Stop camera before closing
        this._stopCamera();
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

    /**
     * Toggle master password input visibility
     */
    toggleMasterPassword(): void {
        this.useMasterPassword = !this.useMasterPassword;

        if (!this.useMasterPassword) {
            this.masterPassword = ""; // Clear password when toggling off
        }
    }

    /**
     * Clear API error and retry
     */
    clearApiError(): void {
        this.apiError = "";
        this.hasApiError = false;
        this.response.isLoading = false;
        this.response.base64Image = "";
        this._changeDetectorRef.markForCheck();

        // Restart face detection
        this._startFaceDetectionInterval();
    }

    /**
     * Start active liveness detection
     */
    startLivenessDetection(): void {
        this.livenessDetection.isActive = true;
        this.livenessDetection.currentStep = 0;
        this.livenessDetection.steps.forEach((step) => (step.completed = false));
        this.livenessDetection.faceAngles = [];
        this._changeDetectorRef.markForCheck();
    }

    private async _initializeBiometrics(): Promise<void> {
        try {
            // Always wait for the wallet service to load the models
            this._walletService.faceapi$.pipe(takeUntil(this.unsubscriber$)).subscribe(async (isLoaded) => {
                this.canNavigate.emit(false);

                this.camera.isLoading = !isLoaded;

                if (!isLoaded) return;

                await this._setMaxVideoDimensions();
                this._setupResizeListener();
                this._startNgxVideoInterval();
            });
        } catch (error) {
            console.error("❌ Error initializing biometrics:", error);
            this.error.emit(error);
        }
    }

    private _setupResizeListener(): void {
        // Use the exact same debounced approach as working version
        let resizeTimeout: any;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(async () => {
                this.canNavigate.emit(false);
                await this._setMaxVideoDimensions();
                this._startNgxVideoInterval();
            }, 300);
        });
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
        const actualWidth = videoElement.clientWidth;
        const actualHeight = videoElement.clientHeight;

        this.camera.dimensions.video.height = actualHeight;
        this.camera.dimensions.video.width = actualWidth;
        this.camera.dimensions.result = { height: 0, width: 0, offsetX: 0, offsetY: 0 };

        this._setResultDimensions("result", actualHeight, actualWidth);

        this.face.video = this._getCenterAndRadius(actualHeight, actualWidth);

        const maskResultCanvas = this.maskResultCanvasRef?.nativeElement;

        if (maskResultCanvas) {
            maskResultCanvas.style.marginLeft = `0px`;
            maskResultCanvas.style.marginTop = `0px`;
        }

        this._changeDetectorRef.markForCheck();
    }

    private _calculateDisplayDimensions() {
        // Get the bottom sheet container
        const bottomSheetElement = document.querySelector(".zelf-bottom-sheet-biometrics");
        if (!bottomSheetElement) return { isLandscape: false, width: 0, height: 0 };

        // Get exact container dimensions
        const containerHeight = bottomSheetElement.clientHeight;
        const containerWidth = bottomSheetElement.clientWidth;

        // Always use landscape calculation with conservative height
        const availableWidth = containerWidth * 0.9; // 90% of width
        const availableHeight = containerHeight * 0.7; // 70% of height

        const targetAspectRatio = 16 / 9;

        // Always calculate as landscape - start with height and calculate width
        let finalHeight = availableHeight;
        let finalWidth = finalHeight * targetAspectRatio;

        // If width exceeds available space, scale down based on width
        if (finalWidth > availableWidth) {
            finalWidth = availableWidth;
            finalHeight = finalWidth / targetAspectRatio;
        }

        // Round to prevent subpixel rendering issues
        finalWidth = Math.floor(finalWidth);
        finalHeight = Math.floor(finalHeight);

        return {
            isLandscape: true, // Always treat as landscape
            width: finalWidth,
            height: finalHeight,
        };
    }

    private async _setMaxVideoDimensions(): Promise<void> {
        const displayDimensions = this._calculateDisplayDimensions();

        this.camera.isLoading = true;
        this._changeDetectorRef.markForCheck();

        return await new Promise((resolve) => {
            setTimeout(() => {
                // Set the video dimensions directly
                this.camera.dimensions.video.width = displayDimensions.width;
                this.camera.dimensions.video.height = displayDimensions.height;
                this.camera.dimensions.video.max = {
                    width: displayDimensions.width,
                    height: displayDimensions.height,
                };

                this.camera.configuration = {
                    height: { ideal: 1080 }, // Always use landscape height
                    width: { ideal: 1920 }, // Always use landscape width
                    facingMode: "user",
                };

                this.camera.dimensions.result = { height: 0, width: 0, offsetX: 0, offsetY: 0 };
                this.camera.isLoading = false;

                this.webcamRef?.videoResize();

                this._changeDetectorRef.markForCheck();

                resolve();
            });
        });
    }

    private _getCenterAndRadius(
        height: number,
        width: number
    ): { center: { x: number; y: number }; radius: { x: number; y: number }; margin: { x: number; y: number } } {
        const aspectRatio = 0.75; // Match working version

        const data = {
            center: {
                x: width / 2,
                y: height / 2,
            },
            radius: {
                x: 0,
                y: 0,
            },
            margin: {
                y: height * 0.05,
                x: 0,
            },
        };

        data.margin.x = data.margin.y * 0.8;
        data.radius.y = height * 0.42;
        data.radius.x = data.radius.y * aspectRatio;

        if (data.radius.x * 2 >= width) {
            data.radius.x = width * 0.48;
            data.radius.y = data.radius.x / aspectRatio;
        }

        return data;
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
        const videoDim = this.camera.dimensions.video;
        const maskResultCanvas = this.maskResultCanvasRef?.nativeElement;

        if (!maskResultCanvas || !videoDim.width || !videoDim.height) return;

        maskResultCanvas.height = videoDim.height;
        maskResultCanvas.width = videoDim.width;

        const ctx: CanvasRenderingContext2D = maskResultCanvas.getContext("2d");

        if (!ctx) return;

        ctx.clearRect(0, 0, videoDim.width || 0, videoDim.height || 0);

        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fillRect(0, 0, videoDim.width || 0, videoDim.height || 0);
        ctx.globalCompositeOperation = "destination-out";

        const { center, radius } = this.face.video || { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 } };

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.beginPath();
        ctx.ellipse(center?.x, center?.y, radius.x, radius.y, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        ctx.globalCompositeOperation = "source-over";
    }

    private _drawStatusOval(ctx: any, isOk: boolean): void {
        const { center, radius } = this.face.video || { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 } };

        ctx.beginPath();
        ctx.ellipse(center.x, center.y, radius.x, radius.y, 0, 0, 2 * Math.PI);
        ctx.lineWidth = 5;
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
        }, 200); // Reduced from 100ms to 200ms for better performance
    }

    private async _detectFace(): Promise<void> {
        const videoNgx = this.webcamRef?.nativeVideoElement;
        if (!videoNgx || this.response.base64Image) {
            return;
        }

        // Early return if video is not ready
        if (videoNgx.readyState !== 4) {
            return;
        }

        try {
            // Use higher confidence threshold for better performance
            const detection = await faceapi.detectAllFaces(videoNgx, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.4 })).withFaceLandmarks();

            const context = this.maskResultCanvasRef?.nativeElement.getContext("2d", { willReadFrequently: true });
            if (!context) return;

            if (detection.length > 0) {
                this.lastFace = detection[0];
                this.errorFace = null;

                // Set real dimensions for face positioning calculations (only if changed)
                if (!this.camera.dimensions.real.width || this.camera.dimensions.real.width !== videoNgx.videoWidth) {
                    this.camera.dimensions.real = {
                        height: videoNgx.videoHeight,
                        width: videoNgx.videoWidth,
                        offsetX: 0,
                        offsetY: 0,
                    };
                    this.face.real = this._getCenterAndRadius(videoNgx.videoHeight, videoNgx.videoWidth);
                    // Only redraw mask when dimensions change
                    this._drawOvalCenterAndMask();
                }

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
                // Redraw mask and draw red oval if no face detected
                this._drawOvalCenterAndMask();
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

            if (this.isDecryptMode) {
                // In decrypt mode, retrieve the data based on category
                await this._retrieveDataByCategory(base64Data);
            } else {
                // In create mode, store the data based on category
                await this._storeDataByCategory(base64Data);
            }
        } catch (error) {
            console.error("Error in biometric capture:", error);
            // Reset loading state
            this.response.isLoading = false;
            this.response.base64Image = "";
            this._changeDetectorRef.markForCheck();
            this.error.emit(error);
        }
    }

    private async _storeDataByCategory(faceBase64: string): Promise<void> {
        try {
            let response: any;

            // Get the correct data source based on data type
            const dataSource = this._getDataSource();

            // Safety check: Ensure we have data before proceeding
            if (!dataSource || Object.keys(dataSource).length === 0) {
                throw new Error(`No data available for ${this.dataType}. Cannot proceed with storage.`);
            }

            const walletKeys = {
                zelfProof: this.wallet.zelfProof,
                masterPassword: this.wallet.hasPassword ? dataSource.masterPassword : undefined,
            };

            switch (this.dataType) {
                case "notes":
                    // Store note data
                    const notePayload = {
                        title: dataSource.title,
                        keyValuePairs: dataSource.keyValuePairs,
                        folder: dataSource.folder,
                        insideFolder: dataSource.insideFolder,
                        faceBase64: faceBase64,
                        ...walletKeys,
                    };

                    response = await this._httpWrapperService.sendRequest("post", `${environment.keysApiUrl}/api/zelf-key/store/notes`, notePayload, {
                        headers: {
                            Authorization: `Bearer ${this.apiKeysSessionJWT}`,
                        },
                    });
                    break;

                case "passwords":
                    // Store password data
                    const passwordPayload = {
                        website: dataSource.url,
                        username: dataSource.email,
                        password: dataSource.password,
                        notes: dataSource.notes,
                        folder: dataSource.folder,
                        insideFolder: dataSource.insideFolder,
                        name: dataSource.title,
                        faceBase64: faceBase64,
                        ...walletKeys,
                    };

                    response = await this._httpWrapperService.sendRequest(
                        "post",
                        `${environment.keysApiUrl}/api/zelf-key/store/password`,
                        passwordPayload,
                        {
                            headers: {
                                Authorization: `Bearer ${this.apiKeysSessionJWT}`,
                            },
                        }
                    );
                    break;

                case "payment-cards":
                    // Store payment card data
                    const cardPayload = {
                        cardName: dataSource.cardName,
                        cardNumber: dataSource.cardNumber,
                        expiryMonth: dataSource.expiryMonth,
                        expiryYear: dataSource.expiryYear,
                        folder: dataSource.folder,
                        insideFolder: dataSource.insideFolder,
                        cvv: dataSource.cvv,
                        bankName: dataSource.bankName,
                        faceBase64: faceBase64,
                        ...walletKeys,
                    };

                    response = await this._httpWrapperService.sendRequest(
                        "post",
                        `${environment.keysApiUrl}/api/zelf-key/store/credit-card`,
                        cardPayload,
                        {
                            headers: {
                                Authorization: `Bearer ${this.apiKeysSessionJWT}`,
                            },
                        }
                    );

                    break;

                default:
                    throw new Error(`Unsupported data type: ${this.dataType}`);
            }

            this.imageCaptured.emit(this.response.base64Image);

            // Store the API result in the service
            await this.dataPassingService.storeResult(this.dataType, response);

            // Navigate to result page based on category
            await this._navigateToResult(response);
        } catch (error: any) {
            console.error(`Error storing ${this.dataType} data:`, error);

            // Reset loading state
            this.response.isLoading = false;
            this._changeDetectorRef.markForCheck();

            // Extract user-friendly error message
            let errorMessage = `Error storing ${this.dataType}`;

            if (error?.error?.error) {
                errorMessage = error.error.error;
            } else if (error?.error?.message) {
                errorMessage = error.error.message;
            } else if (error?.message) {
                errorMessage = error.message;
            }

            // Set error state for display
            this.apiError = errorMessage;
            this.hasApiError = true;

            // Create user-friendly error object
            const userError = {
                message: errorMessage,
                type: "storage_error",
                originalError: error,
            };

            this.error.emit(userError);
        }
    }

    private async _retrieveDataByCategory(faceBase64: string): Promise<any> {
        try {
            // Get the correct data source based on data type
            const dataSource = this._getDataSource();

            // For retrieve mode, we need zelfProof and optional password
            if (!dataSource.publicData.zelfProof) {
                throw new Error(`No zelfProof available for ${this.dataType}. Cannot proceed with retrieval.`);
            }

            const retrievePayload = {
                zelfProof: dataSource.publicData.zelfProof,
                faceBase64: faceBase64,
                ...(this.useMasterPassword && this.masterPassword && { password: this.masterPassword }), // Optional password
            };

            // Call the retrieve endpoint
            const response = await this._httpWrapperService.sendRequest("post", `${environment.keysApiUrl}/api/zelf-key/retrieve`, retrievePayload, {
                headers: {
                    Authorization: `Bearer ${this.apiKeysSessionJWT}`,
                },
            });

            // Store the retrieved data in the service
            await this.dataPassingService.storeResult(this.dataType, response);

            // Navigate to result page for retrieved data
            await this._navigateToResult(response);

            return response;
        } catch (error: any) {
            console.error(`Error retrieving ${this.dataType} data:`, error);

            // Reset loading state
            this.response.isLoading = false;
            this._changeDetectorRef.markForCheck();

            // Extract user-friendly error message
            let errorMessage = `Error retrieving ${this.dataType}`;

            if (error?.error?.error) {
                errorMessage = error.error.error;
            } else if (error?.error?.message) {
                errorMessage = error.error.message;
            } else if (error?.message) {
                errorMessage = error.message;
            }

            // Set error state for display
            this.apiError = errorMessage;
            this.hasApiError = true;

            // Create user-friendly error object
            const userError = {
                message: errorMessage,
                type: "retrieval_error",
                originalError: error,
            };

            this.error.emit(userError);
            throw userError;
        }
    }

    private async _navigateToResult(apiResponse?: any): Promise<void> {
        // Stop camera before navigating
        this._stopCamera();

        // Get the correct data source for navigation
        const dataSource = this._getDataSource();

        // Determine if this is store or retrieve mode
        const isRetrieveMode = this.isDecryptMode;

        const messageText = isRetrieveMode ? "Note retrieved successfully" : "Note stored successfully";

        // For decrypt mode, emit result instead of navigating
        if (this.isDecryptMode) {
            this.biometricsSuccess.emit({
                faceBase64: this.response.base64Image.split(",")[1],
                password: this.masterPassword,
                retrievedData: apiResponse?.data,
            });
            return;
        }

        // Switch case for different categories
        switch (this.dataType) {
            case "notes":
                this._router.navigate(["/dashboard/notes/result"], {
                    queryParams: {
                        result: encodeURIComponent(
                            JSON.stringify({
                                success: true,
                                message: messageText,
                                publicData: {
                                    title: dataSource.title || apiResponse?.data?.title,
                                    type: "notes",
                                    timestamp: new Date().toISOString(),
                                },
                                zelfProof: apiResponse?.data?.zelfProof || "sample_proof_string",
                                zelfQR: apiResponse?.data?.zelfQR || "data:image/png;base64,sample_qr_code",
                                // Include retrieved data if in retrieve mode
                                ...(isRetrieveMode && { retrievedData: apiResponse?.data }),
                            })
                        ),
                    },
                });
                break;

            case "passwords":
                this._router.navigate(["/dashboard/passwords/result"], {
                    queryParams: {
                        result: encodeURIComponent(
                            JSON.stringify({
                                success: true,
                                message: isRetrieveMode ? "Password retrieved successfully" : "Password stored successfully",
                                publicData: {
                                    title: dataSource.title || apiResponse?.data?.title,
                                    type: "password",
                                    timestamp: new Date().toISOString(),
                                },
                                zelfProof: apiResponse?.data?.zelfProof || "sample_proof_string",
                                zelfQR: apiResponse?.data?.zelfQR || "data:image/png;base64,sample_qr_code",
                                // Include retrieved data if in retrieve mode
                                ...(isRetrieveMode && { retrievedData: apiResponse?.data }),
                            })
                        ),
                    },
                });
                break;

            case "payment-cards":
                // Parse the card data from the JSON string in publicData.card
                let parsedCardData: any = {};
                if (apiResponse?.data?.publicData?.card) {
                    try {
                        parsedCardData = JSON.parse(apiResponse.data.publicData.card);
                    } catch (error) {
                        console.error("Error parsing card data:", error);
                    }
                }

                await this.dataPassingService.storeResult("payment-cards", apiResponse);

                this._router.navigate(["/dashboard/payment-cards/result"]);
                break;

            default:
                this._router.navigate(["/dashboard"]);
                break;
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

            // This is for capturing the final image after successful liveness detection
            this._takePictureLiveness(img);
        };
    }

    onBack(): void {
        if (this.isDecryptMode) {
            // In decrypt mode, emit cancel event
            this.onBiometricsCancel();
        } else {
            // In create mode, emit cancel event to close modal and return to form
            this.onBiometricsCancel();
        }
    }

    private _navigateBackToForm(): void {
        // Get the correct data source for navigation back
        const dataSource = this._getDataSource();

        // Switch case for different categories
        switch (this.dataType) {
            case "notes":
                this._router.navigate(["/dashboard/notes/new"], {
                    queryParams: { noteData: encodeURIComponent(JSON.stringify(dataSource)) },
                });
                break;

            case "passwords":
                this._router.navigate(["/dashboard/passwords/new"], {
                    queryParams: { passwordData: encodeURIComponent(JSON.stringify(dataSource)) },
                });
                break;

            case "payment-cards":
                this._router.navigate(["/dashboard/payment-cards/new"], {
                    queryParams: { cardData: encodeURIComponent(JSON.stringify(dataSource)) },
                });
                break;

            default:
                // Fallback to dashboard
                this._router.navigate(["/dashboard"]);
                break;
        }
    }

    /**
     * Get the correct data source based on data type
     */
    private _getDataSource(): any {
        // All data now comes from itemData (populated from service)
        return this.itemData;
    }

    // Helper methods for UI
    getDataTypeIcon(): string {
        switch (this.dataType) {
            case "passwords":
                return "🔐";
            case "notes":
                return "📝";
            case "payment-cards":
                return "💳";
            default:
                return "📄";
        }
    }

    getDataTypeTitle(): string {
        return this.dataTitle;
    }

    getHumanReadableItemInfo(): string {
        if (!this.itemData) return "";

        switch (this.dataType) {
            case "passwords":
                // Show website hostname or username
                if (this.itemData.website) {
                    try {
                        const url = new URL(this.itemData.website);
                        return url.hostname;
                    } catch {
                        return this.itemData.website;
                    }
                }
                return this.itemData.username || "Password";

            case "payment-cards":
                // Show last 4 digits of card number
                if (this.itemData.cardNumber) {
                    const cardNumber = this.itemData.cardNumber.replace(/\s/g, "");
                    return `**** **** **** ${cardNumber.slice(-4)}`;
                }
                return this.itemData.cardName || "Payment Card";

            case "notes":
                // Show note title
                return this.itemData.title || "Note";

            default:
                return this.dataTitle;
        }
    }
}
