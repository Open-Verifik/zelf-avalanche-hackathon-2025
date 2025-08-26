"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-notes_note-result_note-result_component_ts"],{

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

/***/ 69642:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-notes/note-result/note-result.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteResultComponent: () => (/* binding */ NoteResultComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chrome.service */ 85043);
/* harmony import */ var _services_data_passing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data-passing.service */ 59284);









function NoteResultComponent_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDD10 ZelfProof Generated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 19)(4, "div", 20)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "ZelfProof String");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_div_2_div_24_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.copyZelfProof());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 20)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.apiResult.zelfProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.apiResult.zelfQR, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function NoteResultComponent_div_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "pre", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r2.apiResult));
  }
}
function NoteResultComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Note Created Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Your note has been securely stored and encrypted");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10)(8, "div", 11)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NoteResultComponent_div_2_div_24_Template, 14, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13)(26, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_div_2_Template_h3_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleDebugView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " \uD83D\uDD0D Debug Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, NoteResultComponent_div_2_div_30_Template, 4, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 13)(32, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Next Steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 18)(35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Your note is now securely stored. You can view it in your notes list or add another note.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.apiResult == null ? null : ctx_r2.apiResult.publicData == null ? null : ctx_r2.apiResult.publicData.title) || "Untitled Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r2.apiResult == null ? null : ctx_r2.apiResult.publicData == null ? null : ctx_r2.apiResult.publicData.type) || "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](23, 6, ctx_r2.apiResult == null ? null : ctx_r2.apiResult.publicData == null ? null : ctx_r2.apiResult.publicData.timestamp, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.apiResult.zelfProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.showDebug ? "\u25BC" : "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showDebug);
  }
}
function NoteResultComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Error Creating Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.error || "An error occurred while creating your note");
  }
}
function NoteResultComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Unknown Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "The system couldn't determine the status. Please check the result details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class NoteResultComponent {
  router;
  route;
  chromeService;
  dataPassingService;
  apiResult = null;
  loading = false;
  error = null;
  showDebug = false;
  constructor(router, route, chromeService, dataPassingService) {
    this.router = router;
    this.route = route;
    this.chromeService = chromeService;
    this.dataPassingService = dataPassingService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better user experience
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/notes/result");
      }
      // Get data from service instead of query params
      // Get API result from service
      const apiResult = _this.dataPassingService.getResult("notes");
      if (apiResult) {
        _this.apiResult = apiResult;
      } else {
        _this.error = "No API result available";
      }
    })();
  }
  getResultStatus() {
    if (this.error) return "error";
    if (this.apiResult?.success) return "success";
    return "unknown";
  }
  toggleDebugView() {
    this.showDebug = !this.showDebug;
  }
  onBackToNotes() {
    this.router.navigate(["/dashboard/notes"]);
  }
  onAddAnotherNote() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Clear the stored data when starting fresh
      yield _this2.dataPassingService.clearAll("notes");
      _this2.router.navigate(["/dashboard/notes/new"]);
    })();
  }
  copyZelfProof() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.apiResult?.zelfProof) {
        try {
          yield navigator.clipboard.writeText(_this3.apiResult.zelfProof);
        } catch (error) {
          // Fallback for older browsers
          const textArea = document.createElement("textarea");
          textArea.value = _this3.apiResult.zelfProof;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }
      }
    })();
  }
  static ɵfac = function NoteResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NoteResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_passing_service__WEBPACK_IMPORTED_MODULE_2__.DataPassingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NoteResultComponent,
    selectors: [["app-note-result"]],
    decls: 10,
    vars: 3,
    consts: [[1, "note-result"], [1, "result-container"], ["class", "success-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "unknown-state", 4, "ngIf"], [1, "result-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "success-state"], [1, "success-icon"], [1, "note-info"], [1, "info-item"], ["class", "data-section", 4, "ngIf"], [1, "data-section"], [1, "debug-toggle", 3, "click"], [1, "toggle-icon"], ["class", "api-response", 4, "ngIf"], [1, "section-title"], [1, "next-steps"], [1, "zelfproof-info"], [1, "data-item", "full-width"], ["title", "Click to copy", 1, "zelfproof-string", 3, "click"], [1, "qr-code"], ["alt", "ZelfProof QR Code", 3, "src"], [1, "api-response"], [1, "json-display"], [1, "error-state"], [1, "error-icon"], [1, "unknown-state"], [1, "unknown-icon"]],
    template: function NoteResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NoteResultComponent_div_2_Template, 37, 9, "div", 2)(3, NoteResultComponent_div_3_Template, 7, 1, "div", 3)(4, NoteResultComponent_div_4_Template, 7, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_Template_button_click_6_listener() {
          return ctx.onBackToNotes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Back to Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_Template_button_click_8_listener() {
          return ctx.onAddAnotherNote();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add Another Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getResultStatus() === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getResultStatus() === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getResultStatus() === "unknown");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    styles: [".note-result[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.note-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 32px;\n  border: 1px solid #f0f0f0;\n}\n.note-result[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .unknown-state[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.note-result[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   .unknown-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .unknown-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .unknown-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .unknown-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .unknown-state[_ngcontent-%COMP%]   .unknown-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.note-result[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .unknown-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 16px 0;\n}\n.note-result[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.note-result[_ngcontent-%COMP%]   .unknown-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n  max-width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 24px;\n  margin: 24px 0;\n}\n.note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #e9ecef;\n}\n.note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #495057;\n  min-width: 120px;\n}\n.note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1a1a1a;\n  font-weight: 500;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%] {\n  margin: 24px 0;\n  padding: 24px;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 16px 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title.debug-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title.debug-toggle[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667eea;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 8px;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .zelfproof-string[_ngcontent-%COMP%] {\n  font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", monospace;\n  font-size: 14px;\n  color: #2c3e50;\n  background: white;\n  padding: 16px;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  display: block;\n  word-break: break-all;\n  line-height: 1.4;\n  max-width: 100%;\n  overflow-wrap: break-word;\n  white-space: pre-wrap;\n  cursor: pointer;\n  -webkit-user-select: all;\n          user-select: all;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .zelfproof-string[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #007bff;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n  max-width: 250px;\n  margin: 12px auto 0;\n  padding: 16px;\n  background: white;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n  display: block;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .api-response[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .api-response[_ngcontent-%COMP%]   .json-display[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 16px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #333;\n  overflow-x: auto;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .next-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n  line-height: 1.5;\n}\n.note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 8px;\n  padding: 12px 24px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n\n@media (max-width: 768px) {\n  .note-result[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .note-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .note-result[_ngcontent-%COMP%]   .note-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .note-result[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n   .note-result[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhFQUFBO0FBQ0Q7QUFDQztFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGO0FBRUM7OztFQUdDLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFOzs7Ozs7Ozs7RUFHQyxlQUFBO0VBQ0EsbUJBQUE7QUFNSDtBQUhFOzs7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFPSDtBQUpFOzs7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFRSDtBQUpDO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTUY7QUFKRTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBTUg7QUFKRztFQUNDLG1CQUFBO0FBTUo7QUFIRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUtKO0FBRkc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSUo7QUFDQztFQUNDLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSDtBQUNHO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDSjtBQUNJO0VBQ0MsY0FBQTtBQUNMO0FBR0c7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQURKO0FBTUc7RUFDQyxtQkFBQTtBQUpKO0FBTUk7RUFDQyxnQkFBQTtBQUpMO0FBT0k7RUFDQyxXQUFBO0FBTEw7QUFRSTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFOTDtBQVNJO0VBQ0Msd0RBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQVBMO0FBU0s7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0FBUE47QUFXSTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBVEw7QUFXSztFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVE47QUFlRTtFQUNDLGdCQUFBO0FBYkg7QUFlRztFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBYko7QUFrQkc7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQXFCQztFQUNDLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFuQkY7QUFxQkU7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFuQkg7QUFxQkc7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0FBbkJKO0FBdUJFO0VBQ0MsNkRBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtBQXJCSDtBQXVCRztFQUNDLDJCQUFBO0VBQ0EsK0NBQUE7QUFyQko7O0FBNEJBO0VBQ0M7SUFDQyxhQUFBO0VBekJBO0VBMkJBO0lBQ0Msa0JBQUE7RUF6QkQ7RUE0QkE7SUFDQyxhQUFBO0VBMUJEO0VBNEJDO0lBQ0Msc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUExQkY7RUE0QkU7SUFDQyxlQUFBO0VBMUJIO0VBK0JBO0lBQ0MsYUFBQTtFQTdCRDtFQWdDQTtJQUNDLHNCQUFBO0VBOUJEO0VBZ0NDOztJQUVDLFdBQUE7RUE5QkY7QUFDRiIsImZpbGUiOiJub3RlLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLXJlc3VsdCB7XG5cdG1heC13aWR0aDogODAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcblxuXHQucmVzdWx0LWNvbnRhaW5lciB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0cGFkZGluZzogMzJweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuXHR9XG5cblx0LnN1Y2Nlc3Mtc3RhdGUsXG5cdC5lcnJvci1zdGF0ZSxcblx0LnVua25vd24tc3RhdGUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0LnN1Y2Nlc3MtaWNvbixcblx0XHQuZXJyb3ItaWNvbixcblx0XHQudW5rbm93bi1pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0fVxuXG5cdFx0aDIge1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0fVxuXHR9XG5cblx0Lm5vdGUtaW5mbyB7XG5cdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0bWFyZ2luOiAyNHB4IDA7XG5cblx0XHQuaW5mby1pdGVtIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHR9XG5cblx0XHRcdGxhYmVsIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcblx0XHRcdH1cblxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0bWFyZ2luOiAyNHB4IDA7XG5cdFx0cGFkZGluZzogMjRweDtcblx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cblx0XHQuc2VjdGlvbi10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0Ji5kZWJ1Zy10b2dnbGUge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC50b2dnbGUtaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnplbGZwcm9vZi1pbmZvIHtcblx0XHRcdC5kYXRhLWl0ZW0ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuZnVsbC13aWR0aCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsYWJlbCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnplbGZwcm9vZi1zdHJpbmcge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk1vbmFjb1wiLCBcIk1lbmxvXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzJjM2U1MDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IGFsbDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICMwMDdiZmY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnFyLWNvZGUge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMjUwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxMnB4IGF1dG8gMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5hcGktcmVzcG9uc2Uge1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblxuXHRcdFx0Lmpzb24tZGlzcGxheSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0XHRcdG1heC1oZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5uZXh0LXN0ZXBzIHtcblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnJlc3VsdC1hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGdhcDogMTZweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xuXG5cdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm5vdGUtcmVzdWx0IHtcblx0XHRwYWRkaW5nOiAxNnB4O1xuXG5cdFx0LnJlc3VsdC1jb250YWluZXIge1xuXHRcdFx0cGFkZGluZzogMjRweCAyMHB4O1xuXHRcdH1cblxuXHRcdC5ub3RlLWluZm8ge1xuXHRcdFx0cGFkZGluZzogMjBweDtcblxuXHRcdFx0LmluZm8taXRlbSB7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRnYXA6IDhweDtcblxuXHRcdFx0XHRsYWJlbCB7XG5cdFx0XHRcdFx0bWluLXdpZHRoOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdH1cblxuXHRcdC5yZXN1bHQtYWN0aW9ucyB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQuYnRuLXNlY29uZGFyeSxcblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1ub3Rlcy9ub3RlLXJlc3VsdC9ub3RlLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4RUFBQTtBQUNEO0FBQ0M7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUVDOzs7RUFHQyxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTs7Ozs7Ozs7O0VBR0MsZUFBQTtFQUNBLG1CQUFBO0FBTUg7QUFIRTs7O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBT0g7QUFKRTs7O0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUUg7QUFKQztFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQU1GO0FBSkU7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQU1IO0FBSkc7RUFDQyxtQkFBQTtBQU1KO0FBSEc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjtBQUZHO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUlKO0FBQ0M7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0g7QUFDRztFQUNDLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0o7QUFDSTtFQUNDLGNBQUE7QUFDTDtBQUdHO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFESjtBQU1HO0VBQ0MsbUJBQUE7QUFKSjtBQU1JO0VBQ0MsZ0JBQUE7QUFKTDtBQU9JO0VBQ0MsV0FBQTtBQUxMO0FBUUk7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTkw7QUFTSTtFQUNDLHdEQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFQTDtBQVNLO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQVBOO0FBV0k7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQVRMO0FBV0s7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVROO0FBZUU7RUFDQyxnQkFBQTtBQWJIO0FBZUc7RUFDQyxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWJKO0FBa0JHO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFxQkM7RUFDQyxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBbkJGO0FBcUJFO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBbkJIO0FBcUJHO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQW5CSjtBQXVCRTtFQUNDLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFyQkg7QUF1Qkc7RUFDQywyQkFBQTtFQUNBLCtDQUFBO0FBckJKOztBQTRCQTtFQUNDO0lBQ0MsYUFBQTtFQXpCQTtFQTJCQTtJQUNDLGtCQUFBO0VBekJEO0VBNEJBO0lBQ0MsYUFBQTtFQTFCRDtFQTRCQztJQUNDLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxRQUFBO0VBMUJGO0VBNEJFO0lBQ0MsZUFBQTtFQTFCSDtFQStCQTtJQUNDLGFBQUE7RUE3QkQ7RUFnQ0E7SUFDQyxzQkFBQTtFQTlCRDtFQWdDQzs7SUFFQyxXQUFBO0VBOUJGO0FBQ0Y7QUFHQSx3OVVBQXc5VSIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLXJlc3VsdCB7XG5cdG1heC13aWR0aDogODAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcblxuXHQucmVzdWx0LWNvbnRhaW5lciB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0cGFkZGluZzogMzJweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuXHR9XG5cblx0LnN1Y2Nlc3Mtc3RhdGUsXG5cdC5lcnJvci1zdGF0ZSxcblx0LnVua25vd24tc3RhdGUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0LnN1Y2Nlc3MtaWNvbixcblx0XHQuZXJyb3ItaWNvbixcblx0XHQudW5rbm93bi1pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0fVxuXG5cdFx0aDIge1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0fVxuXHR9XG5cblx0Lm5vdGUtaW5mbyB7XG5cdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0bWFyZ2luOiAyNHB4IDA7XG5cblx0XHQuaW5mby1pdGVtIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG5cblx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHR9XG5cblx0XHRcdGxhYmVsIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0bWluLXdpZHRoOiAxMjBweDtcblx0XHRcdH1cblxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0bWFyZ2luOiAyNHB4IDA7XG5cdFx0cGFkZGluZzogMjRweDtcblx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cblx0XHQuc2VjdGlvbi10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0Ji5kZWJ1Zy10b2dnbGUge1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC50b2dnbGUtaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnplbGZwcm9vZi1pbmZvIHtcblx0XHRcdC5kYXRhLWl0ZW0ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuZnVsbC13aWR0aCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsYWJlbCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnplbGZwcm9vZi1zdHJpbmcge1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk1vbmFjb1wiLCBcIk1lbmxvXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzJjM2U1MDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dXNlci1zZWxlY3Q6IGFsbDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICMwMDdiZmY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnFyLWNvZGUge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRcdFx0XHRcdG1heC13aWR0aDogMjUwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxMnB4IGF1dG8gMDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5hcGktcmVzcG9uc2Uge1xuXHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblxuXHRcdFx0Lmpzb24tZGlzcGxheSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0XHRcdG1heC1oZWlnaHQ6IDMwMHB4O1xuXHRcdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5uZXh0LXN0ZXBzIHtcblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnJlc3VsdC1hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGdhcDogMTZweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xuXG5cdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm5vdGUtcmVzdWx0IHtcblx0XHRwYWRkaW5nOiAxNnB4O1xuXG5cdFx0LnJlc3VsdC1jb250YWluZXIge1xuXHRcdFx0cGFkZGluZzogMjRweCAyMHB4O1xuXHRcdH1cblxuXHRcdC5ub3RlLWluZm8ge1xuXHRcdFx0cGFkZGluZzogMjBweDtcblxuXHRcdFx0LmluZm8taXRlbSB7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRnYXA6IDhweDtcblxuXHRcdFx0XHRsYWJlbCB7XG5cdFx0XHRcdFx0bWluLXdpZHRoOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdH1cblxuXHRcdC5yZXN1bHQtYWN0aW9ucyB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQuYnRuLXNlY29uZGFyeSxcblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-notes_note-result_note-result_component_ts.js.map