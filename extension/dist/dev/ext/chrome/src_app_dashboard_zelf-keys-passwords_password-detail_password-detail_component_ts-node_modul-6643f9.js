"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-passwords_password-detail_password-detail_component_ts-node_modul-6643f9"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-webcam */ 93491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 39981);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vladmandic/face-api */ 12841);
/* harmony import */ var app_http_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/http-wrapper.service */ 84099);
/* harmony import */ var app_services_media_stream_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/media-stream.service */ 54173);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../wallet.service */ 69556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chrome.service */ 85043);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 91447);


























const _c0 = ["maskResult"];
const _c1 = ["toSend"];
const _c2 = ["webcam"];
function PasswordBiometricsComponent_div_10_webcam_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "webcam", 25, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("imageCapture", function PasswordBiometricsComponent_div_10_webcam_2_Template_webcam_imageCapture_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.processImage($event));
    })("initError", function PasswordBiometricsComponent_div_10_webcam_2_Template_webcam_initError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.cameraError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("allowCameraSwitch", false)("captureImageData", true)("height", ctx_r1.camera.dimensions.video.height)("imageQuality", 1)("trigger", ctx_r1.takePicture$)("videoOptions", ctx_r1.camera.configuration)("width", ctx_r1.camera.dimensions.video.width);
  }
}
function PasswordBiometricsComponent_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorFace.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorFace.subtitle);
  }
}
function PasswordBiometricsComponent_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Position your face in the center");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Look directly at the camera and stay still");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function PasswordBiometricsComponent_div_10_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please look at the camera to verify your identity and store your password securely");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PasswordBiometricsComponent_div_10_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please look at the camera to verify your identity and decrypt your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PasswordBiometricsComponent_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Master Password (Optional):");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function PasswordBiometricsComponent_div_10_div_13_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.masterPassword, $event) || (ctx_r1.masterPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "If you set a master password when creating this entry, enter it here");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.masterPassword);
  }
}
function PasswordBiometricsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PasswordBiometricsComponent_div_10_webcam_2_Template, 2, 7, "webcam", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "canvas", 17, 0)(5, "canvas", 18, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, PasswordBiometricsComponent_div_10_div_8_Template, 5, 2, "div", 20)(9, PasswordBiometricsComponent_div_10_div_9_Template, 5, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, PasswordBiometricsComponent_div_10_p_11_Template, 2, 0, "p", 23)(12, PasswordBiometricsComponent_div_10_p_12_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, PasswordBiometricsComponent_div_10_div_13_Template, 6, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", ctx_r1.camera.dimensions.video.width, "px")("height", ctx_r1.camera.dimensions.video.height, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.response.base64Image);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("height", ctx_r1.response.base64Image ? ctx_r1.camera.dimensions.result.height : ctx_r1.camera.dimensions.video.height, "px")("width", ctx_r1.response.base64Image ? ctx_r1.camera.dimensions.result.width : ctx_r1.camera.dimensions.video.width, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.errorFace && !ctx_r1.response.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.errorFace && !ctx_r1.response.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isDecryptMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isDecryptMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isDecryptMode);
  }
}
function PasswordBiometricsComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Processing your biometric data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PasswordBiometricsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "zelf-loader", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PasswordBiometricsComponent_div_11_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.response.isLoading);
  }
}
function PasswordBiometricsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Camera not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Please ensure your camera is enabled and accessible for biometric verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function PasswordBiometricsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Camera Permission Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Please allow camera access to continue with biometric verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PasswordBiometricsComponent_div_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
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
  chromeService;
  maskResultCanvasRef;
  ToSendCanvasRef;
  webcamRef;
  isDecryptMode = false;
  canNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  imageCaptured = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  biometricsSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  biometricsCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  _takePicture = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
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
  masterPassword = "";
  constructor(_changeDetectorRef, _httpWrapperService, _mediaStreamService, _renderer, _translocoService, _walletService, _router, _route, chromeService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._httpWrapperService = _httpWrapperService;
    this._mediaStreamService = _mediaStreamService;
    this._renderer = _renderer;
    this._translocoService = _translocoService;
    this._walletService = _walletService;
    this._router = _router;
    this._route = _route;
    this.chromeService = chromeService;
    this.apiKeysSessionJWT = "";
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better security during biometric authentication
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/passwords/biometrics");
      }
      _this._route.queryParams.subscribe(params => {
        if (params["passwordData"]) {
          try {
            _this.passwordData = JSON.parse(decodeURIComponent(params["passwordData"]));
          } catch (e) {
            console.error("Error parsing password data:", e);
          }
        }
      });
      _this.initZelfKeySession();
      _this._initializeBiometrics();
    })();
  }
  initZelfKeySession() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // The wallet service now caches the JWT token
      yield _this2._walletService.initZelfKeySession();
      // Get the cached token
      const jwt = _this2._walletService.getZelfKeyJWT();
      if (jwt) {
        _this2.apiKeysSessionJWT = jwt;
      }
    })();
  }
  /**
   * Handle successful biometrics verification in decrypt mode
   */
  onBiometricsSuccess(faceBase64, password) {
    if (this.isDecryptMode) {
      this.biometricsSuccess.emit({
        faceBase64,
        // Send just the raw base64 string like store mode
        password: this.masterPassword || password
      });
    }
  }
  /**
   * Handle biometrics cancellation in decrypt mode
   */
  onBiometricsCancel() {
    if (this.isDecryptMode) {
      this.biometricsCancel.emit();
    }
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
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Always wait for the wallet service to load the models
        _this3._walletService.faceapi$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(_this3.unsubscriber$)).subscribe(/*#__PURE__*/function () {
          var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (isLoaded) {
            if (!isLoaded) return;
            _this3.camera.isLoading = false;
            yield _this3._setMaxVideoDimensions();
            _this3._startNgxVideoInterval();
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (error) {
        console.error("❌ Error initializing biometrics:", error);
        _this3.error.emit(error);
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
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maxWidth = 800;
      const maxHeight = 600;
      // Set initial video dimensions
      _this4.camera.dimensions.video.width = maxWidth;
      _this4.camera.dimensions.video.height = maxHeight;
      // Set result dimensions
      _this4.camera.dimensions.result.width = maxWidth;
      _this4.camera.dimensions.result.height = maxHeight;
      // Initialize face dimensions
      _this4.face.video = _this4._getCenterAndRadius(maxHeight, maxWidth);
      _this4._changeDetectorRef.markForCheck();
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
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const videoNgx = _this5.webcamRef?.nativeVideoElement;
      if (!videoNgx || _this5.response.base64Image) {
        return;
      }
      try {
        const detection = yield _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_10__.detectAllFaces(videoNgx, new _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_10__.SsdMobilenetv1Options({
          minConfidence: 0.2
        })).withFaceLandmarks();
        const context = _this5.maskResultCanvasRef?.nativeElement.getContext("2d", {
          willReadFrequently: true
        });
        if (!context) return;
        // Always redraw the base oval mask first
        _this5._drawOvalCenterAndMask();
        if (detection.length > 0) {
          _this5.lastFace = detection[0];
          _this5.errorFace = null;
          // Set real dimensions for face positioning calculations
          _this5.camera.dimensions.real = {
            height: videoNgx.videoHeight,
            width: videoNgx.videoWidth,
            offsetX: 0,
            offsetY: 0
          };
          _this5.face.real = _this5._getCenterAndRadius(videoNgx.videoHeight, videoNgx.videoWidth);
          // Check face positioning
          _this5._isFaceCentered(_this5.lastFace.landmarks.getNose()[3]);
          _this5._isFaceClose(_this5.lastFace.landmarks);
          // Draw status oval (green if no errors, red if errors)
          _this5._drawStatusOval(context, !_this5.errorFace);
          if (!_this5.errorFace) {
            ++_this5.face.successPosition;
          } else {
            _this5.face.successPosition = 0;
          }
          if (_this5.face.successPosition > 2) {
            // Capture after 3 successful frames
            _this5.face.successPosition = 0;
            _this5._takePicture.next(); // Trigger image capture
            clearInterval(_this5._intervals.detectFace); // Stop detection after capture
          }
        } else {
          _this5.face.successPosition = 0;
          _this5.errorFace = {
            title: "No face detected",
            subtitle: "Please look at the camera"
          };
          // Draw red oval if no face detected
          _this5._drawStatusOval(context, false);
        }
        _this5._changeDetectorRef.markForCheck();
      } catch (error) {
        console.error("Face detection error:", error);
        _this5.error.emit(error);
        const context = _this5.maskResultCanvasRef?.nativeElement.getContext("2d");
        if (context) _this5._drawStatusOval(context, false);
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
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const base64Data = _this6.response.base64Image.split(",")[1];
        if (_this6.isDecryptMode) {
          // In decrypt mode, emit the biometric data to the parent component
          _this6.onBiometricsSuccess(base64Data);
        } else {
          // In create mode, store the new password
          const payload = {
            website: _this6.passwordData.url,
            username: _this6.passwordData.email,
            password: _this6.passwordData.password,
            notes: _this6.passwordData.notes,
            name: _this6.passwordData.title,
            faceBase64: base64Data
          };
          const response = yield _this6._httpWrapperService.sendRequest("post", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/zelf-key/store/password`, payload, {
            headers: {
              Authorization: `Bearer ${_this6.apiKeysSessionJWT}`
            }
          });
          _this6.imageCaptured.emit(_this6.response.base64Image);
          _this6._router.navigate(["/dashboard/passwords/result"], {
            queryParams: {
              result: JSON.stringify(response),
              passwordData: encodeURIComponent(JSON.stringify(_this6.passwordData))
            }
          });
        }
      } catch (error) {
        console.error("Error in biometric capture:", error);
        _this6.error.emit(error);
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
    var _this7 = this;
    if (this.response.base64Image) {
      return;
    }
    const img = new Image();
    img.src = webcamImage.imageAsDataUrl;
    img.onload = /*#__PURE__*/(0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (img.height < _this7.face.minHeight) {
        _this7.camera.isLowQuality = true;
        _this7.canNavigate.emit(true);
        _this7.error.emit({
          error: "low_quality"
        });
        return;
      }
      // This is for capturing the final image after successful liveness detection
      _this7._takePictureLiveness(img);
    });
  }
  onBack() {
    if (this.isDecryptMode) {
      // In decrypt mode, emit cancel event
      this.onBiometricsCancel();
    } else {
      // In create mode, navigate back to password form
      this._router.navigate(["/dashboard/passwords/new"], {
        queryParams: {
          passwordData: encodeURIComponent(JSON.stringify(this.passwordData))
        }
      });
    }
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
    return new (__ngFactoryType__ || PasswordBiometricsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_http_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_services_media_stream_service__WEBPACK_IMPORTED_MODULE_4__.MediaStreamService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_5__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_6__.ChromeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PasswordBiometricsComponent,
    selectors: [["app-password-biometrics"]],
    viewQuery: function PasswordBiometricsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.maskResultCanvasRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.ToSendCanvasRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.webcamRef = _t.first);
      }
    },
    inputs: {
      isDecryptMode: "isDecryptMode"
    },
    outputs: {
      canNavigate: "canNavigate",
      error: "error",
      imageCaptured: "imageCaptured",
      biometricsSuccess: "biometricsSuccess",
      biometricsCancel: "biometricsCancel"
    },
    decls: 14,
    vars: 6,
    consts: [["maskResult", ""], ["toSend", ""], ["webcam", ""], [1, "password-biometrics-container"], [1, "biometrics-header"], [1, "btn-back", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M15 10H5M5 10L10 15M5 10L10 5", "stroke", "#171717", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "biometrics-title"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "biometrics-content"], ["class", "camera-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "loading-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "error-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "permission-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "camera-container"], [1, "camera-view"], ["mirrorImage", "always", 3, "allowCameraSwitch", "captureImageData", "height", "imageQuality", "trigger", "videoOptions", "width", "imageCapture", "initError", 4, "ngIf"], [1, "face-mask-canvas"], ["hidden", "true"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "status-messages"], ["class", "biometric__error", 4, "ngIf"], ["class", "biometric__instructions", 4, "ngIf"], [1, "compact-instructions"], [4, "ngIf"], ["class", "password-input-container", 4, "ngIf"], ["mirrorImage", "always", 3, "imageCapture", "initError", "allowCameraSwitch", "captureImageData", "height", "imageQuality", "trigger", "videoOptions", "width"], [1, "biometric__error"], [1, "biometric__error-title"], [1, "biometric__error-subtitle"], [1, "biometric__instructions"], [1, "biometric__instruction-title"], [1, "biometric__instruction-subtitle"], [1, "password-input-container"], ["for", "masterPassword"], ["type", "password", "id", "masterPassword", "placeholder", "Enter your master password if you have one", 1, "password-input", 3, "ngModelChange", "ngModel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "loading-container"], [3, "diameter"], ["class", "processing-message", 4, "ngIf"], [1, "processing-message"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "error-container"], ["src", "https://cdn.verifik.co/demo/nocameraenabled.svg", "alt", "Camera Error", 1, "camera-error-image"], [1, "error-title"], [1, "error-description"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "permission-container"], [1, "permission-icon"], [1, "permission-title"], [1, "permission-description"], [1, "btn-retry", 3, "click"]],
    template: function PasswordBiometricsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PasswordBiometricsComponent_Template_button_click_2_listener() {
          return ctx.onBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, PasswordBiometricsComponent_div_10_Template, 14, 14, "div", 10)(11, PasswordBiometricsComponent_div_11_Template, 3, 2, "div", 11)(12, PasswordBiometricsComponent_div_12_Template, 6, 0, "div", 12)(13, PasswordBiometricsComponent_div_13_Template, 9, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isDecryptMode ? "Back to Password Details" : "Back to Password Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isDecryptMode ? "Verify Identity to Decrypt" : "Biometric Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.camera.isLoading && ctx.camera.hasPermissions && !ctx.camera.isLowQuality);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.response.base64Image || ctx.camera.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.camera.isLoading && ctx.camera.isLowQuality);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.camera.isLoading && !ctx.camera.hasPermissions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_20__.WebcamModule, ngx_webcam__WEBPACK_IMPORTED_MODULE_20__.WebcamComponent, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_1__.ZelfLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule],
    styles: [".password-biometrics-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: #171717;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: background-color 0.2s;\n  margin: 0 auto 16px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .biometrics-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 70vh;\n  justify-content: center;\n  padding: 0.5rem;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n  gap: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .camera-view[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n  margin: 0 auto;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .camera-view[_ngcontent-%COMP%]   .face-mask-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .camera-view[_ngcontent-%COMP%]   webcam[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%] {\n  justify-content: center;\n  text-align: center;\n  min-height: 60px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error[_ngcontent-%COMP%]   .biometric__error-title[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error[_ngcontent-%COMP%]   .biometric__error-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instructions[_ngcontent-%COMP%]   .biometric__instruction-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instructions[_ngcontent-%COMP%]   .biometric__instruction-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .compact-instructions[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .compact-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0;\n  padding: 16px 24px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border-left: 4px solid #007bff;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .processing-message[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: #171717;\n  font-size: 18px;\n  font-weight: 500;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .camera-error-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin-bottom: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  margin: 0;\n  max-width: 400px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .permission-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .permission-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .permission-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  margin: 0 0 24px 0;\n  max-width: 400px;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 24px;\n  background: #171717;\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .permission-container[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #333;\n}\n\n@media (max-width: 768px) {\n  .password-biometrics-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-header[_ngcontent-%COMP%]   .biometrics-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error-title[_ngcontent-%COMP%], \n   .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instruction-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__error-subtitle[_ngcontent-%COMP%], \n   .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .status-messages[_ngcontent-%COMP%]   .biometric__instruction-subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .password-biometrics-container[_ngcontent-%COMP%]   .biometrics-content[_ngcontent-%COMP%]   .camera-container[_ngcontent-%COMP%]   .compact-instructions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 20px;\n  }\n}\n.password-input-container[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n  margin: 24px auto 0;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n.password-input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #171717;\n  margin-bottom: 8px;\n  text-align: left;\n}\n.password-input-container[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #ced4da;\n  border-radius: 8px;\n  font-size: 16px;\n  margin-bottom: 8px;\n  box-sizing: border-box;\n}\n.password-input-container[_ngcontent-%COMP%]   .password-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.password-input-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #666;\n  font-size: 12px;\n  text-align: left;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWJpb21ldHJpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBQ0g7QUFDRztFQUNDLG1CQUFBO0FBQ0o7QUFFRztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFJRTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRkg7QUFNQztFQUNDLE9BQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDQyx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSkg7QUFNRztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtBQUpKO0FBTUk7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBSkw7QUFPSTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxMO0FBU0c7RUFDQyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVLO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSztFQUNDLFdBQUE7RUFDQSxlQUFBO0FBVE47QUFjSztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVpOO0FBZUs7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQWJOO0FBa0JHO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFoQko7QUFrQkk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBaEJMO0FBcUJFO0VBQ0Msa0JBQUE7QUFuQkg7QUFxQkc7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUF1QkU7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FBckJIO0FBdUJHO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXJCSjtBQXdCRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXRCSjtBQXlCRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBdkJKO0FBMkJFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQXpCSDtBQTJCRztFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQXpCSjtBQTRCRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTFCSjtBQTZCRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTNCSjtBQThCRztFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBNUJKO0FBOEJJO0VBQ0MsZ0JBQUE7QUE1Qkw7O0FBb0NBO0VBQ0M7SUFDQyxhQUFBO0VBakNBO0VBbUNBO0lBQ0MsbUJBQUE7RUFqQ0Q7RUFtQ0M7SUFDQyxlQUFBO0VBakNGO0VBcUNBO0lBQ0MsZ0JBQUE7RUFuQ0Q7RUFxQ0M7SUFDQyxTQUFBO0VBbkNGO0VBcUNFO0lBQ0MsZ0JBQUE7RUFuQ0g7RUFxQ0c7O0lBRUMsZUFBQTtFQW5DSjtFQXNDRzs7SUFFQyxlQUFBO0VBcENKO0VBeUNHO0lBQ0MsZUFBQTtJQUNBLGtCQUFBO0VBdkNKO0FBQ0Y7QUE4Q0E7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBNUNEO0FBOENDO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE1Q0Y7QUErQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUE3Q0Y7QUErQ0U7RUFDQyxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQTdDSDtBQWlEQztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEvQ0YiLCJmaWxlIjoicGFzc3dvcmQtYmlvbWV0cmljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1iaW9tZXRyaWNzLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDE2cHg7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHQuYmlvbWV0cmljcy1oZWFkZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0LmJ0bi1iYWNrIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHBhZGRpbmc6IDhweCAxMnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG8gMTZweDtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmNWY1ZjU7XG5cdFx0XHR9XG5cblx0XHRcdHN2ZyB7XG5cdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmJpb21ldHJpY3MtdGl0bGUge1xuXHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5iaW9tZXRyaWNzLWNvbnRlbnQge1xuXHRcdGZsZXg6IDE7XG5cdFx0bWluLWhlaWdodDogNzB2aDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiAwLjVyZW07XG5cblx0XHQuY2FtZXJhLWNvbnRhaW5lciB7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Z2FwOiAyNHB4O1xuXG5cdFx0XHQuY2FtZXJhLXZpZXcge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXG5cdFx0XHRcdC5mYWNlLW1hc2stY2FudmFzIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0ei1pbmRleDogMTA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ZWJjYW0ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuc3RhdHVzLW1lc3NhZ2VzIHtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0bWluLWhlaWdodDogNjBweDtcblxuXHRcdFx0XHQuYmlvbWV0cmljX19lcnJvciB7XG5cdFx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3ItdGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNkMzJmMmY7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2Vycm9yLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9ucyB7XG5cdFx0XHRcdFx0LmJpb21ldHJpY19faW5zdHJ1Y3Rpb24tdGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9uLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuY29tcGFjdC1pbnN0cnVjdGlvbnMge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1heC13aWR0aDogNTAwcHg7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4IDI0cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwN2JmZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5sb2FkaW5nLWNvbnRhaW5lciB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdC5wcm9jZXNzaW5nLW1lc3NhZ2Uge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAyNHB4O1xuXHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5lcnJvci1jb250YWluZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNDhweCAyNHB4O1xuXG5cdFx0XHQuY2FtZXJhLWVycm9yLWltYWdlIHtcblx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuZXJyb3ItdGl0bGUge1xuXHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5lcnJvci1kZXNjcmlwdGlvbiB7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQucGVybWlzc2lvbi1jb250YWluZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNDhweCAyNHB4O1xuXG5cdFx0XHQucGVybWlzc2lvbi1pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiA2NHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQucGVybWlzc2lvbi10aXRsZSB7XG5cdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnBlcm1pc3Npb24tZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyNHB4IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcmV0cnkge1xuXHRcdFx0XHRoZWlnaHQ6IDQ4cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMjRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogIzE3MTcxNztcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5wYXNzd29yZC1iaW9tZXRyaWNzLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogMTJweDtcblxuXHRcdC5iaW9tZXRyaWNzLWhlYWRlciB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG5cdFx0XHQuYmlvbWV0cmljcy10aXRsZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuYmlvbWV0cmljcy1jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDAuMjVyZW07XG5cblx0XHRcdC5jYW1lcmEtY29udGFpbmVyIHtcblx0XHRcdFx0Z2FwOiAyMHB4O1xuXG5cdFx0XHRcdC5zdGF0dXMtbWVzc2FnZXMge1xuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDUwcHg7XG5cblx0XHRcdFx0XHQuYmlvbWV0cmljX19lcnJvci10aXRsZSxcblx0XHRcdFx0XHQuYmlvbWV0cmljX19pbnN0cnVjdGlvbi10aXRsZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3Itc3VidGl0bGUsXG5cdFx0XHRcdFx0LmJpb21ldHJpY19faW5zdHJ1Y3Rpb24tc3VidGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jb21wYWN0LWluc3RydWN0aW9ucyB7XG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5wYXNzd29yZC1pbnB1dC1jb250YWluZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1heC13aWR0aDogNDAwcHg7XG5cdG1hcmdpbjogMjRweCBhdXRvIDA7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cblx0bGFiZWwge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cblxuXHQucGFzc3dvcmQtaW5wdXQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDEycHggMTZweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblx0XHQmOmZvY3VzIHtcblx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRib3JkZXItY29sb3I6ICMwMDdiZmY7XG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG5cdFx0fVxuXHR9XG5cblx0c21hbGwge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNvbG9yOiAjNjY2O1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXNzd29yZHMvcGFzc3dvcmQtYmlvbWV0cmljcy9wYXNzd29yZC1iaW9tZXRyaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0c7RUFDQyxtQkFBQTtBQUNKO0FBRUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBSUU7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUZIO0FBTUM7RUFDQyxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0MsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUpIO0FBTUc7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7QUFKSjtBQU1JO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUpMO0FBT0k7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMTDtBQVNHO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVSztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVJOO0FBV0s7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQVROO0FBY0s7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFaTjtBQWVLO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFiTjtBQWtCRztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBaEJKO0FBa0JJO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWhCTDtBQXFCRTtFQUNDLGtCQUFBO0FBbkJIO0FBcUJHO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBdUJFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQXJCSDtBQXVCRztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUF3Qkc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0Qko7QUF5Qkc7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXZCSjtBQTJCRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QUF6Qkg7QUEyQkc7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUF6Qko7QUE0Qkc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExQko7QUE2Qkc7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUEzQko7QUE4Qkc7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQTVCSjtBQThCSTtFQUNDLGdCQUFBO0FBNUJMOztBQW9DQTtFQUNDO0lBQ0MsYUFBQTtFQWpDQTtFQW1DQTtJQUNDLG1CQUFBO0VBakNEO0VBbUNDO0lBQ0MsZUFBQTtFQWpDRjtFQXFDQTtJQUNDLGdCQUFBO0VBbkNEO0VBcUNDO0lBQ0MsU0FBQTtFQW5DRjtFQXFDRTtJQUNDLGdCQUFBO0VBbkNIO0VBcUNHOztJQUVDLGVBQUE7RUFuQ0o7RUFzQ0c7O0lBRUMsZUFBQTtFQXBDSjtFQXlDRztJQUNDLGVBQUE7SUFDQSxrQkFBQTtFQXZDSjtBQUNGO0FBOENBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTVDRDtBQThDQztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNUNGO0FBK0NDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBN0NGO0FBK0NFO0VBQ0MsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUE3Q0g7QUFpREM7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBL0NGO0FBQ0Esb2xWQUFvbFYiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtYmlvbWV0cmljcy1jb250YWluZXIge1xuXHRwYWRkaW5nOiAxNnB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0LmJpb21ldHJpY3MtaGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdC5idG4tYmFjayB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGdhcDogOHB4O1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblx0XHRcdG1hcmdpbjogMCBhdXRvIDE2cHg7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0fVxuXG5cdFx0XHRzdmcge1xuXHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5iaW9tZXRyaWNzLXRpdGxlIHtcblx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQuYmlvbWV0cmljcy1jb250ZW50IHtcblx0XHRmbGV4OiAxO1xuXHRcdG1pbi1oZWlnaHQ6IDcwdmg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMC41cmVtO1xuXG5cdFx0LmNhbWVyYS1jb250YWluZXIge1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGdhcDogMjRweDtcblxuXHRcdFx0LmNhbWVyYS12aWV3IHtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXHRcdFx0XHQuZmFjZS1tYXNrLWNhbnZhcyB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdFx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2ViY2FtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN0YXR1cy1tZXNzYWdlcyB7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDYwcHg7XG5cblx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3Ige1xuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2Vycm9yLXRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZDMyZjJmO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYmlvbWV0cmljX19lcnJvci1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYmlvbWV0cmljX19pbnN0cnVjdGlvbnMge1xuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9uLXRpdGxlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYmlvbWV0cmljX19pbnN0cnVjdGlvbi1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmNvbXBhY3QtaW5zdHJ1Y3Rpb25zIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAyNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDdiZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQubG9hZGluZy1jb250YWluZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHQucHJvY2Vzc2luZy1tZXNzYWdlIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMjRweDtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZXJyb3ItY29udGFpbmVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDQ4cHggMjRweDtcblxuXHRcdFx0LmNhbWVyYS1lcnJvci1pbWFnZSB7XG5cdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0LmVycm9yLXRpdGxlIHtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuZXJyb3ItZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnBlcm1pc3Npb24tY29udGFpbmVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDQ4cHggMjRweDtcblxuXHRcdFx0LnBlcm1pc3Npb24taWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0LnBlcm1pc3Npb24tdGl0bGUge1xuXHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5wZXJtaXNzaW9uLWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMjRweCAwO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXJldHJ5IHtcblx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAwIDI0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICMxNzE3MTc7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzMzM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQucGFzc3dvcmQtYmlvbWV0cmljcy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDEycHg7XG5cblx0XHQuYmlvbWV0cmljcy1oZWFkZXIge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblxuXHRcdFx0LmJpb21ldHJpY3MtdGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmJpb21ldHJpY3MtY29udGVudCB7XG5cdFx0XHRwYWRkaW5nOiAwLjI1cmVtO1xuXG5cdFx0XHQuY2FtZXJhLWNvbnRhaW5lciB7XG5cdFx0XHRcdGdhcDogMjBweDtcblxuXHRcdFx0XHQuc3RhdHVzLW1lc3NhZ2VzIHtcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA1MHB4O1xuXG5cdFx0XHRcdFx0LmJpb21ldHJpY19fZXJyb3ItdGl0bGUsXG5cdFx0XHRcdFx0LmJpb21ldHJpY19faW5zdHJ1Y3Rpb24tdGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2Vycm9yLXN1YnRpdGxlLFxuXHRcdFx0XHRcdC5iaW9tZXRyaWNfX2luc3RydWN0aW9uLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY29tcGFjdC1pbnN0cnVjdGlvbnMge1xuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTJweCAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ucGFzc3dvcmQtaW5wdXQtY29udGFpbmVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRtYXJnaW46IDI0cHggYXV0byAwO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXG5cdGxhYmVsIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR9XG5cblx0LnBhc3N3b3JkLWlucHV0IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG5cdFx0Jjpmb2N1cyB7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuXHRcdH1cblx0fVxuXG5cdHNtYWxsIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb2xvcjogIzY2Njtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRsaW5lLWhlaWdodDogMS40O1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7133:
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-passwords/password-detail/password-detail.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordDetailComponent: () => (/* binding */ PasswordDetailComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _password_biometrics_password_biometrics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../password-biometrics/password-biometrics.component */ 3409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../wallet.service */ 69556);
/* harmony import */ var _services_password_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/password-data.service */ 9526);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chrome.service */ 85043);












function PasswordDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading password details...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function PasswordDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Error loading password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordDetailComponent_div_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBackToList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function PasswordDetailComponent_div_8_div_40_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Notes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.decryptedData.notes);
  }
}
function PasswordDetailComponent_div_8_div_40_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Difficulty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.decryptedData.difficulty);
  }
}
function PasswordDetailComponent_div_8_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Decrypted Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 24)(4, "div", 20)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Website:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 20)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 20)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordDetailComponent_div_8_div_40_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onCopyPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, PasswordDetailComponent_div_8_div_40_div_21_Template, 5, 1, "div", 27)(22, PasswordDetailComponent_div_8_div_40_div_22_Template, 5, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.decryptedData.website || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.decryptedData.username || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.decryptedData.password || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.decryptedData.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.decryptedData.difficulty);
  }
}
function PasswordDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\uD83D\uDD10");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 15)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 17)(11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordDetailComponent_div_8_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onDecryptClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 19)(14, "div", 20)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Username:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 20)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 20)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Created:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Zelf Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 20)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "IPFS Hash:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, PasswordDetailComponent_div_8_div_40_Template, 23, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.password.publicData == null ? null : ctx_r1.password.publicData.website) || "Untitled Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.password.publicData == null ? null : ctx_r1.password.publicData.type) || "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.decrypting);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.decrypting ? "Decrypting..." : "Decrypt Password", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.password.publicData == null ? null : ctx_r1.password.publicData.username) || "No username");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.password.publicData == null ? null : ctx_r1.password.publicData.category) || "No category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.password.publicData == null ? null : ctx_r1.password.publicData.timestamp) ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](29, 10, ctx_r1.password.publicData.timestamp, "medium") : "Unknown date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx_r1.password.publicData == null ? null : ctx_r1.password.publicData.zelfName) || "No zelf name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.password.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.decryptedData);
  }
}
function PasswordDetailComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Verify Your Identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Please verify your face to decrypt this password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "app-password-biometrics", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("biometricsSuccess", function PasswordDetailComponent_div_9_Template_app_password_biometrics_biometricsSuccess_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBiometricsSuccess($event));
    })("biometricsCancel", function PasswordDetailComponent_div_9_Template_app_password_biometrics_biometricsCancel_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isDecryptMode", true);
  }
}
class PasswordDetailComponent {
  router;
  route;
  walletService;
  passwordDataService;
  chromeService;
  password = null;
  loading = false;
  error = null;
  showBiometrics = false;
  decryptedData = null;
  decrypting = false;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  constructor(router, route, walletService, passwordDataService, chromeService) {
    this.router = router;
    this.route = route;
    this.walletService = walletService;
    this.passwordDataService = passwordDataService;
    this.chromeService = chromeService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better security when viewing password details
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/passwords/detail");
      }
      _this.loadPasswordData();
    })();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadPasswordData() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = null;
      try {
        // Get password data from the service
        const passwordData = _this2.passwordDataService.getCurrentPassword();
        if (passwordData) {
          _this2.password = passwordData;
          console.log("Password data loaded from service:", _this2.password);
        } else {
          // Fallback: try to get from route params if needed
          console.error("No password data found in service");
          _this2.error = "Password data not found";
        }
      } catch (error) {
        console.error("Error loading password data:", error);
        _this2.error = "Failed to load password data";
      } finally {
        _this2.loading = false;
      }
    })();
  }
  onDecryptClick() {
    this.showBiometrics = true;
  }
  onBiometricsSuccess(biometricData) {
    this.decryptPassword(biometricData);
  }
  onBiometricsCancel() {
    this.showBiometrics = false;
  }
  decryptPassword(biometricData) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.decrypting = true;
      _this3.error = null;
      try {
        const payload = {
          zelfProof: _this3.password.publicData.zelfProof,
          faceBase64: biometricData.faceBase64,
          password: biometricData.password || undefined // Optional
        };
        const response = yield _this3.walletService.retrievePassword(payload);
        console.log("Retrieve API response:", response);
        if (response?.data?.metadata) {
          // The decrypted data is in response.data.metadata
          _this3.decryptedData = {
            ...response.data.metadata,
            // Also include some public data for display
            website: response.data.publicData?.website,
            zelfName: response.data.publicData?.zelfName,
            timestamp: response.data.publicData?.timestamp,
            type: response.data.publicData?.type,
            category: response.data.publicData?.category,
            difficulty: response.data.difficulty
          };
          _this3.showBiometrics = false;
        } else {
          throw new Error("Failed to decrypt password data");
        }
      } catch (error) {
        console.error("Error decrypting password:", error);
        _this3.error = "Failed to decrypt password. Please try again.";
      } finally {
        _this3.decrypting = false;
      }
    })();
  }
  onBackToList() {
    // Clear the password data from service
    this.passwordDataService.clearCurrentPassword();
    this.router.navigate(["/dashboard/passwords"]);
  }
  onEditPassword() {
    // Navigate to edit password with the current data
    this.router.navigate(["/dashboard/passwords/edit"], {
      state: {
        password: this.password
      }
    });
  }
  onCopyPassword() {
    if (this.decryptedData?.password) {
      navigator.clipboard.writeText(this.decryptedData.password).then(() => {
        // Could add a toast notification here
        console.log("Password copied to clipboard");
      }).catch(err => {
        console.error("Failed to copy password:", err);
      });
    }
  }
  static ɵfac = function PasswordDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PasswordDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_password_data_service__WEBPACK_IMPORTED_MODULE_3__.PasswordDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_4__.ChromeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PasswordDetailComponent,
    selectors: [["app-password-detail"]],
    decls: 10,
    vars: 4,
    consts: [[1, "password-detail"], [1, "header"], [1, "btn-back", 3, "click"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "content", 4, "ngIf"], ["class", "biometrics-modal", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "icon"], [1, "btn-secondary", 3, "click"], [1, "content"], [1, "password-card"], [1, "card-header"], [1, "title-info"], [1, "subtitle"], [1, "actions"], [1, "btn-primary", 3, "click", "disabled"], [1, "card-content"], [1, "info-row"], [1, "hash"], ["class", "decrypted-data", 4, "ngIf"], [1, "decrypted-data"], [1, "data-card"], [1, "password-field"], ["title", "Copy password", 1, "btn-copy", 3, "click"], ["class", "info-row", 4, "ngIf"], [1, "difficulty-badge"], [1, "biometrics-modal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [3, "biometricsSuccess", "biometricsCancel", "isDecryptMode"]],
    template: function PasswordDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordDetailComponent_Template_button_click_2_listener() {
          return ctx.onBackToList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u2190 Back to Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Password Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PasswordDetailComponent_div_6_Template, 4, 0, "div", 3)(7, PasswordDetailComponent_div_7_Template, 9, 1, "div", 4)(8, PasswordDetailComponent_div_8_Template, 41, 13, "div", 5)(9, PasswordDetailComponent_div_9_Template, 9, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showBiometrics);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _password_biometrics_password_biometrics_component__WEBPACK_IMPORTED_MODULE_1__.PasswordBiometricsComponent],
    styles: ["@charset \"UTF-8\";\n.password-detail[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 100%;\n}\n.password-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.password-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #007bff;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 6px;\n  margin-right: 24px;\n  transition: background-color 0.2s;\n}\n.password-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.password-detail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n.password-detail[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.password-detail[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 24px;\n}\n.password-detail[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.password-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.password-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.password-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #d32f2f;\n  margin: 0 0 16px 0;\n}\n.password-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 32px 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.password-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-detail[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #545b62;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e9ecef;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-right: 20px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .title-info[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n  text-transform: capitalize;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0056b3;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #545b62;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  min-width: 120px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  text-align: right;\n  flex: 1;\n  margin-left: 16px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span.hash[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  color: #666;\n  word-break: break-all;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #28a745;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.1);\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #28a745;\n  margin: 0 0 20px 0;\n  display: flex;\n  align-items: center;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  content: \"\uD83D\uDD13\";\n  margin-right: 12px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  min-width: 120px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  text-align: right;\n  flex: 1;\n  margin-left: 16px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span.password-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span.password-field[_ngcontent-%COMP%]   .btn-copy[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span.password-field[_ngcontent-%COMP%]   .btn-copy[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.password-detail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .decrypted-data[_ngcontent-%COMP%]   .data-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span.difficulty-badge[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 4px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.password-detail[_ngcontent-%COMP%]   .biometrics-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.password-detail[_ngcontent-%COMP%]   .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 90vw;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n.password-detail[_ngcontent-%COMP%]   .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-bottom: 1px solid #e9ecef;\n  text-align: center;\n}\n.password-detail[_ngcontent-%COMP%]   .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.password-detail[_ngcontent-%COMP%]   .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.password-detail[_ngcontent-%COMP%]   .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQUVEO0FBQUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUU7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUVIO0FBQUc7RUFDQyxtQkFBQTtBQUVKO0FBRUU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUFIO0FBS0M7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUhIO0FBTUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFKSDtBQVNDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUFQSDtBQVVFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUkg7QUFXRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUSDtBQVlFO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFWSDtBQVlHO0VBQ0MsbUJBQUE7QUFWSjtBQWdCRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBZEg7QUFnQkc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFkSjtBQWdCSTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQWRMO0FBaUJJO0VBQ0MsT0FBQTtBQWZMO0FBaUJLO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZk47QUFrQks7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQWhCTjtBQW9CSTtFQUNDLGFBQUE7RUFDQSxTQUFBO0FBbEJMO0FBb0JLO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFsQk47QUFvQk07RUFDQyxtQkFBQTtBQWxCUDtBQXFCTTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7QUFuQlA7QUF1Qks7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQXJCTjtBQXVCTTtFQUNDLG1CQUFBO0FBckJQO0FBNEJJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUExQkw7QUE0Qks7RUFDQyxtQkFBQTtBQTFCTjtBQTZCSztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBM0JOO0FBOEJLO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBNUJOO0FBOEJNO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBNUJQO0FBbUNFO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FBakNIO0FBbUNHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBakNKO0FBbUNJO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0FBakNMO0FBc0NJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFwQ0w7QUFzQ0s7RUFDQyxtQkFBQTtBQXBDTjtBQXVDSztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBckNOO0FBd0NLO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBdENOO0FBd0NNO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBdENQO0FBd0NPO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQXRDUjtBQXdDUTtFQUNDLG1CQUFBO0FBdENUO0FBMkNNO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBekNQO0FBa0RDO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQWhERjtBQWtERTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBaERIO0FBa0RHO0VBQ0MsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFoREo7QUFrREk7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFoREw7QUFtREk7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFqREw7QUFxREc7RUFDQyxhQUFBO0FBbkRKOztBQXlEQTtFQUNDO0lBQ0MsdUJBQUE7RUF0REE7RUF3REQ7SUFDQyx5QkFBQTtFQXREQTtBQUNGIiwiZmlsZSI6InBhc3N3b3JkLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1kZXRhaWwge1xuXHRwYWRkaW5nOiAyNHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0LmhlYWRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHQuYnRuLWJhY2sge1xuXHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGNvbG9yOiAjMDA3YmZmO1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0cGFkZGluZzogOHB4IDE2cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDI0cHg7XG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQvLyBMb2FkaW5nIFN0YXRlXG5cdC5sb2FkaW5nLXN0YXRlIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0LnNwaW5uZXIge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0Ym9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDdiZmY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0bWFyZ2luOiAwIGF1dG8gMjRweDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC8vIEVycm9yIFN0YXRlXG5cdC5lcnJvci1zdGF0ZSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblxuXHRcdC5pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0fVxuXG5cdFx0aDMge1xuXHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGNvbG9yOiAjZDMyZjJmO1xuXHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDAgMCAzMnB4IDA7XG5cdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0fVxuXG5cdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0YmFja2dyb3VuZDogIzZjNzU3ZDtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNTQ1YjYyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHQucGFzc3dvcmQtY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0cGFkZGluZzogMjRweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHQuY2FyZC1oZWFkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG5cblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudGl0bGUtaW5mbyB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hY3Rpb25zIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblxuXHRcdFx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdFx0XHRcdFx0Jjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDU2YjM7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6ZGlzYWJsZWQge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzU0NWI2Mjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmNhcmQtY29udGVudCB7XG5cdFx0XHRcdC5pbmZvLXJvdyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG5cblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0XHRtaW4td2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTZweDtcblxuXHRcdFx0XHRcdFx0Ji5oYXNoIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5kZWNyeXB0ZWQtZGF0YSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0cGFkZGluZzogMjRweDtcblx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjEpO1xuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi8J+Uk1wiO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZGF0YS1jYXJkIHtcblx0XHRcdFx0LmluZm8tcm93IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcblxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0XHRcdG1pbi13aWR0aDogMTIwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG5cdFx0XHRcdFx0XHQmLnBhc3N3b3JkLWZpZWxkIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdFx0XHRcdFx0Z2FwOiA4cHg7XG5cblx0XHRcdFx0XHRcdFx0LmJ0bi1jb3B5IHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDRweDtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLmRpZmZpY3VsdHktYmFkZ2Uge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzE5NzZkMjtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDEycHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBCaW9tZXRyaWNzIE1vZGFsXG5cdC5iaW9tZXRyaWNzLW1vZGFsIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0ei1pbmRleDogMTAwMDtcblxuXHRcdC5tb2RhbC1jb250ZW50IHtcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdG1heC13aWR0aDogOTB2dztcblx0XHRcdG1heC1oZWlnaHQ6IDkwdmg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cblx0XHRcdC5tb2RhbC1oZWFkZXIge1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm1vZGFsLWJvZHkge1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXNzd29yZHMvcGFzc3dvcmQtZGV0YWlsL3Bhc3N3b3JkLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQUVEO0FBQUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUU7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUVIO0FBQUc7RUFDQyxtQkFBQTtBQUVKO0FBRUU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUFIO0FBS0M7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUhIO0FBTUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFKSDtBQVNDO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUFQSDtBQVVFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUkg7QUFXRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUSDtBQVlFO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFWSDtBQVlHO0VBQ0MsbUJBQUE7QUFWSjtBQWdCRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBZEg7QUFnQkc7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFkSjtBQWdCSTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtBQWRMO0FBaUJJO0VBQ0MsT0FBQTtBQWZMO0FBaUJLO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBZk47QUFrQks7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQWhCTjtBQW9CSTtFQUNDLGFBQUE7RUFDQSxTQUFBO0FBbEJMO0FBb0JLO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFsQk47QUFvQk07RUFDQyxtQkFBQTtBQWxCUDtBQXFCTTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7QUFuQlA7QUF1Qks7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQXJCTjtBQXVCTTtFQUNDLG1CQUFBO0FBckJQO0FBNEJJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUExQkw7QUE0Qks7RUFDQyxtQkFBQTtBQTFCTjtBQTZCSztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBM0JOO0FBOEJLO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBNUJOO0FBOEJNO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBNUJQO0FBbUNFO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FBakNIO0FBbUNHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBakNKO0FBbUNJO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0FBakNMO0FBc0NJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFwQ0w7QUFzQ0s7RUFDQyxtQkFBQTtBQXBDTjtBQXVDSztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBckNOO0FBd0NLO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBdENOO0FBd0NNO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBdENQO0FBd0NPO0VBQ0MsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQXRDUjtBQXdDUTtFQUNDLG1CQUFBO0FBdENUO0FBMkNNO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBekNQO0FBa0RDO0VBQ0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQWhERjtBQWtERTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBaERIO0FBa0RHO0VBQ0MsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFoREo7QUFrREk7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFoREw7QUFtREk7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFqREw7QUFxREc7RUFDQyxhQUFBO0FBbkRKOztBQXlEQTtFQUNDO0lBQ0MsdUJBQUE7RUF0REE7RUF3REQ7SUFDQyx5QkFBQTtFQXREQTtBQUNGO0FBQ0EsZ3lhQUFneWEiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtZGV0YWlsIHtcblx0cGFkZGluZzogMjRweDtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdC5oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0LmJ0bi1iYWNrIHtcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRjb2xvcjogIzAwN2JmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAyNHB4O1xuXHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0Ly8gTG9hZGluZyBTdGF0ZVxuXHQubG9hZGluZy1zdGF0ZSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblxuXHRcdC5zcGlubmVyIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0Ym9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcblx0XHRcdGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3YmZmO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdG1hcmdpbjogMCBhdXRvIDI0cHg7XG5cdFx0fVxuXG5cdFx0cCB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQvLyBFcnJvciBTdGF0ZVxuXHQuZXJyb3Itc3RhdGUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nOiA2MHB4IDIwcHg7XG5cblx0XHQuaWNvbiB7XG5cdFx0XHRmb250LXNpemU6IDY0cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdH1cblxuXHRcdGgzIHtcblx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogI2QzMmYyZjtcblx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwIDAgMzJweCAwO1xuXHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdH1cblxuXHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogIzU0NWI2Mjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuY29udGVudCB7XG5cdFx0LnBhc3N3b3JkLWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0Ym94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG5cdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnRpdGxlLWluZm8ge1xuXHRcdFx0XHRcdGZsZXg6IDE7XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3VidGl0bGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYWN0aW9ucyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cblx0XHRcdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwN2JmZjtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDA1NmIzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmOmRpc2FibGVkIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzZjNzU3ZDtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1NDViNjI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5jYXJkLWNvbnRlbnQge1xuXHRcdFx0XHQuaW5mby1yb3cge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2cHg7XG5cblx0XHRcdFx0XHRcdCYuaGFzaCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZGVjcnlwdGVkLWRhdGEge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg0MCwgMTY3LCA2OSwgMC4xKTtcblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0XHRjb250ZW50OiBcIsOwwp/ClMKTXCI7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5kYXRhLWNhcmQge1xuXHRcdFx0XHQuaW5mby1yb3cge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2cHg7XG5cblx0XHRcdFx0XHRcdCYucGFzc3dvcmQtZmllbGQge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0XHRcdFx0XHRnYXA6IDhweDtcblxuXHRcdFx0XHRcdFx0XHQuYnRuLWNvcHkge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogNHB4O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYuZGlmZmljdWx0eS1iYWRnZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlM2YyZmQ7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMTk3NmQyO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEJpb21ldHJpY3MgTW9kYWxcblx0LmJpb21ldHJpY3MtbW9kYWwge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR6LWluZGV4OiAxMDAwO1xuXG5cdFx0Lm1vZGFsLWNvbnRlbnQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0bWF4LXdpZHRoOiA5MHZ3O1xuXHRcdFx0bWF4LWhlaWdodDogOTB2aDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuXHRcdFx0Lm1vZGFsLWhlYWRlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQubW9kYWwtYm9keSB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
//# sourceMappingURL=src_app_dashboard_zelf-keys-passwords_password-detail_password-detail_component_ts-node_modul-6643f9.js.map