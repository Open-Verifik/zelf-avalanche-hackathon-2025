"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["common"],{

/***/ 9284:
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

/***/ 9526:
/*!***************************************************!*\
  !*** ./src/app/services/password-data.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordDataService: () => (/* binding */ PasswordDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class PasswordDataService {
  currentPassword = null;
  setCurrentPassword(password) {
    this.currentPassword = password;
  }
  getCurrentPassword() {
    return this.currentPassword;
  }
  clearCurrentPassword() {
    this.currentPassword = null;
  }
  static ɵfac = function PasswordDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PasswordDataService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PasswordDataService,
    factory: PasswordDataService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 32404:
/*!*********************************************!*\
  !*** ./src/app/services/network.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkService: () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/chrome.service */ 85043);



class NetworkService {
  _chromeService;
  constructor(_chromeService) {
    this._chromeService = _chromeService;
  }
  getNetworkSymbol(network) {
    switch (network) {
      case "ethereum":
        return "ETH";
      case "sui":
        return "SUI";
      case "polygon":
        return "POL";
      case "avalanche":
        return "AVAX";
      case "bitcoin":
        return "BTC";
      case "binance":
        return "BNB";
      case "solana":
        return "SOL";
      default:
        return "";
    }
  }
  getNetworkName(symbol) {
    if (!symbol) return "";
    const upperSymbol = symbol.toUpperCase();
    switch (upperSymbol) {
      case "ETH":
        return "ethereum";
      case "SOL":
        return "solana";
      case "AVAX":
        return "avalanche";
      case "SUI":
        return "sui";
      case "BTC":
        return "bitcoin";
      case "BNB":
        return "binance";
      case "POL":
        return "polygon";
      default:
        console.warn(`NetworkService: No name mapping for symbol: ${symbol}`);
        return "";
    }
  }
  getNetworkToken(network) {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tokens = yield _this._chromeService.getItemSession("tokens");
      if (!tokens || !tokens.length) return null;
      return tokens.find(token => token.name.toLowerCase() === network);
    })();
  }
  getChainId(network) {
    switch (network.toLowerCase()) {
      case "ethereum":
        return 1;
      case "avalanche":
        return 43114;
      case "solana":
        return 1399811149;
      case "sui":
        return 784;
      case "polygon":
        return 137;
      case "bitcoin":
        return 0;
      case "binance":
        return 56;
      default:
        return 1;
    }
  }
  getNetworkImage(network) {
    switch (network) {
      case "ethereum":
      case "ETH":
        return "./assets/networks/eth.png";
      case "sui":
      case "SUI":
        return "./assets/networks/sui.svg";
      case "avalanche":
      case "AVAX":
        return "./assets/networks/avax.png";
      case "solana":
      case "SOL":
        return "./assets/networks/sol.svg";
      case "bitcoin":
      case "BTC":
        return "./assets/networks/btc.png";
      case "binance":
      case "BNB":
        return "./assets/networks/bnb.png";
      case "polygon":
      case "POL":
        return "./assets/networks/pol.png";
      default:
        return "";
    }
  }
  static ɵfac = function NetworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NetworkService,
    factory: NetworkService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 65443:
/*!****************************************!*\
  !*** ./src/app/transaction.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet */ 45965);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chrome.service */ 85043);





class TransactionService {
  _chromeService;
  _recentAddresses = [];
  _swapData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.SwapData({});
  _swapData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  _transactionData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.TransactionData({});
  _transactionData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  constructor(_chromeService) {
    this._chromeService = _chromeService;
    this._chromeService.getItem("transactionData").then(response => {
      if (!response) this._transactionData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.TransactionData({});else this._transactionData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.TransactionData(response);
      this._transactionData$.next(this._transactionData);
    });
    this._chromeService.getItem("swapData").then(response => {
      if (!response) this._swapData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.SwapData({});else this._swapData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.SwapData(response);
      this._swapData$.next(this._swapData);
    });
    this._chromeService.getItem("recentAddresses").then(response => {
      if (!response) this._recentAddresses = [];else {
        response.forEach(address => {
          this._recentAddresses.push(address);
        });
      }
    });
  }
  get swapData$() {
    return this._swapData$.asObservable();
  }
  set swapData(value) {
    this._chromeService.setItem("swapData", value);
    this._swapData = value;
    this._swapData$.next(this._swapData);
  }
  get transactionData$() {
    return this._transactionData$.asObservable();
  }
  addToRecentAddresses(address) {
    if (!this._transactionData?.receiver?.address) return;
    const index = this._recentAddresses.map(recent => recent.address).indexOf(address.address);
    if (index > -1) {
      this._recentAddresses[index].lastUsed = new Date().toISOString();
      this._recentAddresses.sort((a, b) => new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime());
    } else {
      this._recentAddresses.push({
        ...address,
        lastUsed: new Date().toISOString()
      });
      if (this._recentAddresses.length > 5) {
        this._recentAddresses.sort((a, b) => new Date(a.lastUsed).getTime() - new Date(b.lastUsed).getTime());
        this._recentAddresses.shift();
      }
    }
    this._chromeService.setItem("recentAddresses", this._recentAddresses);
  }
  findAddressInRecentAddresses(key, value) {
    return this._recentAddresses.filter(recent => recent[key] === value);
  }
  getCurrentTransactionData() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._transactionData) return _this._transactionData;
      _this._transactionData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.TransactionData((yield _this._chromeService.getItem("transactionData")) || {});
      return _this._transactionData;
    })();
  }
  getCurrentSwapData() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2._swapData) return _this2._swapData;
      _this2._swapData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.SwapData((yield _this2._chromeService.getItem("swapData")) || {});
      return _this2._swapData;
    })();
  }
  removeTransactionData() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3._chromeService.removeItem("transactionData");
    })();
  }
  removeAddressFromRecentAddresses(address) {
    const index = this._recentAddresses.map(recent => recent.address).indexOf(address);
    if (index === -1) return;
    this._recentAddresses.splice(index, 1);
  }
  setCurrentTransactionData(data) {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4._transactionData = new _wallet__WEBPACK_IMPORTED_MODULE_1__.TransactionData(data);
      yield _this4._chromeService.setItem("transactionData", _this4._transactionData);
    })();
  }
  static ɵfac = function TransactionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_chrome_service__WEBPACK_IMPORTED_MODULE_2__.ChromeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: TransactionService,
    factory: TransactionService.ɵfac,
    providedIn: "root"
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map