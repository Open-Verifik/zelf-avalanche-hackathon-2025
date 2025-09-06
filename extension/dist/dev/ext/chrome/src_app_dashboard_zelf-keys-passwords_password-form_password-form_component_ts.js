"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-passwords_password-form_password-form_component_ts"],{

/***/ 62613:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-passwords/password-form/password-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordFormComponent: () => (/* binding */ PasswordFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_data_biometrics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data-biometrics.component */ 79874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chrome.service */ 85043);
/* harmony import */ var _services_data_passing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data-passing.service */ 59284);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/wallet.service */ 69556);













function PasswordFormComponent__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PasswordFormComponent__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 35)(2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PasswordFormComponent_div_36__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PasswordFormComponent_div_36__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 35)(2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PasswordFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 37)(2, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_div_36_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.passwordData.masterPassword, $event) || (ctx_r1.passwordData.masterPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PasswordFormComponent_div_36_Template_input_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.checkFormValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_div_36_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleMasterPasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PasswordFormComponent_div_36__svg_svg_4_Template, 2, 0, "svg", 15)(5, PasswordFormComponent_div_36__svg_svg_5_Template, 3, 0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r1.showMasterPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.passwordData.masterPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx_r1.wallet.name ? ctx_r1.wallet.name + " password" : "Master password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.showMasterPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showMasterPassword);
  }
}
function PasswordFormComponent_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("We require the ", ctx_r1.wallet.name, " password to encrypt and store your credentials. Biometric verification is always required.");
  }
}
function PasswordFormComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_div_47_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_div_47_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 42)(3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_div_47_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Verify Your Identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Please verify your face to create this credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 46)(11, "app-data-biometrics", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("biometricsSuccess", function PasswordFormComponent_div_47_Template_app_data_biometrics_biometricsSuccess_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBiometricsSuccess($event));
    })("biometricsCancel", function PasswordFormComponent_div_47_Template_app_data_biometrics_biometricsCancel_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isDecryptMode", false)("itemData", ctx_r1.transformedPasswordData);
  }
}
class PasswordFormComponent {
  router;
  route;
  chromeService;
  dataPassingService;
  _walletService;
  _changeDetectorRef;
  passwordData = {
    url: "https://google.com",
    title: "Google Personal",
    email: "juliet@google.com",
    password: "mypassword123",
    notes: "My google account",
    folder: "My Favorites",
    insideFolder: true,
    masterPassword: ""
  };
  view;
  shareables;
  wallet;
  hasMasterPassword = false;
  isNewPassword = true;
  showPassword = false;
  showMasterPassword = false;
  formValid = false;
  showBiometrics = false;
  transformedPasswordData = null;
  constructor(router, route, chromeService, dataPassingService, _walletService, _changeDetectorRef) {
    this.router = router;
    this.route = route;
    this.chromeService = chromeService;
    this.dataPassingService = dataPassingService;
    this._walletService = _walletService;
    this._changeDetectorRef = _changeDetectorRef;
    this.view = this.route.snapshot.queryParamMap.get("view") || "home";
    this.shareables = {
      selectedTab: "assets",
      view: this.view,
      wallet: {}
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better security when handling passwords
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/passwords/new");
      }
      // Check if this is a new password or editing existing
      const id = _this.route.snapshot.paramMap.get("id");
      _this.isNewPassword = id === "new";
      if (!_this.isNewPassword) {
        // TODO: Load existing password data
        // this.loadPasswordData(id);
      }
      yield _this._setWallet();
      _this.checkFormValidity();
    })();
  }
  _setWallet() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this2._walletService.getFirstWalletFromStorage();
      if (!wallet?.name) {
        _this2.router.navigate(["/welcome"]);
        return;
      }
      _this2.shareables.wallet = wallet;
      _this2.wallet = _this2.shareables.wallet;
      console.log("wallet", wallet);
      _this2.hasMasterPassword = wallet.hasPassword || false;
      _this2._changeDetectorRef.detectChanges();
      _this2.checkFormValidity();
    })();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleMasterPasswordVisibility() {
    this.showMasterPassword = !this.showMasterPassword;
  }
  toggleFolder() {
    this.passwordData.insideFolder = !this.passwordData.insideFolder;
  }
  checkFormValidity() {
    const hasUrl = !!this.passwordData.url;
    const hasTitle = !!this.passwordData.title;
    const hasEmail = !!this.passwordData.email;
    const hasPassword = !!this.passwordData.password;
    const hasMasterPassword = !!this.passwordData.masterPassword;
    // Master password is only required if the wallet has a password
    const masterPasswordValid = this.hasMasterPassword ? hasMasterPassword : true;
    this.formValid = !!(hasUrl && hasTitle && hasEmail && hasPassword && masterPasswordValid);
  }
  onCancel() {
    this.router.navigate(["/dashboard/passwords"]);
  }
  onBiometricsSuccess(biometricData) {
    // Navigate to result page after successful biometrics
    this.router.navigate(["/dashboard/passwords/result"]);
  }
  onBiometricsCancel() {
    this.showBiometrics = false;
  }
  onSave() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.formValid) {
        return;
      }
      // Transform password data to match backend API expectations
      _this3.transformedPasswordData = {
        url: _this3.passwordData.url,
        title: _this3.passwordData.title,
        email: _this3.passwordData.email,
        password: _this3.passwordData.password,
        notes: _this3.passwordData.notes,
        folder: _this3.passwordData.folder,
        insideFolder: _this3.passwordData.insideFolder,
        masterPassword: _this3.passwordData.masterPassword,
        type: "passwords"
      };
      yield _this3.dataPassingService.storeData("passwords", _this3.transformedPasswordData);
      // Show biometrics modal instead of navigating
      _this3.showBiometrics = true;
    })();
  }
  static ɵfac = function PasswordFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_2__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_passing_service__WEBPACK_IMPORTED_MODULE_3__.DataPassingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_4__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PasswordFormComponent,
    selectors: [["app-password-form"]],
    decls: 48,
    vars: 19,
    consts: [[1, "password-form-container"], [1, "form-card"], [1, "form-header"], [1, "btn-back", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none"], ["d", "M15 10H5M5 10L10 15M5 10L10 5", "stroke", "#171717", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "form-title"], [1, "form-fields"], [1, "field-row"], [1, "field-group"], ["type", "text", "placeholder", "https://example.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Title", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Password", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], [1, "field-icon", "clickable", 3, "click"], ["width", "22", "height", "19", "viewBox", "0 0 22 19", "fill", "none", 4, "ngIf"], [1, "field-group", "folder-field", "w-50p"], ["type", "text", "placeholder", "Folder", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "toggle-section"], [1, "toggle-label"], [1, "toggle-switch", 3, "click"], [1, "toggle-track"], [1, "toggle-thumb"], [1, "field-group", "notes-field"], ["placeholder", "Notes", "rows", "4", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["class", "field-row", 4, "ngIf"], ["class", "form-hint", 4, "ngIf"], [1, "form-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "save-icon"], ["width", "15", "height", "15", "viewBox", "0 0 15 15", "fill", "none"], ["d", "M13.5 1.5L5.5 9.5L1.5 5.5L0 7L5.5 12.5L15 3L13.5 1.5Z", "fill", "white"], ["class", "biometrics-modal", 3, "click", 4, "ngIf"], ["width", "22", "height", "19", "viewBox", "0 0 22 19", "fill", "none"], ["d", "M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z", "fill", "#171717"], ["d", "M2 2L20 17", "stroke", "#171717", "stroke-width", "2", "stroke-linecap", "round"], [1, "field-group", "master-password-field"], [1, "form-input", 3, "ngModelChange", "type", "ngModel", "placeholder"], [1, "form-hint"], [1, "biometrics-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["type", "button", 1, "modal-close", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "modal-body"], [3, "biometricsSuccess", "biometricsCancel", "isDecryptMode", "itemData"]],
    template: function PasswordFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_Template_button_click_3_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Back to Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Secure credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.passwordData.url, $event) || (ctx.passwordData.url = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_13_listener() {
          return ctx.checkFormValidity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.passwordData.title, $event) || (ctx.passwordData.title = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_15_listener() {
          return ctx.checkFormValidity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.passwordData.email, $event) || (ctx.passwordData.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_18_listener() {
          return ctx.checkFormValidity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9)(20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.passwordData.password, $event) || (ctx.passwordData.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_20_listener() {
          return ctx.checkFormValidity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_Template_div_click_21_listener() {
          return ctx.togglePasswordVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, PasswordFormComponent__svg_svg_22_Template, 2, 0, "svg", 15)(23, PasswordFormComponent__svg_svg_23_Template, 3, 0, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 8)(25, "div", 16)(26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.passwordData.folder, $event) || (ctx.passwordData.folder = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18)(28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Inside a folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_Template_div_click_30_listener() {
          return ctx.toggleFolder();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 8)(34, "div", 23)(35, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function PasswordFormComponent_Template_textarea_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.passwordData.notes, $event) || (ctx.passwordData.notes = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, PasswordFormComponent_div_36_Template, 6, 5, "div", 25)(37, PasswordFormComponent_small_37_Template, 2, 1, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 27)(39, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_Template_button_click_39_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PasswordFormComponent_Template_button_click_41_listener() {
          return ctx.onSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Save credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, PasswordFormComponent_div_47_Template, 12, 2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordData.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordData.folder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.passwordData.insideFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.passwordData.insideFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.passwordData.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasMasterPassword && ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx.formValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.formValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showBiometrics);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _shared_data_biometrics_component__WEBPACK_IMPORTED_MODULE_1__.DataBiometricsComponent],
    styles: [".password-form-container[_ngcontent-%COMP%] {\n  padding: 4px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  width: 796px;\n  padding: 48px;\n  background: white;\n  border-radius: 32px;\n  border: 1px solid #cdcdcd;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 32px;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  align-self: stretch;\n  display: flex;\n  justify-content: flex-start;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: #171717;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 12px;\n  border-radius: 8px;\n  transition: background-color 0.2s;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  align-self: stretch;\n  color: #171717;\n  font-size: 32px;\n  font-family: Inter, sans-serif;\n  font-weight: 600;\n  word-wrap: break-word;\n  margin: 0;\n  text-align: center;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%] {\n  align-self: stretch;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 24px;\n  display: flex;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  align-self: stretch;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 24px;\n  display: flex;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  align-self: stretch;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #515151;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.folder-field[_ngcontent-%COMP%] {\n  width: 485px;\n  flex: none;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.folder-field.w-50p[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.notes-field[_ngcontent-%COMP%] {\n  height: 124px;\n  align-items: flex-start;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.notes-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  resize: none;\n  width: 100%;\n  height: 100%;\n  color: #171717;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  font-weight: 500;\n  background: transparent;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.notes-field[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.master-password-field[_ngcontent-%COMP%] {\n  align-self: stretch;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  color: #171717;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  font-weight: 500;\n  background: transparent;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .field-icon.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group[_ngcontent-%COMP%]   .field-icon.clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  align-self: stretch;\n  color: #666;\n  font-size: 14px;\n  font-family: Inter, sans-serif;\n  font-weight: 400;\n  line-height: 1.4;\n  margin-top: 8px;\n  text-align: left;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  align-self: stretch;\n  justify-content: space-between;\n  align-items: flex-start;\n  display: flex;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  height: 56px;\n  padding-left: 24px;\n  padding-right: 24px;\n  overflow: hidden;\n  border-radius: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  display: inline-flex;\n  border: none;\n  background: transparent;\n  color: #171717;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  height: 56px;\n  padding-left: 24px;\n  padding-right: 24px;\n  background: #171717;\n  overflow: hidden;\n  border-radius: 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  display: flex;\n  border: none;\n  color: white;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: #333;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save.disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]   .save-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toggle-section[_ngcontent-%COMP%] {\n  height: 56px;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 16px;\n  display: flex;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 16px;\n  font-family: Inter, sans-serif;\n  font-weight: 500;\n  word-wrap: break-word;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: #1ea446;\n  border-radius: 32px;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2px;\n  display: flex;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]:hover {\n  background: #1a8f3a;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 24px;\n  background: #949494;\n  border-radius: 12px;\n  position: relative;\n  transition: background-color 0.2s;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-track.active[_ngcontent-%COMP%] {\n  background: #1ea446;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.2s;\n}\n.toggle-section[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%]   .toggle-thumb.active[_ngcontent-%COMP%] {\n  transform: translateX(24px);\n}\n\n.biometrics-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-width: 90vw;\n  max-height: 90vh;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 32px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  text-align: center;\n  position: relative;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: auto;\n  max-height: calc(90vh - 100px);\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   app-data-biometrics[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 900px) {\n  .password-form-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 32px 24px;\n    border-radius: 24px;\n  }\n  .password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%]   .field-group.folder-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%], \n   .password-form-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQ0Q7QUFDQztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFDSDtBQUNHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFDSTtFQUNDLG1CQUFBO0FBQ0w7QUFFSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQUw7QUFLRTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFISDtBQU1FO0VBQ0MsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUpIO0FBTUc7RUFDQyxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUpKO0FBTUk7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFKTDtBQU1LO0VBQ0MsWUFBQTtFQUNBLFVBQUE7QUFKTjtBQU1NO0VBQ0MsVUFBQTtBQUpQO0FBUUs7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7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LGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbkNGO0FBcUNFO0VBQ0MsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFuQ0g7QUFxQ0c7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFuQ0o7QUFxQ0k7RUFDQyxtQkFBQTtBQW5DTDtBQXNDSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBcENMO0FBd0NHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBdENKO0FBeUNHO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBdkNKO0FBMkNFO0VBQ0MsVUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQXpDSDtBQTJDRztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXpDSjs7QUFnREE7RUFDQztJQUNDLGFBQUE7RUE3Q0E7RUErQ0E7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQTdDRDtFQWdERTtJQUNDLHNCQUFBO0lBQ0EsU0FBQTtFQTlDSDtFQWdERztJQUNDLFdBQUE7RUE5Q0o7RUFtREM7SUFDQyxzQkFBQTtJQUNBLFNBQUE7RUFqREY7RUFtREU7O0lBRUMsV0FBQTtFQWpESDtBQUNGIiwiZmlsZSI6InBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtZm9ybS1jb250YWluZXIge1xuXHRwYWRkaW5nOiA0cHg7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG5cdC5mb3JtLWNhcmQge1xuXHRcdHdpZHRoOiA3OTZweDtcblx0XHRwYWRkaW5nOiA0OHB4O1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDMycHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiAzMnB4O1xuXG5cdFx0LmZvcm0taGVhZGVyIHtcblx0XHRcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG5cdFx0XHQuYnRuLWJhY2sge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRnYXA6IDhweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmZvcm0tdGl0bGUge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHQuZm9ybS1maWVsZHMge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdGdhcDogMjRweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRcdC5maWVsZC1yb3cge1xuXHRcdFx0XHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRnYXA6IDI0cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRcdFx0LmZpZWxkLWdyb3VwIHtcblx0XHRcdFx0XHRmbGV4OiAxIDEgMDtcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM1MTUxNTE7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdFx0XHQmLmZvbGRlci1maWVsZCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNDg1cHg7XG5cdFx0XHRcdFx0XHRmbGV4OiBub25lO1xuXG5cdFx0XHRcdFx0XHQmLnctNTBwIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLm5vdGVzLWZpZWxkIHtcblx0XHRcdFx0XHRcdGhlaWdodDogMTI0cHg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuXHRcdFx0XHRcdFx0LmZvcm0tdGV4dGFyZWEge1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHJlc2l6ZTogbm9uZTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuXHRcdFx0XHRcdFx0XHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLm1hc3Rlci1wYXNzd29yZC1maWVsZCB7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZvcm0taW5wdXQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuXHRcdFx0XHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmllbGQtaWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdFx0XHQmLmNsaWNrYWJsZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mb3JtLWhpbnQge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdH1cblxuXHRcdC5mb3JtLWFjdGlvbnMge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblxuXHRcdFx0LmJ0bi1jYW5jZWwge1xuXHRcdFx0XHRoZWlnaHQ6IDU2cHg7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMjRweDtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMjRweDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogOHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tc2F2ZSB7XG5cdFx0XHRcdGhlaWdodDogNTZweDtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNHB4O1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMTcxNzE3O1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0Jjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuZGlzYWJsZWQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjY2M7XG5cdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2F2ZS1pY29uIHtcblx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi50b2dnbGUtc2VjdGlvbiB7XG5cdGhlaWdodDogNTZweDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDE2cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0LnRvZ2dsZS1sYWJlbCB7XG5cdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcblx0fVxuXG5cdC50b2dnbGUtc3dpdGNoIHtcblx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0YmFja2dyb3VuZDogIzFlYTQ0Njtcblx0XHRib3JkZXItcmFkaXVzOiAzMnB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogMnB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogIzFhOGYzYTtcblx0XHR9XG5cblx0XHQudG9nZ2xlLXRyYWNrIHtcblx0XHRcdHdpZHRoOiA0OHB4O1xuXHRcdFx0aGVpZ2h0OiAyNHB4O1xuXHRcdFx0YmFja2dyb3VuZDogIzk0OTQ5NDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogIzFlYTQ0Njtcblx0XHRcdH1cblxuXHRcdFx0LnRvZ2dsZS10aHVtYiB7XG5cdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcblxuXHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIEJpb21ldHJpY3MgTW9kYWwgU3R5bGVzXG4uYmlvbWV0cmljcy1tb2RhbCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR6LWluZGV4OiAxMDAwO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcblxuXHQubW9kYWwtY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0bWF4LXdpZHRoOiA5MHZ3O1xuXHRcdG1heC1oZWlnaHQ6IDkwdmg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQubW9kYWwtaGVhZGVyIHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMzJweCAxNnB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC5tb2RhbC1jbG9zZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAxNnB4O1xuXHRcdFx0XHRyaWdodDogMTZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubW9kYWwtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0XHRtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMDBweCk7XG5cblx0XHRcdGFwcC1kYXRhLWJpb21ldHJpY3Mge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuXHQucGFzc3dvcmQtZm9ybS1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDE2cHg7XG5cblx0XHQuZm9ybS1jYXJkIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0cGFkZGluZzogMzJweCAyNHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjRweDtcblxuXHRcdFx0LmZvcm0tZmllbGRzIHtcblx0XHRcdFx0LmZpZWxkLXJvdyB7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cblx0XHRcdFx0XHQuZmllbGQtZ3JvdXAuZm9sZGVyLWZpZWxkIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZm9ybS1hY3Rpb25zIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxNnB4O1xuXG5cdFx0XHRcdC5idG4tY2FuY2VsLFxuXHRcdFx0XHQuYnRuLXNhdmUge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXNzd29yZHMvcGFzc3dvcmQtZm9ybS9wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNEO0FBQ0M7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBQ0g7QUFDRztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNKO0FBQ0k7RUFDQyxtQkFBQTtBQUNMO0FBRUk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUFMO0FBS0U7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSEg7QUFNRTtFQUNDLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFKSDtBQU1HO0VBQ0MsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFKSjtBQU1JO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSkw7QUFNSztFQUNDLFlB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QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFuQ0Q7QUFxQ0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW5DRjtBQXFDRTtFQUNDLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBbkNIO0FBcUNHO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBbkNKO0FBcUNJO0VBQ0MsbUJBQUE7QUFuQ0w7QUFzQ0k7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQXBDTDtBQXdDRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXRDSjtBQXlDRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQXZDSjtBQTJDRTtFQUNDLFVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUF6Q0g7QUEyQ0c7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF6Q0o7O0FBZ0RBO0VBQ0M7SUFDQyxhQUFBO0VBN0NBO0VBK0NBO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUE3Q0Q7RUFnREU7SUFDQyxzQkFBQTtJQUNBLFNBQUE7RUE5Q0g7RUFnREc7SUFDQyxXQUFBO0VBOUNKO0VBbURDO0lBQ0Msc0JBQUE7SUFDQSxTQUFBO0VBakRGO0VBbURFOztJQUVDLFdBQUE7RUFqREg7QUFDRjtBQUVBLHcyZ0JBQXcyZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtZm9ybS1jb250YWluZXIge1xuXHRwYWRkaW5nOiA0cHg7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG5cdC5mb3JtLWNhcmQge1xuXHRcdHdpZHRoOiA3OTZweDtcblx0XHRwYWRkaW5nOiA0OHB4O1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDMycHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiAzMnB4O1xuXG5cdFx0LmZvcm0taGVhZGVyIHtcblx0XHRcdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG5cdFx0XHQuYnRuLWJhY2sge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRnYXA6IDhweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmZvcm0tdGl0bGUge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cblx0XHQuZm9ybS1maWVsZHMge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdGdhcDogMjRweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRcdC5maWVsZC1yb3cge1xuXHRcdFx0XHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRnYXA6IDI0cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRcdFx0LmZpZWxkLWdyb3VwIHtcblx0XHRcdFx0XHRmbGV4OiAxIDEgMDtcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM1MTUxNTE7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdFx0XHQmLmZvbGRlci1maWVsZCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogNDg1cHg7XG5cdFx0XHRcdFx0XHRmbGV4OiBub25lO1xuXG5cdFx0XHRcdFx0XHQmLnctNTBwIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLm5vdGVzLWZpZWxkIHtcblx0XHRcdFx0XHRcdGhlaWdodDogMTI0cHg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuXHRcdFx0XHRcdFx0LmZvcm0tdGV4dGFyZWEge1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHJlc2l6ZTogbm9uZTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuXHRcdFx0XHRcdFx0XHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLm1hc3Rlci1wYXNzd29yZC1maWVsZCB7XG5cdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBzdHJldGNoO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZvcm0taW5wdXQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuXHRcdFx0XHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmllbGQtaWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdFx0XHQmLmNsaWNrYWJsZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mb3JtLWhpbnQge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdH1cblxuXHRcdC5mb3JtLWFjdGlvbnMge1xuXHRcdFx0YWxpZ24tc2VsZjogc3RyZXRjaDtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblxuXHRcdFx0LmJ0bi1jYW5jZWwge1xuXHRcdFx0XHRoZWlnaHQ6IDU2cHg7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMjRweDtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMjRweDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogOHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tc2F2ZSB7XG5cdFx0XHRcdGhlaWdodDogNTZweDtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyNHB4O1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjMTcxNzE3O1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdFx0Jjpob3Zlcjpub3QoLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzMzMztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuZGlzYWJsZWQge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjY2M7XG5cdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc2F2ZS1pY29uIHtcblx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi50b2dnbGUtc2VjdGlvbiB7XG5cdGhlaWdodDogNTZweDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDE2cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cblx0LnRvZ2dsZS1sYWJlbCB7XG5cdFx0Y29sb3I6ICMxNzE3MTc7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcblx0fVxuXG5cdC50b2dnbGUtc3dpdGNoIHtcblx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0YmFja2dyb3VuZDogIzFlYTQ0Njtcblx0XHRib3JkZXItcmFkaXVzOiAzMnB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogMnB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogIzFhOGYzYTtcblx0XHR9XG5cblx0XHQudG9nZ2xlLXRyYWNrIHtcblx0XHRcdHdpZHRoOiA0OHB4O1xuXHRcdFx0aGVpZ2h0OiAyNHB4O1xuXHRcdFx0YmFja2dyb3VuZDogIzk0OTQ5NDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cblx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogIzFlYTQ0Njtcblx0XHRcdH1cblxuXHRcdFx0LnRvZ2dsZS10aHVtYiB7XG5cdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcblxuXHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIEJpb21ldHJpY3MgTW9kYWwgU3R5bGVzXG4uYmlvbWV0cmljcy1tb2RhbCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR6LWluZGV4OiAxMDAwO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcblxuXHQubW9kYWwtY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0bWF4LXdpZHRoOiA5MHZ3O1xuXHRcdG1heC1oZWlnaHQ6IDkwdmg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQubW9kYWwtaGVhZGVyIHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMzJweCAxNnB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC5tb2RhbC1jbG9zZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAxNnB4O1xuXHRcdFx0XHRyaWdodDogMTZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubW9kYWwtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0XHRtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMDBweCk7XG5cblx0XHRcdGFwcC1kYXRhLWJpb21ldHJpY3Mge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuXHQucGFzc3dvcmQtZm9ybS1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDE2cHg7XG5cblx0XHQuZm9ybS1jYXJkIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0cGFkZGluZzogMzJweCAyNHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjRweDtcblxuXHRcdFx0LmZvcm0tZmllbGRzIHtcblx0XHRcdFx0LmZpZWxkLXJvdyB7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cblx0XHRcdFx0XHQuZmllbGQtZ3JvdXAuZm9sZGVyLWZpZWxkIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZm9ybS1hY3Rpb25zIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxNnB4O1xuXG5cdFx0XHRcdC5idG4tY2FuY2VsLFxuXHRcdFx0XHQuYnRuLXNhdmUge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-passwords_password-form_password-form_component_ts.js.map