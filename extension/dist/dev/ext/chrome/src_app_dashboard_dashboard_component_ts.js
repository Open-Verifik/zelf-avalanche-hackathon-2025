"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_dashboard_component_ts"],{

/***/ 2320:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wallet.service */ 69556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chrome.service */ 85043);









function DashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
function DashboardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
function DashboardComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
function DashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
function DashboardComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
function DashboardComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 13);
  }
}
class DashboardComponent {
  walletService;
  router;
  route;
  chromeService;
  wallet = {};
  loaded = false;
  activeTab = "start";
  constructor(walletService, router, route, chromeService) {
    this.walletService = walletService;
    this.router = router;
    this.route = route;
    this.chromeService = chromeService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._initWallet();
      _this._initNavigation();
    })();
  }
  _initWallet() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        wallet
      } = yield _this2.walletService.getAllWalletsFromStorage();
      _this2.wallet = wallet || {};
      _this2.loaded = true;
    })();
  }
  _initNavigation() {
    // Get the current route to set active tab
    this.route.url.subscribe(segments => {
      if (segments.length > 0) {
        this.activeTab = segments[0].path;
      } else {
        this.activeTab = "start";
      }
    });
  }
  navigateToTab(tab) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.activeTab = tab;
      // Ensure extension opens in full screen for better user experience
      // This is especially important for the passwords tab and other sensitive data
      if (_this3.chromeService.isExtension) {
        // Check if we're currently in a popup or side panel
        if (_this3.chromeService.isPopout || _this3.chromeService.isSidePanel) {
          // Open the specific tab in full page mode
          yield _this3.chromeService.openFullPage(`dashboard/${tab}`);
          return;
        } else {
          // Ensure we're in full screen mode for the current tab
          yield _this3.chromeService.ensureFullScreen(`dashboard/${tab}`);
          return;
        }
      }
      // If not in extension mode, navigate normally
      if (tab === "start") {
        _this3.router.navigate(["/dashboard"]);
      } else {
        _this3.router.navigate(["/dashboard", tab]);
      }
    })();
  }
  navigateToWallet() {
    this.router.navigate(["/home"]);
  }
  get zelfName() {
    return this.wallet?.name ? this.wallet.name.toUpperCase() : "USER.ZELF";
  }
  static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_1__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_2__.ChromeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 36,
    vars: 19,
    consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "user-info"], [1, "username"], ["title", "Go to Wallet", 1, "wallet-button", 3, "click"], [1, "wallet-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M21 18V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V5C3 4.45 3.45 4 4 4H20C20.55 4 21 4.45 21 5V6H12C11.45 6 11 6.45 11 7V17C11 17.55 11.45 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z", "fill", "currentColor"], [1, "dashboard-nav"], [1, "nav-item", 3, "click"], [1, "nav-text"], ["class", "active-indicator", 4, "ngIf"], [1, "dashboard-content"], [1, "active-indicator"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_5_listener() {
          return ctx.navigateToWallet();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nav", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_10_listener() {
          return ctx.navigateToTab("start");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_14_listener() {
          return ctx.navigateToTab("passwords");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DashboardComponent_div_17_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_18_listener() {
          return ctx.navigateToTab("notes");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardComponent_div_21_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_22_listener() {
          return ctx.navigateToTab("addresses");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DashboardComponent_div_25_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_26_listener() {
          return ctx.navigateToTab("payment-cards");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Payment Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DashboardComponent_div_29_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_30_listener() {
          return ctx.navigateToTab("bank-accounts");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Bank Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, DashboardComponent_div_33_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "main", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.zelfName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "payment-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "payment-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "bank-accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "bank-accounts");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
    styles: [".dashboard-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f8f9fa;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .wallet-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .wallet-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .wallet-button[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .wallet-button[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0 24px;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-weight: 600;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .active-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #1976d2;\n  border-radius: 3px 3px 0 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #666;\n  transition: color 0.2s;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #ff4757;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 12px;\n  min-width: 20px;\n  text-align: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .dashboard-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  background: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQ0M7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNIO0FBQ0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRztFQUNDLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0FBQUo7QUFFSTtFQUNDLDJCQUFBO0VBQ0EsK0NBQUE7QUFBTDtBQUdJO0VBQ0Msd0JBQUE7QUFETDtBQUlJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGTDtBQVFDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTkY7QUFRRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFOSDtBQVFHO0VBQ0MsbUJBQUE7QUFOSjtBQVNHO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBUEo7QUFTSTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQVBMO0FBVUk7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBUkw7QUFZRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVZKO0FBYUc7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWEo7QUFnQkM7RUFDQyxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZEYiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXG5cdC5kYXNoYm9hcmQtaGVhZGVyIHtcblx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiAyMHB4IDI0cHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0Ym94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdC51c2VyLWluZm8ge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblx0XHRcdC51c2VybmFtZSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHR9XG5cblx0XHRcdC53YWxsZXQtYnV0dG9uIHtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdHdpZHRoOiA0OHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQ4cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC53YWxsZXQtaWNvbiB7XG5cdFx0XHRcdFx0d2lkdGg6IDI0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuZGFzaGJvYXJkLW5hdiB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0cGFkZGluZzogMCAyNHB4O1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Z2FwOiA4cHg7XG5cdFx0b3ZlcmZsb3cteDogYXV0bztcblxuXHRcdC5uYXYtaXRlbSB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycztcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGdhcDogOHB4O1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdH1cblxuXHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTNmMmZkO1xuXHRcdFx0XHRjb2xvcjogIzE5NzZkMjtcblxuXHRcdFx0XHQubmF2LXRleHQge1xuXHRcdFx0XHRcdGNvbG9yOiAjMTk3NmQyO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYWN0aXZlLWluZGljYXRvciB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdGhlaWdodDogM3B4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMxOTc2ZDI7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm5hdi10ZXh0IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0dHJhbnNpdGlvbjogY29sb3IgMC4ycztcblx0XHRcdH1cblxuXHRcdFx0LmJhZGdlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmNDc1Nztcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdHBhZGRpbmc6IDRweCA4cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdG1pbi13aWR0aDogMjBweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5kYXNoYm9hcmQtY29udGVudCB7XG5cdFx0ZmxleDogMTtcblx0XHRvdmVyZmxvdzogYXV0bztcblx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNEO0FBQ0M7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNIO0FBQ0c7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRztFQUNDLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0FBQUo7QUFFSTtFQUNDLDJCQUFBO0VBQ0EsK0NBQUE7QUFBTDtBQUdJO0VBQ0Msd0JBQUE7QUFETDtBQUlJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGTDtBQVFDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBTkY7QUFRRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFOSDtBQVFHO0VBQ0MsbUJBQUE7QUFOSjtBQVNHO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBUEo7QUFTSTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtBQVBMO0FBVUk7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBUkw7QUFZRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVZKO0FBYUc7RUFDQyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWEo7QUFnQkM7RUFDQyxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZEY7QUFDQSxnOEpBQWc4SiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblxuXHQuZGFzaGJvYXJkLWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0cGFkZGluZzogMjBweCAyNHB4O1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cblx0XHQudXNlci1pbmZvIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdFx0XHQudXNlcm5hbWUge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0fVxuXG5cdFx0XHQud2FsbGV0LWJ1dHRvbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR3aWR0aDogNDhweDtcblx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQud2FsbGV0LWljb24ge1xuXHRcdFx0XHRcdHdpZHRoOiAyNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMjRweDtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmRhc2hib2FyZC1uYXYge1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDAgMjRweDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGdhcDogOHB4O1xuXHRcdG92ZXJmbG93LXg6IGF1dG87XG5cblx0XHQubmF2LWl0ZW0ge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZzogMTZweCAyMHB4O1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRnYXA6IDhweDtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0XHR9XG5cblx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2UzZjJmZDtcblx0XHRcdFx0Y29sb3I6ICMxOTc2ZDI7XG5cblx0XHRcdFx0Lm5hdi10ZXh0IHtcblx0XHRcdFx0XHRjb2xvcjogIzE5NzZkMjtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFjdGl2ZS1pbmRpY2F0b3Ige1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRoZWlnaHQ6IDNweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMTk3NmQyO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5uYXYtdGV4dCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG5cdFx0XHR9XG5cblx0XHRcdC5iYWRnZSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZjQ3NTc7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRwYWRkaW5nOiA0cHggOHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRtaW4td2lkdGg6IDIwcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuZGFzaGJvYXJkLWNvbnRlbnQge1xuXHRcdGZsZXg6IDE7XG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_component_ts.js.map