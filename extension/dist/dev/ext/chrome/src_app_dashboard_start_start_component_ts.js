"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_start_start_component_ts"],{

/***/ 40511:
/*!****************************************************!*\
  !*** ./src/app/dashboard/start/start.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartComponent: () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chrome.service */ 85043);





class StartComponent {
  chromeService;
  constructor(chromeService) {
    this.chromeService = chromeService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better user experience
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/start");
      }
    })();
  }
  static ɵfac = function StartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: StartComponent,
    selectors: [["app-start"]],
    decls: 30,
    vars: 0,
    consts: [[1, "start-content"], [1, "feature-cards"], [1, "feature-card"], [1, "card-icon"], ["src", "https://coc4565z3se2zig23nb5cw2iqezspz7elqp54ulm4d4gyouaw3ua.arweave.net/E4XO-7nciayg2ttD0VtIgTMn5-RcH95RbOD4bDqAtug", "alt", "Install extension icon", 1, "install-icon-image"], [1, "card-content"], [1, "card-title"], [1, "card-description"], ["src", "https://ol5gcxxhqdkl3lifeeceziqopyrrggmvg7mzmaske2ejehmr7khq.arweave.net/cvphXueA1L2tBSEETKIOfiMTGZU32ZYCSiaIkh2R-o8", "alt", "Secure passwords icon", 1, "secure-icon-image"], ["src", "https://lugquumeihocfsxbl6i3whtgqbqbrpt5cp2drzbdxlsalmgf276q.arweave.net/XQ0KUYRB3CLK4V-Rux5mgGAYvn0T9DjkI7rkBbDF1_0", "alt", "Auto-complete icon", 1, "autocomplete-icon-image"], [1, "cta-section"], [1, "cta-button"], [1, "button-text"]],
    template: function StartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Install our extension");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Get our extension in your prefer browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Secure your passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Add your pass or everything that you need");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5)(22, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Auto-complete your info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Add your pass or everything that you need");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "button", 11)(28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Secure my first password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule],
    styles: [".start-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 100%;\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 16px;\n  padding: 32px;\n  text-align: center;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 16px 0;\n}\n.start-content[_ngcontent-%COMP%]   .feature-cards[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  line-height: 1.5;\n  margin: 0;\n}\n.start-content[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.start-content[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);\n}\n.start-content[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);\n}\n.start-content[_ngcontent-%COMP%]   .cta-section[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQ0M7QUFBSjtBQUdHO0VBQ0MsMkJBQUE7RUFDQSwwQ0FBQTtBQURKO0FBSUc7RUFDQyxtQkFBQTtBQUZKO0FBSUk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRkw7QUFPSTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxMO0FBUUk7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQU5MO0FBWUM7RUFDQyxrQkFBQTtBQVZGO0FBWUU7RUFDQyw2REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FDQztFQUVELCtDQUFBO0FBWkg7QUFjRztFQUNDLDJCQUFBO0VBQ0EsK0NBQUE7QUFaSjtBQWVHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBYkoiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtY29udGVudCB7XG5cdHBhZGRpbmc6IDI0cHg7XG5cdGhlaWdodDogMTAwJTtcblxuXHQuZmVhdHVyZS1jYXJkcyB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0XHRnYXA6IDI0cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblxuXHRcdC5mZWF0dXJlLWNhcmQge1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRcdHBhZGRpbmc6IDMycHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHRcdHRyYW5zaXRpb246XG5cdFx0XHRcdHRyYW5zZm9ybSAwLjJzLFxuXHRcdFx0XHRib3gtc2hhZG93IDAuMnM7XG5cblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0XHRcdH1cblxuXHRcdFx0LmNhcmQtaWNvbiB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogODBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDgwcHg7XG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuY2FyZC1jb250ZW50IHtcblx0XHRcdFx0LmNhcmQtdGl0bGUge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJkLWRlc2NyaXB0aW9uIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQuY3RhLXNlY3Rpb24ge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRcdC5jdGEtYnV0dG9uIHtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRwYWRkaW5nOiAxNnB4IDMycHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHRyYW5zaXRpb246XG5cdFx0XHRcdHRyYW5zZm9ybSAwLjJzLFxuXHRcdFx0XHRib3gtc2hhZG93IDAuMnM7XG5cdFx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHR9XG5cblx0XHRcdC5idXR0b24tdGV4dCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQ0M7QUFBSjtBQUdHO0VBQ0MsMkJBQUE7RUFDQSwwQ0FBQTtBQURKO0FBSUc7RUFDQyxtQkFBQTtBQUZKO0FBSUk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRkw7QUFPSTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxMO0FBUUk7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQU5MO0FBWUM7RUFDQyxrQkFBQTtBQVZGO0FBWUU7RUFDQyw2REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FDQztFQUVELCtDQUFBO0FBWkg7QUFjRztFQUNDLDJCQUFBO0VBQ0EsK0NBQUE7QUFaSjtBQWVHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBYko7QUFDQSxvd0dBQW93RyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1jb250ZW50IHtcblx0cGFkZGluZzogMjRweDtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdC5mZWF0dXJlLWNhcmRzIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRcdGdhcDogMjRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG5cdFx0LmZlYXR1cmUtY2FyZCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0cGFkZGluZzogMzJweDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdFx0dHJhbnNpdGlvbjpcblx0XHRcdFx0dHJhbnNmb3JtIDAuMnMsXG5cdFx0XHRcdGJveC1zaGFkb3cgMC4ycztcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRcdFx0fVxuXG5cdFx0XHQuY2FyZC1pY29uIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiA4MHB4O1xuXHRcdFx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5jYXJkLWNvbnRlbnQge1xuXHRcdFx0XHQuY2FyZC10aXRsZSB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMTZweCAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmNhcmQtZGVzY3JpcHRpb24ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5jdGEtc2VjdGlvbiB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0LmN0YS1idXR0b24ge1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0dHJhbnNpdGlvbjpcblx0XHRcdFx0dHJhbnNmb3JtIDAuMnMsXG5cdFx0XHRcdGJveC1zaGFkb3cgMC4ycztcblx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdH1cblxuXHRcdFx0LmJ1dHRvbi10ZXh0IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_start_start_component_ts.js.map