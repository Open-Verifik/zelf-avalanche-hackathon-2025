"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-passwords_zelf-keys-passwords_component_ts"],{

/***/ 59284:
/*!**************************************************!*\
  !*** ./src/app/services/data-passing.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataPassingService: () => (/* binding */ DataPassingService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chrome.service */ 85043);



class DataPassingService {
  chromeService;
  dataStore = {};
  resultStore = {};
  constructor(chromeService) {
    this.chromeService = chromeService;
    // Load any existing data from localStorage on service initialization
    // Use setTimeout to avoid blocking constructor
    setTimeout(() => {
      this.loadFromStorage();
    }, 0);
  }
  /**
   * Store form data for a specific form type
   */
  storeData(formType, data) {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.dataStore[formType] = data;
      yield _this.saveToStorage();
    })();
  }
  /**
   * Retrieve form data for a specific form type
   */
  getData(formType) {
    const data = this.dataStore[formType];
    return data || null;
  }
  /**
   * Store API result for a specific form type
   */
  storeResult(formType, result) {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.resultStore[formType] = result;
      yield _this2.saveToStorage();
    })();
  }
  /**
   * Retrieve API result for a specific form type
   */
  getResult(formType) {
    const result = this.resultStore[formType];
    return result || null;
  }
  /**
   * Clear form data for a specific form type
   */
  clearData(formType) {
    // also store it from the chrome storage
    this.chromeService.removeItem(`zelfDataPassing`);
    delete this.dataStore[formType];
  }
  /**
   * Clear result data for a specific form type
   */
  clearResult(formType) {
    delete this.resultStore[formType];
  }
  /**
   * Clear all data for a specific form type (both form and result)
   */
  clearAll(formType) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.clearData(formType);
      _this3.clearResult(formType);
      yield _this3.saveToStorage();
    })();
  }
  /**
   * Check if form data exists for a specific form type
   */
  hasData(formType) {
    return !!this.dataStore[formType];
  }
  /**
   * Check if result data exists for a specific form type
   */
  hasResult(formType) {
    return !!this.resultStore[formType];
  }
  /**
   * Get all stored data for debugging
   */
  getAllData() {
    return {
      formData: {
        ...this.dataStore
      },
      resultData: {
        ...this.resultStore
      }
    };
  }
  /**
   * Save data to localStorage for persistence
   */
  saveToStorage() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const storageData = {
          dataStore: _this4.dataStore,
          resultStore: _this4.resultStore,
          timestamp: Date.now()
        };
        if (_this4.chromeService.isExtension) {
          // Use Chrome storage for extension
          yield _this4.chromeService.setItem("zelfDataPassing", storageData);
        } else {
          // Use localStorage for web
          localStorage.setItem("zelfDataPassing", JSON.stringify(storageData));
        }
      } catch (error) {
        console.error("Error saving to storage:", error);
      }
    })();
  }
  /**
   * Load data from localStorage on service initialization
   */
  loadFromStorage() {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let storageData = null;
        if (_this5.chromeService.isExtension) {
          // Use Chrome storage for extension
          storageData = yield _this5.chromeService.getItem("zelfDataPassing");
        } else {
          // Use localStorage for web
          const localData = localStorage.getItem("zelfDataPassing");
          storageData = localData ? JSON.parse(localData) : null;
        }
        if (storageData) {
          const maxAge = 24 * 60 * 60 * 1000; // 24 hours
          // Check if data is not too old
          if (Date.now() - storageData.timestamp < maxAge) {
            _this5.dataStore = storageData.dataStore || {};
            _this5.resultStore = storageData.resultStore || {};
          } else {
            _this5.clearAllStorage();
          }
        }
      } catch (error) {
        console.error("Error loading from storage:", error);
        // Clear potentially corrupted data
        _this5.clearAllStorage();
      }
    })();
  }
  /**
   * Clear all data from both memory and storage
   */
  clearAllStorage() {
    this.dataStore = {};
    this.resultStore = {};
    try {
      if (this.chromeService.isExtension) {
        this.chromeService.removeItem("zelfDataPassing");
      } else {
        localStorage.removeItem("zelfDataPassing");
      }
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }
  /**
   * Manually clear storage for a specific form type
   */
  clearStorageForType(formType) {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.clearAll(formType);
    })();
  }
  /**
   * Get storage info for debugging
   */
  getStorageInfo() {
    return {
      isExtension: this.chromeService.isExtension,
      hasChromeService: !!this.chromeService,
      storageKeys: Object.keys(this.dataStore).concat(Object.keys(this.resultStore))
    };
  }
  static ɵfac = function DataPassingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataPassingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DataPassingService,
    factory: DataPassingService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 60587:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-passwords/zelf-keys-passwords.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfKeysPasswordsComponent: () => (/* binding */ ZelfKeysPasswordsComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _shared_data_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data-card.component */ 81695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wallet.service */ 69556);
/* harmony import */ var _services_password_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/password-data.service */ 9526);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chrome.service */ 85043);
/* harmony import */ var _services_data_passing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-passing.service */ 59284);













function ZelfKeysPasswordsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading your passwords...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysPasswordsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Error loading passwords");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZelfKeysPasswordsComponent_div_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ZelfKeysPasswordsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZelfKeysPasswordsComponent_div_9_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onAddPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Add New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Securely store a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ZelfKeysPasswordsComponent_div_10_app_data_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-data-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cardClick", function ZelfKeysPasswordsComponent_div_10_app_data_card_7_Template_app_data_card_cardClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPasswordClick($event));
    })("launchClick", function ZelfKeysPasswordsComponent_div_10_app_data_card_7_Template_app_data_card_launchClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPasswordClick($event));
    })("optionsClick", function ZelfKeysPasswordsComponent_div_10_app_data_card_7_Template_app_data_card_optionsClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPasswordClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const password_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", password_r6);
  }
}
function ZelfKeysPasswordsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 14)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ZelfKeysPasswordsComponent_div_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ZelfKeysPasswordsComponent_div_10_app_data_card_7_Template, 1, 1, "app-data-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r1.storedPasswords.length, " stored password", ctx_r1.storedPasswords.length !== 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.storedPasswords)("ngForTrackBy", ctx_r1.trackByPassword);
  }
}
class ZelfKeysPasswordsComponent {
  router;
  walletService;
  passwordDataService;
  chromeService;
  dataPassingService;
  storedPasswords = [];
  loading = false;
  error = null;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  constructor(router, walletService, passwordDataService, chromeService, dataPassingService) {
    this.router = router;
    this.walletService = walletService;
    this.passwordDataService = passwordDataService;
    this.chromeService = chromeService;
    this.dataPassingService = dataPassingService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better security and user experience
      // This is especially important for password management
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/passwords");
      }
      _this.loadStoredPasswords();
      // clean up the data in local storage for the passwords inside data passing service
      _this.dataPassingService.clearData("passwords");
    })();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadStoredPasswords() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = null;
      try {
        const response = yield _this2.walletService.listStoredPasswords();
        if (response?.data && Array.isArray(response.data)) {
          _this2.storedPasswords = response.data;
        } else if (response?.data && Array.isArray(response.data.data)) {
          // Handle nested data structure
          _this2.storedPasswords = response.data.data;
        } else {
          console.log("No valid data structure found in response");
          _this2.storedPasswords = [];
        }
      } catch (error) {
        _this2.error = "Failed to load stored passwords. Please try again.";
        _this2.storedPasswords = [];
      } finally {
        _this2.loading = false;
      }
    })();
  }
  onAddPassword() {
    this.router.navigate(["/dashboard/passwords/new"]);
  }
  onRefresh() {
    this.loadStoredPasswords();
  }
  onPasswordClick(password) {
    // Store the password data in the service
    this.passwordDataService.setCurrentPassword(password);
    // Navigate to password detail view
    this.router.navigate(["/dashboard/passwords/detail"]);
  }
  trackByPassword(index, password) {
    return password.publicData?.id || password.publicData?.title || index;
  }
  static ɵfac = function ZelfKeysPasswordsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfKeysPasswordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_password_data_service__WEBPACK_IMPORTED_MODULE_3__.PasswordDataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_4__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_passing_service__WEBPACK_IMPORTED_MODULE_5__.DataPassingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ZelfKeysPasswordsComponent,
    selectors: [["app-zelf-keys-passwords"]],
    decls: 11,
    vars: 4,
    consts: [[1, "zelf-keys-passwords"], [1, "header"], [1, "content"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "passwords-grid", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "icon"], [1, "btn-secondary", 3, "click"], [1, "passwords-grid"], [1, "add-password", 3, "click"], [1, "add-icon"], [1, "list-header"], [1, "password-cards"], ["category", "password", 3, "item", "cardClick", "launchClick", "optionsClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["category", "password", 3, "cardClick", "launchClick", "optionsClick", "item"]],
    template: function ZelfKeysPasswordsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Manage your secure passwords and credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ZelfKeysPasswordsComponent_div_7_Template, 4, 0, "div", 3)(8, ZelfKeysPasswordsComponent_div_8_Template, 9, 1, "div", 4)(9, ZelfKeysPasswordsComponent_div_9_Template, 8, 0, "div", 5)(10, ZelfKeysPasswordsComponent_div_10_Template, 8, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.storedPasswords.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _shared_data_card_component__WEBPACK_IMPORTED_MODULE_1__.DataCardComponent],
    styles: [".zelf-keys-passwords[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f0f0f0;\n  border-top: 3px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 24px 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-password[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 16px;\n  padding: 40px 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-password[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-password[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-password[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-password[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin: 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: 1px solid #f0f0f0;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n  border-color: #e0e0e0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%]   .app-email[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n  line-height: 1.4;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .launch-btn[_ngcontent-%COMP%] {\n  background: #ff6b35;\n  border: none;\n  border-radius: 12px;\n  padding: 12px 20px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  align-self: flex-start;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .launch-btn[_ngcontent-%COMP%]:hover {\n  background: #e55a2b;\n  transform: translateY(-1px);\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .launch-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%]   .launch-btn[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: white;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 140px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: white;\n  border-radius: 8px;\n  padding: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 4px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]   .qr-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #999;\n  font-size: 12px;\n  gap: 4px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]   .qr-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]   .qr-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .options-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  color: #666;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .options-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #333;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   .options-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-more[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-more[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 12px;\n  padding: 16px 32px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .add-more[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%] {\n    aspect-ratio: auto;\n    min-height: 280px;\n  }\n  .zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-left[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%] {\n    padding: 16px;\n    min-height: 120px;\n  }\n  .zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .passwords-grid[_ngcontent-%COMP%]   .password-cards[_ngcontent-%COMP%]   .password-card[_ngcontent-%COMP%]   .card-right[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1wYXNzd29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsOEVBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSDtBQUVFO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUg7QUFLRTs7O0VBR0Msa0JBQUE7RUFDQSxrQkFBQTtBQUhIO0FBS0c7OztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUc7OztFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQUFKO0FBR0c7OztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUc7OztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUdHO0VBQ0MsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBR0k7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0FBREw7QUFJSTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGTDtBQUtJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEw7QUFNSTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUpMO0FBUUc7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNDLGVBQUE7RUFD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O0VBN0NOO0FBQ0YiLCJmaWxlIjoiemVsZi1rZXlzLXBhc3N3b3Jkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56ZWxmLWtleXMtcGFzc3dvcmRzIHtcblx0cGFkZGluZzogMDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG5cblx0LmhlYWRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHQubG9hZGluZy1zdGF0ZSxcblx0XHQuZXJyb3Itc3RhdGUsXG5cdFx0LmVtcHR5LXN0YXRlIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblxuXHRcdFx0LnNwaW5uZXIge1xuXHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjZjBmMGYwO1xuXHRcdFx0XHRib3JkZXItdG9wOiAzcHggc29saWQgIzY2N2VlYTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0byAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNDhweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxMnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyNHB4IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnBhc3N3b3Jkcy1ncmlkIHtcblx0XHRcdC5hZGQtcGFzc3dvcmQge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0cGFkZGluZzogNDBweCAyMHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAyMDBweDtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2FkYjViZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hZGQtaWNvbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNmM3NTdkO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5saXN0LWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMTZweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGFzc3dvcmQtY2FyZHMge1xuXHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG5cdFx0XHRcdGdhcDogMjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQucGFzc3dvcmQtY2FyZCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuXHRcdFx0XHRcdGFzcGVjdC1yYXRpbzogMTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2UwZTBlMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2FyZC1sZWZ0IHtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRcdFx0XHRcdC5hcHAtbG9nbyB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHRcdFx0LmxvZ28taWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5hcHAtaW5mbyB7XG5cdFx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cblx0XHRcdFx0XHRcdFx0LmFwcC1uYW1lIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmFwcC1lbWFpbCB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5sYXVuY2gtYnRuIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmNmIzNTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGdhcDogOHB4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlNTVhMmI7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmJ0bi10ZXh0IHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmFycm93LWljb24ge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2FyZC1yaWdodCB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDE0MHB4O1xuXG5cdFx0XHRcdFx0XHQucXItY29kZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0XHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQucXItcGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0XHRnYXA6IDRweDtcblxuXHRcdFx0XHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jYXJkLWFjdGlvbnMge1xuXHRcdFx0XHRcdFx0XHQub3B0aW9ucy1idG4ge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRzdmcge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5hZGQtbW9yZSB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAzMnB4O1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnplbGYta2V5cy1wYXNzd29yZHMge1xuXHRcdC5jb250ZW50IHtcblx0XHRcdC5wYXNzd29yZHMtZ3JpZCB7XG5cdFx0XHRcdC5wYXNzd29yZC1jYXJkcyB7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXG5cdFx0XHRcdFx0LnBhc3N3b3JkLWNhcmQge1xuXHRcdFx0XHRcdFx0YXNwZWN0LXJhdGlvOiBhdXRvO1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogMjgwcHg7XG5cblx0XHRcdFx0XHRcdC5jYXJkLWxlZnQge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuY2FyZC1yaWdodCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEyMHB4O1xuXG5cdFx0XHRcdFx0XHRcdC5xci1jb2RlIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNjBweDtcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXNzd29yZHMvemVsZi1rZXlzLXBhc3N3b3Jkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSw4RUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNIO0FBRUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBSDtBQUtFOzs7RUFHQyxrQkFBQTtFQUNBLGtCQUFBO0FBSEg7QUFLRzs7O0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRzs7O0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRzs7O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRzs7O0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBR0c7RUFDQyxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBREo7QUFHSTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFETDtBQUlJO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZMO0FBS0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFITDtBQU1JO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBSkw7QUFRRztFQUNDLGFBQUE7RUFDQSw4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Q0MsYUFBQTtJQUNBLGlCQUFBO0VBN0NMO0VBK0NLO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUE3Q047QUFDRjtBQUNBLGdwZEFBZ3BkIiwic291cmNlc0NvbnRlbnQiOlsiLnplbGYta2V5cy1wYXNzd29yZHMge1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcblxuXHQuaGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0LmNvbnRlbnQge1xuXHRcdC5sb2FkaW5nLXN0YXRlLFxuXHRcdC5lcnJvci1zdGF0ZSxcblx0XHQuZW1wdHktc3RhdGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0XHQuc3Bpbm5lciB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlcjogM3B4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHRcdGJvcmRlci10b3A6IDNweCBzb2xpZCAjNjY3ZWVhO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDI0cHggMDtcblx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQucGFzc3dvcmRzLWdyaWQge1xuXHRcdFx0LmFkZC1wYXNzd29yZCB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0XHRwYWRkaW5nOiA0MHB4IDIwcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjYWRiNWJkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFkZC1pY29uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDQ4cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzZjNzU3ZDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lmxpc3QtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNjZWQ0ZGE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXNzd29yZC1jYXJkcyB7XG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcblx0XHRcdFx0Z2FwOiAyNHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdC5wYXNzd29yZC1jYXJkIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHRcdFx0YXNwZWN0LXJhdGlvOiAxO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jYXJkLWxlZnQge1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0XHRcdFx0LmFwcC1sb2dvIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRcdFx0XHQubG9nby1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmFwcC1pbmZvIHtcblx0XHRcdFx0XHRcdFx0ZmxleDogMTtcblxuXHRcdFx0XHRcdFx0XHQuYXBwLW5hbWUge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuYXBwLWVtYWlsIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmxhdW5jaC1idG4ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmY2YjM1O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjBweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2U1NWEyYjtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuYnRuLXRleHQge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuYXJyb3ctaWNvbiB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5jYXJkLXJpZ2h0IHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTQwcHg7XG5cblx0XHRcdFx0XHRcdC5xci1jb2RlIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5xci1wbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGdhcDogNHB4O1xuXG5cdFx0XHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNhcmQtYWN0aW9ucyB7XG5cdFx0XHRcdFx0XHRcdC5vcHRpb25zLWJ0biB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzY2NjtcblxuXHRcdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmFkZC1tb3JlIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4IDMycHg7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuemVsZi1rZXlzLXBhc3N3b3JkcyB7XG5cdFx0LmNvbnRlbnQge1xuXHRcdFx0LnBhc3N3b3Jkcy1ncmlkIHtcblx0XHRcdFx0LnBhc3N3b3JkLWNhcmRzIHtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cblx0XHRcdFx0XHQucGFzc3dvcmQtY2FyZCB7XG5cdFx0XHRcdFx0XHRhc3BlY3QtcmF0aW86IGF1dG87XG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAyODBweDtcblxuXHRcdFx0XHRcdFx0LmNhcmQtbGVmdCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jYXJkLXJpZ2h0IHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTZweDtcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTIwcHg7XG5cblx0XHRcdFx0XHRcdFx0LnFyLWNvZGUge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-passwords_zelf-keys-passwords_component_ts.js.map