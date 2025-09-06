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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_billing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/billing.service */ 4877);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wallet.service */ 69556);







function ZelfKeysBillingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading subscription plans...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysBillingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_7_Template_button_click_6_listener() {
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
function ZelfKeysBillingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Active Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 26)(11, "div", 27)(12, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27)(17, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Zelf Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 27)(22, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 27)(28, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Next Billing:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 31)(34, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_8_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openCustomerPortal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Manage Subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Manage your subscription, update payment methods, view billing history, and more in the Stripe customer portal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.name) || "Premium Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.stripeData == null ? null : ctx_r1.activeSubscription.stripeData.status) || "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.zelfName) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 5, ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.startDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](32, 8, ctx_r1.activeSubscription == null ? null : ctx_r1.activeSubscription.endDate, "medium"));
  }
}
function ZelfKeysBillingComponent_div_9_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "POPULAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ZelfKeysBillingComponent_div_9_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](feature_r5);
  }
}
function ZelfKeysBillingComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ZelfKeysBillingComponent_div_9_div_1_div_4_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 42)(6, "div", 43)(7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ZelfKeysBillingComponent_div_9_div_1_div_16_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZelfKeysBillingComponent_div_9_div_1_Template_button_click_17_listener() {
      const plan_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.selectPlan(plan_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const plan_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("popular", plan_r6.isPopular)("current", plan_r6.isCurrent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", plan_r6.isPopular);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r6.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("/", plan_r6.interval, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](plan_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", plan_r6.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.getPlanButtonClass(plan_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isPlanDisabled(plan_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getPlanButtonText(plan_r6), " ");
  }
}
function ZelfKeysBillingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ZelfKeysBillingComponent_div_9_div_1_Template, 19, 14, "div", 37);
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
  plans = [];
  currentPlan = "free";
  loading = true;
  error = null;
  hasActiveSubscription = false;
  activeSubscription = null;
  constructor(billingService, _walletService) {
    this.billingService = billingService;
    this._walletService = _walletService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._walletService.initZelfKeySession();
      _this.loadPlans();
      _this.loadCurrentPlan();
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
      console.log("Response:", response);
      if (!response.success || !response.data) {
        this.currentPlan = "free";
        this.hasActiveSubscription = false;
        this.activeSubscription = null;
        return;
      }
      // Set active subscription data
      this.hasActiveSubscription = true;
      this.activeSubscription = response.data;
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
  selectPlan(planId) {
    if (planId === this.currentPlan) {
      return; // Don't allow selecting current plan
    }
    console.log(`Upgrading to ${planId} plan`);
    this.createCheckoutSession(planId);
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
   * Open Stripe customer portal for subscription management
   */
  openCustomerPortal() {
    this.billingService.createCustomerPortalSession().then(response => {
      if (response.success && response.portalUrl) {
        // Open the portal in a new tab
        window.open(response.portalUrl, "_blank");
      } else {
        this.error = "Failed to open subscription management portal";
      }
    }).catch(error => {
      console.error("Error opening customer portal:", error);
      this.error = "Failed to open subscription management portal";
    });
  }
  static ɵfac = function ZelfKeysBillingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfKeysBillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_billing_service__WEBPACK_IMPORTED_MODULE_1__.BillingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ZelfKeysBillingComponent,
    selectors: [["app-zelf-keys-billing"]],
    decls: 20,
    vars: 4,
    consts: [[1, "billing-container"], [1, "billing-header"], [1, "billing-title"], [1, "billing-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "subscription-management", 4, "ngIf"], ["class", "pricing-grid", 4, "ngIf"], [1, "billing-footer"], [1, "footer-links"], ["href", "#", 1, "footer-link"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], [1, "error-message"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "error-icon"], ["d", "M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "retry-button", 3, "click"], [1, "subscription-management"], [1, "subscription-card"], [1, "subscription-header"], [1, "subscription-status"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "status-icon"], ["d", "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "status-text"], [1, "subscription-plan"], [1, "subscription-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value", "status-active"], [1, "detail-value"], [1, "subscription-actions"], [1, "manage-button", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "button-icon"], ["d", "M10.325 4.317C10.751 3.901 11.377 3.901 11.803 4.317L20.69 13.204C21.116 13.63 21.116 14.256 20.69 14.682L11.803 23.569C11.377 23.995 10.751 23.995 10.325 23.569L1.438 14.682C1.012 14.256 1.012 13.63 1.438 13.204L10.325 4.317Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "management-note"], [1, "pricing-grid"], ["class", "pricing-card", 3, "popular", "current", 4, "ngFor", "ngForOf"], [1, "pricing-card"], [1, "card-header"], [1, "plan-name"], ["class", "popular-badge", 4, "ngIf"], [1, "plan-pricing"], [1, "price"], [1, "currency"], [1, "amount"], [1, "period"], [1, "plan-tagline"], [1, "plan-features"], ["class", "feature-item", 4, "ngFor", "ngForOf"], [1, "plan-button", 3, "click", "disabled"], [1, "popular-badge"], [1, "feature-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "feature-icon"], [1, "feature-text"]],
    template: function ZelfKeysBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Choose Your Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Select the plan that best fits your needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ZelfKeysBillingComponent_div_6_Template, 4, 0, "div", 4)(7, ZelfKeysBillingComponent_div_7_Template, 8, 1, "div", 5)(8, ZelfKeysBillingComponent_div_8_Template, 40, 11, "div", 6)(9, ZelfKeysBillingComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Have an existing plan? See billing help");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9)(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "I need help with a billing issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Unlimited subject to fair use policy. Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.hasActiveSubscription);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && !ctx.hasActiveSubscription);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoModule],
    styles: [".billing-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  margin: 0;\n  font-weight: 400;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 400px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #dc3545;\n  margin: 0 0 20px 0;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%]:hover {\n  background: #5a67d8;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #28a745;\n  border-radius: 20px;\n  padding: 40px;\n  max-width: 600px;\n  width: 100%;\n  box-shadow: 0 8px 32px rgba(40, 167, 69, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n  width: 24px;\n  height: 24px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #28a745;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-plan[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f8f9fa;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value.status-active[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .management-note[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 48px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e0e0e0;\n  border-radius: 16px;\n  padding: 32px 24px;\n  position: relative;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n  border-color: #667eea;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);\n  transform: scale(1.02);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02) translateY(-4px);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.current[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: linear-gradient(135deg, #f8fff9 0%, #f0f8f0 100%);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  letter-spacing: -0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .popular-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #1a1a1a;\n  line-height: 1;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #666;\n  font-weight: 500;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-tagline[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 24px;\n  font-weight: 400;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 32px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: #28a745;\n  width: 16px;\n  height: 16px;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  line-height: 1.4;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: auto;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button.pro[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.upgrade-button.pro[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.current-plan[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #28a745;\n  border: 2px solid #28a745;\n  cursor: default;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button.current-plan[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 32px;\n  border-top: 1px solid #e0e0e0;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover {\n  color: #5a67d8;\n  text-decoration: underline;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .billing-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-header[_ngcontent-%COMP%]   .billing-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n    padding-bottom: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-header[_ngcontent-%COMP%]   .subscription-plan[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    padding: 8px 0;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .manage-button[_ngcontent-%COMP%] {\n    padding: 14px 24px;\n    font-size: 15px;\n    width: 100%;\n    justify-content: center;\n  }\n  .billing-container[_ngcontent-%COMP%]   .subscription-management[_ngcontent-%COMP%]   .subscription-card[_ngcontent-%COMP%]   .subscription-actions[_ngcontent-%COMP%]   .management-note[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 32px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card.popular[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-pricing[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .pricing-grid[_ngcontent-%COMP%]   .pricing-card[_ngcontent-%COMP%]   .plan-button[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n    font-size: 15px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n  .billing-container[_ngcontent-%COMP%]   .billing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9FO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFPRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUEo7QUFTSTtFQUNDLG1CQUFBO0FBUEw7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNB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Q0EsbUJBQUE7SUFDQSxvQkFBQTtFQXJFSDtFQXdFSTtJQUNDLGVBQUE7RUF0RUw7RUEwRUc7SUFDQyxlQUFBO0VBeEVKO0VBNEVFO0lBQ0MsbUJBQUE7RUExRUg7RUE0RUc7SUFDQyxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUExRUo7RUE0RUk7SUFDQyxlQUFBO0VBMUVMO0VBNkVJO0lBQ0MsZUFBQTtFQTNFTDtFQWlGRztJQUNDLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtFQS9FSjtFQWtGRztJQUNDLGVBQUE7RUFoRko7RUFzRkE7SUFDQywwQkFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQXBGRDtFQXNGQztJQUNDLGtCQUFBO0VBcEZGO0VBc0ZFO0lBQ0MsZUFBQTtFQXBGSDtFQXNGRztJQUNDLDJCQUFBO0VBcEZKO0VBeUZHO0lBQ0MsZUFBQTtFQXZGSjtFQTZGSTtJQUNDLGVBQUE7RUEzRkw7RUFrR0k7SUFDQyxlQUFBO0VBaEdMO0VBcUdFO0lBQ0Msa0JBQUE7SUFDQSxlQUFBO0VBbkdIO0VBd0dBO0lBQ0MsaUJBQUE7RUF0R0Q7RUF3R0M7SUFDQyxrQkFBQTtFQXRHRjtFQXdHRTtJQUNDLGVBQUE7RUF0R0g7QUFDRiIsImZpbGUiOiJ6ZWxmLWtleXMtYmlsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsaW5nLWNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogMTAwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMDtcblxuXHQuYmlsbGluZy1oZWFkZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXG5cdFx0LmJpbGxpbmctdGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAzMnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0bWFyZ2luOiAwIDAgMTJweCAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHR9XG5cblx0XHQuYmlsbGluZy1zdWJ0aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0fVxuXHR9XG5cblx0LmxvYWRpbmctY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiA2MHB4IDIwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0LmxvYWRpbmctc3Bpbm5lciB7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRib3JkZXItdG9wOiA0cHggc29saWQgIzY2N2VlYTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0LmVycm9yLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRwYWRkaW5nOiA2MHB4IDIwcHg7XG5cblx0XHQuZXJyb3ItbWVzc2FnZSB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXG5cdFx0XHQuZXJyb3ItaWNvbiB7XG5cdFx0XHRcdGNvbG9yOiAjZGMzNTQ1O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0fVxuXG5cdFx0XHRwIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRjb2xvcjogI2RjMzU0NTtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHQucmV0cnktYnV0dG9uIHtcblx0XHRcdFx0YmFja2dyb3VuZDogIzY2N2VlYTtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzVhNjdkODtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5zdWJzY3JpcHRpb24tbWFuYWdlbWVudCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXG5cdFx0LnN1YnNjcmlwdGlvbi1jYXJkIHtcblx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0XHRwYWRkaW5nOiA0MHB4O1xuXHRcdFx0bWF4LXdpZHRoOiA2MDBweDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjE1KTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0aGVpZ2h0OiA0cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMyMGM5OTcgMTAwJSk7XG5cdFx0XHR9XG5cblx0XHRcdC5zdWJzY3JpcHRpb24taGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjRweDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1zdGF0dXMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cblx0XHRcdFx0XHQuc3RhdHVzLWljb24ge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMjRweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3RhdHVzLXRleHQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tcGxhbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWRldGFpbHMge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdC5kZXRhaWwtcm93IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcblxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5kZXRhaWwtbGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZGV0YWlsLXZhbHVlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblxuXHRcdFx0XHRcdFx0Ji5zdGF0dXMtYWN0aXZlIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdFx0XHQubWFuYWdlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnV0dG9uLWljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lm1hbmFnZW1lbnQtbm90ZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQucHJpY2luZy1ncmlkIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRcdGdhcDogMjRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXG5cdFx0LnByaWNpbmctY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0cGFkZGluZzogMzJweCAyNHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdH1cblxuXHRcdFx0Ji5wb3B1bGFyIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4xNSk7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKSB0cmFuc2xhdGVZKC00cHgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCYuY3VycmVudCB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmZmOSAwJSwgI2YwZjhmMCAxMDAlKTtcblx0XHRcdH1cblxuXHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHQucGxhbi1uYW1lIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvcHVsYXItYmFkZ2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDRweCAxMnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tcHJpY2luZyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRcdFx0XHRnYXA6IDRweDtcblxuXHRcdFx0XHRcdC5jdXJyZW5jeSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFtb3VudCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDQ4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQucGVyaW9kIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBsYW4tdGFnbGluZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLWZlYXR1cmVzIHtcblx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQuZmVhdHVyZS1pdGVtIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHRcdFx0LmZlYXR1cmUtaWNvbiB7XG5cdFx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmZlYXR1cmUtdGV4dCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLWJ1dHRvbiB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdG1hcmdpbi10b3A6IGF1dG87XG5cblx0XHRcdFx0Ji51cGdyYWRlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmLnBybyB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWExYTFhIDAlLCAjMzMzIDEwMCUpO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cblx0XHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLmN1cnJlbnQtcGxhbiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U4ZjVlODtcblx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xuXHRcdFx0XHRcdGN1cnNvcjogZGVmYXVsdDtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmRpc2FibGVkIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAwLjY7XG5cdFx0XHRcdFx0Y3Vyc29yOiBub3QtYWxsb3dlZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5iaWxsaW5nLWZvb3RlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmctdG9wOiAzMnB4O1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuXG5cdFx0LmZvb3Rlci1saW5rcyB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG5cdFx0XHQuZm9vdGVyLWxpbmsge1xuXHRcdFx0XHRjb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRjb2xvcjogIzVhNjdkODtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5iaWxsaW5nLWNvbnRhaW5lciB7XG5cdFx0cGFkZGluZzogMDtcblxuXHRcdC5iaWxsaW5nLWhlYWRlciB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQuYmlsbGluZy10aXRsZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdH1cblxuXHRcdFx0LmJpbGxpbmctc3VidGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnN1YnNjcmlwdGlvbi1tYW5hZ2VtZW50IHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdC5zdWJzY3JpcHRpb24tY2FyZCB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLWhlYWRlciB7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRcdC5zdWJzY3JpcHRpb24tc3RhdHVzIHtcblx0XHRcdFx0XHRcdC5zdGF0dXMtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3Vic2NyaXB0aW9uLXBsYW4ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tZGV0YWlscyB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdFx0XHRcdC5kZXRhaWwtcm93IHtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0XHRcdGdhcDogNHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDA7XG5cblx0XHRcdFx0XHRcdC5kZXRhaWwtbGFiZWwge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5kZXRhaWwtdmFsdWUge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1hY3Rpb25zIHtcblx0XHRcdFx0XHQubWFuYWdlLWJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI0cHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5tYW5hZ2VtZW50LW5vdGUge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5wcmljaW5nLWdyaWQge1xuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRnYXA6IDIwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQucHJpY2luZy1jYXJkIHtcblx0XHRcdFx0cGFkZGluZzogMjRweCAyMHB4O1xuXG5cdFx0XHRcdCYucG9wdWxhciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcmQtaGVhZGVyIHtcblx0XHRcdFx0XHQucGxhbi1uYW1lIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1wcmljaW5nIHtcblx0XHRcdFx0XHQucHJpY2Uge1xuXHRcdFx0XHRcdFx0LmFtb3VudCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1mZWF0dXJlcyB7XG5cdFx0XHRcdFx0LmZlYXR1cmUtaXRlbSB7XG5cdFx0XHRcdFx0XHQuZmVhdHVyZS10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wbGFuLWJ1dHRvbiB7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5iaWxsaW5nLWZvb3RlciB7XG5cdFx0XHRwYWRkaW5nLXRvcDogMjRweDtcblxuXHRcdFx0LmZvb3Rlci1saW5rcyB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDtcblxuXHRcdFx0XHQuZm9vdGVyLWxpbmsge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1iaWxsaW5nL3plbGYta2V5cy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFJRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZIO0FBS0U7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFISDtBQU9DO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9FO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEg7QUFPRztFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUc7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUEo7QUFTSTtFQUNDLG1CQUFBO0FBUEw7QUFhQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEY7QUFhRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFB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QTtFQXJFRjtFQXVFRTtJQUNDLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQXJFSDtFQXdFSTtJQUNDLGVBQUE7RUF0RUw7RUEwRUc7SUFDQyxlQUFBO0VBeEVKO0VBNEVFO0lBQ0MsbUJBQUE7RUExRUg7RUE0RUc7SUFDQyxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUExRUo7RUE0RUk7SUFDQyxlQUFBO0VBMUVMO0VBNkVJO0lBQ0MsZUFBQTtFQTNFTDtFQWlGRztJQUNDLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtFQS9FSjtFQWtGRztJQUNDLGVBQUE7RUFoRko7RUFzRkE7SUFDQywwQkFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQXBGRDtFQXNGQztJQUNDLGtCQUFBO0VBcEZGO0VBc0ZFO0lBQ0MsZUFBQTtFQXBGSDtFQXNGRztJQUNDLDJCQUFBO0VBcEZKO0VBeUZHO0lBQ0MsZUFBQTtFQXZGSjtFQTZGSTtJQUNDLGVBQUE7RUEzRkw7RUFrR0k7SUFDQyxlQUFBO0VBaEdMO0VBcUdFO0lBQ0Msa0JBQUE7SUFDQSxlQUFBO0VBbkdIO0VBd0dBO0lBQ0MsaUJBQUE7RUF0R0Q7RUF3R0M7SUFDQyxrQkFBQTtFQXRHRjtFQXdHRTtJQUNDLGVBQUE7RUF0R0g7QUFDRjtBQUNBLHdvckJBQXdvckIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbGluZy1jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDEwMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDA7XG5cblx0LmJpbGxpbmctaGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5iaWxsaW5nLXRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMzJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0fVxuXG5cdFx0LmJpbGxpbmctc3VidGl0bGUge1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdH1cblx0fVxuXG5cdC5sb2FkaW5nLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdC5sb2FkaW5nLXNwaW5uZXIge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0Ym9yZGVyLXRvcDogNHB4IHNvbGlkICM2NjdlZWE7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5lcnJvci1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0LmVycm9yLW1lc3NhZ2Uge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblxuXHRcdFx0LmVycm9yLWljb24ge1xuXHRcdFx0XHRjb2xvcjogI2RjMzU0NTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICNkYzM1NDU7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRcdH1cblxuXHRcdFx0LnJldHJ5LWJ1dHRvbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICM2NjdlZWE7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM1YTY3ZDg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuc3Vic2NyaXB0aW9uLW1hbmFnZW1lbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5zdWJzY3JpcHRpb24tY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICMyOGE3NDU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcdFx0cGFkZGluZzogNDBweDtcblx0XHRcdG1heC13aWR0aDogNjAwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4xNSk7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0XHQmOjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tc3RhdHVzIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Z2FwOiAxMnB4O1xuXG5cdFx0XHRcdFx0LnN0YXR1cy1pY29uIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDI0cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI0cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN0YXR1cy10ZXh0IHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLXBsYW4ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnN1YnNjcmlwdGlvbi1kZXRhaWxzIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0XHQuZGV0YWlsLXJvdyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG5cblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZGV0YWlsLWxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmRldGFpbC12YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cblx0XHRcdFx0XHRcdCYuc3RhdHVzLWFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMjhhNzQ1O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWFjdGlvbnMge1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0Lm1hbmFnZS1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4IDMycHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmJ1dHRvbi1pY29uIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5tYW5hZ2VtZW50LW5vdGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LnByaWNpbmctZ3JpZCB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0XHRnYXA6IDI0cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDhweDtcblxuXHRcdC5wcmljaW5nLWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdHBhZGRpbmc6IDMycHggMjRweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICM2NjdlZWE7XG5cdFx0XHR9XG5cblx0XHRcdCYucG9wdWxhciB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMTUpO1xuXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wMikgdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQmLmN1cnJlbnQge1xuXHRcdFx0XHRib3JkZXItY29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZmZjkgMCUsICNmMGY4ZjAgMTAwJSk7XG5cdFx0XHR9XG5cblx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0LnBsYW4tbmFtZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3B1bGFyLWJhZGdlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMTJweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLXByaWNpbmcge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdC5wcmljZSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cdFx0XHRcdFx0Z2FwOiA0cHg7XG5cblx0XHRcdFx0XHQuY3VycmVuY3kge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hbW91bnQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBlcmlvZCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wbGFuLXRhZ2xpbmUge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi1mZWF0dXJlcyB7XG5cdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LmZlYXR1cmUtaXRlbSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0XHRnYXA6IDEycHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdFx0XHRcdC5mZWF0dXJlLWljb24ge1xuXHRcdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzI4YTc0NTtcblx0XHRcdFx0XHRcdHdpZHRoOiAxNnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5mZWF0dXJlLXRleHQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGxhbi1idXR0b24ge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiBhdXRvO1xuXG5cdFx0XHRcdCYudXBncmFkZS1idXR0b24ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ji5wcm8ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhMWExYSAwJSwgIzMzMyAxMDAlKTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5jdXJyZW50LXBsYW4ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOGY1ZTg7XG5cdFx0XHRcdFx0Y29sb3I6ICMyOGE3NDU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcblx0XHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjpkaXNhYmxlZCB7XG5cdFx0XHRcdFx0b3BhY2l0eTogMC42O1xuXHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuYmlsbGluZy1mb290ZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nLXRvcDogMzJweDtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcblxuXHRcdC5mb290ZXItbGlua3Mge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblxuXHRcdFx0LmZvb3Rlci1saW5rIHtcblx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICM1YTY3ZDg7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYmlsbGluZy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDA7XG5cblx0XHQuYmlsbGluZy1oZWFkZXIge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LmJpbGxpbmctdGl0bGUge1xuXHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5iaWxsaW5nLXN1YnRpdGxlIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5zdWJzY3JpcHRpb24tbWFuYWdlbWVudCB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHQuc3Vic2NyaXB0aW9uLWNhcmQge1xuXHRcdFx0XHRwYWRkaW5nOiAyNHB4IDIwcHg7XG5cblx0XHRcdFx0LnN1YnNjcmlwdGlvbi1oZWFkZXIge1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0XHQuc3Vic2NyaXB0aW9uLXN0YXR1cyB7XG5cdFx0XHRcdFx0XHQuc3RhdHVzLXRleHQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnN1YnNjcmlwdGlvbi1wbGFuIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuc3Vic2NyaXB0aW9uLWRldGFpbHMge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHQuZGV0YWlsLXJvdyB7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdFx0XHRcdFx0XHRnYXA6IDRweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAwO1xuXG5cdFx0XHRcdFx0XHQuZGV0YWlsLWxhYmVsIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZGV0YWlsLXZhbHVlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5zdWJzY3JpcHRpb24tYWN0aW9ucyB7XG5cdFx0XHRcdFx0Lm1hbmFnZS1idXR0b24ge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMTRweCAyNHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubWFuYWdlbWVudC1ub3RlIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQucHJpY2luZy1ncmlkIHtcblx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0Z2FwOiAyMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0LnByaWNpbmctY2FyZCB7XG5cdFx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblxuXHRcdFx0XHQmLnBvcHVsYXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJkLWhlYWRlciB7XG5cdFx0XHRcdFx0LnBsYW4tbmFtZSB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tcHJpY2luZyB7XG5cdFx0XHRcdFx0LnByaWNlIHtcblx0XHRcdFx0XHRcdC5hbW91bnQge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDQwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBsYW4tZmVhdHVyZXMge1xuXHRcdFx0XHRcdC5mZWF0dXJlLWl0ZW0ge1xuXHRcdFx0XHRcdFx0LmZlYXR1cmUtdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGxhbi1idXR0b24ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMjBweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuYmlsbGluZy1mb290ZXIge1xuXHRcdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cblx0XHRcdC5mb290ZXItbGlua3Mge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cblx0XHRcdFx0LmZvb3Rlci1saW5rIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-billing_zelf-keys-billing_component_ts.js.map