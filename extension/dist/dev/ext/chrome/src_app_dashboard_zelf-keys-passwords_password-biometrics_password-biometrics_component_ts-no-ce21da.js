"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-passwords_password-biometrics_password-biometrics_component_ts-no-ce21da"],{

/***/ 733:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate),
/* harmony export */   TestTools: () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};

/***/ }),

/***/ 3409:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-passwords/password-biometrics/password-biometrics.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordBiometricsComponent: () => (/* binding */ PasswordBiometricsComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-webcam */ 93491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 39981);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vladmandic/face-api */ 12841);
/* harmony import */ var app_http_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/http-wrapper.service */ 84099);
/* harmony import */ var app_services_media_stream_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/media-stream.service */ 54173);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../wallet.service */ 69556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);























const _c0 = ["maskResult"];
const _c1 = ["toSend"];
const _c2 = ["webcam"];
function PasswordBiometricsComponent_div_10_webcam_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "webcam", 23, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("imageCapture", function PasswordBiometricsComponent_div_10_webcam_2_Template_webcam_imageCapture_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.processImage($event));
    })("initError", function PasswordBiometricsComponent_div_10_webcam_2_Template_webcam_initError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.cameraError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("allowCameraSwitch", false)("captureImageData", true)("height", ctx_r1.camera.dimensions.video.height)("imageQuality", 1)("trigger", ctx_r1.takePicture$)("videoOptions", ctx_r1.camera.configuration)("width", ctx_r1.camera.dimensions.video.width);
  }
}
function PasswordBiometricsComponent_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.errorFace.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.errorFace.subtitle);
  }
}
function PasswordBiometricsComponent_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Position your face in the center");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Look directly at the camera and stay still");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PasswordBiometricsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PasswordBiometricsComponent_div_10_webcam_2_Template, 2, 7, "webcam", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "canvas", 17, 0)(5, "canvas", 18, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PasswordBiometricsComponent_div_10_div_8_Template, 5, 2, "div", 20)(9, PasswordBiometricsComponent_div_10_div_9_Template, 5, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 22)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Please look at the camera to verify your identity and store your password securely");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r1.camera.dimensions.video.width, "px")("height", ctx_r1.camera.dimensions.video.height, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.response.base64Image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", ctx_r1.response.base64Image ? ctx_r1.camera.dimensions.result.height : ctx_r1.camera.dimensions.video.height, "px")("width", ctx_r1.response.base64Image ? ctx_r1.camera.dimensions.result.width : ctx_r1.camera.dimensions.video.width, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.errorFace && !ctx_r1.response.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.errorFace && !ctx_r1.response.isLoading);
  }
}
function PasswordBiometricsComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Processing your biometric data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PasswordBiometricsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "zelf-loader", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PasswordBiometricsComponent_div_11_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.response.isLoading);
  }
}
function PasswordBiometricsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Camera not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Please ensure your camera is enabled and accessible for biometric verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PasswordBiometricsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Camera Permission Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Please allow camera access to continue with biometric verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PasswordBiometricsComponent_div_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class PasswordBiometricsComponent {
  _changeDetectorRef;
  _httpWrapperService;
  _mediaStreamService;
  _renderer;
  _translocoService;
  _walletService;
  _router;
  _route;
  maskResultCanvasRef;
  ToSendCanvasRef;
  webcamRef;
  canNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  error = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  imageCaptured = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  _takePicture = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  _intervals = {};
  // Camera and face detection properties
  camera = {
    isLoading: true,
    hasPermissions: true,
    isLowQuality: false,
    dimensions: {
      video: {
        width: 0,
        height: 0,
        max: {
          width: 800,
          height: 600
        }
      },
      result: {
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0
      },
      real: {
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0
      }
    },
    configuration: {
      facingMode: "user",
      width: {
        ideal: 800
      },
      height: {
        ideal: 600
      }
    }
  };
  face = {
    video: {
      center: {
        x: 0,
        y: 0
      },
      radius: {
        x: 0,
        y: 0
      },
      margin: {
        x: 0,
        y: 0
      }
    },
    real: {
      center: {
        x: 0,
        y: 0
      },
      radius: {
        x: 0,
        y: 0
      },
      margin: {
        x: 0,
        y: 0
      }
    },
    minHeight: 200,
    minPixels: 200,
    successPosition: 0,
    threshold: 0.25
  };
  response = {
    base64Image: "",
    isLoading: false
  };
  apiKeysSessionJWT;
  errorFace = null;
  lastFace;
  passwordData = {};
  aspectRatio = 0.75;
  constructor(_changeDetectorRef, _httpWrapperService, _mediaStreamService, _renderer, _translocoService, _walletService, _router, _route) {
    this._changeDetectorRef = _changeDetectorRef;
    this._httpWrapperService = _httpWrapperService;
    this._mediaStreamService = _mediaStreamService;
    this._renderer = _renderer;
    this._translocoService = _translocoService;
    this._walletService = _walletService;
    this._router = _router;
    this._route = _route;
    this.apiKeysSessionJWT = "";
  }
  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      if (params["passwordData"]) {
        try {
          this.passwordData = JSON.parse(decodeURIComponent(params["passwordData"]));
        } catch (e) {
          console.error("Error parsing password data:", e);
        }
      }
    });
    this.initZelfKeySession();
    this._initializeBiometrics();
  }
  initZelfKeySession() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this._walletService.initZelfKeySession();
      if (response.data.token) {
        _this.apiKeysSessionJWT = response.data.token;
      }
    })();
  }
  ngOnDestroy() {
    if (this._intervals.detectFace) {
      clearInterval(this._intervals.detectFace);
    }
    if (this._intervals.checkNgxVideo) {
      clearInterval(this._intervals.checkNgxVideo);
    }
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  get takePicture$() {
    return this._takePicture.asObservable();
  }
  _initializeBiometrics() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Always wait for the wallet service to load the models
        _this2._walletService.faceapi$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(_this2.unsubscriber$)).subscribe(/*#__PURE__*/function () {
          var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (isLoaded) {
            if (!isLoaded) return;
            _this2.camera.isLoading = false;
            yield _this2._setMaxVideoDimensions();
            _this2._startNgxVideoInterval();
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (error) {
        console.error("❌ Error initializing biometrics:", error);
        _this2.error.emit(error);
      }
    })();
  }
  _checkModelsLoaded() {
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // This method is no longer needed since we use the wallet service observable
      return true;
    })();
  }
  _waitForModels() {
    // This method is no longer needed since we use the wallet service observable
  }
  _waitForFaceApi() {
    // This method is no longer needed since we use the wallet service observable
  }
  _setMaxVideoDimensions() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maxWidth = 800;
      const maxHeight = 600;
      // Set initial video dimensions
      _this3.camera.dimensions.video.width = maxWidth;
      _this3.camera.dimensions.video.height = maxHeight;
      // Set result dimensions
      _this3.camera.dimensions.result.width = maxWidth;
      _this3.camera.dimensions.result.height = maxHeight;
      // Initialize face dimensions
      _this3.face.video = _this3._getCenterAndRadius(maxHeight, maxWidth);
      _this3._changeDetectorRef.markForCheck();
    })();
  }
  _getCenterAndRadius(height, width) {
    const center = {
      x: width / 2,
      y: height / 2
    };
    const margin = {
      y: height * 0.05,
      x: 0
    };
    margin.x = margin.y * 0.8;
    const radius = {
      y: height * 0.42,
      x: 0
    };
    radius.x = radius.y * this.aspectRatio;
    if (radius.x * 2 >= width) {
      radius.x = width * 0.48;
      radius.y = radius.x / this.aspectRatio;
    }
    return {
      center,
      radius,
      margin
    };
  }
  _setResultDimensions(type, height, width) {
    const dimensions = this.camera.dimensions[type];
    if (!dimensions) return;
    dimensions.height = height;
    dimensions.offsetY = 0;
    dimensions.width = Math.min(2.8 * (this.face.real?.radius?.x || 0), width);
    dimensions.offsetX = (this.face.real?.center?.x || 0) - dimensions.width / 2;
  }
  _setImageOnCanvas(canvas, img, dimensions, resultDimensions) {
    const context = canvas.getContext("2d");
    if (!context) return;
    canvas.width = resultDimensions.width;
    canvas.height = resultDimensions.height;
    context.drawImage(img, dimensions.offsetX, dimensions.offsetY, dimensions.width, dimensions.height, 0, 0, resultDimensions.width, resultDimensions.height);
  }
  _drawOvalCenterAndMask() {
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
    const {
      center,
      radius
    } = this.face.video || {
      center: {
        x: 0,
        y: 0
      },
      radius: {
        x: 0,
        y: 0
      }
    };
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
  _drawStatusOval(ctx, isOk) {
    const {
      center,
      radius
    } = this.face.video || {
      center: {
        x: 0,
        y: 0
      },
      radius: {
        x: 0,
        y: 0
      }
    };
    ctx.beginPath();
    ctx.ellipse(center.x, center.y, radius.x, radius.y, 0, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = isOk ? "green" : "red";
    ctx.stroke();
    ctx.closePath();
  }
  _inRange(value, min, max) {
    return value >= min && value <= max;
  }
  _isFaceCentered(nose) {
    const faceCenterX = nose.x;
    const faceCenterY = nose.y;
    const {
      center,
      margin
    } = this.face.real || {
      center: {
        x: 0,
        y: 0
      },
      margin: {
        x: 0,
        y: 0
      }
    };
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
      title: "Center your face"
    };
  }
  _isFaceClose(landmarks) {
    const realDim = this.camera.dimensions.real || {
      height: 0,
      width: 0
    };
    const totalFaceArea = landmarks.imageHeight * landmarks.imageWidth;
    const totalImageArea = realDim.height * realDim.width;
    const faceProportion = totalFaceArea / totalImageArea;
    if (faceProportion < this.face.threshold || landmarks.imageHeight < this.face.minPixels || landmarks.imageWidth < this.face.minPixels) {
      this.errorFace = {
        title: "Get closer",
        subtitle: "Move your face closer to the camera"
      };
    }
  }
  _startFaceDetectionInterval() {
    if (this._intervals.detectFace) {
      clearInterval(this._intervals.detectFace);
      this._intervals.detectFace = null;
    }
    this._intervals.detectFace = setInterval(() => {
      this._detectFace();
    }, 100);
  }
  _detectFace() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const videoNgx = _this4.webcamRef?.nativeVideoElement;
      if (!videoNgx || _this4.response.base64Image) {
        return;
      }
      try {
        const detection = yield _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_9__.detectAllFaces(videoNgx, new _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_9__.SsdMobilenetv1Options({
          minConfidence: 0.2
        })).withFaceLandmarks();
        const context = _this4.maskResultCanvasRef?.nativeElement.getContext("2d", {
          willReadFrequently: true
        });
        if (!context) return;
        // Always redraw the base oval mask first
        _this4._drawOvalCenterAndMask();
        if (detection.length > 0) {
          _this4.lastFace = detection[0];
          _this4.errorFace = null;
          // Set real dimensions for face positioning calculations
          _this4.camera.dimensions.real = {
            height: videoNgx.videoHeight,
            width: videoNgx.videoWidth,
            offsetX: 0,
            offsetY: 0
          };
          _this4.face.real = _this4._getCenterAndRadius(videoNgx.videoHeight, videoNgx.videoWidth);
          // Check face positioning
          _this4._isFaceCentered(_this4.lastFace.landmarks.getNose()[3]);
          _this4._isFaceClose(_this4.lastFace.landmarks);
          // Draw status oval (green if no errors, red if errors)
          _this4._drawStatusOval(context, !_this4.errorFace);
          if (!_this4.errorFace) {
            ++_this4.face.successPosition;
          } else {
            _this4.face.successPosition = 0;
          }
          if (_this4.face.successPosition > 2) {
            // Capture after 3 successful frames
            _this4.face.successPosition = 0;
            _this4._takePicture.next(); // Trigger image capture
            clearInterval(_this4._intervals.detectFace); // Stop detection after capture
          }
        } else {
          _this4.face.successPosition = 0;
          _this4.errorFace = {
            title: "No face detected",
            subtitle: "Please look at the camera"
          };
          // Draw red oval if no face detected
          _this4._drawStatusOval(context, false);
        }
        _this4._changeDetectorRef.markForCheck();
      } catch (error) {
        console.error("Face detection error:", error);
        _this4.error.emit(error);
        const context = _this4.maskResultCanvasRef?.nativeElement.getContext("2d");
        if (context) _this4._drawStatusOval(context, false);
      }
    })();
  }
  _takePictureLiveness(img) {
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
  _emitBiometricCapture() {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const base64Data = _this5.response.base64Image.split(",")[1];
        const payload = {
          website: _this5.passwordData.url,
          username: _this5.passwordData.email,
          password: _this5.passwordData.password,
          notes: _this5.passwordData.notes,
          name: _this5.passwordData.title,
          faceBase64: base64Data
        };
        const response = yield _this5._httpWrapperService.sendRequest("post", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/zelf-key/store/password`, payload, {
          headers: {
            Authorization: `Bearer ${_this5.apiKeysSessionJWT}`
          }
        });
        _this5.imageCaptured.emit(_this5.response.base64Image);
        _this5._router.navigate(["/dashboard/passwords/result"], {
          queryParams: {
            result: JSON.stringify(response),
            passwordData: encodeURIComponent(JSON.stringify(_this5.passwordData))
          }
        });
      } catch (error) {
        console.error("Error storing password:", error);
        _this5.error.emit(error);
      }
    })();
  }
  cameraError(error) {
    console.error("Camera error:", error);
    this.canNavigate.emit(true);
    this.error.emit(error);
    if (!error.mediaStreamError || error.mediaStreamError.name !== "NotAllowedError") return;
    this.camera.hasPermissions = false;
    console.log("Camera permissions denied");
  }
  processImage(webcamImage) {
    var _this6 = this;
    if (this.response.base64Image) {
      return;
    }
    const img = new Image();
    img.src = webcamImage.imageAsDataUrl;
    img.onload = /*#__PURE__*/(0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (img.height < _this6.face.minHeight) {
        _this6.camera.isLowQuality = true;
        _this6.canNavigate.emit(true);
        _this6.error.emit({
          error: "low_quality"
        });
        return;
      }
      // This is for capturing the final image after successful liveness detection
      _this6._takePictureLiveness(img);
    });
  }
  onBack() {
    this._router.navigate(["/dashboard/passwords/new"], {
      queryParams: {
        passwordData: encodeURIComponent(JSON.stringify(this.passwordData))
      }
    });
  }
  _checkVideoStreamReady = () => {
    const videoNgx = this.webcamRef?.nativeVideoElement;
    if (!videoNgx) return;
    clearInterval(this._intervals.checkNgxVideo);
    this._intervals.checkNgxVideo = null;
    videoNgx.addEventListener("loadeddata", () => {
      this._startFaceDetectionInterval();
      this.canNavigate.emit(true);
      this._setVideoDimensions(videoNgx);
      this._drawOvalCenterAndMask();
    }, {
      once: true
    });
    this._setVideoDimensions(videoNgx);
    this._drawOvalCenterAndMask();
  };
  _setVideoDimensions(videoElement) {
    const actualWidth = videoElement.clientWidth;
    const actualHeight = videoElement.clientHeight;
    this.camera.dimensions.video.height = actualHeight;
    this.camera.dimensions.video.width = actualWidth;
    this.camera.dimensions.result = {
      height: 0,
      width: 0,
      offsetX: 0,
      offsetY: 0
    };
    this._setResultDimensions("result", actualHeight, actualWidth);
    this.face.video = this._getCenterAndRadius(actualHeight, actualWidth);
    const maskResultCanvas = this.maskResultCanvasRef?.nativeElement;
    if (maskResultCanvas) {
      maskResultCanvas.style.marginLeft = `0px`;
      maskResultCanvas.style.marginTop = `0px`;
    }
    this._changeDetectorRef.markForCheck();
  }
  _startNgxVideoInterval = () => {
    if (this._intervals.checkNgxVideo) {
      clearInterval(this._intervals.checkNgxVideo);
      this._intervals.checkNgxVideo = null;
    }
    this._intervals.checkNgxVideo = setInterval(this._checkVideoStreamReady, 100);
  };
  static ɵfac = function PasswordBiometricsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PasswordBiometricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_http_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_media_stream_service__WEBPACK_IMPORTED_MODULE_4__.MediaStreamService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_5__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: PasswordBiometricsComponent,
    selectors: [["app-password-biometrics"]],
    viewQuery: function PasswordBiometricsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.maskResultCanvasRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ToSendCanvasRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.webcamRef = _t.first);
      }
    },
    outputs: {
      canNavigate: "canNavigate",
      error: "error",
      imageCaptured: "imageCaptured"
    },
    decls: 14,
    vars: 4,
    consts: [["maskResult", ""], ["toSend", ""], ["webcam", ""], [1, "password-biometrics-container"], [1, "biometrics-header"], [1, "btn-back", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M15 10H5M5 10L10 15M5 10L10 5", "stroke", "#171717", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "biometrics-title"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "biometrics-content"], ["class", "camera-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "loading-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "error-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "permission-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "camera-container"], [1, "camera-view"], ["mirrorImage", "always", 3, "allowCameraSwitch", "captureImageData", "height", "imageQuality", "trigger", "videoOptions", "width", "imageCapture", "initError", 4, "ngIf"], [1, "face-mask-canvas"], ["hidden", "true"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "status-messages"], ["class", "biometric__error", 4, "ngIf"], ["class", "biometric__instructions", 4, "ngIf"], [1, "compact-instructions"], ["mirrorImage", "always", 3, "imageCapture", "initError", "allowCameraSwitch", "captureImageData", "height", "imageQuality", "trigger", "videoOptions", "width"], [1, "biometric__error"], [1, "biometric__error-title"], [1, "biometric__error-subtitle"], [1, "biometric__instructions"], [1, "biometric__instruction-title"], [1, "biometric__instruction-subtitle"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "loading-container"], [3, "diameter"], ["class", "processing-message", 4, "ngIf"], [1, "processing-message"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "error-container"], ["src", "https://cdn.verifik.co/demo/nocameraenabled.svg", "alt", "Camera Error", 1, "camera-error-image"], [1, "error-title"], [1, "error-description"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "permission-container"], [1, "permission-icon"], [1, "permission-title"], [1, "permission-description"], [1, "btn-retry", 3, "click"]],
    template: function PasswordBiometricsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PasswordBiometricsComponent_Template_button_click_2_listener() {
          return ctx.onBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Back to Password Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Biometric Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PasswordBiometricsComponent_div_10_Template, 13, 11, "div", 10)(11, PasswordBiometricsComponent_div_11_Template, 3, 2, "div", 11)(12, PasswordBiometricsComponent_div_12_Template, 6, 0, "div", 12)(13, PasswordBiometricsComponent_div_13_Template, 9, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.camera.isLoading && ctx.camera.hasPermissions && !ctx.camera.isLowQuality);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.response.base64Image || ctx.camera.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.camera.isLoading && ctx.camera.isLowQuality);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.camera.isLoading && !ctx.camera.hasPermissions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinnerModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_18__.WebcamModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_18__.WebcamComponent, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_1__.ZelfLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule],
    styles: [".password-biometrics-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: #171717;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: background-color 0.2s;\n  margin: 0 auto 16px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .biometrics-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 70vh;\n  justify-content: center;\n  padding: 0.5rem;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n  gap: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .camera-view[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n  margin: 0 auto;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .camera-view[_ngcontent-%COMP%]   .face-mask-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .camera-view[_ngcontent-%COMP%]   webcam[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n  min-height: 60px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error[_ngcontent-%COMP%]   .biometric__error-title[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error[_ngcontent-%COMP%]   .biometric__error-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instructions[_ngcontent-%COMP%]   .biometric__instruction-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instructions[_ngcontent-%COMP%]   .biometric__instruction-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .compact-instructions[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .compact-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0;\n  padding: 16px 24px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #007bff;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .processing-message[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: #171717;\n  font-size: 18px;\n  font-weight: 500;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .camera-error-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  margin: 0;\n  max-width: 400px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .permission-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .permission-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .permission-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  margin: 0 0 24px 0;\n  max-width: 400px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 24px;\n  background: #171717;\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n\n@media (max-width: 768px) {\n  .password-biometrics-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .biometrics-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error-title[_ngcontent-%COMP%], \n   .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instruction-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error-subtitle[_ngcontent-%COMP%], \n   .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instruction-subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .compact-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWJpb21ldHJpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBQ0g7QUFDRztFQUNDLG1CQUFBO0FBQ0o7QUFFRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFJRTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRkg7QUFNQztFQUNDLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDQyx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSkg7QUFNRztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtBQUpKO0FBTUk7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBSkw7QUFPSTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxMO0FBU0c7RUFDQyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVLO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSztFQUNDLFdBQUE7RUFDQSxlQUFBO0FBVE47QUFjSztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVpOO0FBZUs7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQWJOO0FBa0JHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFoQko7QUFrQkk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBaEJMO0FBcUJFO0VBQ0Msa0JBQUE7QUFuQkg7QUFxQkc7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUF1QkU7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FBckJIO0FBdUJHO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXJCSjtBQXdCRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXRCSjtBQXlCRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBdkJKO0FBMkJFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQXpCSDtBQTJCRztFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQXpCSjtBQTRCRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTFCSjtBQTZCRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTNCSjtBQThCRztFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBNUJKO0FBOEJJO0VBQ0MsZ0JBQUE7QUE1Qkw7O0FBb0NBO0VBQ0M7SUFDQyxhQUFBO0VBakNBO0VBbUNBO0lBQ0MsbUJBQUE7RUFqQ0Q7RUFtQ0M7SUFDQyxlQUFBO0VBakNGO0VBcUNBO0lBQ0MsZ0JBQUE7RUFuQ0Q7RUFxQ0M7SUFDQyxTQUFBO0VBbkNGO0VBcUNFO0lBQ0MsZ0JBQUE7RUFuQ0g7RUFxQ0c7O0lBRUMsZUFBQTtFQW5DSjtFQXNDRzs7SUFFQyxlQUFBO0VBcENKO0VBeUNHO0lBQ0MsZUFBQTtJQUNBLGtCQUFBO0VBdkNKO0FBQ0YiLCJmaWxlIjoicGFzc3dvcmQtYmlvbWV0cmljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1iaW9tZXRyaWNzLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDE2cHg7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHQuYmlvbWV0cmljcy1oZWFkZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0LmJ0bi1iYWNrIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHBhZGRpbmc6IDhweCAxMnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG8gMTZweDtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XG5cdFx0XHR9XG5cblx0XHRcdHN2ZyB7XG5cdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmJpb21ldHJpY3MtdGl0bGUge1xuXHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5iaW9tZXRyaWNzLWNvbnRlbnQge1xuXHRcdGZsZXg6IDE7XG5cdFx0bWluLWhlaWdodDogNzB2aDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiAwLjVyZW07XG5cblx0XHQuY2FtZXJhLWNvbnRhaW5lciB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Z2FwOiAyNHB4O1xuXG5cdFx0XHQuY2FtZXJhLXZpZXcge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXG5cdFx0XHRcdC5mYWNlLW1hc2stY2FudmFzIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0ei1pbmRleDogMTA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ZWJjYW0ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuc3RhdHVzLW1lc3NhZ2VzIHtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0bWluLWhlaWdodDogNjBweDtcblxuXHRcdFx0XHQuYmlvbWV0cmljX19lcnJvciB7XG5cdFx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3ItdGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNkMzJmMmY7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2Vycm9yLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9ucyB7XG5cdFx0XHRcdFx0LmJpb21ldHJpY19faW5zdHJ1Y3Rpb24tdGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9uLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuY29tcGFjdC1pbnN0cnVjdGlvbnMge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1heC13aWR0aDogNTAwcHg7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4IDI0cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwN2JmZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5sb2FkaW5nLWNvbnRhaW5lciB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdC5wcm9jZXNzaW5nLW1lc3NhZ2Uge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5lcnJvci1jb250YWluZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNDhweCAyNHB4O1xuXG5cdFx0XHQuY2FtZXJhLWVycm9yLWltYWdlIHtcblx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuZXJyb3ItdGl0bGUge1xuXHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5lcnJvci1kZXNjcmlwdGlvbiB7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQucGVybWlzc2lvbi1jb250YWluZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNDhweCAyNHB4O1xuXG5cdFx0XHQucGVybWlzc2lvbi1pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiA2NHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQucGVybWlzc2lvbi10aXRsZSB7XG5cdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnBlcm1pc3Npb24tZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyNHB4IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcmV0cnkge1xuXHRcdFx0XHRoZWlnaHQ6IDQ4cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogIzE3MTcxNztcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5wYXNzd29yZC1iaW9tZXRyaWNzLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogMTJweDtcblxuXHRcdC5iaW9tZXRyaWNzLWhlYWRlciB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG5cdFx0XHQuYmlvbWV0cmljcy10aXRsZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuYmlvbWV0cmljcy1jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDAuMjVyZW07XG5cblx0XHRcdC5jYW1lcmEtY29udGFpbmVyIHtcblx0XHRcdFx0Z2FwOiAyMHB4O1xuXG5cdFx0XHRcdC5zdGF0dXMtbWVzc2FnZXMge1xuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDUwcHg7XG5cblx0XHRcdFx0XHQuYmlvbWV0cmljX19lcnJvci10aXRsZSxcblx0XHRcdFx0XHQuYmlvbWV0cmljX19pbnN0cnVjdGlvbi10aXRsZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3Itc3VidGl0bGUsXG5cdFx0XHRcdFx0LmJpb21ldHJpY19faW5zdHJ1Y3Rpb24tc3VidGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jb21wYWN0LWluc3RydWN0aW9ucyB7XG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXNzd29yZHMvcGFzc3dvcmQtYmlvbWV0cmljcy9wYXNzd29yZC1iaW9tZXRyaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0c7RUFDQyxtQkFBQTtBQUNKO0FBRUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBSUU7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUZIO0FBTUM7RUFDQyxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0MsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUpIO0FBTUc7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFKSjtBQU1JO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUpMO0FBT0k7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMTDtBQVNHO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVSztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJOO0FBV0s7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQVROO0FBY0s7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFaTjtBQWVLO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFiTjtBQWtCRztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBaEJKO0FBa0JJO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWhCTDtBQXFCRTtFQUNDLGtCQUFBO0FBbkJIO0FBcUJHO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBdUJFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQXJCSDtBQXVCRztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUF3Qkc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0Qko7QUF5Qkc7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXZCSjtBQTJCRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QUF6Qkg7QUEyQkc7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUF6Qko7QUE0Qkc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExQko7QUE2Qkc7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUEzQko7QUE4Qkc7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQTVCSjtBQThCSTtFQUNDLGdCQUFBO0FBNUJMOztBQW9DQTtFQUNDO0lBQ0MsYUFBQTtFQWpDQTtFQW1DQTtJQUNDLG1CQUFBO0VBakNEO0VBbUNDO0lBQ0MsZUFBQTtFQWpDRjtFQXFDQTtJQUNDLGdCQUFBO0VBbkNEO0VBcUNDO0lBQ0MsU0FBQTtFQW5DRjtFQXFDRTtJQUNDLGdCQUFBO0VBbkNIO0VBcUNHOztJQUVDLGVBQUE7RUFuQ0o7RUFzQ0c7O0lBRUMsZUFBQTtFQXBDSjtFQXlDRztJQUNDLGVBQUE7SUFDQSxrQkFBQTtFQXZDSjtBQUNGO0FBQ0Esd21TQUF3bVMiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtYmlvbWV0cmljcy1jb250YWluZXIge1xuXHRwYWRkaW5nOiAxNnB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0LmJpb21ldHJpY3MtaGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdC5idG4tYmFjayB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGdhcDogOHB4O1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblx0XHRcdG1hcmdpbjogMCBhdXRvIDE2cHg7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0fVxuXG5cdFx0XHRzdmcge1xuXHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5iaW9tZXRyaWNzLXRpdGxlIHtcblx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQuYmlvbWV0cmljcy1jb250ZW50IHtcblx0XHRmbGV4OiAxO1xuXHRcdG1pbi1oZWlnaHQ6IDcwdmg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMC41cmVtO1xuXG5cdFx0LmNhbWVyYS1jb250YWluZXIge1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGdhcDogMjRweDtcblxuXHRcdFx0LmNhbWVyYS12aWV3IHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXHRcdFx0XHQuZmFjZS1tYXNrLWNhbnZhcyB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdFx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2ViY2FtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN0YXR1cy1tZXNzYWdlcyB7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDYwcHg7XG5cblx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3Ige1xuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2Vycm9yLXRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZDMyZjJmO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYmlvbWV0cmljX19lcnJvci1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYmlvbWV0cmljX19pbnN0cnVjdGlvbnMge1xuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9uLXRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYmlvbWV0cmljX19pbnN0cnVjdGlvbi1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmNvbXBhY3QtaW5zdHJ1Y3Rpb25zIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAyNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDdiZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQubG9hZGluZy1jb250YWluZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHQucHJvY2Vzc2luZy1tZXNzYWdlIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZXJyb3ItY29udGFpbmVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDQ4cHggMjRweDtcblxuXHRcdFx0LmNhbWVyYS1lcnJvci1pbWFnZSB7XG5cdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0LmVycm9yLXRpdGxlIHtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuZXJyb3ItZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnBlcm1pc3Npb24tY29udGFpbmVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDQ4cHggMjRweDtcblxuXHRcdFx0LnBlcm1pc3Npb24taWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0LnBlcm1pc3Npb24tdGl0bGUge1xuXHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5wZXJtaXNzaW9uLWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMjRweCAwO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXJldHJ5IHtcblx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAwIDI0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICMxNzE3MTc7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQucGFzc3dvcmQtYmlvbWV0cmljcy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDEycHg7XG5cblx0XHQuYmlvbWV0cmljcy1oZWFkZXIge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblxuXHRcdFx0LmJpb21ldHJpY3MtdGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmJpb21ldHJpY3MtY29udGVudCB7XG5cdFx0XHRwYWRkaW5nOiAwLjI1cmVtO1xuXG5cdFx0XHQuY2FtZXJhLWNvbnRhaW5lciB7XG5cdFx0XHRcdGdhcDogMjBweDtcblxuXHRcdFx0XHQuc3RhdHVzLW1lc3NhZ2VzIHtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA1MHB4O1xuXG5cdFx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3ItdGl0bGUsXG5cdFx0XHRcdFx0LmJpb21ldHJpY19faW5zdHJ1Y3Rpb24tdGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2Vycm9yLXN1YnRpdGxlLFxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9uLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY29tcGFjdC1pbnN0cnVjdGlvbnMge1xuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTJweCAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28206:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapAction: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 72083);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./immediateProvider */ 73701);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}

/***/ }),

/***/ 39835:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapScheduler: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 63617:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 23222);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 82645);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 59400);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 95429);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}

/***/ }),

/***/ 67180:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asap: () => (/* binding */ asap),
/* harmony export */   asapScheduler: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 28206);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 39835);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;

/***/ }),

/***/ 73701:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   immediateProvider: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ 733);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-passwords_password-biometrics_password-biometrics_component_ts-no-ce21da.js.map