(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["main"],{

/***/ 4187:
/*!****************************************!*\
  !*** ./src/app/guards/wallet.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletGuard: () => (/* binding */ WalletGuard)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/wallet.service */ 69556);




const WalletGuard = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const _walletService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(app_wallet_service__WEBPACK_IMPORTED_MODULE_1__.WalletService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    const wallet = yield _walletService.getCurrentWallet();
    if (!wallet?.ethAddress) {
      router.navigate(["/welcome"]);
      return false;
    }
    return true;
  });
  return function WalletGuard() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 8798:
/*!***********************************************!*\
  !*** ./src/app/core/transloco-root.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslocoHttpLoader: () => (/* binding */ TranslocoHttpLoader),
/* harmony export */   TranslocoRootModule: () => (/* binding */ TranslocoRootModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 57878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _transloco_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../transloco.config */ 46268);





class TranslocoHttpLoader {
  http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
  getTranslation(lang) {
    return this.http.get(`./assets/i18n/${lang}.json`);
  }
  static ɵfac = function TranslocoHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslocoHttpLoader)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TranslocoHttpLoader,
    factory: TranslocoHttpLoader.ɵfac,
    providedIn: "root"
  });
}
class TranslocoRootModule {
  static ɵfac = function TranslocoRootModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslocoRootModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: TranslocoRootModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_transloco_config__WEBPACK_IMPORTED_MODULE_0__.translocoProvider, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.provideAppInitializer)(() => {
      const initializerFn = (() => {
        const translocoService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoService);
        const defaultLang = translocoService.getDefaultLang();
        translocoService.setActiveLang(defaultLang);
        return () => translocoService.load(defaultLang).toPromise();
      })();
      return initializerFn();
    })],
    imports: [_jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TranslocoRootModule, {
    imports: [_jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule],
    exports: [_jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule]
  });
})();

/***/ }),

/***/ 19519:
/*!**********************************!*\
  !*** ./src/app/vault.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VaultService: () => (/* binding */ VaultService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openpgp */ 22634);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.service */ 69556);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrome.service */ 85043);






class VaultService {
  _walletService;
  _chromeService;
  _incorrectCount = 0;
  _lastVerified = 0;
  _mnemonic = "";
  _password = "";
  _password$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
  _passwordAttempts = 4;
  constructor(_walletService, _chromeService) {
    this._walletService = _walletService;
    this._chromeService = _chromeService;
    this._chromeService.onLastVerifiedChanged$.subscribe(lastVerified => {
      if (this._lastVerified === lastVerified) return;
      if (!lastVerified) {
        this._lastVerified = 0;
        return;
      }
      // Tamper resistance
      this._chromeService.setItem("lastVerified", 0);
    });
    this._chromeService.getItem("lastVerified").then(lastVerified => {
      this._lastVerified = lastVerified ? lastVerified : 0;
    });
  }
  get mnemonic() {
    return this._mnemonic;
  }
  set mnemonic(value) {
    this._mnemonic = value;
  }
  set passwordAttempts(value) {
    this._passwordAttempts = value;
  }
  get lastVerified() {
    return this._lastVerified;
  }
  get password$() {
    return this._password$.asObservable();
  }
  get password() {
    return this._password || "";
  }
  set password(value) {
    this._password$.next();
    this._password = value;
  }
  get remainingAttempts() {
    return this._passwordAttempts - this._incorrectCount;
  }
  biometricsRequired() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const lastVerified = yield _this._chromeService.getItem("lastVerified");
      if (!lastVerified) return true;
      // Force biometrics if someone has tampered with the lastVerified timestamp
      if (_this._lastVerified !== lastVerified) return true;
      const settings = yield _this._chromeService.getItem("settings");
      const minutesSinceLastVerified = Math.floor((new Date().getTime() - new Date(lastVerified).getTime()) / (1000 * 60));
      if (minutesSinceLastVerified > (settings?.security?.biometricVerificationInterval || 10)) return true;
      return false;
    })();
  }
  decryptMessage(encryptedMessage, privateKeyArmoured, passphrase) {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (yield _this2.biometricsRequired()) throw new Error("expired");
        const privateKey = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.readPrivateKey({
          armoredKey: privateKeyArmoured
        });
        const decryptedPrivateKey = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.decryptKey({
          privateKey,
          passphrase
        });
        const message = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.readMessage({
          armoredMessage: encryptedMessage
        });
        const {
          data: decrypted
        } = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.decrypt({
          message,
          decryptionKeys: decryptedPrivateKey
        });
        _this2._incorrectCount = 0;
        return decrypted;
      } catch (error) {
        if (error?.message !== "expired" && _this2.remainingAttempts > 0) {
          _this2._incorrectCount++;
        } else {
          yield _this2._walletService.clearPGPKeys();
          _this2._incorrectCount = 0;
        }
        throw error;
      }
    })();
  }
  getWallet() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.password) {
        throw new Error("Password not set");
      }
      const wallet = yield _this3._walletService.getCurrentWallet();
      if (!wallet?.pgp?.encryptedMessage || !wallet?.pgp?.privateKey) {
        throw new Error("No wallet available");
      }
      const decryptedData = yield _this3.decryptMessage(wallet.pgp.encryptedMessage, wallet.pgp.privateKey, _this3.password);
      return JSON.parse(decryptedData);
    })();
  }
  setLastVerified() {
    this._incorrectCount = 0;
    const newLastVerified = new Date().getTime();
    this._lastVerified = newLastVerified;
    this._chromeService.setItem("lastVerified", newLastVerified);
  }
  static ɵfac = function VaultService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_chrome_service__WEBPACK_IMPORTED_MODULE_3__.ChromeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: VaultService,
    factory: VaultService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _http_wrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-wrapper.service */ 84099);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.service */ 69556);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrome.service */ 85043);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 84460);








class AppComponent {
  _httpWrapperService;
  _walletService;
  _chromeService;
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  publicKey;
  apiUrl = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  isPopout = false;
  constructor(_httpWrapperService, _walletService, _chromeService) {
    this._httpWrapperService = _httpWrapperService;
    this._walletService = _walletService;
    this._chromeService = _chromeService;
    this.isPopout = this._chromeService.isPopout;
    this._chromeService.isPopout$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscriber$)).subscribe(isPopout => {
      this.isPopout = isPopout;
    });
  }
  ngOnInit() {
    this._getPublicKey();
  }
  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  _getPublicKey() {
    let {
      hash
    } = this._walletService.getUserFingerprint();
    const url = `${this.apiUrl}/api/sessions/yek-cilbup`;
    this._httpWrapperService.sendRequest("get", url, {
      identifier: hash
    }).then(response => {
      this.publicKey = response.data;
      this._chromeService.setItem("publicKey", this.publicKey);
      this._httpWrapperService.setPublicKey(this.publicKey);
    });
  }
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_http_wrapper_service__WEBPACK_IMPORTED_MODULE_1__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_3__.ChromeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: false,
    decls: 3,
    vars: 1,
    consts: [[1, "flex", "flex-col", "flex-auto", "main-div", 3, "ngClass"], [1, "flex", "flex-col", "flex-auto"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.isPopout ? "main-div--popout" : "");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
    styles: ["/* Hide scrollbar for Chrome, Safari and Opera */\n.app::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge, and Firefox */\n.app {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBQTtBQUNBO0VBQ0MsYUFBQTtBQUNEOztBQUVBLDZDQUFBO0FBQ0E7RUFDQyx3QkFBQSxFQUFBLGdCQUFBO0VBQ0EscUJBQUEsRUFBQSxZQUFBO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuLmFwcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UsIGFuZCBGaXJlZm94ICovXG4uYXBwIHtcblx0LW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbn1cblxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFBO0FBQ0E7RUFDQyxhQUFBO0FBQ0Q7O0FBRUEsNkNBQUE7QUFDQTtFQUNDLHdCQUFBLEVBQUEsZ0JBQUE7RUFDQSxxQkFBQSxFQUFBLFlBQUE7QUFDRDtBQUNBLG9xQkFBb3FCIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuLmFwcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UsIGFuZCBGaXJlZm94ICovXG4uYXBwIHtcblx0LW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */", "html {\n  --mat-sys-body-large: 400 1rem / 1.5rem Poppins;\n  --mat-sys-body-large-font: Poppins;\n  --mat-sys-body-large-line-height: 1.5rem;\n  --mat-sys-body-large-size: 1rem;\n  --mat-sys-body-large-tracking: 0.031rem;\n  --mat-sys-body-large-weight: 400;\n  --mat-sys-body-medium: 400 0.875rem / 1.25rem Poppins;\n  --mat-sys-body-medium-font: Poppins;\n  --mat-sys-body-medium-line-height: 1.25rem;\n  --mat-sys-body-medium-size: 0.875rem;\n  --mat-sys-body-medium-tracking: 0.016rem;\n  --mat-sys-body-medium-weight: 400;\n  --mat-sys-body-small: 400 0.75rem / 1rem Poppins;\n  --mat-sys-body-small-font: Poppins;\n  --mat-sys-body-small-line-height: 1rem;\n  --mat-sys-body-small-size: 0.75rem;\n  --mat-sys-body-small-tracking: 0.025rem;\n  --mat-sys-body-small-weight: 400;\n  --mat-sys-display-large: 400 3.562rem / 4rem Poppins;\n  --mat-sys-display-large-font: Poppins;\n  --mat-sys-display-large-line-height: 4rem;\n  --mat-sys-display-large-size: 3.562rem;\n  --mat-sys-display-large-tracking: -0.016rem;\n  --mat-sys-display-large-weight: 400;\n  --mat-sys-display-medium: 400 2.812rem / 3.25rem Poppins;\n  --mat-sys-display-medium-font: Poppins;\n  --mat-sys-display-medium-line-height: 3.25rem;\n  --mat-sys-display-medium-size: 2.812rem;\n  --mat-sys-display-medium-tracking: 0;\n  --mat-sys-display-medium-weight: 400;\n  --mat-sys-display-small: 400 2.25rem / 2.75rem Poppins;\n  --mat-sys-display-small-font: Poppins;\n  --mat-sys-display-small-line-height: 2.75rem;\n  --mat-sys-display-small-size: 2.25rem;\n  --mat-sys-display-small-tracking: 0;\n  --mat-sys-display-small-weight: 400;\n  --mat-sys-headline-large: 400 2rem / 2.5rem Poppins;\n  --mat-sys-headline-large-font: Poppins;\n  --mat-sys-headline-large-line-height: 2.5rem;\n  --mat-sys-headline-large-size: 2rem;\n  --mat-sys-headline-large-tracking: 0;\n  --mat-sys-headline-large-weight: 400;\n  --mat-sys-headline-medium: 400 1.75rem / 2.25rem Poppins;\n  --mat-sys-headline-medium-font: Poppins;\n  --mat-sys-headline-medium-line-height: 2.25rem;\n  --mat-sys-headline-medium-size: 1.75rem;\n  --mat-sys-headline-medium-tracking: 0;\n  --mat-sys-headline-medium-weight: 400;\n  --mat-sys-headline-small: 400 1.5rem / 2rem Poppins;\n  --mat-sys-headline-small-font: Poppins;\n  --mat-sys-headline-small-line-height: 2rem;\n  --mat-sys-headline-small-size: 1.5rem;\n  --mat-sys-headline-small-tracking: 0;\n  --mat-sys-headline-small-weight: 400;\n  --mat-sys-label-large: 500 0.875rem / 1.25rem Poppins;\n  --mat-sys-label-large-font: Poppins;\n  --mat-sys-label-large-line-height: 1.25rem;\n  --mat-sys-label-large-size: 0.875rem;\n  --mat-sys-label-large-tracking: 0.006rem;\n  --mat-sys-label-large-weight: 500;\n  --mat-sys-label-large-weight-prominent: 700;\n  --mat-sys-label-medium: 500 0.75rem / 1rem Poppins;\n  --mat-sys-label-medium-font: Poppins;\n  --mat-sys-label-medium-line-height: 1rem;\n  --mat-sys-label-medium-size: 0.75rem;\n  --mat-sys-label-medium-tracking: 0.031rem;\n  --mat-sys-label-medium-weight: 500;\n  --mat-sys-label-medium-weight-prominent: 700;\n  --mat-sys-label-small: 500 0.688rem / 1rem Poppins;\n  --mat-sys-label-small-font: Poppins;\n  --mat-sys-label-small-line-height: 1rem;\n  --mat-sys-label-small-size: 0.688rem;\n  --mat-sys-label-small-tracking: 0.031rem;\n  --mat-sys-label-small-weight: 500;\n  --mat-sys-title-large: 400 1.375rem / 1.75rem Poppins;\n  --mat-sys-title-large-font: Poppins;\n  --mat-sys-title-large-line-height: 1.75rem;\n  --mat-sys-title-large-size: 1.375rem;\n  --mat-sys-title-large-tracking: 0;\n  --mat-sys-title-large-weight: 400;\n  --mat-sys-title-medium: 500 1rem / 1.5rem Poppins;\n  --mat-sys-title-medium-font: Poppins;\n  --mat-sys-title-medium-line-height: 1.5rem;\n  --mat-sys-title-medium-size: 1rem;\n  --mat-sys-title-medium-tracking: 0.009rem;\n  --mat-sys-title-medium-weight: 500;\n  --mat-sys-title-small: 500 0.875rem / 1.25rem Poppins;\n  --mat-sys-title-small-font: Poppins;\n  --mat-sys-title-small-line-height: 1.25rem;\n  --mat-sys-title-small-size: 0.875rem;\n  --mat-sys-title-small-tracking: 0.006rem;\n  --mat-sys-title-small-weight: 500;\n}\nhtml {\n  --mat-sys-corner-extra-large: 28px;\n  --mat-sys-corner-extra-large-top: 28px 28px 0 0;\n  --mat-sys-corner-extra-small: 4px;\n  --mat-sys-corner-extra-small-top: 4px 4px 0 0;\n  --mat-sys-corner-full: 9999px;\n  --mat-sys-corner-large: 16px;\n  --mat-sys-corner-large-end: 0 16px 16px 0;\n  --mat-sys-corner-large-start: 16px 0 0 16px;\n  --mat-sys-corner-large-top: 16px 16px 0 0;\n  --mat-sys-corner-medium: 12px;\n  --mat-sys-corner-none: 0;\n  --mat-sys-corner-small: 8px;\n}\nhtml {\n  --mat-sys-dragged-state-layer-opacity: 0.16;\n  --mat-sys-focus-state-layer-opacity: 0.12;\n  --mat-sys-hover-state-layer-opacity: 0.08;\n  --mat-sys-pressed-state-layer-opacity: 0.12;\n}\n\nhtml {\n  --mat-dialog-container-max-width: 600px;\n}\n\nhtml {\n  --mat-menu-container-color: #ffffff;\n}\nhtml {\n  --mat-menu-item-hover-state-layer-color: #eeedf1;\n}\n\nhtml {\n  --mdc-icon-button-icon-size: 16px;\n}\nhtml {\n  --mdc-icon-button-icon-color: #181818;\n}\nhtml {\n  --mdc-icon-button-disabled-icon-color: #73777f;\n}\n\nhtml {\n  --mat-menu-item-with-icon-leading-spacing: 24px;\n}\nhtml {\n  --mat-menu-item-with-icon-trailing-spacing: 24px;\n}\n\n.zelf-button-external-link {\n  display: block;\n}\n.zelf-button-external-link--wide {\n  width: 100%;\n}\n\n.zelf-button {\n  align-items: center;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  height: 56px;\n  justify-content: center;\n  outline: none;\n  padding: 8px 24px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.zelf-button span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-button__text--margin-right {\n  margin-right: 1rem;\n}\n.zelf-button--hyperlink {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--hyperlink--small {\n  font-size: 11px;\n}\n.zelf-button--hyperlink svg {\n  fill: #73777f;\n}\n.zelf-button--hyperlink:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-button--hyperlink:hover svg {\n  fill: #181818;\n}\n.zelf-button--hyperlink[disabled] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-button--hyperlink[disabled] svg {\n  fill: #96939e;\n}\n.zelf-button--thin {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n.zelf-button--wide {\n  width: 100%;\n}\n.zelf-button--wide.zelf-button--hyperlink {\n  border-radius: 16px;\n}\n.zelf-button--black {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--black:active {\n  background-color: #96939e !important;\n}\n.zelf-button--black:hover {\n  background-color: #ff5721 !important;\n}\n.zelf-button--black svg {\n  fill: #ffffff;\n}\n.zelf-button--black mat-spinner svg {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-button--black[disabled] {\n  cursor: not-allowed;\n  background-color: #73777f !important;\n  color: #ffffff !important;\n}\n.zelf-button--black[disabled] mat-spinner svg {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--anti-flash-white {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--anti-flash-white svg {\n  fill: #181818;\n}\n.zelf-button--anti-flash-white:focus, .zelf-button--anti-flash-white:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-button--anti-flash-white:focus svg, .zelf-button--anti-flash-white:hover svg {\n  fill: #ffffff;\n}\n.zelf-button--anti-flash-white[disabled] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--anti-flash-white[disabled] svg {\n  fill: #c3c6cf;\n}\n.zelf-button--anti-flash-white[disabled] mat-spinner svg {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white {\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--white:focus, .zelf-button--white:hover {\n  background-color: #eeedf1 !important;\n}\n.zelf-button--white[disabled] {\n  cursor: not-allowed;\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n}\n.zelf-button--white[disabled] mat-spinner svg {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white svg {\n  fill: #181818;\n}\n.zelf-button--white mat-spinner svg {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--outlined {\n  border: 1px solid #181818 !important;\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--outlined:focus, .zelf-button--outlined:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--outlined[disabled] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--outlined svg {\n  fill: #181818;\n}\n.zelf-button--red {\n  border: none !important;\n  background-color: transparent !important;\n  color: #dc362e !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--red:focus, .zelf-button--red:hover {\n  background-color: #fceeee !important;\n}\n.zelf-button--red[disabled] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--red svg {\n  fill: #dc362e;\n}\n.zelf-button--error {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-button--error svg {\n  fill: #dc362e !important;\n}\n.zelf-button--success {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-button--success svg {\n  fill: #1ea446 !important;\n}\n.zelf-button--no-fill svg {\n  fill: none !important;\n}\n.zelf-button--no-fill:focus svg, .zelf-button--no-fill:hover svg, .zelf-button--no-fill[disabled] svg {\n  fill: none !important;\n}\n.zelf-button--pill {\n  border-radius: 9999px;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n}\n\n.zelf-icon-button {\n  font-family: \"Poppins\", Arial, sans-serif;\n  align-items: center;\n  background-color: #eeedf1 !important;\n  border-radius: 56px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  gap: 16px;\n  height: 56px;\n  justify-content: center;\n  min-height: 56px;\n  min-width: 56px;\n  outline: none;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 56px;\n}\n.zelf-icon-button span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-icon-button.zelf-icon-button--border-soft {\n  border-radius: 16px;\n}\n.zelf-icon-button svg {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n  height: 24px;\n  width: 24px;\n}\n.zelf-icon-button:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button:hover svg {\n  fill: white;\n}\n.zelf-icon-button--border-soft {\n  border-radius: 16px;\n}\n.zelf-icon-button--40 {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 40px;\n  padding: 0 8px;\n}\n.zelf-icon-button--40.zelf-icon-button--border-soft {\n  border-radius: 14px;\n}\n.zelf-icon-button--40 svg {\n  height: 20px;\n  width: 20px;\n}\n.zelf-icon-button--hyperlink {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--hyperlink--small {\n  font-size: 11px;\n}\n.zelf-icon-button--hyperlink svg {\n  fill: #73777f;\n}\n.zelf-icon-button--hyperlink:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-icon-button--hyperlink:hover svg {\n  fill: #181818;\n}\n.zelf-icon-button--hyperlink[disabled] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-icon-button--hyperlink[disabled] svg {\n  fill: #96939e;\n}\n.zelf-icon-button--hyperlink[disabled] mat-spinner svg {\n  fill: #96939e !important;\n  stroke: #96939e !important;\n}\n.zelf-icon-button--black {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--black:active {\n  background-color: #96939e !important;\n}\n.zelf-icon-button--black:hover {\n  background-color: #73777f !important;\n}\n.zelf-icon-button--black svg {\n  fill: #ffffff;\n}\n.zelf-icon-button--black mat-spinner svg {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-icon-button--black[disabled] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--black[disabled] svg {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--black[disabled] mat-spinner svg {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-icon-button--anti-flash-white {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--anti-flash-white svg {\n  fill: #181818;\n}\n.zelf-icon-button--anti-flash-white:focus, .zelf-icon-button--anti-flash-white:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button--anti-flash-white:focus svg, .zelf-icon-button--anti-flash-white:hover svg {\n  fill: #ffffff;\n}\n.zelf-icon-button--anti-flash-white[disabled] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--anti-flash-white[disabled] svg {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--anti-flash-white[disabled] mat-spinner svg {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-icon-button--transparent {\n  background-color: transparent !important;\n  color: #181818 !important;\n}\n.zelf-icon-button--transparent svg {\n  fill: #181818;\n}\n.zelf-icon-button--transparent:focus, .zelf-icon-button--transparent:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--transparent[disabled] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-icon-button--transparent[disabled] svg {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--no-fill svg {\n  fill: none !important;\n}\n.zelf-icon-button--no-fill:focus svg, .zelf-icon-button--no-fill:hover svg, .zelf-icon-button--no-fill[disabled] svg {\n  fill: none !important;\n}\n.zelf-icon-button--text {\n  width: auto !important;\n  min-width: initial !important;\n}\n.zelf-icon-button--error {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-icon-button--error svg {\n  fill: #dc362e !important;\n}\n.zelf-icon-button--success {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-icon-button--success svg {\n  fill: #1ea446 !important;\n}\n.zelf-icon-button--pill {\n  border-radius: 9999px;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n  width: auto;\n}\n\n.animated-tabs {\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: 37px;\n  width: 100%;\n}\n.animated-tabs__switch {\n  position: relative;\n  text-align: center;\n}\n.animated-tabs__switch--left:after {\n  box-sizing: border-box;\n  left: 0;\n}\n.animated-tabs__switch--right:after {\n  box-sizing: border-box;\n  left: 50%;\n}\n.animated-tabs__switch:after {\n  background-color: #eeedf1;\n  border-radius: 27.5px;\n  box-sizing: border-box;\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  top: 0;\n  transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.3s;\n  width: 50%;\n  z-index: 0;\n}\n.animated-tabs__switch .animated-tab {\n  color: #858585;\n  cursor: pointer;\n  border-radius: 27.5px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  padding: 8px 0;\n  position: relative;\n  transition: color 200ms;\n  width: 50%;\n  z-index: 1;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.animated-tabs__switch .animated-tab:hover:not(.animated-tab--active) {\n  background-color: #f0d3d4;\n  color: black;\n}\n.animated-tabs__switch .animated-tab--active {\n  color: black;\n}\n@media (max-width: 600px) {\n  .animated-tabs__switch .animated-tab {\n    font-size: 12px;\n  }\n}\n\n.ripple {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  overflow: visible;\n}\n.ripple::before, .ripple::after {\n  content: \"\";\n  overflow: visible;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 4px solid #b589f0;\n  opacity: 0;\n  transition: border-color 2s cubic-bezier(0.075, 0.82, 0.165, 1);\n  animation: ripple 0.8s infinite;\n}\n.ripple::after {\n  animation-delay: 1s;\n}\n.ripple--268 {\n  width: 268px;\n  height: 268px;\n}\n.ripple--268 .ripple {\n  border: 8px solid #b589f0;\n}\n\n@keyframes ripple {\n  0% {\n    transform: scale(0.5);\n    border-color: #b589f0;\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n    border-color: #f0d3d4;\n  }\n  100% {\n    transform: scale(1);\n    border-color: #b589f0;\n    opacity: 0;\n  }\n}\n@keyframes checkbox-bounce {\n  50% {\n    transform: translateY(-50%) scale(1.2);\n  }\n  75% {\n    transform: translateY(-50%) scale(0.9);\n  }\n  100% {\n    transform: translateY(-50%) scale(1);\n  }\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-Regular.woff2') format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-Medium.woff2') format(\"woff2\");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-SemiBold.woff2') format(\"woff2\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-Bold.woff2') format(\"woff2\");\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Poppins\";\n  src: url('Poppins-ExtraBold.woff2') format(\"woff2\");\n  font-weight: 800;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Menda\";\n  src: url('Menda-Black.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Menda\";\n  src: url('Menda-SemiBold.woff2') format(\"woff2\");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"Menda\";\n  src: url('Menda-Bold.woff2') format(\"woff2\");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n* {\n  font-family: \"Poppins\", Arial, sans-serif;\n  scrollbar-width: 6px;\n  scrollbar-color: #96939e rgba(0, 0, 0, 0.05);\n}\n*::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: #ffffff;\n}\n*::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.05);\n  border: none;\n}\n*::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #96939e;\n  -webkit-transition: background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  transition: background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n\nhtml {\n  color-scheme: only light;\n  position: relative !important;\n  min-width: 347px;\n}\n\nbody {\n  margin: 0px !important;\n  height: 100vh;\n}\n\napp-onboarding {\n  height: 100%;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.main-bg {\n  background: linear-gradient(170deg, #ffffff 20%, #f7b7b9 40%, #c196f9 70%, #85c6ff 100%);\n}\n\n.loader {\n  position: fixed;\n  background-color: rgba(239, 239, 239, 0.6156862745);\n  z-index: 500;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.main-div {\n  background: rgba(211, 211, 211, 0.3607843137);\n  width: 100%;\n  margin: 0 auto;\n}\n.main-div--popout {\n  height: 100vh;\n  max-height: 600px;\n  max-width: 375px;\n  min-height: 600px;\n  width: 375px;\n}\n.main-div--popout .zelf-app__content {\n  padding: 0 !important;\n}\n.main-div--popout .home__assets-content {\n  padding: 0 !important;\n}\n.main-div--popout .zelf-app__footer,\n.main-div--popout .zelf-app__header {\n  display: none !important;\n}\n.main-div--popout .home__actions-container {\n  min-height: 234px !important;\n}\n.main-div--popout .zelf-card {\n  min-height: 100% !important;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-80p {\n  width: 80%;\n}\n\n.w-75p {\n  width: 75%;\n}\n\n.w-70p {\n  width: 70%;\n}\n\n.w-60p {\n  width: 60%;\n}\n\n.w-65p {\n  width: 65%;\n}\n\n.w-50p {\n  width: 50% !important;\n}\n\n.w-35p {\n  width: 35%;\n}\n\n.h-full {\n  height: 100vh;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.f-white {\n  color: white !important;\n}\n\n.primaryColor {\n  color: #01236d !important;\n}\n\n.divider-height {\n  width: 2px;\n  background-color: rgba(128, 128, 128, 0.431);\n  height: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n/* Default (sm) */\n.justify-center {\n  justify-content: center;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.h-20 {\n  height: 20px;\n}\n\n.my-2 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n/* Medium (md) */\n@media (min-width: 768px) {\n  .sm\\:h-8 {\n    height: 8px;\n  }\n}\n/* Large (lg) */\n@media (min-width: 1024px) {\n  .h-20 {\n    height: 20px;\n  }\n  .sm\\:h-8 {\n    height: 8px;\n  }\n}\n/* Extra Large (xl) */\n@media (min-width: 1280px) {\n  .h-20 {\n    height: 20px;\n  }\n  .sm\\:h-8 {\n    height: 8px;\n  }\n}\n/* Padding */\n.p-0 {\n  padding: 0;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.pr-2 {\n  padding-right: 0.5rem;\n}\n\n.pr-4 {\n  padding-right: 1rem;\n}\n\n.pr-6 {\n  padding-right: 1.5rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n/* Margins */\n.m-0 {\n  margin: 0;\n}\n\n.m-1 {\n  margin: 0.25rem;\n}\n\n.m-2 {\n  margin: 0.5rem;\n}\n\n.m-3 {\n  margin: 0.75rem;\n}\n\n.m-4 {\n  margin: 1rem;\n}\n\n.m-5 {\n  margin: 1.25rem;\n}\n\n.m-6 {\n  margin: 1.5rem;\n}\n\n.mx-0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n\n/* Additional Padding Classes */\n.p-7 {\n  padding: 1.75rem;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.p-9 {\n  padding: 2.25rem;\n}\n\n.p-10 {\n  padding: 2.5rem;\n}\n\n.p-11 {\n  padding: 2.75rem;\n}\n\n.p-12 {\n  padding: 3rem;\n}\n\n.p-14 {\n  padding: 3.5rem;\n}\n\n.p-16 {\n  padding: 4rem;\n}\n\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.px-9 {\n  padding-left: 2.25rem;\n  padding-right: 2.25rem;\n}\n\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\n\n.px-11 {\n  padding-left: 2.75rem;\n  padding-right: 2.75rem;\n}\n\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n.px-14 {\n  padding-left: 3.5rem;\n  padding-right: 3.5rem;\n}\n\n.px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n\n/* Additional Margin Classes */\n.m-7 {\n  margin: 1.75rem;\n}\n\n.m-8 {\n  margin: 2rem;\n}\n\n.m-9 {\n  margin: 2.25rem;\n}\n\n.m-10 {\n  margin: 2.5rem;\n}\n\n.m-11 {\n  margin: 2.75rem;\n}\n\n.m-12 {\n  margin: 3rem;\n}\n\n.m-14 {\n  margin: 3.5rem;\n}\n\n.m-16 {\n  margin: 4rem;\n}\n\n.mx-7 {\n  margin-left: 1.75rem;\n  margin-right: 1.75rem;\n}\n\n.mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n.mx-9 {\n  margin-left: 2.25rem;\n  margin-right: 2.25rem;\n}\n\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n\n.mx-11 {\n  margin-left: 2.75rem;\n  margin-right: 2.75rem;\n}\n\n.mx-12 {\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.mx-14 {\n  margin-left: 3.5rem;\n  margin-right: 3.5rem;\n}\n\n.mx-16 {\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n\n/* Padding Top and Bottom Classes */\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n.pt-2 {\n  padding-top: 0.5rem;\n}\n\n.pt-3 {\n  padding-top: 0.75rem;\n}\n\n.pt-4 {\n  padding-top: 1rem;\n}\n\n.pt-5 {\n  padding-top: 1.25rem;\n}\n\n.pt-6 {\n  padding-top: 1.5rem;\n}\n\n.pt-7 {\n  padding-top: 1.75rem;\n}\n\n.pt-8 {\n  padding-top: 2rem;\n}\n\n.pt-9 {\n  padding-top: 2.25rem;\n}\n\n.pt-10 {\n  padding-top: 2.5rem;\n}\n\n.pt-11 {\n  padding-top: 2.75rem;\n}\n\n.pt-12 {\n  padding-top: 3rem;\n}\n\n.pt-14 {\n  padding-top: 3.5rem;\n}\n\n.pt-16 {\n  padding-top: 4rem;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\n\n.pb-4 {\n  padding-bottom: 1rem;\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n\n.pb-7 {\n  padding-bottom: 1.75rem;\n}\n\n.pb-8 {\n  padding-bottom: 2rem;\n}\n\n.pb-9 {\n  padding-bottom: 2.25rem;\n}\n\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\n\n.pb-11 {\n  padding-bottom: 2.75rem;\n}\n\n.pb-12 {\n  padding-bottom: 3rem;\n}\n\n.pb-14 {\n  padding-bottom: 3.5rem;\n}\n\n.pb-16 {\n  padding-bottom: 4rem;\n}\n\n/* Margin Top and Bottom Classes */\n.mt-1 {\n  margin-top: 0.25rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.mt-7 {\n  margin-top: 1.75rem;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mt-9 {\n  margin-top: 2.25rem;\n}\n\n.mt-10 {\n  margin-top: 2.5rem;\n}\n\n.mt-11 {\n  margin-top: 2.75rem;\n}\n\n.mt-12 {\n  margin-top: 3rem;\n}\n\n.mt-14 {\n  margin-top: 3.5rem;\n}\n\n.mt-16 {\n  margin-top: 4rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.mb-9 {\n  margin-bottom: 2.25rem;\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n\n.mb-11 {\n  margin-bottom: 2.75rem;\n}\n\n.mb-12 {\n  margin-bottom: 3rem;\n}\n\n.mb-14 {\n  margin-bottom: 3.5rem;\n}\n\n.mb-16 {\n  margin-bottom: 4rem;\n}\n\n/* Combined Padding Top and Bottom Classes */\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.py-7 {\n  padding-top: 1.75rem;\n  padding-bottom: 1.75rem;\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.py-9 {\n  padding-top: 2.25rem;\n  padding-bottom: 2.25rem;\n}\n\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\n\n.py-11 {\n  padding-top: 2.75rem;\n  padding-bottom: 2.75rem;\n}\n\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n.py-14 {\n  padding-top: 3.5rem;\n  padding-bottom: 3.5rem;\n}\n\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n/* Combined Margin Top and Bottom Classes */\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.my-7 {\n  margin-top: 1.75rem;\n  margin-bottom: 1.75rem;\n}\n\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.my-9 {\n  margin-top: 2.25rem;\n  margin-bottom: 2.25rem;\n}\n\n.my-10 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n.my-11 {\n  margin-top: 2.75rem;\n  margin-bottom: 2.75rem;\n}\n\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n\n.my-14 {\n  margin-top: 3.5rem;\n  margin-bottom: 3.5rem;\n}\n\n.my-16 {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n\n.main-button {\n  background-color: black !important;\n  color: white !important;\n  height: 52px !important;\n  font-size: 18px;\n  width: 100%;\n  border-radius: 10px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.secondary-button {\n  background-color: white !important;\n  color: black !important;\n  height: 52px !important;\n  font-size: 18px;\n  width: 100%;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.main-title {\n  margin-top: 0px !important;\n  color: black !important;\n}\n\n.font-18 {\n  font-size: 18px !important;\n}\n\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"Menda\", sans-serif;\n}\n\nh1 {\n  font-size: 32px;\n  font-weight: 600;\n  margin: 0px;\n}\n\nh2 {\n  font-weight: 600;\n}\n\nh3 {\n  font-weight: normal;\n}\n\n.zelf-p {\n  font-size: 16px;\n}\n\n.secondary-button {\n  background-color: white !important;\n  color: black !important;\n  border: 1px solid rgba(11, 87, 208, 0.5411764706) !important;\n  height: 45px !important;\n  font-size: 18px;\n}\n\n.secondary-button:disabled {\n  color: #4e6599 !important;\n  border: 1px solid rgba(11, 87, 208, 0.2117647059) !important;\n}\n\n.link {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.link:hover {\n  color: #0b57d0;\n}\n\n/* Margin Right Classes */\n.mr-1 {\n  margin-right: 0.25rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mr-4 {\n  margin-right: 1rem;\n}\n\n.mr-5 {\n  margin-right: 1.25rem;\n}\n\n.mr-6 {\n  margin-right: 1.5rem;\n}\n\n.mr-7 {\n  margin-right: 1.75rem;\n}\n\n.mr-8 {\n  margin-right: 2rem;\n}\n\n.mr-9 {\n  margin-right: 2.25rem;\n}\n\n.mr-10 {\n  margin-right: 2.5rem;\n}\n\n.mr-11 {\n  margin-right: 2.75rem;\n}\n\n.mr-12 {\n  margin-right: 3rem;\n}\n\n.mr-14 {\n  margin-right: 3.5rem;\n}\n\n.mr-16 {\n  margin-right: 4rem;\n}\n\n/* Margin Left Classes */\n.ml-1 {\n  margin-left: 0.25rem;\n}\n\n.ml-2 {\n  margin-left: 0.5rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.ml-5 {\n  margin-left: 1.25rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.ml-7 {\n  margin-left: 1.75rem;\n}\n\n.ml-8 {\n  margin-left: 2rem;\n}\n\n.ml-9 {\n  margin-left: 2.25rem;\n}\n\n.ml-10 {\n  margin-left: 2.5rem;\n}\n\n.ml-11 {\n  margin-left: 2.75rem;\n}\n\n.ml-12 {\n  margin-left: 3rem;\n}\n\n.ml-14 {\n  margin-left: 3.5rem;\n}\n\n.ml-16 {\n  margin-left: 4rem;\n}\n\n.on-header {\n  width: 92%;\n  height: 80px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.y-scroll {\n  overflow-y: scroll;\n}\n\n.rounded-button {\n  border-radius: 20px;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.mat-mdc-snack-bar-container {\n  margin: 0px !important;\n}\n\n.w-24px {\n  width: 24px;\n}\n\n.w-28px {\n  width: 28px;\n}\n\n.w-32px {\n  width: 32px;\n}\n\n.text-grey {\n  color: rgba(128, 128, 128, 0.694) !important;\n}\n\n.zpan {\n  font-family: \"Menda\", sans-serif;\n}\n\n.zline {\n  border-bottom: 2px solid black;\n  width: 100%;\n  height: 2px;\n}\n\n.zline-2 {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.386);\n  width: 100%;\n  height: 2px;\n}\n\n.w-fix {\n  width: 602px;\n}\n\n.zns-logo {\n  width: 250px;\n}\n\n.send-transaction-header {\n  background: black;\n  color: white;\n  height: 60px;\n  width: 100%;\n  text-align: center;\n}\n\n/* For extremely small screen devices (595px and below) */\n@media only screen and (max-width: 595px) {\n  h2 {\n    font-size: 18px;\n  }\n  .zelf-content {\n    width: 100% !important;\n    height: 100%;\n  }\n  .zelf-header {\n    width: 95% !important;\n  }\n  .w-fix {\n    width: 100%;\n  }\n  .zelf-card-old {\n    width: 95%;\n  }\n}\n.stats {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 4px;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n.stats--no-margin {\n  margin-top: 0;\n}\n.stats--no-margin .stats__percentage {\n  margin-right: 0;\n}\n.stats__text {\n  color: #96939e;\n}\n.stats__text--colored {\n  color: inherit;\n  margin-left: 6px;\n}\n.stats__arrow {\n  align-items: center;\n  background-color: #e3e3e3;\n  border-radius: 16px;\n  display: inline-flex;\n  height: 16px;\n  justify-content: center;\n  margin-right: 6px;\n  width: 16px;\n}\n.stats__percentage {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  margin-right: 6px;\n}\n.stats__percentage--positive {\n  color: #1ea446 !important;\n}\n.stats__percentage--positive .stats__arrow {\n  background-color: #e7f8ed;\n}\n.stats__percentage--positive svg {\n  fill: #1ea446;\n}\n.stats__percentage--negative {\n  color: #dc362e !important;\n}\n.stats__percentage--negative .stats__arrow {\n  background-color: #fceeee;\n}\n.stats__percentage--negative svg {\n  fill: #dc362e;\n}\n\n.zelf-card-old {\n  width: 600px;\n  min-height: 500px;\n  background: white;\n  box-shadow: 0px 2px 4px rgba(97, 97, 97, 0.08);\n  border: 1px rgba(0, 0, 0, 0.35) solid;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 12px;\n  display: inline-flex;\n}\n.zelf-card-old h1 {\n  text-align: center;\n}\n.zelf-card-old span {\n  text-align: center;\n}\n\n.zelf-content {\n  align-items: center;\n  background: linear-gradient(170deg, #ffffff 20%, #f7b7b9 40%, #c196f9 70%, #85c6ff 100%);\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  overflow: auto;\n  width: 100%;\n}\n\n.zelf-header {\n  width: 600px;\n  min-height: 50px;\n  height: 85px;\n  background: white;\n  border-left: 1px rgba(0, 0, 0, 0.35) solid;\n  border-right: 1px rgba(0, 0, 0, 0.35) solid;\n  border-top: 0.5px rgba(0, 0, 0, 0.35) solid;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 12px;\n  display: inline-flex;\n}\n.zelf-header h1 {\n  text-align: center;\n}\n.zelf-header span {\n  text-align: center;\n}\n\n.zelf-backdrop {\n  background-color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.zelf-botton-sheet-full .mat-bottom-sheet-container,\n.zelf-bottom-sheet-seasalt .mat-bottom-sheet-container,\n.zelf-bottom-sheet .mat-bottom-sheet-container {\n  background-color: #ffffff !important;\n  border-radius: 26px 26px 0 0 !important;\n  color: #181818;\n  max-height: 100vh !important;\n}\n\n.zelf-bottom-sheet-seasalt .mat-bottom-sheet-container {\n  background-color: #f9f9fc !important;\n}\n\n.zelf-botton-sheet-full {\n  width: 100vw !important;\n}\n.zelf-botton-sheet-full .mat-bottom-sheet-container {\n  display: flex;\n  justify-content: center;\n  max-width: 100vw !important;\n  width: 100vw !important;\n  border-radius: 0 !important;\n}\n\n.zelf-dialog .mdc-dialog__surface,\n.zelf-dialog-seasalt .mdc-dialog__surface {\n  color: #181818;\n  background-color: #ffffff !important;\n  border-radius: 26px !important;\n}\n\n.zelf-dialog-seasalt .mdc-dialog__surface {\n  background-color: #f9f9fc !important;\n}\n\n.zelf-snackbar .mdc-snackbar__surface {\n  background-color: #ffffff !important;\n  border-radius: 14px !important;\n  overflow: hidden;\n}\n.zelf-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label {\n  font-family: \"Poppins\", Arial, sans-serif;\n  color: #181818 !important;\n}\n.zelf-snackbar .mdc-snackbar__surface .mdc-snackbar__action {\n  background-color: #eeedf1 !important;\n  border-radius: 14px !important;\n  font-family: Poppins !important;\n}\n\n.zelf-menu {\n  border-radius: 14px !important;\n  color: #181818;\n}\n.zelf-menu__button--icon-end {\n  display: inline-flex;\n  flex-direction: row-reverse;\n}\n.zelf-menu__button--icon-end .zelf-menu__button-icon {\n  margin-right: 0 !important;\n  margin-left: 16px !important;\n}\n.zelf-menu__button-text {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px !important;\n  font-weight: 500;\n}\n.zelf-menu__button-icon svg {\n  fill: #181818;\n}\n\n.zelf-card {\n  box-sizing: border-box;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 40px;\n  border: none;\n  display: inline-flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n  padding: 40px;\n  width: 564px;\n  min-height: 768px;\n  position: relative;\n}\n@media screen and (max-width: 768px) {\n  .zelf-card {\n    background: #ffffff;\n    width: 100%;\n    padding: 12px;\n    border-radius: 0px;\n  }\n}\n.zelf-card__header {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  justify-content: center;\n  overflow: hidden;\n  width: 100%;\n}\n.zelf-card__image {\n  object-fit: cover;\n  -webkit-user-select: none;\n          user-select: none;\n  max-width: 310px;\n}\n.zelf-card__pretitle {\n  color: #73777f;\n  font-family: \"Menda\", \"Arial Black\", sans-serif;\n  font-size: 14px;\n  letter-spacing: 2%;\n  line-height: 16px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.zelf-card__title {\n  color: #181818;\n  font-family: \"Menda\", \"Arial Black\", sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  letter-spacing: 2%;\n  line-height: 40px;\n  margin: 0;\n  text-align: center;\n  text-transform: uppercase;\n  margin-top: 8px;\n}\n.zelf-card__subtitle {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  margin: 0;\n  color: #73777f;\n}\n.zelf-card__content {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 56px;\n  gap: 8px;\n  width: 100%;\n}\n.zelf-card__content--grow {\n  flex-grow: 1;\n}\n.zelf-card__actions {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  min-height: 56px;\n  width: 100%;\n}\n.zelf-card__actions--column {\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n}\n.zelf-card__actions--end {\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.zelf-action-row {\n  box-sizing: border-box;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #eeedf1;\n  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.04);\n  display: flex;\n  min-height: 62px;\n  justify-content: space-between;\n  padding: 16px;\n  width: 100%;\n}\n.zelf-action-row__text {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.1px;\n  line-height: 20px;\n  margin: 0;\n}\n\n.zelf-input {\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 9999px;\n  border: 1px #73777f solid;\n  display: flex;\n  gap: 12px;\n  height: 56px;\n  position: relative;\n  transition: all 0.2s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-input * {\n  box-sizing: border-box;\n}\n.zelf-input input[readonly] {\n  cursor: default;\n  color: #73777f;\n}\n.zelf-input input[type=password]::-ms-reveal, .zelf-input input[type=password]::-ms-clear {\n  display: none;\n  width: 0;\n  height: 0;\n}\n.zelf-input .zelf-icon-button {\n  min-height: 40px !important;\n  min-width: 40px !important;\n  height: 40px !important;\n  width: 40px !important;\n}\n.zelf-input .zelf-icon-button:last-child {\n  margin-right: 8px;\n}\n.zelf-input__prefix-text {\n  background-color: #eeedf1;\n  font-size: 15px;\n  border-radius: 9999px;\n  letter-spacing: 0.1px;\n  color: #96939e;\n  font-weight: 600;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  padding: 6px;\n  text-align: center;\n}\n.zelf-input__postfix {\n  font-family: Menda, sans-serif;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  color: #181818;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.zelf-input__floating-label {\n  bottom: 0;\n  color: #96939e;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  left: 17px;\n  position: absolute;\n  top: 18px;\n  transition: all 0.2s;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 100%;\n  transition: all 0.2s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-input__control {\n  appearance: none;\n  background: none;\n  border: none;\n  box-shadow: none;\n  color: #181818;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  height: auto;\n  line-height: 20px;\n  margin: 0;\n  min-width: 256px;\n  padding: 12px 16px;\n  width: auto;\n}\n.zelf-input__control--floating-label {\n  padding: 22px 18px 6px;\n}\n.zelf-input__control::placeholder {\n  color: #96939e;\n}\n.zelf-input__control:not(:placeholder-shown) + .zelf-input__floating-label {\n  font-size: 12px;\n  top: 6px;\n}\n.zelf-input__control:focus {\n  border-color: #0e26ff;\n  outline: none;\n}\n.zelf-input__control:focus + .zelf-input__floating-label {\n  font-size: 12px;\n  top: 6px;\n}\n.zelf-input__tip {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  color: #73777f;\n}\n.zelf-input--gap-narrow {\n  gap: 4px;\n}\n.zelf-input--wide {\n  width: 100%;\n}\n.zelf-input--wide .zelf-input__control {\n  width: 100%;\n}\n.zelf-input--error {\n  border-color: #dc362e;\n}\n.zelf-input--error .zelf-input::placeholder {\n  color: #dc362e;\n}\n.zelf-input--error .zelf-input:not(:placeholder-shown) + .zelf-input__floating-label {\n  color: #dc362e;\n}\n.zelf-input--error .zelf-input__control + .zelf-input__floating-label {\n  color: #dc362e;\n}\n\n.zelf-radio-group {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(auto-fill, minmax(157px, 1fr));\n  width: 100%;\n}\n\n.zelf-radio {\n  align-items: center;\n  background-color: #eeedf1;\n  border-radius: 16px;\n  color: #181818;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: space-between;\n  line-height: 20px;\n  min-height: 56px;\n  margin: 0;\n  padding: 12px 16px;\n  transition: background-color 0.5s cubic-bezier(0.25, 0.4, 0.7, 1);\n  position: relative;\n}\n.zelf-radio:hover {\n  background-color: #e3e3e3;\n}\n.zelf-radio input[type=radio],\n.zelf-radio svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n}\n.zelf-radio input[type=radio] {\n  appearance: none;\n  background-color: #c3c6cf;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  height: 20px;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 20px;\n}\n.zelf-radio input[type=radio]:checked + svg {\n  animation: checkbox-bounce 0.4s linear forwards;\n  opacity: 1;\n  transform: translateY(100%) scale(0.8) translateZ(0);\n}\n.zelf-radio input[type=radio]:checked::before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #181818;\n  border-radius: 50%;\n  position: absolute;\n}\n.zelf-radio svg {\n  pointer-events: none;\n  fill: none;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: #ffffff;\n  position: absolute;\n  left: 84.6%;\n  top: 50%;\n  opacity: 0;\n  transform: translateY(100%) scale(0) translateZ(0);\n  transition: opacity 0.4s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-radio--plain {\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  width: 100%;\n}\n.zelf-radio--plain:hover {\n  background-color: transparent;\n}\n.zelf-radio--plain svg {\n  left: 89.8%;\n}\n.zelf-radio--gap-lg {\n  gap: 16px;\n}\n\n.zelf-menu-item > span {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  width: 100% !important;\n}\n\n.zelf-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  position: relative;\n}\n.zelf-checkboxlabel {\n  cursor: pointer;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.zelf-checkbox input[type=checkbox],\n.zelf-checkbox svg {\n  width: 20px;\n  height: 20px;\n  display: block;\n}\n.zelf-checkbox input[type=checkbox] {\n  appearance: none;\n  background-color: #ffffff;\n  border-radius: 50%;\n  border: 1px solid #181818;\n  cursor: pointer;\n  margin: 0 12px;\n  transition: background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-checkbox input[type=checkbox]:checked {\n  background-color: #181818;\n}\n.zelf-checkbox input[type=checkbox]:checked + svg {\n  animation: checkbox-bounce 0.4s linear forwards;\n  transform: translateY(100%) scale(0.8) translateZ(0);\n}\n.zelf-checkbox svg {\n  pointer-events: none;\n  fill: none;\n  stroke-width: 3px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: #ffffff;\n  position: absolute;\n  left: 28px;\n  top: 50%;\n  transform: translateY(100%) scale(0) translateZ(0);\n}\n.zelf-checkbox a {\n  color: #181818;\n  text-decoration: underline;\n}\n.zelf-checkbox a:hover, .zelf-checkbox a:visited, .zelf-checkbox a:active {\n  color: #181818;\n  text-decoration: none;\n}\n.zelf-checkbox a:focus, .zelf-checkbox a:focus-visible, .zelf-checkbox a:focus-within {\n  color: #0e26ff;\n  text-decoration: underline;\n}\n\n.zelf-message {\n  align-items: center;\n  color: #73777f;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  justify-content: center;\n  letter-spacing: 0.1px;\n  line-height: 20px;\n  padding: 16px;\n}\n.zelf-message p,\n.zelf-message h1,\n.zelf-message h2,\n.zelf-message h3,\n.zelf-message h4,\n.zelf-message h5,\n.zelf-message h6 {\n  margin: 0;\n}\n.zelf-message--error {\n  color: #601410;\n}\n.zelf-message--success {\n  color: #0f5223;\n}\n.zelf-message--column {\n  flex-direction: column;\n  width: 100%;\n}\n.zelf-message__row {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n}\n\n.zelf-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background-color: #e3e3e3;\n  border-radius: 9999px;\n  color: #181818;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.1px;\n  line-height: 20px;\n  padding: 4px 16px;\n}\n.zelf-chip__image {\n  border-radius: 9999px;\n  height: 32px;\n  width: 32px;\n  object-fit: contain;\n  margin-left: -10px;\n}\n.zelf-chip--pill {\n  padding: 2px 8px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 16px;\n  border-radius: 9999px;\n  color: #73777f;\n  background-color: #eeedf1;\n}\n.zelf-chip--info {\n  color: #3998d3;\n  background-color: #ecf3fe;\n}\n.zelf-chip--error {\n  color: #dc362e;\n  background-color: #fceeee;\n}\n.zelf-chip--success {\n  color: #1ea446;\n  background-color: #e7f8ed;\n}\n\n.qr-code {\n  border: 1px solid #e3e3e3;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 236px;\n  min-width: 236px;\n  max-height: 236px;\n  max-width: 236px;\n  width: 100%;\n  padding: 4px;\n  background-color: #ffffff;\n}\n.qr-code__image {\n  object-fit: contain;\n  width: 100%;\n  transition: filter 1s cubic-bezier(0.25, 0.4, 0.7, 1);\n  filter: blur(0px);\n}\n.qr-code__image[src=\"./assets/images/qr-preload.png\"] {\n  box-sizing: border-box;\n  padding: 32px;\n  filter: blur(18px);\n}\n\n.drag-and-drop {\n  position: relative;\n  border: 1px dashed #96939e;\n  transition: background-color cubic-bezier(0.075, 0.82, 0.165, 1) 1s;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.drag-and-drop--active {\n  border: 1px dashed #ff5721;\n  background-color: rgba(0, 0, 0, 0.08) !important;\n}\n.drag-and-drop__loader {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 3;\n}\n.drag-and-drop__loader-overlay {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  z-index: 2;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.drag-and-drop__preview {\n  max-height: 476px;\n  max-width: 340px;\n}\n.drag-and-drop__data {\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 0 16px;\n  font-size: smaller;\n  color: #ffffff;\n  width: 100%;\n  z-index: 2;\n  position: absolute;\n  bottom: 0;\n}\n.drag-and-drop input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n.zelf-logo {\n  display: inline;\n}\n.zelf-logo--screen-md {\n  display: none;\n}\n\n.tv-lightweight-charts a {\n  display: none !important;\n}\n\n/* Small screen devices (600px and above) */\n/* Medium screen devices (768px and above) */\n@media only screen and (min-width: 768px) {\n  .zelf-logo {\n    display: none;\n  }\n  .zelf-logo--screen-md {\n    display: inline;\n  }\n}\n/* Big screen devices (889px and above) */\n/* Extra big screen devices (1200px and above) */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3Rva2Vucy9fbTMtc3lzdGVtLnNjc3MiLCJtYWluLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90b2tlbnMvX3Rva2VuLXV0aWxzLnNjc3MiLCIuLi9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIi4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi9zdHlsZXMvX2FuaW1hdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwTEU7RUFFSSwrQ0FBQTtFQUFBLGtDQUFBO0VBQUEsd0NBQUE7RUFBQSwrQkFBQTtFQUFBLHVDQUFBO0VBQUEsZ0NBQUE7RUFBQSxxREFBQTtFQUFBLG1DQUFBO0VBQUEsMENBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsaUNBQUE7RUFBQSxnREFBQTtFQUFBLGtDQUFBO0VBQUEsc0NBQUE7RUFBQSxrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsZ0NBQUE7RUFBQSxvREFBQTtFQUFBLHFDQUFBO0VBQUEseUNBQUE7RUFBQSxzQ0FBQTtFQUFBLDJDQUFBO0VBQUEsbUNBQUE7RUFBQSx3REFBQTtFQUFBLHNDQUFBO0VBQUEsNkNBQUE7RUFBQSx1Q0FBQTtFQUFBLG9DQUFBO0VBQUEsb0NBQUE7RUFBQSxzREFBQTtFQUFBLHFDQUFBO0VBQUEsNENBQUE7RUFBQSxxQ0FBQTtFQUFBLG1DQUFBO0VBQUEsbUNBQUE7RUFBQSxtREFBQTtFQUFBLHNDQUFBO0VBQUEsNENBQUE7RUFBQSxtQ0FBQTtFQUFBLG9DQUFBO0VBQUEsb0NBQUE7RUFBQSx3REFBQTtFQUFBLHVDQUFBO0VBQUEsOENBQUE7RUFBQSx1Q0FBQTtFQUFBLHFDQUFBO0VBQUEscUNBQUE7RUFBQSxtREFBQTtFQUFBLHNDQUFBO0VBQUEsMENBQUE7RUFBQSxxQ0FBQTtFQUFBLG9DQUFBO0VBQUEsb0NBQUE7RUFBQSxxREFBQTtFQUFBLG1DQUFB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a0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUErcEJSOztBQTNwQkE7RUFDSSxlQUFBO0FBOHBCSjtBQTVwQkk7RUFDSSxhQUFBO0FBOHBCUjs7QUExcEJBO0VBQ0ksd0JBQUE7QUE2cEJKOztBQTFwQkEsMkNBQUE7QUFJQSw0Q0FBQTtBQUNBO0VBQ0k7SUFDSSxhQUFBO0VBMHBCTjtFQXhwQk07SUFDSSxlQUFBO0VBMHBCVjtBQUNGO0FBdHBCQSx5Q0FBQTtBQUlBLGdEQUFBIiwiZmlsZSI6Im1haW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL3N0eWxlL2VsZXZhdGlvbic7XG5AdXNlICcuLi9zdHlsZS9zYXNzLXV0aWxzJztcbkB1c2UgJy4uL3RoZW1pbmcvY29uZmlnLXZhbGlkYXRpb24nO1xuQHVzZSAnLi4vdGhlbWluZy9kZWZpbml0aW9uJztcbkB1c2UgJy4vbTMvZGVmaW5pdGlvbnMnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICcuL20zLXRva2Vucyc7XG5cbi8vLyBFbWl0cyBuZWNlc3NhcnkgQ1NTIHZhcmlhYmxlcyBmb3IgTWF0ZXJpYWwncyBzeXN0ZW0gbGV2ZWwgdmFsdWVzIGZvciB0aGUgdmFsdWVzIGRlZmluZWQgaW4gdGhlXG4vLy8gY29uZmlnIG1hcC4gVGhlIGNvbmZpZyBtYXAgY2FuIGhhdmUgdmFsdWVzIGNvbG9yLCB0eXBvZ3JhcGh5LCBhbmQvb3IgZGVuc2l0eS5cbi8vL1xuLy8vIElmIHRoZSBjb25maWcgbWFwJ3MgY29sb3IgdmFsdWUgaXMgYW4gQW5ndWxhciBNYXRlcmlhbCBjb2xvciBwYWxldHRlLCBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlXG4vLy8gcHJpbWFyeSBhbmQgdGVydGlhcnkgY29sb3JzIHdpdGggYSBgY29sb3Itc2NoZW1lYCB0aGVtZSB0eXBlLiBPdGhlcndpc2UgaWYgdGhlIGNvbG9yIHZhbHVlIGlzIGFcbi8vLyBtYXAsIGl0IG11c3QgaGF2ZSBhIGBwcmltYXJ5YCB2YWx1ZSBjb250YWluaW5nIGFuIEFuZ3VsYXIgTWF0ZXJpYWwgY29sb3IgcGFsZXR0ZSwgYW5kXG4vLy8gb3B0aW9uYWxseSBhIGRpZmZlcmVudCBgdGVydGlhcnlgIHBhbGV0dGUgKGRlZmF1bHRzIHRvIHByaW1hcnkgcGFsZXR0ZSkgYW5kIGB0aGVtZS10eXBlYCB0aGF0XG4vLy8gaXMgZWl0aGVyIGBsaWdodGAsIGBkYXJrYCwgb3IgJ2NvbG9yLXNjaGVtZWAgKGRlZmF1bHRzIHRvIGBjb2xvci1zY2hlbWVgKS4gQ29sb3IgdmFyaWFibGVcbi8vLyBkZWZpbml0aW9ucyB3aWxsIG5vdCBiZSBlbWl0dGVkIGlmIHRoZXJlIGFyZSBubyBjb2xvciB2YWx1ZXMgaW4gdGhlIGNvbmZpZy5cbi8vL1xuLy8vIElmIHRoZSBjb25maWcgbWFwJ3MgdHlwb2dyYXBoeSB2YWx1ZSBpcyBhIGZvbnQgZmFtaWx5IHN0cmluZywgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZVxuLy8vIHBsYWluIGFuZCBicmFuZCBmb250IGZhbWlseSB3aXRoIGRlZmF1bHQgYm9sZCwgbWVkaXVtLCBhbmQgcmVndWxhciB3ZWlnaHRzIG9mIDcwMCwgNTAwLCBhbmQgNDAwLFxuLy8vIHJlc3BlY3RmdWxseS4gT3RoZXJ3aXNlIGlmIHRoZSB0eXBvZ3JhcGh5IHZhbHVlIGlzIGEgbWFwLCBpdCBtdXN0IGhhdmUgYSBgcGxhaW4tZmFtaWx5YCBmb250XG4vLy8gZmFtaWx5IHZhbHVlLCBhbmQgb3B0aW9uYWxseSBhIGRpZmZlcmVudCBgYnJhbmQtZmFtaWx5YCBmb250IGZhbWlseSAoZGVmYXVsdHMgdG8gdGhlIHBsYWluXG4vLy8gdmFsdWUpIGFuZCB3ZWlnaHRzIGZvciBgYm9sZC13ZWlnaHRgIChkZWZhdWx0OiA3MDApLCBgYm9sZC13ZWlnaHRgIChkZWZhdWx0OiA1MDApLCBhbmRcbi8vLyBgYm9sZC13ZWlnaHRgIChkZWZhdWx0OiA0MDApLiBUeXBvZ3JhcGh5IHZhcmlhYmxlIGRlZmluaXRpb25zIHdpbGwgbm90IGJlIGVtaXR0ZWQgaWYgdGhlcmUgYXJlXG4vLy8gbm8gdHlwb2dyYXBoeSB2YWx1ZXMgaW4gdGhlIGNvbmZpZy5cbi8vL1xuLy8vIElmIHRoZSBjb25maWcgbWFwJ3MgZGVuc2l0eSB2YWx1ZSBpcyBhIG51bWJlciwgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBkZW5zaXR5IHNjYWxlLiBPdGhlcndpc2Vcbi8vLyBpZiB0aGUgZGVuc2l0eSB2YWx1ZSBpcyBhIG1hcCwgaXQgbXVzdCBoYXZlIGEgYHNjYWxlYCB2YWx1ZS4gRGVuc2l0eSB2YXJpYWJsZSBkZWZpbml0aW9ucyB3aWxsXG4vLy8gbm90IGJlIGVtaXR0ZWQgaWYgdGhlcmUgYXJlIG5vIGRlbnNpdHkgdmFsdWVzIGluIHRoZSBjb25maWcuXG4vLy9cbi8vLyBUaGUgYXBwbGljYXRpb24gdmFyaWFibGVzIGVtaXR0ZWQgdXNlIHRoZSBuYW1lc3BhY2UgcHJlZml4IFwiLS1tYXQtc3lzXCIuXG4vLy8gZS5nLiAtLW1hdC1zeXMtc3VyZmFjZTogI0U1RTVFNVxuLy8vXG4vLy8gQHBhcmFtIHtNYXB9ICRjb25maWcgVGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gd2l0aCBvcHRpb25hbCBrZXlzIGNvbG9yLCB0eXBvZ3JhcGh5LCBvciBkZW5zaXR5LlxuQG1peGluIHRoZW1lKCRjb25maWcsICRvdmVycmlkZXM6ICgpKSB7XG4gICRjb2xvcjogbWFwLmdldCgkY29uZmlnLCBjb2xvcik7XG4gICRjb2xvci1jb25maWc6IG51bGw7XG4gIEBpZiAoJGNvbG9yKSB7XG4gICAgLy8gdmFsaWRhdGUtcGFsZXR0ZSByZXR1cm5zIG51bGwgaWYgaXQgaXMgYSB2YWxpZCBNMyBwYWxldHRlXG4gICAgJGlzLXBhbGV0dGU6IGNvbmZpZy12YWxpZGF0aW9uLnZhbGlkYXRlLXBhbGV0dGUoJGNvbG9yKSA9PSBudWxsO1xuXG4gICAgLy8gRGVmYXVsdCB0byBcImNvbG9yLXNjaGVtZVwiIHRoZW1lIHR5cGUgaWYgdGhlIGNvbmZpZydzIGNvbG9yIGRvZXMgbm90IHByb3ZpZGUgb25lLlxuICAgIEBpZiAobm90ICRpcy1wYWxldHRlIGFuZCBub3QgbWFwLmhhcy1rZXkoJGNvbG9yLCB0aGVtZS10eXBlKSkge1xuICAgICAgJGNvbG9yOiBtYXAuc2V0KCRjb2xvciwgdGhlbWUtdHlwZSwgY29sb3Itc2NoZW1lKTtcbiAgICB9XG5cbiAgICAkY29sb3ItY29uZmlnOiBpZigkaXMtcGFsZXR0ZSxcbiAgICAgICAgICAgIGRlZmluaXRpb24uZGVmaW5lLWNvbG9ycygocHJpbWFyeTogJGNvbG9yLCB0aGVtZS10eXBlOiBjb2xvci1zY2hlbWUpKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24uZGVmaW5lLWNvbG9ycygkY29sb3IpKTtcbiAgICBAaW5jbHVkZSBzeXN0ZW0tbGV2ZWwtY29sb3JzKCRjb2xvci1jb25maWcsICRvdmVycmlkZXMsIGRlZmluaXRpb24uJHN5c3RlbS1mYWxsYmFjay1wcmVmaXgpO1xuICAgIEBpbmNsdWRlIHN5c3RlbS1sZXZlbC1lbGV2YXRpb24oJGNvbG9yLWNvbmZpZywgJG92ZXJyaWRlcywgZGVmaW5pdGlvbi4kc3lzdGVtLWZhbGxiYWNrLXByZWZpeCk7XG4gIH1cblxuICAkdHlwb2dyYXBoeTogbWFwLmdldCgkY29uZmlnLCB0eXBvZ3JhcGh5KTtcbiAgJHR5cG9ncmFwaHktY29uZmlnOiBudWxsO1xuICBAaWYgKCR0eXBvZ3JhcGh5KSB7XG4gICAgJHR5cG9ncmFwaHktY29uZmlnOiBpZihtZXRhLnR5cGUtb2YoJHR5cG9ncmFwaHkpID09ICdtYXAnLFxuICAgICAgZGVmaW5pdGlvbi5kZWZpbmUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSksXG4gICAgICBkZWZpbml0aW9uLmRlZmluZS10eXBvZ3JhcGh5KChwbGFpbi1mYW1pbHk6ICR0eXBvZ3JhcGh5KSkpO1xuICAgIEBpbmNsdWRlIHN5c3RlbS1sZXZlbC10eXBvZ3JhcGh5KFxuICAgICAgICAkdHlwb2dyYXBoeS1jb25maWcsICRvdmVycmlkZXMsIGRlZmluaXRpb24uJHN5c3RlbS1mYWxsYmFjay1wcmVmaXgpO1xuICB9XG5cbiAgJGRlbnNpdHk6IG1hcC5nZXQoJGNvbmZpZywgZGVuc2l0eSk7XG4gICRkZW5zaXR5LWNvbmZpZzogbnVsbDtcbiAgQGlmICgkZGVuc2l0eSkge1xuICAgICRkZW5zaXR5LWNvbmZpZzogaWYobWV0YS50eXBlLW9mKCRkZW5zaXR5KSA9PSAnbWFwJyxcbiAgICAgIGRlZmluaXRpb24uZGVmaW5lLWRlbnNpdHkoJGRlbnNpdHkpLFxuICAgICAgZGVmaW5pdGlvbi5kZWZpbmUtZGVuc2l0eSgoc2NhbGU6ICRkZW5zaXR5KSkpO1xuICAgICRzY2FsZTogbWFwLmdldCgkZGVuc2l0eS1jb25maWcsIF9tYXQtdGhlbWluZy1pbnRlcm5hbHMtZG8tbm90LWFjY2VzcywgZGVuc2l0eS1zY2FsZSk7XG4gICAgQGlmICgkc2NhbGUgIT0gMCkge1xuICAgICAgJGFsbC10b2tlbnM6IG0zLXRva2Vucy5nZW5lcmF0ZS1kZW5zaXR5LXRva2Vucygkc2NhbGUpO1xuICAgICAgQGVhY2ggJGNvbXBvbmVudC10b2tlbnMgaW4gJGFsbC10b2tlbnMge1xuICAgICAgICAkbmFtZXNwYWNlOiBsaXN0Lm50aCgkY29tcG9uZW50LXRva2VucywgMSk7XG4gICAgICAgIEBlYWNoICR0b2tlbnMgaW4gbGlzdC5udGgoJGNvbXBvbmVudC10b2tlbnMsIDIpIHtcbiAgICAgICAgICAtLSN7bGlzdC5udGgoJG5hbWVzcGFjZSwgMSl9LSN7bGlzdC5udGgoJG5hbWVzcGFjZSwgMil9LSN7XG4gICAgICAgICAgICAgIGxpc3QubnRoKCR0b2tlbnMsIDEpfTogI3tsaXN0Lm50aCgkdG9rZW5zLCAyKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBzeXN0ZW0tbGV2ZWwtc2hhcGUoJG92ZXJyaWRlczogJG92ZXJyaWRlcywgJHByZWZpeDogZGVmaW5pdGlvbi4kc3lzdGVtLWZhbGxiYWNrLXByZWZpeCk7XG4gIEBpbmNsdWRlIHN5c3RlbS1sZXZlbC1zdGF0ZSgkb3ZlcnJpZGVzOiAkb3ZlcnJpZGVzLCAkcHJlZml4OiBkZWZpbml0aW9uLiRzeXN0ZW0tZmFsbGJhY2stcHJlZml4KTtcbn1cblxuLy8vIEVtaXRzIHRoZSBzeXN0ZW0tbGV2ZWwgQ1NTIHZhcmlhYmxlcyBmb3IgZWFjaCBvZiB0aGUgcHJvdmlkZWQgb3ZlcnJpZGUgdmFsdWVzLiBFLmcuIHRvXG4vLy8gY2hhbmdlIHRoZSBwcmltYXJ5IGNvbG9yIHRvIHJlZCwgdXNlIGBtYXQudGhlbWUtb3ZlcnJpZGVzKChwcmltYXJ5OiByZWQpKTtgXG5AbWl4aW4gdGhlbWUtb3ZlcnJpZGVzKCRvdmVycmlkZXMsICRwcmVmaXg6IGRlZmluaXRpb24uJHN5c3RlbS1mYWxsYmFjay1wcmVmaXgpIHtcbiAgJHN5cy1uYW1lczogbWFwLW1lcmdlLWFsbChcbiAgICAgIGRlZmluaXRpb25zLm1kLXN5cy1jb2xvci12YWx1ZXMtbGlnaHQoKSxcbiAgICAgIGRlZmluaXRpb25zLm1kLXN5cy10eXBlc2NhbGUtdmFsdWVzKCksXG4gICAgICBkZWZpbml0aW9ucy5tZC1zeXMtZWxldmF0aW9uLXZhbHVlcygpLFxuICAgICAgZGVmaW5pdGlvbnMubWQtc3lzLXNoYXBlLXZhbHVlcygpLFxuICAgICAgZGVmaW5pdGlvbnMubWQtc3lzLXN0YXRlLXZhbHVlcygpKTtcblxuICAmIHtcbiAgICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluICRvdmVycmlkZXMge1xuICAgICAgQGlmIChtYXAuaGFzLWtleSgkc3lzLW5hbWVzLCAkbmFtZSkpIHtcbiAgICAgICAgLS0jeyRwcmVmaXh9LSN7JG5hbWV9OiAje21hcC5nZXQoJG92ZXJyaWRlcywgJG5hbWUpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN5c3RlbS1sZXZlbC1jb2xvcnMoJHRoZW1lLCAkb3ZlcnJpZGVzOiAoKSwgJHByZWZpeDogbnVsbCkge1xuICAkcGFsZXR0ZXM6IG1hcC5nZXQoJHRoZW1lLCBfbWF0LXRoZW1pbmctaW50ZXJuYWxzLWRvLW5vdC1hY2Nlc3MsIHBhbGV0dGVzKTtcbiAgJGJhc2UtcGFsZXR0ZXM6IChcbiAgICBuZXV0cmFsOiBtYXAuZ2V0KCRwYWxldHRlcywgbmV1dHJhbCksXG4gICAgbmV1dHJhbC12YXJpYW50OiBtYXAuZ2V0KCRwYWxldHRlcywgbmV1dHJhbC12YXJpYW50KSxcbiAgICBzZWNvbmRhcnk6IG1hcC5nZXQoJHBhbGV0dGVzLCBzZWNvbmRhcnkpLFxuICAgIGVycm9yOiBtYXAuZ2V0KCRwYWxldHRlcywgZXJyb3IpLFxuICApO1xuXG4gICR0eXBlOiBtYXAuZ2V0KCR0aGVtZSwgX21hdC10aGVtaW5nLWludGVybmFscy1kby1ub3QtYWNjZXNzLCB0aGVtZS10eXBlKTtcbiAgJHByaW1hcnk6IG1hcC5tZXJnZShtYXAuZ2V0KCRwYWxldHRlcywgcHJpbWFyeSksICRiYXNlLXBhbGV0dGVzKTtcbiAgJHRlcnRpYXJ5OiBtYXAubWVyZ2UobWFwLmdldCgkcGFsZXR0ZXMsIHRlcnRpYXJ5KSwgJGJhc2UtcGFsZXR0ZXMpO1xuICAkZXJyb3I6IG1hcC5nZXQoJHBhbGV0dGVzLCBlcnJvcik7XG5cbiAgQGlmIChub3QgJHByZWZpeCkge1xuICAgICRwcmVmaXg6IG1hcC5nZXQoJHRoZW1lLCBfbWF0LXRoZW1pbmctaW50ZXJuYWxzLWRvLW5vdC1hY2Nlc3MsXG4gICAgICAgIGNvbG9yLXN5c3RlbS12YXJpYWJsZXMtcHJlZml4KSBvciBkZWZpbml0aW9uLiRzeXN0ZW0tbGV2ZWwtcHJlZml4O1xuICB9XG5cbiAgJHJlZjogKFxuICAgIG1kLXJlZi1wYWxldHRlOiBtMy10b2tlbnMuZ2VuZXJhdGUtcmVmLXBhbGV0dGUtdG9rZW5zKCRwcmltYXJ5LCAkdGVydGlhcnksICRlcnJvcilcbiAgKTtcblxuICAkc3lzLWNvbG9yczogX2dlbmVyYXRlLXN5cy1jb2xvcnMoJHJlZiwgJHR5cGUpO1xuXG4gIC8vIE1hbnVhbGx5IGluc2VydCBhIHN1YnNldCBvZiBwYWxldHRlIHZhbHVlcyB0aGF0IGFyZSB1c2VkIGRpcmVjdGx5IGJ5IGNvbXBvbmVudHNcbiAgLy8gaW5zdGVhZCBvZiBzeXN0ZW0gdmFyaWFibGVzLlxuICAkc3lzLWNvbG9yczogbWFwLnNldCgkc3lzLWNvbG9ycyxcbiAgICAnbmV1dHJhbC12YXJpYW50MjAnLCBtYXAuZ2V0KCRyZWYsIG1kLXJlZi1wYWxldHRlLCBuZXV0cmFsLXZhcmlhbnQyMCkpO1xuICAkc3lzLWNvbG9yczogbWFwLnNldCgkc3lzLWNvbG9ycyxcbiAgICAnbmV1dHJhbDEwJywgbWFwLmdldCgkcmVmLCBtZC1yZWYtcGFsZXR0ZSwgbmV1dHJhbDEwKSk7XG5cbiAgJiB7XG4gICAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiAkc3lzLWNvbG9ycyB7XG4gICAgICAtLSN7JHByZWZpeH0tI3skbmFtZX06ICN7bWFwLmdldCgkb3ZlcnJpZGVzLCAkbmFtZSkgb3IgJHZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuQGZ1bmN0aW9uIF9nZW5lcmF0ZS1zeXMtY29sb3JzKCRyZWYsICR0eXBlKSB7XG4gICRsaWdodC1zeXMtY29sb3JzOiBkZWZpbml0aW9ucy5tZC1zeXMtY29sb3ItdmFsdWVzLWxpZ2h0KCRyZWYpO1xuICBAaWYgKCR0eXBlID09IGxpZ2h0KSB7XG4gICAgQHJldHVybiAkbGlnaHQtc3lzLWNvbG9ycztcbiAgfVxuXG4gICRkYXJrLXN5cy1jb2xvcnM6IGRlZmluaXRpb25zLm1kLXN5cy1jb2xvci12YWx1ZXMtZGFyaygkcmVmKTtcbiAgQGlmICgkdHlwZSA9PSBkYXJrKSB7XG4gICAgQHJldHVybiAkZGFyay1zeXMtY29sb3JzO1xuICB9XG5cbiAgQGlmICgkdHlwZSA9PSBjb2xvci1zY2hlbWUpIHtcbiAgICAkbGlnaHQtZGFyay1zeXMtY29sb3JzOiAoKTtcbiAgICBAZWFjaCAkbmFtZSwgJGxpZ2h0LXZhbHVlIGluICRsaWdodC1zeXMtY29sb3JzIHtcbiAgICAgICRkYXJrLXZhbHVlOiBtYXAuZ2V0KCRkYXJrLXN5cy1jb2xvcnMsICRuYW1lKTtcbiAgICAgICRsaWdodC1kYXJrLXN5cy1jb2xvcnM6XG4gICAgICAgICAgbWFwLnNldCgkbGlnaHQtZGFyay1zeXMtY29sb3JzLCAkbmFtZSwgbGlnaHQtZGFyaygkbGlnaHQtdmFsdWUsICRkYXJrLXZhbHVlKSk7XG4gICAgfVxuICAgIEByZXR1cm4gJGxpZ2h0LWRhcmstc3lzLWNvbG9ycztcbiAgfVxuXG4gIEBlcnJvciAnVW5rbm93biB0aGVtZS10eXBlIHByb3ZpZGVkOiAjeyR0eXBlfSc7XG59XG5cbkBtaXhpbiBzeXN0ZW0tbGV2ZWwtdHlwb2dyYXBoeSgkdGhlbWUsICRvdmVycmlkZXM6ICgpLCAkcHJlZml4OiBudWxsKSB7XG4gICRmb250LWRlZmluaXRpb246IG1hcC5nZXQoJHRoZW1lLCBfbWF0LXRoZW1pbmctaW50ZXJuYWxzLWRvLW5vdC1hY2Nlc3MsIGZvbnQtZGVmaW5pdGlvbik7XG4gICRicmFuZDogbWFwLmdldCgkZm9udC1kZWZpbml0aW9uLCBicmFuZCk7XG4gICRwbGFpbjogbWFwLmdldCgkZm9udC1kZWZpbml0aW9uLCBwbGFpbik7XG4gICRib2xkOiBtYXAuZ2V0KCRmb250LWRlZmluaXRpb24sIGJvbGQpO1xuICAkbWVkaXVtOiBtYXAuZ2V0KCRmb250LWRlZmluaXRpb24sIG1lZGl1bSk7XG4gICRyZWd1bGFyOiBtYXAuZ2V0KCRmb250LWRlZmluaXRpb24sIHJlZ3VsYXIpO1xuICAkcmVmOiAobWQtcmVmLXR5cGVmYWNlOlxuICAgICAgbTMtdG9rZW5zLmdlbmVyYXRlLXJlZi10eXBlZmFjZS10b2tlbnMoJGJyYW5kLCAkcGxhaW4sICRib2xkLCAkbWVkaXVtLCAkcmVndWxhcilcbiAgKTtcblxuICBAaWYgKG5vdCAkcHJlZml4KSB7XG4gICAgJHByZWZpeDogbWFwLmdldCgkdGhlbWUsIF9tYXQtdGhlbWluZy1pbnRlcm5hbHMtZG8tbm90LWFjY2VzcyxcbiAgICAgICAgdHlwb2dyYXBoeS1zeXN0ZW0tdmFyaWFibGVzLXByZWZpeCkgb3IgZGVmaW5pdGlvbi4kc3lzdGVtLWxldmVsLXByZWZpeDtcbiAgfVxuXG4gICYge1xuICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gZGVmaW5pdGlvbnMubWQtc3lzLXR5cGVzY2FsZS12YWx1ZXMoJHJlZikge1xuICAgICAgLS0jeyRwcmVmaXh9LSN7JG5hbWV9OiAje21hcC5nZXQoJG92ZXJyaWRlcywgJG5hbWUpIG9yICR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzeXN0ZW0tbGV2ZWwtZWxldmF0aW9uKCR0aGVtZSwgJG92ZXJyaWRlczogKCksICRwcmVmaXg6IGRlZmluaXRpb24uJHN5c3RlbS1sZXZlbC1wcmVmaXgpIHtcbiAgJHNoYWRvdy1jb2xvcjogbWFwLmdldChcbiAgICAgICR0aGVtZSwgX21hdC10aGVtaW5nLWludGVybmFscy1kby1ub3QtYWNjZXNzLCBjb2xvci10b2tlbnMsIChtZGMsIHRoZW1lKSwgc2hhZG93KTtcblxuICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluIGRlZmluaXRpb25zLm1kLXN5cy1lbGV2YXRpb24tdmFsdWVzKCkge1xuICAgICRsZXZlbDogbWFwLmdldCgkb3ZlcnJpZGVzLCAkbmFtZSkgb3IgJHZhbHVlO1xuICAgICR2YWx1ZTogZWxldmF0aW9uLmdldC1ib3gtc2hhZG93KCRsZXZlbCwgJHNoYWRvdy1jb2xvcik7XG4gICAgJiB7XG4gICAgICAtLSN7JHByZWZpeH0tI3skbmFtZX06ICN7JHZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN5c3RlbS1sZXZlbC1zaGFwZSgkdGhlbWU6ICgpLCAkb3ZlcnJpZGVzOiAoKSwgJHByZWZpeDogZGVmaW5pdGlvbi4kc3lzdGVtLWxldmVsLXByZWZpeCkge1xuICAmIHtcbiAgICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluIGRlZmluaXRpb25zLm1kLXN5cy1zaGFwZS12YWx1ZXMoKSB7XG4gICAgICAtLSN7JHByZWZpeH0tI3skbmFtZX06ICN7bWFwLmdldCgkb3ZlcnJpZGVzLCAkbmFtZSkgb3IgJHZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN5c3RlbS1sZXZlbC1zdGF0ZSgkdGhlbWU6ICgpLCAkb3ZlcnJpZGVzOiAoKSwgJHByZWZpeDogZGVmaW5pdGlvbi4kc3lzdGVtLWxldmVsLXByZWZpeCkge1xuICAmIHtcbiAgICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluIGRlZmluaXRpb25zLm1kLXN5cy1zdGF0ZS12YWx1ZXMoKSB7XG4gICAgICAtLSN7JHByZWZpeH0tI3skbmFtZX06ICN7bWFwLmdldCgkb3ZlcnJpZGVzLCAkbmFtZSkgb3IgJHZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmV0dXJuIGEgbmV3IG1hcCB3aGVyZSB0aGUgdmFsdWVzIGFyZSB0aGUgc2FtZSBhcyB0aGUgcHJvdmlkZWQgbWFwJ3Ncbi8vIGtleXMsIHByZWZpeGVkIHdpdGggXCItLW1hdC1zeXMtXCIuIEZvciBleGFtcGxlOlxuLy8gKGtleTE6ICcnLCBrZXkyOiAnJykgLS0+IChrZXkxOiAtLW1hdC1zeXMta2V5MSwga2V5MjogLS1tYXQtc3lzLWtleTIpXG5AZnVuY3Rpb24gX2NyZWF0ZS1zeXN0ZW0tYXBwLXZhcnMtbWFwKCRtYXApIHtcbiAgJG5ldy1tYXA6ICgpO1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJG1hcCB7XG4gICAgJG5ldy1tYXA6IG1hcC5zZXQoJG5ldy1tYXAsICRrZXksIC0tI3tkZWZpbml0aW9uLiRzeXN0ZW0tZmFsbGJhY2stcHJlZml4fS0jeyRrZXl9KTtcbiAgfVxuICBAcmV0dXJuICRuZXctbWFwO1xufVxuXG4vLyBDcmVhdGUgYSBjb21wb25lbnRzIHRva2VucyBtYXAgd2hlcmUgdmFsdWVzIGFyZSBiYXNlZCBvblxuLy8gc3lzdGVtIGZhbGxiYWNrIHZhcmlhYmxlcyByZWZlcmVuY2luZyBNYXRlcmlhbCdzIHN5c3RlbSBrZXlzLlxuLy8gSW5jbHVkZXMgZGVuc2l0eSB0b2tlbiBmYWxsYmFja3Mgd2hlcmUgZGVuc2l0eSBpcyAwLlxuQGZ1bmN0aW9uIGNyZWF0ZS1zeXN0ZW0tZmFsbGJhY2tzKCkge1xuICAkYXBwLXZhcnM6IChcbiAgICAnbWQtc3lzLWNvbG9yJzpcbiAgICAgICAgX2NyZWF0ZS1zeXN0ZW0tYXBwLXZhcnMtbWFwKGRlZmluaXRpb25zLm1kLXN5cy1jb2xvci12YWx1ZXMtbGlnaHQoKSksXG4gICAgJ21kLXN5cy10eXBlc2NhbGUnOlxuICAgICAgICBfY3JlYXRlLXN5c3RlbS1hcHAtdmFycy1tYXAoZGVmaW5pdGlvbnMubWQtc3lzLXR5cGVzY2FsZS12YWx1ZXMoKSksXG4gICAgJ21kLXN5cy1lbGV2YXRpb24nOlxuICAgICAgICBfY3JlYXRlLXN5c3RlbS1hcHAtdmFycy1tYXAoZGVmaW5pdGlvbnMubWQtc3lzLWVsZXZhdGlvbi12YWx1ZXMoKSksXG4gICAgJ21kLXN5cy1zdGF0ZSc6XG4gICAgICAgIF9jcmVhdGUtc3lzdGVtLWFwcC12YXJzLW1hcChkZWZpbml0aW9ucy5tZC1zeXMtc3RhdGUtdmFsdWVzKCkpLFxuICAgICdtZC1zeXMtc2hhcGUnOlxuICAgICAgICBfY3JlYXRlLXN5c3RlbS1hcHAtdmFycy1tYXAoZGVmaW5pdGlvbnMubWQtc3lzLXNoYXBlLXZhbHVlcygpKSxcbiAgICAvLyBBZGQgYSBzdWJzZXQgb2YgcGFsZXR0ZS1zcGVjaWZpYyBjb2xvcnMgdXNlZCBieSBjb21wb25lbnRzIGluc3RlYWQgb2Ygc3lzdGVtIHZhbHVlc1xuICAgICdtZC1yZWYtcGFsZXR0ZSc6XG4gICAgICAgIF9jcmVhdGUtc3lzdGVtLWFwcC12YXJzLW1hcChcbiAgICAgICAgICAoXG4gICAgICAgICAgICBuZXV0cmFsMTA6ICcnLCAvLyBGb3JtIGZpZWxkIG5hdGl2ZSBzZWxlY3Qgb3B0aW9uIHRleHQgY29sb3JcbiAgICAgICAgICAgIG5ldXRyYWwtdmFyaWFudDIwOiAnJywgLy8gU2lkZW5hdiBzY3JpbSAoY29udGFpbmVyIGJhY2tncm91bmQgc2hhZG93IHdoZW4gb3BlbmVkKSxcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICk7XG5cbiAgQHJldHVybiBzYXNzLXV0aWxzLmRlZXAtbWVyZ2UtYWxsKFxuICAgICAgbTMtdG9rZW5zLmdlbmVyYXRlLXRva2VucygkYXBwLXZhcnMsIHRydWUsIHRydWUpLFxuICAgICAgbTMtdG9rZW5zLmdlbmVyYXRlLWRlbnNpdHktdG9rZW5zKDApXG4gICk7XG59XG5cbi8vLyBDcmVhdGVzIGEgc2luZ2xlIG1lcmdlZCBtYXAgZnJvbSB0aGUgcHJvdmlkZWQgdmFyaWFibGUtbGVuZ3RoIG1hcCBhcmd1bWVudHNcbkBmdW5jdGlvbiBtYXAtbWVyZ2UtYWxsKCRtYXBzLi4uKSB7XG4gICRyZXN1bHQ6ICgpO1xuICBAZWFjaCAkbWFwIGluICRtYXBzIHtcbiAgICAkcmVzdWx0OiBtYXAubWVyZ2UoJHJlc3VsdCwgJG1hcCk7XG4gIH1cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuIiwiQHVzZSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuQHVzZSBcIi4uL3N0eWxlcy92YXJpYWJsZXNcIjtcbkB1c2UgXCIuLi9zdHlsZXMvYnV0dG9uc1wiO1xuQHVzZSBcIi4uL3N0eWxlcy9hbmltYXRpb25zXCI7XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtTWVkaXVtLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtRXh0cmFCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9NZW5kYS9NZW5kYS1CbGFjay53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvTWVuZGEvTWVuZGEtU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNZW5kYVwiO1xuICAgIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL01lbmRhL01lbmRhLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuKiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBzY3JvbGxiYXItd2lkdGg6IDZweDtcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICB9XG59XG5cbmh0bWwge1xuICAgIGNvbG9yLXNjaGVtZTogb25seSBsaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDM0N3B4O1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmFwcC1vbmJvYXJkaW5nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tYmcge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzBkZWcsICNmZmZmZmYgMjAlLCAjZjdiN2I5IDQwJSwgI2MxOTZmOSA3MCUsICM4NWM2ZmYgMTAwJSk7XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmOWQ7XG4gICAgei1pbmRleDogNTAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLm1haW4tZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzNWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAmLS1wb3BvdXQge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgIHdpZHRoOiAzNzVweDtcblxuICAgICAgICAuemVsZi1hcHBfX2NvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvbWVfX2Fzc2V0cy1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC56ZWxmLWFwcF9fZm9vdGVyLFxuICAgICAgICAuemVsZi1hcHBfX2hlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9tZV9fYWN0aW9ucy1jb250YWluZXIge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjM0cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC56ZWxmLWNhcmQge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnctODBwIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4udy03NXAge1xuICAgIHdpZHRoOiA3NSU7XG59XG5cbi53LTcwcCB7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLnctNjBwIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4udy02NXAge1xuICAgIHdpZHRoOiA2NSU7XG59XG5cbi53LTUwcCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4udy0zNXAge1xuICAgIHdpZHRoOiAzNSU7XG59XG5cbi5oLWZ1bGwge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5iZy13aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mLXdoaXRlIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByaW1hcnlDb2xvciB7XG4gICAgY29sb3I6ICMwMTIzNmQgIWltcG9ydGFudDtcbn1cblxuLmRpdmlkZXItaGVpZ2h0IHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzEpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBEZWZhdWx0IChzbSkgKi9cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaC0yMCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubXktMiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKiBNZWRpdW0gKG1kKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNtXFw6aC04IHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgfVxufVxuXG4vKiBMYXJnZSAobGcpICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmgtMjAge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5zbVxcOmgtOCB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgIH1cbn1cblxuLyogRXh0cmEgTGFyZ2UgKHhsKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgIC5oLTIwIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuc21cXDpoLTgge1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICB9XG59XG5cbi8qIFBhZGRpbmcgKi9cbi5wLTAge1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucC0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xufVxuLnAtMiB7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuLnAtMyB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5wLTQge1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG4ucC01IHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuLnAtNiB7XG4gICAgcGFkZGluZzogMS41cmVtO1xufVxuXG4ucHgtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ucHgtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG59XG4ucHgtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuLnB4LTMge1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLnB4LTQge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuLnB4LTUge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xufVxuLnB4LTYge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLnByLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnByLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5wci02IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5wbC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnBsLTQge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLnBsLTYge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuXG4vKiBNYXJnaW5zICovXG4ubS0wIHtcbiAgICBtYXJnaW46IDA7XG59XG4ubS0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW07XG59XG4ubS0yIHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbn1cbi5tLTMge1xuICAgIG1hcmdpbjogMC43NXJlbTtcbn1cbi5tLTQge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cbi5tLTUge1xuICAgIG1hcmdpbjogMS4yNXJlbTtcbn1cbi5tLTYge1xuICAgIG1hcmdpbjogMS41cmVtO1xufVxuXG4ubXgtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLm14LTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbi5teC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLm14LTMge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cbi5teC00IHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ubXgtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xufVxuLm14LTYge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG5cbi8qIEFkZGl0aW9uYWwgUGFkZGluZyBDbGFzc2VzICovXG4ucC03IHtcbiAgICBwYWRkaW5nOiAxLjc1cmVtO1xufVxuLnAtOCB7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cbi5wLTkge1xuICAgIHBhZGRpbmc6IDIuMjVyZW07XG59XG4ucC0xMCB7XG4gICAgcGFkZGluZzogMi41cmVtO1xufVxuLnAtMTEge1xuICAgIHBhZGRpbmc6IDIuNzVyZW07XG59XG4ucC0xMiB7XG4gICAgcGFkZGluZzogM3JlbTtcbn1cbi5wLTE0IHtcbiAgICBwYWRkaW5nOiAzLjVyZW07XG59XG4ucC0xNiB7XG4gICAgcGFkZGluZzogNHJlbTtcbn1cblxuLnB4LTcge1xuICAgIHBhZGRpbmctbGVmdDogMS43NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjc1cmVtO1xufVxuLnB4LTgge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLnB4LTkge1xuICAgIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjI1cmVtO1xufVxuLnB4LTEwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG59XG4ucHgtMTEge1xuICAgIHBhZGRpbmctbGVmdDogMi43NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjc1cmVtO1xufVxuLnB4LTEyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbn1cbi5weC0xNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMy41cmVtO1xufVxuLnB4LTE2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cblxuLyogQWRkaXRpb25hbCBNYXJnaW4gQ2xhc3NlcyAqL1xuLm0tNyB7XG4gICAgbWFyZ2luOiAxLjc1cmVtO1xufVxuLm0tOCB7XG4gICAgbWFyZ2luOiAycmVtO1xufVxuLm0tOSB7XG4gICAgbWFyZ2luOiAyLjI1cmVtO1xufVxuLm0tMTAge1xuICAgIG1hcmdpbjogMi41cmVtO1xufVxuLm0tMTEge1xuICAgIG1hcmdpbjogMi43NXJlbTtcbn1cbi5tLTEyIHtcbiAgICBtYXJnaW46IDNyZW07XG59XG4ubS0xNCB7XG4gICAgbWFyZ2luOiAzLjVyZW07XG59XG4ubS0xNiB7XG4gICAgbWFyZ2luOiA0cmVtO1xufVxuXG4ubXgtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNzVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjc1cmVtO1xufVxuLm14LTgge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi5teC05IHtcbiAgICBtYXJnaW4tbGVmdDogMi4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuMjVyZW07XG59XG4ubXgtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XG59XG4ubXgtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjc1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMi43NXJlbTtcbn1cbi5teC0xMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuLm14LTE0IHtcbiAgICBtYXJnaW4tbGVmdDogMy41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xufVxuLm14LTE2IHtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG59XG5cbi8qIFBhZGRpbmcgVG9wIGFuZCBCb3R0b20gQ2xhc3NlcyAqL1xuLnB0LTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xufVxuLnB0LTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4ucHQtMyB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG59XG4ucHQtNCB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG4ucHQtNSB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG59XG4ucHQtNiB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbn1cbi5wdC03IHtcbiAgICBwYWRkaW5nLXRvcDogMS43NXJlbTtcbn1cbi5wdC04IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cbi5wdC05IHtcbiAgICBwYWRkaW5nLXRvcDogMi4yNXJlbTtcbn1cbi5wdC0xMCB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbn1cbi5wdC0xMSB7XG4gICAgcGFkZGluZy10b3A6IDIuNzVyZW07XG59XG4ucHQtMTIge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuLnB0LTE0IHtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xufVxuLnB0LTE2IHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLnBiLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufVxuLnBiLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4ucGItMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG59XG4ucGItNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4ucGItNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG59XG4ucGItNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cbi5wYi03IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcbn1cbi5wYi04IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi5wYi05IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4yNXJlbTtcbn1cbi5wYi0xMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn1cbi5wYi0xMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNzVyZW07XG59XG4ucGItMTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuLnBiLTE0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufVxuLnBiLTE2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cblxuLyogTWFyZ2luIFRvcCBhbmQgQm90dG9tIENsYXNzZXMgKi9cbi5tdC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuLm10LTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5tdC0zIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuLm10LTQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubXQtNSB7XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cbi5tdC02IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubXQtNyB7XG4gICAgbWFyZ2luLXRvcDogMS43NXJlbTtcbn1cbi5tdC04IHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLm10LTkge1xuICAgIG1hcmdpbi10b3A6IDIuMjVyZW07XG59XG4ubXQtMTAge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbi5tdC0xMSB7XG4gICAgbWFyZ2luLXRvcDogMi43NXJlbTtcbn1cbi5tdC0xMiB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbi5tdC0xNCB7XG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xufVxuLm10LTE2IHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4ubWItMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5tYi0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubWItMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cbi5tYi00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm1iLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4ubWItNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLm1iLTcge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG59XG4ubWItOCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5tYi05IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xufVxuLm1iLTEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4ubWItMTEge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNzVyZW07XG59XG4ubWItMTIge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4ubWItMTQge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbn1cbi5tYi0xNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLyogQ29tYmluZWQgUGFkZGluZyBUb3AgYW5kIEJvdHRvbSBDbGFzc2VzICovXG4ucHktMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59XG4ucHktMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuLnB5LTMge1xuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xufVxuLnB5LTQge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnB5LTUge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuLnB5LTYge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cbi5weS03IHtcbiAgICBwYWRkaW5nLXRvcDogMS43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcbn1cbi5weS04IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi5weS05IHtcbiAgICBwYWRkaW5nLXRvcDogMi4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4yNXJlbTtcbn1cbi5weS0xMCB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuLnB5LTExIHtcbiAgICBwYWRkaW5nLXRvcDogMi43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi43NXJlbTtcbn1cbi5weS0xMiB7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG4ucHktMTQge1xuICAgIHBhZGRpbmctdG9wOiAzLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5weS0xNiB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi8qIENvbWJpbmVkIE1hcmdpbiBUb3AgYW5kIEJvdHRvbSBDbGFzc2VzICovXG4ubXktMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLm15LTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubXktMyB7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuLm15LTQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5teS01IHtcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4ubXktNiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5teS03IHtcbiAgICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG59XG4ubXktOCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLm15LTkge1xuICAgIG1hcmdpbi10b3A6IDIuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcbn1cbi5teS0xMCB7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cbi5teS0xMSB7XG4gICAgbWFyZ2luLXRvcDogMi43NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjc1cmVtO1xufVxuLm15LTEyIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4ubXktMTQge1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG59XG4ubXktMTYge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLm1haW4tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWNvbmRhcnktYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTJweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4tdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xOCB7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0IHtcbiAgICBmb250LWZhbWlseTogXCJNZW5kYVwiLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmgyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMyB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnplbGYtcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGI1N2QwOGEgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZWNvbmRhcnktYnV0dG9uOmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzRlNjU5OSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYjU3ZDAzNiAhaW1wb3J0YW50O1xufVxuXG4ubGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGluazpob3ZlciB7XG4gICAgY29sb3I6ICMwYjU3ZDA7XG59XG5cbi8qIE1hcmdpbiBSaWdodCBDbGFzc2VzICovXG4ubXItMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufVxuLm1yLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLm1yLTMge1xuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cbi5tci00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ubXItNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xufVxuLm1yLTYge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLm1yLTcge1xuICAgIG1hcmdpbi1yaWdodDogMS43NXJlbTtcbn1cbi5tci04IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4ubXItOSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjI1cmVtO1xufVxuLm1yLTEwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcbn1cbi5tci0xMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjc1cmVtO1xufVxuLm1yLTEyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG4ubXItMTQge1xuICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xufVxuLm1yLTE2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG59XG5cbi8qIE1hcmdpbiBMZWZ0IENsYXNzZXMgKi9cbi5tbC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbn1cbi5tbC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuLm1sLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xufVxuLm1sLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuLm1sLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xufVxuLm1sLTYge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG4ubWwtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNzVyZW07XG59XG4ubWwtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4ubWwtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuMjVyZW07XG59XG4ubWwtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG59XG4ubWwtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjc1cmVtO1xufVxuLm1sLTEyIHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cbi5tbC0xNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcbn1cbi5tbC0xNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG59XG5cbi5vbi1oZWFkZXIge1xuICAgIHdpZHRoOiA5MiU7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnktc2Nyb2xsIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5yb3VuZGVkLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLy8gbWF0ZXJpYWwgYnV0dG9uc1xuXG4ubWF0LW1kYy1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4udy0yNHB4IHtcbiAgICB3aWR0aDogMjRweDtcbn1cblxuLnctMjhweCB7XG4gICAgd2lkdGg6IDI4cHg7XG59XG5cbi53LTMycHgge1xuICAgIHdpZHRoOiAzMnB4O1xufVxuXG4udGV4dC1ncmV5IHtcbiAgICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjY5NCkgIWltcG9ydGFudDtcbn1cblxuLnpwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCIsIHNhbnMtc2VyaWY7XG59XG5cbi56bGluZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xufVxuXG4uemxpbmUtMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zODYpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xufVxuXG4udy1maXgge1xuICAgIHdpZHRoOiA2MDJweDtcbn1cblxuLnpucy1sb2dvIHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5zZW5kLXRyYW5zYWN0aW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIEZvciBleHRyZW1lbHkgc21hbGwgc2NyZWVuIGRldmljZXMgKDU5NXB4IGFuZCBiZWxvdykgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogdmFyaWFibGVzLiRtYXhFeHRyYVNtYWxsKSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgLnplbGYtY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuemVsZi1oZWFkZXIge1xuICAgICAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnctZml4IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnplbGYtY2FyZC1vbGQge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbn1cblxuLnN0YXRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICYtLW5vLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgICAgJiAuc3RhdHNfX3BlcmNlbnRhZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcblxuICAgICAgICAmLS1jb2xvcmVkIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Fycm93IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICB9XG5cbiAgICAmX19wZXJjZW50YWdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuXG4gICAgICAgICYtLXBvc2l0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgJiAuc3RhdHNfX2Fycm93IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtLW5lZ2F0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICYgLnN0YXRzX19hcnJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnplbGYtY2FyZC1vbGQge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDk3LCA5NywgOTcsIDAuMDgpO1xuICAgIGJvcmRlcjogMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSkgc29saWQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLnplbGYtY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTcwZGVnLCAjZmZmZmZmIDIwJSwgI2Y3YjdiOSA0MCUsICNjMTk2ZjkgNzAlLCAjODVjNmZmIDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi56ZWxmLWhlYWRlciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KSBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCByZ2JhKDAsIDAsIDAsIDAuMzUpIHNvbGlkO1xuICAgIGJvcmRlci10b3A6IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4zNSkgc29saWQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi56ZWxmLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLnplbGYtYm90dG9uLXNoZWV0LWZ1bGwsXG4uemVsZi1ib3R0b20tc2hlZXQtc2Vhc2FsdCxcbi56ZWxmLWJvdHRvbS1zaGVldCB7XG4gICAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4IDI2cHggMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnplbGYtYm90dG9tLXNoZWV0LXNlYXNhbHQge1xuICAgIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2VhU2FsdCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnplbGYtYm90dG9uLXNoZWV0LWZ1bGwge1xuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuXG4gICAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi56ZWxmLWRpYWxvZyxcbi56ZWxmLWRpYWxvZy1zZWFzYWx0IHtcbiAgICAubWRjLWRpYWxvZ19fc3VyZmFjZSB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI2cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi56ZWxmLWRpYWxvZy1zZWFzYWx0IHtcbiAgICAubWRjLWRpYWxvZ19fc3VyZmFjZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2VhU2FsdCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnplbGYtc25hY2tiYXIge1xuICAgIC5tZGMtc25hY2tiYXJfX3N1cmZhY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAubWF0LW1kYy1zbmFjay1iYXItbGFiZWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWRjLXNuYWNrYmFyX19hY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnplbGYtbWVudSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgJi0taWNvbi1lbmQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cbiAgICAgICAgICAgIC56ZWxmLW1lbnVfX2J1dHRvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLWljb24ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uemVsZi1jYXJkIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgd2lkdGg6IDU2NHB4O1xuICAgIG1pbi1oZWlnaHQ6IDc2OHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHZhcmlhYmxlcy4kbWVkaXVtKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuXG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMTBweDtcbiAgICB9XG5cbiAgICAmX19wcmV0aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCIsIFwiQXJpYWwgQmxhY2tcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMiU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIiwgXCJBcmlhbCBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMiU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICZfX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1ncm93IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2FjdGlvbnMge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLS1jb2x1bW4ge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1lbmQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uemVsZi1hY3Rpb24tcm93IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4taGVpZ2h0OiA2MnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLnplbGYtaW5wdXQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgYm9yZGVyOiAxcHggdmFyaWFibGVzLiRncmF5IHNvbGlkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICBpbnB1dFtyZWFkb25seV0ge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICAgICAgJjo6LW1zLXJldmVhbCxcbiAgICAgICAgJjo6LW1zLWNsZWFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgLnplbGYtaWNvbi1idXR0b24ge1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19wcmVmaXgtdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19wb3N0Zml4IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmRhLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgJl9fZmxvYXRpbmctbGFiZWwge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZWZ0OiAxN3B4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMThweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgfVxuXG4gICAgJl9fY29udHJvbCB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4td2lkdGg6IDI1NnB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgICAgICYtLWZsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIycHggMThweCA2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLnplbGYtaW5wdXRfX2Zsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcmlhYmxlcy4kcHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgICAgJiArIC56ZWxmLWlucHV0X19mbG9hdGluZy1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGlwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgIH1cblxuICAgICYtLWdhcC1uYXJyb3cge1xuICAgICAgICBnYXA6IDRweDtcbiAgICB9XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJiAuemVsZi1pbnB1dF9fY29udHJvbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yO1xuXG4gICAgICAgIC56ZWxmLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC56ZWxmLWlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLnplbGYtaW5wdXRfX2Zsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLnplbGYtaW5wdXRfX2NvbnRyb2wgKyAuemVsZi1pbnB1dF9fZmxvYXRpbmctbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi56ZWxmLXJhZGlvLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogOHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1N3B4LCAxZnIpKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnplbGYtcmFkaW8ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG5cbiAgICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgICAgICYgKyBzdmcge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hlY2tib3gtYm91bmNlIDAuNHMgbGluZWFyIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHNjYWxlKDAuOCkgdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDg0LjYlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHNjYWxlKDApIHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICB9XG5cbiAgICAmLS1wbGFpbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgbGVmdDogODkuOCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1nYXAtbGcge1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgfVxufVxuXG4uemVsZi1tZW51LWl0ZW0ge1xuICAgICYgPiBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnplbGYtY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICZsYWJlbCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmNoZWNrZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjaztcblxuICAgICAgICAgICAgJiArIHN2ZyB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGVja2JveC1ib3VuY2UgMC40cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHNjYWxlKDAuOCkgdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDNweDtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMjhweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwKSB0cmFuc2xhdGVaKDApO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjp2aXNpdGVkLFxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6Zm9jdXMtdmlzaWJsZSxcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kcHJpbWFyeUNvbG9yO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi56ZWxmLW1lc3NhZ2Uge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZ2FwOiA4cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBwLFxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0LFxuICAgIGg1LFxuICAgIGg2IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JEYXJrO1xuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0RGFyaztcbiAgICB9XG5cbiAgICAmLS1jb2x1bW4ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19yb3cge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG4uemVsZi1jaGlwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgfVxuXG4gICAgJi0taW5mbyB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGluZm87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kaW5mb0xpZ2h0O1xuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodDtcbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQ7XG4gICAgfVxufVxuXG4ucXItY29kZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRwbGF0aW51bTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWluLWhlaWdodDogMjM2cHg7XG4gICAgbWluLXdpZHRoOiAyMzZweDtcbiAgICBtYXgtaGVpZ2h0OiAyMzZweDtcbiAgICBtYXgtd2lkdGg6IDIzNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlO1xuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcblxuICAgICAgICAmW3NyYz1cIi4vYXNzZXRzL2ltYWdlcy9xci1wcmVsb2FkLnBuZ1wiXSB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigxOHB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRyYWctYW5kLWRyb3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKSAxcztcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICZfX2xvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICB9XG5cbiAgICAmX19sb2FkZXItb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1NSwgMjU1LCAwLjkpO1xuICAgIH1cblxuICAgICZfX3ByZXZpZXcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NzZweDtcbiAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICB9XG5cbiAgICAmX19kYXRhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbn1cblxuLnplbGYtbG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgJi0tc2NyZWVuLW1kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi50di1saWdodHdlaWdodC1jaGFydHMgYSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBTbWFsbCBzY3JlZW4gZGV2aWNlcyAoNjAwcHggYW5kIGFib3ZlKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiB2YXJpYWJsZXMuJG1pblNtYWxsKSB7XG59XG5cbi8qIE1lZGl1bSBzY3JlZW4gZGV2aWNlcyAoNzY4cHggYW5kIGFib3ZlKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiB2YXJpYWJsZXMuJG1lZGl1bSkge1xuICAgIC56ZWxmLWxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICAgICYtLXNjcmVlbi1tZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIEJpZyBzY3JlZW4gZGV2aWNlcyAoODg5cHggYW5kIGFib3ZlKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiB2YXJpYWJsZXMuJGxhcmdlKSB7XG59XG5cbi8qIEV4dHJhIGJpZyBzY3JlZW4gZGV2aWNlcyAoMTIwMHB4IGFuZCBhYm92ZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogdmFyaWFibGVzLiRjb21wdXRlcnMpIHtcbn1cbiIsIkB1c2UgJy4uL3N0eWxlL2VsZXZhdGlvbic7XG5AdXNlICcuLi9zdHlsZS9zYXNzLXV0aWxzJztcbkB1c2UgJy4vbTMtc3lzdGVtJztcbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOnN0cmluZyc7XG5cbiRfdG9rZW5zOiBudWxsO1xuJF9jb21wb25lbnQtcHJlZml4OiBudWxsO1xuJF9zeXN0ZW0tZmFsbGJhY2tzOiBtMy1zeXN0ZW0uY3JlYXRlLXN5c3RlbS1mYWxsYmFja3MoKTtcblxuLy8gU2V0cyB0aGUgdG9rZW4gcHJlZml4IGFuZCBtYXAgdG8gdXNlIHdoZW4gY3JlYXRpbmcgdG9rZW4gc2xvdHMuXG5AbWl4aW4gdXNlLXRva2VucygkcHJlZml4LCAkdG9rZW5zKSB7XG4gICRfY29tcG9uZW50LXByZWZpeDogJHByZWZpeCAhZ2xvYmFsO1xuICAkX3Rva2VuczogJHRva2VucyAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gICRfY29tcG9uZW50LXByZWZpeDogbnVsbCAhZ2xvYmFsO1xuICAkX3Rva2VuczogbnVsbCAhZ2xvYmFsO1xufVxuXG4vLyBDb21iaW5lcyBhIHByZWZpeCBhbmQgYSBzdHJpbmcgdG8gZ2VuZXJhdGUgYSBDU1MgdmFyaWFibGUgbmFtZSBmb3IgYSB0b2tlbi5cbkBmdW5jdGlvbiBfY3JlYXRlLXZhci1uYW1lKCRwcmVmaXgsICR0b2tlbikge1xuICBAaWYgJHByZWZpeCA9PSBudWxsIG9yICR0b2tlbiA9PSBudWxsIHtcbiAgICBAZXJyb3IgJ011c3Qgc3BlY2lmeSBib3RoIHByZWZpeCBhbmQgbmFtZSB3aGVuIGdlbmVyYXRpbmcgdG9rZW4nO1xuICB9XG5cbiAgJHN0cmluZy1wcmVmaXg6ICcnO1xuXG4gIC8vIFByZWZpeGVzIGFyZSBsaXN0cyBzbyB3ZSBuZWVkIHRvIGNvbWJpbmUgdGhlbS5cbiAgQGVhY2ggJHBhcnQgaW4gJHByZWZpeCB7XG4gICAgJHN0cmluZy1wcmVmaXg6IGlmKCRzdHJpbmctcHJlZml4ID09ICcnLCAkcGFydCwgJyN7JHN0cmluZy1wcmVmaXh9LSN7JHBhcnR9Jyk7XG4gIH1cblxuICBAcmV0dXJuIHN0cmluZy51bnF1b3RlKCctLSN7JHN0cmluZy1wcmVmaXh9LSN7JHRva2VufScpO1xufVxuXG4vLyBDcmVhdGVzIGEgQ1NTIHZhcmlhYmxlLCBpbmNsdWRpbmcgdGhlIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuQGZ1bmN0aW9uIF9jcmVhdGUtdmFyKCRuYW1lLCAkZmFsbGJhY2s6IG51bGwpIHtcbiAgQGlmICgkZmFsbGJhY2spIHtcbiAgICBAcmV0dXJuIHZhcigkbmFtZSwgJGZhbGxiYWNrKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoJG5hbWUpO1xuICB9XG59XG5cbi8vIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB0b2tlbiBnaXZlbiB0aGUgY3VycmVudCBnbG9iYWwgY29udGV4dCBzdGF0ZS5cbkBmdW5jdGlvbiBfZ2V0LXRva2VuLXZhbHVlKCR0b2tlbiwgJGZhbGxiYWNrKSB7XG4gICR2YXItbmFtZTogX2NyZWF0ZS12YXItbmFtZSgkX2NvbXBvbmVudC1wcmVmaXgsICR0b2tlbik7XG4gICRmYWxsYmFjazogX2dldC10b2tlbi1mYWxsYmFjaygkdG9rZW4sICRmYWxsYmFjayk7XG4gIEByZXR1cm4gX2NyZWF0ZS12YXIoJHZhci1uYW1lLCAkZmFsbGJhY2spO1xufVxuXG4vLyBBc3NlcnRpb24gbWl4aW4gdGhhdCB0aHJvd3MgYW4gZXJyb3IgaWYgdGhlIGdsb2JhbCBzdGF0ZSBoYXMgbm90IGJlZW4gc2V0IHVwIGJ5IHdyYXBwaW5nXG4vLyBjYWxscyB3aXRoIGB1c2UtdG9rZW5zYC5cbkBmdW5jdGlvbiBfYXNzZXJ0LXVzZS10b2tlbnMoJHRva2VuKSB7XG4gIEBpZiAkX2NvbXBvbmVudC1wcmVmaXggPT0gbnVsbCBvciAkX3Rva2VucyA9PSBudWxsIHtcbiAgICBAZXJyb3IgJ0Z1bmN0aW9uIHdhcyBub3QgY2FsbGVkIHdpdGhpbiBhIHdyYXBwaW5nIGNhbGwgb2YgYHVzZS10b2tlbnNgJztcbiAgfVxuICBAaWYgbm90IG1hcC5oYXMta2V5KCRfdG9rZW5zLCAkdG9rZW4pIHtcbiAgICBAZXJyb3IgJ1Rva2VuICN7JHRva2VufSBkb2VzIG5vdCBleGlzdC4gQ29uZmlndXJlZCB0b2tlbnMgYXJlOiAje21hcC5rZXlzKCRfdG9rZW5zKX0nO1xuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLyBFbWl0cyBhIHNsb3QgZm9yIHRoZSBnaXZlbiB0b2tlbiwgcHJvdmlkZWQgdGhhdCBpdCBoYXMgYSBub24tbnVsbCB2YWx1ZSBpbiB0aGUgdG9rZW4gbWFwIHBhc3NlZFxuLy8gdG8gYHVzZS10b2tlbnNgLlxuLy8gQWNjZXB0cyBhbiBvcHRpb25hbCBmYWxsYmFjayBwYXJhbWV0ZXIgdG8gaW5jbHVkZSBpbiB0aGUgQ1NTIHZhcmlhYmxlLlxuLy8gSWYgJGZhbGxiYWNrIGlzIGB0cnVlYCwgdGhlbiB1c2UgdGhlIHRva2VucyBtYXAgdG8gZ2V0IHRoZSBmYWxsYmFjay5cbi8vIFRPRE86IFJlbW92ZSB0aGUgdXNlIGNhc2Ugd2hlcmUgd2UgYWNjZXB0IFwidHJ1ZVwiIGFuZCBoYW5kbGUgYW55IGZhaWxpbmcgY2xpZW50IHNjcmVlbnNob3RzXG5AbWl4aW4gY3JlYXRlLXRva2VuLXNsb3QoJHByb3BlcnR5LCAkdG9rZW4sICRmYWxsYmFjazogbnVsbCkge1xuICAkX2Fzc2VydDogX2Fzc2VydC11c2UtdG9rZW5zKCR0b2tlbik7XG4gIEBpZiBtYXAuZ2V0KCRfdG9rZW5zLCAkdG9rZW4pICE9IG51bGwge1xuICAgICN7JHByb3BlcnR5fTogI3tfZ2V0LXRva2VuLXZhbHVlKCR0b2tlbiwgJGZhbGxiYWNrKX07XG4gIH1cbn1cblxuLy8gUmV0dXJucyB0aGUgbmFtZSBvZiBhIHRva2VuIGluY2x1ZGluZyB0aGUgY3VycmVudCBwcmVmaXguIEludGVuZGVkIHRvIGJlIHVzZWQgaW4gY2FsY3VsYXRpb25zXG4vLyBpbnZvbHZpbmcgdG9rZW5zLiBgY3JlYXRlLXRva2VuLXNsb3RgIHNob3VsZCBiZSB1c2VkIHdoZW4gb3V0cHV0dGluZyB0b2tlbnMuXG5AZnVuY3Rpb24gZ2V0LXRva2VuLXZhcmlhYmxlLW5hbWUoJHRva2VuKSB7XG4gICRfYXNzZXJ0OiBfYXNzZXJ0LXVzZS10b2tlbnMoJHRva2VuKTtcbiAgQHJldHVybiBfY3JlYXRlLXZhci1uYW1lKCRfY29tcG9uZW50LXByZWZpeCwgJHRva2VuKTtcbn1cblxuLy8gUmV0dXJucyBhIGB2YXIoKWAgcmVmZXJlbmNlIHRvIGEgc3BlY2lmaWMgdG9rZW4uIEludGVuZGVkIGZvciBkZWNsYXJhdGlvbnNcbi8vIHdoZXJlIHRoZSB0b2tlbiBoYXMgdG8gYmUgcmVmZXJlbmNlZCBhcyBhIHBhcnQgb2YgYSBsYXJnZXIgZXhwcmVzc2lvbi5cbi8vIEFjY2VwdHMgYW4gb3B0aW9uYWwgZmFsbGJhY2sgcGFyYW1ldGVyIHRvIGluY2x1ZGUgaW4gdGhlIENTUyB2YXJpYWJsZS5cbi8vIElmICRmYWxsYmFjayBpcyBgdHJ1ZWAsIHRoZW4gdXNlIHRoZSB0b2tlbnMgbWFwIHRvIGdldCB0aGUgZmFsbGJhY2suXG4vLyBUT0RPOiBSZW1vdmUgdGhlIHVzZSBjYXNlIHdoZXJlIHdlIGFjY2VwdCBcInRydWVcIiBhbmQgaGFuZGxlIGFueSBmYWlsaW5nIGNsaWVudCBzY3JlZW5zaG90c1xuQGZ1bmN0aW9uIGdldC10b2tlbi12YXJpYWJsZSgkdG9rZW4sICRmYWxsYmFjazogbnVsbCkge1xuICAkX2Fzc2VydDogX2Fzc2VydC11c2UtdG9rZW5zKCR0b2tlbik7XG4gIEByZXR1cm4gX2dldC10b2tlbi12YWx1ZSgkdG9rZW4sICRmYWxsYmFjayk7XG59XG5cbi8vIEdldHMgdGhlIHRva2VuJ3MgZmFsbGJhY2sgdmFsdWUuIFByZWZlcnMgYWRkaW5nIGEgc3lzdGVtLWxldmVsIGZhbGxiYWNrIGlmIG9uZSBleGlzdHMsIG90aGVyd2lzZVxuLy8gdXNlIHRoZSBwcm92aWRlZCBmYWxsYmFjay5cbkBmdW5jdGlvbiBfZ2V0LXRva2VuLWZhbGxiYWNrKCR0b2tlbiwgJGZhbGxiYWNrOiBudWxsKSB7XG4gIC8vIElmIHRoZSAkZmFsbGJhY2sgaXMgYHRydWVgLCB0aGlzIGlzIHRoZSBjb21wb25lbnQncyBzaWduYWwgdG8gdXNlIHRoZSBjdXJyZW50IHRva2VuIG1hcCB2YWx1ZVxuICBAaWYgKCRmYWxsYmFjayA9PSB0cnVlKSB7XG4gICAgJGZhbGxiYWNrOiBtYXAuZ2V0KCRfdG9rZW5zLCAkdG9rZW4pO1xuICB9XG5cbiAgLy8gQ2hlY2sgd2hldGhlciB0aGVyZSdzIGEgc3lzdGVtLWxldmVsIGZhbGxiYWNrLiBJZiBub3QsIHJldHVybiB0aGUgb3B0aW9uYWxcbiAgLy8gcHJvdmlkZWQgZmFsbGJhY2sgKG90aGVyd2lzZSBudWxsKS5cbiAgJHN5cy1mYWxsYmFjazogbWFwLmdldCgkX3N5c3RlbS1mYWxsYmFja3MsICRfY29tcG9uZW50LXByZWZpeCwgJHRva2VuKTtcbiAgQGlmIChub3QgJHN5cy1mYWxsYmFjaykge1xuICAgIEByZXR1cm4gJGZhbGxiYWNrO1xuICB9XG5cbiAgQGlmIChzYXNzLXV0aWxzLmlzLWNzcy12YXItbmFtZSgkc3lzLWZhbGxiYWNrKSkge1xuICAgIEByZXR1cm4gX2NyZWF0ZS12YXIoJHN5cy1mYWxsYmFjaywgJGZhbGxiYWNrKTtcbiAgfVxuXG4gIEByZXR1cm4gJHN5cy1mYWxsYmFjaztcbn1cblxuLy8gT3V0cHV0cyBhIG1hcCBvZiB0b2tlbnMgdW5kZXIgYSBzcGVjaWZpYyBwcmVmaXguXG5AbWl4aW4gY3JlYXRlLXRva2VuLXZhbHVlcygkcHJlZml4LCAkdG9rZW5zKSB7XG4gIEBpZiAkdG9rZW5zICE9IG51bGwge1xuICAgIC8vIFRPRE86IFRoZSBgJmAgYWRkcyB0byB0aGUgZmlsZSBzaXplIG9mIHRoZW1lLCBidXQgaXQncyBuZWNlc3NhcnkgZm9yIGNvbXBhdGliaWxpdHlcbiAgICAvLyB3aXRoIGh0dHBzOi8vc2Fzcy1sYW5nLmNvbS9kb2N1bWVudGF0aW9uL2JyZWFraW5nLWNoYW5nZXMvbWl4ZWQtZGVjbHMvLiBXZSBzaG91bGRcbiAgICAvLyBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBkbyB0aGlzIG9yIG1vdmUgYWxsIHRoZSBjb25jcmV0ZSBzdHlsZXMgb3V0IG9mIHRoZSB0aGVtZS5cbiAgICAmIHtcbiAgICAgIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdG9rZW5zIHtcbiAgICAgICAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAgICAgICAje19jcmVhdGUtdmFyLW5hbWUoJHByZWZpeCwgJGtleSl9OiAjeyR2YWx1ZX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTURDIGRvZXNuJ3QgY3VycmVudGx5IGhhbmRsZSBlbGV2YXRpb24gdG9rZW5zIHByb3Blcmx5LiBBcyBhIHRlbXBvcmFyeSB3b3JrYXJvdW5kIHdlIGNhbiBjb21iaW5lXG4vLyB0aGUgZWxldmF0aW9uIGFuZCBzaGFkb3ctY29sb3IgdG9rZW5zIGludG8gYSBmdWxsIGJveC1zaGFkb3cgYW5kIHVzZSBpdCBhcyB0aGUgdmFsdWUgZm9yIHRoZVxuLy8gZWxldmF0aW9uIHRva2VuLlxuQGZ1bmN0aW9uIHJlc29sdmUtZWxldmF0aW9uKCR0b2tlbnMsICRlbGV2YXRpb24tdG9rZW4sICRzaGFkb3ctY29sb3ItdG9rZW4pIHtcbiAgJGVsZXZhdGlvbjogbWFwLmdldCgkdG9rZW5zLCAkZWxldmF0aW9uLXRva2VuKTtcbiAgJHNoYWRvdy1jb2xvcjogbWFwLmdldCgkdG9rZW5zLCAkc2hhZG93LWNvbG9yLXRva2VuKTtcbiAgQHJldHVybiBtYXAubWVyZ2UoXG4gICAgJHRva2VucyxcbiAgICAoXG4gICAgICAkZWxldmF0aW9uLXRva2VuOiBlbGV2YXRpb24uZ2V0LWJveC1zaGFkb3coJGVsZXZhdGlvbiwgJHNoYWRvdy1jb2xvciksXG4gICAgICAkc2hhZG93LWNvbG9yLXRva2VuOiBudWxsLFxuICAgIClcbiAgKTtcbn1cblxuLy8vIENoZWNrcyB3aGV0aGVyIGEgbGlzdCBzdGFydHMgd2loIGEgZ2l2ZW4gcHJlZml4XG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCBUaGUgbGlzdCB2YWx1ZSB0byBjaGVjayB0aGUgcHJlZml4IG9mLlxuLy8vIEBwYXJhbSB7TGlzdH0gJHByZWZpeCBUaGUgcHJlZml4IHRvIGNoZWNrLlxuLy8vIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGxpc3Qgc3RhcnRzIHdpdGggdGhlIHByZWZpeC5cbkBmdW5jdGlvbiBfaXMtcHJlZml4KCRsaXN0LCAkcHJlZml4KSB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGlzdC5sZW5ndGgoJHByZWZpeCkge1xuICAgIEBpZiBsaXN0Lm50aCgkbGlzdCwgJGkpICE9IGxpc3QubnRoKCRwcmVmaXgsICRpKSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLyBHZXRzIHRoZSBzdXBwb3J0ZWQgY29sb3IgdmFyaWFudHMgaW4gdGhlIGdpdmVuIHRva2VuIHNldCBmb3IgdGhlIGdpdmVuIHByZWZpeC5cbi8vLyBAcGFyYW0ge01hcH0gJHRva2VucyBUaGUgZnVsbCB0b2tlbiBtYXAuXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJlZml4IFRoZSBjb21wb25lbnQgcHJlZml4IHRvIGdldCBjb2xvciB2YXJpYW50cyBmb3IuXG4vLy8gQHJldHVybiB7TGlzdH0gVGhlIHN1cHBvcnRlZCBjb2xvciB2YXJpYW50cy5cbkBmdW5jdGlvbiBfc3VwcG9ydGVkLWNvbG9yLXZhcmlhbnRzKCR0b2tlbnMsICRwcmVmaXgpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICRuYW1lc3BhY2UgaW4gbWFwLmtleXMoJHRva2Vucykge1xuICAgIEBpZiBsaXN0Lmxlbmd0aCgkcHJlZml4KSA9PSBsaXN0Lmxlbmd0aCgkbmFtZXNwYWNlKSAtIDEgYW5kIF9pcy1wcmVmaXgoJG5hbWVzcGFjZSwgJHByZWZpeCkge1xuICAgICAgJHJlc3VsdDogbGlzdC5hcHBlbmQoJHJlc3VsdCwgbGlzdC5udGgoJG5hbWVzcGFjZSwgbGlzdC5sZW5ndGgoJG5hbWVzcGFjZSkpLCBjb21tYSk7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vIEdldHMgdGhlIHRva2VuIHZhbHVlcyBmb3IgdGhlIGdpdmVuIGNvbXBvbmVudHMgcHJlZml4IHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4vLy8gQHBhcmFtIHtNYXB9ICR0b2tlbnMgVGhlIGZ1bGwgdG9rZW4gbWFwLlxuLy8vIEBwYXJhbSB7TGlzdH0gJHByZWZpeCBUaGUgY29tcG9uZW50IHByZWZpeCB0byBnZXQgdGhlIHRva2VuIHZhbHVlcyBmb3IuXG4vLy8gQHBhcmFtIHtBcmdMaXN0fSBBbnkgYWRkaXRpb25hbCBvcHRpb25zXG4vLy8gICBDdXJyZW50bHkgdGhlIGFkZGl0aW9uYWwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlOlxuLy8gICAgIC0gJGNvbG9yLXZhcmlhbnQgLSBUaGUgY29sb3IgdmFyaWFudCB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRcbi8vICAgICAtICRlbWl0LW92ZXJyaWRlcy1vbmx5IC0gV2hldGhlciB0byBlbWl0ICpvbmx5KiB0aGUgb3ZlcnJpZGVzIGZvciB0aGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWMgY29sb3IgdmFyaWFudCwgb3IgYWxsIGNvbG9yIHN0eWxlcy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4vLy8gQHRocm93cyBJZiBnaXZlbiBvcHRpb25zIGFyZSBpbnZhbGlkXG4vLy8gQHJldHVybiB7TWFwfSBUaGUgdG9rZW4gdmFsdWVzIGZvciB0aGUgcmVxdWVzdGVkIGNvbXBvbmVudC5cbkBmdW5jdGlvbiBnZXQtdG9rZW5zLWZvcigkdG9rZW5zLCAkcHJlZml4LCAkb3B0aW9ucy4uLikge1xuICAkb3B0aW9uczogc2Fzcy11dGlscy52YWxpZGF0ZS1rZXl3b3JkLWFyZ3MoJG9wdGlvbnMsIChjb2xvci12YXJpYW50LCBlbWl0LW92ZXJyaWRlcy1vbmx5KSk7XG4gIEBpZiAkdG9rZW5zID09ICgpIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG4gICR2YWx1ZXM6IG1hcC5nZXQoJHRva2VucywgJHByZWZpeCk7XG4gICRjb2xvci12YXJpYW50OiBtYXAuZ2V0KCRvcHRpb25zLCBjb2xvci12YXJpYW50KTtcbiAgJGVtaXQtb3ZlcnJpZGVzLW9ubHk6IG1hcC5nZXQoJG9wdGlvbnMsIGVtaXQtb3ZlcnJpZGVzLW9ubHkpO1xuICBAaWYgJGNvbG9yLXZhcmlhbnQgPT0gbnVsbCB7XG4gICAgQHJldHVybiAkdmFsdWVzO1xuICB9XG4gICRvdmVycmlkZXM6IG1hcC5nZXQoJHRva2VucywgbGlzdC5hcHBlbmQoJHByZWZpeCwgJGNvbG9yLXZhcmlhbnQpKTtcbiAgQGlmICRvdmVycmlkZXMgPT0gbnVsbCB7XG4gICAgJHZhcmlhbnRzOiBfc3VwcG9ydGVkLWNvbG9yLXZhcmlhbnRzKCR0b2tlbnMsICRwcmVmaXgpO1xuICAgICRzZWNvbmRhcnktbWVzc2FnZTogaWYoXG4gICAgICAkdmFyaWFudHMgPT0gKCksXG4gICAgICAnTWl4aW4gZG9lcyBub3Qgc3VwcG9ydCBjb2xvciB2YXJpYW50cycsXG4gICAgICAnU3VwcG9ydGVkIGNvbG9yIHZhcmlhbnRzIGFyZTogI3skdmFyaWFudHN9J1xuICAgICk7XG5cbiAgICBAZXJyb3IgJ0ludmFsaWQgY29sb3IgdmFyaWFudDogI3skY29sb3ItdmFyaWFudH0uICN7JHNlY29uZGFyeS1tZXNzYWdlfS4nO1xuICB9XG4gIEByZXR1cm4gaWYoJGVtaXQtb3ZlcnJpZGVzLW9ubHksICRvdmVycmlkZXMsIG1hcC5tZXJnZSgkdmFsdWVzLCAkb3ZlcnJpZGVzKSk7XG59XG5cbi8vLyBFbWl0cyBuZXcgdG9rZW4gdmFsdWVzIGZvciB0aGUgZ2l2ZW4gdG9rZW4gb3ZlcnJpZGVzLlxuLy8vIFZlcmlmaWVzIHRoYXQgdGhlIG92ZXJyaWRlcyBwYXNzZWQgaW4gYXJlIHZhbGlkIHRva2Vucy5cbi8vLyBOZXcgdG9rZW4gdmFsdWVzIGFyZSBlbWl0dGVkIHVuZGVyIHRoZSBjdXJyZW50IHNlbGVjdG9yIG9yIHJvb3QuXG5AbWl4aW4gYmF0Y2gtY3JlYXRlLXRva2VuLXZhbHVlcygkb3ZlcnJpZGVzOiAoKSwgJG5hbWVzcGFjZS1jb25maWdzLi4uKSB7XG4gIEBpbmNsdWRlIHNhc3MtdXRpbHMuY3VycmVudC1zZWxlY3Rvci1vci1yb290KCkge1xuICAgICRwcmVmaXhlZC1uYW1lLWRhdGE6ICgpO1xuICAgICR1bnByZWZpeGVkLW5hbWUtZGF0YTogKCk7XG4gICAgJGFsbC1uYW1lczogKCk7XG5cbiAgICBAZWFjaCAkY29uZmlnIGluICRuYW1lc3BhY2UtY29uZmlncyB7XG4gICAgICAkbmFtZXNwYWNlOiBtYXAuZ2V0KCRjb25maWcsIG5hbWVzcGFjZSk7XG4gICAgICAkcHJlZml4OiBpZihtYXAuaGFzLWtleSgkY29uZmlnLCBwcmVmaXgpLCBtYXAuZ2V0KCRjb25maWcsIHByZWZpeCksICcnKTtcbiAgICAgICR0b2tlbnM6IF9maWx0ZXItbnVsbHMobWFwLmdldCgkY29uZmlnLCB0b2tlbnMpKTtcbiAgICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lOiAkcHJlZml4ICsgJG5hbWU7XG4gICAgICAgICRhbGwtbmFtZXM6IGxpc3QuYXBwZW5kKCRhbGwtbmFtZXMsICRwcmVmaXhlZC1uYW1lLCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgICAgIEBpZiBtYXAuaGFzLWtleSgkcHJlZml4ZWQtbmFtZS1kYXRhLCAkcHJlZml4ZWQtbmFtZSkge1xuICAgICAgICAgIEBlcnJvciAje1xuICAgICAgICAgICdFcnJvciBvdmVycmlkaW5nIHRva2VuOiBBbWJpZ3VvdXMgdG9rZW4gbmFtZSBgJ1xuICAgICAgICB9I3tcbiAgICAgICAgICAkcHJlZml4ZWQtbmFtZVxuICAgICAgICB9I3tcbiAgICAgICAgICAnYCBleGlzdHMgaW4gbXVsdGlwbGUgbmFtZXNwYWNlczogYCgnXG4gICAgICAgIH0je1xuICAgICAgICAgIGxpc3QubnRoKG1hcC5nZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJHByZWZpeGVkLW5hbWUpLCAxKVxuICAgICAgICB9I3tcbiAgICAgICAgICAnKWAgYW5kIGAoJ1xuICAgICAgICB9I3tcbiAgICAgICAgICAkbmFtZXNwYWNlXG4gICAgICAgIH0je1xuICAgICAgICAgICcpYCdcbiAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkcHJlZml4ZWQtbmFtZS1kYXRhOiBtYXAuc2V0KCRwcmVmaXhlZC1uYW1lLWRhdGEsICRwcmVmaXhlZC1uYW1lLCAoJG5hbWVzcGFjZSwgJG5hbWUpKTtcbiAgICAgICAgJHVucHJlZml4ZWQtZGF0YTogbWFwLmhhcy1rZXkoJHVucHJlZml4ZWQtbmFtZS1kYXRhLCAkbmFtZSkgYW5kXG4gICAgICAgICAgbWFwLmdldCgkdW5wcmVmaXhlZC1uYW1lLWRhdGEsICRuYW1lKSBvclxuICAgICAgICAgICgpO1xuICAgICAgICAkdW5wcmVmaXhlZC1kYXRhOiBsaXN0LmFwcGVuZCgkdW5wcmVmaXhlZC1kYXRhLCAoJG5hbWVzcGFjZSwgJHByZWZpeGVkLW5hbWUpKTtcbiAgICAgICAgJHVucHJlZml4ZWQtbmFtZS1kYXRhOiBtYXAuc2V0KCR1bnByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUsICR1bnByZWZpeGVkLWRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJG92ZXJyaWRlcyB7XG4gICAgICBAaWYgbWFwLmhhcy1rZXkoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpIHtcbiAgICAgICAgJGRhdGE6IG1hcC5nZXQoJHByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpO1xuICAgICAgICAkbmFtZXNwYWNlOiBsaXN0Lm50aCgkZGF0YSwgMSk7XG4gICAgICAgICRuYW1lOiBsaXN0Lm50aCgkZGF0YSwgMik7XG4gICAgICAgIEBpbmNsdWRlIGNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgICAgJG5hbWVzcGFjZSxcbiAgICAgICAgICAoXG4gICAgICAgICAgICAkbmFtZTogJHZhbHVlLFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gQGVsc2UgaWYgKG1hcC5oYXMta2V5KCR1bnByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpKSB7XG4gICAgICAgICRkYXRhbGlzdDogbWFwLmdldCgkdW5wcmVmaXhlZC1uYW1lLWRhdGEsICRuYW1lKTtcbiAgICAgICAgJHByZWZpeGVkLW5hbWVzOiAoKTtcbiAgICAgICAgQGVhY2ggJGRhdGEgaW4gJGRhdGFsaXN0IHtcbiAgICAgICAgICAkbmFtZXNwYWNlOiBsaXN0Lm50aCgkZGF0YSwgMSk7XG4gICAgICAgICAgJHByZWZpeGVkLW5hbWVzOiBsaXN0LmFwcGVuZCgkcHJlZml4ZWQtbmFtZXMsIGxpc3QubnRoKCRkYXRhLCAyKSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgICAgICAgIEBpbmNsdWRlIGNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgICAgICAkbmFtZXNwYWNlLFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAkbmFtZTogJHZhbHVlLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgQHdhcm4gI3tcbiAgICAgICAgJ1Rva2VuIGAnXG4gICAgICB9I3tcbiAgICAgICAgJG5hbWVcbiAgICAgIH0je1xuICAgICAgICAnYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFsdGVybmF0aXZlczogJ1xuICAgICAgfSN7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lc1xuICAgICAgfTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgI3snSW52YWxpZCB0b2tlbiBuYW1lIGAnfSN7JG5hbWV9I3snYC4gJ30jeydWYWxpZCB0b2tlbnMgYXJlOiAnfSN7JGFsbC1uYW1lc307XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLyBGaWx0ZXJzIGtleXMgd2l0aCBhIG51bGwgdmFsdWUgb3V0IG9mIHRoZSBtYXAuXG4vLy8gQHBhcmFtIHtNYXB9ICRtYXAgVGhlIG1hcCB0byBmaWx0ZXIuXG4vLy8gQHJldHVybiB7TWFwfSBUaGUgZ2l2ZW4gbWFwIHdpdGggYWxsIG9mIHRoZSBudWxsIGtleXMgZmlsdGVyZWQgb3V0LlxuQGZ1bmN0aW9uIF9maWx0ZXItbnVsbHMoJG1hcCkge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbCBpbiAkbWFwIHtcbiAgICBAaWYgJHZhbCAhPSBudWxsIHtcbiAgICAgICRyZXN1bHQ6IG1hcC5zZXQoJHJlc3VsdCwgJGtleSwgJHZhbCk7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cbiIsIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4uemVsZi1idXR0b24tZXh0ZXJuYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uemVsZi1idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBnYXA6IDhweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICAmLS1tYXJnaW4tcmlnaHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10aGluIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgfVxuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuemVsZi1idXR0b24tLWh5cGVybGluayB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tb3V0bGluZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgfVxufVxuXG4uemVsZi1pY29uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBnYXA6IDE2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiA1NnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmLS00MCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICAgICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10cmFuc3BhcmVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRleHQge1xuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIiwiJHByaW1hcnlDb2xvcjogIzBlMjZmZjtcbiRwcmltYXJ5TGlnaHQ6ICNkYWRkZmE7XG4kc2Vjb25kYXJ5Q29sb3I6ICNmZjU3MjE7XG4kc2Vjb25kYXJ5Q29sb3JMaWdodDogI2Y2ZTVlMDtcblxuJGNvcnJlY3Q6ICMxZWE0NDY7XG4kY29ycmVjdERhcms6ICMwZjUyMjM7XG4kY29ycmVjdExpZ2h0OiAjZTdmOGVkO1xuXG4kZXJyb3I6ICNkYzM2MmU7XG4kZXJyb3JEYXJrOiAjNjAxNDEwO1xuJGVycm9yTGlnaHQ6ICNmY2VlZWU7XG5cbiR3YXJuaW5nOiAjZGU2ODAwO1xuJHdhcm5pbmdEYXJrOiAjNGEyMTBhO1xuJHdhcm5pbmdMaWdodDogI2ZmZWVlOTtcblxuJGluZm86ICMzOTk4ZDM7XG4kaW5mb0Rhcms6ICMwMDRhNzc7XG4kaW5mb0xpZ2h0OiAjZWNmM2ZlO1xuXG4kYmxhY2s6ICMxODE4MTg7XG4kZ3JheTogIzczNzc3ZjtcbiR0YXVwZUdyYXk6ICM5NjkzOWU7XG4kZnJlbmNoR3JheTogI2MzYzZjZjtcbiRwbGF0aW51bTogI2UzZTNlMztcbiRhbnRpRmxhc2hXaGl0ZTogI2VlZWRmMTtcbiRzZWFTYWx0OiAjZjlmOWZjO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4kc21vb3RoQmV6aWVyOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40LCAwLjcsIDEpO1xuXG4kbWF4RXh0cmFTbWFsbDogNTk1cHg7XG4kbWluU21hbGw6IDYwMHB4O1xuJG1lZGl1bTogNzY4cHg7XG4kbGFyZ2U6IDg4OXB4O1xuJGNvbXB1dGVyczogMTIwMHB4O1xuIiwiQHVzZSBcIi4vdmFyaWFibGVzXCI7XG5cbi5hbmltYXRlZC10YWJzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fc3dpdGNoIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgJi0tbGVmdDphZnRlciB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLXJpZ2h0OmFmdGVyIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNy41cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgY3ViaWMtYmV6aWVyKDAuODgsIC0wLjM1LCAwLjU2NSwgMS4zNSkgMC4zcztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFuaW1hdGVkLXRhYiB7XG4gICAgICAgICAgICBjb2xvcjogIzg1ODU4NTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI3LjVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAgICAgJjpob3Zlcjpub3QoLmFuaW1hdGVkLXRhYi0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZDNkNDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogdmFyaWFibGVzLiRtaW5TbWFsbCkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnJpcHBsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2I1ODlmMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDJzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xuICAgICAgICBhbmltYXRpb246IHJpcHBsZSAwLjhzIGluZmluaXRlO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICB9XG5cbiAgICAmLS0yNjgge1xuICAgICAgICB3aWR0aDogMjY4cHg7XG4gICAgICAgIGhlaWdodDogMjY4cHg7XG5cbiAgICAgICAgLnJpcHBsZSB7XG4gICAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCAjYjU4OWYwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2I1ODlmMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjBkM2Q0O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYjU4OWYwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBjaGVja2JveC1ib3VuY2Uge1xuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC45KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3Rva2Vucy9fbTMtc3lzdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21haW4uc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3Rva2Vucy9fdG9rZW4tdXRpbHMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fYW5pbWF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBMRTtFQUVJLCtDQUFBO0VBQUEsa0NBQUE7RUFBQSx3Q0FBQTtFQUFBLCtCQUFBO0VBQUEsdUNBQUE7RUFBQSxnQ0FBQTtFQUFBLHFEQUFBO0VBQUEsbUNBQUE7RUFBQSwwQ0FBQTtFQUFBLG9DQUFBO0VBQUEsd0NBQUE7RUFBQSxpQ0FBQTtFQUFBLGdEQUFBO0VBQUEsa0NBQUE7RUFBQSxzQ0FBQTtFQUFBLGtDQUFBO0VBQUEsdUNBQUE7RUFBQSxnQ0FBQTtFQUFBLG9EQUFBO0VBQUEscUNBQUE7RUFBQSx5Q0FBQTtFQUFBLHNDQUFBO0VBQUEsMkNBQUE7RUFBQSxtQ0FBQTtFQUFBLHdEQUFBO0VBQUEsc0NBQUE7RUFBQSw2Q0FBQTtFQUFBLHVDQUFBO0VBQUEsb0NBQUE7RUFBQSxvQ0FBQTtFQUFBLHNEQUFBO0VBQUEscUNBQUE7RUFBQSw0Q0FBQTtFQUFBLHFDQUFBO0VBQUEsbUNBQUE7RUFBQSxtQ0FBQTtFQUFBLG1EQUFBO0VBQUEsc0NBQUE7RUFBQSw0Q0FBQTtFQUFBLG1DQUFBO0VBQUEsb0NBQUE7RUFBQSxvQ0FBQTtFQUFBLHdEQUFBO0VBQUEsdUNBQUE7RUFBQSw4Q0FBQTtFQUFBLHVDQUFBO0VBQUEscUNBQUE7RUFBQSxxQ0FBQTtFQUFBLG1EQUFBO0VBQUEsc0NBQUE7RUFBQSwwQ0FBQTtFQUFBLHFDQUFBO0VBQUEsb0NBQUE7RUFBQSxvQ0FBQTtFQUFBLHFEQUFBO0VBQUEsbUNBQUE7RUFBQSwwQ0FBQTtFQUFBLG9DQUFBO0VBQUEsd0NBQUE7RUFBQSxpQ0FBQTtFQUFBLDJDQUFBO0VBQUEsa0RBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsb0NBQUE7RUFBQSx5Q0FBQTtFQUFBLGtDQUFBO0VBQUEsNENBQUE7RUFBQSxrREFBQTtFQUFBLG1DQUFBO0VBQUEsdUNBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsaUNBQUE7RUFBQSxxREFBQTtFQUFBLG1DQUFBO0VBQUEsMENBQUE7RUFBQSxvQ0FBQTtFQUFBLGlDQUFBO0VBQUEsaUNBQUE7RUFBQSxpREFBQTtFQUFBLG9DQUFBO0VBQUEsMENBQUE7RUFBQSxpQ0FBQTtFQUFBLHlDQUFBO0VBQUEsa0NBQUE7RUFBQSxxREFBQTtFQUFBLG1DQUFBO0VBQUEsMENBQUE7RUFBQSxvQ0FBQTtFQUFBLHdDQUFBO0VBQUEsaUNBQUE7QUMvRk47QURrSEU7RUFFSSxrQ0FBQTtFQUFBLCtDQUFBO0VBQUEsaUNBQUE7RUFBQSw2Q0FBQTtFQUFBLDZCQUFBO0VBQUEsNEJBQUE7RUFBQSx5Q0FBQTtFQUFBLDJDQUFBO0VBQUEseUNBQUE7RUFBQSw2QkFBQTtFQUFBLHdCQUFBO0VBQUEsMkJBQUE7QUN0R047QUQ0R0U7RUFFSSwyQ0FBQTtFQUFBLHlDQUFBO0VBQUEseUNBQUE7RUFBQSwyQ0FBQTtBQ3hHTjs7QUNXSTtFQUdNLHVDQUFBO0FEVlY7O0FDT0k7RUFHTSxtQ0FBQTtBRE5WO0FDR0k7RUFHTSxnREFBQTtBREhWOztBQ0FJO0VBR00saUNBQUE7QURDVjtBQ0pJO0VBR00scUNBQUE7QURJVjtBQ1BJO0VBR00sOENBQUE7QURPVjs7QUNWSTtFQUdNLCtDQUFBO0FEV1Y7QUNkSTtFQUdNLGdEQUFBO0FEY1Y7O0FFM0lBO0VBQ0ksY0FBQTtBRjhJSjtBRTVJSTtFQUNJLFdBQUE7QUY4SVI7O0FFMUlBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBRjZJSjtBRTNJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBRjZJUjtBRXpJUTtFQUNJLGtCQUFBO0FGMklaO0FFdklJO0VBQ0ksNkJBQUE7RUFDQSxjQ3BCRDtFRHFCQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkdBQ0k7QUZ3SVo7QUVySVE7RUFDSSxlQUFBO0FGdUlaO0FFcElRO0VBQ0ksYUNsQ0w7QUh3S1A7QUVuSVE7RUFDSSxjQ3ZDSjtFRHdDSSx5QkNwQ0Q7QUh5S1g7QUVuSVk7RUFDSSxhQzNDUjtBSGdMUjtBRWpJUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUZtSVo7QUVqSVk7RUFDSSxhQ2xESjtBSHFMWjtBRTlISTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUZnSVI7QUU3SEk7RUFDSSxXQUFBO0FGK0hSO0FFN0hRO0VBQ0ksbUJBQUE7QUYrSFo7QUUzSEk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUY0SFo7QUV6SFE7RUFDSSxvQ0FBQTtBRjJIWjtBRXhIUTtFQUNJLG9DQUFBO0FGMEhaO0FFdkhRO0VBQ0ksYUMvRUo7QUh3TVI7QUV0SFE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FGd0haO0FFckhRO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FGdUhaO0FFckhZO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBRnVIaEI7QUVsSEk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUZtSFo7QUVoSFE7RUFDSSxhQ2xISjtBSG9PUjtBRS9HUTtFQUVJLG9DQUFBO0VBQ0EsWUFBQTtBRmdIWjtBRTlHWTtFQUNJLGFDcEhSO0FIb09SO0FFNUdRO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtBRjhHWjtBRTVHWTtFQUNJLGFDaklIO0FIK09iO0FFM0dZO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBRjZHaEI7QUV4R0k7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUZ5R1o7QUV0R1E7RUFFSSxvQ0FBQTtBRnVHWjtBRXBHUTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBRnNHWjtBRXBHWTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7QUZzR2hCO0FFbEdRO0VBQ0ksYUN0S0o7QUgwUVI7QUVqR1E7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FGbUdaO0FFL0ZJO0VBQ0ksb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUZnR1o7QUU3RlE7RUFFSSxvQ0FBQTtBRjhGWjtBRTNGUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUY2Rlo7QUUxRlE7RUFDSSxhQ2xNSjtBSDhSUjtBRXhGSTtFQUNJLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUNJO0FGeUZaO0FFdEZRO0VBRUksb0NBQUE7QUZ1Rlo7QUVwRlE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FGc0ZaO0FFbkZRO0VBQ0ksYUNyT0o7QUgwVFI7QUVqRkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FGbUZSO0FFakZRO0VBQ0ksd0JBQUE7QUZtRlo7QUUvRUk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FGaUZSO0FFL0VRO0VBQ0ksd0JBQUE7QUZpRlo7QUU1RVE7RUFDSSxxQkFBQTtBRjhFWjtBRXhFWTtFQUNJLHFCQUFBO0FGMEVoQjtBRXJFSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRnVFUjs7QUVuRUE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkdBQ0k7RUFFSix5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBRm9FSjtBRWxFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBRm9FUjtBRWpFSTtFQUNJLG1CQUFBO0FGbUVSO0FFaEVJO0VBQ0kscURBQUE7RUFDQSxhQ3ZTQTtFRHdTQSxZQUFBO0VBQ0EsV0FBQTtBRmtFUjtBRS9ESTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBRmlFUjtBRS9EUTtFQUNJLFdBQUE7QUZpRVo7QUU3REk7RUFDSSxtQkFBQTtBRitEUjtBRTVESTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FGOERSO0FFNURRO0VBQ0ksbUJBQUE7QUY4RFo7QUUzRFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRjZEWjtBRXpESTtFQUNJLDZCQUFBO0VBQ0EsY0M1VUQ7RUQ2VUMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FGMERaO0FFdkRRO0VBQ0ksZUFBQTtBRnlEWjtBRXREUTtFQUNJLGFDMVZMO0FIa1pQO0FFckRRO0VBQ0ksY0MvVko7RURnV0kseUJDNVZEO0FIbVpYO0FFckRZO0VBQ0ksYUNuV1I7QUgwWlI7QUVuRFE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FGcURaO0FFbkRZO0VBQ0ksYUMxV0o7QUgrWlo7QUVsRFk7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FGb0RoQjtBRS9DSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FDSTtBRmdEWjtBRTdDUTtFQUNJLG9DQUFBO0FGK0NaO0FFNUNRO0VBQ0ksb0NBQUE7QUY4Q1o7QUUzQ1E7RUFDSSxhQy9YSjtBSDRhUjtBRTFDUTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7QUY0Q1o7QUV6Q1E7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0FGMkNaO0FFekNZO0VBQ0ksYUNoWkg7QUgyYmI7QUV4Q1k7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FGMENoQjtBRXJDSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FDSTtBRnNDWjtBRW5DUTtFQUNJLGFDcmFKO0FIMGNSO0FFbENRO0VBRUksb0NBQUE7RUFDQSxZQUFBO0FGbUNaO0FFakNZO0VBQ0ksYUN2YVI7QUgwY1I7QUUvQlE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0FGaUNaO0FFL0JZO0VBQ0ksYUNwYkg7QUhxZGI7QUU5Qlk7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FGZ0NoQjtBRTNCSTtFQUNJLHdDQUFBO0VBQ0EseUJBQUE7QUY2QlI7QUUzQlE7RUFDSSxhQ3RjSjtBSG1lUjtBRTFCUTtFQUVJLG9DQUFBO0FGMkJaO0FFeEJRO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBRjBCWjtBRXhCWTtFQUNJLGFDaGRIO0FIMGViO0FFcEJRO0VBQ0kscUJBQUE7QUZzQlo7QUVoQlk7RUFDSSxxQkFBQTtBRmtCaEI7QUViSTtFQUNJLHNCQUFBO0VBQ0EsNkJBQUE7QUZlUjtBRVpJO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBRmNSO0FFWlE7RUFDSSx3QkFBQTtBRmNaO0FFVkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FGWVI7QUVWUTtFQUNJLHdCQUFBO0FGWVo7QUVSSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FGVVI7O0FJaGlCQTtFQUNJLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUptaUJKO0FJamlCSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUptaUJSO0FJamlCUTtFQUNJLHNCQUFBO0VBQ0EsT0FBQTtBSm1pQlo7QUloaUJRO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0FKa2lCWjtBSS9oQlE7RUFDSSx5QkRJSztFQ0hMLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDREQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUppaUJaO0FJOWhCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDZHQUNJO0FKK2hCaEI7QUk1aEJZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FKOGhCaEI7QUkzaEJZO0VBQ0ksWUFBQTtBSjZoQmhCO0FJMWhCWTtFQTFCSjtJQTJCUSxlQUFBO0VKNmhCZDtBQUNGOztBSXhoQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUoyaEJKO0FJemhCSTtFQUVJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLCtEQUFBO0VBQ0EsK0JBQUE7QUowaEJSO0FJdmhCSTtFQUNJLG1CQUFBO0FKeWhCUjtBSXRoQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBSndoQlI7QUl0aEJRO0VBQ0kseUJBQUE7QUp3aEJaOztBSW5oQkE7RUFDSTtJQUNJLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VKc2hCTjtFSXBoQkU7SUFDSSxVQUFBO0lBQ0EscUJBQUE7RUpzaEJOO0VJcGhCRTtJQUNJLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VKc2hCTjtBQUNGO0FJbmhCQTtFQUNJO0lBQ0ksc0NBQUE7RUpxaEJOO0VJbmhCRTtJQUNJLHNDQUFBO0VKcWhCTjtFSW5oQkU7SUFDSSxvQ0FBQTtFSnFoQk47QUFDRjtBQS9vQkE7RUFDSSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaXBCSjtBQTlvQkE7RUFDSSxzQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZ3BCSjtBQTdvQkE7RUFDSSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBK29CSjtBQTVvQkE7RUFDSSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBOG9CSjtBQTNvQkE7RUFDSSxzQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNm9CSjtBQTFvQkE7RUFDSSxvQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNG9CSjtBQXpvQkE7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBMm9CSjtBQXhvQkE7RUFDSSxvQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBMG9CSjtBQXZvQkE7RUFDSSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUF5b0JKO0FBdm9CSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJHakRBO0FIMHJCUjtBQXRvQkk7RUFDSSwrQkFBQTtFQUNBLFlBQUE7QUF3b0JSO0FBcm9CSTtFQUNJLG1CQUFBO0VBQ0EsbUJHaEVJO0VIaUVKLHlFQUFBO0VBQUEsaUVBQUE7QUF1b0JSOztBQW5vQkE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFzb0JKOztBQW5vQkE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUFzb0JKOztBQW5vQkE7RUFDSSxZQUFBO0FBc29CSjs7QUFub0JBO0VBQ0ksd0JBQUE7QUFzb0JKOztBQW5vQkE7RUFDSSx3RkFBQTtBQXNvQko7O0FBbm9CQTtFQUNJLGVBQUE7RUFDQSxtREFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBc29CSjs7QUFub0JBO0VBQ0ksNkNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXNvQko7QUFwb0JJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFzb0JSO0FBcG9CUTtFQUNJLHFCQUFBO0FBc29CWjtBQW5vQlE7RUFDSSxxQkFBQTtBQXFvQlo7QUFsb0JROztFQUVJLHdCQUFBO0FBb29CWjtBQWpvQlE7RUFDSSw0QkFBQTtBQW1vQlo7QUFob0JRO0VBQ0ksMkJBQUE7QUFrb0JaOztBQTduQkE7RUFDSSxXQUFBO0FBZ29CSjs7QUE3bkJBO0VBQ0ksVUFBQTtBQWdvQko7O0FBN25CQTtFQUNJLFVBQUE7QUFnb0JKOztBQTduQkE7RUFDSSxVQUFBO0FBZ29CSjs7QUE3bkJBO0VBQ0ksVUFBQTtBQWdvQko7O0FBN25CQTtFQUNJLFVBQUE7QUFnb0JKOztBQTduQkE7RUFDSSxxQkFBQTtBQWdvQko7O0FBN25CQTtFQUNJLFVBQUE7QUFnb0JKOztBQTduQkE7RUFDSSxhQUFBO0FBZ29CSjs7QUE3bkJBO0VBQ0ksdUJBQUE7QUFnb0JKOztBQTduQkE7RUFDSSx1QkFBQTtBQWdvQko7O0FBN25CQTtFQUNJLHlCQUFBO0FBZ29CSjs7QUE3bkJBO0VBQ0ksVUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWdvQko7O0FBN25CQSxpQkFBQTtBQUNBO0VBQ0ksdUJBQUE7QUFnb0JKOztBQTduQkE7RUFDSSxrQkFBQTtBQWdvQko7O0FBN25CQTtFQUNJLFlBQUE7QUFnb0JKOztBQTduQkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBZ29CSjs7QUE3bkJBLGdCQUFBO0FBQ0E7RUFDSTtJQUNJLFdBQUE7RUFnb0JOO0FBQ0Y7QUE3bkJBLGVBQUE7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQStuQk47RUE3bkJFO0lBQ0ksV0FBQTtFQStuQk47QUFDRjtBQTVuQkEscUJBQUE7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQThuQk47RUE1bkJFO0lBQ0ksV0FBQTtFQThuQk47QUFDRjtBQTNuQkEsWUFBQTtBQUNBO0VBQ0ksVUFBQTtBQTZuQko7O0FBM25CQTtFQUNJLGdCQUFBO0FBOG5CSjs7QUE1bkJBO0VBQ0ksZUFBQTtBQStuQko7O0FBN25CQTtFQUNJLGdCQUFBO0FBZ29CSjs7QUE5bkJBO0VBQ0ksYUFBQTtBQWlvQko7O0FBL25CQTtFQUNJLGdCQUFBO0FBa29CSjs7QUFob0JBO0VBQ0ksZUFBQTtBQW1vQko7O0FBaG9CQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQW1vQko7O0FBam9CQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUFvb0JKOztBQWxvQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBcW9CSjs7QUFub0JBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQXNvQko7O0FBcG9CQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUF1b0JKOztBQXJvQkE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBd29CSjs7QUF0b0JBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQXlvQko7O0FBdG9CQTtFQUNJLHFCQUFBO0FBeW9CSjs7QUF0b0JBO0VBQ0ksbUJBQUE7QUF5b0JKOztBQXRvQkE7RUFDSSxxQkFBQTtBQXlvQko7O0FBdG9CQTtFQUNJLG9CQUFBO0FBeW9CSjs7QUF0b0JBO0VBQ0ksa0JBQUE7QUF5b0JKOztBQXRvQkE7RUFDSSxvQkFBQTtBQXlvQko7O0FBdG9CQSxZQUFBO0FBQ0E7RUFDSSxTQUFBO0FBeW9CSjs7QUF2b0JBO0VBQ0ksZUFBQTtBQTBvQko7O0FBeG9CQTtFQUNJLGNBQUE7QUEyb0JKOztBQXpvQkE7RUFDSSxlQUFBO0FBNG9CSjs7QUExb0JBO0VBQ0ksWUFBQTtBQTZvQko7O0FBM29CQTtFQUNJLGVBQUE7QUE4b0JKOztBQTVvQkE7RUFDSSxjQUFBO0FBK29CSjs7QUE1b0JBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUErb0JKOztBQTdvQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBZ3BCSjs7QUE5b0JBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQWlwQko7O0FBL29CQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFrcEJKOztBQWhwQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBbXBCSjs7QUFqcEJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQW9wQko7O0FBbHBCQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFxcEJKOztBQWxwQkEsK0JBQUE7QUFDQTtFQUNJLGdCQUFBO0FBcXBCSjs7QUFucEJBO0VBQ0ksYUFBQTtBQXNwQko7O0FBcHBCQTtFQUNJLGdCQUFBO0FBdXBCSjs7QUFycEJBO0VBQ0ksZUFBQTtBQXdwQko7O0FBdHBCQTtFQUNJLGdCQUFBO0FBeXBCSjs7QUF2cEJBO0VBQ0ksYUFBQTtBQTBwQko7O0FBeHBCQTtFQUNJLGVBQUE7QUEycEJKOztBQXpwQkE7RUFDSSxhQUFBO0FBNHBCSjs7QUF6cEJBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQTRwQko7O0FBMXBCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUE2cEJKOztBQTNwQkE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FBOHBCSjs7QUE1cEJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQStwQko7O0FBN3BCQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7QUFncUJKOztBQTlwQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBaXFCSjs7QUEvcEJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQWtxQko7O0FBaHFCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFtcUJKOztBQWhxQkEsOEJBQUE7QUFDQTtFQUNJLGVBQUE7QUFtcUJKOztBQWpxQkE7RUFDSSxZQUFBO0FBb3FCSjs7QUFscUJBO0VBQ0ksZUFBQTtBQXFxQko7O0FBbnFCQTtFQUNJLGNBQUE7QUFzcUJKOztBQXBxQkE7RUFDSSxlQUFBO0FBdXFCSjs7QUFycUJBO0VBQ0ksWUFBQTtBQXdxQko7O0FBdHFCQTtFQUNJLGNBQUE7QUF5cUJKOztBQXZxQkE7RUFDSSxZQUFBO0FBMHFCSjs7QUF2cUJBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQTBxQko7O0FBeHFCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUEycUJKOztBQXpxQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBNHFCSjs7QUExcUJBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQTZxQko7O0FBM3FCQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUE4cUJKOztBQTVxQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBK3FCSjs7QUE3cUJBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQWdyQko7O0FBOXFCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFpckJKOztBQTlxQkEsbUNBQUE7QUFDQTtFQUNJLG9CQUFBO0FBaXJCSjs7QUEvcUJBO0VBQ0ksbUJBQUE7QUFrckJKOztBQWhyQkE7RUFDSSxvQkFBQTtBQW1yQko7O0FBanJCQTtFQUNJLGlCQUFBO0FBb3JCSjs7QUFsckJBO0VBQ0ksb0JBQUE7QUFxckJKOztBQW5yQkE7RUFDSSxtQkFBQTtBQXNyQko7O0FBcHJCQTtFQUNJLG9CQUFBO0FBdXJCSjs7QUFyckJBO0VBQ0ksaUJBQUE7QUF3ckJKOztBQXRyQkE7RUFDSSxvQkFBQTtBQXlyQko7O0FBdnJCQTtFQUNJLG1CQUFBO0FBMHJCSjs7QUF4ckJBO0VBQ0ksb0JBQUE7QUEyckJKOztBQXpyQkE7RUFDSSxpQkFBQTtBQTRyQko7O0FBMXJCQTtFQUNJLG1CQUFBO0FBNnJCSjs7QUEzckJBO0VBQ0ksaUJBQUE7QUE4ckJKOztBQTNyQkE7RUFDSSx1QkFBQTtBQThyQko7O0FBNXJCQTtFQUNJLHNCQUFBO0FBK3JCSjs7QUE3ckJBO0VBQ0ksdUJBQUE7QUFnc0JKOztBQTlyQkE7RUFDSSxvQkFBQTtBQWlzQko7O0FBL3JCQTtFQUNJLHVCQUFBO0FBa3NCSjs7QUFoc0JBO0VBQ0ksc0JBQUE7QUFtc0JKOztBQWpzQkE7RUFDSSx1QkFBQTtBQW9zQko7O0FBbHNCQTtFQUNJLG9CQUFBO0FBcXNCSjs7QUFuc0JBO0VBQ0ksdUJBQUE7QUFzc0JKOztBQXBzQkE7RUFDSSxzQkFBQTtBQXVzQko7O0FBcnNCQTtFQUNJLHVCQUFBO0FBd3NCSjs7QUF0c0JBO0VBQ0ksb0JBQUE7QUF5c0JKOztBQXZzQkE7RUFDSSxzQkFBQTtBQTBzQko7O0FBeHNCQTtFQUNJLG9CQUFBO0FBMnNCSjs7QUF4c0JBLGtDQUFBO0FBQ0E7RUFDSSxtQkFBQTtBQTJzQko7O0FBenNCQTtFQUNJLGtCQUFBO0FBNHNCSjs7QUExc0JBO0VBQ0ksbUJBQUE7QUE2c0JKOztBQTNzQkE7RUFDSSxnQkFBQTtBQThzQko7O0FBNXNCQTtFQUNJLG1CQUFBO0FBK3NCSjs7QUE3c0JBO0VBQ0ksa0JBQUE7QUFndEJKOztBQTlzQkE7RUFDSSxtQkFBQTtBQWl0Qko7O0FBL3NCQTtFQUNJLGdCQUFBO0FBa3RCSjs7QUFodEJBO0VBQ0ksbUJBQUE7QUFtdEJKOztBQWp0QkE7RUFDSSxrQkFBQTtBQW90Qko7O0FBbHRCQTtFQUNJLG1CQUFBO0FBcXRCSjs7QUFudEJBO0VBQ0ksZ0JBQUE7QUFzdEJKOztBQXB0QkE7RUFDSSxrQkFBQTtBQXV0Qko7O0FBcnRCQTtFQUNJLGdCQUFBO0FBd3RCSjs7QUFydEJBO0VBQ0ksc0JBQUE7QUF3dEJKOztBQXR0QkE7RUFDSSxxQkFBQTtBQXl0Qko7O0FBdnRCQTtFQUNJLHNCQUFBO0FBMHRCSjs7QUF4dEJBO0VBQ0ksbUJBQUE7QUEydEJKOztBQXp0QkE7RUFDSSxzQkFBQTtBQTR0Qko7O0FBMXRCQTtFQUNJLHFCQUFBO0FBNnRCSjs7QUEzdEJBO0VBQ0ksc0JBQUE7QUE4dEJKOztBQTV0QkE7RUFDSSxtQkFBQTtBQSt0Qko7O0FBN3RCQTtFQUNJLHNCQUFBO0FBZ3VCSjs7QUE5dEJBO0VBQ0kscUJBQUE7QUFpdUJKOztBQS90QkE7RUFDSSxzQkFBQTtBQWt1Qko7O0FBaHVCQTtFQUNJLG1CQUFBO0FBbXVCSjs7QUFqdUJBO0VBQ0kscUJBQUE7QUFvdUJKOztBQWx1QkE7RUFDSSxtQkFBQTtBQXF1Qko7O0FBbHVCQSw0Q0FBQTtBQUNBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBQXF1Qko7O0FBbnVCQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFzdUJKOztBQXB1QkE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0FBdXVCSjs7QUFydUJBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQXd1Qko7O0FBdHVCQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUF5dUJKOztBQXZ1QkE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBMHVCSjs7QUF4dUJBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBQTJ1Qko7O0FBenVCQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUE0dUJKOztBQTF1QkE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0FBNnVCSjs7QUEzdUJBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQTh1Qko7O0FBNXVCQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUErdUJKOztBQTd1QkE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBZ3ZCSjs7QUE5dUJBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQWl2Qko7O0FBL3VCQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFrdkJKOztBQS91QkEsMkNBQUE7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUFrdkJKOztBQWh2QkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBbXZCSjs7QUFqdkJBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQW92Qko7O0FBbHZCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFxdkJKOztBQW52QkE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBc3ZCSjs7QUFwdkJBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQXV2Qko7O0FBcnZCQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUF3dkJKOztBQXR2QkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBeXZCSjs7QUF2dkJBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQTB2Qko7O0FBeHZCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUEydkJKOztBQXp2QkE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0FBNHZCSjs7QUExdkJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQTZ2Qko7O0FBM3ZCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUE4dkJKOztBQTV2QkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBK3ZCSjs7QUE1dkJBO0VBQ0ksa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQSt2Qko7O0FBNXZCQTtFQUNJLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBK3ZCSjs7QUE1dkJBO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtBQSt2Qko7O0FBNXZCQTtFQUNJLDBCQUFBO0FBK3ZCSjs7QUE1dkJBOzs7O0VBSUksZ0NBQUE7QUErdkJKOztBQTV2QkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBK3ZCSjs7QUE1dkJBO0VBQ0ksZ0JBQUE7QUErdkJKOztBQTV2QkE7RUFDSSxtQkFBQTtBQSt2Qko7O0FBNXZCQTtFQUNJLGVBQUE7QUErdkJKOztBQTV2QkE7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNERBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUErdkJKOztBQTV2QkE7RUFDSSx5QkFBQTtFQUNBLDREQUFBO0FBK3ZCSjs7QUE1dkJBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FBK3ZCSjs7QUE1dkJBO0VBQ0ksY0FBQTtBQSt2Qko7O0FBNXZCQSx5QkFBQTtBQUNBO0VBQ0kscUJBQUE7QUErdkJKOztBQTd2QkE7RUFDSSxvQkFBQTtBQWd3Qko7O0FBOXZCQTtFQUNJLHFCQUFBO0FBaXdCSjs7QUEvdkJBO0VBQ0ksa0JBQUE7QUFrd0JKOztBQWh3QkE7RUFDSSxxQkFBQTtBQW13Qko7O0FBandCQTtFQUNJLG9CQUFBO0FBb3dCSjs7QUFsd0JBO0VBQ0kscUJBQUE7QUFxd0JKOztBQW53QkE7RUFDSSxrQkFBQTtBQXN3Qko7O0FBcHdCQTtFQUNJLHFCQUFBO0FBdXdCSjs7QUFyd0JBO0VBQ0ksb0JBQUE7QUF3d0JKOztBQXR3QkE7RUFDSSxxQkFBQTtBQXl3Qko7O0FBdndCQTtFQUNJLGtCQUFBO0FBMHdCSjs7QUF4d0JBO0VBQ0ksb0JBQUE7QUEyd0JKOztBQXp3QkE7RUFDSSxrQkFBQTtBQTR3Qko7O0FBendCQSx3QkFBQTtBQUNBO0VBQ0ksb0JBQUE7QUE0d0JKOztBQTF3QkE7RUFDSSxtQkFBQTtBQTZ3Qko7O0FBM3dCQTtFQUNJLG9CQUFBO0FBOHdCSjs7QUE1d0JBO0VBQ0ksaUJBQUE7QUErd0JKOztBQTd3QkE7RUFDSSxvQkFBQTtBQWd4Qko7O0FBOXdCQTtFQUNJLG1CQUFBO0FBaXhCSjs7QUEvd0JBO0VBQ0ksb0JBQUE7QUFreEJKOztBQWh4QkE7RUFDSSxpQkFBQTtBQW14Qko7O0FBanhCQTtFQUNJLG9CQUFBO0FBb3hCSjs7QUFseEJBO0VBQ0ksbUJBQUE7QUFxeEJKOztBQW54QkE7RUFDSSxvQkFBQTtBQXN4Qko7O0FBcHhCQTtFQUNJLGlCQUFBO0FBdXhCSjs7QUFyeEJBO0VBQ0ksbUJBQUE7QUF3eEJKOztBQXR4QkE7RUFDSSxpQkFBQTtBQXl4Qko7O0FBdHhCQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBeXhCSjs7QUF0eEJBO0VBQ0ksZUFBQTtBQXl4Qko7O0FBdHhCQTtFQUNJLGtCQUFBO0FBeXhCSjs7QUF0eEJBO0VBQ0ksbUJBQUE7QUF5eEJKOztBQXR4QkE7RUFDSSxnQkFBQTtBQXl4Qko7O0FBcHhCQTtFQUNJLHNCQUFBO0FBdXhCSjs7QUFweEJBO0VBQ0ksV0FBQTtBQXV4Qko7O0FBcHhCQTtFQUNJLFdBQUE7QUF1eEJKOztBQXB4QkE7RUFDSSxXQUFBO0FBdXhCSjs7QUFweEJBO0VBQ0ksNENBQUE7QUF1eEJKOztBQXB4QkE7RUFDSSxnQ0FBQTtBQXV4Qko7O0FBcHhCQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF1eEJKOztBQXB4QkE7RUFDSSxtREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBdXhCSjs7QUFweEJBO0VBQ0ksWUFBQTtBQXV4Qko7O0FBcHhCQTtFQUNJLFlBQUE7QUF1eEJKOztBQXB4QkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBdXhCSjs7QUFweEJBLHlEQUFBO0FBQ0E7RUFDSTtJQUNJLGVBQUE7RUF1eEJOO0VBcHhCRTtJQUNJLHNCQUFBO0lBQ0EsWUFBQTtFQXN4Qk47RUFueEJFO0lBQ0kscUJBQUE7RUFxeEJOO0VBbHhCRTtJQUNJLFdBQUE7RUFveEJOO0VBanhCRTtJQUNJLFVBQUE7RUFteEJOO0FBQ0Y7QUFoeEJBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWt4Qko7QUFoeEJJO0VBQ0ksYUFBQTtBQWt4QlI7QUFoeEJRO0VBQ0ksZUFBQTtBQWt4Qlo7QUE5d0JJO0VBQ0ksY0cvaENJO0FIK3lEWjtBQTl3QlE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFneEJaO0FBNXdCSTtFQUNJLG1CQUFBO0VBQ0EseUJHdmlDRztFSHdpQ0gsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQTh3QlI7QUEzd0JJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBNndCUjtBQTN3QlE7RUFDSSx5QkFBQTtBQTZ3Qlo7QUEzd0JZO0VBQ0kseUJHN2tDRDtBSDAxRGY7QUExd0JZO0VBQ0ksYUdubENOO0FIKzFEVjtBQXh3QlE7RUFDSSx5QkFBQTtBQTB3Qlo7QUF4d0JZO0VBQ0kseUJHcmxDSDtBSCsxRGI7QUF2d0JZO0VBQ0ksYUczbENSO0FIbzJEUjs7QUFud0JBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBc3dCSjtBQXB3Qkk7RUFDSSxrQkFBQTtBQXN3QlI7QUFud0JJO0VBQ0ksa0JBQUE7QUFxd0JSOztBQWp3QkE7RUFDSSxtQkFBQTtFQUNBLHdGQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQW93Qko7O0FBandCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQW93Qko7QUFud0JJO0VBQ0ksa0JBQUE7QUFxd0JSO0FBbHdCSTtFQUNJLGtCQUFBO0FBb3dCUjs7QUFod0JBO0VBQ0ksK0NBQUE7QUFtd0JKOztBQTd2Qkk7OztFQUNJLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxjR3BwQ0E7RUhxcENBLDRCQUFBO0FBa3dCUjs7QUE3dkJJO0VBQ0ksb0NBQUE7QUFnd0JSOztBQTV2QkE7RUFDSSx1QkFBQTtBQSt2Qko7QUE3dkJJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBK3ZCUjs7QUF6dkJJOztFQUNJLGNHOXFDQTtFSCtxQ0Esb0NBQUE7RUFDQSw4QkFBQTtBQTZ2QlI7O0FBeHZCSTtFQUNJLG9DQUFBO0FBMnZCUjs7QUF0dkJJO0VBQ0ksb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBeXZCUjtBQXZ2QlE7RUFDSSx5Q0FBQTtFQUNBLHlCQUFBO0FBeXZCWjtBQXR2QlE7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUF3dkJaOztBQW52QkE7RUFDSSw4QkFBQTtFQUNBLGNHL3NDSTtBSHE4RFI7QUFudkJRO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtBQXF2Qlo7QUFudkJZO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtBQXF2QmhCO0FBanZCUTtFQUNJLHlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQW12Qlo7QUEvdUJZO0VBQ0ksYUdwdUNSO0FIcTlEUjs7QUEzdUJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCR3R1Q0k7RUh1dUNKLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE4dUJKO0FBNXVCSTtFQWZKO0lBZ0JRLG1CR252Q0E7SUhvdkNBLFdBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUErdUJOO0FBQ0Y7QUE3dUJJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUErdUJSO0FBNXVCSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0FBOHVCUjtBQTN1Qkk7RUFDSSxjR2h4Q0Q7RUhpeENDLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUE2dUJSO0FBMXVCSTtFQUNJLGNHM3hDQTtFSDR4Q0EsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBNHVCUjtBQXp1Qkk7RUFDSSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjRzl5Q0Q7QUh5aEVQO0FBeHVCSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBMHVCUjtBQXh1QlE7RUFDSSxZQUFBO0FBMHVCWjtBQXR1Qkk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF3dUJSO0FBdHVCUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBd3VCWjtBQXJ1QlE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdXVCWjs7QUFsdUJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCR24xQ0k7RUhvMUNKLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFxdUJKO0FBbnVCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBcXVCUjs7QUFqdUJBO0VBQ0ksbUJBQUE7RUFDQSx5Qkd4MkNJO0VIeTJDSixxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtBQW91Qko7QUFsdUJJO0VBQ0ksc0JBQUE7QUFvdUJSO0FBanVCSTtFQUNJLGVBQUE7RUFDQSxjRzczQ0Q7QUhnbUVQO0FBL3RCUTtFQUVJLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWd1Qlo7QUE1dEJJO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUE4dEJSO0FBNXRCUTtFQUNJLGlCQUFBO0FBOHRCWjtBQTF0Qkk7RUFDSSx5QkdqNUNTO0VIazVDVCxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNHeDVDSTtFSHk1Q0osZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTR0QlI7QUF6dEJJO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjR3g2Q0E7RUh5NkNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUEydEJSO0FBeHRCSTtFQUNJLFNBQUE7RUFDQSxjRzc2Q0k7RUg4NkNKLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7QUEwdEJSO0FBdnRCSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjR2g4Q0E7RUhpOENBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBeXRCUjtBQXZ0QlE7RUFDSSxzQkFBQTtBQXl0Qlo7QUF0dEJRO0VBQ0ksY0c5OENBO0FIc3FFWjtBQXJ0QlE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtBQXV0Qlo7QUFwdEJRO0VBQ0kscUJHOStDRztFSCsrQ0gsYUFBQTtBQXN0Qlo7QUFwdEJZO0VBQ0ksZUFBQTtFQUNBLFFBQUE7QUFzdEJoQjtBQWp0Qkk7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjR3grQ0Q7QUgyckVQO0FBaHRCSTtFQUNJLFFBQUE7QUFrdEJSO0FBL3NCSTtFQUNJLFdBQUE7QUFpdEJSO0FBL3NCUTtFQUNJLFdBQUE7QUFpdEJaO0FBN3NCSTtFQUNJLHFCR3JnREE7QUhvdEVSO0FBN3NCUTtFQUNJLGNHeGdESjtBSHV0RVI7QUE1c0JRO0VBQ0ksY0c1Z0RKO0FIMHRFUjtBQTNzQlE7RUFDSSxjR2hoREo7QUg2dEVSOztBQXhzQkE7RUFDSSxhQUFBO0VBQ0EsUUFBQTtFQUNBLDREQUFBO0VBQ0EsV0FBQTtBQTJzQko7O0FBeHNCQTtFQUNJLG1CQUFBO0VBQ0EseUJHN2dEYTtFSDhnRGIsbUJBQUE7RUFDQSxjR3BoREk7RUhxaERKLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0FBMnNCSjtBQXpzQkk7RUFDSSx5QkcvaERHO0FIMHVFWDtBQXhzQkk7O0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBMHNCUjtBQXZzQkk7RUFHSSxnQkFBQTtFQUNBLHlCRzlpREs7RUgraURMLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUF5c0JSO0FBdHNCWTtFQUNJLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0FBd3NCaEI7QUFyc0JZO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCR3hrRFI7RUh5a0RRLGtCQUFBO0VBQ0Esa0JBQUE7QUF1c0JoQjtBQWxzQkk7RUFDSSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlRzlrREE7RUgra0RBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7RUFDQSx3REFBQTtBQW9zQlI7QUFqc0JJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQW1zQlI7QUFqc0JRO0VBQ0ksNkJBQUE7QUFtc0JaO0FBaHNCUTtFQUNJLFdBQUE7QUFrc0JaO0FBOXJCSTtFQUNJLFNBQUE7QUFnc0JSOztBQTNyQkk7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQThyQlI7O0FBMXJCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBNnJCSjtBQTNyQkk7RUFDSSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBNnJCUjtBQTFyQkk7O0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBNHJCUjtBQXpyQkk7RUFHSSxnQkFBQTtFQUNBLHlCR2pwREE7RUhrcERBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlFQUFBO0FBMnJCUjtBQXpyQlE7RUFDSSx5QkdocURKO0FIMjFFUjtBQXpyQlk7RUFDSSwrQ0FBQTtFQUNBLG9EQUFBO0FBMnJCaEI7QUF0ckJJO0VBQ0ksb0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUd4cURBO0VIeXFEQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0RBQUE7QUF3ckJSO0FBcnJCSTtFQUNJLGNHdnJEQTtFSHdyREEsMEJBQUE7QUF1ckJSO0FBcnJCUTtFQUdJLGNHN3JESjtFSDhyREkscUJBQUE7QUFxckJaO0FBbHJCUTtFQUdJLGNHenRERztFSDB0REgsMEJBQUE7QUFrckJaOztBQTdxQkE7RUFDSSxtQkFBQTtFQUNBLGNHM3NERztFSDRzREgsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFnckJKO0FBOXFCSTs7Ozs7OztFQU9JLFNBQUE7QUFnckJSO0FBN3FCSTtFQUNJLGNHN3VESTtBSDQ1RVo7QUE1cUJJO0VBQ0ksY0dydkRNO0FIbTZFZDtBQTNxQkk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUE2cUJSO0FBMXFCSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQTRxQlI7O0FBeHFCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSx5Qkd2dkRPO0VId3ZEUCxxQkFBQTtFQUNBLGNHN3ZESTtFSDh2REoseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUEycUJKO0FBenFCSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMnFCUjtBQXhxQkk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNHbHhERDtFSG14REMseUJHL3dEUztBSHk3RWpCO0FBdnFCSTtFQUNJLGNHNXhERDtFSDZ4REMseUJHM3hESTtBSG84RVo7QUF0cUJJO0VBQ0ksY0d6eURBO0VIMHlEQSx5Qkd4eURLO0FIZzlFYjtBQXJxQkk7RUFDSSxjR2x6REU7RUhtekRGLHlCR2p6RE87QUh3OUVmOztBQW5xQkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRzl5REk7QUhvOUVSO0FBcHFCSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFEQUFBO0VBQ0EsaUJBQUE7QUFzcUJSO0FBcHFCUTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBc3FCWjs7QUFqcUJBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1FQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW9xQko7QUFscUJJO0VBQ0ksMEJBQUE7RUFDQSxnREFBQTtBQW9xQlI7QUFqcUJJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFtcUJSO0FBaHFCSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUFrcUJSO0FBL3BCSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFpcUJSO0FBOXBCSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBZ3FCUjtBQTdwQkk7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQStwQlI7O0FBM3BCQTtFQUNJLGVBQUE7QUE4cEJKO0FBNXBCSTtFQUNJLGFBQUE7QUE4cEJSOztBQTFwQkE7RUFDSSx3QkFBQTtBQTZwQko7O0FBMXBCQSwyQ0FBQTtBQUlBLDRDQUFBO0FBQ0E7RUFDSTtJQUNJLGFBQUE7RUEwcEJOO0VBeHBCTTtJQUNJLGVBQUE7RUEwcEJWO0FBQ0Y7QUF0cEJBLHlDQUFBO0FBSUEsZ0RBQUE7QUF1cEJBLGczN0hBQWczN0giLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9zdHlsZS9lbGV2YXRpb24nO1xuQHVzZSAnLi4vc3R5bGUvc2Fzcy11dGlscyc7XG5AdXNlICcuLi90aGVtaW5nL2NvbmZpZy12YWxpZGF0aW9uJztcbkB1c2UgJy4uL3RoZW1pbmcvZGVmaW5pdGlvbic7XG5AdXNlICcuL20zL2RlZmluaXRpb25zJztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnLi9tMy10b2tlbnMnO1xuXG4vLy8gRW1pdHMgbmVjZXNzYXJ5IENTUyB2YXJpYWJsZXMgZm9yIE1hdGVyaWFsJ3Mgc3lzdGVtIGxldmVsIHZhbHVlcyBmb3IgdGhlIHZhbHVlcyBkZWZpbmVkIGluIHRoZVxuLy8vIGNvbmZpZyBtYXAuIFRoZSBjb25maWcgbWFwIGNhbiBoYXZlIHZhbHVlcyBjb2xvciwgdHlwb2dyYXBoeSwgYW5kL29yIGRlbnNpdHkuXG4vLy9cbi8vLyBJZiB0aGUgY29uZmlnIG1hcCdzIGNvbG9yIHZhbHVlIGlzIGFuIEFuZ3VsYXIgTWF0ZXJpYWwgY29sb3IgcGFsZXR0ZSwgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZVxuLy8vIHByaW1hcnkgYW5kIHRlcnRpYXJ5IGNvbG9ycyB3aXRoIGEgYGNvbG9yLXNjaGVtZWAgdGhlbWUgdHlwZS4gT3RoZXJ3aXNlIGlmIHRoZSBjb2xvciB2YWx1ZSBpcyBhXG4vLy8gbWFwLCBpdCBtdXN0IGhhdmUgYSBgcHJpbWFyeWAgdmFsdWUgY29udGFpbmluZyBhbiBBbmd1bGFyIE1hdGVyaWFsIGNvbG9yIHBhbGV0dGUsIGFuZFxuLy8vIG9wdGlvbmFsbHkgYSBkaWZmZXJlbnQgYHRlcnRpYXJ5YCBwYWxldHRlIChkZWZhdWx0cyB0byBwcmltYXJ5IHBhbGV0dGUpIGFuZCBgdGhlbWUtdHlwZWAgdGhhdFxuLy8vIGlzIGVpdGhlciBgbGlnaHRgLCBgZGFya2AsIG9yICdjb2xvci1zY2hlbWVgIChkZWZhdWx0cyB0byBgY29sb3Itc2NoZW1lYCkuIENvbG9yIHZhcmlhYmxlXG4vLy8gZGVmaW5pdGlvbnMgd2lsbCBub3QgYmUgZW1pdHRlZCBpZiB0aGVyZSBhcmUgbm8gY29sb3IgdmFsdWVzIGluIHRoZSBjb25maWcuXG4vLy9cbi8vLyBJZiB0aGUgY29uZmlnIG1hcCdzIHR5cG9ncmFwaHkgdmFsdWUgaXMgYSBmb250IGZhbWlseSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGVcbi8vLyBwbGFpbiBhbmQgYnJhbmQgZm9udCBmYW1pbHkgd2l0aCBkZWZhdWx0IGJvbGQsIG1lZGl1bSwgYW5kIHJlZ3VsYXIgd2VpZ2h0cyBvZiA3MDAsIDUwMCwgYW5kIDQwMCxcbi8vLyByZXNwZWN0ZnVsbHkuIE90aGVyd2lzZSBpZiB0aGUgdHlwb2dyYXBoeSB2YWx1ZSBpcyBhIG1hcCwgaXQgbXVzdCBoYXZlIGEgYHBsYWluLWZhbWlseWAgZm9udFxuLy8vIGZhbWlseSB2YWx1ZSwgYW5kIG9wdGlvbmFsbHkgYSBkaWZmZXJlbnQgYGJyYW5kLWZhbWlseWAgZm9udCBmYW1pbHkgKGRlZmF1bHRzIHRvIHRoZSBwbGFpblxuLy8vIHZhbHVlKSBhbmQgd2VpZ2h0cyBmb3IgYGJvbGQtd2VpZ2h0YCAoZGVmYXVsdDogNzAwKSwgYGJvbGQtd2VpZ2h0YCAoZGVmYXVsdDogNTAwKSwgYW5kXG4vLy8gYGJvbGQtd2VpZ2h0YCAoZGVmYXVsdDogNDAwKS4gVHlwb2dyYXBoeSB2YXJpYWJsZSBkZWZpbml0aW9ucyB3aWxsIG5vdCBiZSBlbWl0dGVkIGlmIHRoZXJlIGFyZVxuLy8vIG5vIHR5cG9ncmFwaHkgdmFsdWVzIGluIHRoZSBjb25maWcuXG4vLy9cbi8vLyBJZiB0aGUgY29uZmlnIG1hcCdzIGRlbnNpdHkgdmFsdWUgaXMgYSBudW1iZXIsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVuc2l0eSBzY2FsZS4gT3RoZXJ3aXNlXG4vLy8gaWYgdGhlIGRlbnNpdHkgdmFsdWUgaXMgYSBtYXAsIGl0IG11c3QgaGF2ZSBhIGBzY2FsZWAgdmFsdWUuIERlbnNpdHkgdmFyaWFibGUgZGVmaW5pdGlvbnMgd2lsbFxuLy8vIG5vdCBiZSBlbWl0dGVkIGlmIHRoZXJlIGFyZSBubyBkZW5zaXR5IHZhbHVlcyBpbiB0aGUgY29uZmlnLlxuLy8vXG4vLy8gVGhlIGFwcGxpY2F0aW9uIHZhcmlhYmxlcyBlbWl0dGVkIHVzZSB0aGUgbmFtZXNwYWNlIHByZWZpeCBcIi0tbWF0LXN5c1wiLlxuLy8vIGUuZy4gLS1tYXQtc3lzLXN1cmZhY2U6ICNFNUU1RTVcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkY29uZmlnIFRoZSBjb2xvciBjb25maWd1cmF0aW9uIHdpdGggb3B0aW9uYWwga2V5cyBjb2xvciwgdHlwb2dyYXBoeSwgb3IgZGVuc2l0eS5cbkBtaXhpbiB0aGVtZSgkY29uZmlnLCAkb3ZlcnJpZGVzOiAoKSkge1xuICAkY29sb3I6IG1hcC5nZXQoJGNvbmZpZywgY29sb3IpO1xuICAkY29sb3ItY29uZmlnOiBudWxsO1xuICBAaWYgKCRjb2xvcikge1xuICAgIC8vIHZhbGlkYXRlLXBhbGV0dGUgcmV0dXJucyBudWxsIGlmIGl0IGlzIGEgdmFsaWQgTTMgcGFsZXR0ZVxuICAgICRpcy1wYWxldHRlOiBjb25maWctdmFsaWRhdGlvbi52YWxpZGF0ZS1wYWxldHRlKCRjb2xvcikgPT0gbnVsbDtcblxuICAgIC8vIERlZmF1bHQgdG8gXCJjb2xvci1zY2hlbWVcIiB0aGVtZSB0eXBlIGlmIHRoZSBjb25maWcncyBjb2xvciBkb2VzIG5vdCBwcm92aWRlIG9uZS5cbiAgICBAaWYgKG5vdCAkaXMtcGFsZXR0ZSBhbmQgbm90IG1hcC5oYXMta2V5KCRjb2xvciwgdGhlbWUtdHlwZSkpIHtcbiAgICAgICRjb2xvcjogbWFwLnNldCgkY29sb3IsIHRoZW1lLXR5cGUsIGNvbG9yLXNjaGVtZSk7XG4gICAgfVxuXG4gICAgJGNvbG9yLWNvbmZpZzogaWYoJGlzLXBhbGV0dGUsXG4gICAgICAgICAgICBkZWZpbml0aW9uLmRlZmluZS1jb2xvcnMoKHByaW1hcnk6ICRjb2xvciwgdGhlbWUtdHlwZTogY29sb3Itc2NoZW1lKSksXG4gICAgICAgICAgICBkZWZpbml0aW9uLmRlZmluZS1jb2xvcnMoJGNvbG9yKSk7XG4gICAgQGluY2x1ZGUgc3lzdGVtLWxldmVsLWNvbG9ycygkY29sb3ItY29uZmlnLCAkb3ZlcnJpZGVzLCBkZWZpbml0aW9uLiRzeXN0ZW0tZmFsbGJhY2stcHJlZml4KTtcbiAgICBAaW5jbHVkZSBzeXN0ZW0tbGV2ZWwtZWxldmF0aW9uKCRjb2xvci1jb25maWcsICRvdmVycmlkZXMsIGRlZmluaXRpb24uJHN5c3RlbS1mYWxsYmFjay1wcmVmaXgpO1xuICB9XG5cbiAgJHR5cG9ncmFwaHk6IG1hcC5nZXQoJGNvbmZpZywgdHlwb2dyYXBoeSk7XG4gICR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbDtcbiAgQGlmICgkdHlwb2dyYXBoeSkge1xuICAgICR0eXBvZ3JhcGh5LWNvbmZpZzogaWYobWV0YS50eXBlLW9mKCR0eXBvZ3JhcGh5KSA9PSAnbWFwJyxcbiAgICAgIGRlZmluaXRpb24uZGVmaW5lLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpLFxuICAgICAgZGVmaW5pdGlvbi5kZWZpbmUtdHlwb2dyYXBoeSgocGxhaW4tZmFtaWx5OiAkdHlwb2dyYXBoeSkpKTtcbiAgICBAaW5jbHVkZSBzeXN0ZW0tbGV2ZWwtdHlwb2dyYXBoeShcbiAgICAgICAgJHR5cG9ncmFwaHktY29uZmlnLCAkb3ZlcnJpZGVzLCBkZWZpbml0aW9uLiRzeXN0ZW0tZmFsbGJhY2stcHJlZml4KTtcbiAgfVxuXG4gICRkZW5zaXR5OiBtYXAuZ2V0KCRjb25maWcsIGRlbnNpdHkpO1xuICAkZGVuc2l0eS1jb25maWc6IG51bGw7XG4gIEBpZiAoJGRlbnNpdHkpIHtcbiAgICAkZGVuc2l0eS1jb25maWc6IGlmKG1ldGEudHlwZS1vZigkZGVuc2l0eSkgPT0gJ21hcCcsXG4gICAgICBkZWZpbml0aW9uLmRlZmluZS1kZW5zaXR5KCRkZW5zaXR5KSxcbiAgICAgIGRlZmluaXRpb24uZGVmaW5lLWRlbnNpdHkoKHNjYWxlOiAkZGVuc2l0eSkpKTtcbiAgICAkc2NhbGU6IG1hcC5nZXQoJGRlbnNpdHktY29uZmlnLCBfbWF0LXRoZW1pbmctaW50ZXJuYWxzLWRvLW5vdC1hY2Nlc3MsIGRlbnNpdHktc2NhbGUpO1xuICAgIEBpZiAoJHNjYWxlICE9IDApIHtcbiAgICAgICRhbGwtdG9rZW5zOiBtMy10b2tlbnMuZ2VuZXJhdGUtZGVuc2l0eS10b2tlbnMoJHNjYWxlKTtcbiAgICAgIEBlYWNoICRjb21wb25lbnQtdG9rZW5zIGluICRhbGwtdG9rZW5zIHtcbiAgICAgICAgJG5hbWVzcGFjZTogbGlzdC5udGgoJGNvbXBvbmVudC10b2tlbnMsIDEpO1xuICAgICAgICBAZWFjaCAkdG9rZW5zIGluIGxpc3QubnRoKCRjb21wb25lbnQtdG9rZW5zLCAyKSB7XG4gICAgICAgICAgLS0je2xpc3QubnRoKCRuYW1lc3BhY2UsIDEpfS0je2xpc3QubnRoKCRuYW1lc3BhY2UsIDIpfS0je1xuICAgICAgICAgICAgICBsaXN0Lm50aCgkdG9rZW5zLCAxKX06ICN7bGlzdC5udGgoJHRva2VucywgMil9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgc3lzdGVtLWxldmVsLXNoYXBlKCRvdmVycmlkZXM6ICRvdmVycmlkZXMsICRwcmVmaXg6IGRlZmluaXRpb24uJHN5c3RlbS1mYWxsYmFjay1wcmVmaXgpO1xuICBAaW5jbHVkZSBzeXN0ZW0tbGV2ZWwtc3RhdGUoJG92ZXJyaWRlczogJG92ZXJyaWRlcywgJHByZWZpeDogZGVmaW5pdGlvbi4kc3lzdGVtLWZhbGxiYWNrLXByZWZpeCk7XG59XG5cbi8vLyBFbWl0cyB0aGUgc3lzdGVtLWxldmVsIENTUyB2YXJpYWJsZXMgZm9yIGVhY2ggb2YgdGhlIHByb3ZpZGVkIG92ZXJyaWRlIHZhbHVlcy4gRS5nLiB0b1xuLy8vIGNoYW5nZSB0aGUgcHJpbWFyeSBjb2xvciB0byByZWQsIHVzZSBgbWF0LnRoZW1lLW92ZXJyaWRlcygocHJpbWFyeTogcmVkKSk7YFxuQG1peGluIHRoZW1lLW92ZXJyaWRlcygkb3ZlcnJpZGVzLCAkcHJlZml4OiBkZWZpbml0aW9uLiRzeXN0ZW0tZmFsbGJhY2stcHJlZml4KSB7XG4gICRzeXMtbmFtZXM6IG1hcC1tZXJnZS1hbGwoXG4gICAgICBkZWZpbml0aW9ucy5tZC1zeXMtY29sb3ItdmFsdWVzLWxpZ2h0KCksXG4gICAgICBkZWZpbml0aW9ucy5tZC1zeXMtdHlwZXNjYWxlLXZhbHVlcygpLFxuICAgICAgZGVmaW5pdGlvbnMubWQtc3lzLWVsZXZhdGlvbi12YWx1ZXMoKSxcbiAgICAgIGRlZmluaXRpb25zLm1kLXN5cy1zaGFwZS12YWx1ZXMoKSxcbiAgICAgIGRlZmluaXRpb25zLm1kLXN5cy1zdGF0ZS12YWx1ZXMoKSk7XG5cbiAgJiB7XG4gICAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiAkb3ZlcnJpZGVzIHtcbiAgICAgIEBpZiAobWFwLmhhcy1rZXkoJHN5cy1uYW1lcywgJG5hbWUpKSB7XG4gICAgICAgIC0tI3skcHJlZml4fS0jeyRuYW1lfTogI3ttYXAuZ2V0KCRvdmVycmlkZXMsICRuYW1lKX07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzeXN0ZW0tbGV2ZWwtY29sb3JzKCR0aGVtZSwgJG92ZXJyaWRlczogKCksICRwcmVmaXg6IG51bGwpIHtcbiAgJHBhbGV0dGVzOiBtYXAuZ2V0KCR0aGVtZSwgX21hdC10aGVtaW5nLWludGVybmFscy1kby1ub3QtYWNjZXNzLCBwYWxldHRlcyk7XG4gICRiYXNlLXBhbGV0dGVzOiAoXG4gICAgbmV1dHJhbDogbWFwLmdldCgkcGFsZXR0ZXMsIG5ldXRyYWwpLFxuICAgIG5ldXRyYWwtdmFyaWFudDogbWFwLmdldCgkcGFsZXR0ZXMsIG5ldXRyYWwtdmFyaWFudCksXG4gICAgc2Vjb25kYXJ5OiBtYXAuZ2V0KCRwYWxldHRlcywgc2Vjb25kYXJ5KSxcbiAgICBlcnJvcjogbWFwLmdldCgkcGFsZXR0ZXMsIGVycm9yKSxcbiAgKTtcblxuICAkdHlwZTogbWFwLmdldCgkdGhlbWUsIF9tYXQtdGhlbWluZy1pbnRlcm5hbHMtZG8tbm90LWFjY2VzcywgdGhlbWUtdHlwZSk7XG4gICRwcmltYXJ5OiBtYXAubWVyZ2UobWFwLmdldCgkcGFsZXR0ZXMsIHByaW1hcnkpLCAkYmFzZS1wYWxldHRlcyk7XG4gICR0ZXJ0aWFyeTogbWFwLm1lcmdlKG1hcC5nZXQoJHBhbGV0dGVzLCB0ZXJ0aWFyeSksICRiYXNlLXBhbGV0dGVzKTtcbiAgJGVycm9yOiBtYXAuZ2V0KCRwYWxldHRlcywgZXJyb3IpO1xuXG4gIEBpZiAobm90ICRwcmVmaXgpIHtcbiAgICAkcHJlZml4OiBtYXAuZ2V0KCR0aGVtZSwgX21hdC10aGVtaW5nLWludGVybmFscy1kby1ub3QtYWNjZXNzLFxuICAgICAgICBjb2xvci1zeXN0ZW0tdmFyaWFibGVzLXByZWZpeCkgb3IgZGVmaW5pdGlvbi4kc3lzdGVtLWxldmVsLXByZWZpeDtcbiAgfVxuXG4gICRyZWY6IChcbiAgICBtZC1yZWYtcGFsZXR0ZTogbTMtdG9rZW5zLmdlbmVyYXRlLXJlZi1wYWxldHRlLXRva2VucygkcHJpbWFyeSwgJHRlcnRpYXJ5LCAkZXJyb3IpXG4gICk7XG5cbiAgJHN5cy1jb2xvcnM6IF9nZW5lcmF0ZS1zeXMtY29sb3JzKCRyZWYsICR0eXBlKTtcblxuICAvLyBNYW51YWxseSBpbnNlcnQgYSBzdWJzZXQgb2YgcGFsZXR0ZSB2YWx1ZXMgdGhhdCBhcmUgdXNlZCBkaXJlY3RseSBieSBjb21wb25lbnRzXG4gIC8vIGluc3RlYWQgb2Ygc3lzdGVtIHZhcmlhYmxlcy5cbiAgJHN5cy1jb2xvcnM6IG1hcC5zZXQoJHN5cy1jb2xvcnMsXG4gICAgJ25ldXRyYWwtdmFyaWFudDIwJywgbWFwLmdldCgkcmVmLCBtZC1yZWYtcGFsZXR0ZSwgbmV1dHJhbC12YXJpYW50MjApKTtcbiAgJHN5cy1jb2xvcnM6IG1hcC5zZXQoJHN5cy1jb2xvcnMsXG4gICAgJ25ldXRyYWwxMCcsIG1hcC5nZXQoJHJlZiwgbWQtcmVmLXBhbGV0dGUsIG5ldXRyYWwxMCkpO1xuXG4gICYge1xuICAgIEBlYWNoICRuYW1lLCAkdmFsdWUgaW4gJHN5cy1jb2xvcnMge1xuICAgICAgLS0jeyRwcmVmaXh9LSN7JG5hbWV9OiAje21hcC5nZXQoJG92ZXJyaWRlcywgJG5hbWUpIG9yICR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbkBmdW5jdGlvbiBfZ2VuZXJhdGUtc3lzLWNvbG9ycygkcmVmLCAkdHlwZSkge1xuICAkbGlnaHQtc3lzLWNvbG9yczogZGVmaW5pdGlvbnMubWQtc3lzLWNvbG9yLXZhbHVlcy1saWdodCgkcmVmKTtcbiAgQGlmICgkdHlwZSA9PSBsaWdodCkge1xuICAgIEByZXR1cm4gJGxpZ2h0LXN5cy1jb2xvcnM7XG4gIH1cblxuICAkZGFyay1zeXMtY29sb3JzOiBkZWZpbml0aW9ucy5tZC1zeXMtY29sb3ItdmFsdWVzLWRhcmsoJHJlZik7XG4gIEBpZiAoJHR5cGUgPT0gZGFyaykge1xuICAgIEByZXR1cm4gJGRhcmstc3lzLWNvbG9ycztcbiAgfVxuXG4gIEBpZiAoJHR5cGUgPT0gY29sb3Itc2NoZW1lKSB7XG4gICAgJGxpZ2h0LWRhcmstc3lzLWNvbG9yczogKCk7XG4gICAgQGVhY2ggJG5hbWUsICRsaWdodC12YWx1ZSBpbiAkbGlnaHQtc3lzLWNvbG9ycyB7XG4gICAgICAkZGFyay12YWx1ZTogbWFwLmdldCgkZGFyay1zeXMtY29sb3JzLCAkbmFtZSk7XG4gICAgICAkbGlnaHQtZGFyay1zeXMtY29sb3JzOlxuICAgICAgICAgIG1hcC5zZXQoJGxpZ2h0LWRhcmstc3lzLWNvbG9ycywgJG5hbWUsIGxpZ2h0LWRhcmsoJGxpZ2h0LXZhbHVlLCAkZGFyay12YWx1ZSkpO1xuICAgIH1cbiAgICBAcmV0dXJuICRsaWdodC1kYXJrLXN5cy1jb2xvcnM7XG4gIH1cblxuICBAZXJyb3IgJ1Vua25vd24gdGhlbWUtdHlwZSBwcm92aWRlZDogI3skdHlwZX0nO1xufVxuXG5AbWl4aW4gc3lzdGVtLWxldmVsLXR5cG9ncmFwaHkoJHRoZW1lLCAkb3ZlcnJpZGVzOiAoKSwgJHByZWZpeDogbnVsbCkge1xuICAkZm9udC1kZWZpbml0aW9uOiBtYXAuZ2V0KCR0aGVtZSwgX21hdC10aGVtaW5nLWludGVybmFscy1kby1ub3QtYWNjZXNzLCBmb250LWRlZmluaXRpb24pO1xuICAkYnJhbmQ6IG1hcC5nZXQoJGZvbnQtZGVmaW5pdGlvbiwgYnJhbmQpO1xuICAkcGxhaW46IG1hcC5nZXQoJGZvbnQtZGVmaW5pdGlvbiwgcGxhaW4pO1xuICAkYm9sZDogbWFwLmdldCgkZm9udC1kZWZpbml0aW9uLCBib2xkKTtcbiAgJG1lZGl1bTogbWFwLmdldCgkZm9udC1kZWZpbml0aW9uLCBtZWRpdW0pO1xuICAkcmVndWxhcjogbWFwLmdldCgkZm9udC1kZWZpbml0aW9uLCByZWd1bGFyKTtcbiAgJHJlZjogKG1kLXJlZi10eXBlZmFjZTpcbiAgICAgIG0zLXRva2Vucy5nZW5lcmF0ZS1yZWYtdHlwZWZhY2UtdG9rZW5zKCRicmFuZCwgJHBsYWluLCAkYm9sZCwgJG1lZGl1bSwgJHJlZ3VsYXIpXG4gICk7XG5cbiAgQGlmIChub3QgJHByZWZpeCkge1xuICAgICRwcmVmaXg6IG1hcC5nZXQoJHRoZW1lLCBfbWF0LXRoZW1pbmctaW50ZXJuYWxzLWRvLW5vdC1hY2Nlc3MsXG4gICAgICAgIHR5cG9ncmFwaHktc3lzdGVtLXZhcmlhYmxlcy1wcmVmaXgpIG9yIGRlZmluaXRpb24uJHN5c3RlbS1sZXZlbC1wcmVmaXg7XG4gIH1cblxuICAmIHtcbiAgICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluIGRlZmluaXRpb25zLm1kLXN5cy10eXBlc2NhbGUtdmFsdWVzKCRyZWYpIHtcbiAgICAgIC0tI3skcHJlZml4fS0jeyRuYW1lfTogI3ttYXAuZ2V0KCRvdmVycmlkZXMsICRuYW1lKSBvciAkdmFsdWV9O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gc3lzdGVtLWxldmVsLWVsZXZhdGlvbigkdGhlbWUsICRvdmVycmlkZXM6ICgpLCAkcHJlZml4OiBkZWZpbml0aW9uLiRzeXN0ZW0tbGV2ZWwtcHJlZml4KSB7XG4gICRzaGFkb3ctY29sb3I6IG1hcC5nZXQoXG4gICAgICAkdGhlbWUsIF9tYXQtdGhlbWluZy1pbnRlcm5hbHMtZG8tbm90LWFjY2VzcywgY29sb3ItdG9rZW5zLCAobWRjLCB0aGVtZSksIHNoYWRvdyk7XG5cbiAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiBkZWZpbml0aW9ucy5tZC1zeXMtZWxldmF0aW9uLXZhbHVlcygpIHtcbiAgICAkbGV2ZWw6IG1hcC5nZXQoJG92ZXJyaWRlcywgJG5hbWUpIG9yICR2YWx1ZTtcbiAgICAkdmFsdWU6IGVsZXZhdGlvbi5nZXQtYm94LXNoYWRvdygkbGV2ZWwsICRzaGFkb3ctY29sb3IpO1xuICAgICYge1xuICAgICAgLS0jeyRwcmVmaXh9LSN7JG5hbWV9OiAjeyR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzeXN0ZW0tbGV2ZWwtc2hhcGUoJHRoZW1lOiAoKSwgJG92ZXJyaWRlczogKCksICRwcmVmaXg6IGRlZmluaXRpb24uJHN5c3RlbS1sZXZlbC1wcmVmaXgpIHtcbiAgJiB7XG4gICAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiBkZWZpbml0aW9ucy5tZC1zeXMtc2hhcGUtdmFsdWVzKCkge1xuICAgICAgLS0jeyRwcmVmaXh9LSN7JG5hbWV9OiAje21hcC5nZXQoJG92ZXJyaWRlcywgJG5hbWUpIG9yICR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzeXN0ZW0tbGV2ZWwtc3RhdGUoJHRoZW1lOiAoKSwgJG92ZXJyaWRlczogKCksICRwcmVmaXg6IGRlZmluaXRpb24uJHN5c3RlbS1sZXZlbC1wcmVmaXgpIHtcbiAgJiB7XG4gICAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiBkZWZpbml0aW9ucy5tZC1zeXMtc3RhdGUtdmFsdWVzKCkge1xuICAgICAgLS0jeyRwcmVmaXh9LSN7JG5hbWV9OiAje21hcC5nZXQoJG92ZXJyaWRlcywgJG5hbWUpIG9yICR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbi8vIFJldHVybiBhIG5ldyBtYXAgd2hlcmUgdGhlIHZhbHVlcyBhcmUgdGhlIHNhbWUgYXMgdGhlIHByb3ZpZGVkIG1hcCdzXG4vLyBrZXlzLCBwcmVmaXhlZCB3aXRoIFwiLS1tYXQtc3lzLVwiLiBGb3IgZXhhbXBsZTpcbi8vIChrZXkxOiAnJywga2V5MjogJycpIC0tPiAoa2V5MTogLS1tYXQtc3lzLWtleTEsIGtleTI6IC0tbWF0LXN5cy1rZXkyKVxuQGZ1bmN0aW9uIF9jcmVhdGUtc3lzdGVtLWFwcC12YXJzLW1hcCgkbWFwKSB7XG4gICRuZXctbWFwOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICRtYXAge1xuICAgICRuZXctbWFwOiBtYXAuc2V0KCRuZXctbWFwLCAka2V5LCAtLSN7ZGVmaW5pdGlvbi4kc3lzdGVtLWZhbGxiYWNrLXByZWZpeH0tI3ska2V5fSk7XG4gIH1cbiAgQHJldHVybiAkbmV3LW1hcDtcbn1cblxuLy8gQ3JlYXRlIGEgY29tcG9uZW50cyB0b2tlbnMgbWFwIHdoZXJlIHZhbHVlcyBhcmUgYmFzZWQgb25cbi8vIHN5c3RlbSBmYWxsYmFjayB2YXJpYWJsZXMgcmVmZXJlbmNpbmcgTWF0ZXJpYWwncyBzeXN0ZW0ga2V5cy5cbi8vIEluY2x1ZGVzIGRlbnNpdHkgdG9rZW4gZmFsbGJhY2tzIHdoZXJlIGRlbnNpdHkgaXMgMC5cbkBmdW5jdGlvbiBjcmVhdGUtc3lzdGVtLWZhbGxiYWNrcygpIHtcbiAgJGFwcC12YXJzOiAoXG4gICAgJ21kLXN5cy1jb2xvcic6XG4gICAgICAgIF9jcmVhdGUtc3lzdGVtLWFwcC12YXJzLW1hcChkZWZpbml0aW9ucy5tZC1zeXMtY29sb3ItdmFsdWVzLWxpZ2h0KCkpLFxuICAgICdtZC1zeXMtdHlwZXNjYWxlJzpcbiAgICAgICAgX2NyZWF0ZS1zeXN0ZW0tYXBwLXZhcnMtbWFwKGRlZmluaXRpb25zLm1kLXN5cy10eXBlc2NhbGUtdmFsdWVzKCkpLFxuICAgICdtZC1zeXMtZWxldmF0aW9uJzpcbiAgICAgICAgX2NyZWF0ZS1zeXN0ZW0tYXBwLXZhcnMtbWFwKGRlZmluaXRpb25zLm1kLXN5cy1lbGV2YXRpb24tdmFsdWVzKCkpLFxuICAgICdtZC1zeXMtc3RhdGUnOlxuICAgICAgICBfY3JlYXRlLXN5c3RlbS1hcHAtdmFycy1tYXAoZGVmaW5pdGlvbnMubWQtc3lzLXN0YXRlLXZhbHVlcygpKSxcbiAgICAnbWQtc3lzLXNoYXBlJzpcbiAgICAgICAgX2NyZWF0ZS1zeXN0ZW0tYXBwLXZhcnMtbWFwKGRlZmluaXRpb25zLm1kLXN5cy1zaGFwZS12YWx1ZXMoKSksXG4gICAgLy8gQWRkIGEgc3Vic2V0IG9mIHBhbGV0dGUtc3BlY2lmaWMgY29sb3JzIHVzZWQgYnkgY29tcG9uZW50cyBpbnN0ZWFkIG9mIHN5c3RlbSB2YWx1ZXNcbiAgICAnbWQtcmVmLXBhbGV0dGUnOlxuICAgICAgICBfY3JlYXRlLXN5c3RlbS1hcHAtdmFycy1tYXAoXG4gICAgICAgICAgKFxuICAgICAgICAgICAgbmV1dHJhbDEwOiAnJywgLy8gRm9ybSBmaWVsZCBuYXRpdmUgc2VsZWN0IG9wdGlvbiB0ZXh0IGNvbG9yXG4gICAgICAgICAgICBuZXV0cmFsLXZhcmlhbnQyMDogJycsIC8vIFNpZGVuYXYgc2NyaW0gKGNvbnRhaW5lciBiYWNrZ3JvdW5kIHNoYWRvdyB3aGVuIG9wZW5lZCksXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICApO1xuXG4gIEByZXR1cm4gc2Fzcy11dGlscy5kZWVwLW1lcmdlLWFsbChcbiAgICAgIG0zLXRva2Vucy5nZW5lcmF0ZS10b2tlbnMoJGFwcC12YXJzLCB0cnVlLCB0cnVlKSxcbiAgICAgIG0zLXRva2Vucy5nZW5lcmF0ZS1kZW5zaXR5LXRva2VucygwKVxuICApO1xufVxuXG4vLy8gQ3JlYXRlcyBhIHNpbmdsZSBtZXJnZWQgbWFwIGZyb20gdGhlIHByb3ZpZGVkIHZhcmlhYmxlLWxlbmd0aCBtYXAgYXJndW1lbnRzXG5AZnVuY3Rpb24gbWFwLW1lcmdlLWFsbCgkbWFwcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJG1hcCBpbiAkbWFwcyB7XG4gICAgJHJlc3VsdDogbWFwLm1lcmdlKCRyZXN1bHQsICRtYXApO1xuICB9XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cbiIsIkB1c2UgXCIuLi9zdHlsZXMvdGhlbWVcIjtcbkB1c2UgXCIuLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5AdXNlIFwiLi4vc3R5bGVzL2J1dHRvbnNcIjtcbkB1c2UgXCIuLi9zdHlsZXMvYW5pbWF0aW9uc1wiO1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLU1lZGl1bS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvUG9wcGlucy9Qb3BwaW5zLUV4dHJhQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCI7XG4gICAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvTWVuZGEvTWVuZGEtQmxhY2sud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNZW5kYVwiO1xuICAgIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL01lbmRhL01lbmRhLVNlbWlCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIjtcbiAgICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9NZW5kYS9NZW5kYS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiA2cHg7XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgfVxufVxuXG5odG1sIHtcbiAgICBjb2xvci1zY2hlbWU6IG9ubHkgbGlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAzNDdweDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hcHAtb25ib2FyZGluZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTcwZGVnLCAjZmZmZmZmIDIwJSwgI2Y3YjdiOSA0MCUsICNjMTk2ZjkgNzAlLCAjODVjNmZmIDEwMCUpO1xufVxuXG4ubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjlkO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG59XG5cbi5tYWluLWRpdiB7XG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzVjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgJi0tcG9wb3V0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICB3aWR0aDogMzc1cHg7XG5cbiAgICAgICAgLnplbGYtYXBwX19jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob21lX19hc3NldHMtY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuemVsZi1hcHBfX2Zvb3RlcixcbiAgICAgICAgLnplbGYtYXBwX19oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvbWVfX2FjdGlvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIzNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuemVsZi1jYXJkIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnctZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi53LTgwcCB7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLnctNzVwIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4udy03MHAge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi53LTYwcCB7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuLnctNjVwIHtcbiAgICB3aWR0aDogNjUlO1xufVxuXG4udy01MHAge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLnctMzVwIHtcbiAgICB3aWR0aDogMzUlO1xufVxuXG4uaC1mdWxsIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZi13aGl0ZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5wcmltYXJ5Q29sb3Ige1xuICAgIGNvbG9yOiAjMDEyMzZkICFpbXBvcnRhbnQ7XG59XG5cbi5kaXZpZGVyLWhlaWdodCB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDMxKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLyogRGVmYXVsdCAoc20pICovXG4uanVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmgtMjAge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLm15LTIge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLyogTWVkaXVtIChtZCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5zbVxcOmgtOCB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgIH1cbn1cblxuLyogTGFyZ2UgKGxnKSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5oLTIwIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuc21cXDpoLTgge1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICB9XG59XG5cbi8qIEV4dHJhIExhcmdlICh4bCkgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAuaC0yMCB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gICAgLnNtXFw6aC04IHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgfVxufVxuXG4vKiBQYWRkaW5nICovXG4ucC0wIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuLnAtMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbn1cbi5wLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5wLTMge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG59XG4ucC00IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuLnAtNSB7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbn1cbi5wLTYge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLnB4LTAge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnB4LTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xufVxuLnB4LTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cbi5weC0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cbi5weC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbi5weC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcbn1cbi5weC02IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5wci0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5wci00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4ucHItNiB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuXG4ucGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5wbC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5wbC02IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cblxuLyogTWFyZ2lucyAqL1xuLm0tMCB7XG4gICAgbWFyZ2luOiAwO1xufVxuLm0tMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtO1xufVxuLm0tMiB7XG4gICAgbWFyZ2luOiAwLjVyZW07XG59XG4ubS0zIHtcbiAgICBtYXJnaW46IDAuNzVyZW07XG59XG4ubS00IHtcbiAgICBtYXJnaW46IDFyZW07XG59XG4ubS01IHtcbiAgICBtYXJnaW46IDEuMjVyZW07XG59XG4ubS02IHtcbiAgICBtYXJnaW46IDEuNXJlbTtcbn1cblxuLm14LTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cbi5teC0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG4ubXgtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5teC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG4ubXgtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLm14LTUge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbn1cbi5teC02IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4vKiBBZGRpdGlvbmFsIFBhZGRpbmcgQ2xhc3NlcyAqL1xuLnAtNyB7XG4gICAgcGFkZGluZzogMS43NXJlbTtcbn1cbi5wLTgge1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG4ucC05IHtcbiAgICBwYWRkaW5nOiAyLjI1cmVtO1xufVxuLnAtMTAge1xuICAgIHBhZGRpbmc6IDIuNXJlbTtcbn1cbi5wLTExIHtcbiAgICBwYWRkaW5nOiAyLjc1cmVtO1xufVxuLnAtMTIge1xuICAgIHBhZGRpbmc6IDNyZW07XG59XG4ucC0xNCB7XG4gICAgcGFkZGluZzogMy41cmVtO1xufVxuLnAtMTYge1xuICAgIHBhZGRpbmc6IDRyZW07XG59XG5cbi5weC03IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNzVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcbn1cbi5weC04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbi5weC05IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMi4yNXJlbTtcbn1cbi5weC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xufVxuLnB4LTExIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNzVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMi43NXJlbTtcbn1cbi5weC0xMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG59XG4ucHgtMTQge1xuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbn1cbi5weC0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi8qIEFkZGl0aW9uYWwgTWFyZ2luIENsYXNzZXMgKi9cbi5tLTcge1xuICAgIG1hcmdpbjogMS43NXJlbTtcbn1cbi5tLTgge1xuICAgIG1hcmdpbjogMnJlbTtcbn1cbi5tLTkge1xuICAgIG1hcmdpbjogMi4yNXJlbTtcbn1cbi5tLTEwIHtcbiAgICBtYXJnaW46IDIuNXJlbTtcbn1cbi5tLTExIHtcbiAgICBtYXJnaW46IDIuNzVyZW07XG59XG4ubS0xMiB7XG4gICAgbWFyZ2luOiAzcmVtO1xufVxuLm0tMTQge1xuICAgIG1hcmdpbjogMy41cmVtO1xufVxuLm0tMTYge1xuICAgIG1hcmdpbjogNHJlbTtcbn1cblxuLm14LTcge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjc1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMS43NXJlbTtcbn1cbi5teC04IHtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4ubXgtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjI1cmVtO1xufVxuLm14LTEwIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xufVxuLm14LTExIHtcbiAgICBtYXJnaW4tbGVmdDogMi43NXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNzVyZW07XG59XG4ubXgtMTIge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbn1cbi5teC0xNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcbn1cbi5teC0xNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xufVxuXG4vKiBQYWRkaW5nIFRvcCBhbmQgQm90dG9tIENsYXNzZXMgKi9cbi5wdC0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbn1cbi5wdC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuLnB0LTMge1xuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xufVxuLnB0LTQge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLnB0LTUge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xufVxuLnB0LTYge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG59XG4ucHQtNyB7XG4gICAgcGFkZGluZy10b3A6IDEuNzVyZW07XG59XG4ucHQtOCB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG4ucHQtOSB7XG4gICAgcGFkZGluZy10b3A6IDIuMjVyZW07XG59XG4ucHQtMTAge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG59XG4ucHQtMTEge1xuICAgIHBhZGRpbmctdG9wOiAyLjc1cmVtO1xufVxuLnB0LTEyIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cbi5wdC0xNCB7XG4gICAgcGFkZGluZy10b3A6IDMuNXJlbTtcbn1cbi5wdC0xNiB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5wYi0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5wYi0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuLnBiLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xufVxuLnBiLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnBiLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xufVxuLnBiLTYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG4ucGItNyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG4ucGItOCB7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4ucGItOSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMjVyZW07XG59XG4ucGItMTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG59XG4ucGItMTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjc1cmVtO1xufVxuLnBiLTEyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbi5wYi0xNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNXJlbTtcbn1cbi5wYi0xNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi8qIE1hcmdpbiBUb3AgYW5kIEJvdHRvbSBDbGFzc2VzICovXG4ubXQtMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi5tdC0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4ubXQtMyB7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbn1cbi5tdC00IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm10LTUge1xuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG59XG4ubXQtNiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuLm10LTcge1xuICAgIG1hcmdpbi10b3A6IDEuNzVyZW07XG59XG4ubXQtOCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5tdC05IHtcbiAgICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xufVxuLm10LTEwIHtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG4ubXQtMTEge1xuICAgIG1hcmdpbi10b3A6IDIuNzVyZW07XG59XG4ubXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG4ubXQtMTQge1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbn1cbi5tdC0xNiB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbn1cblxuLm1iLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG4ubWItMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLm1iLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG4ubWItNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5tYi01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLm1iLTYge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5tYi03IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xufVxuLm1iLTgge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubWItOSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcbn1cbi5tYi0xMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuLm1iLTExIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjc1cmVtO1xufVxuLm1iLTEyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLm1iLTE0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG59XG4ubWItMTYge1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi8qIENvbWJpbmVkIFBhZGRpbmcgVG9wIGFuZCBCb3R0b20gQ2xhc3NlcyAqL1xuLnB5LTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufVxuLnB5LTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cbi5weS0zIHtcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbn1cbi5weS00IHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5weS01IHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5weS02IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG4ucHktNyB7XG4gICAgcGFkZGluZy10b3A6IDEuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG4ucHktOCB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4ucHktOSB7XG4gICAgcGFkZGluZy10b3A6IDIuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIuMjVyZW07XG59XG4ucHktMTAge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn1cbi5weS0xMSB7XG4gICAgcGFkZGluZy10b3A6IDIuNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIuNzVyZW07XG59XG4ucHktMTIge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuLnB5LTE0IHtcbiAgICBwYWRkaW5nLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG59XG4ucHktMTYge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xufVxuXG4vKiBDb21iaW5lZCBNYXJnaW4gVG9wIGFuZCBCb3R0b20gQ2xhc3NlcyAqL1xuLm15LTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5teS0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLm15LTMge1xuICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cbi5teS00IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubXktNSB7XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLm15LTYge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ubXktNyB7XG4gICAgbWFyZ2luLXRvcDogMS43NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xufVxuLm15LTgge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5teS05IHtcbiAgICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuMjVyZW07XG59XG4ubXktMTAge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4ubXktMTEge1xuICAgIG1hcmdpbi10b3A6IDIuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi43NXJlbTtcbn1cbi5teS0xMiB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLm15LTE0IHtcbiAgICBtYXJnaW4tdG9wOiAzLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy41cmVtO1xufVxuLm15LTE2IHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5tYWluLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtMTgge1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIiwgc2Fucy1zZXJpZjtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi56ZWxmLXAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNlY29uZGFyeS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBiNTdkMDhhICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2Vjb25kYXJ5LWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICM0ZTY1OTkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGI1N2QwMzYgIWltcG9ydGFudDtcbn1cblxuLmxpbmsge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjMGI1N2QwO1xufVxuXG4vKiBNYXJnaW4gUmlnaHQgQ2xhc3NlcyAqL1xuLm1yLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbi5tci0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5tci0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG4ubXItNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLm1yLTUge1xuICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcbn1cbi5tci02IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5tci03IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNzVyZW07XG59XG4ubXItOCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLm1yLTkge1xuICAgIG1hcmdpbi1yaWdodDogMi4yNXJlbTtcbn1cbi5tci0xMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XG59XG4ubXItMTEge1xuICAgIG1hcmdpbi1yaWdodDogMi43NXJlbTtcbn1cbi5tci0xMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuLm1yLTE0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcbn1cbi5tci0xNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xufVxuXG4vKiBNYXJnaW4gTGVmdCBDbGFzc2VzICovXG4ubWwtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG4ubWwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5tbC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbn1cbi5tbC00IHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5tbC01IHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbn1cbi5tbC02IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuLm1sLTcge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjc1cmVtO1xufVxuLm1sLTgge1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuLm1sLTkge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjI1cmVtO1xufVxuLm1sLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xufVxuLm1sLTExIHtcbiAgICBtYXJnaW4tbGVmdDogMi43NXJlbTtcbn1cbi5tbC0xMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG4ubWwtMTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzLjVyZW07XG59XG4ubWwtMTYge1xuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xufVxuXG4ub24taGVhZGVyIHtcbiAgICB3aWR0aDogOTIlO1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi55LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucm91bmRlZC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi8vIG1hdGVyaWFsIGJ1dHRvbnNcblxuLm1hdC1tZGMtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnctMjRweCB7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbi53LTI4cHgge1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4udy0zMnB4IHtcbiAgICB3aWR0aDogMzJweDtcbn1cblxuLnRleHQtZ3JleSB7XG4gICAgY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42OTQpICFpbXBvcnRhbnQ7XG59XG5cbi56cGFuIHtcbiAgICBmb250LWZhbWlseTogXCJNZW5kYVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uemxpbmUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbn1cblxuLnpsaW5lLTIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzg2KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbn1cblxuLnctZml4IHtcbiAgICB3aWR0aDogNjAycHg7XG59XG5cbi56bnMtbG9nbyB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uc2VuZC10cmFuc2FjdGlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBGb3IgZXh0cmVtZWx5IHNtYWxsIHNjcmVlbiBkZXZpY2VzICg1OTVweCBhbmQgYmVsb3cpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHZhcmlhYmxlcy4kbWF4RXh0cmFTbWFsbCkge1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC56ZWxmLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLnplbGYtaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC53LWZpeCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC56ZWxmLWNhcmQtb2xkIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICB9XG59XG5cbi5zdGF0cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAmLS1uby1tYXJnaW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgICAgICYgLnN0YXRzX19wZXJjZW50YWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG5cbiAgICAgICAgJi0tY29sb3JlZCB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hcnJvdyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9fcGVyY2VudGFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcblxuICAgICAgICAmLS1wb3NpdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICYgLnN0YXRzX19hcnJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLS1uZWdhdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAmIC5zdGF0c19fYXJyb3cge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi56ZWxmLWNhcmQtb2xkIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSg5NywgOTcsIDk3LCAwLjA4KTtcbiAgICBib3JkZXI6IDFweCByZ2JhKDAsIDAsIDAsIDAuMzUpIHNvbGlkO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi56ZWxmLWNvbnRlbnQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3MGRlZywgI2ZmZmZmZiAyMCUsICNmN2I3YjkgNDAlLCAjYzE5NmY5IDcwJSwgIzg1YzZmZiAxMDAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uemVsZi1oZWFkZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIGhlaWdodDogODVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSkgc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KSBzb2xpZDtcbiAgICBib3JkZXItdG9wOiAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMzUpIHNvbGlkO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uemVsZi1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi56ZWxmLWJvdHRvbi1zaGVldC1mdWxsLFxuLnplbGYtYm90dG9tLXNoZWV0LXNlYXNhbHQsXG4uemVsZi1ib3R0b20tc2hlZXQge1xuICAgIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjZweCAyNnB4IDAgMCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi56ZWxmLWJvdHRvbS1zaGVldC1zZWFzYWx0IHtcbiAgICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlYVNhbHQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi56ZWxmLWJvdHRvbi1zaGVldC1mdWxsIHtcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcblxuICAgIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uemVsZi1kaWFsb2csXG4uemVsZi1kaWFsb2ctc2Vhc2FsdCB7XG4gICAgLm1kYy1kaWFsb2dfX3N1cmZhY2Uge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uemVsZi1kaWFsb2ctc2Vhc2FsdCB7XG4gICAgLm1kYy1kaWFsb2dfX3N1cmZhY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlYVNhbHQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi56ZWxmLXNuYWNrYmFyIHtcbiAgICAubWRjLXNuYWNrYmFyX19zdXJmYWNlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgLm1hdC1tZGMtc25hY2stYmFyLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1kYy1zbmFja2Jhcl9fYWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi56ZWxmLW1lbnUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgICYtLWljb24tZW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gICAgICAgICAgICAuemVsZi1tZW51X19idXR0b24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtdGV4dCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnplbGYtY2FyZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIHdpZHRoOiA1NjRweDtcbiAgICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiB2YXJpYWJsZXMuJG1lZGl1bSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIG1heC13aWR0aDogMzEwcHg7XG4gICAgfVxuXG4gICAgJl9fcHJldGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LWZhbWlseTogXCJNZW5kYVwiLCBcIkFyaWFsIEJsYWNrXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCIsIFwiQXJpYWwgQmxhY2tcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIlO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG5cbiAgICAmX19zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi0tZ3JvdyB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hY3Rpb25zIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWluLWhlaWdodDogNTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi0tY29sdW1uIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tZW5kIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnplbGYtYWN0aW9uLXJvdyB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogNjJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX3RleHQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi56ZWxmLWlucHV0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGJvcmRlcjogMXB4IHZhcmlhYmxlcy4kZ3JheSBzb2xpZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgaW5wdXRbcmVhZG9ubHldIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgICAgICY6Oi1tcy1yZXZlYWwsXG4gICAgICAgICY6Oi1tcy1jbGVhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIC56ZWxmLWljb24tYnV0dG9uIHtcbiAgICAgICAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcHJlZml4LXRleHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIG1pbi13aWR0aDogMzJweDtcbiAgICAgICAgbWluLWhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fcG9zdGZpeCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5kYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICZfX2Zsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGVmdDogMTdweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIH1cblxuICAgICZfX2NvbnRyb2wge1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLXdpZHRoOiAyNTZweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICB3aWR0aDogYXV0bztcblxuICAgICAgICAmLS1mbG9hdGluZy1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMnB4IDE4cHggNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC56ZWxmLWlucHV0X19mbG9hdGluZy1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXJpYWJsZXMuJHByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICAgICAgICYgKyAuemVsZi1pbnB1dF9fZmxvYXRpbmctbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3RpcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICB9XG5cbiAgICAmLS1nYXAtbmFycm93IHtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYgLnplbGYtaW5wdXRfX2NvbnRyb2wge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyaWFibGVzLiRlcnJvcjtcblxuICAgICAgICAuemVsZi1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAuemVsZi1pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC56ZWxmLWlucHV0X19mbG9hdGluZy1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC56ZWxmLWlucHV0X19jb250cm9sICsgLnplbGYtaW5wdXRfX2Zsb2F0aW5nLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uemVsZi1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDhweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTdweCwgMWZyKSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi56ZWxmLXJhZGlvIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuXG4gICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgICAmICsgc3ZnIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGNoZWNrYm94LWJvdW5jZSAwLjRzIGxpbmVhciBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwLjgpIHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIHN0cm9rZS13aWR0aDogM3B4O1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4NC42JTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwKSB0cmFuc2xhdGVaKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgfVxuXG4gICAgJi0tcGxhaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGxlZnQ6IDg5LjglO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tZ2FwLWxnIHtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbn1cblxuLnplbGYtbWVudS1pdGVtIHtcbiAgICAmID4gc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi56ZWxmLWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmbGFiZWwge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG5cbiAgICAgICAgICAgICYgKyBzdmcge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY2hlY2tib3gtYm91bmNlIDAuNHMgbGluZWFyIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgwLjgpIHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDI4cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6dmlzaXRlZCxcbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmZvY3VzLXZpc2libGUsXG4gICAgICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHByaW1hcnlDb2xvcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uemVsZi1tZXNzYWdlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGdhcDogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgcCxcbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyxcbiAgICBoNCxcbiAgICBoNSxcbiAgICBoNiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yRGFyaztcbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdERhcms7XG4gICAgfVxuXG4gICAgJi0tY29sdW1uIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fcm93IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLnplbGYtY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgIH1cblxuICAgICYtLWluZm8ge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRpbmZvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGluZm9MaWdodDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQ7XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3Q7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0O1xuICAgIH1cbn1cblxuLnFyLWNvZGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1pbi1oZWlnaHQ6IDIzNnB4O1xuICAgIG1pbi13aWR0aDogMjM2cHg7XG4gICAgbWF4LWhlaWdodDogMjM2cHg7XG4gICAgbWF4LXdpZHRoOiAyMzZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XG5cbiAgICAgICAgJltzcmM9XCIuL2Fzc2V0cy9pbWFnZXMvcXItcHJlbG9hZC5wbmdcIl0ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMThweCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcmFnLWFuZC1kcm9wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMXM7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi0tYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmX19sb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuXG4gICAgJl9fbG9hZGVyLW92ZXJsYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NTUsIDI1NSwgMC45KTtcbiAgICB9XG5cbiAgICAmX19wcmV2aWV3IHtcbiAgICAgICAgbWF4LWhlaWdodDogNDc2cHg7XG4gICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgfVxuXG4gICAgJl9fZGF0YSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59XG5cbi56ZWxmLWxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcblxuICAgICYtLXNjcmVlbi1tZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4udHYtbGlnaHR3ZWlnaHQtY2hhcnRzIGEge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogU21hbGwgc2NyZWVuIGRldmljZXMgKDYwMHB4IGFuZCBhYm92ZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogdmFyaWFibGVzLiRtaW5TbWFsbCkge1xufVxuXG4vKiBNZWRpdW0gc2NyZWVuIGRldmljZXMgKDc2OHB4IGFuZCBhYm92ZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogdmFyaWFibGVzLiRtZWRpdW0pIHtcbiAgICAuemVsZi1sb2dvIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAmLS1zY3JlZW4tbWQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBCaWcgc2NyZWVuIGRldmljZXMgKDg4OXB4IGFuZCBhYm92ZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogdmFyaWFibGVzLiRsYXJnZSkge1xufVxuXG4vKiBFeHRyYSBiaWcgc2NyZWVuIGRldmljZXMgKDEyMDBweCBhbmQgYWJvdmUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IHZhcmlhYmxlcy4kY29tcHV0ZXJzKSB7XG59XG4iLCJAdXNlICcuLi9zdHlsZS9lbGV2YXRpb24nO1xuQHVzZSAnLi4vc3R5bGUvc2Fzcy11dGlscyc7XG5AdXNlICcuL20zLXN5c3RlbSc7XG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczpzdHJpbmcnO1xuXG4kX3Rva2VuczogbnVsbDtcbiRfY29tcG9uZW50LXByZWZpeDogbnVsbDtcbiRfc3lzdGVtLWZhbGxiYWNrczogbTMtc3lzdGVtLmNyZWF0ZS1zeXN0ZW0tZmFsbGJhY2tzKCk7XG5cbi8vIFNldHMgdGhlIHRva2VuIHByZWZpeCBhbmQgbWFwIHRvIHVzZSB3aGVuIGNyZWF0aW5nIHRva2VuIHNsb3RzLlxuQG1peGluIHVzZS10b2tlbnMoJHByZWZpeCwgJHRva2Vucykge1xuICAkX2NvbXBvbmVudC1wcmVmaXg6ICRwcmVmaXggIWdsb2JhbDtcbiAgJF90b2tlbnM6ICR0b2tlbnMgIWdsb2JhbDtcblxuICBAY29udGVudDtcblxuICAkX2NvbXBvbmVudC1wcmVmaXg6IG51bGwgIWdsb2JhbDtcbiAgJF90b2tlbnM6IG51bGwgIWdsb2JhbDtcbn1cblxuLy8gQ29tYmluZXMgYSBwcmVmaXggYW5kIGEgc3RyaW5nIHRvIGdlbmVyYXRlIGEgQ1NTIHZhcmlhYmxlIG5hbWUgZm9yIGEgdG9rZW4uXG5AZnVuY3Rpb24gX2NyZWF0ZS12YXItbmFtZSgkcHJlZml4LCAkdG9rZW4pIHtcbiAgQGlmICRwcmVmaXggPT0gbnVsbCBvciAkdG9rZW4gPT0gbnVsbCB7XG4gICAgQGVycm9yICdNdXN0IHNwZWNpZnkgYm90aCBwcmVmaXggYW5kIG5hbWUgd2hlbiBnZW5lcmF0aW5nIHRva2VuJztcbiAgfVxuXG4gICRzdHJpbmctcHJlZml4OiAnJztcblxuICAvLyBQcmVmaXhlcyBhcmUgbGlzdHMgc28gd2UgbmVlZCB0byBjb21iaW5lIHRoZW0uXG4gIEBlYWNoICRwYXJ0IGluICRwcmVmaXgge1xuICAgICRzdHJpbmctcHJlZml4OiBpZigkc3RyaW5nLXByZWZpeCA9PSAnJywgJHBhcnQsICcjeyRzdHJpbmctcHJlZml4fS0jeyRwYXJ0fScpO1xuICB9XG5cbiAgQHJldHVybiBzdHJpbmcudW5xdW90ZSgnLS0jeyRzdHJpbmctcHJlZml4fS0jeyR0b2tlbn0nKTtcbn1cblxuLy8gQ3JlYXRlcyBhIENTUyB2YXJpYWJsZSwgaW5jbHVkaW5nIHRoZSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbkBmdW5jdGlvbiBfY3JlYXRlLXZhcigkbmFtZSwgJGZhbGxiYWNrOiBudWxsKSB7XG4gIEBpZiAoJGZhbGxiYWNrKSB7XG4gICAgQHJldHVybiB2YXIoJG5hbWUsICRmYWxsYmFjayk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKCRuYW1lKTtcbiAgfVxufVxuXG4vLyBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdG9rZW4gZ2l2ZW4gdGhlIGN1cnJlbnQgZ2xvYmFsIGNvbnRleHQgc3RhdGUuXG5AZnVuY3Rpb24gX2dldC10b2tlbi12YWx1ZSgkdG9rZW4sICRmYWxsYmFjaykge1xuICAkdmFyLW5hbWU6IF9jcmVhdGUtdmFyLW5hbWUoJF9jb21wb25lbnQtcHJlZml4LCAkdG9rZW4pO1xuICAkZmFsbGJhY2s6IF9nZXQtdG9rZW4tZmFsbGJhY2soJHRva2VuLCAkZmFsbGJhY2spO1xuICBAcmV0dXJuIF9jcmVhdGUtdmFyKCR2YXItbmFtZSwgJGZhbGxiYWNrKTtcbn1cblxuLy8gQXNzZXJ0aW9uIG1peGluIHRoYXQgdGhyb3dzIGFuIGVycm9yIGlmIHRoZSBnbG9iYWwgc3RhdGUgaGFzIG5vdCBiZWVuIHNldCB1cCBieSB3cmFwcGluZ1xuLy8gY2FsbHMgd2l0aCBgdXNlLXRva2Vuc2AuXG5AZnVuY3Rpb24gX2Fzc2VydC11c2UtdG9rZW5zKCR0b2tlbikge1xuICBAaWYgJF9jb21wb25lbnQtcHJlZml4ID09IG51bGwgb3IgJF90b2tlbnMgPT0gbnVsbCB7XG4gICAgQGVycm9yICdGdW5jdGlvbiB3YXMgbm90IGNhbGxlZCB3aXRoaW4gYSB3cmFwcGluZyBjYWxsIG9mIGB1c2UtdG9rZW5zYCc7XG4gIH1cbiAgQGlmIG5vdCBtYXAuaGFzLWtleSgkX3Rva2VucywgJHRva2VuKSB7XG4gICAgQGVycm9yICdUb2tlbiAjeyR0b2tlbn0gZG9lcyBub3QgZXhpc3QuIENvbmZpZ3VyZWQgdG9rZW5zIGFyZTogI3ttYXAua2V5cygkX3Rva2Vucyl9JztcbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gRW1pdHMgYSBzbG90IGZvciB0aGUgZ2l2ZW4gdG9rZW4sIHByb3ZpZGVkIHRoYXQgaXQgaGFzIGEgbm9uLW51bGwgdmFsdWUgaW4gdGhlIHRva2VuIG1hcCBwYXNzZWRcbi8vIHRvIGB1c2UtdG9rZW5zYC5cbi8vIEFjY2VwdHMgYW4gb3B0aW9uYWwgZmFsbGJhY2sgcGFyYW1ldGVyIHRvIGluY2x1ZGUgaW4gdGhlIENTUyB2YXJpYWJsZS5cbi8vIElmICRmYWxsYmFjayBpcyBgdHJ1ZWAsIHRoZW4gdXNlIHRoZSB0b2tlbnMgbWFwIHRvIGdldCB0aGUgZmFsbGJhY2suXG4vLyBUT0RPOiBSZW1vdmUgdGhlIHVzZSBjYXNlIHdoZXJlIHdlIGFjY2VwdCBcInRydWVcIiBhbmQgaGFuZGxlIGFueSBmYWlsaW5nIGNsaWVudCBzY3JlZW5zaG90c1xuQG1peGluIGNyZWF0ZS10b2tlbi1zbG90KCRwcm9wZXJ0eSwgJHRva2VuLCAkZmFsbGJhY2s6IG51bGwpIHtcbiAgJF9hc3NlcnQ6IF9hc3NlcnQtdXNlLXRva2VucygkdG9rZW4pO1xuICBAaWYgbWFwLmdldCgkX3Rva2VucywgJHRva2VuKSAhPSBudWxsIHtcbiAgICAjeyRwcm9wZXJ0eX06ICN7X2dldC10b2tlbi12YWx1ZSgkdG9rZW4sICRmYWxsYmFjayl9O1xuICB9XG59XG5cbi8vIFJldHVybnMgdGhlIG5hbWUgb2YgYSB0b2tlbiBpbmNsdWRpbmcgdGhlIGN1cnJlbnQgcHJlZml4LiBJbnRlbmRlZCB0byBiZSB1c2VkIGluIGNhbGN1bGF0aW9uc1xuLy8gaW52b2x2aW5nIHRva2Vucy4gYGNyZWF0ZS10b2tlbi1zbG90YCBzaG91bGQgYmUgdXNlZCB3aGVuIG91dHB1dHRpbmcgdG9rZW5zLlxuQGZ1bmN0aW9uIGdldC10b2tlbi12YXJpYWJsZS1uYW1lKCR0b2tlbikge1xuICAkX2Fzc2VydDogX2Fzc2VydC11c2UtdG9rZW5zKCR0b2tlbik7XG4gIEByZXR1cm4gX2NyZWF0ZS12YXItbmFtZSgkX2NvbXBvbmVudC1wcmVmaXgsICR0b2tlbik7XG59XG5cbi8vIFJldHVybnMgYSBgdmFyKClgIHJlZmVyZW5jZSB0byBhIHNwZWNpZmljIHRva2VuLiBJbnRlbmRlZCBmb3IgZGVjbGFyYXRpb25zXG4vLyB3aGVyZSB0aGUgdG9rZW4gaGFzIHRvIGJlIHJlZmVyZW5jZWQgYXMgYSBwYXJ0IG9mIGEgbGFyZ2VyIGV4cHJlc3Npb24uXG4vLyBBY2NlcHRzIGFuIG9wdGlvbmFsIGZhbGxiYWNrIHBhcmFtZXRlciB0byBpbmNsdWRlIGluIHRoZSBDU1MgdmFyaWFibGUuXG4vLyBJZiAkZmFsbGJhY2sgaXMgYHRydWVgLCB0aGVuIHVzZSB0aGUgdG9rZW5zIG1hcCB0byBnZXQgdGhlIGZhbGxiYWNrLlxuLy8gVE9ETzogUmVtb3ZlIHRoZSB1c2UgY2FzZSB3aGVyZSB3ZSBhY2NlcHQgXCJ0cnVlXCIgYW5kIGhhbmRsZSBhbnkgZmFpbGluZyBjbGllbnQgc2NyZWVuc2hvdHNcbkBmdW5jdGlvbiBnZXQtdG9rZW4tdmFyaWFibGUoJHRva2VuLCAkZmFsbGJhY2s6IG51bGwpIHtcbiAgJF9hc3NlcnQ6IF9hc3NlcnQtdXNlLXRva2VucygkdG9rZW4pO1xuICBAcmV0dXJuIF9nZXQtdG9rZW4tdmFsdWUoJHRva2VuLCAkZmFsbGJhY2spO1xufVxuXG4vLyBHZXRzIHRoZSB0b2tlbidzIGZhbGxiYWNrIHZhbHVlLiBQcmVmZXJzIGFkZGluZyBhIHN5c3RlbS1sZXZlbCBmYWxsYmFjayBpZiBvbmUgZXhpc3RzLCBvdGhlcndpc2Vcbi8vIHVzZSB0aGUgcHJvdmlkZWQgZmFsbGJhY2suXG5AZnVuY3Rpb24gX2dldC10b2tlbi1mYWxsYmFjaygkdG9rZW4sICRmYWxsYmFjazogbnVsbCkge1xuICAvLyBJZiB0aGUgJGZhbGxiYWNrIGlzIGB0cnVlYCwgdGhpcyBpcyB0aGUgY29tcG9uZW50J3Mgc2lnbmFsIHRvIHVzZSB0aGUgY3VycmVudCB0b2tlbiBtYXAgdmFsdWVcbiAgQGlmICgkZmFsbGJhY2sgPT0gdHJ1ZSkge1xuICAgICRmYWxsYmFjazogbWFwLmdldCgkX3Rva2VucywgJHRva2VuKTtcbiAgfVxuXG4gIC8vIENoZWNrIHdoZXRoZXIgdGhlcmUncyBhIHN5c3RlbS1sZXZlbCBmYWxsYmFjay4gSWYgbm90LCByZXR1cm4gdGhlIG9wdGlvbmFsXG4gIC8vIHByb3ZpZGVkIGZhbGxiYWNrIChvdGhlcndpc2UgbnVsbCkuXG4gICRzeXMtZmFsbGJhY2s6IG1hcC5nZXQoJF9zeXN0ZW0tZmFsbGJhY2tzLCAkX2NvbXBvbmVudC1wcmVmaXgsICR0b2tlbik7XG4gIEBpZiAobm90ICRzeXMtZmFsbGJhY2spIHtcbiAgICBAcmV0dXJuICRmYWxsYmFjaztcbiAgfVxuXG4gIEBpZiAoc2Fzcy11dGlscy5pcy1jc3MtdmFyLW5hbWUoJHN5cy1mYWxsYmFjaykpIHtcbiAgICBAcmV0dXJuIF9jcmVhdGUtdmFyKCRzeXMtZmFsbGJhY2ssICRmYWxsYmFjayk7XG4gIH1cblxuICBAcmV0dXJuICRzeXMtZmFsbGJhY2s7XG59XG5cbi8vIE91dHB1dHMgYSBtYXAgb2YgdG9rZW5zIHVuZGVyIGEgc3BlY2lmaWMgcHJlZml4LlxuQG1peGluIGNyZWF0ZS10b2tlbi12YWx1ZXMoJHByZWZpeCwgJHRva2Vucykge1xuICBAaWYgJHRva2VucyAhPSBudWxsIHtcbiAgICAvLyBUT0RPOiBUaGUgYCZgIGFkZHMgdG8gdGhlIGZpbGUgc2l6ZSBvZiB0aGVtZSwgYnV0IGl0J3MgbmVjZXNzYXJ5IGZvciBjb21wYXRpYmlsaXR5XG4gICAgLy8gd2l0aCBodHRwczovL3Nhc3MtbGFuZy5jb20vZG9jdW1lbnRhdGlvbi9icmVha2luZy1jaGFuZ2VzL21peGVkLWRlY2xzLy4gV2Ugc2hvdWxkXG4gICAgLy8gZmlndXJlIG91dCBhIGJldHRlciB3YXkgdG8gZG8gdGhpcyBvciBtb3ZlIGFsbCB0aGUgY29uY3JldGUgc3R5bGVzIG91dCBvZiB0aGUgdGhlbWUuXG4gICAgJiB7XG4gICAgICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRva2VucyB7XG4gICAgICAgIEBpZiAkdmFsdWUgIT0gbnVsbCB7XG4gICAgICAgICAgI3tfY3JlYXRlLXZhci1uYW1lKCRwcmVmaXgsICRrZXkpfTogI3skdmFsdWV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1EQyBkb2Vzbid0IGN1cnJlbnRseSBoYW5kbGUgZWxldmF0aW9uIHRva2VucyBwcm9wZXJseS4gQXMgYSB0ZW1wb3Jhcnkgd29ya2Fyb3VuZCB3ZSBjYW4gY29tYmluZVxuLy8gdGhlIGVsZXZhdGlvbiBhbmQgc2hhZG93LWNvbG9yIHRva2VucyBpbnRvIGEgZnVsbCBib3gtc2hhZG93IGFuZCB1c2UgaXQgYXMgdGhlIHZhbHVlIGZvciB0aGVcbi8vIGVsZXZhdGlvbiB0b2tlbi5cbkBmdW5jdGlvbiByZXNvbHZlLWVsZXZhdGlvbigkdG9rZW5zLCAkZWxldmF0aW9uLXRva2VuLCAkc2hhZG93LWNvbG9yLXRva2VuKSB7XG4gICRlbGV2YXRpb246IG1hcC5nZXQoJHRva2VucywgJGVsZXZhdGlvbi10b2tlbik7XG4gICRzaGFkb3ctY29sb3I6IG1hcC5nZXQoJHRva2VucywgJHNoYWRvdy1jb2xvci10b2tlbik7XG4gIEByZXR1cm4gbWFwLm1lcmdlKFxuICAgICR0b2tlbnMsXG4gICAgKFxuICAgICAgJGVsZXZhdGlvbi10b2tlbjogZWxldmF0aW9uLmdldC1ib3gtc2hhZG93KCRlbGV2YXRpb24sICRzaGFkb3ctY29sb3IpLFxuICAgICAgJHNoYWRvdy1jb2xvci10b2tlbjogbnVsbCxcbiAgICApXG4gICk7XG59XG5cbi8vLyBDaGVja3Mgd2hldGhlciBhIGxpc3Qgc3RhcnRzIHdpaCBhIGdpdmVuIHByZWZpeFxuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgVGhlIGxpc3QgdmFsdWUgdG8gY2hlY2sgdGhlIHByZWZpeCBvZi5cbi8vLyBAcGFyYW0ge0xpc3R9ICRwcmVmaXggVGhlIHByZWZpeCB0byBjaGVjay5cbi8vLyBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBsaXN0IHN0YXJ0cyB3aXRoIHRoZSBwcmVmaXguXG5AZnVuY3Rpb24gX2lzLXByZWZpeCgkbGlzdCwgJHByZWZpeCkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxpc3QubGVuZ3RoKCRwcmVmaXgpIHtcbiAgICBAaWYgbGlzdC5udGgoJGxpc3QsICRpKSAhPSBsaXN0Lm50aCgkcHJlZml4LCAkaSkge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8gR2V0cyB0aGUgc3VwcG9ydGVkIGNvbG9yIHZhcmlhbnRzIGluIHRoZSBnaXZlbiB0b2tlbiBzZXQgZm9yIHRoZSBnaXZlbiBwcmVmaXguXG4vLy8gQHBhcmFtIHtNYXB9ICR0b2tlbnMgVGhlIGZ1bGwgdG9rZW4gbWFwLlxuLy8vIEBwYXJhbSB7TGlzdH0gJHByZWZpeCBUaGUgY29tcG9uZW50IHByZWZpeCB0byBnZXQgY29sb3IgdmFyaWFudHMgZm9yLlxuLy8vIEByZXR1cm4ge0xpc3R9IFRoZSBzdXBwb3J0ZWQgY29sb3IgdmFyaWFudHMuXG5AZnVuY3Rpb24gX3N1cHBvcnRlZC1jb2xvci12YXJpYW50cygkdG9rZW5zLCAkcHJlZml4KSB7XG4gICRyZXN1bHQ6ICgpO1xuICBAZWFjaCAkbmFtZXNwYWNlIGluIG1hcC5rZXlzKCR0b2tlbnMpIHtcbiAgICBAaWYgbGlzdC5sZW5ndGgoJHByZWZpeCkgPT0gbGlzdC5sZW5ndGgoJG5hbWVzcGFjZSkgLSAxIGFuZCBfaXMtcHJlZml4KCRuYW1lc3BhY2UsICRwcmVmaXgpIHtcbiAgICAgICRyZXN1bHQ6IGxpc3QuYXBwZW5kKCRyZXN1bHQsIGxpc3QubnRoKCRuYW1lc3BhY2UsIGxpc3QubGVuZ3RoKCRuYW1lc3BhY2UpKSwgY29tbWEpO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLyBHZXRzIHRoZSB0b2tlbiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBjb21wb25lbnRzIHByZWZpeCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuLy8vIEBwYXJhbSB7TWFwfSAkdG9rZW5zIFRoZSBmdWxsIHRva2VuIG1hcC5cbi8vLyBAcGFyYW0ge0xpc3R9ICRwcmVmaXggVGhlIGNvbXBvbmVudCBwcmVmaXggdG8gZ2V0IHRoZSB0b2tlbiB2YWx1ZXMgZm9yLlxuLy8vIEBwYXJhbSB7QXJnTGlzdH0gQW55IGFkZGl0aW9uYWwgb3B0aW9uc1xuLy8vICAgQ3VycmVudGx5IHRoZSBhZGRpdGlvbmFsIHN1cHBvcnRlZCBvcHRpb25zIGFyZTpcbi8vICAgICAtICRjb2xvci12YXJpYW50IC0gVGhlIGNvbG9yIHZhcmlhbnQgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50XG4vLyAgICAgLSAkZW1pdC1vdmVycmlkZXMtb25seSAtIFdoZXRoZXIgdG8gZW1pdCAqb25seSogdGhlIG92ZXJyaWRlcyBmb3IgdGhlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljIGNvbG9yIHZhcmlhbnQsIG9yIGFsbCBjb2xvciBzdHlsZXMuIERlZmF1bHRzIHRvIGZhbHNlLlxuLy8vIEB0aHJvd3MgSWYgZ2l2ZW4gb3B0aW9ucyBhcmUgaW52YWxpZFxuLy8vIEByZXR1cm4ge01hcH0gVGhlIHRva2VuIHZhbHVlcyBmb3IgdGhlIHJlcXVlc3RlZCBjb21wb25lbnQuXG5AZnVuY3Rpb24gZ2V0LXRva2Vucy1mb3IoJHRva2VucywgJHByZWZpeCwgJG9wdGlvbnMuLi4pIHtcbiAgJG9wdGlvbnM6IHNhc3MtdXRpbHMudmFsaWRhdGUta2V5d29yZC1hcmdzKCRvcHRpb25zLCAoY29sb3ItdmFyaWFudCwgZW1pdC1vdmVycmlkZXMtb25seSkpO1xuICBAaWYgJHRva2VucyA9PSAoKSB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuICAkdmFsdWVzOiBtYXAuZ2V0KCR0b2tlbnMsICRwcmVmaXgpO1xuICAkY29sb3ItdmFyaWFudDogbWFwLmdldCgkb3B0aW9ucywgY29sb3ItdmFyaWFudCk7XG4gICRlbWl0LW92ZXJyaWRlcy1vbmx5OiBtYXAuZ2V0KCRvcHRpb25zLCBlbWl0LW92ZXJyaWRlcy1vbmx5KTtcbiAgQGlmICRjb2xvci12YXJpYW50ID09IG51bGwge1xuICAgIEByZXR1cm4gJHZhbHVlcztcbiAgfVxuICAkb3ZlcnJpZGVzOiBtYXAuZ2V0KCR0b2tlbnMsIGxpc3QuYXBwZW5kKCRwcmVmaXgsICRjb2xvci12YXJpYW50KSk7XG4gIEBpZiAkb3ZlcnJpZGVzID09IG51bGwge1xuICAgICR2YXJpYW50czogX3N1cHBvcnRlZC1jb2xvci12YXJpYW50cygkdG9rZW5zLCAkcHJlZml4KTtcbiAgICAkc2Vjb25kYXJ5LW1lc3NhZ2U6IGlmKFxuICAgICAgJHZhcmlhbnRzID09ICgpLFxuICAgICAgJ01peGluIGRvZXMgbm90IHN1cHBvcnQgY29sb3IgdmFyaWFudHMnLFxuICAgICAgJ1N1cHBvcnRlZCBjb2xvciB2YXJpYW50cyBhcmU6ICN7JHZhcmlhbnRzfSdcbiAgICApO1xuXG4gICAgQGVycm9yICdJbnZhbGlkIGNvbG9yIHZhcmlhbnQ6ICN7JGNvbG9yLXZhcmlhbnR9LiAjeyRzZWNvbmRhcnktbWVzc2FnZX0uJztcbiAgfVxuICBAcmV0dXJuIGlmKCRlbWl0LW92ZXJyaWRlcy1vbmx5LCAkb3ZlcnJpZGVzLCBtYXAubWVyZ2UoJHZhbHVlcywgJG92ZXJyaWRlcykpO1xufVxuXG4vLy8gRW1pdHMgbmV3IHRva2VuIHZhbHVlcyBmb3IgdGhlIGdpdmVuIHRva2VuIG92ZXJyaWRlcy5cbi8vLyBWZXJpZmllcyB0aGF0IHRoZSBvdmVycmlkZXMgcGFzc2VkIGluIGFyZSB2YWxpZCB0b2tlbnMuXG4vLy8gTmV3IHRva2VuIHZhbHVlcyBhcmUgZW1pdHRlZCB1bmRlciB0aGUgY3VycmVudCBzZWxlY3RvciBvciByb290LlxuQG1peGluIGJhdGNoLWNyZWF0ZS10b2tlbi12YWx1ZXMoJG92ZXJyaWRlczogKCksICRuYW1lc3BhY2UtY29uZmlncy4uLikge1xuICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAkcHJlZml4ZWQtbmFtZS1kYXRhOiAoKTtcbiAgICAkdW5wcmVmaXhlZC1uYW1lLWRhdGE6ICgpO1xuICAgICRhbGwtbmFtZXM6ICgpO1xuXG4gICAgQGVhY2ggJGNvbmZpZyBpbiAkbmFtZXNwYWNlLWNvbmZpZ3Mge1xuICAgICAgJG5hbWVzcGFjZTogbWFwLmdldCgkY29uZmlnLCBuYW1lc3BhY2UpO1xuICAgICAgJHByZWZpeDogaWYobWFwLmhhcy1rZXkoJGNvbmZpZywgcHJlZml4KSwgbWFwLmdldCgkY29uZmlnLCBwcmVmaXgpLCAnJyk7XG4gICAgICAkdG9rZW5zOiBfZmlsdGVyLW51bGxzKG1hcC5nZXQoJGNvbmZpZywgdG9rZW5zKSk7XG4gICAgICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluICR0b2tlbnMge1xuICAgICAgICAkcHJlZml4ZWQtbmFtZTogJHByZWZpeCArICRuYW1lO1xuICAgICAgICAkYWxsLW5hbWVzOiBsaXN0LmFwcGVuZCgkYWxsLW5hbWVzLCAkcHJlZml4ZWQtbmFtZSwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgICAgICBAaWYgbWFwLmhhcy1rZXkoJHByZWZpeGVkLW5hbWUtZGF0YSwgJHByZWZpeGVkLW5hbWUpIHtcbiAgICAgICAgICBAZXJyb3IgI3tcbiAgICAgICAgICAnRXJyb3Igb3ZlcnJpZGluZyB0b2tlbjogQW1iaWd1b3VzIHRva2VuIG5hbWUgYCdcbiAgICAgICAgfSN7XG4gICAgICAgICAgJHByZWZpeGVkLW5hbWVcbiAgICAgICAgfSN7XG4gICAgICAgICAgJ2AgZXhpc3RzIGluIG11bHRpcGxlIG5hbWVzcGFjZXM6IGAoJ1xuICAgICAgICB9I3tcbiAgICAgICAgICBsaXN0Lm50aChtYXAuZ2V0KCRwcmVmaXhlZC1uYW1lLWRhdGEsICRwcmVmaXhlZC1uYW1lKSwgMSlcbiAgICAgICAgfSN7XG4gICAgICAgICAgJylgIGFuZCBgKCdcbiAgICAgICAgfSN7XG4gICAgICAgICAgJG5hbWVzcGFjZVxuICAgICAgICB9I3tcbiAgICAgICAgICAnKWAnXG4gICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHByZWZpeGVkLW5hbWUtZGF0YTogbWFwLnNldCgkcHJlZml4ZWQtbmFtZS1kYXRhLCAkcHJlZml4ZWQtbmFtZSwgKCRuYW1lc3BhY2UsICRuYW1lKSk7XG4gICAgICAgICR1bnByZWZpeGVkLWRhdGE6IG1hcC5oYXMta2V5KCR1bnByZWZpeGVkLW5hbWUtZGF0YSwgJG5hbWUpIGFuZFxuICAgICAgICAgIG1hcC5nZXQoJHVucHJlZml4ZWQtbmFtZS1kYXRhLCAkbmFtZSkgb3JcbiAgICAgICAgICAoKTtcbiAgICAgICAgJHVucHJlZml4ZWQtZGF0YTogbGlzdC5hcHBlbmQoJHVucHJlZml4ZWQtZGF0YSwgKCRuYW1lc3BhY2UsICRwcmVmaXhlZC1uYW1lKSk7XG4gICAgICAgICR1bnByZWZpeGVkLW5hbWUtZGF0YTogbWFwLnNldCgkdW5wcmVmaXhlZC1uYW1lLWRhdGEsICRuYW1lLCAkdW5wcmVmaXhlZC1kYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluICRvdmVycmlkZXMge1xuICAgICAgQGlmIG1hcC5oYXMta2V5KCRwcmVmaXhlZC1uYW1lLWRhdGEsICRuYW1lKSB7XG4gICAgICAgICRkYXRhOiBtYXAuZ2V0KCRwcmVmaXhlZC1uYW1lLWRhdGEsICRuYW1lKTtcbiAgICAgICAgJG5hbWVzcGFjZTogbGlzdC5udGgoJGRhdGEsIDEpO1xuICAgICAgICAkbmFtZTogbGlzdC5udGgoJGRhdGEsIDIpO1xuICAgICAgICBAaW5jbHVkZSBjcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgICRuYW1lc3BhY2UsXG4gICAgICAgICAgKFxuICAgICAgICAgICAgJG5hbWU6ICR2YWx1ZSxcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IEBlbHNlIGlmIChtYXAuaGFzLWtleSgkdW5wcmVmaXhlZC1uYW1lLWRhdGEsICRuYW1lKSkge1xuICAgICAgICAkZGF0YWxpc3Q6IG1hcC5nZXQoJHVucHJlZml4ZWQtbmFtZS1kYXRhLCAkbmFtZSk7XG4gICAgICAgICRwcmVmaXhlZC1uYW1lczogKCk7XG4gICAgICAgIEBlYWNoICRkYXRhIGluICRkYXRhbGlzdCB7XG4gICAgICAgICAgJG5hbWVzcGFjZTogbGlzdC5udGgoJGRhdGEsIDEpO1xuICAgICAgICAgICRwcmVmaXhlZC1uYW1lczogbGlzdC5hcHBlbmQoJHByZWZpeGVkLW5hbWVzLCBsaXN0Lm50aCgkZGF0YSwgMiksICRzZXBhcmF0b3I6IGNvbW1hKTtcbiAgICAgICAgICBAaW5jbHVkZSBjcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgICAgJG5hbWVzcGFjZSxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgJG5hbWU6ICR2YWx1ZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIEB3YXJuICN7XG4gICAgICAgICdUb2tlbiBgJ1xuICAgICAgfSN7XG4gICAgICAgICRuYW1lXG4gICAgICB9I3tcbiAgICAgICAgJ2AgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbHRlcm5hdGl2ZXM6ICdcbiAgICAgIH0je1xuICAgICAgICAkcHJlZml4ZWQtbmFtZXNcbiAgICAgIH07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgQGVycm9yICN7J0ludmFsaWQgdG9rZW4gbmFtZSBgJ30jeyRuYW1lfSN7J2AuICd9I3snVmFsaWQgdG9rZW5zIGFyZTogJ30jeyRhbGwtbmFtZXN9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLy8gRmlsdGVycyBrZXlzIHdpdGggYSBudWxsIHZhbHVlIG91dCBvZiB0aGUgbWFwLlxuLy8vIEBwYXJhbSB7TWFwfSAkbWFwIFRoZSBtYXAgdG8gZmlsdGVyLlxuLy8vIEByZXR1cm4ge01hcH0gVGhlIGdpdmVuIG1hcCB3aXRoIGFsbCBvZiB0aGUgbnVsbCBrZXlzIGZpbHRlcmVkIG91dC5cbkBmdW5jdGlvbiBfZmlsdGVyLW51bGxzKCRtYXApIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICRrZXksICR2YWwgaW4gJG1hcCB7XG4gICAgQGlmICR2YWwgIT0gbnVsbCB7XG4gICAgICAkcmVzdWx0OiBtYXAuc2V0KCRyZXN1bHQsICRrZXksICR2YWwpO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG4iLCJAdXNlIFwiLi92YXJpYWJsZXNcIjtcblxuLnplbGYtYnV0dG9uLWV4dGVybmFsLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnplbGYtYnV0dG9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgJi0tbWFyZ2luLXJpZ2h0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGhpbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLnplbGYtYnV0dG9uLS1oeXBlcmxpbmsge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW91dGxpbmVkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIH1cbn1cblxuLnplbGYtaWNvbi1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIG1pbi13aWR0aDogNTZweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB3aWR0aDogNTZweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgJi0tNDAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuXG4gICAgICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiIsIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4uYW5pbWF0ZWQtdGFicyB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzdweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX3N3aXRjaCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICYtLWxlZnQ6YWZ0ZXIge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1yaWdodDphZnRlciB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjcuNXB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IGN1YmljLWJlemllcigwLjg4LCAtMC4zNSwgMC41NjUsIDEuMzUpIDAuM3M7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbmltYXRlZC10YWIge1xuICAgICAgICAgICAgY29sb3I6ICM4NTg1ODU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNy41cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXI6bm90KC5hbmltYXRlZC10YWItLWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGQzZDQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLS1hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IHZhcmlhYmxlcy4kbWluU21hbGwpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yaXBwbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNiNTg5ZjA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAycyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICAgICAgYW5pbWF0aW9uOiByaXBwbGUgMC44cyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgfVxuXG4gICAgJi0tMjY4IHtcbiAgICAgICAgd2lkdGg6IDI2OHB4O1xuICAgICAgICBoZWlnaHQ6IDI2OHB4O1xuXG4gICAgICAgIC5yaXBwbGUge1xuICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgI2I1ODlmMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaXBwbGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICBib3JkZXItY29sb3I6ICNiNTg5ZjA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2YwZDNkNDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2I1ODlmMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgY2hlY2tib3gtYm91bmNlIHtcbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4yKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuOSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 23791:
/*!******************************************!*\
  !*** ./src/app/guards/password.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordGuard: () => (/* binding */ PasswordGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var app_vault_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/vault.service */ 19519);



const PasswordGuard = route => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const _vaultService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(app_vault_service__WEBPACK_IMPORTED_MODULE_0__.VaultService);
  if (!_vaultService.password) {
    const returnPath = route?.queryParams?.return;
    router.navigate(["/security/password"], {
      replaceUrl: true,
      queryParams: {
        return: returnPath
      }
    });
    return false;
  }
  return true;
};

/***/ }),

/***/ 27451:
/*!***************************************************!*\
  !*** ./src/app/interceptors/interceptor.model.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISABLE_GLOBAL_EXCEPTION_HANDLING: () => (/* binding */ DISABLE_GLOBAL_EXCEPTION_HANDLING)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 57878);

const DISABLE_GLOBAL_EXCEPTION_HANDLING = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => false);

/***/ }),

/***/ 35358:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 85637,
	"./af.js": 85637,
	"./ar": 6777,
	"./ar-dz": 74508,
	"./ar-dz.js": 74508,
	"./ar-kw": 67504,
	"./ar-kw.js": 67504,
	"./ar-ly": 95373,
	"./ar-ly.js": 95373,
	"./ar-ma": 92412,
	"./ar-ma.js": 92412,
	"./ar-ps": 78823,
	"./ar-ps.js": 78823,
	"./ar-sa": 36670,
	"./ar-sa.js": 36670,
	"./ar-tn": 36448,
	"./ar-tn.js": 36448,
	"./ar.js": 6777,
	"./az": 23009,
	"./az.js": 23009,
	"./be": 28299,
	"./be.js": 28299,
	"./bg": 4685,
	"./bg.js": 4685,
	"./bm": 11171,
	"./bm.js": 11171,
	"./bn": 23590,
	"./bn-bd": 5841,
	"./bn-bd.js": 5841,
	"./bn.js": 23590,
	"./bo": 54309,
	"./bo.js": 54309,
	"./br": 54130,
	"./br.js": 54130,
	"./bs": 8033,
	"./bs.js": 8033,
	"./ca": 55294,
	"./ca.js": 55294,
	"./cs": 53028,
	"./cs.js": 53028,
	"./cv": 5807,
	"./cv.js": 5807,
	"./cy": 70342,
	"./cy.js": 70342,
	"./da": 38269,
	"./da.js": 38269,
	"./de": 11489,
	"./de-at": 42123,
	"./de-at.js": 42123,
	"./de-ch": 17757,
	"./de-ch.js": 17757,
	"./de.js": 11489,
	"./dv": 28152,
	"./dv.js": 28152,
	"./el": 7687,
	"./el.js": 7687,
	"./en-au": 46668,
	"./en-au.js": 46668,
	"./en-ca": 76798,
	"./en-ca.js": 76798,
	"./en-gb": 53615,
	"./en-gb.js": 53615,
	"./en-ie": 91364,
	"./en-ie.js": 91364,
	"./en-il": 79907,
	"./en-il.js": 79907,
	"./en-in": 70533,
	"./en-in.js": 70533,
	"./en-nz": 33190,
	"./en-nz.js": 33190,
	"./en-sg": 51096,
	"./en-sg.js": 51096,
	"./eo": 3962,
	"./eo.js": 3962,
	"./es": 37726,
	"./es-do": 65010,
	"./es-do.js": 65010,
	"./es-mx": 63654,
	"./es-mx.js": 63654,
	"./es-us": 59043,
	"./es-us.js": 59043,
	"./es.js": 37726,
	"./et": 25343,
	"./et.js": 25343,
	"./eu": 90728,
	"./eu.js": 90728,
	"./fa": 60787,
	"./fa.js": 60787,
	"./fi": 71771,
	"./fi.js": 71771,
	"./fil": 45335,
	"./fil.js": 45335,
	"./fo": 69761,
	"./fo.js": 69761,
	"./fr": 1670,
	"./fr-ca": 28991,
	"./fr-ca.js": 28991,
	"./fr-ch": 97280,
	"./fr-ch.js": 97280,
	"./fr.js": 1670,
	"./fy": 24203,
	"./fy.js": 24203,
	"./ga": 69858,
	"./ga.js": 69858,
	"./gd": 38605,
	"./gd.js": 38605,
	"./gl": 27365,
	"./gl.js": 27365,
	"./gom-deva": 33896,
	"./gom-deva.js": 33896,
	"./gom-latn": 95587,
	"./gom-latn.js": 95587,
	"./gu": 97950,
	"./gu.js": 97950,
	"./he": 92029,
	"./he.js": 92029,
	"./hi": 51897,
	"./hi.js": 51897,
	"./hr": 29816,
	"./hr.js": 29816,
	"./hu": 22253,
	"./hu.js": 22253,
	"./hy-am": 28196,
	"./hy-am.js": 28196,
	"./id": 51307,
	"./id.js": 51307,
	"./is": 95474,
	"./is.js": 95474,
	"./it": 23099,
	"./it-ch": 45807,
	"./it-ch.js": 45807,
	"./it.js": 23099,
	"./ja": 19127,
	"./ja.js": 19127,
	"./jv": 30182,
	"./jv.js": 30182,
	"./ka": 10758,
	"./ka.js": 10758,
	"./kk": 93444,
	"./kk.js": 93444,
	"./km": 72034,
	"./km.js": 72034,
	"./kn": 46223,
	"./kn.js": 46223,
	"./ko": 83064,
	"./ko.js": 83064,
	"./ku": 8714,
	"./ku-kmr": 10961,
	"./ku-kmr.js": 10961,
	"./ku.js": 8714,
	"./ky": 12062,
	"./ky.js": 12062,
	"./lb": 84796,
	"./lb.js": 84796,
	"./lo": 19279,
	"./lo.js": 19279,
	"./lt": 106,
	"./lt.js": 106,
	"./lv": 11840,
	"./lv.js": 11840,
	"./me": 42240,
	"./me.js": 42240,
	"./mi": 13588,
	"./mi.js": 13588,
	"./mk": 15518,
	"./mk.js": 15518,
	"./ml": 37823,
	"./ml.js": 37823,
	"./mn": 98657,
	"./mn.js": 98657,
	"./mr": 61285,
	"./mr.js": 61285,
	"./ms": 43014,
	"./ms-my": 86253,
	"./ms-my.js": 86253,
	"./ms.js": 43014,
	"./mt": 20167,
	"./mt.js": 20167,
	"./my": 47940,
	"./my.js": 47940,
	"./nb": 50014,
	"./nb.js": 50014,
	"./ne": 49023,
	"./ne.js": 49023,
	"./nl": 34208,
	"./nl-be": 71412,
	"./nl-be.js": 71412,
	"./nl.js": 34208,
	"./nn": 81354,
	"./nn.js": 81354,
	"./oc-lnc": 40870,
	"./oc-lnc.js": 40870,
	"./pa-in": 80389,
	"./pa-in.js": 80389,
	"./pl": 7342,
	"./pl.js": 7342,
	"./pt": 34774,
	"./pt-br": 73003,
	"./pt-br.js": 73003,
	"./pt.js": 34774,
	"./ro": 85333,
	"./ro.js": 85333,
	"./ru": 73451,
	"./ru.js": 73451,
	"./sd": 43921,
	"./sd.js": 43921,
	"./se": 59682,
	"./se.js": 59682,
	"./si": 80582,
	"./si.js": 80582,
	"./sk": 4348,
	"./sk.js": 4348,
	"./sl": 95337,
	"./sl.js": 95337,
	"./sq": 39358,
	"./sq.js": 39358,
	"./sr": 50683,
	"./sr-cyrl": 69382,
	"./sr-cyrl.js": 69382,
	"./sr.js": 50683,
	"./ss": 51156,
	"./ss.js": 51156,
	"./sv": 29855,
	"./sv.js": 29855,
	"./sw": 18536,
	"./sw.js": 18536,
	"./ta": 15373,
	"./ta.js": 15373,
	"./te": 37809,
	"./te.js": 37809,
	"./tet": 61297,
	"./tet.js": 61297,
	"./tg": 92527,
	"./tg.js": 92527,
	"./th": 85862,
	"./th.js": 85862,
	"./tk": 79331,
	"./tk.js": 79331,
	"./tl-ph": 44387,
	"./tl-ph.js": 44387,
	"./tlh": 3592,
	"./tlh.js": 3592,
	"./tr": 79732,
	"./tr.js": 79732,
	"./tzl": 99570,
	"./tzl.js": 99570,
	"./tzm": 83553,
	"./tzm-latn": 7699,
	"./tzm-latn.js": 7699,
	"./tzm.js": 83553,
	"./ug-cn": 25674,
	"./ug-cn.js": 25674,
	"./uk": 69974,
	"./uk.js": 69974,
	"./ur": 45773,
	"./ur.js": 45773,
	"./uz": 357,
	"./uz-latn": 77135,
	"./uz-latn.js": 77135,
	"./uz.js": 357,
	"./vi": 20043,
	"./vi.js": 20043,
	"./x-pseudo": 40767,
	"./x-pseudo.js": 40767,
	"./yo": 80150,
	"./yo.js": 80150,
	"./zh-cn": 21828,
	"./zh-cn.js": 21828,
	"./zh-hk": 86644,
	"./zh-hk.js": 86644,
	"./zh-mo": 79305,
	"./zh-mo.js": 79305,
	"./zh-tw": 31860,
	"./zh-tw.js": 31860
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 43607:
/*!*******************************************!*\
  !*** ./src/app/guards/zelf-name.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfNameGuard: () => (/* binding */ ZelfNameGuard)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/wallet.service */ 69556);
/* harmony import */ var app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/zelf-name-service.service */ 56148);





const ZelfNameGuard = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const _walletService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_wallet_service__WEBPACK_IMPORTED_MODULE_1__.WalletService);
    const wallet = yield _walletService.getCurrentWallet();
    if (wallet) return true;
    const _zelfNameService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_2__.ZelfNameService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    const zelfNameObject = yield _zelfNameService.getZelfNameObject();
    const zelfName = yield _zelfNameService.getZelfName();
    if (!zelfNameObject?.ethAddress && !zelfName) {
      router.navigate(["/welcome"]);
      return false;
    }
    return true;
  });
  return function ZelfNameGuard() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 44796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 39545);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 57878);
/* harmony import */ var app_interceptors_interceptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/interceptors/interceptor.model */ 27451);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_chrome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/chrome.service */ 85043);








class AuthService {
  _httpClient;
  _chromeService;
  _accessToken = "";
  _accessTokenExpiresAt = 0;
  constructor(_httpClient, _chromeService) {
    this._httpClient = _httpClient;
    this._chromeService = _chromeService;
  }
  _generateFingerprint() {
    const fingerprintParts = [navigator.userAgent, navigator.language, screen.colorDepth.toString(), screen.width.toString(), screen.height.toString(), navigator.platform, navigator.hardwareConcurrency.toString(), Intl.DateTimeFormat().resolvedOptions().timeZone];
    return fingerprintParts.join("|");
  }
  _isValidToken() {
    if (!this._accessToken || !this._accessTokenExpiresAt) return false;
    return moment__WEBPACK_IMPORTED_MODULE_1___default().unix(this._accessTokenExpiresAt).local().isAfter(moment__WEBPACK_IMPORTED_MODULE_1___default()());
  }
  _requestAuthToken(fingerprint) {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _request(_this._httpClient.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/api/sessions`, {
        identifier: _simpleHash(fingerprint)
      }, {
        headers: {},
        context: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpContext().set(app_interceptors_interceptor_model__WEBPACK_IMPORTED_MODULE_2__.DISABLE_GLOBAL_EXCEPTION_HANDLING, true)
      }));
    })();
  }
  checkAccessToken() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2._accessToken || !_this2._accessTokenExpiresAt) {
        _this2._accessToken = (yield _this2._chromeService.getItem("accessToken")) || "";
        _this2._accessTokenExpiresAt = (yield _this2._chromeService.getItem("accessTokenExpiresAt")) || 0;
      }
      const isValidToken = _this2._isValidToken();
      if (isValidToken) return _this2._accessToken;
      const fingerprint = _this2._generateFingerprint();
      const newAuthToken = yield _this2._requestAuthToken(fingerprint);
      _this2._accessToken = newAuthToken.data.token;
      _this2._accessTokenExpiresAt = newAuthToken.data.expiresAt;
      yield _this2._chromeService.setItem("accessToken", newAuthToken.data.token);
      yield _this2._chromeService.setItem("accessTokenExpiresAt", newAuthToken.data.expiresAt);
      return _this2._accessToken;
    })();
  }
  static ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](app_chrome_service__WEBPACK_IMPORTED_MODULE_4__.ChromeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: "root"
  });
}
const _request = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (httpCall) {
    return httpCall.toPromise().then(response => response).catch(error => {
      throw error;
    });
  });
  return function _request(_x) {
    return _ref.apply(this, arguments);
  };
}();
const _simpleHash = input => {
  let hash = 0;
  if (input.length === 0) return hash.toString();
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString();
};

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  appUrl: "https://keys.zelf.world",
  baseUrl: "/index.html",
  apiUrl: "https://api.zelf.world",
  captchaKey: "6LcAhbIqAAAAANEZltlDqWutQ_kcujZ7IUKIQiK1",
  keysApiUrl: "https://keys-api.zelf.world",
  // apiUrl: "https://api.zelf.world",
  // testnetAddress: "tb1phkg7rlfp8d6zkk699rlacnwyuc9g2jh02ehscztncuew4c4y5mkstxw2c9",
  testnetAddress: "",
  networks: {
    ethereum: "sepolia",
    avalanche: "avalanche",
    solana: "solana"
  },
  bitcoin: {
    mainnet: "https://broken-few-valley.btc.quiknode.pro/b357e9fc23471664e4554a4b973b48df9f0d1b33/",
    testnet: "https://little-old-model.btc-testnet.quiknode.pro/bc869f0ab39ee934fa4369cb0c83254639c08ae7/"
  },
  ethereumRpc: {
    mainnet: "https://compatible-skilled-dew.quiknode.pro/817e4f1a5f57dfe63d5fab4ed729c8afcbd87363/",
    testnet: "https://practical-newest-sailboat.ethereum-sepolia.quiknode.pro/4206bb8d81ddc0bb93acf60f3c76608d7e21f975/"
  },
  polygonRpc: {
    mainnet: "https://responsive-wandering-choice.matic.quiknode.pro/d4a8a38223c463bd108ee7e6c38e68b0ac736e27/"
  },
  avalancheRpc: {
    mainnet: "https://wild-bitter-meadow.avalanche-mainnet.quiknode.pro/e2565749ca44c2873fe2a0a747f5ac68ae7eb14f/ext/bc/C/rpc/"
  },
  binanceRpc: {
    mainnet: "https://dark-rough-wildflower.bsc.quiknode.pro/82a34b9b4cb74f29bc8fcc2ea965657c631d6c3a/"
  },
  solanaRpc: {
    mainnet: "https://flashy-ultra-choice.solana-mainnet.quiknode.pro/dfa09ac3f7fe0fca5ac6cd762ec0d3a0db52712c/"
  },
  suiRpc: {
    mainnet: "https://fullnode.mainnet.sui.io:443",
    testnet: "https://fullnode.testnet.sui.io:443",
    devnet: "https://fullnode.devnet.sui.io:443"
  }
};

/***/ }),

/***/ 45965:
/*!***************************!*\
  !*** ./src/app/wallet.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Asset: () => (/* binding */ Asset),
/* harmony export */   BitcoinTransactionModel: () => (/* binding */ BitcoinTransactionModel),
/* harmony export */   EthTransactionModel: () => (/* binding */ EthTransactionModel),
/* harmony export */   SuiTransactionModel: () => (/* binding */ SuiTransactionModel),
/* harmony export */   SwapData: () => (/* binding */ SwapData),
/* harmony export */   TransactionData: () => (/* binding */ TransactionData),
/* harmony export */   TransactionDetailModel: () => (/* binding */ TransactionDetailModel),
/* harmony export */   TransactionModel: () => (/* binding */ TransactionModel),
/* harmony export */   WalletModel: () => (/* binding */ WalletModel),
/* harmony export */   WalletPublicDataModel: () => (/* binding */ WalletPublicDataModel)
/* harmony export */ });
class Asset {
  asset;
  balance;
  fiatBalance;
  price;
  constructor(data) {
    this.asset = data.asset || "NA";
    this.balance = data.balance !== undefined && data.balance !== null ? Number(parseFloat(data.balance).toFixed(7)) : Number((data.fiatBalance / data.price).toFixed(6));
    this.fiatBalance = data.fiatBalance;
    this.price = data.price || 0; // hardcoded price
  }
}
class TransactionModel {
  age;
  amount; // 0.01
  asset; // ETH
  balance; // 0.05
  block;
  confirmations;
  date;
  fiatAmount;
  fiatBalance; // 199 usd
  fiatTotal; // 38.28
  from;
  gasFee; // 0.28
  hash;
  image;
  method;
  network; // Ethereum
  price; // 3800
  receiver;
  sender;
  status;
  symbol;
  to;
  tokenType; // ERC-20
  traffic;
  type;
  targetAddress;
  targetAmount;
  targetImage;
  targetNetwork;
  targetSymbol;
  targetToken;
  constructor(data) {
    this.age = data.age || "";
    this.amount = Number(data.amount || 0);
    this.asset = data.asset || data.symbol || data.token?.symbol || "";
    this.balance = data.balance || data.token?.amount || 0;
    this.block = data.block || "";
    this.confirmations = data.confirmations || "";
    this.date = data.date || "";
    this.fiatAmount = Number(data.fiatAmount || 0);
    this.fiatBalance = data.fiatBalance || data.token?.fiatBalance || 0;
    this.fiatTotal = data.fiatTotal || 0;
    this.from = data.from || data.sender || "";
    this.gasFee = data.gasFee || 0;
    this.hash = data.hash || "";
    this.image = data.image || "";
    this.method = data.method || "";
    this.network = data.network || data.token?.network || "";
    this.price = data.price || data.token?.price || 0;
    this.receiver = data.receiver || data.to || null;
    this.sender = data.sender || data.from || null;
    this.status = data.status || "";
    this.to = data.to || data.receiver || "";
    this.tokenType = data.tokenType || data.token?.tokenType || "";
    this.traffic = data.traffic || "";
    this.type = data.type || "";
    this.targetAddress = data.targetAddress || data.targetToken || "";
    this.targetAmount = data.targetAmount || data.token?.amount || 0;
    this.targetImage = data.targetImage || data.token?.image || "";
    this.targetNetwork = data.targetNetwork || data.token?.network || "";
    this.targetSymbol = data.targetSymbol || data.token?.symbol || "";
  }
  get total() {
    return Number(this.amount) + Number(this.gasFee);
  }
}
class BitcoinTransactionModel {
  age;
  amount;
  amountSats;
  asset;
  block;
  date;
  decimals;
  fiatAmount;
  from;
  hash;
  logoURI;
  networkFeePayer;
  status;
  to;
  traffic;
  txnFee;
  txnFeeSats;
  constructor(data) {
    this.age = data.age || "";
    this.amount = data.amount || "";
    this.amountSats = data.amountSats || 0;
    this.asset = data.asset || "";
    this.block = data.block || "";
    this.date = data.date || "";
    this.decimals = data.decimals || 0;
    this.fiatAmount = data.fiatAmount || "";
    this.from = data.from || "";
    this.hash = data.hash || "";
    this.logoURI = data.logoURI || "";
    this.networkFeePayer = data.networkFeePayer || "";
    this.status = data.status || "";
    this.to = data.to || [];
    this.traffic = data.traffic || "";
    this.txnFee = data.txnFee || "";
    this.txnFeeSats = data.txnFeeSats || "";
  }
  toTransaction() {
    return new TransactionModel({
      age: this.age,
      amount: Number(this.amount),
      asset: this.asset,
      date: new Date(this.date),
      network: "bitcoin",
      fiatAmount: 0,
      from: this.from,
      gasFee: this.txnFee,
      hash: this.hash,
      status: this.status.toLowerCase(),
      to: this.to[0],
      tokenType: "BTC",
      type: this.traffic === "IN" ? "receive" : "send"
    });
  }
}
class SuiTransactionModel {
  age;
  amount;
  block;
  computationCostFee;
  confirmedNumber;
  date;
  from;
  gasBudget;
  gasPayment;
  gasPrice;
  hash;
  nonRefundableStorageFee;
  status;
  symbol = "SUI";
  to;
  tokenTransferNum;
  txFee;
  constructor(data) {
    this.age = data.age || "";
    this.amount = Number(data.amount) || 0;
    this.block = data.block || "";
    this.computationCostFee = Number(data.computationCostFee) || 0;
    this.confirmedNumber = Number(data.confirmedNumber) || 0;
    this.date = data.date || "";
    this.from = data.from || "";
    this.gasBudget = Number(data.gasBudget) || 0;
    this.gasPayment = data.gasPayment || "";
    this.gasPrice = Number(data.gasPrice) || 0;
    this.hash = data.hash || "";
    this.nonRefundableStorageFee = Number(data.nonRefundableStorageFee) || 0;
    this.status = data.status || "";
    this.symbol = data.symbol || "SUI";
    this.to = data.to?.length ? data.to[0] : [];
    this.tokenTransferNum = Number(data.tokenTransferNum) || 0;
    this.txFee = Number(data.txFee) || 0;
  }
  toTransaction() {
    return new TransactionModel({
      age: this.age,
      amount: Number(this.amount),
      asset: this.symbol,
      date: new Date(this.date),
      fiatAmount: 0,
      from: this.from,
      gasFee: this.gasPrice,
      hash: this.hash,
      status: this.status.toLowerCase(),
      to: this.to,
      tokenType: "SUI"
    });
  }
}
class EthTransactionModel {
  block;
  from;
  gasPrice;
  gweiETH;
  id;
  observation;
  status;
  symbol = "ETH";
  timestamp;
  to;
  transactionFeeDolar;
  transactionFeeETH;
  valueDolar;
  valueETH;
  constructor(data) {
    this.block = data.block || "";
    this.from = data.from || "";
    this.gasPrice = data.gasPrice || "";
    this.gweiETH = data.gweiETH || "";
    this.id = data.id || "";
    this.observation = data.observation || "";
    this.status = data.status || "";
    this.symbol = data.symbol || "ETH";
    this.timestamp = data.timestamp || "";
    this.to = data.to || "";
    this.transactionFeeDolar = data.transactionFeeDolar || "";
    this.transactionFeeETH = data.transactionFeeETH || "";
    this.valueDolar = data.valueDolar || "";
    this.valueETH = data.valueETH || "";
  }
  toTransaction() {
    return new TransactionModel({
      age: this.timestamp?.split("(")[0].trim(),
      amount: Number(this.valueETH),
      asset: this.symbol,
      block: this.block,
      date: this.timestamp?.split("(")[1].split(")")[0].trim(),
      fiatAmount: Number(this.valueDolar),
      from: this.from,
      gasFee: this.transactionFeeETH,
      hash: this.id,
      status: this.status.toLowerCase(),
      to: this.to,
      tokenType: "ERC-20"
    });
  }
}
class TransactionDetailModel {
  age;
  amount;
  block;
  date;
  fiatAmount;
  from;
  gasPrice;
  gwei;
  hash;
  id;
  image;
  network;
  observation;
  status;
  symbol;
  timestamp;
  to;
  transactionFee;
  transactionFeeFiat;
  transactionType;
  tokensTransferred;
  constructor(data) {
    this.age = data.age || "";
    this.amount = data.amount || "";
    this.block = data.block || "";
    this.date = data.date || "";
    this.fiatAmount = data.fiatAmount || "";
    this.from = data.from || "";
    this.gasPrice = data.gasPrice || "";
    this.gwei = data.gwei || "";
    this.hash = data.hash || "";
    this.id = data.id || "";
    this.image = data.image || "";
    this.network = data.network || "";
    this.observation = data.observation || "";
    this.status = `${data.status}`.toLowerCase();
    this.symbol = data.symbol || "";
    this.timestamp = data.timestamp || "";
    this.to = data.to || "";
    this.tokensTransferred = data.tokensTransferred || [];
    this.transactionFee = data.transactionFee || "";
    this.transactionFeeFiat = data.transactionFeeFiat || "";
    this.transactionType = (data.transactionType || "").toLowerCase();
  }
  toTransaction() {
    const transactionData = {
      age: this.age,
      amount: Number(this.amount),
      asset: this.symbol,
      block: this.block,
      date: this.date,
      fiatAmount: Number(this.fiatAmount),
      from: this.from,
      gasFee: this.transactionFee,
      hash: this.id,
      image: this.image,
      network: this.network,
      status: this.status.toLowerCase(),
      to: this.to,
      tokenType: "ERC-20",
      type: this.transactionType
    };
    let additionalData = {};
    if (this.transactionType === "swap" || this.transactionType === "call") {
      transactionData.type = "swap";
      const firstTokenTransfer = this.tokensTransferred[0];
      const lastTokenTransfer = this.tokensTransferred[this.tokensTransferred.length - 1];
      additionalData = {
        ...(firstTokenTransfer.network === "solana" ? {
          amount: firstTokenTransfer.amount,
          asset: firstTokenTransfer.symbol,
          image: firstTokenTransfer.icon,
          network: firstTokenTransfer.network,
          to: firstTokenTransfer.to
        } : {}),
        targetAddress: lastTokenTransfer.to,
        targetAmount: lastTokenTransfer.amount,
        targetImage: lastTokenTransfer.icon,
        targetNetwork: lastTokenTransfer.network,
        targetSymbol: lastTokenTransfer.symbol,
        targetToken: lastTokenTransfer.token
      };
    } else if (this.tokensTransferred.length > 0) {
      const lastTokenTransfer = this.tokensTransferred[this.tokensTransferred.length - 1];
      additionalData = {
        amount: lastTokenTransfer.amount,
        asset: lastTokenTransfer.symbol,
        image: lastTokenTransfer.icon,
        network: lastTokenTransfer.network,
        to: lastTokenTransfer.to
      };
    }
    return new TransactionModel({
      ...transactionData,
      ...additionalData
    });
  }
}
class WalletModel {
  _displayBtcAddress;
  _displayEthAddress;
  _displaySolanaAddress;
  _displaySuiAddress;
  _id;
  available = false;
  anonymous;
  assets;
  btcAddress;
  durationToken;
  ethAddress;
  hasPassword;
  image;
  ipfs = {};
  metadata;
  name;
  pgp = undefined;
  publicData;
  solanaAddress;
  suiAddress;
  zelfProof;
  zkProof;
  constructor(data = {}) {
    this._id = data._id;
    this.available = data.available || false;
    this.anonymous = data.anonymous || true;
    this.ipfs = data.ipfs || {};
    this.pgp = data.pgp || undefined;
    const secondaryStorage = data.publicData || {};
    this.publicData = new WalletPublicDataModel(secondaryStorage);
    this.durationToken = data.durationToken;
    this.hasPassword = Boolean(data.hasPassword || data.passwordLayer === "WithPassword" || secondaryStorage.hasPassword === "true");
    this.image = data.image || data.url || data.zelfProofQRCode;
    this.metadata = data.metadata;
    this.zelfProof = data.zelfProof || secondaryStorage.zelfProof;
    this.zkProof = data.zkProof;
    this.name = data.name || data.zelfName || secondaryStorage.zelfName ? `${data.name || data.zelfName || secondaryStorage.zelfName}`.toLowerCase() : "";
    if (!this.publicData.zelfName) this.publicData.zelfName = this.name;
    this.btcAddress = data.btcAddress || secondaryStorage.btcAddress;
    if (this.btcAddress) this.displayBtcAddress = this.btcAddress;
    this.ethAddress = data.ethAddress || secondaryStorage.ethAddress;
    if (this.ethAddress) this.displayEthAddress = this.ethAddress;
    this.solanaAddress = data.solanaAddress || secondaryStorage.solanaAddress;
    if (this.solanaAddress) this.displaySolanaAddress = this.solanaAddress;
    this.suiAddress = data.suiAddress || secondaryStorage.suiAddress;
    if (this.suiAddress) this.displaySuiAddress = this.suiAddress;
    this.assets = [];
  }
  get displayBtcAddress() {
    return this._displayBtcAddress || "";
  }
  get displayEthAddress() {
    return this._displayEthAddress || "";
  }
  get displaySolanaAddress() {
    return this._displaySolanaAddress || "";
  }
  get displaySuiAddress() {
    return this._displaySuiAddress || "";
  }
  set displayBtcAddress(value) {
    this._displayBtcAddress = this._parseAddress(value);
  }
  set displayEthAddress(value) {
    this._displayEthAddress = this._parseAddress(value);
  }
  set displaySolanaAddress(value) {
    this._displaySolanaAddress = this._parseAddress(value);
  }
  set displaySuiAddress(value) {
    this._displaySuiAddress = this._parseAddress(value);
  }
  _parseAddress(value) {
    const firstPart = value.slice(0, 8);
    const lastPart = value.slice(-8);
    return `${firstPart}...${lastPart}`;
  }
  updatePublicData(data) {
    this.publicData = new WalletPublicDataModel({
      ...this.publicData,
      ...data
    });
  }
}
class WalletPublicDataModel {
  _id;
  btcAddress;
  ethAddress;
  expiresAt;
  gracePeriod;
  origin;
  registeredAt;
  solanaAddress;
  suiAddress;
  type;
  zelfName;
  constructor(data) {
    this._id = data._id || "offline";
    this.btcAddress = data.btcAddress || "";
    this.ethAddress = data.ethAddress || "";
    this.expiresAt = data.expiresAt || "";
    this.origin = data.origin || "";
    this.registeredAt = data.registeredAt || "";
    this.solanaAddress = data.solanaAddress || "";
    this.suiAddress = data.suiAddress || "";
    this.type = data.type || "";
    this.zelfName = data.zelfName || "";
    if (!this.type) data.zelfName ? data.zelfName?.includes(".hold") ? this.type = "hold" : this.type = "mainnet" : "";
    if (this.zelfName) this.zelfName = this.zelfName.replace(".hold", "");
    this.gracePeriod = this._calculateGracePeriod();
  }
  get isExpired() {
    return this._checkIsExpired();
  }
  get isExpiringSoon() {
    return this._checkIsExpiringSoon();
  }
  get isFullyExpired() {
    return this._checkIsFullyExpired();
  }
  get isInGracePeriod() {
    if (this.type !== "mainnet" || !this.gracePeriod) return false;
    const now = new Date();
    return now < this.gracePeriod && now > new Date(this.expiresAt);
  }
  _calculateGracePeriod() {
    if (this.type !== "mainnet") return null;
    const gracePeriod = new Date(this.expiresAt);
    gracePeriod.setDate(gracePeriod.getDate() + 30);
    return gracePeriod;
  }
  _checkIsExpired() {
    const timeLeft = this._timeRemaining();
    return timeLeft <= 0;
  }
  _checkIsExpiringSoon() {
    const oneMonthInMs = 24 * 60 * 60 * 1000 * 30;
    const timeLeft = this._timeRemaining();
    return timeLeft > 0 && timeLeft <= oneMonthInMs;
  }
  _checkIsFullyExpired() {
    return this.isExpired && !this.isInGracePeriod;
  }
  _timeRemaining() {
    const expiresAtTime = new Date(this.expiresAt).getTime();
    return expiresAtTime - Date.now();
  }
  timeLeftInGracePeriodSeconds() {
    if (this.type !== "mainnet" || !this.gracePeriod) return 0;
    const now = new Date().getTime();
    const gracePeriodEnd = this.gracePeriod.getTime() * 24 * 60 * 60 * 1000;
    return Math.max(0, Math.floor((gracePeriodEnd - now) / 1000));
  }
}
class TransactionData {
  amount = 0;
  fee = 0;
  fiatAmount = 0;
  fiatFee = 0;
  receiver = {};
  sender = {};
  token = {};
  total = 0;
  constructor(data = {}) {
    this.amount = data.amount || 0;
    this.fee = data.fee || 0;
    this.fiatAmount = data.fiatAmount || 0;
    this.fiatFee = data.fiatFee || 0;
    this.receiver = data.receiver || {};
    this.sender = data.sender || {};
    this.token = data.token || {};
    this.total = data.total || 0;
  }
  get hasCompletePaymentData() {
    return this.hasAmount && this.hasReceiver && this.hasSender && this.hasToken;
  }
  get hasTransactionData() {
    return this.hasToken && this.hasSender;
  }
  get hasToken() {
    return !!this.token && Object.keys(this.token).length > 0;
  }
  get hasSender() {
    return !!this.sender && !!this.sender?.address;
  }
  get hasAmount() {
    return !!this.amount && (typeof this.amount === "number" ? this.amount > 0 : typeof this.amount === "string" ? parseFloat(this.amount) > 0 : false);
  }
  get hasReceiver() {
    return !!this.receiver && Object.keys(this.receiver).length > 0;
  }
  get balance() {
    return this.token?.amount || 0;
  }
  get fiatBalance() {
    return this.token?.fiatBalance || 0;
  }
  get network() {
    return (this.token?.network || "").toLowerCase();
  }
  get tokenType() {
    return this.token?.tokenType || "";
  }
  get symbol() {
    return this.token?.symbol || "";
  }
  get tokenName() {
    return this.token?.name || "";
  }
  get receiverSymbol() {
    return this.receiver?.symbol || this.token?.symbol || "";
  }
  get receiverTokenType() {
    return this.receiver?.tokenType || this.token?.tokenType || "";
  }
  get isEthToken() {
    return this.tokenType === "ETH" || this.tokenType === "ERC-20";
  }
  get isPolToken() {
    return this.tokenType === "POL" || this.tokenType === "MATIC";
  }
  get isBscToken() {
    return this.tokenType === "BSC" || this.tokenType === "BNB" || this.tokenType === "BEP-20";
  }
  get isAvaxToken() {
    return this.tokenType === "AVAX";
  }
  get isSolToken() {
    return this.tokenType === "SOL" || this.tokenType === "SPL";
  }
  get isBtcToken() {
    return this.tokenType === "BTC";
  }
  get isSuiToken() {
    return this.tokenType === "SUI" || this.tokenType === "SUI_TOKEN";
  }
}
class SwapData {
  bridge;
  commission;
  commissionToggle;
  fee;
  password;
  slippage;
  slippageToggle;
  sourceAmount;
  sourceAsset;
  targetAmount;
  targetAsset;
  targetSwapValue;
  constructor(data = {}) {
    this.bridge = data.bridge || "";
    this.commission = data.commission || 0;
    this.commissionToggle = data.commissionToggle || false;
    this.fee = data.fee || 0;
    this.password = data.password || "";
    this.slippage = data.slippage || 0;
    this.slippageToggle = data.slippageToggle || false;
    this.sourceAmount = data.sourceAmount || 0;
    this.sourceAsset = data.sourceAsset || {};
    this.targetAmount = data.targetAmount || 0;
    this.targetAsset = data.targetAsset || {};
    this.targetSwapValue = data.targetSwapValue || 0;
  }
  get hasSwapData() {
    return Object.keys(this.sourceAsset).length > 0 && Object.keys(this.targetAsset).length > 0;
  }
}

/***/ }),

/***/ 46268:
/*!*****************************!*\
  !*** ./transloco.config.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslocoHttpLoader: () => (/* binding */ TranslocoHttpLoader),
/* harmony export */   translocoConfig: () => (/* binding */ translocoConfig),
/* harmony export */   translocoProvider: () => (/* binding */ translocoProvider)
/* harmony export */ });
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 57878);




class TranslocoHttpLoader {
  http;
  constructor(http) {
    this.http = http;
  }
  getTranslation(lang) {
    return this.http.get(`/assets/i18n/${lang}.json`);
  }
  static ɵfac = function TranslocoHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TranslocoHttpLoader,
    factory: TranslocoHttpLoader.ɵfac,
    providedIn: "root"
  });
}
const translocoConfig = {
  defaultLang: "en",
  failedRetries: 1,
  fallbackLang: "en",
  interpolation: ["{{", "}}"],
  prodMode: environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
  reRenderOnLangChange: true,
  availableLangs: [{
    id: "en",
    label: "English"
  }, {
    id: "es",
    label: "Spanish"
  }, {
    id: "br",
    label: "Portuguese"
  }, {
    id: "fr",
    label: "French"
  }, {
    id: "ru",
    label: "Russian"
  }, {
    id: "kr",
    label: "Korean"
  }, {
    id: "in",
    label: "Hindi"
  }, {
    id: "cn",
    label: "Chinese"
  }, {
    id: "ph",
    label: "Filipino"
  }, {
    id: "ja",
    label: "Japanese"
  }, {
    id: "ar",
    label: "Arabic"
  }],
  flatten: {
    aot: !environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  },
  missingHandler: {
    allowEmpty: true,
    logMissingKey: false,
    useFallbackTranslation: true
  },
  scopes: {
    keepCasing: true
  }
};
const translocoProvider = (0,_jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.provideTransloco)({
  config: translocoConfig,
  loader: TranslocoHttpLoader
});

/***/ }),

/***/ 47835:
/*!***************************************!*\
  !*** ./src/app/interceptors/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpInterceptorProviders: () => (/* binding */ HttpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 57878);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ 69339);


const HttpInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HTTP_INTERCEPTORS,
  useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__.JWTInterceptor,
  multi: true
}];

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 57878);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 53563);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors */ 47835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _core_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/transloco-root.module */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 12596);











class AppModule {
  router;
  constructor(router) {
    this.router = router;
    if (!this.isMobileDevice() || !environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) return;
    this.router.navigate(["/external-link"], {
      queryParams: {
        url: "https://zelf.world/download"
      }
    });
  }
  isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|iphone|ipad|ipod/i.test(userAgent);
  }
  static ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_interceptors__WEBPACK_IMPORTED_MODULE_1__.HttpInterceptorProviders, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.provideAnimations)()],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _core_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__.TranslocoRootModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _core_transloco_root_module__WEBPACK_IMPORTED_MODULE_4__.TranslocoRootModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule]
  });
})();

/***/ }),

/***/ 55235:
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginGuard: () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wallet.service */ 69556);




const LoginGuard = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (route, state) {
    const _walletService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_wallet_service__WEBPACK_IMPORTED_MODULE_1__.WalletService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    const {
      wallet,
      wallets
    } = yield _walletService.getAllWalletsFromStorage();
    if (!!wallet?.name || wallets?.length) return true;
    if (state.url !== "/welcome") {
      router.navigate(["/welcome"], {
        replaceUrl: true
      });
      return false;
    }
    return true;
  });
  return function LoginGuard(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 56148:
/*!**********************************************!*\
  !*** ./src/app/zelf-name-service.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfNameService: () => (/* binding */ ZelfNameService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _http_wrapper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-wrapper.service */ 84099);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chrome.service */ 85043);
/* harmony import */ var _vault_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vault.service */ 19519);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet.service */ 69556);







class ZelfNameService {
  _httpWrapper;
  _chromeService;
  _vaultService;
  _walletService;
  baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  variables;
  constructor(_httpWrapper, _chromeService, _vaultService, _walletService) {
    this._httpWrapper = _httpWrapper;
    this._chromeService = _chromeService;
    this._vaultService = _vaultService;
    this._walletService = _walletService;
    this.variables = {
      duration: 1,
      price: 0,
      zelfFile: null,
      zelfName: null,
      zelfProof: null
    };
  }
  cleanVariables() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const keys = ["zelfProof", "zelfFile", "zelfName", "zelfPrice", "zelfReward", "duration", "accessToken"];
      yield Promise.all(keys.map(/*#__PURE__*/function () {
        var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
          return _this._chromeService.removeItem(key);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }
  get zelfNamePricing() {
    return {
      1: {
        1: 240,
        2: 432,
        3: 612,
        4: 768,
        5: 900,
        lifetime: 3600
      },
      2: {
        1: 120,
        2: 216,
        3: 306,
        4: 384,
        5: 450,
        lifetime: 1800
      },
      3: {
        1: 72,
        2: 130,
        3: 184,
        4: 230,
        5: 270,
        lifetime: 1080
      },
      4: {
        1: 36,
        2: 65,
        3: 92,
        4: 115,
        5: 135,
        lifetime: 540
      },
      5: {
        1: 30,
        2: 54,
        3: 76,
        4: 96,
        5: 112,
        lifetime: 450
      },
      "6-15": {
        1: 24,
        2: 43,
        3: 61,
        4: 77,
        5: 90,
        lifetime: 360
      },
      16: {
        1: 23,
        2: 41,
        3: 59,
        4: 74,
        5: 86,
        lifetime: 345
      },
      17: {
        1: 22,
        2: 40,
        3: 56,
        4: 70,
        5: 82,
        lifetime: 330
      },
      18: {
        1: 21,
        2: 38,
        3: 54,
        4: 67,
        5: 79,
        lifetime: 315
      },
      19: {
        1: 20,
        2: 36,
        3: 51,
        4: 64,
        5: 75,
        lifetime: 300
      },
      20: {
        1: 19,
        2: 34,
        3: 48,
        4: 61,
        5: 72,
        lifetime: 285
      },
      21: {
        1: 18,
        2: 32,
        3: 46,
        4: 58,
        5: 68,
        lifetime: 270
      },
      22: {
        1: 17,
        2: 31,
        3: 43,
        4: 54,
        5: 64,
        lifetime: 255
      },
      23: {
        1: 16,
        2: 29,
        3: 41,
        4: 51,
        5: 60,
        lifetime: 240
      },
      24: {
        1: 15,
        2: 27,
        3: 38,
        4: 48,
        5: 56,
        lifetime: 225
      },
      25: {
        1: 14,
        2: 25,
        3: 36,
        4: 45,
        5: 53,
        lifetime: 210
      },
      26: {
        1: 13,
        2: 23,
        3: 33,
        4: 42,
        5: 49,
        lifetime: 195
      },
      27: {
        1: 12,
        2: 22,
        3: 31,
        4: 38,
        5: 45,
        lifetime: 180
      }
    };
  }
  _shouldRefreshWallets = (() => {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const walletTtl = yield _this2._chromeService.getItemSession("walletTtl");
      if (!walletTtl || walletTtl < Date.now()) {
        _this2._chromeService.setItemSession("walletTtl", Date.now() + 1000 * 60 * 30);
        return true;
      }
      return false;
    });
  })();
  generateArNS(zelfName) {
    return `https://${zelfName.replace(".", "_")}.arweave.zelf.world`;
  }
  decryptZelfName(payload) {
    const promise = this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/zelf-name-service/v2/decrypt`, payload);
    promise.then(() => this._vaultService.setLastVerified());
    return promise;
  }
  leaseZelfName(payload) {
    const promise = this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/zelf-name-service/v2/lease`, payload);
    promise.then(() => this._vaultService.setLastVerified());
    return promise;
  }
  zelfNameLeaseRecovery(payload) {
    const promise = this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/zelf-name-service/v2/lease-recovery`, payload);
    promise.then(() => this._vaultService.setLastVerified());
    return promise;
  }
  searchZelfName(key = "zelfName", value, captchaToken) {
    const query = {
      key,
      value
    };
    if (captchaToken) query.captchaToken = captchaToken;
    if (query.key === "zelfName") {
      query.value = query.value.toLowerCase();
    }
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/api/zelf-name-service/v2/search`, query);
  }
  searchZelfNameV2(key = "zelfName", value, captchaToken) {
    const query = {
      key,
      value
    };
    if (query.key === "zelfName") {
      query.value = query.value.toLowerCase();
    }
    if (captchaToken) query.captchaToken = captchaToken;
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/api/zelf-name-service/v2/search`, query);
  }
  previewZelfName(zelfName, captchaToken) {
    const query = {
      zelfName
    };
    if (captchaToken) query.captchaToken = captchaToken;
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/zelf-name-service/v2/search`, query);
  }
  previewZelfProof(zelfProof, captchaToken) {
    const query = {
      zelfProof,
      os: "DESKTOP"
    };
    if (captchaToken) query.captchaToken = captchaToken;
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/zelf-name-service/preview-zelfproof`, query);
  }
  setZelfName(_x2) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (zelfName, priceObject = {}) {
      _this3.variables.zelfName = zelfName;
      const setPromise = zelfName ? _this3._chromeService.setItem("zelfName", zelfName) : _this3._chromeService.removeItem("zelfName");
      setPromise.then(() => {
        if (!priceObject) return;
        _this3.variables.price = priceObject.price;
        _this3.variables.reward = priceObject.reward;
        _this3._chromeService.setItem("zelfPrice", priceObject.price);
        _this3._chromeService.setItem("zelfReward", priceObject.reward);
      });
    }).apply(this, arguments);
  }
  setZelfFile(zelfNameObject) {
    this.variables.zelfFile = zelfNameObject;
  }
  getZelfFile() {
    return this.variables.zelfFile;
  }
  setZelfNameObject(zelfNameObject) {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.variables.zelfNameObject = zelfNameObject;
      yield _this4._chromeService.setItem("zelfNameObject", zelfNameObject);
    })();
  }
  setNewZelfName(newZelfName) {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.variables.newZelfName = newZelfName;
      yield _this5._chromeService.setItem("newZelfName", newZelfName);
    })();
  }
  setMnemonicCount(value) {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.variables.mnemonicCount = value;
      yield _this6._chromeService.setItem("mnemonicCount", value);
    })();
  }
  setFlow(flow) {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.variables.flow = flow;
      yield _this7._chromeService.setItem("flow", flow);
    })();
  }
  setZelfProof(zelfProof) {
    var _this8 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.variables.zelfProof = zelfProof;
      yield _this8._chromeService.setItem("zelfProof", zelfProof);
    })();
  }
  setDuration(duration) {
    var _this9 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.variables.duration = duration;
      yield _this9._chromeService.setItem("duration", duration);
    })();
  }
  setReferral(referralZelfName) {
    var _this0 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this0.variables.referralZelfName = referralZelfName;
      yield _this0._chromeService.setItem("referralZelfName", referralZelfName);
    })();
  }
  getMnemonicCount() {
    var _this1 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this1.variables.mnemonicCount || (yield _this1._chromeService.getItem("mnemonicCount"));
    })();
  }
  getZelfNameObject() {
    var _this10 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this10.variables.zelfNameObject || (yield _this10._chromeService.getItem("zelfNameObject")) || null;
    })();
  }
  getNewZelfName() {
    var _this11 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this11.variables.newZelfName || (yield _this11._chromeService.getItem("newZelfName")) || "";
    })();
  }
  getFlow() {
    var _this12 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this12.variables.flow || (yield _this12._chromeService.getItem("flow")) || "";
    })();
  }
  getReferral() {
    var _this13 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this13.variables.referralZelfName || (yield _this13._chromeService.getItem("referralZelfName"));
    })();
  }
  getZelfName() {
    var _this14 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this14.variables.zelfName || (yield _this14._chromeService.getItem("zelfName"));
    })();
  }
  getZelfPrice() {
    var _this15 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this15.variables.price || (yield _this15._chromeService.getItem("zelfPrice"));
    })();
  }
  getZelfReward() {
    var _this16 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this16.variables.reward || (yield _this16._chromeService.getItem("zelfReward"));
    })();
  }
  getDuration() {
    var _this17 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this17.variables.duration || (yield _this17._chromeService.getItem("duration"));
    })();
  }
  getZelfProof() {
    var _this18 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this18.variables.zelfProof || (yield _this18._chromeService.getItem("zelfProof"));
    })();
  }
  refreshAllWalletsPublicData(_x3) {
    var _this19 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (wallets, forceRefresh = false) {
      const shouldRefreshWallets = forceRefresh || (yield _this19._shouldRefreshWallets());
      if (!shouldRefreshWallets) return false;
      for (const wallet of wallets) {
        yield _this19.refreshWalletPublicData(wallet);
      }
      return true;
    }).apply(this, arguments);
  }
  refreshWalletPublicData(wallet) {
    var _this20 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!wallet || !wallet.publicData?.zelfName) return null;
      const response = yield _this20.searchZelfName("zelfName", wallet.publicData.zelfName);
      if (!response.data.ipfs?.length && !response.data.arweave?.length && response.data?.price) {
        wallet?.updatePublicData({
          ...wallet.publicData,
          expiresAt: new Date(new Date().setHours(0, 0, 0, 0)).toString()
        });
        yield _this20._walletService.updateWallet(wallet);
        return wallet;
      }
      const publicData = response.data.ipfs?.length ? response.data.ipfs[0]?.publicData : response.data.arweave?.[0]?.publicData;
      if (!publicData || !wallet) return null;
      wallet?.updatePublicData(publicData);
      yield _this20._walletService.updateWallet(wallet);
      return wallet;
    })();
  }
  static ɵfac = function ZelfNameService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfNameService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_http_wrapper_service__WEBPACK_IMPORTED_MODULE_2__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_chrome_service__WEBPACK_IMPORTED_MODULE_3__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_vault_service__WEBPACK_IMPORTED_MODULE_4__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_wallet_service__WEBPACK_IMPORTED_MODULE_5__.WalletService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ZelfNameService,
    factory: ZelfNameService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 64648:
/*!***************************************************!*\
  !*** ./src/app/guards/external-redirect.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalRedirectGuard: () => (/* binding */ ExternalRedirectGuard)
/* harmony export */ });
const ExternalRedirectGuard = route => {
  let url = route.queryParams["externalUrl"] || route.data["externalUrl"];
  window.open(url, "_blank");
  return false;
};

/***/ }),

/***/ 67291:
/*!******************************************************!*\
  !*** ./node_modules/@vladmandic/face-api/dist/ sync ***!
  \******************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 67291;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 68903:
/*!********************************************!*\
  !*** ./src/app/guards/onboarding.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingGuard: () => (/* binding */ OnboardingGuard)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chrome.service */ 85043);



const OnboardingGuard = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const _chromeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService);
    const isExtension = _chromeService.isExtension;
    const isPopout = _chromeService.isPopout;
    const isSidePanel = _chromeService.isSidePanel;
    if (isExtension) {
      if (isSidePanel) {
        _chromeService.openFullPage("welcome");
        yield chrome.sidePanel.setOptions({
          path: "index.html",
          enabled: false
        });
        return false;
      }
      if (isPopout) {
        _chromeService.openFullPage("welcome");
        return false;
      }
      return true;
    }
    return true;
  });
  return function OnboardingGuard() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 69339:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JWTInterceptor: () => (/* binding */ JWTInterceptor)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var _interceptor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptor.model */ 27451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/auth.service */ 44796);





class JWTInterceptor {
  _authService;
  constructor(_authService) {
    this._authService = _authService;
  }
  intercept(req, next) {
    if (this._ignoreErrorHandling(req)) return next.handle(req);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.handle(req, next));
  }
  _ignoreErrorHandling(request) {
    return request.context.get(_interceptor_model__WEBPACK_IMPORTED_MODULE_1__.DISABLE_GLOBAL_EXCEPTION_HANDLING);
  }
  handle(req, next) {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authToken = yield _this._authService.checkAccessToken();
      const newReq = req.clone({
        setHeaders: {
          timeout: "20",
          Authorization: `Bearer ${authToken}`
        }
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)(next.handle(newReq));
    })();
  }
  static ɵfac = function JWTInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || JWTInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: JWTInterceptor,
    factory: JWTInterceptor.ɵfac
  });
}

/***/ }),

/***/ 69556:
/*!***********************************!*\
  !*** ./src/app/wallet.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletService: () => (/* binding */ WalletService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vladmandic/face-api */ 12841);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openpgp */ 22634);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 87912);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet */ 45965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _http_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-wrapper.service */ 84099);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 88241);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chrome.service */ 85043);











class WalletService {
  _httpWrapper;
  _breakpointObserver;
  _chromeService;
  _assetImageMap = new Map();
  _faceapi = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
  _userFingerPrint;
  _zelfKeyJWT = null;
  _zelfKeyJWTExpiry = null;
  _BTC_REGEX = /^(?:(?:bc1|tb1|1|32)[a-zA-HJ-NP-Z0-9]{25,59})$/;
  _ETH_REGEX = /^(0x)?[0-9a-fA-F]{40}$/;
  _SOL_REGEX = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  _SUI_REGEX = /^(0x)?[0-9a-fA-F]{64}$/;
  _BTC_TRANSACTION_REGEX = /^[a-fA-F0-9]{64}$/; // Bitcoin transaction hash
  _ETH_TRANSACTION_REGEX = /^0x([A-Fa-f0-9]{64})$/; // Ethereum transaction hash
  _SOL_TRANSACTION_REGEX = /^[A-HJ-NP-Za-km-z1-9]{88}$/; // Solana transaction hash
  _SUI_TRANSACTION_REGEX = /^(0x)?[0-9a-fA-F]{64}$/; // Sui transaction hash
  baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
  zelfProof = "";
  deviceData = {
    generalInformation: []
  };
  sessionData = {
    type: "",
    wordsCount: 12,
    navigationStep: 1,
    password: "",
    usePassword: false,
    phrase: "",
    wallet: null
  };
  constructor(_httpWrapper, _breakpointObserver, _chromeService) {
    this._httpWrapper = _httpWrapper;
    this._breakpointObserver = _breakpointObserver;
    this._chromeService = _chromeService;
    this.deviceData = this.getDeviceDetails();
    this._userFingerPrint = this.getUserFingerprint();
    this.loadModels();
    this._breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.Breakpoints.Small]).subscribe(result => {
      this.deviceData.isMobile = result.matches;
      this.deviceData.time = result.matches ? 500 : 250;
    });
    this.deviceData.OS = this.detectOS();
  }
  _generateUserFingerPrint() {
    const navigatorInfo = window.navigator;
    const screenInfo = window.screen;
    const fingerprintParts = [navigator.userAgent,
    // Browser and OS info
    navigator.language,
    // Primary language
    screen.colorDepth.toString(),
    // Screen color depth
    screen.width.toString(),
    // Screen width
    screen.height.toString(),
    // Screen height
    navigator.platform,
    // Platform/OS
    navigator.hardwareConcurrency.toString(),
    // Number of CPU cores
    Intl.DateTimeFormat().resolvedOptions().timeZone // Timezone
    ];
    // Join all parts and create a simple hash
    const uniqueString = fingerprintParts.join("|");
    return {
      hash: this.simpleHash(uniqueString),
      userAgent: navigatorInfo.userAgent,
      height: screenInfo.height,
      width: screenInfo.width
    };
  }
  get ZelfRegex() {
    return /^[a-z][a-z0-9]*\.zelf$/i;
  }
  get ZelfRegexNoPostfix() {
    return /^[a-z][a-z0-9]*$/i;
  }
  get BTCRegex() {
    return this._BTC_REGEX;
  }
  get ETHRegex() {
    return this._ETH_REGEX;
  }
  get SOLRegex() {
    return this._SOL_REGEX;
  }
  get SUIRegex() {
    return this._SUI_REGEX;
  }
  get BTCTransactionRegex() {
    return this._BTC_TRANSACTION_REGEX;
  }
  get ETHTransactionRegex() {
    return this._ETH_TRANSACTION_REGEX;
  }
  get SOLTransactionRegex() {
    return this._SOL_TRANSACTION_REGEX;
  }
  get SUITransactionRegex() {
    return this._SUI_TRANSACTION_REGEX;
  }
  setAssetImage(symbol, imageSrc) {
    if (!symbol || !imageSrc) return;
    const cachedImage = this._assetImageMap.get(symbol);
    if (cachedImage) return;
    if (!imageSrc) this._assetImageMap.set(symbol, "./assets/tokens/placeholder-coin.png");else this._assetImageMap.set(symbol, imageSrc);
  }
  getAssetImage(symbol, imageSrc) {
    if (!symbol) return "./assets/tokens/placeholder-coin.png";
    const cachedImage = this._assetImageMap.get(symbol);
    if (cachedImage) return cachedImage;
    let assetSrc = "";
    if (symbol === "AVAX") assetSrc = "./assets/networks/avax.png";else if (symbol === "SOL") assetSrc = "./assets/networks/sol.svg";else if (symbol === "ETH") assetSrc = "./assets/networks/eth.png";else if (symbol === "ZNS") assetSrc = "./assets/tokens/zns.png";else if (symbol === "SUI") assetSrc = "./assets/networks/sui.svg";else if (symbol === "BNB" || symbol === "BSC") assetSrc = "./assets/networks/bnb.png";else if (symbol === "POL" || symbol === "MATIC") assetSrc = "./assets/networks/pol.png";else if (symbol === "BTC") assetSrc = "./assets/networks/btc.png";
    if (assetSrc) {
      this._assetImageMap.set(symbol, assetSrc);
      return assetSrc;
    }
    if (imageSrc) {
      assetSrc = imageSrc;
    } else {
      const cleanSymbol = symbol.toLowerCase().replace(/[^a-z].*$/, "");
      assetSrc = `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/refs/heads/master/128/color/${cleanSymbol}.png`;
    }
    let img = new Image();
    img.src = assetSrc;
    img.onerror = () => {
      this._assetImageMap.set(symbol, "./assets/tokens/placeholder-coin.png");
      // apply the change angular
      img = null;
    };
    this._assetImageMap.set(symbol, assetSrc);
    return assetSrc;
  }
  getDeviceData() {
    return this.deviceData;
  }
  getSessionData() {
    return this.sessionData;
  }
  setSteps(steps) {
    this.sessionData.steps = steps;
  }
  goToNextStep(stepIndex) {
    for (let index = 0; index < this.sessionData.steps.length; index++) {
      const step = this.sessionData.steps[index];
      if (index < stepIndex) {
        step.isActive = false;
        step.isCompleted = true;
        continue;
      }
      if (index === stepIndex) {
        step.isActive = true;
        step.isCompleted = false;
      }
    }
    this.sessionData.step = stepIndex;
    this.sessionData.steps.forEach((step, index) => {
      step.isActive = index === stepIndex;
      step.isCompleted = index < stepIndex;
    });
    this.sessionData.steps = [...this.sessionData.steps];
  }
  restoreSession() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let {
        wallet: currentWallet,
        wallets
      } = yield _this.getAllWalletsFromStorage();
      if (!wallets) wallets = [];
      const keysToRemove = ["currentZelfName", "duration", "durationToken", "importWallet", "network", "password", "referralZelfName", "unlockWallet", "zelfFile", "zelfName", "zelfPrice", "zelfProof", "zelfReward"];
      yield Promise.all(keysToRemove.map(key => _this._chromeService.removeItem(key)));
      if (currentWallet?.ethAddress) {
        _this._chromeService.setItem("wallets", [currentWallet, ...wallets]);
        _this._chromeService.removeItem("wallet");
      }
      _this.sessionData.step = 0;
      _this.sessionData.password = "";
      _this.sessionData.usePassword = false;
      _this.sessionData.showBiometrics = false;
      _this.sessionData.showBiometricsInstructions = false;
      _this.sessionData.phrase = null;
      _this.sessionData.navigationStep = 1;
    })();
  }
  get faceapi$() {
    return this._faceapi.asObservable();
  }
  loadModels() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const promises = [];
      promises.push(_vladmandic_face_api__WEBPACK_IMPORTED_MODULE_8__.nets.ssdMobilenetv1.loadFromUri("assets/models"));
      promises.push(_vladmandic_face_api__WEBPACK_IMPORTED_MODULE_8__.nets.faceLandmark68Net.loadFromUri("assets/models"));
      yield Promise.allSettled(promises);
      _this2._faceapi.next(true);
    })();
  }
  detectOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) {
      return "ANDROID";
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      return "IOS";
    }
    return "DESKTOP";
  }
  getDeviceDetails() {
    if (this.deviceData.generalInformation.length) return;
    const details = {
      // Navigator properties
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      language: navigator.language,
      onLine: navigator.onLine,
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      // Screen properties
      screenResolution: `${screen.width} x ${screen.height}`,
      screenAvailableResolution: `${screen.availWidth} x ${screen.availHeight}`,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
      // Window properties
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      touchSupported: "ontouchstart" in window,
      geolocationSupported: "geolocation" in navigator,
      onlineStatus: navigator.onLine ? "Online" : "Offline"
    };
    this.deviceData.generalInformation.push({
      key: "device",
      value: details.platform
    }, {
      key: "language",
      value: details.language
    }, {
      key: "userAgent",
      value: details.userAgent
    });
    return details;
  }
  getUserFingerprint() {
    if (this._userFingerPrint) return this._userFingerPrint;
    this._userFingerPrint = this._generateUserFingerPrint();
    return this._userFingerPrint;
  }
  simpleHash(input) {
    let hash = 0;
    if (input.length === 0) {
      return hash.toString();
    }
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
  }
  findWallet(address) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/api/wallets?address=${address}`);
  }
  requestWallet(walletId) {
    return this._httpWrapper.sendRequest("get", `${this.baseUrl}/api/my-wallets/${walletId}`);
  }
  createLivenessSession(data) {
    let url = `${this.baseUrl}/api/sessions`;
    return this._httpWrapper.sendRequest("post", url, {
      ...data,
      isWebExtension: this._chromeService.isExtension
    }, {
      Headers: {}
    });
  }
  createWallet(data) {
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/my-wallets`, {
      ...data,
      password: data.password || undefined
    });
  }
  decryptWallet(data) {
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/my-wallets/decrypt`, data);
  }
  importWallet(data) {
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/my-wallets/import`, data);
  }
  previewWallet(zelfProof) {
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/wallets/preview`, {
      zelfProof
    });
  }
  createAppRegistration(data) {
    return this._httpWrapper.sendRequest("post", `${this.baseUrl}/v2/app-registrations`, data);
  }
  generateKeyPair() {
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        privateKey,
        publicKey
      } = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.generateKey({
        type: "ecc",
        curve: "curve25519",
        userIDs: [{
          name: "Your Name",
          email: "your.email@example.com"
        }],
        passphrase: "your_passphrase"
      });
      return {
        publicKey,
        privateKey
      };
    })();
  }
  encryptMessage(plainTextMessage, publicKeyArmored) {
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const publicKey = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.readKey({
        armoredKey: publicKeyArmored
      });
      const encryptedMessage = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.encrypt({
        message: yield openpgp__WEBPACK_IMPORTED_MODULE_1__.createMessage({
          text: plainTextMessage
        }),
        encryptionKeys: publicKey
      });
      return encryptedMessage;
    })();
  }
  getDisplayableAddress(address) {
    if (!address) return "";
    const firstPart = address.slice(0, 8);
    const lastPart = address.slice(-6);
    return `${firstPart}...${lastPart}`;
  }
  updateAssetValues(wallet, syncingAsset, wallets, index) {
    if (!wallet.ethAddress || !syncingAsset.asset) return;
    if (!wallet.assets) {
      wallet.assets = [syncingAsset];
    }
    let found = false;
    for (let _index = 0; _index < wallet.assets.length; _index++) {
      const _asset = wallet.assets[_index];
      if (_asset.asset === syncingAsset.asset) {
        found = true;
        _asset.balance = syncingAsset.balance;
        _asset.price = syncingAsset.price;
      }
    }
    if (!found) {
      wallet.assets.push(syncingAsset);
    }
    this._chromeService.setItem("wallet", wallet);
    if (!index) {
      for (let _index = 0; _index < wallets.length; _index++) {
        const _wallet = wallets[_index];
        if (_wallet.ethAddress === wallet.ethAddress) index = _index;
      }
    }
    if (index !== undefined) {
      wallets[index] = wallet;
      this._chromeService.setItem("wallets", wallets);
    }
  }
  /**
   * returns my current wallet
   * @returns Wallet
   */
  retrieveWallet() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let wallet = yield _this3._chromeService.getItem("wallet");
      const wallets = (yield _this3._chromeService.getItem("wallets")) || [];
      if (!wallet && (!wallets || !wallets.length)) return null;
      if (wallet) wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(wallet);
      if (!wallet?.ethAddress && wallets) {
        wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(wallets[0]);
        _this3._chromeService.setItem("wallet", wallet || "");
      }
      return wallet;
    })();
  }
  getShortAddress(address) {
    const firstPart = address.slice(0, 12);
    const lastPart = address.slice(-8);
    return `${firstPart}...${lastPart}`;
  }
  getAllWalletsFromStorage() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(yield _this4._chromeService.getItem("wallet")) || {};
      const wallets = yield _this4.getWalletsFromStorage();
      if (!wallet?.ethAddress) {
        if (!wallets.length) return {
          wallet,
          wallets: []
        };
        _this4._chromeService.setItem("wallet", wallet);
        _this4._chromeService.setItem("wallets", wallets);
      }
      return {
        wallet,
        wallets
      };
    })();
  }
  getCurrentWallet() {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(yield _this5._chromeService.getItem("wallet")) || {};
      if (wallet?.ethAddress) wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(wallet);
      return wallet;
    })();
  }
  initZelfKeySession() {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Check if we have a valid cached JWT token
      if (_this6._zelfKeyJWT && _this6._zelfKeyJWTExpiry && Date.now() < _this6._zelfKeyJWTExpiry) {
        return {
          data: {
            token: _this6._zelfKeyJWT
          }
        };
      }
      const {
        wallet
      } = yield _this6.getAllWalletsFromStorage();
      if (!wallet?.ethAddress) return;
      const response = yield _this6._httpWrapper.sendRequest("post", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/sessions`, {
        address: wallet.ethAddress,
        identifier: wallet.name
      });
      // Cache the JWT token with expiry (24 hours)
      if (response?.data?.token) {
        _this6._zelfKeyJWT = response.data.token;
        _this6._zelfKeyJWTExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
      }
      return response;
    })();
  }
  /**
   * Get the cached ZelfKey JWT token
   * @returns The JWT token or null if not available/expired
   */
  getZelfKeyJWT() {
    if (this._zelfKeyJWT && this._zelfKeyJWTExpiry && Date.now() < this._zelfKeyJWTExpiry) {
      return this._zelfKeyJWT;
    }
    // Clear expired token
    this._zelfKeyJWT = null;
    this._zelfKeyJWTExpiry = null;
    return null;
  }
  /**
   * Clear the cached ZelfKey JWT token
   */
  clearZelfKeyJWT() {
    this._zelfKeyJWT = null;
    this._zelfKeyJWTExpiry = null;
  }
  /**
   * List stored passwords from IPFS
   * @returns Promise with the list of stored passwords
   */
  listStoredPasswords() {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const jwt = _this7.getZelfKeyJWT();
      if (!jwt) {
        // Try to initialize session if no JWT available
        yield _this7.initZelfKeySession();
        const newJwt = _this7.getZelfKeyJWT();
        if (!newJwt) {
          throw new Error("Unable to authenticate with ZelfKey API");
        }
      }
      return _this7._httpWrapper.sendRequest("get", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/zelf-key/list?category=password`, {}, {
        headers: {
          Authorization: `Bearer ${_this7.getZelfKeyJWT()}`
        }
      });
    })();
  }
  /**
   * List stored notes from IPFS
   * @returns Promise with the list of stored notes
   */
  listStoredNotes() {
    var _this8 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const jwt = _this8.getZelfKeyJWT();
      if (!jwt) {
        // Try to initialize session if no JWT available
        yield _this8.initZelfKeySession();
        const newJwt = _this8.getZelfKeyJWT();
        if (!newJwt) {
          throw new Error("Unable to authenticate with ZelfKey API");
        }
      }
      return _this8._httpWrapper.sendRequest("get", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/zelf-key/list?category=notes`, {}, {
        headers: {
          Authorization: `Bearer ${_this8.getZelfKeyJWT()}`
        }
      });
    })();
  }
  /**
   * Store notes using ZelfKey API
   * @param payload - The note data to store
   * @returns Promise with the storage result
   */
  storeNotes(payload) {
    var _this9 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const jwt = _this9.getZelfKeyJWT();
      if (!jwt) {
        // Try to initialize session if no JWT available
        yield _this9.initZelfKeySession();
        const newJwt = _this9.getZelfKeyJWT();
        if (!newJwt) {
          throw new Error("Unable to authenticate with ZelfKey API");
        }
      }
      return _this9._httpWrapper.sendRequest("post", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/zelf-key/store/notes`, payload, {
        headers: {
          Authorization: `Bearer ${_this9.getZelfKeyJWT()}`,
          "Content-Type": "application/json"
        }
      });
    })();
  }
  /**
   * Retrieve/decrypt a stored password
   * @param payload - The decryption payload
   * @returns Promise with the decrypted password data
   */
  retrievePassword(payload) {
    var _this0 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const jwt = _this0.getZelfKeyJWT();
      if (!jwt) {
        // Try to initialize session if no JWT available
        yield _this0.initZelfKeySession();
        const newJwt = _this0.getZelfKeyJWT();
        if (!newJwt) {
          throw new Error("Unable to authenticate with ZelfKey API");
        }
      }
      return _this0._httpWrapper.sendRequest("post", `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.keysApiUrl}/api/zelf-key/retrieve`, payload, {
        headers: {
          Authorization: `Bearer ${_this0.getZelfKeyJWT()}`,
          "Content-Type": "application/json"
        }
      });
    })();
  }
  getFirstWalletFromStorage() {
    var _this1 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(yield _this1._chromeService.getItem("wallet")) || {};
      if (wallet?.ethAddress) wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(wallet);else {
        const wallets = yield _this1.getWalletsFromStorage();
        if (!wallets.length) return {};
        const shiftedWallet = wallets.shift();
        wallet = new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(shiftedWallet || {});
        _this1._chromeService.setItem("wallet", wallet);
        _this1._chromeService.setItem("wallets", wallets);
      }
      return wallet;
    })();
  }
  updateWallet(walletToUpdate) {
    var _this10 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!walletToUpdate || !walletToUpdate.publicData?.zelfName) return;
      const {
        wallet,
        wallets
      } = yield _this10.getAllWalletsFromStorage();
      if (wallet && wallet.publicData?.zelfName && wallet.publicData?.zelfName === walletToUpdate.publicData?.zelfName) {
        yield _this10._chromeService.setItem("wallet", walletToUpdate);
        return;
      }
      const index = wallets.findIndex(_wallet => _wallet.publicData.zelfName === walletToUpdate.publicData?.zelfName);
      if (index === -1) return;
      wallets[index] = walletToUpdate;
      yield _this10._chromeService.setItem("wallets", wallets);
    })();
  }
  updateCurrentWallet(wallet) {
    var _this11 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11._chromeService.setItem("wallet", wallet);
    })();
  }
  clearPGPKeys() {
    var _this12 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this12.getCurrentWallet();
      const wallets = yield _this12.getWalletsFromStorage();
      if (wallet && wallet.pgp) {
        delete wallet.pgp;
        _this12._chromeService.setItem("wallet", wallet);
      }
      let hasUpdate = false;
      const newWallets = (wallets || []).map(_wallet => {
        if (!_wallet?.pgp) return _wallet;
        delete _wallet.pgp;
        hasUpdate = true;
        return _wallet;
      });
      if (hasUpdate) yield _this12._chromeService.setItem("wallets", newWallets);
    })();
  }
  getWalletsFromStorage() {
    var _this13 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return ((yield _this13._chromeService.getItem("wallets")) || []).map(wallet => new _wallet__WEBPACK_IMPORTED_MODULE_3__.WalletModel(wallet));
    })();
  }
  switchWallet(selectedWallet) {
    var _this14 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = (yield _this14._chromeService.getItem("wallet")) || {};
      if (selectedWallet.publicData.zelfName === wallet.publicData?.zelfName) return;
      const wallets = (yield _this14._chromeService.getItem("wallets")) || [];
      const newWallets = wallets.filter(_wallet => _wallet.publicData.zelfName !== selectedWallet.publicData.zelfName);
      yield _this14._chromeService.setItem("wallet", selectedWallet);
      yield _this14._chromeService.setItem("wallets", [wallet, ...newWallets]);
    })();
  }
  checkIfLastWallet() {
    var _this15 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        wallet: currentWallet,
        wallets
      } = yield _this15.getAllWalletsFromStorage();
      return currentWallet?.ethAddress && !wallets.length || !currentWallet?.ethAddress && wallets.length === 1;
    })();
  }
  logoutOfWallet(walletToRemove) {
    var _this16 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        wallet: currentWallet,
        wallets
      } = yield _this16.getAllWalletsFromStorage();
      if (currentWallet?.publicData?.zelfName === walletToRemove.publicData.zelfName) {
        yield _this16._chromeService.removeItem("wallet");
        const wallet = wallets.shift();
        _this16._chromeService.setItem("wallet", wallet);
        _this16._chromeService.setItem("wallets", wallets);
      } else {
        const newWallets = wallets.filter(_wallet => _wallet.publicData.zelfName !== walletToRemove.publicData.zelfName);
        _this16._chromeService.setItem("wallets", newWallets);
      }
    })();
  }
  setWalletsToColdStorage() {
    var _this17 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this17._chromeService.getItem("wallet");
      if (!wallet?.ethAddress) return;
      const wallets = yield _this17.getWalletsFromStorage();
      const walletExistsInWallets = wallets.some(_wallet => {
        wallet.name === _wallet.name;
      });
      if (!walletExistsInWallets) wallets.unshift(wallet);
      _this17._chromeService.setItem("wallet", {});
      _this17._chromeService.setItem("wallets", wallets);
    })();
  }
  removeDuplicateWalletsInStorage() {
    var _this18 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        wallet,
        wallets
      } = yield _this18.getAllWalletsFromStorage();
      if (!wallets.length || !wallet) return;
      const filteredWallets = wallets.filter(_wallet => _wallet.publicData.zelfName !== wallet.publicData?.zelfName);
      yield _this18._chromeService.setItem("wallets", filteredWallets);
    })();
  }
  isValidEVMAddress(address) {
    return this._ETH_REGEX.test(address);
  }
  isValidSuiAddress(address) {
    return this._SUI_REGEX.test(address);
  }
  validateEVMAddressOnChain(address) {
    var _this19 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this19.isValidEVMAddress(address)) return false;
        const response = yield _this19._httpWrapper.sendRequest("get", `${_this19.baseUrl}/api/validate-address?address=${address}`);
        return response?.isValid || false;
      } catch (error) {
        console.error("Error validating EVM address on chain:", error);
        return false;
      }
    })();
  }
  validateSUIAddressOnChain(address) {
    var _this20 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this20.isValidSuiAddress(address)) return false;
        const response = yield _this20._httpWrapper.sendRequest("get", `${_this20.baseUrl}/api/validate-sui-address?address=${address}`);
        return response?.isValid || false;
      } catch (error) {
        console.error("Error validating SUI address on chain:", error);
        return false;
      }
    })();
  }
  getPendingTransaction(transactionHash) {
    var _this21 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!transactionHash) return;
      const pendingTransactions = yield _this21._chromeService.getItem("pendingTransactions");
      if (!pendingTransactions) return null;
      return pendingTransactions[transactionHash] || null;
    })();
  }
  removePendingTransaction(transactionHash) {
    var _this22 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!transactionHash) return;
      const pendingTransactions = yield _this22._chromeService.getItem("pendingTransactions");
      if (!pendingTransactions) return null;
      delete pendingTransactions[transactionHash];
      yield _this22._chromeService.setItem("pendingTransactions", pendingTransactions);
    })();
  }
  addTransactionToPending(transaction) {
    var _this23 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pendingTransactions = yield _this23._chromeService.getItem("pendingTransactions");
      const bigIntKeys = Object.keys(transaction).filter(key => {
        return typeof transaction[key] === "bigint";
      });
      for (const key of bigIntKeys) {
        delete transaction[key];
      }
      if (!pendingTransactions) {
        yield _this23._chromeService.setItem("pendingTransactions", {
          [transaction.transactionHash]: transaction
        });
      } else {
        if (pendingTransactions[transaction.transactionHash]) return;
        pendingTransactions[transaction.transactionHash] = transaction;
        yield _this23._chromeService.setItem("pendingTransactions", pendingTransactions);
      }
    })();
  }
  getWalletAddressByTokenType(tokenType) {
    var _this24 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this24.getCurrentWallet();
      if (!wallet) return "";
      let address = "";
      if (tokenType === "ETH" || tokenType === "AVAX" || tokenType === "POL" || tokenType === "MATIC" || tokenType === "ERC-20" || tokenType === "BEP-20" || tokenType === "BNB") {
        address = wallet?.ethAddress || "";
      } else if (tokenType === "SOL" || tokenType === "SPL") {
        address = wallet?.solanaAddress || "";
      } else if (tokenType === "BTC") {
        address = wallet?.btcAddress || "";
      } else if (tokenType === "SUI" || tokenType === "SUI_TOKEN") {
        address = wallet?.suiAddress || "";
      }
      return address;
    })();
  }
  getAvailableWalletNetworks() {
    var _this25 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this25.getCurrentWallet();
      if (!wallet) return [];
      const networks = [];
      if (wallet?.ethAddress) {
        networks.push({
          address: wallet?.ethAddress,
          image: _this25.getAssetImage("ETH"),
          name: "Ethereum",
          symbol: "ETH"
        }, {
          address: wallet?.ethAddress,
          image: _this25.getAssetImage("AVAX"),
          name: "Avalanche",
          symbol: "AVAX"
        }, {
          address: wallet?.ethAddress,
          image: _this25.getAssetImage("BNB"),
          name: "Binance",
          symbol: "BNB"
        }, {
          address: wallet?.ethAddress,
          image: _this25.getAssetImage("MATIC"),
          name: "Polygon",
          symbol: "MATIC"
        });
      }
      if (wallet?.btcAddress) {
        networks.push({
          address: wallet?.btcAddress,
          image: _this25.getAssetImage("BTC"),
          name: "Bitcoin",
          symbol: "BTC"
        });
      }
      if (wallet?.solanaAddress) {
        networks.push({
          address: wallet?.solanaAddress,
          image: _this25.getAssetImage("SOL"),
          name: "Solana",
          symbol: "SOL"
        });
      }
      if (wallet?.suiAddress) {
        networks.push({
          address: wallet?.suiAddress,
          image: _this25.getAssetImage("SUI"),
          name: "Sui",
          symbol: "SUI"
        });
      }
      return networks;
    })();
  }
  static ɵfac = function WalletService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_http_wrapper_service__WEBPACK_IMPORTED_MODULE_4__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.B), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_chrome_service__WEBPACK_IMPORTED_MODULE_5__.ChromeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: WalletService,
    factory: WalletService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 77194:
/*!******************************************!*\
  !*** ./src/app/guards/mnemonic.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MnemonicGuard: () => (/* binding */ MnemonicGuard)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var app_vault_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/vault.service */ 19519);
/* harmony import */ var app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/zelf-name-service.service */ 56148);





const MnemonicGuard = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const _vaultService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_vault_service__WEBPACK_IMPORTED_MODULE_1__.VaultService);
    const _zelfNameService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_2__.ZelfNameService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    const mnemonicCount = yield _zelfNameService.getMnemonicCount();
    if (!_vaultService.mnemonic && !mnemonicCount) {
      const flow = yield _zelfNameService.getFlow();
      if (!flow) router.navigate(["/welcome/onboarding"]);else if (flow === "import") router.navigate(["/welcome/import"]);else if (flow === "create") router.navigate(["/security"]);else if (flow === "unlock" || flow === "recover") return true;
      return false;
    }
    return true;
  });
  return function MnemonicGuard() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 81803:
/*!*******************************************!*\
  !*** ./src/app/resolvers/jwt.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JWTResolver: () => (/* binding */ JWTResolver)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth.service */ 44796);



const JWTResolver = /*#__PURE__*/function () {
  var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const _authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    yield _authService.checkAccessToken();
    return true;
  });
  return function JWTResolver() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 84099:
/*!*****************************************!*\
  !*** ./src/app/http-wrapper.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpWrapperService: () => (/* binding */ HttpWrapperService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var openpgp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openpgp */ 22634);
/* harmony import */ var _interceptors_interceptor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/interceptor.model */ 27451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 57878);





class HttpWrapperService {
  _http;
  publicKey;
  tail = [];
  get progress() {
    return !!this.tail.length;
  }
  constructor(_http) {
    this._http = _http;
  }
  /**
   * Send request
   * @param method - to determine which function we will be using
   * @param url - URL that we will be requesting information from
   * @param params - params that can go into the body or the query string param
   * @param options - headers or some other sort of params
   */
  sendRequest(_x, _x2) {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (method, url, params = {}, options = {}) {
      method = method.toLocaleLowerCase();
      // If custom headers are provided, we need to disable the JWT interceptor
      // and handle authorization manually to ensure custom headers take precedence
      if (options.headers && options.headers.Authorization) {
        // Add the context to disable JWT interceptor for this request
        options.context = options.context || new Map();
        options.context.set(_interceptors_interceptor_model__WEBPACK_IMPORTED_MODULE_2__.DISABLE_GLOBAL_EXCEPTION_HANDLING, true);
      }
      try {
        switch (method) {
          case "get":
            return _this.request(_this._http.get(url, {
              params,
              ...options
            }));
          case "post":
            return _this.request(_this._http.post(url, params, {
              ...options
            }));
          case "put":
            return _this.request(_this._http.put(url, params, {
              ...options
            }));
          case "delete":
            return _this.request(_this._http.delete(url, {
              ...options
            }));
          default:
            throw new Error("Method not provided or unsupported");
        }
      } catch (error) {
        console.error("Error in sendRequest:", error);
        throw error;
      }
    }).apply(this, arguments);
  }
  // // Helper method to process HTTP requests (just an example of what it might look like)
  request(httpCall) {
    return httpCall.toPromise().then(response => response).catch(error => {
      throw error;
    });
  }
  setPublicKey(publicKey) {
    this.publicKey = publicKey;
  }
  encryptMessage(data) {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!data) return data;
      if (!_this2.publicKey) throw new Error("cannot_encrypt_message");
      const publicKey = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.readKey({
        armoredKey: _this2.publicKey
      }); // armoredKey > quitarle la armadura
      const encryptedMessage = yield openpgp__WEBPACK_IMPORTED_MODULE_1__.encrypt({
        message: yield openpgp__WEBPACK_IMPORTED_MODULE_1__.createMessage({
          text: data
        }),
        encryptionKeys: publicKey
      });
      return encryptedMessage;
    })();
  }
  static ɵfac = function HttpWrapperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HttpWrapperService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: HttpWrapperService,
    factory: HttpWrapperService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 53563);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 45568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 45312);





if (Storage?.prototype?.setItem && Proxy && Reflect && CustomEvent) {
  Storage.prototype.setItem = new Proxy(Storage.prototype.setItem, {
    apply(target, thisArg, argumentList) {
      const event = new CustomEvent("localstorage", {
        detail: {
          key: argumentList[0],
          oldValue: thisArg.getItem(argumentList[0]),
          newValue: argumentList[1]
        }
      });
      window.dispatchEvent(event);
      return Reflect.apply(target, thisArg, argumentList);
    }
  });
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 85043:
/*!***********************************!*\
  !*** ./src/app/chrome.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeService: () => (/* binding */ ChromeService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet */ 45965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




class ChromeService {
  _isExtension = Boolean(typeof browser !== "undefined" && browser.storage && browser.runtime);
  _isPopout = false;
  _isPopout$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
  _isSidePanel = false;
  _isSidePanel$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
  _lastVerified$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
  _myArnsDontShowAgain$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
  _settings$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
  _tabId;
  _tabStorageKey = "isTabOpen";
  _wallet$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
  _wallets$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  constructor() {
    if (!this.isExtension) return;
    this._initBrowserListeners();
  }
  _initBrowserListeners() {
    var _this = this;
    browser.tabs.getCurrent().then(tab => {
      this._tabId = tab?.id;
      this._isPopout = window === browser.extension.getViews({
        type: "popup"
      })[0];
      this._isPopout$.next(this._isPopout);
      this._isSidePanel = !this._isPopout && !this._tabId;
      this._isSidePanel$.next(this._isSidePanel);
    });
    browser.tabs.onRemoved.addListener(/*#__PURE__*/function () {
      var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (closedTabId) {
        const storedTabId = yield _this.getItem("tabId");
        if (storedTabId !== closedTabId) return;
        yield _this.setItem(_this._tabStorageKey, false);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    browser.storage.local.onChanged.addListener(changes => {
      if (changes.lastVerified) {
        this._lastVerified$.next(changes.lastVerified.newValue);
      }
      if (changes.settings) {
        this._settings$.next(changes.settings.newValue);
      }
      if (changes.wallet) {
        this.removeItemSession("tokensTtl");
        changes.wallet ? this._wallet$.next(changes.wallet.newValue ? new _wallet__WEBPACK_IMPORTED_MODULE_1__.WalletModel(changes.wallet.newValue) : {}) : {};
      }
      if (changes.wallets) {
        changes.wallets ? this._wallets$.next((changes.wallets.newValue || [])?.map(wallet => new _wallet__WEBPACK_IMPORTED_MODULE_1__.WalletModel(wallet || {}))) : [];
      }
      if (changes.myArnsDontShowAgain) {
        this._myArnsDontShowAgain$.next(changes.myArnsDontShowAgain.newValue);
      }
    });
    if (!this.isExtension) {
      window.addEventListener("localstorage", event => {
        if (!event?.detail?.key) return;
        if (event.detail.key === "lastVerified") {
          this._lastVerified$.next(event.detail.newValue ? parseInt(event.detail.newValue) : 0);
        }
        if (event.detail.key === "settings") {
          this._settings$.next(event.detail.newValue ? JSON.parse(event.detail.newValue) : {});
        }
        if (event.detail.key === "wallet") {
          this.removeItemSession("tokensTtl");
          event ? this._wallet$.next(event.detail.newValue ? new _wallet__WEBPACK_IMPORTED_MODULE_1__.WalletModel(JSON.parse(event.detail.newValue)) : {}) : {};
        }
        if (event.detail.key === "wallets") {
          event ? this._wallets$.next((JSON.parse(event.detail.newValue) || [] || 0)?.map(wallet => new _wallet__WEBPACK_IMPORTED_MODULE_1__.WalletModel(wallet || {}))) : [];
        }
        if (event.detail.key === "myArnsDontShowAgain") {
          this._myArnsDontShowAgain$.next(event.detail.newValue === "true");
        }
      });
    }
  }
  get isExtension() {
    return this._isExtension;
  }
  get isPopout() {
    return this._isPopout;
  }
  get isPopout$() {
    return this._isPopout$.asObservable();
  }
  get isSidePanel() {
    return this._isSidePanel;
  }
  get isSidePanel$() {
    return this._isSidePanel$.asObservable();
  }
  get onLastVerifiedChanged$() {
    return this._lastVerified$.asObservable();
  }
  get onMyArnsDontShowAgainChanged$() {
    return this._myArnsDontShowAgain$.asObservable();
  }
  get onSettingsChanged$() {
    return this._settings$.asObservable();
  }
  get onWalletChanged$() {
    return this._wallet$.asObservable();
  }
  get onWalletsChanged$() {
    return this._wallets$.asObservable();
  }
  closeTab() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.isExtension || !_this2._tabId) return;
      browser.tabs.remove(_this2._tabId);
    })();
  }
  copyToClipboard(value) {
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (navigator?.clipboard) {
        navigator?.clipboard.writeText(value);
        return;
      }
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    })();
  }
  getItem(key, overrideSource) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let source = _this3.isExtension ? "extension" : "web";
      if (overrideSource) {
        source = ["extension", "web"].includes(overrideSource) ? overrideSource : source;
      }
      return new Promise((resolve, reject) => {
        switch (source) {
          case "extension":
            browser.storage.local.get(key).then(result => {
              resolve(result[key]);
            }).catch(reject);
            break;
          default:
            try {
              const item = localStorage.getItem(key);
              try {
                if (!item) resolve("");
                const result = JSON.parse(item);
                resolve(result);
              } catch (error) {
                resolve(item);
              }
            } catch (error) {
              reject(error);
            }
        }
      });
    })();
  }
  isExtensionTabOpen() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.isExtension) return false;
      return new Promise(resolve => {
        const baseUrl = browser.runtime.getURL("#/onboarding");
        browser.tabs.query({}).then(tabs => {
          const isTabOpen = tabs.some(tab => tab.url?.startsWith(baseUrl));
          resolve(isTabOpen);
        });
      });
    })();
  }
  openFullPage(path) {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.isExtension) return;
      const currentTab = yield browser.tabs.getCurrent();
      if (currentTab) return; // No need to open a new tab if running in the current tab
      try {
        const url = browser.runtime.getURL("index.html");
        browser.tabs.create({
          url: `${url}#${path}`
        }).then(/*#__PURE__*/function () {
          var _ref2 = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tab) {
            if (!tab?.id) return;
            try {
              yield _this5.setItem(_this5._tabStorageKey, true);
              yield _this5.setItem("tabId", tab.id);
            } catch (error) {
              console.error("Failed to update tab state:", error);
            }
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      } catch (exception) {
        console.error("Failed to open tab:", exception);
      }
    })();
  }
  ensureFullScreen(path) {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.isExtension) return;
      try {
        const currentTab = yield browser.tabs.getCurrent();
        if (currentTab) {
          // We're already in a tab, update the URL to navigate to the desired path
          const url = browser.runtime.getURL("index.html");
          yield browser.tabs.update(currentTab.id, {
            url: `${url}#${path}`
          });
          // Ensure the tab is focused and active
          yield browser.tabs.update(currentTab.id, {
            active: true
          });
          // Try to maximize the window if possible
          if (currentTab.windowId) {
            try {
              yield browser.windows.update(currentTab.windowId, {
                state: "maximized"
              });
            } catch (error) {
              // Fallback to normal state if maximized fails
              console.log("Could not maximize window, using normal state");
            }
          }
        } else {
          // Not in a tab, open a new full page
          yield _this6.openFullPage(path);
        }
      } catch (exception) {
        console.error("Failed to ensure full screen:", exception);
      }
    })();
  }
  openSidePanel() {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this7.isExtension) return;
      const [window] = yield browser.windows.getAll({
        populate: true
      });
      if (!window?.id) return;
      if (_this7.isPopout) {
        const views = browser.extension.getViews({
          type: "popup"
        });
        if (views.length) views[0].close();
      } else {
        const tabs = yield browser.tabs.query({
          active: true,
          lastFocusedWindow: true
        });
        if (tabs.length > 1 && tabs[0].id === _this7._tabId) yield _this7.closeTab();
      }
      if (!chrome?.sidePanel) return;
      yield chrome.sidePanel.open({
        windowId: window.id
      });
    })();
  }
  removeItem(key) {
    var _this8 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this8.isExtension) {
          browser.storage.local.remove(key).then(resolve).catch(reject);
          return;
        }
        try {
          localStorage.removeItem(key);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    })();
  }
  setItem(key, value) {
    var _this9 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this9.isExtension) {
          browser.storage.local.set({
            [key]: value
          }).then(resolve).catch(reject);
          return;
        }
        try {
          const isObjectOrArray = typeof value === "object" && value !== null;
          localStorage.setItem(key, isObjectOrArray ? JSON.stringify(value) : value);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    })();
  }
  clearLocalStorage() {
    var _this0 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this0.isExtension) {
          browser.storage.local.clear().then(resolve).catch(reject);
          return;
        }
        try {
          localStorage.clear();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    })();
  }
  getItemSession(key) {
    var _this1 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this1.isExtension) {
          browser.storage.session.get(key).then(result => {
            resolve(result[key]);
          }).catch(reject);
        } else {
          try {
            const item = sessionStorage.getItem(key);
            try {
              if (!item) resolve("");
              const result = JSON.parse(item);
              resolve(result);
            } catch (error) {
              resolve(item);
            }
          } catch (error) {
            reject(error);
          }
        }
      });
    })();
  }
  setItemSession(key, value) {
    var _this10 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this10.isExtension) {
          browser.storage.session.set({
            [key]: value
          }).then(resolve).catch(reject);
        } else {
          try {
            const isObjectOrArray = typeof value === "object" && value !== null;
            sessionStorage.setItem(key, isObjectOrArray ? JSON.stringify(value) : value);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      });
    })();
  }
  removeItemSession(key) {
    var _this11 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this11.isExtension) {
          browser.storage.session.remove(key).then(resolve).catch(reject);
        } else {
          try {
            sessionStorage.removeItem(key);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      });
    })();
  }
  clearSessionStorage() {
    var _this12 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        if (_this12.isExtension) {
          browser.storage.session.clear().then(resolve).catch(reject);
        } else {
          try {
            sessionStorage.clear();
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      });
    })();
  }
  static ɵfac = function ChromeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChromeService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ChromeService,
    factory: ChromeService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 45312);
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/login.guard */ 55235);
/* harmony import */ var _guards_external_redirect_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/external-redirect.guard */ 64648);
/* harmony import */ var _guards_password_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/password.guard */ 23791);
/* harmony import */ var _guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/zelf-name.guard */ 43607);
/* harmony import */ var _guards_wallet_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/wallet.guard */ 4187);
/* harmony import */ var _guards_mnemonic_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/mnemonic.guard */ 77194);
/* harmony import */ var _guards_onboarding_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/onboarding.guard */ 68903);
/* harmony import */ var _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/jwt.resolver */ 81803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);












const routes = [{
  path: "",
  redirectTo: "dashboard",
  pathMatch: "full",
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  }
}, {
  path: "",
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "home",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-BnDTus5c_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_bottom-sheet_mjs"), __webpack_require__.e("default-node_modules_angular_flex-layout_fesm2020_angular-flex-layout_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-src_app_pipes_first-letter_pipe_ts-src_app_pipes_zelf-name_pipe_ts-node_modules_angul-52eacd"), __webpack_require__.e("src_app_home_home_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.component */ 27824)).then(m => m.HomeComponent)
  }, {
    path: "dashboard",
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.component */ 2320)).then(m => m.DashboardComponent),
    children: [{
      path: "",
      redirectTo: "start",
      pathMatch: "full"
    }, {
      path: "start",
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_start_start_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/start/start.component */ 511)).then(m => m.StartComponent)
    },
    // Redirect singular 'password' to plural 'passwords' to fix routing issues
    {
      path: "password",
      redirectTo: "passwords",
      pathMatch: "full"
    }, {
      path: "note",
      redirectTo: "notes",
      pathMatch: "full"
    }, {
      path: "address",
      redirectTo: "addresses",
      pathMatch: "full"
    }, {
      path: "payment-card",
      redirectTo: "payment-cards",
      pathMatch: "full"
    }, {
      path: "bank-account",
      redirectTo: "bank-accounts",
      pathMatch: "full"
    }, {
      path: "passwords",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_shared_data-card_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_zelf-keys-passwords_zelf-keys-passwords_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-passwords/zelf-keys-passwords.component */ 587)).then(m => m.ZelfKeysPasswordsComponent)
    }, {
      path: "passwords/new",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_zelf-keys-passwords_password-form_password-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-passwords/password-form/password-form.component */ 2613)).then(m => m.PasswordFormComponent)
    }, {
      path: "passwords/biometrics",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_flex-layout_fesm2020_angular-flex-layout_mjs"), __webpack_require__.e("default-src_app_services_media-stream_service_ts-node_modules_angular_material_fesm2022_progr-6a79e9"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_shared_data-biometrics_component_ts-node_modules_rxjs_dist_esm_internal_obs-a5c0cf")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/shared/data-biometrics.component */ 9874)).then(m => m.DataBiometricsComponent)
    }, {
      path: "passwords/result",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_zelf-keys-passwords_password-result_password-result_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-passwords/password-result/password-result.component */ 4717)).then(m => m.PasswordResultComponent)
    }, {
      path: "passwords/detail",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_flex-layout_fesm2020_angular-flex-layout_mjs"), __webpack_require__.e("default-src_app_services_media-stream_service_ts-node_modules_angular_material_fesm2022_progr-6a79e9"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_zelf-keys-passwords_password-detail_password-detail_component_ts-node_modul-6643f9")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-passwords/password-detail/password-detail.component */ 7133)).then(m => m.PasswordDetailComponent)
    }, {
      path: "notes",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_shared_data-card_component_ts"), __webpack_require__.e("src_app_dashboard_zelf-keys-notes_zelf-keys-notes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-notes/zelf-keys-notes.component */ 8552)).then(m => m.ZelfKeysNotesComponent)
    }, {
      path: "notes/new",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_zelf-keys-notes_note-form_note-form_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-notes/note-form/note-form.component */ 1086)).then(m => m.NoteFormComponent)
    }, {
      path: "notes/biometrics",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_flex-layout_fesm2020_angular-flex-layout_mjs"), __webpack_require__.e("default-src_app_services_media-stream_service_ts-node_modules_angular_material_fesm2022_progr-6a79e9"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_shared_data-biometrics_component_ts-node_modules_rxjs_dist_esm_internal_obs-a5c0cf")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/shared/data-biometrics.component */ 9874)).then(m => m.DataBiometricsComponent)
    }, {
      path: "notes/result",
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_zelf-keys-notes_note-result_note-result_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-notes/note-result/note-result.component */ 9642)).then(m => m.NoteResultComponent)
    }, {
      path: "addresses",
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_zelf-keys-addresses_zelf-keys-addresses_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-addresses/zelf-keys-addresses.component */ 5395)).then(m => m.ZelfKeysAddressesComponent)
    }, {
      path: "payment-cards",
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_zelf-keys-payment-cards_zelf-keys-payment-cards_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-payment-cards/zelf-keys-payment-cards.component */ 6851)).then(m => m.ZelfKeysPaymentCardsComponent)
    }, {
      path: "bank-accounts",
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_zelf-keys-bank-accounts_zelf-keys-bank-accounts_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/zelf-keys-bank-accounts/zelf-keys-bank-accounts.component */ 1391)).then(m => m.ZelfKeysBankAccountsComponent)
    }]
  }, {
    path: "manage-domains",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-BnDTus5c_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_bottom-sheet_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("default-src_app_confirmation-dialog_confirmation-dialog_component_ts"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-src_app_cta-sheet_cta-sheet_component_ts"), __webpack_require__.e("default-src_app_pipes_first-letter_pipe_ts-src_app_pipes_zelf-name_pipe_ts-node_modules_angul-52eacd"), __webpack_require__.e("src_app_manage-domains_manage-domains_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manage-domains/manage-domains.component */ 23512)).then(m => m.ManageDomainsComponent)
  }, {
    path: "domain",
    pathMatch: "prefix",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("src_app_manage-domain_manage-domain_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./manage-domain/manage-domain.component */ 88388)).then(m => m.ManageDomainComponent)
  }, {
    path: "domain-purchase",
    pathMatch: "prefix",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("src_app_domain-purchase_domain-purchase_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./domain-purchase/domain-purchase.component */ 54084)).then(m => m.DomainPurchaseComponent)
  }, {
    path: "wallet",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_bottom-sheet_mjs"), __webpack_require__.e("default-src_app_mnemonic_mnemonic_component_ts-src_app_pipes_zelf-name_pipe_ts"), __webpack_require__.e("src_app_wallet_wallet_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wallet/wallet.component */ 10744)).then(m => m.WalletComponent)
  }, {
    path: "asset",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("default-src_app_zelf-history_zelf-history_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_token-detail_token-detail_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./token-detail/token-detail.component */ 49336)).then(m => m.TokenDetailComponent)
  }]
},
// {
//     path: "swap",
//     loadComponent: () => import("./zelf-app/zelf-app.component").then((m) => m.ZelfAppComponent),
//     canActivate: [LoginGuard],
//     resolve: {
//         auth: JWTResolver,
//     },
//     children: [{ path: "", loadComponent: () => import("./swap/swap.component").then((m) => m.SwapComponent) }],
// },
{
  path: "welcome",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_onboarding_guard__WEBPACK_IMPORTED_MODULE_7__.OnboardingGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("src_app_welcome-onboarding_welcome-onboarding_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-onboarding/welcome-onboarding.component */ 36514)).then(m => m.WelcomeOnboardingComponent)
  }, {
    path: "find",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_welcome-error_welcome-error_component_ts"), __webpack_require__.e("src_app_welcome-find_welcome-find_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-find/welcome-find.component */ 74250)).then(m => m.WelcomeFindComponent),
    canActivate: []
  }, {
    path: "available",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-src_app_captcha_service_ts-src_app_pipes_zelf-name_pipe_ts-src_app_welcome-available_-3d90c8"), __webpack_require__.e("src_app_welcome-available_welcome-available_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-available/welcome-available.component */ 40524)).then(m => m.WelcomeAvailableComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard]
  }, {
    path: "registered",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("src_app_welcome-registered_welcome-registered_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-registered/welcome-registered.component */ 98304)).then(m => m.WelcomeRegisteredComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard]
  }, {
    path: "import",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-src_app_welcome-error_welcome-error_component_ts"), __webpack_require__.e("src_app_welcome-import_welcome-import_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-import/welcome-import.component */ 306)).then(m => m.WelcomeImportComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard]
  }, {
    path: "offline-import",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-src_app_captcha_service_ts-src_app_pipes_zelf-name_pipe_ts-src_app_welcome-available_-3d90c8"), __webpack_require__.e("src_app_welcome-offline-import_welcome-offline-import_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-offline-import/welcome-offline-import.component */ 72966)).then(m => m.WelcomeOfflineImportComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard]
  }, {
    path: "grace",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("src_app_welcome-grace_welcome-grace_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-grace/welcome-grace.component */ 24912)).then(m => m.WelcomeGraceComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard]
  }, {
    path: "recover",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("src_app_welcome-recover_welcome-recover_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-recover/welcome-recover.component */ 11888)).then(m => m.WelcomeRecoverComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard]
  }, {
    path: "complete",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-src_app_mnemonic_mnemonic_component_ts-src_app_pipes_zelf-name_pipe_ts"), __webpack_require__.e("src_app_welcome-complete_welcome-complete_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome-complete/welcome-complete.component */ 52366)).then(m => m.WelcomeCompleteComponent),
    canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard, _guards_wallet_guard__WEBPACK_IMPORTED_MODULE_5__.WalletGuard]
  }]
}, {
  path: "security",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_zelf_name_guard__WEBPACK_IMPORTED_MODULE_4__.ZelfNameGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-BnDTus5c_mjs"), __webpack_require__.e("default-src_app_confirmation-dialog_confirmation-dialog_component_ts"), __webpack_require__.e("src_app_security_security_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./security/security.component */ 99682)).then(m => m.SecurityComponent)
  }, {
    path: "password",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("src_app_security-password_security-password_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./security-password/security-password.component */ 95212)).then(m => m.SecurityPasswordComponent),
    canActivate: [_guards_mnemonic_guard__WEBPACK_IMPORTED_MODULE_6__.MnemonicGuard]
  }, {
    path: "biometrics",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-BnDTus5c_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_bottom-sheet_mjs"), __webpack_require__.e("default-node_modules_angular_flex-layout_fesm2020_angular-flex-layout_mjs"), __webpack_require__.e("default-src_app_welcome-error_welcome-error_component_ts"), __webpack_require__.e("default-src_app_services_media-stream_service_ts-node_modules_angular_material_fesm2022_progr-6a79e9"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("src_app_security-biometrics_security-biometrics_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./security-biometrics/security-biometrics.component */ 11564)).then(m => m.SecurityBiometricsComponent),
    canActivate: [_guards_password_guard__WEBPACK_IMPORTED_MODULE_3__.PasswordGuard, _guards_mnemonic_guard__WEBPACK_IMPORTED_MODULE_6__.MnemonicGuard],
    canDeactivate: [component => component.canNavigateAway()]
  }]
}, {
  path: "activity",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("default-src_app_zelf-history_zelf-history_component_ts"), __webpack_require__.e("src_app_zelf-activity_zelf-activity_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-activity/zelf-activity.component */ 49864)).then(m => m.ZelfActivityComponent)
  }]
}, {
  path: "swap",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_bottom-sheet_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_swap_swap_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./swap/swap.component */ 26660)).then(m => m.SwapComponent)
  }]
}, {
  path: "send",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_send-currency_send-currency_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./send-currency/send-currency.component */ 80144)).then(m => m.SendCurrencyComponent)
  }, {
    path: "transaction",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("common"), __webpack_require__.e("src_app_send-transaction_send-transaction_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./send-transaction/send-transaction.component */ 15132)).then(m => m.SendTransactionComponent)
  }, {
    path: "confirmation",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_send-confirm_send-confirm_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./send-confirm/send-confirm.component */ 13344)).then(m => m.SendConfirmComponent)
  }]
}, {
  path: "receive",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("src_app_receive-currency_receive-currency_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./receive-currency/receive-currency.component */ 9980)).then(m => m.ReceiveCurrencyComponent)
  }, {
    path: "qr/:network",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("src_app_receive-qr_receive-qr_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./receive-qr/receive-qr.component */ 15788)).then(m => m.ReceiveQrComponent)
  }]
}, {
  path: "transaction",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: ":hash",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-src_app_zelf-loader_zelf-loader_component_ts"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_snack-bar_mjs"), __webpack_require__.e("default-node_modules_buffer_index_js"), __webpack_require__.e("default-src_app_eth_service_ts-src_app_services_bitcoin_service_ts-src_app_services_sui_servi-f36a10"), __webpack_require__.e("default-src_app_services_blockchain-transactions_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_transaction-receipt_transaction-receipt_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transaction-receipt/transaction-receipt.component */ 60304)).then(m => m.TransactionReceiptComponent)
  }]
}, {
  path: "settings",
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_menu_mjs"), __webpack_require__.e("src_app_zelf-app_zelf-app_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-app/zelf-app.component */ 76424)).then(m => m.ZelfAppComponent),
  canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
  resolve: {
    auth: _resolvers_jwt_resolver__WEBPACK_IMPORTED_MODULE_8__.JWTResolver
  },
  children: [{
    path: "",
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2022_forms_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-BnDTus5c_mjs"), __webpack_require__.e("default-src_app_confirmation-dialog_confirmation-dialog_component_ts"), __webpack_require__.e("src_app_zelf-settings_zelf-settings_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./zelf-settings/zelf-settings.component */ 36912)).then(m => m.ZelfSettingsComponent)
  }]
}, {
  path: "external-link",
  data: {
    externalUrl: "https://payment.zelf.world/purchase"
  },
  canActivate: [_guards_external_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.ExternalRedirectGuard]
}
// DEPRECATED ROUTES: Ensure all translations are also removed before deleting these components!
// {
//     path: "extension-instructions",
//     loadComponent: () => import("./extension-instructions/extension-instructions.component").then((m) => m.ExtensionInstructionsComponent),
//     canActivate: [ExtensionGuard],
// },
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  routes.push({
    path: "e2e-test",
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_button_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_overlay-module-BUj0D19H_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-BnDTus5c_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_bottom-sheet_mjs"), __webpack_require__.e("default-src_app_confirmation-dialog_confirmation-dialog_component_ts"), __webpack_require__.e("default-src_app_cta-sheet_cta-sheet_component_ts"), __webpack_require__.e("src_app_testing_e2e-test-helpers_e2e-test-helpers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./testing/e2e-test-helpers/e2e-test-helpers.module */ 76534)).then(m => m.E2ETestHelpersModule)
  });
}
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map