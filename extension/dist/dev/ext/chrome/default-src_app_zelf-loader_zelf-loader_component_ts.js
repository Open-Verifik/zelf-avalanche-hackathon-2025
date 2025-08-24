"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["default-src_app_zelf-loader_zelf-loader_component_ts"],{

/***/ 40152:
/*!******************************************************!*\
  !*** ./src/app/zelf-loader/zelf-loader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfLoaderComponent: () => (/* binding */ ZelfLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


const _c0 = (a0, a1) => ({
  height: a0,
  width: a1
});
const _c1 = a0 => ({
  "zelf-loader-container--absolute": a0
});
const _c2 = (a0, a1, a2, a3, a4) => ({
  height: a0,
  width: a1,
  "margin-left": a2,
  "margin-top": a3,
  "transform-origin": a4
});
const _c3 = (a0, a1) => ({
  width: a0,
  height: a1
});
class ZelfLoaderComponent {
  absolute = true;
  diameter = 120;
  get logoDiameter() {
    return Math.max(this.diameter / 3, 24);
  }
  static ɵfac = function ZelfLoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfLoaderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ZelfLoaderComponent,
    selectors: [["zelf-loader"]],
    inputs: {
      absolute: "absolute",
      diameter: "diameter"
    },
    decls: 11,
    vars: 26,
    consts: [[1, "zelf-loader-container", 3, "ngStyle", "ngClass"], [1, "zelf-loader"], [1, "zelf-loader__circle", 3, "ngStyle"], [1, "zelf-loader__line-mask", 3, "ngStyle"], [1, "zelf-loader__line", 3, "ngStyle"], [1, "zelf-loader__logo-container", 3, "ngStyle"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.0108 0C13.363 1.83518 15.0993 3.92724 17.2883 6.08926H7.46094C9.5873 3.83728 11.0426 1.67625 12.0128 0H12.0108Z", "fill", "#181818"], ["d", "M0 12.0282C1.7302 11.1886 4.0031 9.87119 6.28409 7.85609C6.48521 7.67817 6.68228 7.49826 6.87127 7.31934H15.6597C15.6597 7.31934 9.29476 16.3143 5.81213 16.3413C2.93891 16.3643 1.73525 13.0987 0 12.0272V12.0282Z", "fill", "#181818"], ["d", "M12.5714 23.9996C11.5113 22.5603 10.1459 20.917 8.41675 19.2168H16.4977C14.7857 20.942 13.5073 22.6073 12.5725 23.9996H12.5714Z", "fill", "#181818"], ["d", "M17.7785 17.7316C17.6835 17.8155 17.5906 17.9005 17.4986 17.9845H8.06335C8.06335 17.9845 14.5334 8.87256 18.0625 8.85357C21.0075 8.83857 22.2273 12.1821 24 13.2766C22.197 14.2891 20.0029 15.7295 17.7785 17.7316Z", "fill", "#181818"]],
    template: function ZelfLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.diameter + "px", ctx.diameter + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.absolute));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.diameter + "px", ctx.diameter + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](14, _c2, ctx.diameter + "px", ctx.diameter / 2 + "px", "-" + ctx.diameter / 2 + "px", "-" + ctx.diameter / 2 + "px", ctx.diameter / 2 + "px " + ctx.diameter / 2 + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx.diameter + "px", ctx.diameter + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c3, ctx.logoDiameter + "px", ctx.logoDiameter + "px"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: [".zelf-loader-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, transparent 62%);\n  z-index: 100;\n}\n.zelf-loader-container--absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n}\n.zelf-loader-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.zelf-loader[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.zelf-loader__circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1px #f6e5e0;\n  position: absolute;\n}\n.zelf-loader__logo-container[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n}\n.zelf-loader__logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.zelf-loader__line-mask[_ngcontent-%COMP%] {\n  transition: transform 0.3s, opacity 0.3s;\n  animation: _ngcontent-%COMP%_rotate 1.2s infinite linear;\n  left: 50%;\n  mask-image: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n}\n.zelf-loader__line[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 1px #ff5721;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fade {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxRkFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQURSO0FBSUk7RUFDSSxVQUFBO0FBRlI7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBSlI7QUFNUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBSlo7QUFRSTtFQUNJLHdDQUNJO0VBRUosc0NBQUE7RUFDQSxTQUFBO0VBRUEsc0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQVJSO0FBV0k7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO0FBVFI7O0FBYUE7RUFDSTtJQUNJLHVCQUFBO0VBVk47RUFZRTtJQUNJLHlCQUFBO0VBVk47QUFDRjtBQWFBO0VBQ0k7SUFDSSxVQUFBO0VBWE47RUFhRTtJQUNJLGFBQUE7RUFYTjtBQUNGO0FBY0E7RUFDSTtJQUNJLFVBQUE7RUFaTjtFQWNFO0lBQ0ksVUFBQTtFQVpOO0FBQ0YiLCJmaWxlIjoiemVsZi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uemVsZi1sb2FkZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMCwgMCwgMCwgMC4yKSAwJSwgdHJhbnNwYXJlbnQgNjIlKTtcbiAgICB6LWluZGV4OiAxMDA7XG5cbiAgICAmLS1hYnNvbHV0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLnplbGYtbG9hZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJl9fY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvckxpZ2h0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJl9fbG9nby1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGluZS1tYXNrIHtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzLFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxLjJzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgIH1cblxuICAgICZfX2xpbmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvemVsZi1sb2FkZXIvemVsZi1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLHFGQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRFI7QUFJSTtFQUNJLFVBQUE7QUFGUjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBSFI7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFKUjtBQU1RO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFKWjtBQVFJO0VBQ0ksd0NBQ0k7RUFFSixzQ0FBQTtFQUNBLFNBQUE7RUFFQSxzRUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBUlI7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7QUFUUjs7QUFhQTtFQUNJO0lBQ0ksdUJBQUE7RUFWTjtFQVlFO0lBQ0kseUJBQUE7RUFWTjtBQUNGO0FBYUE7RUFDSTtJQUNJLFVBQUE7RUFYTjtFQWFFO0lBQ0ksYUFBQTtFQVhOO0FBQ0Y7QUFjQTtFQUNJO0lBQ0ksVUFBQTtFQVpOO0VBY0U7SUFDSSxVQUFBO0VBWk47QUFDRjtBQUFBLG9rR0FBb2tHIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLnplbGYtbG9hZGVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDAsIDAsIDAsIDAuMikgMCUsIHRyYW5zcGFyZW50IDYyJSk7XG4gICAgei1pbmRleDogMTAwO1xuXG4gICAgJi0tYWJzb2x1dGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi56ZWxmLWxvYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICZfX2NpcmNsZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3JMaWdodDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICZfX2xvZ28tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2xpbmUtbWFzayB7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDEpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICB9XG5cbiAgICAmX19saW5lIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvcjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjI1O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_zelf-loader_zelf-loader_component_ts.js.map