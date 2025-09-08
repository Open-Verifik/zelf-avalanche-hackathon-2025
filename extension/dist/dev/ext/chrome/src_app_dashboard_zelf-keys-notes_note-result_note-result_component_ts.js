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









function NoteResultComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83C\uDF89 Storage Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 24)(4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.apiResult.message || "Note stored successfully!");
  }
}
function NoteResultComponent_div_9_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDDBC\uFE0F NFT Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 26)(4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 29)(7, "div", 16)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Token ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 16)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 16)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.apiResult.NFT.metadata.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", ctx_r1.apiResult.NFT.tokenId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.apiResult.NFT.cost, " AVAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.apiResult.NFT.contractAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.apiResult.NFT.explorerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](27, 7, ctx_r1.apiResult.NFT.transactionHash, 0, 10), "...", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 11, ctx_r1.apiResult.NFT.transactionHash, -10), " ");
  }
}
function NoteResultComponent_div_9_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83C\uDF10 IPFS Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 34)(4, "div", 16)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "IPFS Hash");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 16)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Gateway URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " View on IPFS Gateway ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 16)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "File Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.apiResult.ipfs.hash);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.apiResult.ipfs.gatewayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.apiResult.ipfs.pinSize, " bytes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.apiResult.ipfs.timestamp ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 4, ctx_r1.apiResult.ipfs.timestamp, "medium") : "N/A");
  }
}
function NoteResultComponent_div_9_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDD10 ZelfProof Generated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 37)(4, "div", 38)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "ZelfProof String");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_div_9_div_39_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copyZelfProof());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 38)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.apiResult.zelfProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.apiResult.zelfQR, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function NoteResultComponent_div_9_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "pre", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx_r1.apiResult));
  }
}
function NoteResultComponent_div_9_p_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Your note is now securely stored. You can view it in your notes list or add another note. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NoteResultComponent_div_9_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please review the error details above and try again. If the problem persists, contact support. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NoteResultComponent_div_9_p_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The system couldn't determine the status. Please check the API response above for details. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NoteResultComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NoteResultComponent_div_9_div_1_Template, 6, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13)(3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\uD83D\uDCDD Stored Note Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15)(6, "div", 16)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 16)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Zelf Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, NoteResultComponent_div_9_div_37_Template, 29, 14, "div", 12)(38, NoteResultComponent_div_9_div_38_Template, 25, 7, "div", 12)(39, NoteResultComponent_div_9_div_39_Template, 14, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13)(41, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_div_9_Template_h3_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleDebugView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " \uD83D\uDD0D Debug Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, NoteResultComponent_div_9_div_45_Template, 4, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 13)(47, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Next Steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, NoteResultComponent_div_9_p_50_Template, 2, 0, "p", 23)(51, NoteResultComponent_div_9_p_51_Template, 2, 0, "p", 23)(52, NoteResultComponent_div_9_p_52_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.getResultStatus() === "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.apiResult.publicData == null ? null : ctx_r1.apiResult.publicData.title) || ctx_r1.noteData.title || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.apiResult.publicData == null ? null : ctx_r1.apiResult.publicData.folder) || ctx_r1.noteData.folder || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.apiResult.publicData == null ? null : ctx_r1.apiResult.publicData.type) || "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.apiResult.publicData == null ? null : ctx_r1.apiResult.publicData.category) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.apiResult.publicData == null ? null : ctx_r1.apiResult.publicData.zelfName) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.apiResult.publicData == null ? null : ctx_r1.apiResult.publicData.timestamp) ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](36, 15, ctx_r1.apiResult.publicData.timestamp, "medium") : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.apiResult.NFT == null ? null : ctx_r1.apiResult.NFT.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.apiResult.ipfs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.apiResult.zelfProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.showDebug ? "\u25BC" : "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showDebug);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.getResultStatus() === "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.getResultStatus() === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.getResultStatus() === "unknown");
  }
}
function NoteResultComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading result...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class NoteResultComponent {
  router;
  route;
  chromeService;
  dataPassingService;
  apiResult = null;
  noteData = null;
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
    if (this.error || this.apiResult?.error) {
      return "error";
    }
    if (this.apiResult?.success === true) {
      return "success";
    }
    return "unknown";
  }
  getStatusIcon() {
    switch (this.getResultStatus()) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      default:
        return "❓";
    }
  }
  getStatusTitle() {
    switch (this.getResultStatus()) {
      case "success":
        return "Note Stored Successfully!";
      case "error":
        return "Error Storing Note";
      default:
        return "Unknown Status";
    }
  }
  getStatusMessage() {
    switch (this.getResultStatus()) {
      case "success":
        return "Your note has been securely stored and encrypted with blockchain verification.";
      case "error":
        return this.error || "An error occurred while storing your note.";
      default:
        return "The system couldn't determine the storage status.";
    }
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
    decls: 16,
    vars: 5,
    consts: [[1, "note-result-container"], [1, "result-card"], [1, "result-header"], [1, "status-icon"], [1, "result-title"], [1, "result-message"], ["class", "result-content", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "result-actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "result-content"], ["class", "data-section", 4, "ngIf"], [1, "data-section"], [1, "section-title"], [1, "data-grid"], [1, "data-item"], [1, "type-badge"], [1, "category-badge"], [1, "debug-toggle", 3, "click"], [1, "toggle-icon"], ["class", "api-response", 4, "ngIf"], [1, "next-steps"], [4, "ngIf"], [1, "success-summary"], [1, "success-message"], [1, "nft-info"], [1, "nft-image"], ["alt", "ZelfKey NFT", 3, "src"], [1, "nft-details"], [1, "token-id"], [1, "cost"], [1, "contract-address"], ["target", "_blank", 1, "tx-link", 3, "href"], [1, "ipfs-info"], [1, "hash"], ["target", "_blank", 1, "gateway-link", 3, "href"], [1, "zelfproof-info"], [1, "data-item", "full-width"], ["title", "Click to copy", 1, "zelfproof-string", 3, "click"], [1, "qr-code"], ["alt", "ZelfProof QR Code", 3, "src"], [1, "api-response"], [1, "json-display"], [1, "loading-state"], [1, "spinner"]],
    template: function NoteResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NoteResultComponent_div_9_Template, 53, 18, "div", 6)(10, NoteResultComponent_div_10_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_Template_button_click_12_listener() {
          return ctx.onBackToNotes();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Back to Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteResultComponent_Template_button_click_14_listener() {
          return ctx.onAddAnotherNote();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Add Another Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getStatusIcon());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getStatusTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getStatusMessage());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    styles: [".note-result-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%] {\n  width: 800px;\n  max-width: 100%;\n  background: white;\n  border-radius: 24px;\n  border: 1px solid #cdcdcd;\n  padding: 48px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%] {\n    padding: 24px;\n    margin: 16px;\n  }\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  color: #171717;\n  font-size: 32px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-header[_ngcontent-%COMP%]   .result-message[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 18px;\n  margin: 0;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #171717;\n  margin: 0 0 20px 0;\n  border-bottom: 2px solid #f5f5f5;\n  padding-bottom: 8px;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title.debug-toggle[_ngcontent-%COMP%]:hover {\n  color: #007aff;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-left: 8px;\n  color: #666;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .success-summary[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  border: 1px solid #9ae6b4;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .success-summary[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  color: #2f855a;\n  font-weight: 500;\n  margin: 0;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 16px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #171717;\n  word-break: break-all;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span.type-badge[_ngcontent-%COMP%], .note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span.category-badge[_ngcontent-%COMP%] {\n  background: #007aff;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  display: inline-block;\n  word-break: normal;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span.category-badge[_ngcontent-%COMP%] {\n  background: #34c759;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span.zelfproof-string[_ngcontent-%COMP%] {\n  font-family: \"SF Mono\", Monaco, \"Cascadia Code\", \"Roboto Mono\", Consolas, \"Courier New\", monospace;\n  font-size: 11px;\n  line-height: 1.4;\n  background: #f0f0f0;\n  padding: 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  max-height: 120px;\n  overflow-y: auto;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   span.zelfproof-string[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  gap: 24px;\n  background: #f8f9ff;\n  border: 1px solid #e0e4ff;\n  border-radius: 12px;\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n  border: 1px solid #e0e4ff;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e4ff;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .token-id[_ngcontent-%COMP%] {\n  color: #007aff;\n  font-weight: 600;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  color: #f7931e;\n  font-weight: 600;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .contract-address[_ngcontent-%COMP%] {\n  font-family: \"SF Mono\", Monaco, monospace;\n  font-size: 12px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .tx-link[_ngcontent-%COMP%] {\n  color: #007aff;\n  text-decoration: none;\n  font-family: \"SF Mono\", Monaco, monospace;\n  font-size: 12px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .nft-info[_ngcontent-%COMP%]   .nft-details[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .tx-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .ipfs-info[_ngcontent-%COMP%] {\n  background: #f0fff0;\n  border: 1px solid #9ae6b4;\n  border-radius: 12px;\n  padding: 24px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .ipfs-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #9ae6b4;\n  margin-bottom: 12px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .ipfs-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .ipfs-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .hash[_ngcontent-%COMP%] {\n  font-family: \"SF Mono\", Monaco, monospace;\n  font-size: 12px;\n  color: #2f855a;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .ipfs-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .gateway-link[_ngcontent-%COMP%] {\n  color: #2f855a;\n  text-decoration: none;\n  font-weight: 500;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .ipfs-info[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   .gateway-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .zelfproof-info[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  height: auto;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .api-response[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .api-response[_ngcontent-%COMP%]   .json-display[_ngcontent-%COMP%] {\n  font-family: \"SF Mono\", Monaco, \"Cascadia Code\", \"Roboto Mono\", Consolas, \"Courier New\", monospace;\n  font-size: 12px;\n  line-height: 1.4;\n  color: #495057;\n  margin: 0;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .next-steps[_ngcontent-%COMP%] {\n  background: #fff9e6;\n  border: 1px solid #ffd60a;\n  border-radius: 12px;\n  padding: 20px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-content[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   .next-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8b6914;\n  margin: 0;\n  line-height: 1.6;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007aff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 16px;\n  margin: 0;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  margin-top: 48px;\n  padding-top: 32px;\n  border-top: 1px solid #f0f0f0;\n}\n@media (max-width: 768px) {\n  .note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 160px;\n}\n@media (max-width: 768px) {\n  .note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);\n  color: white;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #495057;\n  border: 1px solid #dee2e6;\n}\n.note-result-container[_ngcontent-%COMP%]   .result-card[_ngcontent-%COMP%]   .result-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNEO0FBQ0M7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtBQUNGO0FBQ0U7RUFURDtJQVVFLGFBQUE7SUFDQSxZQUFBO0VBRUQ7QUFDRjtBQUFFO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUVIO0FBQUc7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNHO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBS0c7RUFDQyxtQkFBQTtBQUhKO0FBS0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBSEw7QUFNTTtFQUNDLGNBQUE7QUFKUDtBQVFLO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU5OO0FBVUk7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFSTDtBQVVLO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQVJOO0FBWUk7RUFDQyxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFWTDtBQWFJO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQVhMO0FBYUs7RUFDQyxpQkFBQTtBQVhOO0FBY0s7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlC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QkUsV0FBQTtJQUNBLGVBQUE7RUE5Q0g7QUFDRjtBQWlERztFQUNDLDZEQUFBO0VBQ0EsWUFBQTtBQS9DSjtBQWlESTtFQUNDLDJCQUFBO0VBQ0EsNkNBQUE7QUEvQ0w7QUFtREc7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWpESjtBQW1ESTtFQUNDLG1CQUFBO0VBQ0EsMkJBQUE7QUFqREw7O0FBd0RBO0VBQ0M7SUFDQyx1QkFBQTtFQXJEQTtFQXVERDtJQUNDLHlCQUFBO0VBckRBO0FBQ0YiLCJmaWxlIjoibm90ZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1yZXN1bHQtY29udGFpbmVyIHtcblx0cGFkZGluZzogMjRweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cblx0LnJlc3VsdC1jYXJkIHtcblx0XHR3aWR0aDogODAwcHg7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcblx0XHRwYWRkaW5nOiA0OHB4O1xuXHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0bWFyZ2luOiAxNnB4O1xuXHRcdH1cblxuXHRcdC5yZXN1bHQtaGVhZGVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHRcdC5zdGF0dXMtaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0LnJlc3VsdC10aXRsZSB7XG5cdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnJlc3VsdC1tZXNzYWdlIHtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQucmVzdWx0LWNvbnRlbnQge1xuXHRcdFx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LnNlY3Rpb24tdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmLmRlYnVnLXRvZ2dsZSB7XG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwMDdhZmY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnRvZ2dsZS1pY29uIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3VjY2Vzcy1zdW1tYXJ5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjBmZmY0O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM5YWU2YjQ7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuc3VjY2Vzcy1tZXNzYWdlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMmY4NTVhO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZGF0YS1ncmlkIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuXHRcdFx0XHRcdGdhcDogMTZweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmRhdGEtaXRlbSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXG5cdFx0XHRcdFx0Ji5mdWxsLXdpZHRoIHtcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiAxIC8gLTE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGFiZWwge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuXHRcdFx0XHRcdFx0Ji50eXBlLWJhZGdlLFxuXHRcdFx0XHRcdFx0Ji5jYXRlZ29yeS1iYWRnZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDdhZmY7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDhweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0d29yZC1icmVhazogbm9ybWFsO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLmNhdGVnb3J5LWJhZGdlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzM0Yzc1OTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji56ZWxmcHJvb2Ytc3RyaW5nIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBNb25hY28sIFwiQ2FzY2FkaWEgQ29kZVwiLCBcIlJvYm90byBNb25vXCIsIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubmZ0LWluZm8ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG5cdFx0XHRcdFx0Z2FwOiAyNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmY7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTRmZjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cblx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5uZnQtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlNGZmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5uZnQtZGV0YWlscyB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG5cdFx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cblx0XHRcdFx0XHRcdC5kYXRhLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTRmZjtcblxuXHRcdFx0XHRcdFx0XHQudG9rZW4taWQge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDA3YWZmO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuY29zdCB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5jb250cmFjdC1hZGRyZXNzIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJTRiBNb25vXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC50eC1saW5rIHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzAwN2FmZjtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBNb25hY28sIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pcGZzLWluZm8ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMGZmZjA7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzlhZTZiNDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cblx0XHRcdFx0XHQuZGF0YS1pdGVtIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzlhZTZiNDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cblx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oYXNoIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBNb25hY28sIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzJmODU1YTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmdhdGV3YXktbGluayB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMmY4NTVhO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuemVsZnByb29mLWluZm8ge1xuXHRcdFx0XHRcdC5xci1jb2RlIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cblx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hcGktcmVzcG9uc2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXG5cdFx0XHRcdFx0Lmpzb24tZGlzcGxheSB7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJTRiBNb25vXCIsIE1vbmFjbywgXCJDYXNjYWRpYSBDb2RlXCIsIFwiUm9ib3RvIE1vbm9cIiwgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRcdFx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uZXh0LXN0ZXBzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmOWU2O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmQ2MGE7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzhiNjkxNDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmxvYWRpbmctc3RhdGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0XHQuc3Bpbm5lciB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRcdGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3YWZmO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnJlc3VsdC1hY3Rpb25zIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDQ4cHg7XG5cdFx0XHRwYWRkaW5nLXRvcDogMzJweDtcblx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXByaW1hcnksXG5cdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG1pbi13aWR0aDogMTYwcHg7XG5cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWluLXdpZHRoOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDdhZmYgMCUsICMwMDUxZDUgMTAwJSk7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1ub3Rlcy9ub3RlLXJlc3VsdC9ub3RlLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDRDtBQUNDO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFDRjtBQUNFO0VBVEQ7SUFVRSxhQUFBO0lBQ0EsWUFBQTtFQUVEO0FBQ0Y7QUFBRTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSDtBQUFHO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUc7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUtHO0VBQ0MsbUJBQUE7QUFISjtBQUtJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUhMO0FBTU07RUFDQyxjQUFBO0FBSlA7QUFRSztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFOTjtBQVVJO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUkw7QUFVSztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFSTjtBQVlJO0VBQ0MsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVkw7QUFhSTtFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFYTDtBQWFLO0VBQ0MsaUJBQUE7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QUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBaERKO0FBa0RJO0VBZkQ7O0lBZ0JFLFdBQUE7SUFDQSxlQUFBO0VBOUNIO0FBQ0Y7QUFpREc7RUFDQyw2REFBQTtFQUNBLFlBQUE7QUEvQ0o7QUFpREk7RUFDQywyQkFBQTtFQUNBLDZDQUFBO0FBL0NMO0FBbURHO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFqREo7QUFtREk7RUFDQyxtQkFBQTtFQUNBLDJCQUFBO0FBakRMOztBQXdEQTtFQUNDO0lBQ0MsdUJBQUE7RUFyREE7RUF1REQ7SUFDQyx5QkFBQTtFQXJEQTtBQUNGO0FBQ0EsZ3dmQUFnd2YiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1yZXN1bHQtY29udGFpbmVyIHtcblx0cGFkZGluZzogMjRweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cblx0LnJlc3VsdC1jYXJkIHtcblx0XHR3aWR0aDogODAwcHg7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcblx0XHRwYWRkaW5nOiA0OHB4O1xuXHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0bWFyZ2luOiAxNnB4O1xuXHRcdH1cblxuXHRcdC5yZXN1bHQtaGVhZGVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHRcdC5zdGF0dXMtaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0LnJlc3VsdC10aXRsZSB7XG5cdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnJlc3VsdC1tZXNzYWdlIHtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQucmVzdWx0LWNvbnRlbnQge1xuXHRcdFx0LmRhdGEtc2VjdGlvbiB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LnNlY3Rpb24tdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMTcxNzE3O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmLmRlYnVnLXRvZ2dsZSB7XG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMwMDdhZmY7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnRvZ2dsZS1pY29uIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3VjY2Vzcy1zdW1tYXJ5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjBmZmY0O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM5YWU2YjQ7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuc3VjY2Vzcy1tZXNzYWdlIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMmY4NTVhO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZGF0YS1ncmlkIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuXHRcdFx0XHRcdGdhcDogMTZweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmRhdGEtaXRlbSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXG5cdFx0XHRcdFx0Ji5mdWxsLXdpZHRoIHtcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiAxIC8gLTE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGFiZWwge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzE3MTcxNztcblx0XHRcdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuXHRcdFx0XHRcdFx0Ji50eXBlLWJhZGdlLFxuXHRcdFx0XHRcdFx0Ji5jYXRlZ29yeS1iYWRnZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDdhZmY7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDhweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0d29yZC1icmVhazogbm9ybWFsO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLmNhdGVnb3J5LWJhZGdlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzM0Yzc1OTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji56ZWxmcHJvb2Ytc3RyaW5nIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBNb25hY28sIFwiQ2FzY2FkaWEgQ29kZVwiLCBcIlJvYm90byBNb25vXCIsIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubmZ0LWluZm8ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG5cdFx0XHRcdFx0Z2FwOiAyNHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmY7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTRmZjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cblx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5uZnQtaW1hZ2Uge1xuXHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlNGZmO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5uZnQtZGV0YWlscyB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG5cdFx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cblx0XHRcdFx0XHRcdC5kYXRhLWl0ZW0ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTRmZjtcblxuXHRcdFx0XHRcdFx0XHQudG9rZW4taWQge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDA3YWZmO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQuY29zdCB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5jb250cmFjdC1hZGRyZXNzIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJTRiBNb25vXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC50eC1saW5rIHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzAwN2FmZjtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBNb25hY28sIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5pcGZzLWluZm8ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMGZmZjA7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzlhZTZiNDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cblx0XHRcdFx0XHQuZGF0YS1pdGVtIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzlhZTZiNDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cblx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oYXNoIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiU0YgTW9ub1wiLCBNb25hY28sIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzJmODU1YTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmdhdGV3YXktbGluayB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMmY4NTVhO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuemVsZnByb29mLWluZm8ge1xuXHRcdFx0XHRcdC5xci1jb2RlIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cblx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hcGktcmVzcG9uc2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXG5cdFx0XHRcdFx0Lmpzb24tZGlzcGxheSB7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJTRiBNb25vXCIsIE1vbmFjbywgXCJDYXNjYWRpYSBDb2RlXCIsIFwiUm9ib3RvIE1vbm9cIiwgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0d2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXHRcdFx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5uZXh0LXN0ZXBzIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmOWU2O1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmQ2MGE7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzhiNjkxNDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmxvYWRpbmctc3RhdGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0XHQuc3Bpbm5lciB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRcdGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3YWZmO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnJlc3VsdC1hY3Rpb25zIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDQ4cHg7XG5cdFx0XHRwYWRkaW5nLXRvcDogMzJweDtcblx0XHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXByaW1hcnksXG5cdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdG1pbi13aWR0aDogMTYwcHg7XG5cblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWluLXdpZHRoOiBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDdhZmYgMCUsICMwMDUxZDUgMTAwJSk7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDEyMiwgMjU1LCAwLjMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-notes_note-result_note-result_component_ts.js.map