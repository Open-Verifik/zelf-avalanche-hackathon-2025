"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-payment-cards_zelf-keys-payment-cards_component_ts"],{

/***/ 56851:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-payment-cards/zelf-keys-payment-cards.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfKeysPaymentCardsComponent: () => (/* binding */ ZelfKeysPaymentCardsComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chrome.service */ 85043);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _http_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http-wrapper.service */ 84099);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../wallet.service */ 69556);










function ZelfKeysPaymentCardsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading payment cards...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysPaymentCardsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Error Loading Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfKeysPaymentCardsComponent_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ZelfKeysPaymentCardsComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 21)(5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfKeysPaymentCardsComponent_div_10_div_6_Template_button_click_5_listener() {
      const card_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onEditCard(card_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfKeysPaymentCardsComponent_div_10_div_6_Template_button_click_7_listener() {
      const card_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onDeleteCard(card_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 27)(14, "div", 28)(15, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Card Holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 31)(20, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Expires");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r1.getCardGradient(card_r5.zelfProof));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.getCardType(card_r5.cardNumber).toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.getCardType(card_r5.cardNumber), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.getMiniQRCode(card_r5.zelfProof), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getMaskedCardNumber(card_r5.cardNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](card_r5.cardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", card_r5.expiryMonth, "/", card_r5.expiryYear.slice(-2), "");
  }
}
function ZelfKeysPaymentCardsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfKeysPaymentCardsComponent_div_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ZelfKeysPaymentCardsComponent_div_10_div_6_Template, 24, 10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 16)(8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfKeysPaymentCardsComponent_div_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onAddNewCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Add Another Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r1.paymentCards.length, " stored card", ctx_r1.paymentCards.length !== 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.paymentCards);
  }
}
function ZelfKeysPaymentCardsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfKeysPaymentCardsComponent_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onAddNewCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Add New Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Securely store a new payment card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
class ZelfKeysPaymentCardsComponent {
  chromeService;
  router;
  httpWrapperService;
  walletService;
  paymentCards = [];
  isLoading = false;
  error = null;
  apiKeysSessionJWT = "";
  constructor(chromeService, router, httpWrapperService, walletService) {
    this.chromeService = chromeService;
    this.router = router;
    this.httpWrapperService = httpWrapperService;
    this.walletService = walletService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better user experience
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/payment-cards");
      }
      // Initialize ZelfKey session and fetch payment cards
      yield _this.initZelfKeySession();
      yield _this.loadPaymentCards();
    })();
  }
  ngAfterViewInit() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Only refresh if we already have a session (don't reload on initial load)
      if (_this2.apiKeysSessionJWT) {
        yield _this2.loadPaymentCards();
      }
    })();
  }
  initZelfKeySession() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if wallet exists first
        const {
          wallet
        } = yield _this3.walletService.getAllWalletsFromStorage();
        if (!wallet?.ethAddress) {
          _this3.error = "No wallet found. Please set up your wallet first.";
          return;
        }
        console.log("Initializing ZelfKey session for wallet:", wallet.ethAddress);
        // The wallet service now caches the JWT token
        const sessionResponse = yield _this3.walletService.initZelfKeySession();
        console.log("Session response:", sessionResponse);
        // Get the cached token
        const jwt = _this3.walletService.getZelfKeyJWT();
        if (jwt) {
          _this3.apiKeysSessionJWT = jwt;
          console.log("JWT token obtained successfully");
        } else {
          console.error("Failed to get ZelfKey JWT token");
          _this3.error = "Authentication failed. Please ensure you have a valid wallet.";
        }
      } catch (error) {
        console.error("Error initializing ZelfKey session:", error);
        _this3.error = "Failed to initialize session. Please check your wallet connection.";
      }
    })();
  }
  loadPaymentCards() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.isLoading = true;
      _this4.error = null;
      // Check if we have a valid JWT token
      if (!_this4.apiKeysSessionJWT) {
        _this4.error = "No authentication token available. Please refresh the page.";
        _this4.isLoading = false;
        return;
      }
      try {
        const response = yield _this4.httpWrapperService.sendRequest("get", `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.keysApiUrl}/api/zelf-key/list?category=credit_card`, null, {
          headers: {
            Authorization: `Bearer ${_this4.apiKeysSessionJWT}`
          }
        });
        if (response.success && response.data) {
          // Transform the API response to match our component structure
          _this4.paymentCards = response.data.map(item => ({
            id: item.id,
            cardName: item.publicData?.cardName || "Unknown",
            cardNumber: item.publicData?.cardNumber || "",
            expiryMonth: item.publicData?.expiryMonth || "",
            expiryYear: item.publicData?.expiryYear || "",
            bankName: item.publicData?.bankName || "Unknown Bank",
            zelfProof: item.publicData?.zelfProof || item.id,
            createdAt: new Date(item.timestamp),
            // Store the full item for potential future use
            rawData: item
          }));
        } else {
          _this4.paymentCards = [];
        }
      } catch (error) {
        console.error("Error loading payment cards:", error);
        _this4.error = "Failed to load payment cards. Please try again.";
        _this4.paymentCards = [];
      } finally {
        _this4.isLoading = false;
      }
    })();
  }
  onAddNewCard() {
    this.router.navigate(["/dashboard/payment-cards/new"]);
  }
  onRefresh() {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.loadPaymentCards();
    })();
  }
  onEditCard(card) {
    // TODO: Implement edit functionality
    console.log("Edit card:", card);
  }
  onDeleteCard(card) {
    // TODO: Implement delete functionality
    console.log("Delete card:", card);
  }
  // Get card type from card number
  getCardType(cardNumber) {
    if (cardNumber.startsWith("4")) return "VISA";
    if (cardNumber.startsWith("5") || cardNumber.startsWith("2")) return "MASTERCARD";
    if (cardNumber.startsWith("3")) return "AMEX";
    if (cardNumber.startsWith("6")) return "DISCOVER";
    return "CARD";
  }
  // Mask card number for display
  getMaskedCardNumber(cardNumber) {
    if (cardNumber.length < 4) return cardNumber;
    const lastFour = cardNumber.slice(-4);
    return "•••• •••• •••• " + lastFour;
  }
  // Generate randomized color based on zelfProof
  getCardColor(zelfProof) {
    // Use zelfProof as seed for consistent colors
    let hash = 0;
    for (let i = 0; i < zelfProof.length; i++) {
      const char = zelfProof.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    // Generate color based on hash
    const hue = Math.abs(hash) % 360;
    const saturation = 60 + Math.abs(hash) % 30; // 60-90%
    const lightness = 45 + Math.abs(hash) % 20; // 45-65%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  // Generate gradient colors for card
  getCardGradient(zelfProof) {
    const baseColor = this.getCardColor(zelfProof);
    // Convert HSL to RGB for gradient calculation
    const hsl = baseColor.match(/\d+/g);
    if (!hsl) return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    const h = parseInt(hsl[0]);
    const s = parseInt(hsl[1]);
    const l = parseInt(hsl[2]);
    // Create a complementary color for gradient
    const complementaryH = (h + 180) % 360;
    const lighterL = Math.min(95, l + 20);
    const darkerL = Math.max(25, l - 20);
    return `linear-gradient(135deg, hsl(${h}, ${s}%, ${lighterL}%) 0%, hsl(${complementaryH}, ${s}%, ${darkerL}%) 100%)`;
  }
  // Generate mini QR code data URL (placeholder for now)
  getMiniQRCode(zelfProof) {
    // In a real implementation, this would generate an actual QR code
    // For now, return a data URL of a QR-like pattern
    const canvas = document.createElement("canvas");
    canvas.width = 24;
    canvas.height = 24;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Create a QR-like pattern based on zelfProof
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 24, 24);
      ctx.fillStyle = "#000000";
      // Create corner squares (like QR code)
      ctx.fillRect(1, 1, 6, 6);
      ctx.fillRect(17, 1, 6, 6);
      ctx.fillRect(1, 17, 6, 6);
      // Create inner pattern based on zelfProof
      for (let i = 0; i < zelfProof.length && i < 16; i++) {
        const x = 8 + i % 4 * 2;
        const y = 8 + Math.floor(i / 4) * 2;
        if (zelfProof.charCodeAt(i) % 2 === 0) {
          ctx.fillRect(x, y, 2, 2);
        }
      }
    }
    return canvas.toDataURL();
  }
  static ɵfac = function ZelfKeysPaymentCardsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfKeysPaymentCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_2__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_http_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_4__.WalletService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ZelfKeysPaymentCardsComponent,
    selectors: [["app-zelf-keys-payment-cards"]],
    decls: 12,
    vars: 4,
    consts: [[1, "zelf-keys-payment-cards"], [1, "notes-main-view"], [1, "header"], [1, "content"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "cards-grid", 4, "ngIf"], [1, "loading-state"], [1, "loading-spinner"], [1, "error-state"], [1, "error-icon"], [1, "btn-retry", 3, "click"], [1, "cards-grid"], [1, "list-header"], [1, "btn-secondary", 3, "click"], ["class", "card-item", 3, "background", 4, "ngFor", "ngForOf"], [1, "add-more"], [1, "btn-primary", 3, "click"], [1, "card-item"], [1, "card-header"], [1, "card-type"], [1, "card-actions"], [1, "btn-edit", 3, "click"], [1, "btn-delete", 3, "click"], [1, "card-qr-chip"], ["alt", "QR Code", 1, "chip-qr-code", 3, "src"], [1, "card-number"], [1, "card-details"], [1, "card-holder"], [1, "label"], [1, "value"], [1, "card-expiry"], [1, "add-card", 3, "click"], [1, "add-icon"]],
    template: function ZelfKeysPaymentCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Payment Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Securely store your payment card information");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ZelfKeysPaymentCardsComponent_div_8_Template, 4, 0, "div", 4)(9, ZelfKeysPaymentCardsComponent_div_9_Template, 9, 1, "div", 5)(10, ZelfKeysPaymentCardsComponent_div_10_Template, 10, 3, "div", 6)(11, ZelfKeysPaymentCardsComponent_div_11_Template, 8, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.paymentCards.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.error && ctx.paymentCards.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule],
    styles: [".zelf-keys-payment-cards[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 16px;\n  padding: 24px;\n  color: white;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  transition: transform 0.2s, box-shadow 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 6px 12px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-type.visa[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-type.mastercard[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  margin-bottom: 24px;\n  font-family: \"Courier New\", monospace;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .card-holder[_ngcontent-%COMP%], \n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .card-expiry[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .card-holder[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], \n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .card-expiry[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .card-holder[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], \n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-details[_ngcontent-%COMP%]   .card-expiry[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-qr-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  left: 24px;\n  width: 40px;\n  height: 30px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-qr-chip[_ngcontent-%COMP%]   .chip-ok[_ngcontent-%COMP%]   qr-code[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n  object-fit: contain;\n  filter: contrast(1.2) brightness(1.1);\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 16px;\n  padding: 40px 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-payment-cards[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards-grid[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1wYXltZW50LWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLDhFQUFBO0FBQ0Q7QUFFRTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSDtBQUVHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURKO0FBS0U7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEg7QUFLRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBSEo7QUFNRztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU1JO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQUpMO0FBV0U7RUFDQyxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBVEg7QUFXRztFQUNDLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQ0M7RUFFRCxrQkFBQTtFQUNBLGdCQUFBO0FBWEo7QUFhSTtFQUNDLDJCQUFBO0VBQ0EsMENBQUE7QUFYTDtBQWNJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVpMO0FBY0s7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFaTjtBQWNNO0VBQ0Msb0NBQUE7QUFaUDtBQWVNO0VBQ0Msb0NBQUE7QUFiUDtBQWlCSztFQUNDLGFBQUE7RUFDQSxRQUFBO0FBZk47QUFpQk07RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFmUDtBQWlCTztFQUNDLG9DQUFBO0VBQ0Esc0JBQUE7QUFmUjtBQXFCSTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQW5CTDtBQXNCSTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQXBCTDtBQXNCSzs7RUFFQyxhQUFBO0VBQ0Esc0JBQUE7QUFwQk47QUFzQk07O0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFuQlA7QUFzQk07O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBbkJQO0FBd0JJO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0FBdEJMO0FBd0JLO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUF0Qk47QUEyQkc7RUFDQyxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpCSjtBQTJCSTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUF6Qkw7QUE0Qkk7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBMUJMO0FBNkJJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBM0JMO0FBOEJJO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBNUJMIiwiZmlsZSI6InplbGYta2V5cy1wYXltZW50LWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnplbGYta2V5cy1wYXltZW50LWNhcmRzIHtcblx0cGFkZGluZzogMDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG5cblx0Lm5vdGVzLW1haW4tdmlldyB7XG5cdFx0LmhlYWRlciB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHRwIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5saXN0LWhlYWRlciB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRwYWRkaW5nOiA4cHggMTZweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHQuY2FyZHMtZ3JpZCB7XG5cdFx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuXHRcdFx0Z2FwOiAyNHB4O1xuXG5cdFx0XHQuY2FyZC1pdGVtIHtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0cGFkZGluZzogMjRweDtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdFx0XHRcdHRyYW5zaXRpb246XG5cdFx0XHRcdFx0dHJhbnNmb3JtIDAuMnMsXG5cdFx0XHRcdFx0Ym94LXNoYWRvdyAwLjJzO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0XHRcdFx0LmNhcmQtdHlwZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweCAxMnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0XHRcdFx0XHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcblxuXHRcdFx0XHRcdFx0Ji52aXNhIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLm1hc3RlcmNhcmQge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmNhcmQtYWN0aW9ucyB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0Z2FwOiA4cHg7XG5cblx0XHRcdFx0XHRcdGJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweCAxMnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcmQtbnVtYmVyIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcmQtZGV0YWlscyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRcdFx0XHQuY2FyZC1ob2xkZXIsXG5cdFx0XHRcdFx0LmNhcmQtZXhwaXJ5IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHRcdFx0XHQubGFiZWwge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuODtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNHB4O1xuXHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC52YWx1ZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2FyZC1xci1jaGlwIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAyNHB4O1xuXHRcdFx0XHRcdGxlZnQ6IDI0cHg7XG5cdFx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG5cdFx0XHRcdFx0LmNoaXAtb2sgcXItY29kZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHRcdFx0ZmlsdGVyOiBjb250cmFzdCgxLjIpIGJyaWdodG5lc3MoMS4xKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmFkZC1jYXJkIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyOiAycHggZGFzaGVkICNkZWUyZTY7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDQwcHggMjBweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2FkYjViZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5hZGQtaWNvbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNmM3NTdkO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXltZW50LWNhcmRzL3plbGYta2V5cy1wYXltZW50LWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLDhFQUFBO0FBQ0Q7QUFFRTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSDtBQUVHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURKO0FBS0U7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEg7QUFLRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBSEo7QUFNRztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU1JO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQUpMO0FBV0U7RUFDQyxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBVEg7QUFXRztFQUNDLDZEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQ0M7RUFFRCxrQkFBQTtFQUNBLGdCQUFBO0FBWEo7QUFhSTtFQUNDLDJCQUFBO0VBQ0EsMENBQUE7QUFYTDtBQWNJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVpMO0FBY0s7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFaTjtBQWNNO0VBQ0Msb0NBQUE7QUFaUDtBQWVNO0VBQ0Msb0NBQUE7QUFiUDtBQWlCSztFQUNDLGFBQUE7RUFDQSxRQUFBO0FBZk47QUFpQk07RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFmUDtBQWlCTztFQUNDLG9DQUFBO0VBQ0Esc0JBQUE7QUFmUjtBQXFCSTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQW5CTDtBQXNCSTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQXBCTDtBQXNCSzs7RUFFQyxhQUFBO0VBQ0Esc0JBQUE7QUFwQk47QUFzQk07O0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFuQlA7QUFzQk07O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBbkJQO0FBd0JJO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0FBdEJMO0FBd0JLO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUF0Qk47QUEyQkc7RUFDQyxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpCSjtBQTJCSTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUF6Qkw7QUE0Qkk7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBMUJMO0FBNkJJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBM0JMO0FBOEJJO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBNUJMO0FBSUEsd3lTQUF3eVMiLCJzb3VyY2VzQ29udGVudCI6WyIuemVsZi1rZXlzLXBheW1lbnQtY2FyZHMge1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgc2Fucy1zZXJpZjtcblxuXHQubm90ZXMtbWFpbi12aWV3IHtcblx0XHQuaGVhZGVyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdGgyIHtcblx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lmxpc3QtaGVhZGVyIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmNvbnRlbnQge1xuXHRcdC5jYXJkcy1ncmlkIHtcblx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG5cdFx0XHRnYXA6IDI0cHg7XG5cblx0XHRcdC5jYXJkLWl0ZW0ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRcdFx0dHJhbnNpdGlvbjpcblx0XHRcdFx0XHR0cmFuc2Zvcm0gMC4ycyxcblx0XHRcdFx0XHRib3gtc2hhZG93IDAuMnM7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuY2FyZC10eXBlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNnB4IDEycHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHRcdFx0XHRcdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuXG5cdFx0XHRcdFx0XHQmLnZpc2Ege1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCYubWFzdGVyY2FyZCB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuY2FyZC1hY3Rpb25zIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRnYXA6IDhweDtcblxuXHRcdFx0XHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNnB4IDEycHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2FyZC1udW1iZXIge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAycHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2FyZC1kZXRhaWxzIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0XHRcdC5jYXJkLWhvbGRlcixcblx0XHRcdFx0XHQuY2FyZC1leHBpcnkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRcdFx0XHRcdC5sYWJlbCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMC44O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA0cHg7XG5cdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnZhbHVlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJkLXFyLWNoaXAge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHR0b3A6IDI0cHg7XG5cdFx0XHRcdFx0bGVmdDogMjRweDtcblx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cblx0XHRcdFx0XHQuY2hpcC1vayBxci1jb2RlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvbnRhaW47XG5cdFx0XHRcdFx0XHRmaWx0ZXI6IGNvbnRyYXN0KDEuMikgYnJpZ2h0bmVzcygxLjEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuYWRkLWNhcmQge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdFx0cGFkZGluZzogNDBweCAyMHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjYWRiNWJkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFkZC1pY29uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDQ4cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzZjNzU3ZDtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-payment-cards_zelf-keys-payment-cards_component_ts.js.map