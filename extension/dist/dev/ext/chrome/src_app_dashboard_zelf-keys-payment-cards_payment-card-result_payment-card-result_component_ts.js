"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-payment-cards_payment-card-result_payment-card-result_component_ts"],{

/***/ 22787:
/*!********************************************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-payment-cards/payment-card-result/payment-card-result.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentCardResultComponent: () => (/* binding */ PaymentCardResultComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chrome.service */ 85043);
/* harmony import */ var _services_data_passing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data-passing.service */ 59284);









function PaymentCardResultComponent_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Card Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Bank:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14)(16, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Card Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Expires:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.result.publicData.cardName || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.result.publicData.bankName || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.result.publicData.cardNumber || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.result.publicData.expiryMonth, "/", ctx_r1.result.publicData.expiryYear, "");
  }
}
function PaymentCardResultComponent_div_2_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Zelf Proof:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.result.zelfProof.substring(0, 20), "...");
  }
}
function PaymentCardResultComponent_div_2_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "QR Code:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.result.zelfQR, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function PaymentCardResultComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Security Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PaymentCardResultComponent_div_2_div_8_div_5_Template, 5, 1, "div", 20)(6, PaymentCardResultComponent_div_2_div_8_div_6_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.result == null ? null : ctx_r1.result.zelfProof);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.result == null ? null : ctx_r1.result.zelfQR);
  }
}
function PaymentCardResultComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Payment Card Created Successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Your payment card has been securely stored and encrypted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PaymentCardResultComponent_div_2_div_7_Template, 25, 5, "div", 6)(8, PaymentCardResultComponent_div_2_div_8_Template, 7, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentCardResultComponent_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onBackToCards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Back to Payment Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentCardResultComponent_div_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onAddAnother());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Add Another Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.result == null ? null : ctx_r1.result.publicData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.result == null ? null : ctx_r1.result.zelfProof) || (ctx_r1.result == null ? null : ctx_r1.result.zelfQR));
  }
}
function PaymentCardResultComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Error Creating Payment Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8)(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentCardResultComponent_div_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onBackToCards());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Back to Payment Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentCardResultComponent_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onAddAnother());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error || "An unexpected error occurred while creating your payment card.");
  }
}
class PaymentCardResultComponent {
  router;
  route;
  chromeService;
  dataPassingService;
  result = null;
  isSuccess = false;
  error = null;
  constructor(router, route, chromeService, dataPassingService) {
    this.router = router;
    this.route = route;
    this.chromeService = chromeService;
    this.dataPassingService = dataPassingService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/payment-cards/result");
      }
      // Get result from data passing service
      _this.result = _this.dataPassingService.getResult("payment-cards");
      // Debug logging
      console.log("Payment card result data:", _this.result);
      console.log("ZelfProof:", _this.result?.zelfProof);
      console.log("ZelfQR:", _this.result?.zelfQR);
      if (_this.result) {
        _this.isSuccess = _this.result?.success === true;
        if (!_this.isSuccess) {
          _this.error = _this.result?.message || "Unknown error occurred";
        }
      } else {
        _this.error = "No result data found";
      }
    })();
  }
  onBackToCards() {
    this.router.navigate(["/dashboard/payment-cards"]);
  }
  onAddAnother() {
    this.router.navigate(["/dashboard/payment-cards/new"]);
  }
  static ɵfac = function PaymentCardResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaymentCardResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_passing_service__WEBPACK_IMPORTED_MODULE_2__.DataPassingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PaymentCardResultComponent,
    selectors: [["app-payment-card-result"]],
    decls: 4,
    vars: 2,
    consts: [[1, "payment-card-result"], [1, "result-container"], ["class", "success-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], [1, "success-state"], [1, "success-icon"], ["class", "card-preview", 4, "ngIf"], ["class", "security-info", 4, "ngIf"], [1, "actions"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "card-preview"], [1, "preview-header"], [1, "preview-content"], [1, "detail-row"], [1, "label"], [1, "value"], [1, "security-info"], [1, "security-header"], [1, "security-content"], ["class", "detail-row", 4, "ngIf"], [1, "value", "proof-value"], [1, "qr-display"], ["alt", "Zelf QR Code", 1, "qr-image", 3, "src"], [1, "error-state"], [1, "error-icon"]],
    template: function PaymentCardResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PaymentCardResultComponent_div_2_Template, 14, 2, "div", 2)(3, PaymentCardResultComponent_div_3_Template, 12, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isSuccess);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    styles: [".payment-card-result[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n  text-align: center;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 32px 0;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .success-state[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  padding: 24px;\n  margin: 24px 0;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-header[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child, \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child, \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child, \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .proof-value[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .proof-value[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .proof-value[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .proof-value[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 12px;\n  background: #e9ecef;\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #495057;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .preview-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-content[_ngcontent-%COMP%]   .qr-display[_ngcontent-%COMP%]   .qr-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: white;\n  padding: 8px;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-color: #ced4da;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .security-info[_ngcontent-%COMP%]   .security-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  margin-top: 32px;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n}\n.payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n\n@media (max-width: 768px) {\n  .payment-card-result[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .payment-card-result[_ngcontent-%COMP%]   .result-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtY2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Q7QUFDQztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFHRzs7OztFQUVDLGVBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUc7O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRzs7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFJRztFQUNDLGNBQUE7QUFGSjtBQU9HO0VBQ0MsY0FBQTtBQUxKO0FBU0U7O0VBRUMsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQSDtBQVNHOzs7O0VBRUMsbUJBQUE7QUFMSjtBQU9JOzs7O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFGTDtBQVFJOzs7O0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFITDtBQUtLOzs7O0VBQ0MsbUJBQUE7QUFBTjtBQUdLOzs7O0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FBRU47QUFDSzs7OztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUlOO0FBREs7Ozs7RUFDQyxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTU47QUFGSTs7OztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBT0w7QUFMSzs7OztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVVOO0FBSkU7RUFDQyw2REFBQTtFQUNBLHFCQUFBO0FBTUg7QUFKRztFQUNDLGNBQUE7QUFNSjtBQUZFO0VBQ0MsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSUg7QUFGRzs7RUFFQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBREc7RUFDQyw2REFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUdKO0FBREk7RUFDQywyQkFBQTtFQUNBLCtDQUFBO0FBR0w7QUFDRztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFDTDs7QUFPQTtFQUNDO0lBQ0MsYUFBQTtFQUpBO0VBT0M7SUFDQyxzQkFBQTtJQUNBLFNBQUE7RUFMRjtFQU9FOztJQUVDLFdBQUE7RUFMSDtBQUNGIiwiZmlsZSI6InBheW1lbnQtY2FyZC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudC1jYXJkLXJlc3VsdCB7XG5cdHBhZGRpbmc6IDI0cHg7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0LnJlc3VsdC1jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogNTAwcHg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0LnN1Y2Nlc3Mtc3RhdGUsXG5cdFx0LmVycm9yLXN0YXRlIHtcblx0XHRcdC5zdWNjZXNzLWljb24sXG5cdFx0XHQuZXJyb3ItaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0aDIge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxMnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAzMnB4IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnN1Y2Nlc3Mtc3RhdGUge1xuXHRcdFx0LnN1Y2Nlc3MtaWNvbiB7XG5cdFx0XHRcdGNvbG9yOiAjMTBiOTgxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5lcnJvci1zdGF0ZSB7XG5cdFx0XHQuZXJyb3ItaWNvbiB7XG5cdFx0XHRcdGNvbG9yOiAjZWY0NDQ0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jYXJkLXByZXZpZXcsXG5cdFx0LnNlY3VyaXR5LWluZm8ge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0cGFkZGluZzogMjRweDtcblx0XHRcdG1hcmdpbjogMjRweCAwO1xuXG5cdFx0XHQucHJldmlldy1oZWFkZXIsXG5cdFx0XHQuc2VjdXJpdHktaGVhZGVyIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5wcmV2aWV3LWNvbnRlbnQsXG5cdFx0XHQuc2VjdXJpdHktY29udGVudCB7XG5cdFx0XHRcdC5kZXRhaWwtcm93IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXG5cdFx0XHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmxhYmVsIHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQudmFsdWUge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wcm9vZi12YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDRweCA4cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzQ5NTA1Nztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucXItZGlzcGxheSB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0XHRcdFx0LnFyLWltYWdlIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTIwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LnNlY3VyaXR5LWluZm8ge1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcblx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblxuXHRcdFx0LnNlY3VyaXR5LWhlYWRlciBoMyB7XG5cdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5hY3Rpb25zIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdG1hcmdpbi10b3A6IDMycHg7XG5cblx0XHRcdC5idG4tcHJpbWFyeSxcblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNjZWQ0ZGE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQucGF5bWVudC1jYXJkLXJlc3VsdCB7XG5cdFx0cGFkZGluZzogMTZweDtcblxuXHRcdC5yZXN1bHQtY29udGFpbmVyIHtcblx0XHRcdC5hY3Rpb25zIHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiAxMnB4O1xuXG5cdFx0XHRcdC5idG4tcHJpbWFyeSxcblx0XHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXltZW50LWNhcmRzL3BheW1lbnQtY2FyZC1yZXN1bHQvcGF5bWVudC1jYXJkLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRDtBQUNDO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUdHOzs7O0VBRUMsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRzs7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVHOztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUlHO0VBQ0MsY0FBQTtBQUZKO0FBT0c7RUFDQyxjQUFBO0FBTEo7QUFTRTs7RUFFQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVBIO0FBU0c7Ozs7RUFFQyxtQkFBQTtBQUxKO0FBT0k7Ozs7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUZMO0FBUUk7Ozs7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUhMO0FBS0s7Ozs7RUFDQyxtQkFBQTtBQUFOO0FBR0s7Ozs7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUFFTjtBQUNLOzs7O0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FBSU47QUFESzs7OztFQUNDLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFNTjtBQUZJOzs7O0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPTDtBQUxLOzs7O0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVU47QUFKRTtFQUNDLDZEQUFBO0VBQ0EscUJBQUE7QUFNSDtBQUpHO0VBQ0MsY0FBQTtBQU1KO0FBRkU7RUFDQyxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJSDtBQUZHOztFQUVDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSUo7QUFERztFQUNDLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBR0o7QUFESTtFQUNDLDJCQUFBO0VBQ0EsK0NBQUE7QUFHTDtBQUNHO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQUNMOztBQU9BO0VBQ0M7SUFDQyxhQUFBO0VBSkE7RUFPQztJQUNDLHNCQUFBO0lBQ0EsU0FBQTtFQUxGO0VBT0U7O0lBRUMsV0FBQTtFQUxIO0FBQ0Y7QUFDQSx3cU5BQXdxTiIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNhcmQtcmVzdWx0IHtcblx0cGFkZGluZzogMjRweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHQucmVzdWx0LWNvbnRhaW5lciB7XG5cdFx0bWF4LXdpZHRoOiA1MDBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHQuc3VjY2Vzcy1zdGF0ZSxcblx0XHQuZXJyb3Itc3RhdGUge1xuXHRcdFx0LnN1Y2Nlc3MtaWNvbixcblx0XHRcdC5lcnJvci1pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiA2NHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDMycHggMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuc3VjY2Vzcy1zdGF0ZSB7XG5cdFx0XHQuc3VjY2Vzcy1pY29uIHtcblx0XHRcdFx0Y29sb3I6ICMxMGI5ODE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmVycm9yLXN0YXRlIHtcblx0XHRcdC5lcnJvci1pY29uIHtcblx0XHRcdFx0Y29sb3I6ICNlZjQ0NDQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmNhcmQtcHJldmlldyxcblx0XHQuc2VjdXJpdHktaW5mbyB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRwYWRkaW5nOiAyNHB4O1xuXHRcdFx0bWFyZ2luOiAyNHB4IDA7XG5cblx0XHRcdC5wcmV2aWV3LWhlYWRlcixcblx0XHRcdC5zZWN1cml0eS1oZWFkZXIge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnByZXZpZXctY29udGVudCxcblx0XHRcdC5zZWN1cml0eS1jb250ZW50IHtcblx0XHRcdFx0LmRldGFpbC1yb3cge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0cGFkZGluZzogOHB4IDA7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG5cblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQubGFiZWwge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC52YWx1ZSB7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnByb29mLXZhbHVlIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogNHB4IDhweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5xci1kaXNwbGF5IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHRcdFx0XHQucXItaW1hZ2Uge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuc2VjdXJpdHktaW5mbyB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXG5cdFx0XHQuc2VjdXJpdHktaGVhZGVyIGgzIHtcblx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmFjdGlvbnMge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGdhcDogMTZweDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblxuXHRcdFx0LmJ0bi1wcmltYXJ5LFxuXHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdH1cblxuXHRcdFx0LmJ0bi1wcmltYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRjb2xvcjogIzY2NjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5wYXltZW50LWNhcmQtcmVzdWx0IHtcblx0XHRwYWRkaW5nOiAxNnB4O1xuXG5cdFx0LnJlc3VsdC1jb250YWluZXIge1xuXHRcdFx0LmFjdGlvbnMge1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRnYXA6IDEycHg7XG5cblx0XHRcdFx0LmJ0bi1wcmltYXJ5LFxuXHRcdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-payment-cards_payment-card-result_payment-card-result_component_ts.js.map