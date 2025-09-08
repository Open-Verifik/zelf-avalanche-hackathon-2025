"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-billing_zelf-keys-billing_component_ts"],{

/***/ 74877:
/*!*********************************************!*\
  !*** ./src/app/services/billing.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingService: () => (/* binding */ BillingService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _http_wrapper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http-wrapper.service */ 84099);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/wallet.service */ 69556);





class BillingService {
  _httpWrapper;
  _walletService;
  baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.keysApiUrl;
  constructor(_httpWrapper, _walletService) {
    this._httpWrapper = _httpWrapper;
    this._walletService = _walletService;
  }
  /**
   * Get available subscription plans
   * @returns Promise with the list of available plans
   */
  getAvailablePlans() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._httpWrapper.sendRequest("get", `${_this.baseUrl}/api/subscription/plans`);
    })();
  }
  /**
   * Get active subscription for the current user
   * @returns Promise with the active subscription data
   */
  getActiveSubscription() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this2._walletService.getZelfKeyJWT();
      return _this2._httpWrapper.sendRequest("get", `${_this2.baseUrl}/api/subscription/active`, null, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Create a Stripe checkout session
   * @param planId - The ID of the plan to subscribe to
   * @returns Promise with the checkout session data
   */
  createCheckoutSession(planId) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this3._walletService.getZelfKeyJWT();
      return _this3._httpWrapper.sendRequest("post", `${_this3.baseUrl}/api/subscription/checkout`, {
        planId: planId
      }, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Cancel the current subscription
   * @returns Promise with the cancellation result
   */
  cancelSubscription() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this4._walletService.getZelfKeyJWT();
      return _this4._httpWrapper.sendRequest("post", `${_this4.baseUrl}/api/subscription/cancel`, null, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Create Stripe customer portal session for subscription management
   * @returns Promise with the portal session data
   */
  createCustomerPortalSession() {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this5._walletService.getZelfKeyJWT();
      return _this5._httpWrapper.sendRequest("post", `${_this5.baseUrl}/api/subscription/portal`, null, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Create crypto payment for subscription
   * @param planId - The ID of the plan to subscribe to
   * @returns Promise with the crypto payment data
   */
  createCryptoPayment(planId) {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this6._walletService.getZelfKeyJWT();
      return _this6._httpWrapper.sendRequest("post", `${_this6.baseUrl}/api/subscription/crypto-payment`, {
        planId: planId
      }, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Check crypto payment status
   * @param paymentId - The payment ID (IPFS hash)
   * @returns Promise with payment status
   */
  checkCryptoPaymentStatus(paymentId) {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this7._walletService.getZelfKeyJWT();
      return _this7._httpWrapper.sendRequest("get", `${_this7.baseUrl}/api/subscription/crypto-payment-status/${paymentId}`, null, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Confirm crypto payment by checking blockchain transactions
   * @param lockedPriceToken - The JWT token containing payment details
   * @returns Promise with payment confirmation result
   */
  confirmCryptoPayment(lockedPriceToken) {
    var _this8 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const apiKeysSessionJWT = _this8._walletService.getZelfKeyJWT();
      return _this8._httpWrapper.sendRequest("post", `${_this8.baseUrl}/api/subscription/confirm-crypto-payment`, {
        lockedPriceToken: lockedPriceToken
      }, {
        headers: {
          Authorization: `Bearer ${apiKeysSessionJWT}`
        }
      });
    })();
  }
  /**
   * Transform API plans to pricing plans with additional UI properties
   * @param apiPlans - Plans from the API
   * @returns Transformed pricing plans
   */
  transformApiPlansToPricingPlans(apiPlans) {
    return apiPlans.map(plan => ({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      currency: plan.currency.toUpperCase(),
      interval: plan.interval,
      description: plan.description,
      features: this.getPlanFeatures(plan.id),
      buttonText: this.getPlanButtonText(plan.id),
      buttonClass: this.getPlanButtonClass(plan.id),
      isPopular: plan.id === "pro",
      isCurrent: false,
      // Will be updated based on current subscription
      priceId: plan.priceId // Pass through Stripe price ID
    }));
  }
  /**
   * Get features for a specific plan
   * @param planId - The plan ID
   * @returns Array of feature strings
   */
  getPlanFeatures(planId) {
    const featuresMap = {
      basic: ["Up to 20 new encryptions every month", "Community support"],
      pro: ["Up to 50 new encryptions every month", "Priority support"],
      enterprise: ["Up to 100 new encryptions every month", "24/7 premium support"]
    };
    return featuresMap[planId] || [];
  }
  /**
   * Get button text for a specific plan
   * @param planId - The plan ID
   * @returns Button text string
   */
  getPlanButtonText(planId) {
    const buttonTextMap = {
      basic: "Get Basic",
      pro: "Get Pro",
      enterprise: "Get Enterprise"
    };
    return buttonTextMap[planId] || "Get Plan";
  }
  /**
   * Get button CSS class for a specific plan
   * @param planId - The plan ID
   * @returns CSS class string
   */
  getPlanButtonClass(planId) {
    const buttonClassMap = {
      basic: "upgrade-button",
      pro: "upgrade-button pro",
      enterprise: "upgrade-button enterprise"
    };
    return buttonClassMap[planId] || "upgrade-button";
  }
  static ɵfac = function BillingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BillingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_wrapper_service__WEBPACK_IMPORTED_MODULE_2__.HttpWrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_3__.WalletService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: BillingService,
    factory: BillingService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 95011:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-billing/zelf-keys-billing.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfKeysBillingComponent: () => (/* binding */ ZelfKeysBillingComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/billing.service */ 74877);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wallet.service */ 69556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);








function ZelfKeysBillingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Choose Your Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Select the plan that best fits your needs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading subscription plans...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.retryLoadPlans());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ZelfKeysBillingComponent_div_4__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_4__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_4_span_25_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "DEMO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_4_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "circle", 41)(3, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Crypto (AVAX) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ZelfKeysBillingComponent_div_4_span_25_span_5_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.getCryptoData()) == null ? null : tmp_2_0.isDemoMode);
  }
}
function ZelfKeysBillingComponent_div_4_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "rect", 46)(3, "line", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Stripe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_4_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Transaction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 48)(4, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 51)(10, "polyline", 52)(11, "line", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.getTransactionUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](6, 3, (tmp_3_0 = ctx_r1.getCryptoData()) == null ? null : tmp_3_0.transactionHash, 0, 10), "...", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 7, (tmp_3_0 = ctx_r1.getCryptoData()) == null ? null : tmp_3_0.transactionHash, -8), " ");
  }
}
function ZelfKeysBillingComponent_div_4_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cancelled On:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 1, ctx_r1.activeSubscription.stripeData.cancelledAt, "medium"));
  }
}
function ZelfKeysBillingComponent_div_4_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_4_div_52_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openCustomerPortal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Manage Subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isCancelledActive() ? "Your subscription is cancelled but remains active until the end of your billing period. You can reactivate or view billing history in the Stripe customer portal." : "Manage your subscription, update payment methods, view billing history, and more in the Stripe customer portal.", " ");
  }
}
function ZelfKeysBillingComponent_div_4_div_53_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 65)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Transaction verified on Avalanche blockchain.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_4_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "circle", 41)(4, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 63)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Crypto Subscription Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Your subscription was paid with AVAX cryptocurrency. This is a one-time payment valid until the end date shown above. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ZelfKeysBillingComponent_div_4_div_53_p_10_Template, 3, 0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.getCryptoData()) == null ? null : tmp_2_0.transactionHash);
  }
}
function ZelfKeysBillingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ZelfKeysBillingComponent_div_4__svg_svg_4_Template, 2, 0, "svg", 21)(5, ZelfKeysBillingComponent_div_4__svg_svg_5_Template, 2, 0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 25)(11, "div", 26)(12, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Plan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 26)(17, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 26)(22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Payment Method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ZelfKeysBillingComponent_div_4_span_25_Template, 6, 1, "span", 29)(26, ZelfKeysBillingComponent_div_4_span_26_Template, 5, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 26)(28, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ZelfKeysBillingComponent_div_4_div_32_Template, 12, 10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 26)(34, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Zelf Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 26)(39, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 26)(45, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ZelfKeysBillingComponent_div_4_div_50_Template, 6, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ZelfKeysBillingComponent_div_4_div_52_Template, 7, 1, "div", 33)(53, ZelfKeysBillingComponent_div_4_div_53_Template, 11, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cancelled", ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isCancelledActive() ? "Cancelled (Active Until Period End)" : "Active Subscription", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getCurrentPlanName());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getCurrentPlanName());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getCurrentPlanPrice());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.paymentMethod) === "crypto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.paymentMethod) === "stripe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("status-active", !ctx_r1.isCancelledActive())("status-cancelled", ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getSubscriptionStatus(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.paymentMethod) === "crypto" && ((tmp_13_0 = ctx_r1.getCryptoData()) == null ? null : tmp_13_0.transactionHash));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.zelfName) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](43, 25, ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.startDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getEndDateLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("status-cancelled", ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](49, 28, ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.endDate, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isCancelledActive() && (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.stripeData == null ? null : ctx_r1.activeSubscription.stripeData.cancelledAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.paymentMethod) === "stripe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.paymentMethod) === "crypto");
  }
}
function ZelfKeysBillingComponent_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "DEMO MODE - Testing with reduced amounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_5_div_43_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.originalAmount == null ? null : ctx_r1.cryptoPaymentData.originalAmount.avax, " AVAX");
  }
}
function ZelfKeysBillingComponent_div_5_div_43_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2248 $", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.originalAmount == null ? null : ctx_r1.cryptoPaymentData.originalAmount.usd, "");
  }
}
function ZelfKeysBillingComponent_div_5_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Original Plan Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ZelfKeysBillingComponent_div_5_div_43_span_4_Template, 2, 1, "span", 105)(5, ZelfKeysBillingComponent_div_5_div_43_span_5_Template, 2, 1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.originalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.originalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Demo Discount: ", ctx_r1.getDemoDiscount(), "%");
  }
}
function ZelfKeysBillingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "div", 68)(3, "h2", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Complete Your Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ZelfKeysBillingComponent_div_5_div_5_Template, 5, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 72)(9, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Price locked for 30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 75)(15, "div", 76)(16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 78)(21, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Payment Address (Avalanche C-Chain)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 80)(24, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_5_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copyPaymentAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 84)(31, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Scan with your wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 88)(36, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Amount to Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ZelfKeysBillingComponent_div_5_div_43_Template, 8, 3, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 93)(45, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Waiting for payment confirmation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "This page will automatically update when payment is received");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 96)(52, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_5_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelCryptoPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Cancel Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.isDemoMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Send ", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.amount, " AVAX to the address below");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("1 AVAX = $", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 11, ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.avaxPrice, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("$", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.price, "/", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.interval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.paymentAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.generatePaymentQR(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.amount, " AVAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u2248 $", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](42, 14, ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.usdAmount, "1.2-4"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.isDemoMode) && (ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.originalAmount));
  }
}
function ZelfKeysBillingComponent_div_6_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "POPULAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_6_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](feature_r5);
  }
}
function ZelfKeysBillingComponent_div_6_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 130)(1, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_6_div_1_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const plan_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectPlan(plan_r7.id, "stripe"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "rect", 46)(4, "line", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Pay with Stripe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_6_div_1_div_17_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const plan_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectPlan(plan_r7.id, "crypto"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "svg", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "circle", 41)(9, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Pay with Crypto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_6_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getPlanButtonText(plan_r7), " ");
  }
}
function ZelfKeysBillingComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ZelfKeysBillingComponent_div_6_div_1_div_4_Template, 2, 0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 116)(6, "div", 117)(7, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ZelfKeysBillingComponent_div_6_div_1_div_16_Template, 5, 1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ZelfKeysBillingComponent_div_6_div_1_div_17_Template, 11, 0, "div", 124)(18, ZelfKeysBillingComponent_div_6_div_1_button_18_Template, 2, 1, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("popular", plan_r7.isPopular)("current", plan_r7.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", plan_r7.isPopular);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("/", plan_r7.interval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", plan_r7.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !plan_r7.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", plan_r7.isCurrent);
  }
}
function ZelfKeysBillingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ZelfKeysBillingComponent_div_6_div_1_Template, 19, 12, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.plans);
  }
}
class ZelfKeysBillingComponent {
  billingService;
  _walletService;
  _router;
  _changeDetectorRef;
  plans = [];
  currentPlan = "free";
  loading = true;
  error = null;
  hasActiveSubscription = false;
  activeSubscription = null;
  shareables = null;
  showCryptoPayment = false;
  cryptoPaymentData = null;
  paymentPollingInterval = null;
  constructor(billingService, _walletService, _router, _changeDetectorRef) {
    this.billingService = billingService;
    this._walletService = _walletService;
    this._router = _router;
    this._changeDetectorRef = _changeDetectorRef;
    this.shareables = {
      wallet: {}
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._walletService.initZelfKeySession();
      yield _this._setWallet();
      _this.loadPlans();
      _this.loadCurrentPlan();
    })();
  }
  _setWallet() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this2._walletService.getFirstWalletFromStorage();
      if (!wallet?.name) {
        _this2._router.navigate(["/welcome"]);
        return;
      }
      _this2.shareables.wallet = wallet;
      _this2._changeDetectorRef.detectChanges();
    })();
  }
  loadPlans() {
    this.loading = true;
    this.error = null;
    this.billingService.getAvailablePlans().then(response => {
      if (response.success && response.plans) {
        this.plans = this.billingService.transformApiPlansToPricingPlans(response.plans);
        this.loading = false;
        return;
      }
      this.error = "Failed to load subscription plans";
      this.loading = false;
    }).catch(error => {
      console.error("Error loading plans:", error);
      this.error = "Failed to load subscription plans";
      this.loading = false;
    });
  }
  loadCurrentPlan() {
    this.billingService.getActiveSubscription().then(response => {
      if (!response.success || !response.data) {
        this.currentPlan = "free";
        this.hasActiveSubscription = false;
        this.activeSubscription = null;
        return;
      }
      // Set active subscription data
      this.hasActiveSubscription = true;
      this.activeSubscription = response.data;
      console.log("🔍 Active subscription loaded:", {
        stripeDataStatus: response.data.stripeData?.status,
        cancelAtPeriodEnd: response.data.stripeData?.cancelAtPeriodEnd,
        cancelledAt: response.data.stripeData?.cancelledAt
      });
      // Extract plan from stripeData
      const stripeData = response.data.stripeData;
      if (stripeData && stripeData.plan) {
        // Find the plan that matches the Stripe price ID
        const currentPlan = this.plans.find(plan => {
          // Check if the plan has a priceId that matches the Stripe plan
          return plan.priceId === stripeData.plan;
        });
        this.currentPlan = currentPlan?.id || "basic";
        // Update the plans array to mark current plan
        this.plans = this.plans.map(plan => ({
          ...plan,
          isCurrent: plan.id === this.currentPlan
        }));
      } else {
        this.currentPlan = "free";
      }
    }).catch(error => {
      console.error("Error loading current plan:", error);
      this.currentPlan = "free";
      this.hasActiveSubscription = false;
      this.activeSubscription = null;
    });
  }
  // Public method for retry button
  retryLoadPlans() {
    this.loadPlans();
  }
  selectPlan(planId, paymentMethod) {
    if (planId === this.currentPlan) {
      return; // Don't allow selecting current plan
    }
    console.log(`Selected ${planId} plan with ${paymentMethod} payment`);
    if (paymentMethod === "stripe") {
      this.createCheckoutSession(planId);
    } else if (paymentMethod === "crypto") {
      this.createCryptoPayment(planId);
    }
  }
  /**
   * Create crypto payment for the selected plan
   * @param planId - The ID of the plan to subscribe to
   */
  createCryptoPayment(planId) {
    console.log(`Creating crypto payment for ${planId} plan`);
    this.billingService.createCryptoPayment(planId).then(response => {
      if (response.data && response.data.success && response.data.paymentAddress) {
        console.log("✅ Crypto payment created:", response);
        // Store payment data and show crypto payment interface
        this.cryptoPaymentData = {
          planId,
          paymentAddress: response.data.paymentAddress,
          amount: response.data.amount,
          currency: response.data.currency,
          usdAmount: response.data.usdAmount,
          avaxPrice: response.data.avaxPrice,
          lockedPriceToken: response.data.lockedPriceToken,
          expiresAt: response.data.expiresAt,
          zkPay: response.data.zkPay,
          selectedPlan: this.plans.find(plan => plan.id === planId),
          isDemoMode: response.data.isDemoMode,
          originalAmount: response.data.originalAmount
        };
        this.showCryptoPayment = true;
        this.startPaymentMonitoring();
      } else {
        this.error = "Failed to create crypto payment";
      }
    }).catch(error => {
      console.error("Error creating crypto payment:", error);
      this.error = "Failed to create crypto payment";
    });
  }
  /**
   * Start monitoring for crypto payment confirmation
   */
  startPaymentMonitoring() {
    if (this.paymentPollingInterval) {
      clearInterval(this.paymentPollingInterval);
    }
    // Check payment status every 30 seconds
    this.paymentPollingInterval = setInterval(() => {
      this.checkPaymentStatus();
    }, 30000);
    // Also check immediately
    this.checkPaymentStatus();
  }
  /**
   * Check if crypto payment has been confirmed
   */
  checkPaymentStatus() {
    if (!this.cryptoPaymentData?.lockedPriceToken) return;
    console.log("🔍 Checking payment status...");
    this.billingService.confirmCryptoPayment(this.cryptoPaymentData.lockedPriceToken).then(response => {
      console.log("📡 Payment check response:", response);
      if (response.success && response.paymentConfirmed) {
        console.log("✅ Payment confirmed!", response);
        this.stopPaymentMonitoring();
        // Show success message
        if (response.subscriptionCreated) {
          console.log("🎉 Subscription activated!");
        }
        // Hide crypto payment interface
        this.showCryptoPayment = false;
        this.cryptoPaymentData = null;
        // Refresh subscription data
        this.loadCurrentPlan();
      } else {
        console.log("⏳ Payment not confirmed yet:", response.message);
      }
    }).catch(error => {
      console.error("Error checking payment status:", error);
    });
  }
  /**
   * Stop payment monitoring
   */
  stopPaymentMonitoring() {
    if (this.paymentPollingInterval) {
      clearInterval(this.paymentPollingInterval);
      this.paymentPollingInterval = null;
    }
  }
  /**
   * Cancel crypto payment and return to plan selection
   */
  cancelCryptoPayment() {
    this.stopPaymentMonitoring();
    this.showCryptoPayment = false;
    this.cryptoPaymentData = null;
  }
  /**
   * Go back to plan selection from crypto payment interface
   */
  goBackToPlans() {
    this.stopPaymentMonitoring();
    this.showCryptoPayment = false;
    this.cryptoPaymentData = null;
  }
  /**
   * Generate QR code data URL for the payment address
   * @returns string data URL for QR code
   */
  generatePaymentQR() {
    if (!this.cryptoPaymentData?.paymentAddress) return "";
    // For now, return a simple QR code URL (you can use a QR library later)
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${this.cryptoPaymentData.paymentAddress}`;
  }
  /**
   * Copy payment address to clipboard
   */
  copyPaymentAddress() {
    if (this.cryptoPaymentData?.paymentAddress) {
      navigator.clipboard.writeText(this.cryptoPaymentData.paymentAddress);
      // You could show a toast notification here
      console.log("Payment address copied to clipboard");
    }
  }
  /**
   * Calculate the demo discount percentage
   * @returns Discount percentage as a string
   */
  getDemoDiscount() {
    if (!this.cryptoPaymentData?.isDemoMode || !this.cryptoPaymentData?.originalAmount) {
      return "0";
    }
    const originalPrice = this.cryptoPaymentData.originalAmount.usd;
    const demoPrice = this.cryptoPaymentData.usdAmount;
    const discountPercentage = (originalPrice - demoPrice) / originalPrice * 100;
    return discountPercentage.toFixed(1);
  }
  /**
   * Get crypto payment data from active subscription
   * @returns Crypto payment data or null
   */
  getCryptoData() {
    if (this.activeSubscription?.paymentMethod === "crypto" && this.activeSubscription?.cryptoData) {
      try {
        return typeof this.activeSubscription.cryptoData === "string" ? JSON.parse(this.activeSubscription.cryptoData) : this.activeSubscription.cryptoData;
      } catch (error) {
        console.error("Error parsing crypto data:", error);
        return null;
      }
    }
    return null;
  }
  /**
   * Get subscription status based on payment method
   * @returns Status string
   */
  getSubscriptionStatus() {
    if (this.activeSubscription?.paymentMethod === "crypto") {
      const cryptoData = this.getCryptoData();
      return cryptoData?.status || "Active";
    } else {
      // Stripe subscription status
      return this.isCancelledActive() ? "Cancelled (Active Until Period End)" : this.activeSubscription?.stripeData?.status || "Active";
    }
  }
  /**
   * Get transaction URL for blockchain explorer
   * @returns Transaction URL
   */
  getTransactionUrl() {
    const cryptoData = this.getCryptoData();
    if (cryptoData?.transactionHash) {
      return `https://snowtrace.io/tx/${cryptoData.transactionHash}`;
    }
    return "#";
  }
  /**
   * Get appropriate end date label based on payment method
   * @returns Label string
   */
  getEndDateLabel() {
    if (this.activeSubscription?.paymentMethod === "crypto") {
      return "Expires On:";
    } else {
      return this.isCancelledActive() ? "Access Ends:" : "Next Billing:";
    }
  }
  createCheckoutSession(planId) {
    this.billingService.createCheckoutSession(planId).then(response => {
      if (response.success && response.checkoutUrl) {
        // Redirect to Stripe checkout
        window.open(response.checkoutUrl, "_blank");
      } else {
        this.error = "Failed to create checkout session";
      }
    }).catch(error => {
      console.error("Error creating checkout session:", error);
      this.error = "Failed to create checkout session";
    });
  }
  getPlanButtonText(plan) {
    if (plan.isCurrent) {
      return "Your current plan";
    }
    return plan.buttonText;
  }
  getPlanButtonClass(plan) {
    if (plan.isCurrent) {
      return "current-plan";
    }
    return plan.buttonClass;
  }
  isPlanDisabled(plan) {
    return plan.isCurrent || false;
  }
  /**
   * Check if the subscription is cancelled but still active
   * @returns boolean indicating if subscription is cancelled but active
   */
  isCancelledActive() {
    if (!this.activeSubscription) return false;
    // Check both the main status and stripeData for cancelled status
    const mainStatus = this.activeSubscription.stripeData?.status === "cancelled_active";
    const stripeStatus = this.activeSubscription.stripeData?.status === "cancelled_active";
    const cancelAtPeriodEnd = this.activeSubscription.stripeData?.cancelAtPeriodEnd === true;
    return mainStatus || stripeStatus || cancelAtPeriodEnd;
  }
  /**
   * Get the current plan details by matching with available plans
   * @returns PricingPlan object with name, price, etc.
   */
  getCurrentPlanDetails() {
    if (!this.activeSubscription || !this.plans.length) return null;
    // Try to match by price ID first (most reliable)
    const priceId = this.activeSubscription.stripeData?.plan;
    if (priceId) {
      const matchedPlan = this.plans.find(plan => plan.priceId === priceId);
      if (matchedPlan) return matchedPlan;
    }
    // Fallback: try to match by plan name from metadata
    const planName = this.activeSubscription.stripeData?.metadata?.plan;
    if (planName) {
      const matchedPlan = this.plans.find(plan => plan.id === planName);
      if (matchedPlan) return matchedPlan;
    }
    // Last fallback: return the current plan if marked as current
    const currentPlan = this.plans.find(plan => plan.isCurrent);
    return currentPlan || null;
  }
  /**
   * Get the display name for the current subscription plan
   * @returns string plan name
   */
  getCurrentPlanName() {
    const planDetails = this.getCurrentPlanDetails();
    if (planDetails) return planDetails.name;
    // Fallback to backend data
    return this.activeSubscription?.stripeData?.planName || this.activeSubscription?.name || "Premium Plan";
  }
  /**
   * Get the price for the current subscription plan
   * @returns string formatted price
   */
  getCurrentPlanPrice() {
    const planDetails = this.getCurrentPlanDetails();
    if (planDetails) {
      return `$${planDetails.price}/${planDetails.interval}`;
    }
    // Fallback to backend data (convert from cents if needed)
    const backendPrice = this.activeSubscription?.stripeData?.planPrice || this.activeSubscription?.stripeData?.amount;
    if (backendPrice) {
      const priceInDollars = backendPrice > 100 ? backendPrice / 100 : backendPrice;
      return `$${priceInDollars.toFixed(2)}/month`;
    }
    return "N/A";
  }
  /**
   * Open Stripe customer portal for subscription management
   */
  openCustomerPortal() {
    this.billingService.createCustomerPortalSession().then(response => {
      if (response.success && response.portalUrl) {
        // Open the portal in a new tab
        window.open(response.portalUrl, "_blank");
      } else {
        console.error("❌ Portal creation failed:", response);
        this.error = "Failed to open subscription management portal";
      }
    }).catch(error => {
      console.error("❌ Error opening customer portal:", error);
      // Provide more specific error messages
      if (error.message?.includes("Customer ID not found")) {
        this.error = "Unable to find customer information. Please contact support.";
      } else if (error.message?.includes("No active subscription")) {
        this.error = "No active subscription found. Please refresh the page.";
      } else {
        this.error = `Failed to open subscription management: ${error.message || "Unknown error"}`;
      }
    });
  }
  static ɵfac = function ZelfKeysBillingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfKeysBillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_billing_service__WEBPACK_IMPORTED_MODULE_1__.BillingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ZelfKeysBillingComponent,
    selectors: [["app-zelf-keys-billing"]],
    decls: 7,
    vars: 6,
    consts: [[1, "billing-container"], ["class", "billing-header", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "subscription-management", 4, "ngIf"], ["class", "crypto-payment-container", 4, "ngIf"], ["class", "pricing-grid", 4, "ngIf"], [1, "billing-header"], [1, "billing-title"], [1, "billing-subtitle"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], [1, "error-message"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "error-icon"], ["d", "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "retry-button", 3, "click"], [1, "subscription-management"], [1, "subscription-card"], [1, "subscription-header"], [1, "subscription-status"], ["class", "status-icon", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "status-icon cancelled", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "status-text"], [1, "subscription-plan"], [1, "subscription-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["class", "payment-method crypto", 4, "ngIf"], ["class", "payment-method stripe", 4, "ngIf"], ["class", "detail-row", 4, "ngIf"], [1, "subscription-actions"], [4, "ngIf"], ["class", "crypto-subscription-info", 4, "ngIf"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "status-icon"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "status-icon", "cancelled"], ["d", "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12 C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "payment-method", "crypto"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 12l2 2 4-4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "demo-badge", 4, "ngIf"], [1, "demo-badge"], [1, "payment-method", "stripe"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2", "stroke", "currentColor", "stroke-width", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10", "stroke", "currentColor", "stroke-width", "2"], [1, "detail-value", "transaction-hash"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 13V19A2 2 0 0116 21H5A2 2 0 013 19V8A2 2 0 015 6H11", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "15,3 21,3 21,9", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "10", "y1", "14", "x2", "21", "y2", "3", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "detail-value", "status-cancelled"], [1, "manage-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "button-icon"], ["d", "M10.325 4.317C10.751 3.901 11.377 3.901 11.803 4.317L20.69 13.204C21.116 13.63 21.116 14.256 20.69 14.682L11.803 23.569C11.377 23.995 10.751 23.995 10.325 23.569L1.438 14.682C1.012 14.256 1.012 13.63 1.438 13.204L10.325 4.317Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "management-note"], [1, "crypto-subscription-info"], [1, "crypto-info-card"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "info-icon"], ["d", "M12 16V12M12 8H12.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "crypto-info-content"], ["class", "transaction-note", 4, "ngIf"], [1, "transaction-note"], [1, "crypto-payment-container"], [1, "crypto-payment-card"], [1, "payment-header"], [1, "payment-title"], ["class", "demo-mode-banner", 4, "ngIf"], [1, "payment-subtitle"], [1, "price-lock-info"], [1, "lock-text"], [1, "rate-text"], [1, "payment-details"], [1, "plan-info"], [1, "plan-price"], [1, "payment-address-section"], [1, "address-label"], [1, "address-container"], [1, "address-text"], [1, "copy-button", 3, "click"], ["d", "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z", "fill", "currentColor"], [1, "qr-code-section"], [1, "qr-label"], [1, "qr-container"], ["alt", "Payment QR Code", 1, "qr-code", 3, "src"], [1, "payment-amount"], [1, "amount-label"], [1, "amount-value"], [1, "usd-equivalent"], ["class", "original-amount-info", 4, "ngIf"], [1, "payment-status"], [1, "status-indicator"], [1, "status-note"], [1, "payment-actions"], [1, "cancel-button", 3, "click"], [1, "demo-mode-banner"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "demo-icon"], ["d", "M13 2L3 14H12L11 22L21 10H12L13 2Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "demo-text"], [1, "original-amount-info"], [1, "original-label"], [1, "original-values"], ["class", "original-avax", 4, "ngIf"], ["class", "original-usd", 4, "ngIf"], [1, "demo-savings"], [1, "original-avax"], [1, "original-usd"], [1, "pricing-grid"], ["class", "pricing-card", 3, "popular", "current", 4, "ngFor", "ngForOf"], [1, "pricing-card"], [1, "card-header"], [1, "plan-name"], ["class", "popular-badge", 4, "ngIf"], [1, "plan-pricing"], [1, "price"], [1, "currency"], [1, "amount"], [1, "period"], [1, "plan-tagline"], [1, "plan-features"], ["class", "feature-item", 4, "ngFor", "ngForOf"], ["class", "payment-options", 4, "ngIf"], ["class", "plan-button current-plan", "disabled", "", 4, "ngIf"], [1, "popular-badge"], [1, "feature-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "feature-icon"], [1, "feature-text"], [1, "payment-options"], [1, "payment-button", "stripe-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "payment-icon"], [1, "payment-button", "crypto-button", 3, "click"], ["disabled", "", 1, "plan-button", "current-plan"]],
    template: function ZelfKeysBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ZelfKeysBillingComponent_div_1_Template, 5, 0, "div", 1)(2, ZelfKeysBillingComponent_div_2_Template, 4, 0, "div", 2)(3, ZelfKeysBillingComponent_div_3_Template, 8, 1, "div", 3)(4, ZelfKeysBillingComponent_div_4_Template, 54, 31, "div", 4)(5, ZelfKeysBillingComponent_div_5_Template, 54, 17, "div", 5)(6, ZelfKeysBillingComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && !ctx.hasActiveSubscription && !ctx.showCryptoPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.hasActiveSubscription);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.showCryptoPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && !ctx.hasActiveSubscription && !ctx.showCryptoPayment);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule],
    styles: [".billing-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin: 0;\n  font-weight: 400;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 400px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #dc3545;\n  margin: 0 0 20px 0;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {\n  background: #5a67d8;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #28a745;\n  border-radius: 20px;\n  padding: 40px;\n  max-width: 600px;\n  width: 100%;\n  box-shadow: 0 8px 32px rgba(40, 167, 69, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n  width: 24px;\n  height: 24px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-icon.cancelled[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #28a745;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status.cancelled[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-plan[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value.status-active[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value.status-cancelled[_ngcontent-%COMP%] {\n  color: #fd7e14;\n  font-weight: 600;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .management-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  background: #f8f9ff;\n  border: 1px solid #e0e4ff;\n  border-radius: 12px;\n  padding: 20px;\n  text-align: left;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%]   .crypto-info-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%]   .crypto-info-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%]   .crypto-info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%]   .crypto-info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .crypto-subscription-info[_ngcontent-%COMP%]   .crypto-info-card[_ngcontent-%COMP%]   .crypto-info-content[_ngcontent-%COMP%]   p.transaction-note[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 500;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .payment-method.crypto[_ngcontent-%COMP%] {\n  color: #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .payment-method.crypto[_ngcontent-%COMP%]   .demo-badge[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 4px;\n  margin-left: 4px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .payment-method.stripe[_ngcontent-%COMP%] {\n  color: #635bff;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .transaction-hash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f7931e;\n  text-decoration: none;\n  font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", monospace;\n  font-size: 13px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .transaction-hash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .transaction-hash[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: flex-start;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #333;\n  transform: translateX(-2px);\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover   .back-icon[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #f7931e;\n  border-radius: 20px;\n  padding: 40px;\n  max-width: 600px;\n  width: 100%;\n  box-shadow: 0 8px 32px rgba(247, 147, 30, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .demo-mode-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 12px 20px;\n  border-radius: 12px;\n  margin: 16px 0;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .demo-mode-banner[_ngcontent-%COMP%]   .demo-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.7;\n  }\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .payment-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 16px 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .price-lock-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  font-size: 14px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .price-lock-info[_ngcontent-%COMP%]   .lock-text[_ngcontent-%COMP%] {\n  color: #f7931e;\n  font-weight: 600;\n  padding: 4px 12px;\n  background: #fff5e6;\n  border-radius: 20px;\n  border: 1px solid #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .price-lock-info[_ngcontent-%COMP%]   .rate-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n  padding: 4px 12px;\n  background: #f8f9fa;\n  border-radius: 20px;\n  border: 1px solid #e9ecef;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  padding: 20px;\n  background: #fff5e6;\n  border-radius: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #f7931e;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  background: #f8f9fa;\n  padding: 16px;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: \"Courier New\", monospace;\n  font-size: 14px;\n  color: #1a1a1a;\n  word-break: break-all;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%] {\n  background: #f7931e;\n  color: white;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]:hover {\n  background: #e8851c;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 16px;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-container[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  display: block;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff5e6;\n  padding: 20px;\n  border-radius: 12px;\n  border: 2px solid #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .amount-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #f7931e;\n  margin: 0 0 8px 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .usd-equivalent[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  font-weight: 500;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .original-amount-info[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .original-amount-info[_ngcontent-%COMP%]   .original-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .original-amount-info[_ngcontent-%COMP%]   .original-values[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .original-amount-info[_ngcontent-%COMP%]   .original-values[_ngcontent-%COMP%]   .original-avax[_ngcontent-%COMP%], \n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .original-amount-info[_ngcontent-%COMP%]   .original-values[_ngcontent-%COMP%]   .original-usd[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n  text-decoration: line-through;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .original-amount-info[_ngcontent-%COMP%]   .demo-savings[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667eea;\n  font-weight: 600;\n  background: #f0f2ff;\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n  margin-top: 4px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 32px 0;\n  padding: 24px;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #f7931e;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-actions[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-actions[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e0e0e0;\n  border-radius: 16px;\n  padding: 32px 24px;\n  position: relative;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n  border-color: #667eea;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);\n  transform: scale(1.02);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02) translateY(-4px);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.current[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: linear-gradient(135deg, #f8fff9 0%, #f0f8f0 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .popular-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #1a1a1a;\n  line-height: 1;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  font-weight: 500;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-tagline[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 24px;\n  font-weight: 400;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: #28a745;\n  width: 16px;\n  height: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  line-height: 1.4;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: auto;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.stripe-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.stripe-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.crypto-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(247, 147, 30, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.crypto-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(247, 147, 30, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button.pro[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button.pro[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.current-plan[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #28a745;\n  border: 2px solid #28a745;\n  cursor: default;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.current-plan[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 32px;\n  border-top: 1px solid #e0e0e0;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .billing-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n    padding-bottom: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-plan[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    padding: 8px 0;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%] {\n    padding: 14px 24px;\n    font-size: 15px;\n    width: 100%;\n    justify-content: center;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .management-note[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    font-size: 15px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9FO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFPRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUEo7QUFTSTtFQUNDLG1CQUFBO0FBUEw7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNB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SUFDQyxlQUFBO0VBN0tMO0VBb0xJO0lBQ0MsZUFBQTtFQWxMTDtFQXVMRTtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtFQXJMSDtFQTBMQTtJQUNDLGlCQUFBO0VBeExEO0VBMExDO0lBQ0Msa0JBQUE7RUF4TEY7RUEwTEU7SUFDQyxlQUFBO0VBeExIO0FBQ0YiLCJmaWxlIjoiemVsZi1rZXlzLWJpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGluZy1jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDEwMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDA7XG5cblx0LmJpbGxpbmctaGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5iaWxsaW5nLXRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0fVxuXG5cdFx0LmJpbGxpbmctc3VidGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdH1cblx0fVxuXG5cdC5sb2FkaW5nLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdC5sb2FkaW5nLXNwaW5uZXIge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0Ym9yZGVyLXRvcDogNHB4IHNvbGlkICM2NjdlZWE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5lcnJvci1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0LmVycm9yLW1lc3NhZ2Uge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblxuXHRcdFx0LmVycm9yLWljb24ge1xuXHRcdFx0XHRjb2xvcjogI2RjMzU0NTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICNkYzM1NDU7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnJldHJ5LWJ1dHRvbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICM2NjdlZWE7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1YTY3ZDg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5zdWJzY3JpcHRpb24tY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICMyOGE3NDU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0cGFkZGluZzogNDBweDtcblx0XHRcdG1heC13aWR0aDogNjAwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4xNSk7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tc3RhdHVzIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXG5cdFx0XHRcdFx0LnN0YXR1cy1pY29uIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI0cHg7XG5cblx0XHRcdFx0XHRcdCYuY2FuY2VsbGVkIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZDdlMTQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN0YXR1cy10ZXh0IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLmNhbmNlbGxlZCB7XG5cdFx0XHRcdFx0XHQuc3RhdHVzLXRleHQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZkN2UxNDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLXBsYW4ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1kZXRhaWxzIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQuZGV0YWlsLXJvdyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG5cblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZGV0YWlsLWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbC12YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cblx0XHRcdFx0XHRcdCYuc3RhdHVzLWFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLnN0YXR1cy1jYW5jZWxsZWQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZkN2UxNDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1hY3Rpb25zIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdC5tYW5hZ2UtYnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAzMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5idXR0b24taWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubWFuYWdlbWVudC1ub3RlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jcnlwdG8tc3Vic2NyaXB0aW9uLWluZm8ge1xuXHRcdFx0XHRcdC5jcnlwdG8taW5mby1jYXJkIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZmO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTRmZjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblxuXHRcdFx0XHRcdFx0LmluZm8taWNvbiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuY3J5cHRvLWluZm8tY29udGVudCB7XG5cdFx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cblx0XHRcdFx0XHRcdFx0aDQge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cblx0XHRcdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmLnRyYW5zYWN0aW9uLW5vdGUge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1tZXRob2Qge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0Z2FwOiA2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0XHRcdFx0Ji5jcnlwdG8ge1xuXHRcdFx0XHRcdGNvbG9yOiAjZjc5MzFlO1xuXG5cdFx0XHRcdFx0LmRlbW8tYmFkZ2Uge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzY2N2VlYTtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAycHggNnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDRweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5zdHJpcGUge1xuXHRcdFx0XHRcdGNvbG9yOiAjNjM1YmZmO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnRyYW5zYWN0aW9uLWhhc2gge1xuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHRjb2xvcjogI2Y3OTMxZTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiTW9uYWNvXCIsIFwiTWVubG9cIiwgXCJVYnVudHUgTW9ub1wiLCBtb25vc3BhY2U7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiA0cHg7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLjc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmNyeXB0by1wYXltZW50LWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5jcnlwdG8tcGF5bWVudC1oZWFkZXIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cblx0XHRcdC5iYWNrLWJ1dHRvbiB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogOHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggMTZweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmJhY2staWNvbiB7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6aG92ZXIgLmJhY2staWNvbiB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmNyeXB0by1wYXltZW50LWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZjc5MzFlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdHBhZGRpbmc6IDQwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMjQ3LCAxNDcsIDMwLCAwLjE1KTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0aGVpZ2h0OiA0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNzkzMWUgMCUsICNmZjZiMzUgMTAwJSk7XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LWhlYWRlciB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQucGF5bWVudC10aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5kZW1vLW1vZGUtYmFubmVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAyMHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAxNnB4IDA7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHRcdFx0XHQuZGVtby1pY29uIHtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QGtleWZyYW1lcyBwdWxzZSB7XG5cdFx0XHRcdFx0XHQwJSxcblx0XHRcdFx0XHRcdDEwMCUge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0NTAlIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMC43O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50LXN1YnRpdGxlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnByaWNlLWxvY2staW5mbyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXG5cdFx0XHRcdFx0LmxvY2stdGV4dCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2Y3OTMxZTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY1ZTY7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2Y3OTMxZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucmF0ZS10ZXh0IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1kZXRhaWxzIHtcblx0XHRcdFx0LnBsYW4taW5mbyB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmNWU2O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBsYW4tcHJpY2Uge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjc5MzFlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50LWFkZHJlc3Mtc2VjdGlvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHRcdC5hZGRyZXNzLWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFkZHJlc3MtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblxuXHRcdFx0XHRcdFx0LmFkZHJlc3MtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuY29weS1idXR0b24ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjc5MzFlO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDEycHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGdhcDogNHB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTg4NTFjO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnFyLWNvZGUtc2VjdGlvbiB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0XHQucXItbGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnFyLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblxuXHRcdFx0XHRcdFx0LnFyLWNvZGUge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50LWFtb3VudCB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY1ZTY7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmNzkzMWU7XG5cblx0XHRcdFx0XHQuYW1vdW50LWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFtb3VudC12YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQudXNkLWVxdWl2YWxlbnQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5vcmlnaW5hbC1hbW91bnQtaW5mbyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDE2cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2Y3OTMxZTtcblxuXHRcdFx0XHRcdFx0Lm9yaWdpbmFsLWxhYmVsIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5vcmlnaW5hbC12YWx1ZXMge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cblx0XHRcdFx0XHRcdFx0Lm9yaWdpbmFsLWF2YXgsXG5cdFx0XHRcdFx0XHRcdC5vcmlnaW5hbC11c2Qge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZGVtby1zYXZpbmdzIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YwZjJmZjtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDEycHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1zdGF0dXMge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbjogMzJweCAwO1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXG5cdFx0XHRcdC5zdGF0dXMtaW5kaWNhdG9yIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cblx0XHRcdFx0XHQubG9hZGluZy1zcGlubmVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2YzZjNmMztcblx0XHRcdFx0XHRcdGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjc5MzFlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2Y3OTMxZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3RhdHVzLW5vdGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtYWN0aW9ucyB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHQuY2FuY2VsLWJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzZjNzU3ZDtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNWE2MjY4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5wcmljaW5nLWdyaWQge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdFx0Z2FwOiAyNHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQucHJpY2luZy1jYXJkIHtcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2UwZTBlMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0XHRwYWRkaW5nOiAzMnB4IDI0cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0fVxuXG5cdFx0XHQmLnBvcHVsYXIge1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjE1KTtcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpIHRyYW5zbGF0ZVkoLTRweCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ji5jdXJyZW50IHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmZmY5IDAlLCAjZjBmOGYwIDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuY2FyZC1oZWFkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdC5wbGFuLW5hbWUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9wdWxhci1iYWRnZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0cGFkZGluZzogNHB4IDEycHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi1wcmljaW5nIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHQucHJpY2Uge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXHRcdFx0XHRcdGdhcDogNHB4O1xuXG5cdFx0XHRcdFx0LmN1cnJlbmN5IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYW1vdW50IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDhweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wZXJpb2Qge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi10YWdsaW5lIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tZmVhdHVyZXMge1xuXHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdC5mZWF0dXJlLWl0ZW0ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cblx0XHRcdFx0XHQuZmVhdHVyZS1pY29uIHtcblx0XHRcdFx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmVhdHVyZS10ZXh0IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtb3B0aW9ucyB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogYXV0bztcblxuXHRcdFx0XHQucGF5bWVudC1idXR0b24ge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE0cHggMjRweDtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiA4cHg7XG5cblx0XHRcdFx0XHQucGF5bWVudC1pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYuc3RyaXBlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYuY3J5cHRvLWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjc5MzFlIDAlLCAjZmY2YjM1IDEwMCUpO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDI0NywgMTQ3LCAzMCwgMC4zKTtcblxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDI0NywgMTQ3LCAzMCwgMC40KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLWJ1dHRvbiB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdG1hcmdpbi10b3A6IGF1dG87XG5cblx0XHRcdFx0Ji51cGdyYWRlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnBybyB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExYTFhIDAlLCAjMzMzIDEwMCUpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLmN1cnJlbnQtcGxhbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U4ZjVlODtcblx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xuXHRcdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmRpc2FibGVkIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5iaWxsaW5nLWZvb3RlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmctdG9wOiAzMnB4O1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuXG5cdFx0LmZvb3Rlci1saW5rcyB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHQuZm9vdGVyLWxpbmsge1xuXHRcdFx0XHRjb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogIzVhNjdkODtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5iaWxsaW5nLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogMDtcblxuXHRcdC5iaWxsaW5nLWhlYWRlciB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQuYmlsbGluZy10aXRsZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdH1cblxuXHRcdFx0LmJpbGxpbmctc3VidGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnN1YnNjcmlwdGlvbi1tYW5hZ2VtZW50IHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tY2FyZCB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLWhlYWRlciB7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRcdC5zdWJzY3JpcHRpb24tc3RhdHVzIHtcblx0XHRcdFx0XHRcdC5zdGF0dXMtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3Vic2NyaXB0aW9uLXBsYW4ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tZGV0YWlscyB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdFx0XHRcdC5kZXRhaWwtcm93IHtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGdhcDogNHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDA7XG5cblx0XHRcdFx0XHRcdC5kZXRhaWwtbGFiZWwge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5kZXRhaWwtdmFsdWUge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1hY3Rpb25zIHtcblx0XHRcdFx0XHQubWFuYWdlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5tYW5hZ2VtZW50LW5vdGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5wcmljaW5nLWdyaWQge1xuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRnYXA6IDIwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQucHJpY2luZy1jYXJkIHtcblx0XHRcdFx0cGFkZGluZzogMjRweCAyMHB4O1xuXG5cdFx0XHRcdCYucG9wdWxhciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0XHQucGxhbi1uYW1lIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1wcmljaW5nIHtcblx0XHRcdFx0XHQucHJpY2Uge1xuXHRcdFx0XHRcdFx0LmFtb3VudCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1mZWF0dXJlcyB7XG5cdFx0XHRcdFx0LmZlYXR1cmUtaXRlbSB7XG5cdFx0XHRcdFx0XHQuZmVhdHVyZS10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wbGFuLWJ1dHRvbiB7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5iaWxsaW5nLWZvb3RlciB7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjRweDtcblxuXHRcdFx0LmZvb3Rlci1saW5rcyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblxuXHRcdFx0XHQuZm9vdGVyLWxpbmsge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1iaWxsaW5nL3plbGYta2V5cy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9FO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFPRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUEo7QUFTSTtFQUNDLG1CQUFBO0FBUEw7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFB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S0c7SUFDQywyQkFBQTtFQXRLSjtFQTJLRztJQUNDLGVBQUE7RUF6S0o7RUErS0k7SUFDQyxlQUFBO0VBN0tMO0VBb0xJO0lBQ0MsZUFBQTtFQWxMTDtFQXVMRTtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtFQXJMSDtFQTBMQTtJQUNDLGlCQUFBO0VBeExEO0VBMExDO0lBQ0Msa0JBQUE7RUF4TEY7RUEwTEU7SUFDQyxlQUFBO0VBeExIO0FBQ0Y7QUFDQSxvMzNDQUFvMzNDIiwic291cmNlc0NvbnRlbnQiOlsiLmJpbGxpbmctY29udGFpbmVyIHtcblx0bWF4LXdpZHRoOiAxMDAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAwO1xuXG5cdC5iaWxsaW5nLWhlYWRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQuYmlsbGluZy10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCAxMnB4IDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdH1cblxuXHRcdC5iaWxsaW5nLXN1YnRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR9XG5cdH1cblxuXHQubG9hZGluZy1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHQubG9hZGluZy1zcGlubmVyIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0Ym9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcblx0XHRcdGJvcmRlci10b3A6IDRweCBzb2xpZCAjNjY3ZWVhO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0fVxuXG5cdFx0cCB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQuZXJyb3ItY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblxuXHRcdC5lcnJvci1tZXNzYWdlIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cblx0XHRcdC5lcnJvci1pY29uIHtcblx0XHRcdFx0Y29sb3I6ICNkYzM1NDU7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjZGMzNTQ1O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5yZXRyeS1idXR0b24ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNjY3ZWVhO1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNWE2N2Q4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnN1YnNjcmlwdGlvbi1tYW5hZ2VtZW50IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQuc3Vic2NyaXB0aW9uLWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdHBhZGRpbmc6IDQwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMTUpO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1oZWFkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLXN0YXR1cyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblxuXHRcdFx0XHRcdC5zdGF0dXMtaWNvbiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyNHB4O1xuXG5cdFx0XHRcdFx0XHQmLmNhbmNlbGxlZCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmQ3ZTE0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdGF0dXMtdGV4dCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5jYW5jZWxsZWQge1xuXHRcdFx0XHRcdFx0LnN0YXR1cy10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZDdlMTQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1wbGFuIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tZGV0YWlscyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LmRldGFpbC1yb3cge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbC1sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWwtdmFsdWUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXG5cdFx0XHRcdFx0XHQmLnN0YXR1cy1hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5zdGF0dXMtY2FuY2VsbGVkIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZDdlMTQ7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHQubWFuYWdlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hbmFnZW1lbnQtbm90ZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY3J5cHRvLXN1YnNjcmlwdGlvbi1pbmZvIHtcblx0XHRcdFx0XHQuY3J5cHRvLWluZm8tY2FyZCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmZjtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGU0ZmY7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cblx0XHRcdFx0XHRcdC5pbmZvLWljb24ge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNyeXB0by1pbmZvLWNvbnRlbnQge1xuXHRcdFx0XHRcdFx0XHRmbGV4OiAxO1xuXG5cdFx0XHRcdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXG5cdFx0XHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ji50cmFuc2FjdGlvbi1ub3RlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtbWV0aG9kIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGdhcDogNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXG5cdFx0XHRcdCYuY3J5cHRvIHtcblx0XHRcdFx0XHRjb2xvcjogI2Y3OTMxZTtcblxuXHRcdFx0XHRcdC5kZW1vLWJhZGdlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2NjdlZWE7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMnB4IDZweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA0cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuc3RyaXBlIHtcblx0XHRcdFx0XHRjb2xvcjogIzYzNWJmZjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC50cmFuc2FjdGlvbi1oYXNoIHtcblx0XHRcdFx0YSB7XG5cdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIk1vbmFjb1wiLCBcIk1lbmxvXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogNHB4O1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRzdmcge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMC43O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5jcnlwdG8tcGF5bWVudC1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQuY3J5cHRvLXBheW1lbnQtaGVhZGVyIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0bWF4LXdpZHRoOiA2MDBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG5cdFx0XHQuYmFjay1idXR0b24ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRnYXA6IDhweDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4IDE2cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5iYWNrLWljb24ge1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmhvdmVyIC5iYWNrLWljb24ge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jcnlwdG8tcGF5bWVudC1jYXJkIHtcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2Y3OTMxZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRwYWRkaW5nOiA0MHB4O1xuXHRcdFx0bWF4LXdpZHRoOiA2MDBweDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDI0NywgMTQ3LCAzMCwgMC4xNSk7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjc5MzFlIDAlLCAjZmY2YjM1IDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1oZWFkZXIge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LnBheW1lbnQtdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZGVtby1tb2RlLWJhbm5lciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogOHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjBweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMTZweCAwO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0LmRlbW8taWNvbiB7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBrZXlmcmFtZXMgcHVsc2Uge1xuXHRcdFx0XHRcdFx0MCUsXG5cdFx0XHRcdFx0XHQxMDAlIHtcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDUwJSB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGF5bWVudC1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wcmljZS1sb2NrLWluZm8ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblxuXHRcdFx0XHRcdC5sb2NrLXRleHQge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDEycHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmNWU2O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmNzkzMWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnJhdGUtdGV4dCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtZGV0YWlscyB7XG5cdFx0XHRcdC5wbGFuLWluZm8ge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjVlNjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXG5cdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wbGFuLXByaWNlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2Y3OTMxZTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGF5bWVudC1hZGRyZXNzLXNlY3Rpb24ge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0XHQuYWRkcmVzcy1sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hZGRyZXNzLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cblx0XHRcdFx0XHRcdC5hZGRyZXNzLXRleHQge1xuXHRcdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNvcHktYnV0dG9uIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y3OTMxZTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAxMnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRnYXA6IDRweDtcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2U4ODUxYztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5xci1jb2RlLXNlY3Rpb24ge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdFx0LnFyLWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5xci1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTZweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cblx0XHRcdFx0XHRcdC5xci1jb2RlIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGF5bWVudC1hbW91bnQge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmNWU2O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZjc5MzFlO1xuXG5cdFx0XHRcdFx0LmFtb3VudC1sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hbW91bnQtdmFsdWUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjc5MzFlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnVzZC1lcXVpdmFsZW50IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQub3JpZ2luYWwtYW1vdW50LWluZm8ge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxNnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmNzkzMWU7XG5cblx0XHRcdFx0XHRcdC5vcmlnaW5hbC1sYWJlbCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQub3JpZ2luYWwtdmFsdWVzIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGdhcDogMTZweDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXG5cdFx0XHRcdFx0XHRcdC5vcmlnaW5hbC1hdmF4LFxuXHRcdFx0XHRcdFx0XHQub3JpZ2luYWwtdXNkIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmRlbW8tc2F2aW5ncyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMGYyZmY7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtc3RhdHVzIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW46IDMycHggMDtcblx0XHRcdFx0cGFkZGluZzogMjRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblxuXHRcdFx0XHQuc3RhdHVzLWluZGljYXRvciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHRcdFx0LmxvYWRpbmctc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wOiAycHggc29saWQgI2Y3OTMxZTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN0YXR1cy1ub3RlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LWFjdGlvbnMge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0LmNhbmNlbC1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzVhNjI2ODtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQucHJpY2luZy1ncmlkIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRcdGdhcDogMjRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXG5cdFx0LnByaWNpbmctY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0cGFkZGluZzogMzJweCAyNHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdH1cblxuXHRcdFx0Ji5wb3B1bGFyIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xNSk7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKSB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYuY3VycmVudCB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmZmOSAwJSwgI2YwZjhmMCAxMDAlKTtcblx0XHRcdH1cblxuXHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHQucGxhbi1uYW1lIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvcHVsYXItYmFkZ2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tcHJpY2luZyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRcdFx0XHRnYXA6IDRweDtcblxuXHRcdFx0XHRcdC5jdXJyZW5jeSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFtb3VudCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDQ4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucGVyaW9kIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tdGFnbGluZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLWZlYXR1cmVzIHtcblx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQuZmVhdHVyZS1pdGVtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHRcdFx0LmZlYXR1cmUtaWNvbiB7XG5cdFx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZlYXR1cmUtdGV4dCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LW9wdGlvbnMge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IGF1dG87XG5cblx0XHRcdFx0LnBheW1lbnQtYnV0dG9uIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogOHB4O1xuXG5cdFx0XHRcdFx0LnBheW1lbnQtaWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnN0cmlwZS1idXR0b24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLmNyeXB0by1idXR0b24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y3OTMxZSAwJSwgI2ZmNmIzNSAxMDAlKTtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyNDcsIDE0NywgMzAsIDAuMyk7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNDcsIDE0NywgMzAsIDAuNCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi1idXR0b24ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXG5cdFx0XHRcdCYudXBncmFkZS1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5wcm8ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhMWExYSAwJSwgIzMzMyAxMDAlKTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5jdXJyZW50LXBsYW4ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOGY1ZTg7XG5cdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjpkaXNhYmxlZCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC42O1xuXHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuYmlsbGluZy1mb290ZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nLXRvcDogMzJweDtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcblxuXHRcdC5mb290ZXItbGlua3Mge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdFx0LmZvb3Rlci1saW5rIHtcblx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICM1YTY3ZDg7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYmlsbGluZy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cblx0XHQuYmlsbGluZy1oZWFkZXIge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LmJpbGxpbmctdGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5iaWxsaW5nLXN1YnRpdGxlIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5zdWJzY3JpcHRpb24tbWFuYWdlbWVudCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWNhcmQge1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4IDIwcHg7XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1oZWFkZXIge1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHQuc3Vic2NyaXB0aW9uLXN0YXR1cyB7XG5cdFx0XHRcdFx0XHQuc3RhdHVzLXRleHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN1YnNjcmlwdGlvbi1wbGFuIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLWRldGFpbHMge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuZGV0YWlsLXJvdyB7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRnYXA6IDRweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAwO1xuXG5cdFx0XHRcdFx0XHQuZGV0YWlsLWxhYmVsIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZGV0YWlsLXZhbHVlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG5cdFx0XHRcdFx0Lm1hbmFnZS1idXR0b24ge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubWFuYWdlbWVudC1ub3RlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQucHJpY2luZy1ncmlkIHtcblx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0Z2FwOiAyMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LnByaWNpbmctY2FyZCB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblxuXHRcdFx0XHQmLnBvcHVsYXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdFx0LnBsYW4tbmFtZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tcHJpY2luZyB7XG5cdFx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRcdC5hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDQwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tZmVhdHVyZXMge1xuXHRcdFx0XHRcdC5mZWF0dXJlLWl0ZW0ge1xuXHRcdFx0XHRcdFx0LmZlYXR1cmUtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1idXR0b24ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjBweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuYmlsbGluZy1mb290ZXIge1xuXHRcdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cblx0XHRcdC5mb290ZXItbGlua3Mge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cblx0XHRcdFx0LmZvb3Rlci1saW5rIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-billing_zelf-keys-billing_component_ts.js.map