"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["default-src_app_zelf-history_zelf-history_component_ts"],{

/***/ 29011:
/*!********************************************!*\
  !*** ./src/app/pipes/address-mask.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressMaskPipe: () => (/* binding */ AddressMaskPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class AddressMaskPipe {
  transform(value) {
    if (typeof value !== "string" || !value || !value.trim()) return "";
    const firstPart = value.slice(0, 8);
    const lastPart = value.slice(-8);
    return `${firstPart}...${lastPart}`;
  }
  static ɵfac = function AddressMaskPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddressMaskPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "addressMask",
    type: AddressMaskPipe,
    pure: true
  });
}

/***/ }),

/***/ 69102:
/*!********************************************************!*\
  !*** ./src/app/zelf-history/zelf-history.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfHistoryComponent: () => (/* binding */ ZelfHistoryComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 45901);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var app_pipes_address_mask_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pipes/address-mask.pipe */ 29011);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_services_blockchain_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/blockchain-transactions.service */ 56122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/wallet.service */ 69556);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 66027);













function ZelfHistoryComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("activity.no_history_found"));
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 25);
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", transaction_r4.to.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", transaction_r4.to.symbol);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 25);
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", transaction_r4.from.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", transaction_r4.from.symbol);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 25);
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", transaction_r4.to.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", transaction_r4.to.symbol);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 27)(2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", transaction_r4.from.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", transaction_r4.from.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", transaction_r4.to.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", transaction_r4.to.symbol);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    const incomingIcon_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", incomingIcon_r6);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    const outgoingIcon_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", outgoingIcon_r7);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    const swapIcon_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", swapIcon_r8);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_13_ng_container_1_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    const checkIcon_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", checkIcon_r9);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](transaction_r4.from.token);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](transaction_r4.to.token);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "addressMask");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, transaction_r4.from.address));
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "addressMask");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, transaction_r4.to.address));
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "addressMask");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, transaction_r4.to.address));
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_ng_container_1_Template, 3, 3, "ng-container", 5)(2, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_ng_container_2_Template, 3, 3, "ng-container", 5)(3, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_ng_container_3_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "swap");
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 3, transaction_r4.from.amount, "1.1-18"), " ", transaction_r4.from.symbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind4"](6, 6, transaction_r4.fiatAmount, "USD", "symbol", "1.2-2"), " ");
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 3, transaction_r4.to.amount, "1.1-18"), " ", transaction_r4.to.symbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind4"](6, 6, transaction_r4.fiatAmount, "USD", "symbol", "1.2-2"), " ");
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, transaction_r4.to.amount, "1.1-18"), " ", transaction_r4.to.symbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 7, transaction_r4.from.amount, "1.1-18"), " ", transaction_r4.from.symbol, "");
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1(""));
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_Template_div_click_1_listener() {
      const transaction_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateToTransaction(transaction_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_img_3_Template, 1, 2, "img", 17)(4, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_img_4_Template, 1, 2, "img", 17)(5, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_img_5_Template, 1, 2, "img", 17)(6, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_div_6_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 19)(8, "div", 20)(9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_10_Template, 2, 1, "ng-container", 5)(11, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_11_Template, 2, 1, "ng-container", 5)(12, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_12_Template, 2, 1, "ng-container", 5)(13, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_13_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_16_Template, 2, 1, "p", 23)(17, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_17_Template, 2, 1, "p", 23)(18, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_p_18_Template, 4, 3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_20_Template, 7, 11, "ng-container", 5)(21, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_21_Template, 7, 11, "ng-container", 5)(22, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_22_Template, 7, 10, "ng-container", 5)(23, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_ng_container_23_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRippleColor", "rgba(0, 0, 0, 0.1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "receive" || transaction_r4.type === "approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "swap" && !transaction_r4.from.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "swap" && transaction_r4.from.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "zelf-history__icon--" + transaction_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](t_r1("activity." + transaction_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type !== "approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "receive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "swap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", transaction_r4.type === "approve");
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_ng_container_4_Template, 24, 18, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, data_r10.date, "dd MMM, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", data_r10.transactions);
  }
}
function ZelfHistoryComponent_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_ng_container_2_ng_container_1_Template, 5, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ZelfHistoryComponent_div_0_ng_container_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.loadMoreTransactions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.orderedHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r4.loading || ctx_r4.noMoreTransactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", t_r1("common.load_more"), " ");
  }
}
function ZelfHistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ZelfHistoryComponent_div_0_div_1_Template, 5, 1, "div", 7)(2, ZelfHistoryComponent_div_0_ng_container_2_Template, 4, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.history && !ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.history);
  }
}
function ZelfHistoryComponent_zelf_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "zelf-loader");
  }
}
function ZelfHistoryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ZelfHistoryComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ZelfHistoryComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ZelfHistoryComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ZelfHistoryComponent {
  _blockchainTransactions;
  _router;
  _walletService;
  token = "";
  currentPage = 0;
  history = null;
  loading = false;
  noMoreTransactions = false;
  transactionHashMap = {};
  constructor(_blockchainTransactions, _router, _walletService) {
    this._blockchainTransactions = _blockchainTransactions;
    this._router = _router;
    this._walletService = _walletService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._loadFirstTransactions();
    })();
  }
  get orderedHistory() {
    if (!this.history) return [];
    return Object.entries(this.history).map(([date, transactions]) => ({
      date,
      transactions
    })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  _loadFirstTransactions() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      const wallet = yield _this2._walletService.getCurrentWallet();
      (_this2.token ? _this2._blockchainTransactions.getAddressDataByToken(wallet, _this2.token) : _this2._blockchainTransactions.getAddressData(wallet)).subscribe({
        next: function () {
          var _ref = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            if (!response) {
              _this2.currentPage = 0;
              _this2.loading = false;
              _this2.noMoreTransactions = true;
              return;
            }
            yield _this2._processTransactions(response.transactions);
            _this2.loading = false;
          });
          return function next(_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        error: error => {
          console.error("Error loading transactions:", error);
        }
      });
    })();
  }
  _processTransactions(_x2) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (transactions, isPagination = false) {
      if (!transactions || !transactions.length) return;
      transactions.sort((a, b) => new Date(typeof b.date === "string" ? b.date : b.date * 1000).getTime() - new Date(typeof a.date === "string" ? a.date : a.date * 1000).getTime());
      const groupedByDate = isPagination ? {
        ..._this3.history
      } : {};
      const wallet = yield _this3._walletService.getCurrentWallet();
      transactions.forEach(tx => {
        if (_this3.transactionHashMap[tx.hash] || !wallet) return;
        if (!tx.from || !tx.to || !tx.date) return;
        if (_this3.token && tx.asset !== _this3.token) return;
        const dateStr = new Date(tx.date).toLocaleDateString("en-US");
        if (!groupedByDate[dateStr]) groupedByDate[dateStr] = [];
        const type = tx.method?.toLowerCase().includes("swap") ? "swap" : tx.traffic === "OUT" ? "send" : "receive";
        const tokenImage = tx.image || _this3._walletService.getAssetImage(tx.asset);
        const processedTx = {
          fiatAmount: tx.fiatAmount,
          hash: tx.hash,
          network: tx.network,
          type,
          from: {
            address: Array.isArray(tx.from) ? tx.from[0] : tx.from,
            amount: tx.amount,
            symbol: tx.asset,
            image: tokenImage,
            token: tx.asset
          },
          to: {
            address: Array.isArray(tx.to) ? tx.to[0] : tx.to,
            amount: tx.amount,
            symbol: tx.asset,
            image: tokenImage,
            token: tx.asset
          }
        };
        groupedByDate[dateStr].push(processedTx);
        _this3.transactionHashMap[tx.hash] = true;
      });
      _this3.history = groupedByDate;
    }).apply(this, arguments);
  }
  loadMoreTransactions() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loading = true;
      _this4.currentPage += 1;
      const wallet = yield _this4._walletService.getCurrentWallet();
      _this4._blockchainTransactions.getTransactionHistory(wallet, {
        page: _this4.currentPage
      }).subscribe({
        next: function () {
          var _ref2 = (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            if (!response) {
              _this4.noMoreTransactions = true;
              _this4.currentPage = 0;
              _this4.loading = false;
              return;
            }
            yield _this4._processTransactions(response, true);
            _this4.loading = false;
          });
          return function next(_x3) {
            return _ref2.apply(this, arguments);
          };
        }(),
        error: error => {
          console.error("Error loading transactions:", error);
        }
      });
    })();
  }
  navigateToTransaction(transaction) {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5._router.navigate(["/transaction", transaction.hash], {
        queryParams: {
          symbol: transaction.from.symbol,
          network: transaction.network
        }
      });
    })();
  }
  static ɵfac = function ZelfHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_services_blockchain_transactions_service__WEBPACK_IMPORTED_MODULE_3__.BlockchainTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_4__.WalletService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ZelfHistoryComponent,
    selectors: [["zelf-history"]],
    inputs: {
      token: "token"
    },
    decls: 10,
    vars: 1,
    consts: [["incomingIcon", ""], ["outgoingIcon", ""], ["checkIcon", ""], ["swapIcon", ""], ["class", "zelf-history", 4, "transloco"], [4, "ngIf"], [1, "zelf-history"], ["class", "zelf-history__no-results", 4, "ngIf"], [1, "zelf-history__no-results"], ["xmlns", "http://www.w3.org/2000/svg", "height", "150px", "viewBox", "0 -960 960 960", "width", "150px", "fill", "#e3e3e3"], ["d", "M675-160H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18h-60.36L557-367q-21 18-45 26t-51 8q-70 0-120.5-49T290-502.5q0-71.5 50.5-120T461-671q70 0 118.5 48.5T628-502q0 25.2-7.5 47.6Q613-432 599-410l186 190h35v-520H140v520h475l60 60ZM461-393q46 0 76.5-31t30.5-78.5q0-47.5-30.5-78T461-611q-46 0-78.5 30.5t-32.5 78q0 47.5 32.5 78.5t78.5 31ZM140-220v-520 520Z"], [1, "zelf-history__no-results-text"], [4, "ngFor", "ngForOf"], [1, "zelf-button", "zelf-button--wide", "zelf-button--black", "zelf-history__load-more", 3, "click", "disabled"], [1, "zelf-history__date"], ["matRipple", "", 1, "zelf-history__transaction", 3, "click", "matRippleColor"], [1, "zelf-history__left"], ["class", "zelf-history__image", 3, "src", "alt", 4, "ngIf"], ["class", "zelf-history__swap-images", 4, "ngIf"], [1, "zelf-history__col"], [1, "zelf-history__icon-container"], [1, "zelf-history__icon", 3, "ngClass"], [1, "zelf-history__type"], ["class", "zelf-history__type-subtitle", 4, "ngIf"], [1, "zelf-history__right"], [1, "zelf-history__image", 3, "src", "alt"], [1, "zelf-history__swap-images"], [1, "zelf-history__swap-image-a", 3, "src", "alt"], [1, "zelf-history__swap-image-b", 3, "src", "alt"], [4, "ngTemplateOutlet"], [1, "zelf-history__type-subtitle"], [1, "zelf-history__received"], [1, "zelf-history__received-fiat"], [1, "zelf-history__send"], [1, "zelf-history__send-fiat"], [1, "zelf-history__approve-text"], ["width", "8", "height", "8", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.0075 1.00148C14.6175 0.611484 13.9875 0.611484 13.5975 1.00148L2.70752 11.8815V6.29148C2.70752 5.74148 2.25752 5.29148 1.70752 5.29148C1.15752 5.29148 0.70752 5.74148 0.70752 6.29148V14.2915C0.70752 14.8415 1.15752 15.2915 1.70752 15.2915H9.70752C10.2575 15.2915 10.7075 14.8415 10.7075 14.2915C10.7075 13.7415 10.2575 13.2915 9.70752 13.2915H4.11752L15.0075 2.40148C15.3875 2.02148 15.3875 1.38148 15.0075 1.00148Z"], ["d", "M5.29636 1.70361C5.29636 2.26361 5.74636 2.70361 6.29636 2.70361H11.8864L0.996357 13.5936C0.606357 13.9836 0.606357 14.6136 0.996357 15.0036C1.38636 15.3936 2.01636 15.3936 2.40636 15.0036L13.2964 4.11361V9.70361C13.2964 10.2536 13.7464 10.7036 14.2964 10.7036C14.8464 10.7036 15.2964 10.2536 15.2964 9.70361V1.70361C15.2964 1.15361 14.8464 0.703613 14.2964 0.703613H6.29636C5.74636 0.703613 5.29636 1.15361 5.29636 1.70361Z"], ["width", "8", "height", "6", "viewBox", "0 0 18 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.79506 10.8754L2.32506 7.40539C1.93506 7.01539 1.30506 7.01539 0.915059 7.40539C0.525059 7.79539 0.525059 8.42539 0.915059 8.81539L5.09506 12.9954C5.48506 13.3854 6.11506 13.3854 6.50506 12.9954L17.0851 2.41539C17.4751 2.02539 17.4751 1.39539 17.0851 1.00539C16.6951 0.615391 16.0651 0.615391 15.6751 1.00539L5.79506 10.8754Z"], ["d", "M3.13563 6.85496L0.355635 9.64496C0.165635 9.84496 0.165635 10.155 0.355635 10.355L3.13563 13.145C3.44563 13.465 3.98563 13.235 3.98563 12.795V10.995H9.99564C10.5456 10.995 10.9956 10.545 10.9956 9.99496C10.9956 9.44496 10.5456 8.99496 9.99564 8.99496H3.98563V7.20496C3.98563 6.75496 3.44563 6.53496 3.13563 6.85496ZM17.6456 3.64496L14.8656 0.854961C14.5556 0.534961 14.0156 0.764961 14.0156 1.20496V2.99496H7.99564C7.44563 2.99496 6.99564 3.44496 6.99564 3.99496C6.99564 4.54496 7.44563 4.99496 7.99564 4.99496H14.0056V6.78496C14.0056 7.23496 14.5456 7.45496 14.8556 7.13496L17.6356 4.34496C17.8356 4.15496 17.8356 3.83496 17.6456 3.64496Z"]],
    template: function ZelfHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ZelfHistoryComponent_div_0_Template, 3, 2, "div", 4)(1, ZelfHistoryComponent_zelf_loader_1_Template, 1, 0, "zelf-loader", 5)(2, ZelfHistoryComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(4, ZelfHistoryComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(6, ZelfHistoryComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(8, ZelfHistoryComponent_ng_template_8_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [app_pipes_address_mask_pipe__WEBPACK_IMPORTED_MODULE_1__.AddressMaskPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.M, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.M, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoDirective, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_2__.ZelfLoaderComponent],
    styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  max-height: 600px;\n  min-height: 600px;\n  overflow-y: auto;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    min-height: 600px;\n    max-height: initial;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.zelf-history-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  z-index: 2;\n}\n\n.zelf-history[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n}\n.zelf-history__load-more[_ngcontent-%COMP%] {\n  margin: 32px 0 0;\n}\n.zelf-history__no-results[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 600px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.zelf-history__no-results-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #73777f;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  margin-bottom: 4px;\n  padding: 16px;\n}\n.zelf-history__date[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  color: #73777f;\n  margin-bottom: 4px;\n  width: 100%;\n  text-align: left;\n  padding: 0 16px;\n}\n.zelf-history__transaction[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  padding: 16px;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  border-radius: 16px;\n  background-color: transparent;\n  transition: background-color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1);\n  cursor: pointer;\n  min-height: 64px;\n}\n.zelf-history__transaction[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1;\n}\n.zelf-history__image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  border-radius: 40px;\n  object-fit: contain;\n}\n.zelf-history__swap-images[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n.zelf-history__swap-image-a[_ngcontent-%COMP%], .zelf-history__swap-image-b[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  min-width: 25px;\n  min-height: 25px;\n  border-radius: 25px;\n  object-fit: contain;\n}\n.zelf-history__swap-image-a[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n}\n.zelf-history__swap-image-b[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n}\n.zelf-history__col[_ngcontent-%COMP%], .zelf-history__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.zelf-history__col[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.zelf-history__left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex: 1 1 auto;\n  gap: 16px;\n}\n.zelf-history__right[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.zelf-history__icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  gap: 8px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.zelf-history__icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  min-width: 14px;\n  min-height: 14px;\n  background-color: #e3e3e3;\n  border-radius: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.zelf-history__icon--swap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .zelf-history__icon--approve[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-history__icon--send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .zelf-history__icon--receive[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446;\n}\n.zelf-history__type[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #181818;\n  margin: 0;\n}\n.zelf-history__type-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  color: #73777f;\n  margin: 0;\n}\n.zelf-history__received[_ngcontent-%COMP%], .zelf-history__send[_ngcontent-%COMP%], .zelf-history__swap[_ngcontent-%COMP%], .zelf-history__approve-text[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  margin: 0;\n}\n.zelf-history__received[_ngcontent-%COMP%], .zelf-history__send[_ngcontent-%COMP%], .zelf-history__swap[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.zelf-history__received[_ngcontent-%COMP%] {\n  color: #1ea446;\n}\n.zelf-history__send[_ngcontent-%COMP%], .zelf-history__swap[_ngcontent-%COMP%], .zelf-history__approve-text[_ngcontent-%COMP%] {\n  color: #181818;\n}\n.zelf-history__send-fiat[_ngcontent-%COMP%], .zelf-history__received-fiat[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  text-align: center;\n  vertical-align: middle;\n  color: #73777f;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFESjtBQUdJO0VBWEo7SUFZUSxpQkFBQTtJQUNBLG1CQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdRO0VBQ0ksaUJBQUE7RUFDQSxjQzlCTDtFRCtCSyx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURaO0FBS0k7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNDakREO0VEa0RDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpRUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpSO0FBTVE7RUFDSSx5QkNsRUs7QUQ4RGpCO0FBUUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBSO0FBVUk7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVRSO0FBWUk7RUFDSSxPQUFBO0VBQ0EsTUFBQTtBQVZSO0FBYUk7RUFDSSxTQUFBO0VBQ0EsUUFBQTtBQVhSO0FBY0k7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBYlI7QUFnQkk7RUFDSSwyQkFBQTtBQWRSO0FBaUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQWZSO0FBa0JJO0VBQ0kscUJBQUE7QUFoQlI7QUFtQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFqQlI7QUFvQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQ2xKRztFRG1KSCxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbEJSO0FBc0JZO0VBQ0ksYUMvSlI7QUQySVI7QUEwQlk7RUFDSSxhQ3RMTjtBRDhKVjtBQTZCSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ25MQTtFRG9MQSxTQUFBO0FBM0JSO0FBOEJJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQzdMRDtFRDhMQyxTQUFBO0FBNUJSO0FBK0JJO0VBSUkseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBaENSO0FBbUNJO0VBR0kseUJBQUE7QUFuQ1I7QUFzQ0k7RUFDSSxjQ3RPRTtBRGtNVjtBQXVDSTtFQUdJLGNDNU5BO0FEcUxSO0FBMENJO0VBRUkseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDdk9EO0VEd09DLFNBQUE7QUF6Q1IiLCJmaWxlIjoiemVsZi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IHZhcmlhYmxlcy4kbWVkaXVtKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnplbGYtaGlzdG9yeS1sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogMjtcbn1cblxuLnplbGYtaGlzdG9yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAmX19sb2FkLW1vcmUge1xuICAgICAgICBtYXJnaW46IDMycHggMCAwO1xuICAgIH1cblxuICAgICZfX25vLXJlc3VsdHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2RhdGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB9XG5cbiAgICAmX190cmFuc2FjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiA2NHB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgICZfX3N3YXAtaW1hZ2VzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgJl9fc3dhcC1pbWFnZS1hLFxuICAgICZfX3N3YXAtaW1hZ2UtYiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgICZfX3N3YXAtaW1hZ2UtYSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG5cbiAgICAmX19zd2FwLWltYWdlLWIge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgICZfX2NvbCxcbiAgICAmX19yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgICZfX2NvbCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAmX19sZWZ0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9fcmlnaHQge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgJl9faWNvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgbWluLXdpZHRoOiAxNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmLS1zd2FwLFxuICAgICAgICAmLS1hcHByb3ZlIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtLXNlbmQsXG4gICAgICAgICYtLXJlY2VpdmUge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX190eXBlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9fdHlwZS1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICZfX3JlY2VpdmVkLFxuICAgICZfX3NlbmQsXG4gICAgJl9fc3dhcCxcbiAgICAmX19hcHByb3ZlLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmX19yZWNlaXZlZCxcbiAgICAmX19zZW5kLFxuICAgICZfX3N3YXAge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgICZfX3JlY2VpdmVkIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdDtcbiAgICB9XG5cbiAgICAmX19zZW5kLFxuICAgICZfX3N3YXAsXG4gICAgJl9fYXBwcm92ZS10ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fc2VuZC1maWF0LFxuICAgICZfX3JlY2VpdmVkLWZpYXQge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvemVsZi1oaXN0b3J5L3plbGYtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQVhKO0lBWVEsaUJBQUE7SUFDQSxtQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHUTtFQUNJLGlCQUFBO0VBQ0EsY0M5Qkw7RUQrQksseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFEWjtBQUtJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ2pERDtFRGtEQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIUjtBQU1JO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU1RO0VBQ0kseUJDbEVLO0FEOERqQjtBQVFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTlI7QUFTSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQUjtBQVVJO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQVlJO0VBQ0ksT0FBQTtFQUNBLE1BQUE7QUFWUjtBQWFJO0VBQ0ksU0FBQTtFQUNBLFFBQUE7QUFYUjtBQWNJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQWJSO0FBZ0JJO0VBQ0ksMkJBQUE7QUFkUjtBQWlCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFmUjtBQWtCSTtFQUNJLHFCQUFBO0FBaEJSO0FBbUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBakJSO0FBb0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNsSkc7RURtSkgsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQXNCWTtFQUNJLGFDL0pSO0FEMklSO0FBMEJZO0VBQ0ksYUN0TE47QUQ4SlY7QUE2Qkk7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0NuTEE7RURvTEEsU0FBQTtBQTNCUjtBQThCSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0M3TEQ7RUQ4TEMsU0FBQTtBQTVCUjtBQStCSTtFQUlJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWhDUjtBQW1DSTtFQUdJLHlCQUFBO0FBbkNSO0FBc0NJO0VBQ0ksY0N0T0U7QURrTVY7QUF1Q0k7RUFHSSxjQzVOQTtBRHFMUjtBQTBDSTtFQUVJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3ZPRDtFRHdPQyxTQUFBO0FBekNSO0FBQ0EsdzJWQUF3MlYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogdmFyaWFibGVzLiRtZWRpdW0pIHtcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XG4gICAgfVxufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uemVsZi1oaXN0b3J5LWxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uemVsZi1oaXN0b3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICZfX2xvYWQtbW9yZSB7XG4gICAgICAgIG1hcmdpbjogMzJweCAwIDA7XG4gICAgfVxuXG4gICAgJl9fbm8tcmVzdWx0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGF0ZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgIH1cblxuICAgICZfX3RyYW5zYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgJl9fc3dhcC1pbWFnZXMge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICB9XG5cbiAgICAmX19zd2FwLWltYWdlLWEsXG4gICAgJl9fc3dhcC1pbWFnZS1iIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgJl9fc3dhcC1pbWFnZS1hIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgICZfX3N3YXAtaW1hZ2UtYiB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9fY29sLFxuICAgICZfX3JpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgfVxuXG4gICAgJl9fY29sIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICZfX2xlZnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAmX19yaWdodCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAmX19pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDE0cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYtLXN3YXAsXG4gICAgICAgICYtLWFwcHJvdmUge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi0tc2VuZCxcbiAgICAgICAgJi0tcmVjZWl2ZSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3R5cGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmX190eXBlLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9fcmVjZWl2ZWQsXG4gICAgJl9fc2VuZCxcbiAgICAmX19zd2FwLFxuICAgICZfX2FwcHJvdmUtdGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICZfX3JlY2VpdmVkLFxuICAgICZfX3NlbmQsXG4gICAgJl9fc3dhcCB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJl9fcmVjZWl2ZWQge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0O1xuICAgIH1cblxuICAgICZfX3NlbmQsXG4gICAgJl9fc3dhcCxcbiAgICAmX19hcHByb3ZlLXRleHQge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19zZW5kLWZpYXQsXG4gICAgJl9fcmVjZWl2ZWQtZmlhdCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuIiwiJHByaW1hcnlDb2xvcjogIzBlMjZmZjtcbiRwcmltYXJ5TGlnaHQ6ICNkYWRkZmE7XG4kc2Vjb25kYXJ5Q29sb3I6ICNmZjU3MjE7XG4kc2Vjb25kYXJ5Q29sb3JMaWdodDogI2Y2ZTVlMDtcblxuJGNvcnJlY3Q6ICMxZWE0NDY7XG4kY29ycmVjdERhcms6ICMwZjUyMjM7XG4kY29ycmVjdExpZ2h0OiAjZTdmOGVkO1xuXG4kZXJyb3I6ICNkYzM2MmU7XG4kZXJyb3JEYXJrOiAjNjAxNDEwO1xuJGVycm9yTGlnaHQ6ICNmY2VlZWU7XG5cbiR3YXJuaW5nOiAjZGU2ODAwO1xuJHdhcm5pbmdEYXJrOiAjNGEyMTBhO1xuJHdhcm5pbmdMaWdodDogI2ZmZWVlOTtcblxuJGluZm86ICMzOTk4ZDM7XG4kaW5mb0Rhcms6ICMwMDRhNzc7XG4kaW5mb0xpZ2h0OiAjZWNmM2ZlO1xuXG4kYmxhY2s6ICMxODE4MTg7XG4kZ3JheTogIzczNzc3ZjtcbiR0YXVwZUdyYXk6ICM5NjkzOWU7XG4kZnJlbmNoR3JheTogI2MzYzZjZjtcbiRwbGF0aW51bTogI2UzZTNlMztcbiRhbnRpRmxhc2hXaGl0ZTogI2VlZWRmMTtcbiRzZWFTYWx0OiAjZjlmOWZjO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4kc21vb3RoQmV6aWVyOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40LCAwLjcsIDEpO1xuXG4kbWF4RXh0cmFTbWFsbDogNTk1cHg7XG4kbWluU21hbGw6IDYwMHB4O1xuJG1lZGl1bTogNzY4cHg7XG4kbGFyZ2U6IDg4OXB4O1xuJGNvbXB1dGVyczogMTIwMHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_zelf-history_zelf-history_component_ts.js.map