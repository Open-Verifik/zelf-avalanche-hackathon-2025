import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild, ElementRef, ChangeDetectorRef, Renderer2, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { WebcamComponent, WebcamImage, WebcamInitError, WebcamModule } from "ngx-webcam";
import { Subject, takeUntil, Observable } from "rxjs";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ZelfLoaderComponent } from "app/zelf-loader/zelf-loader.component";
import { HttpWrapperService } from "app/http-wrapper.service";
import { MediaStreamService } from "app/services/media-stream.service";
import { WalletService } from "../../wallet.service";
import { environment } from "environments/environment";
import * as faceapi from "@vladmandic/face-api";
import { ChromeService } from "../../chrome.service";
import { DataPassingService } from "../../services/data-passing.service";

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
		FormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		TranslocoModule,
		WebcamModule,
		ZelfLoaderComponent,
		RouterModule,
	],
	templateUrl: "./data-biometrics.component.html",
	styleUrls: ["./data-biometrics.component.scss"],
})
export class DataBiometricsComponent implements OnInit, OnDestroy {
	@ViewChild("maskResult", { static: false }) public maskResultCanvasRef: ElementRef | undefined;
	@ViewChild("toSend", { static: false }) public ToSendCanvasRef: ElementRef | undefined;
	@ViewChild("webcam", { static: false }) public webcamRef?: WebcamComponent;

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
			width: { ideal: 800 },
			height: { ideal: 600 },
		},
	};

	face = {
		video: { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 }, margin: { x: 0, y: 0 } },
		real: { center: { x: 0, y: 0 }, radius: { x: 0, y: 0 }, margin: { x: 0, y: 0 } },
		minHeight: 200,
		minPixels: 200,
		successPosition: 0,
		threshold: 0.25,
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

	// Category-specific properties
	dataType: string = "";
	dataTitle: string = "";
	useMasterPassword: boolean = false;

	// Make Math and Date available in template
	Math = Math;
	Date = Date;

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
		private _mediaStreamService: MediaStreamService,
		private _renderer: Renderer2,
		private _translocoService: TranslocoService,
		private _walletService: WalletService,
		private _router: Router,
		private _route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {
		this.apiKeysSessionJWT = "";
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
		} else if (currentPath.includes("/addresses/")) {
			this.dataType = "addresses";
			this.dataTitle = "Address";
		} else if (currentPath.includes("/payment-cards/")) {
			this.dataType = "payment-cards";
			this.dataTitle = "Payment Card";
		} else if (currentPath.includes("/bank-accounts/")) {
			this.dataType = "bank-accounts";
			this.dataTitle = "Bank Account";
		}

		// Get data from service instead of query params
		this._getDataFromService();

		// Initialize ZelfKey session
		this.initZelfKeySession();

		// Initialize biometric verification
		this._initializeBiometrics();
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
		if (this._intervals.detectFace) {
			clearInterval(this._intervals.detectFace);
		}
		if (this._intervals.checkNgxVideo) {
			clearInterval(this._intervals.checkNgxVideo);
		}
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
		const jwt = this._walletService.getZelfKeyJWT();

		if (jwt) {
			this.apiKeysSessionJWT = jwt;
		}
	}

	/**
	 * Handle successful biometrics verification in decrypt mode
	 */
	onBiometricsSuccess(faceBase64: string, password?: string): void {
		if (this.isDecryptMode) {
			this.biometricsSuccess.emit({
				faceBase64,
				password: this.masterPassword || password,
			});
		}
	}

	/**
	 * Handle biometrics cancellation in decrypt mode
	 */
	onBiometricsCancel(): void {
		if (this.isDecryptMode) {
			this.biometricsCancel.emit();
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
	 * Start active liveness detection
	 */
	startLivenessDetection(): void {
		this.livenessDetection.isActive = true;
		this.livenessDetection.currentStep = 0;
		this.livenessDetection.steps.forEach((step) => (step.completed = false));
		this.livenessDetection.faceAngles = [];
		this._changeDetectorRef.markForCheck();
	}

	/**
	 * Calculate face angle from face landmarks
	 */
	private _calculateFaceAngle(face: any): number {
		if (!face.landmarks || face.landmarks.length < 68) return 0;

		// Use eye landmarks to calculate head rotation
		const leftEye = face.landmarks.slice(36, 42); // Left eye points
		const rightEye = face.landmarks.slice(42, 48); // Right eye points

		// Calculate center of each eye
		const leftEyeCenter = {
			x: leftEye.reduce((sum: number, point: any) => sum + point.x, 0) / leftEye.length,
			y: leftEye.reduce((sum: number, point: any) => sum + point.y, 0) / leftEye.length,
		};

		const rightEyeCenter = {
			x: rightEye.reduce((sum: number, point: any) => sum + point.x, 0) / rightEye.length,
			y: rightEye.reduce((sum: number, point: any) => sum + point.y, 0) / rightEye.length,
		};

		// Calculate angle based on eye positions
		const eyeDistance = Math.sqrt(Math.pow(rightEyeCenter.x - leftEyeCenter.x, 2) + Math.pow(rightEyeCenter.y - leftEyeCenter.y, 2));

		// Normalize and convert to degrees
		const normalizedDistance = (rightEyeCenter.x - leftEyeCenter.x) / eyeDistance;
		const angle = Math.asin(normalizedDistance) * (180 / Math.PI);

		return angle;
	}

	/**
	 * Check if face is at the correct angle for current step
	 */
	private _isFaceAtCorrectAngle(face: any): boolean {
		const currentStep = this.livenessDetection.steps[this.livenessDetection.currentStep];
		const faceAngle = this._calculateFaceAngle(face);

		// Check if face is within tolerance of required angle
		const angleDiff = Math.abs(faceAngle - currentStep.angle);
		return angleDiff <= currentStep.tolerance;
	}

	/**
	 * Update liveness detection progress
	 */
	private _updateLivenessProgress(face: any): void {
		if (!this.livenessDetection.isActive) return;

		const currentStep = this.livenessDetection.steps[this.livenessDetection.currentStep];

		if (this._isFaceAtCorrectAngle(face)) {
			if (!this.livenessDetection.isHolding) {
				this.livenessDetection.isHolding = true;
				this.livenessDetection.holdStartTime = Date.now();
			}

			// Check if held long enough
			const holdTime = Date.now() - this.livenessDetection.holdStartTime;
			if (holdTime >= this.livenessDetection.requiredHoldTime) {
				// Mark step as completed
				currentStep.completed = true;
				this.livenessDetection.faceAngles.push(this._calculateFaceAngle(face));

				// Move to next step
				if (this.livenessDetection.currentStep < this.livenessDetection.totalSteps - 1) {
					this.livenessDetection.currentStep++;
					this.livenessDetection.isHolding = false;
				} else {
					// All steps completed
					this._onLivenessDetectionComplete();
				}

				this._changeDetectorRef.markForCheck();
			}
		} else {
			// Reset holding if face moves away
			this.livenessDetection.isHolding = false;
		}
	}

	/**
	 * Handle liveness detection completion
	 */
	private _onLivenessDetectionComplete(): void {
		this.livenessDetection.isActive = false;
		// Capture the final image and proceed
		this._captureFinalImage();
	}

	/**
	 * Capture final image after liveness detection
	 */
	private _captureFinalImage(): void {
		if (this.webcamRef?.nativeVideoElement) {
			const video = this.webcamRef.nativeVideoElement;
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");

			if (ctx) {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				ctx.drawImage(video, 0, 0);

				const img = new Image();
				img.onload = () => {
					this._takePictureLiveness(img);
				};
				img.src = canvas.toDataURL("image/jpeg");
			}
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
		const maxWidth = 800;
		const maxHeight = 600;

		// Set initial video dimensions
		this.camera.dimensions.video.width = maxWidth;
		this.camera.dimensions.video.height = maxHeight;

		// Set result dimensions
		this.camera.dimensions.result.width = maxWidth;
		this.camera.dimensions.result.height = maxHeight;

		// Initialize face dimensions
		this.face.video = this._getCenterAndRadius(maxHeight, maxWidth);

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
			y: height * 0.42,
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

				// Update liveness detection if active
				if (this.livenessDetection.isActive) {
					this._updateLivenessProgress(this.lastFace);
				} else if (this.face.successPosition > 2) {
					// Capture after 3 successful frames (original behavior)
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

			console.log("🔍 DEBUG - Biometric capture mode:", this.isDecryptMode ? "DECRYPT" : "STORE");
			console.log("🔍 DEBUG - Data type:", this.dataType);

			if (this.isDecryptMode) {
				// In decrypt mode, retrieve the data based on category
				console.log("🔍 DEBUG - Calling retrieve method");
				await this._retrieveDataByCategory(base64Data);
			} else {
				// In create mode, store the data based on category
				console.log("🔍 DEBUG - Calling store method");
				await this._storeDataByCategory(base64Data);
			}
		} catch (error) {
			console.error("Error in biometric capture:", error);
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

			switch (this.dataType) {
				case "notes":
					// Store note data
					const notePayload = {
						title: dataSource.title,
						keyValuePairs: dataSource.keyValuePairs,
						folder: dataSource.folder,
						insideFolder: dataSource.insideFolder,
						faceBase64: faceBase64,
						...(this.useMasterPassword && this.masterPassword && { password: this.masterPassword }), // Optional password
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
						name: dataSource.title,
						faceBase64: faceBase64,
						...(this.useMasterPassword && this.masterPassword && { masterPassword: this.masterPassword }), // Optional master password
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

				case "addresses":
					// Store address data
					const addressPayload = {
						title: dataSource.title,
						address: dataSource.address,
						city: dataSource.city,
						state: dataSource.state,
						zipCode: dataSource.zipCode,
						country: dataSource.country,
						faceBase64: faceBase64,
					};

					response = await this._httpWrapperService.sendRequest(
						"post",
						`${environment.keysApiUrl}/api/zelf-key/store/addresses`,
						addressPayload,
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
						title: dataSource.title,
						cardNumber: dataSource.cardNumber,
						expiryDate: dataSource.expiryDate,
						cvv: dataSource.cvv,
						cardholderName: dataSource.cardholderName,
						faceBase64: faceBase64,
					};

					response = await this._httpWrapperService.sendRequest(
						"post",
						`${environment.keysApiUrl}/api/zelf-key/store/payment-cards`,
						cardPayload,
						{
							headers: {
								Authorization: `Bearer ${this.apiKeysSessionJWT}`,
							},
						}
					);
					break;

				case "bank-accounts":
					// Store bank account data
					const accountPayload = {
						title: dataSource.title,
						accountNumber: dataSource.accountNumber,
						routingNumber: dataSource.routingNumber,
						bankName: dataSource.bankName,
						accountType: dataSource.accountType,
						faceBase64: faceBase64,
					};

					response = await this._httpWrapperService.sendRequest(
						"post",
						`${environment.keysApiUrl}/api/zelf-key/store/bank-accounts`,
						accountPayload,
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
			this._navigateToResult(response);
		} catch (error) {
			console.error(`Error storing ${this.dataType} data:`, error);
			this.error.emit(error);
		}
	}

	private async _retrieveDataByCategory(faceBase64: string): Promise<any> {
		try {
			console.log("🔍 DEBUG - Starting retrieve process");

			// Get the correct data source based on data type
			const dataSource = this._getDataSource();
			console.log("🔍 DEBUG - Data source for retrieve:", dataSource);

			// For retrieve mode, we need zelfProof and optional password
			if (!dataSource.publicData.zelfProof) {
				console.error("❌ DEBUG - No zelfProof found in data source");
				throw new Error(`No zelfProof available for ${this.dataType}. Cannot proceed with retrieval.`);
			}

			const retrievePayload = {
				zelfProof: dataSource.publicData.zelfProof,
				faceBase64: faceBase64,
				...(this.useMasterPassword && this.masterPassword && { password: this.masterPassword }), // Optional password
			};

			console.log("🔍 DEBUG - Retrieve payload:", retrievePayload);
			console.log("🔍 DEBUG - Calling retrieve endpoint:", `${environment.keysApiUrl}/api/zelf-key/retrieve`);

			// Call the retrieve endpoint
			const response = await this._httpWrapperService.sendRequest("post", `${environment.keysApiUrl}/api/zelf-key/retrieve`, retrievePayload, {
				headers: {
					Authorization: `Bearer ${this.apiKeysSessionJWT}`,
				},
			});

			// Store the retrieved data in the service
			await this.dataPassingService.storeResult(this.dataType, response);

			// Navigate to result page for retrieved data
			this._navigateToResult(response);

			return response;
		} catch (error) {
			console.error(`Error retrieving ${this.dataType} data:`, error);
			this.error.emit(error);
			throw error;
		}
	}

	private _navigateToResult(apiResponse?: any): void {
		// Get the correct data source for navigation
		const dataSource = this._getDataSource();

		// Determine if this is store or retrieve mode
		const isRetrieveMode = this.isDecryptMode;
		const modeText = isRetrieveMode ? "retrieved" : "stored";
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

			case "addresses":
				this._router.navigate(["/dashboard/addresses/result"], {
					queryParams: {
						result: encodeURIComponent(
							JSON.stringify({
								success: true,
								message: isRetrieveMode ? "Address retrieved successfully" : "Address stored successfully",
								publicData: {
									title: dataSource.title || apiResponse?.data?.title,
									type: "address",
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
				this._router.navigate(["/dashboard/payment-cards/result"], {
					queryParams: {
						result: encodeURIComponent(
							JSON.stringify({
								success: true,
								message: isRetrieveMode ? "Payment card retrieved successfully" : "Payment card stored successfully",
								publicData: {
									title: dataSource.title || apiResponse?.data?.title,
									type: "payment-card",
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

			case "bank-accounts":
				this._router.navigate(["/dashboard/bank-accounts/result"], {
					queryParams: {
						result: encodeURIComponent(
							JSON.stringify({
								success: true,
								message: isRetrieveMode ? "Bank account retrieved successfully" : "Bank account stored successfully",
								publicData: {
									title: dataSource.title || apiResponse?.data?.title,
									type: "bank-account",
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

			default:
				// Fallback to dashboard
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
			// In create mode, navigate back to form based on category
			this._navigateBackToForm();
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

			case "addresses":
				this._router.navigate(["/dashboard/addresses/new"], {
					queryParams: { addressData: encodeURIComponent(JSON.stringify(dataSource)) },
				});
				break;

			case "payment-cards":
				this._router.navigate(["/dashboard/payment-cards/new"], {
					queryParams: { cardData: encodeURIComponent(JSON.stringify(dataSource)) },
				});
				break;

			case "bank-accounts":
				this._router.navigate(["/dashboard/bank-accounts/new"], {
					queryParams: { accountData: encodeURIComponent(JSON.stringify(dataSource)) },
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
			case "addresses":
				return "📍";
			case "payment-cards":
				return "💳";
			case "bank-accounts":
				return "🏦";
			default:
				return "📄";
		}
	}

	getDataTypeTitle(): string {
		return this.dataTitle;
	}
}
