"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-passwords_zelf-keys-passwords_component_ts"],{

/***/ 587:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-passwords/zelf-keys-passwords.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfKeysPasswordsComponent: () => (/* binding */ ZelfKeysPasswordsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 12596);





class ZelfKeysPasswordsComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  onAddPassword() {
    this.router.navigate(["/dashboard/passwords/new"]);
  }
  static ɵfac = function ZelfKeysPasswordsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfKeysPasswordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ZelfKeysPasswordsComponent,
    selectors: [["app-zelf-keys-passwords"]],
    decls: 16,
    vars: 0,
    consts: [[1, "zelf-keys-passwords"], [1, "header"], [1, "content"], [1, "empty-state"], [1, "icon"], [1, "btn-primary", 3, "click"]],
    template: function ZelfKeysPasswordsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Passwords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manage your secure passwords and credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uD83D\uDD10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No passwords yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start adding your passwords to keep them secure and easily accessible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZelfKeysPasswordsComponent_Template_button_click_14_listener() {
          return ctx.onAddPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    styles: [".zelf-keys-passwords[_ngcontent-%COMP%] {\n  padding: 24px;\n  height: 100%;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 24px;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 16px 0;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 32px 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.zelf-keys-passwords[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1wYXNzd29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQUNEO0FBQ0M7RUFDQyxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSDtBQUVFO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUg7QUFLRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QUFISDtBQUtHO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0c7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFRRztFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBTko7QUFRSTtFQUNDLG1CQUFBO0FBTkwiLCJmaWxlIjoiemVsZi1rZXlzLXBhc3N3b3Jkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56ZWxmLWtleXMtcGFzc3dvcmRzIHtcblx0cGFkZGluZzogMjRweDtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdC5oZWFkZXIge1xuXHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHQuZW1wdHktc3RhdGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0XHQuaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNjRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxNnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAzMnB4IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICMwMDdiZmY7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDA1NmIzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1wYXNzd29yZHMvemVsZi1rZXlzLXBhc3N3b3Jkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFDQztFQUNDLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNIO0FBRUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBSDtBQUtFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQUhIO0FBS0c7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1HO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSko7QUFPRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQVFHO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFOSjtBQVFJO0VBQ0MsbUJBQUE7QUFOTDtBQUNBLHcyRUFBdzJFIiwic291cmNlc0NvbnRlbnQiOlsiLnplbGYta2V5cy1wYXNzd29yZHMge1xuXHRwYWRkaW5nOiAyNHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0LmhlYWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0LmNvbnRlbnQge1xuXHRcdC5lbXB0eS1zdGF0ZSB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nOiA2MHB4IDIwcHg7XG5cblx0XHRcdC5pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiA2NHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDE2cHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDMycHggMDtcblx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdH1cblxuXHRcdFx0LmJ0bi1wcmltYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogIzAwN2JmZjtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMwMDU2YjM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-passwords_zelf-keys-passwords_component_ts.js.map