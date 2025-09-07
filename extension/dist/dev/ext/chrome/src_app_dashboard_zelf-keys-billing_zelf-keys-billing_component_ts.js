"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-billing_zelf-keys-billing_component_ts"],{

/***/ 4877:
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
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/billing.service */ 4877);
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
function ZelfKeysBillingComponent_div_4_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cancelled On:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 39);
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
function ZelfKeysBillingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 26)(27, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Zelf Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 26)(32, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 26)(38, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, ZelfKeysBillingComponent_div_4_div_43_Template, 6, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 30)(45, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_4_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openCustomerPortal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Manage Subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("status-active", !ctx_r1.isCancelledActive())("status-cancelled", ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isCancelledActive() ? "Cancelled (Active Until Period End)" : (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.stripeData == null ? null : ctx_r1.activeSubscription.stripeData.status) || "Active", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.zelfName) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](36, 21, ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.startDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.isCancelledActive() ? "Access Ends:" : "Next Billing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("status-cancelled", ctx_r1.isCancelledActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](42, 24, ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.endDate, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isCancelledActive() && (ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.stripeData == null ? null : ctx_r1.activeSubscription.stripeData.cancelledAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isCancelledActive() ? "Your subscription is cancelled but remains active until the end of your billing period. You can reactivate or view billing history in the Stripe customer portal." : "Manage your subscription, update payment methods, view billing history, and more in the Stripe customer portal.", " ");
  }
}
function ZelfKeysBillingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "h2", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Complete Your Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 45)(8, "div", 46)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 48)(14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Payment Address (Avalanche C-Chain)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 50)(17, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.copyPaymentAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 55)(24, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Scan with your wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 59)(29, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Amount to Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 62)(34, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Waiting for payment confirmation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "This page will automatically update when payment is received");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 65)(41, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_5_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.cancelCryptoPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Cancel Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Send ", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.price, " AVAX to the address below");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("$", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.price, "/", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.interval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.paymentAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.generatePaymentQR(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.cryptoPaymentData == null ? null : ctx_r1.cryptoPaymentData.selectedPlan == null ? null : ctx_r1.cryptoPaymentData.selectedPlan.price, " AVAX");
  }
}
function ZelfKeysBillingComponent_div_6_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "POPULAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_6_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 86);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 87)(1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_6_div_1_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const plan_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectPlan(plan_r7.id, "stripe"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "rect", 90)(4, "line", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Pay with Stripe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_6_div_1_div_17_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const plan_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectPlan(plan_r7.id, "crypto"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "svg", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "circle", 93)(9, "path", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Pay with Crypto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_6_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 95);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69)(1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ZelfKeysBillingComponent_div_6_div_1_div_4_Template, 2, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 73)(6, "div", 74)(7, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ZelfKeysBillingComponent_div_6_div_1_div_16_Template, 5, 1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ZelfKeysBillingComponent_div_6_div_1_div_17_Template, 11, 0, "div", 81)(18, ZelfKeysBillingComponent_div_6_div_1_button_18_Template, 2, 1, "button", 82);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ZelfKeysBillingComponent_div_6_div_1_Template, 19, 12, "div", 68);
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
      if (response.success && response.paymentAddress) {
        console.log("✅ Crypto payment created:", response);
        // Store payment data and show crypto payment interface
        this.cryptoPaymentData = {
          planId,
          paymentAddress: response.paymentAddress,
          zkPay: response.zkPay,
          selectedPlan: this.plans.find(plan => plan.id === planId)
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
    if (!this.cryptoPaymentData?.zkPay) return;
    this.billingService.checkCryptoPaymentStatus(this.cryptoPaymentData.zkPay.ipfs_pin_hash).then(response => {
      if (response.success && response.paymentConfirmed) {
        console.log("✅ Payment confirmed!");
        this.stopPaymentMonitoring();
        this.showCryptoPayment = false;
        this.cryptoPaymentData = null;
        // Refresh subscription data
        this.loadCurrentPlan();
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
    consts: [[1, "billing-container"], ["class", "billing-header", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "subscription-management", 4, "ngIf"], ["class", "crypto-payment-container", 4, "ngIf"], ["class", "pricing-grid", 4, "ngIf"], [1, "billing-header"], [1, "billing-title"], [1, "billing-subtitle"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], [1, "error-message"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "error-icon"], ["d", "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "retry-button", 3, "click"], [1, "subscription-management"], [1, "subscription-card"], [1, "subscription-header"], [1, "subscription-status"], ["class", "status-icon", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["class", "status-icon cancelled", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "status-text"], [1, "subscription-plan"], [1, "subscription-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-row", 4, "ngIf"], [1, "subscription-actions"], [1, "manage-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "button-icon"], ["d", "M10.325 4.317C10.751 3.901 11.377 3.901 11.803 4.317L20.69 13.204C21.116 13.63 21.116 14.256 20.69 14.682L11.803 23.569C11.377 23.995 10.751 23.995 10.325 23.569L1.438 14.682C1.012 14.256 1.012 13.63 1.438 13.204L10.325 4.317Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "management-note"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "status-icon"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "status-icon", "cancelled"], ["d", "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12 C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "detail-value", "status-cancelled"], [1, "crypto-payment-container"], [1, "crypto-payment-card"], [1, "payment-header"], [1, "payment-title"], [1, "payment-subtitle"], [1, "payment-details"], [1, "plan-info"], [1, "plan-price"], [1, "payment-address-section"], [1, "address-label"], [1, "address-container"], [1, "address-text"], [1, "copy-button", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z", "fill", "currentColor"], [1, "qr-code-section"], [1, "qr-label"], [1, "qr-container"], ["alt", "Payment QR Code", 1, "qr-code", 3, "src"], [1, "payment-amount"], [1, "amount-label"], [1, "amount-value"], [1, "payment-status"], [1, "status-indicator"], [1, "status-note"], [1, "payment-actions"], [1, "cancel-button", 3, "click"], [1, "pricing-grid"], ["class", "pricing-card", 3, "popular", "current", 4, "ngFor", "ngForOf"], [1, "pricing-card"], [1, "card-header"], [1, "plan-name"], ["class", "popular-badge", 4, "ngIf"], [1, "plan-pricing"], [1, "price"], [1, "currency"], [1, "amount"], [1, "period"], [1, "plan-tagline"], [1, "plan-features"], ["class", "feature-item", 4, "ngFor", "ngForOf"], ["class", "payment-options", 4, "ngIf"], ["class", "plan-button current-plan", "disabled", "", 4, "ngIf"], [1, "popular-badge"], [1, "feature-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "feature-icon"], [1, "feature-text"], [1, "payment-options"], [1, "payment-button", "stripe-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "payment-icon"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2", "stroke", "currentColor", "stroke-width", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10", "stroke", "currentColor", "stroke-width", "2"], [1, "payment-button", "crypto-button", 3, "click"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 12l2 2 4-4", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["disabled", "", 1, "plan-button", "current-plan"]],
    template: function ZelfKeysBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ZelfKeysBillingComponent_div_1_Template, 5, 0, "div", 1)(2, ZelfKeysBillingComponent_div_2_Template, 4, 0, "div", 2)(3, ZelfKeysBillingComponent_div_3_Template, 8, 1, "div", 3)(4, ZelfKeysBillingComponent_div_4_Template, 51, 27, "div", 4)(5, ZelfKeysBillingComponent_div_5_Template, 43, 7, "div", 5)(6, ZelfKeysBillingComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && !ctx.hasActiveSubscription);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule],
    styles: [".billing-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin: 0;\n  font-weight: 400;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 400px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #dc3545;\n  margin: 0 0 20px 0;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {\n  background: #5a67d8;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #28a745;\n  border-radius: 20px;\n  padding: 40px;\n  max-width: 600px;\n  width: 100%;\n  box-shadow: 0 8px 32px rgba(40, 167, 69, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n  width: 24px;\n  height: 24px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-icon.cancelled[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #28a745;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status.cancelled[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-plan[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value.status-active[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value.status-cancelled[_ngcontent-%COMP%] {\n  color: #fd7e14;\n  font-weight: 600;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .management-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #f7931e;\n  border-radius: 20px;\n  padding: 40px;\n  max-width: 600px;\n  width: 100%;\n  box-shadow: 0 8px 32px rgba(247, 147, 30, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-header[_ngcontent-%COMP%]   .payment-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  padding: 20px;\n  background: #fff5e6;\n  border-radius: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #f7931e;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  background: #f8f9fa;\n  padding: 16px;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: \"Courier New\", monospace;\n  font-size: 14px;\n  color: #1a1a1a;\n  word-break: break-all;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%] {\n  background: #f7931e;\n  color: white;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-address-section[_ngcontent-%COMP%]   .address-container[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]:hover {\n  background: #e8851c;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 16px;\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .qr-code-section[_ngcontent-%COMP%]   .qr-container[_ngcontent-%COMP%]   .qr-code[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  display: block;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #fff5e6;\n  padding: 20px;\n  border-radius: 12px;\n  border: 2px solid #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .amount-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-details[_ngcontent-%COMP%]   .payment-amount[_ngcontent-%COMP%]   .amount-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #f7931e;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 32px 0;\n  padding: 24px;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #f7931e;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #f7931e;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-status[_ngcontent-%COMP%]   .status-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-actions[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .crypto-payment-container[_ngcontent-%COMP%]   .crypto-payment-card[_ngcontent-%COMP%]   .payment-actions[_ngcontent-%COMP%]   .cancel-button[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e0e0e0;\n  border-radius: 16px;\n  padding: 32px 24px;\n  position: relative;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n  border-color: #667eea;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);\n  transform: scale(1.02);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02) translateY(-4px);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.current[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: linear-gradient(135deg, #f8fff9 0%, #f0f8f0 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .popular-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #1a1a1a;\n  line-height: 1;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  font-weight: 500;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-tagline[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 24px;\n  font-weight: 400;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: #28a745;\n  width: 16px;\n  height: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  line-height: 1.4;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: auto;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.stripe-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.stripe-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.crypto-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(247, 147, 30, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button.crypto-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(247, 147, 30, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .payment-options[_ngcontent-%COMP%]   .payment-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button.pro[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button.pro[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.current-plan[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #28a745;\n  border: 2px solid #28a745;\n  cursor: default;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.current-plan[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 32px;\n  border-top: 1px solid #e0e0e0;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .billing-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n    padding-bottom: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-plan[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    padding: 8px 0;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%] {\n    padding: 14px 24px;\n    font-size: 15px;\n    width: 100%;\n    justify-content: center;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .management-note[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    font-size: 15px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9FO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFPRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUEo7QUFTSTtFQUNDLG1CQUFBO0FBUEw7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNB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QUFBO0VBeElMO0VBK0lJO0lBQ0MsZUFBQTtFQTdJTDtFQWtKRTtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtFQWhKSDtFQXFKQTtJQUNDLGlCQUFBO0VBbkpEO0VBcUpDO0lBQ0Msa0JBQUE7RUFuSkY7RUFxSkU7SUFDQyxlQUFBO0VBbkpIO0FBQ0YiLCJmaWxlIjoiemVsZi1rZXlzLWJpbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGluZy1jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDEwMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDA7XG5cblx0LmJpbGxpbmctaGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5iaWxsaW5nLXRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0fVxuXG5cdFx0LmJpbGxpbmctc3VidGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdH1cblx0fVxuXG5cdC5sb2FkaW5nLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdC5sb2FkaW5nLXNwaW5uZXIge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0Ym9yZGVyLXRvcDogNHB4IHNvbGlkICM2NjdlZWE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5lcnJvci1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0LmVycm9yLW1lc3NhZ2Uge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblxuXHRcdFx0LmVycm9yLWljb24ge1xuXHRcdFx0XHRjb2xvcjogI2RjMzU0NTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICNkYzM1NDU7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnJldHJ5LWJ1dHRvbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICM2NjdlZWE7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1YTY3ZDg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5zdWJzY3JpcHRpb24tY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICMyOGE3NDU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0cGFkZGluZzogNDBweDtcblx0XHRcdG1heC13aWR0aDogNjAwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4xNSk7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tc3RhdHVzIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXG5cdFx0XHRcdFx0LnN0YXR1cy1pY29uIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI0cHg7XG5cblx0XHRcdFx0XHRcdCYuY2FuY2VsbGVkIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZDdlMTQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN0YXR1cy10ZXh0IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLmNhbmNlbGxlZCB7XG5cdFx0XHRcdFx0XHQuc3RhdHVzLXRleHQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZkN2UxNDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLXBsYW4ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1kZXRhaWxzIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQuZGV0YWlsLXJvdyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG5cblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZGV0YWlsLWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbC12YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cblx0XHRcdFx0XHRcdCYuc3RhdHVzLWFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQmLnN0YXR1cy1jYW5jZWxsZWQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZkN2UxNDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1hY3Rpb25zIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdC5tYW5hZ2UtYnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAzMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5idXR0b24taWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubWFuYWdlbWVudC1ub3RlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5jcnlwdG8tcGF5bWVudC1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5jcnlwdG8tcGF5bWVudC1jYXJkIHtcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2Y3OTMxZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRwYWRkaW5nOiA0MHB4O1xuXHRcdFx0bWF4LXdpZHRoOiA2MDBweDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDI0NywgMTQ3LCAzMCwgMC4xNSk7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjc5MzFlIDAlLCAjZmY2YjM1IDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1oZWFkZXIge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LnBheW1lbnQtdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50LXN1YnRpdGxlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LWRldGFpbHMge1xuXHRcdFx0XHQucGxhbi1pbmZvIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY1ZTY7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucGxhbi1wcmljZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBheW1lbnQtYWRkcmVzcy1zZWN0aW9uIHtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdFx0LmFkZHJlc3MtbGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYWRkcmVzcy1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTZweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXG5cdFx0XHRcdFx0XHQuYWRkcmVzcy10ZXh0IHtcblx0XHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jb3B5LWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMTJweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0Z2FwOiA0cHg7XG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlODg1MWM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucXItY29kZS1zZWN0aW9uIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHRcdC5xci1sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucXItY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXG5cdFx0XHRcdFx0XHQucXItY29kZSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyMDBweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBheW1lbnQtYW1vdW50IHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjVlNjtcblx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgI2Y3OTMxZTtcblxuXHRcdFx0XHRcdC5hbW91bnQtbGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYW1vdW50LXZhbHVlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2Y3OTMxZTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtc3RhdHVzIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW46IDMycHggMDtcblx0XHRcdFx0cGFkZGluZzogMjRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblxuXHRcdFx0XHQuc3RhdHVzLWluZGljYXRvciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHRcdFx0LmxvYWRpbmctc3Bpbm5lciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRcdFx0XHRib3JkZXItdG9wOiAycHggc29saWQgI2Y3OTMxZTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN0YXR1cy1ub3RlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LWFjdGlvbnMge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0LmNhbmNlbC1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzVhNjI2ODtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQucHJpY2luZy1ncmlkIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRcdGdhcDogMjRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXG5cdFx0LnByaWNpbmctY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0cGFkZGluZzogMzJweCAyNHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdH1cblxuXHRcdFx0Ji5wb3B1bGFyIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xNSk7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKSB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYuY3VycmVudCB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmZmOSAwJSwgI2YwZjhmMCAxMDAlKTtcblx0XHRcdH1cblxuXHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHQucGxhbi1uYW1lIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvcHVsYXItYmFkZ2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tcHJpY2luZyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRcdFx0XHRnYXA6IDRweDtcblxuXHRcdFx0XHRcdC5jdXJyZW5jeSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFtb3VudCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDQ4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucGVyaW9kIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tdGFnbGluZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLWZlYXR1cmVzIHtcblx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQuZmVhdHVyZS1pdGVtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHRcdFx0LmZlYXR1cmUtaWNvbiB7XG5cdFx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZlYXR1cmUtdGV4dCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LW9wdGlvbnMge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IGF1dG87XG5cblx0XHRcdFx0LnBheW1lbnQtYnV0dG9uIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogOHB4O1xuXG5cdFx0XHRcdFx0LnBheW1lbnQtaWNvbiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnN0cmlwZS1idXR0b24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLmNyeXB0by1idXR0b24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y3OTMxZSAwJSwgI2ZmNmIzNSAxMDAlKTtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyNDcsIDE0NywgMzAsIDAuMyk7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgyNDcsIDE0NywgMzAsIDAuNCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi1idXR0b24ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXG5cdFx0XHRcdCYudXBncmFkZS1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5wcm8ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhMWExYSAwJSwgIzMzMyAxMDAlKTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5jdXJyZW50LXBsYW4ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOGY1ZTg7XG5cdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjpkaXNhYmxlZCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC42O1xuXHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuYmlsbGluZy1mb290ZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nLXRvcDogMzJweDtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcblxuXHRcdC5mb290ZXItbGlua3Mge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdFx0LmZvb3Rlci1saW5rIHtcblx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICM1YTY3ZDg7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYmlsbGluZy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cblx0XHQuYmlsbGluZy1oZWFkZXIge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LmJpbGxpbmctdGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5iaWxsaW5nLXN1YnRpdGxlIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5zdWJzY3JpcHRpb24tbWFuYWdlbWVudCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWNhcmQge1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4IDIwcHg7XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1oZWFkZXIge1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHQuc3Vic2NyaXB0aW9uLXN0YXR1cyB7XG5cdFx0XHRcdFx0XHQuc3RhdHVzLXRleHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN1YnNjcmlwdGlvbi1wbGFuIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLWRldGFpbHMge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuZGV0YWlsLXJvdyB7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRnYXA6IDRweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAwO1xuXG5cdFx0XHRcdFx0XHQuZGV0YWlsLWxhYmVsIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZGV0YWlsLXZhbHVlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG5cdFx0XHRcdFx0Lm1hbmFnZS1idXR0b24ge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubWFuYWdlbWVudC1ub3RlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQucHJpY2luZy1ncmlkIHtcblx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0Z2FwOiAyMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LnByaWNpbmctY2FyZCB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblxuXHRcdFx0XHQmLnBvcHVsYXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdFx0LnBsYW4tbmFtZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tcHJpY2luZyB7XG5cdFx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRcdC5hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDQwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tZmVhdHVyZXMge1xuXHRcdFx0XHRcdC5mZWF0dXJlLWl0ZW0ge1xuXHRcdFx0XHRcdFx0LmZlYXR1cmUtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1idXR0b24ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjBweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuYmlsbGluZy1mb290ZXIge1xuXHRcdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cblx0XHRcdC5mb290ZXItbGlua3Mge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cblx0XHRcdFx0LmZvb3Rlci1saW5rIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1iaWxsaW5nL3plbGYta2V5cy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9FO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFPRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUEo7QUFTSTtFQUNDLG1CQUFBO0FBUEw7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFB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QywyQkFBQTtFQWpJSjtFQXNJRztJQUNDLGVBQUE7RUFwSUo7RUEwSUk7SUFDQyxlQUFBO0VBeElMO0VBK0lJO0lBQ0MsZUFBQTtFQTdJTDtFQWtKRTtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtFQWhKSDtFQXFKQTtJQUNDLGlCQUFBO0VBbkpEO0VBcUpDO0lBQ0Msa0JBQUE7RUFuSkY7RUFxSkU7SUFDQyxlQUFBO0VBbkpIO0FBQ0Y7QUFDQSxvL2pDQUFvL2pDIiwic291cmNlc0NvbnRlbnQiOlsiLmJpbGxpbmctY29udGFpbmVyIHtcblx0bWF4LXdpZHRoOiAxMDAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAwO1xuXG5cdC5iaWxsaW5nLWhlYWRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQuYmlsbGluZy10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCAxMnB4IDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdH1cblxuXHRcdC5iaWxsaW5nLXN1YnRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR9XG5cdH1cblxuXHQubG9hZGluZy1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHQubG9hZGluZy1zcGlubmVyIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0Ym9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcblx0XHRcdGJvcmRlci10b3A6IDRweCBzb2xpZCAjNjY3ZWVhO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0fVxuXG5cdFx0cCB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQuZXJyb3ItY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblxuXHRcdC5lcnJvci1tZXNzYWdlIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cblx0XHRcdC5lcnJvci1pY29uIHtcblx0XHRcdFx0Y29sb3I6ICNkYzM1NDU7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjZGMzNTQ1O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdC5yZXRyeS1idXR0b24ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNjY3ZWVhO1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNWE2N2Q4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnN1YnNjcmlwdGlvbi1tYW5hZ2VtZW50IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQuc3Vic2NyaXB0aW9uLWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdHBhZGRpbmc6IDQwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMTUpO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1oZWFkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLXN0YXR1cyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblxuXHRcdFx0XHRcdC5zdGF0dXMtaWNvbiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyNHB4O1xuXG5cdFx0XHRcdFx0XHQmLmNhbmNlbGxlZCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmQ3ZTE0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdGF0dXMtdGV4dCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5jYW5jZWxsZWQge1xuXHRcdFx0XHRcdFx0LnN0YXR1cy10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZDdlMTQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1wbGFuIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tZGV0YWlscyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LmRldGFpbC1yb3cge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbC1sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWwtdmFsdWUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXG5cdFx0XHRcdFx0XHQmLnN0YXR1cy1hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ji5zdGF0dXMtY2FuY2VsbGVkIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZDdlMTQ7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHQubWFuYWdlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hbmFnZW1lbnQtbm90ZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuY3J5cHRvLXBheW1lbnQtY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cblx0XHQuY3J5cHRvLXBheW1lbnQtY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmNzkzMWU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0cGFkZGluZzogNDBweDtcblx0XHRcdG1heC13aWR0aDogNjAwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgyNDcsIDE0NywgMzAsIDAuMTUpO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0Jjo6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y3OTMxZSAwJSwgI2ZmNmIzNSAxMDAlKTtcblx0XHRcdH1cblxuXHRcdFx0LnBheW1lbnQtaGVhZGVyIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdC5wYXltZW50LXRpdGxlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGF5bWVudC1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1kZXRhaWxzIHtcblx0XHRcdFx0LnBsYW4taW5mbyB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmNWU2O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBsYW4tcHJpY2Uge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjc5MzFlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50LWFkZHJlc3Mtc2VjdGlvbiB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHRcdC5hZGRyZXNzLWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFkZHJlc3MtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblxuXHRcdFx0XHRcdFx0LmFkZHJlc3MtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuY29weS1idXR0b24ge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjc5MzFlO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDEycHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGdhcDogNHB4O1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTg4NTFjO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnFyLWNvZGUtc2VjdGlvbiB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0XHQucXItbGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnFyLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblxuXHRcdFx0XHRcdFx0LnFyLWNvZGUge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMjAwcHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wYXltZW50LWFtb3VudCB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY1ZTY7XG5cdFx0XHRcdFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNmNzkzMWU7XG5cblx0XHRcdFx0XHQuYW1vdW50LWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFtb3VudC12YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wYXltZW50LXN0YXR1cyB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luOiAzMnB4IDA7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cblx0XHRcdFx0LnN0YXR1cy1pbmRpY2F0b3Ige1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdFx0XHRcdC5sb2FkaW5nLXNwaW5uZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICNmNzkzMWU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjc5MzFlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdGF0dXMtbm90ZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1hY3Rpb25zIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRcdC5jYW5jZWwtYnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1YTYyNjg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnByaWNpbmctZ3JpZCB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0XHRnYXA6IDI0cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5wcmljaW5nLWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdHBhZGRpbmc6IDMycHggMjRweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICM2NjdlZWE7XG5cdFx0XHR9XG5cblx0XHRcdCYucG9wdWxhciB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMTUpO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMikgdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLmN1cnJlbnQge1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZmZjkgMCUsICNmMGY4ZjAgMTAwJSk7XG5cdFx0XHR9XG5cblx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0LnBsYW4tbmFtZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3B1bGFyLWJhZGdlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLXByaWNpbmcge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdC5wcmljZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cdFx0XHRcdFx0Z2FwOiA0cHg7XG5cblx0XHRcdFx0XHQuY3VycmVuY3kge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hbW91bnQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBlcmlvZCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLXRhZ2xpbmUge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi1mZWF0dXJlcyB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LmZlYXR1cmUtaXRlbSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdFx0XHRcdC5mZWF0dXJlLWljb24ge1xuXHRcdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5mZWF0dXJlLXRleHQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGF5bWVudC1vcHRpb25zIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXG5cdFx0XHRcdC5wYXltZW50LWJ1dHRvbiB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRnYXA6IDhweDtcblxuXHRcdFx0XHRcdC5wYXltZW50LWljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5zdHJpcGUtYnV0dG9uIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5jcnlwdG8tYnV0dG9uIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNzkzMWUgMCUsICNmZjZiMzUgMTAwJSk7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMjQ3LCAxNDcsIDMwLCAwLjMpO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMjQ3LCAxNDcsIDMwLCAwLjQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tYnV0dG9uIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDE0cHggMjRweDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0bWFyZ2luLXRvcDogYXV0bztcblxuXHRcdFx0XHQmLnVwZ3JhZGUtYnV0dG9uIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCYucHJvIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTFhMWEgMCUsICMzMzMgMTAwJSk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCYuY3VycmVudC1wbGFuIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZThmNWU4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICMyOGE3NDU7XG5cdFx0XHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IG5vbmU7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6ZGlzYWJsZWQge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmJpbGxpbmctZm9vdGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZy10b3A6IDMycHg7XG5cdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG5cblx0XHQuZm9vdGVyLWxpbmtzIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cblx0XHRcdC5mb290ZXItbGluayB7XG5cdFx0XHRcdGNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0dHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjNWE2N2Q4O1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3BpbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmJpbGxpbmctY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAwO1xuXG5cdFx0LmJpbGxpbmctaGVhZGVyIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdC5iaWxsaW5nLXRpdGxlIHtcblx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuYmlsbGluZy1zdWJ0aXRsZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1jYXJkIHtcblx0XHRcdFx0cGFkZGluZzogMjRweCAyMHB4O1xuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24taGVhZGVyIHtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdGdhcDogMTZweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdFx0LnN1YnNjcmlwdGlvbi1zdGF0dXMge1xuXHRcdFx0XHRcdFx0LnN0YXR1cy10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zdWJzY3JpcHRpb24tcGxhbiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1kZXRhaWxzIHtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0XHRcdFx0LmRldGFpbC1yb3cge1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdFx0Z2FwOiA0cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMDtcblxuXHRcdFx0XHRcdFx0LmRldGFpbC1sYWJlbCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmRldGFpbC12YWx1ZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLWFjdGlvbnMge1xuXHRcdFx0XHRcdC5tYW5hZ2UtYnV0dG9uIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE0cHggMjRweDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lm1hbmFnZW1lbnQtbm90ZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnByaWNpbmctZ3JpZCB7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdGdhcDogMjBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdC5wcmljaW5nLWNhcmQge1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4IDIwcHg7XG5cblx0XHRcdFx0Ji5wb3B1bGFyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IG5vbmU7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuY2FyZC1oZWFkZXIge1xuXHRcdFx0XHRcdC5wbGFuLW5hbWUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wbGFuLXByaWNpbmcge1xuXHRcdFx0XHRcdC5wcmljZSB7XG5cdFx0XHRcdFx0XHQuYW1vdW50IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wbGFuLWZlYXR1cmVzIHtcblx0XHRcdFx0XHQuZmVhdHVyZS1pdGVtIHtcblx0XHRcdFx0XHRcdC5mZWF0dXJlLXRleHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tYnV0dG9uIHtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDIwcHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmJpbGxpbmctZm9vdGVyIHtcblx0XHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXG5cdFx0XHQuZm9vdGVyLWxpbmtzIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXG5cdFx0XHRcdC5mb290ZXItbGluayB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-billing_zelf-keys-billing_component_ts.js.map