"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_send-transaction_send-transaction_component_ts"],{

/***/ 15132:
/*!****************************************************************!*\
  !*** ./src/app/send-transaction/send-transaction.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SendTransactionComponent: () => (/* binding */ SendTransactionComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 45901);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var app_pipes_address_mask_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pipes/address-mask.pipe */ 29011);
/* harmony import */ var app_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/wallet */ 45965);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_asset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/asset.service */ 25931);
/* harmony import */ var app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/bitcoin.service */ 28808);
/* harmony import */ var app_eth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/eth.service */ 97348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var app_solana_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/solana.service */ 98010);
/* harmony import */ var app_services_sui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/sui.service */ 12009);
/* harmony import */ var app_transaction_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/transaction.service */ 65443);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/wallet.service */ 69556);
/* harmony import */ var app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/zelf-name-service.service */ 56148);
/* harmony import */ var app_vault_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/vault.service */ 19519);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 66027);





























const _c0 = a0 => ({
  symbol: a0
});
const _c1 = a0 => ({
  "zelf-input--error": a0
});
const _c2 = (a0, a1) => ({
  symbol: a0,
  balance: a1
});
const _c3 = a0 => ({
  value: a0
});
const _c4 = () => ({
  value: 0
});
const _c5 = a0 => ({
  days: a0
});
const _c6 = (a0, a1) => ({
  "zelf-chip--error": a0,
  "zelf-chip--info": a1
});
function SendTransactionComponent_div_0_ng_container_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SendTransactionComponent_div_0_ng_container_1_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.pasteAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.searching);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, t_r4("common.paste")), " ");
  }
}
function SendTransactionComponent_div_0_ng_container_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.searching);
  }
}
function SendTransactionComponent_div_0_ng_container_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "path", 36)(3, "path", 37)(4, "path", 38)(5, "path", 39)(6, "path", 40)(7, "path", 41)(8, "path", 42)(9, "path", 43)(10, "path", 44)(11, "path", 45)(12, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.searching);
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.required_field"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.same_address"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.address_too_long"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.invalid_format"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_1_Template, 5, 2, "ng-container", 3)(2, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_2_Template, 5, 2, "ng-container", 3)(3, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_3_Template, 5, 2, "ng-container", 3)(4, SendTransactionComponent_div_0_ng_container_1_div_30_ng_container_4_Template, 5, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.sameAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.invalidFormat);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.required_field"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.invalid_number_value"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_8_0;
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.must_be_less_than", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c3, (tmp_8_0 = ctx_r1.form.get("lessThan")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.greaterThan.value)));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainer"](0);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("errors.must_be_greater_than", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](2, _c4)));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_1_Template, 5, 2, "ng-container", 3)(2, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_2_Template, 5, 2, "ng-container", 3)(3, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_3_Template, 5, 4, "ng-container", 3)(4, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_ng_container_4_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r1.form.get("amount")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.form.get("amount")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.invalidNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.form.get("amount")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.lessThan);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r1.form.get("amount")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors.greaterThan);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SendTransactionComponent_div_0_ng_container_1_ng_container_31_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.withdrawAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, SendTransactionComponent_div_0_ng_container_1_ng_container_31_div_13_Template, 5, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_11_0;
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", t_r4("send.withdrawal_amount"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](14, _c1, ((tmp_6_0 = ctx_r1.form.get("amount")) == null ? null : tmp_6_0.dirty) && ((tmp_6_0 = ctx_r1.form.get("amount")) == null ? null : tmp_6_0.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("placeholder", t_r4("send.enter_amount_to_send"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 7, t_r4("common.all")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("~", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind4"](10, 9, ctx_r1.fiatPrice, "USD", "symbol", "1.2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", t_r4("send.available_balance", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](16, _c2, ctx_r1.transactionData.symbol, ctx_r1.transactionData.balance)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx_r1.form.get("amount")) == null ? null : tmp_11_0.dirty) && ((tmp_11_0 = ctx_r1.form.get("amount")) == null ? null : tmp_11_0.errors));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "addressMask");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, address_r8.address));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](address_r8.zelfName);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "svg", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_Template_div_click_0_listener() {
      const address_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.selectRecentAddress(address_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "svg", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_span_5_Template, 3, 3, "span", 62)(6, SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_span_6_Template, 2, 1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_ng_container_10_Template, 3, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const address_r8 = ctx.$implicit;
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRippleColor", "rgba(0, 0, 0, 0.1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !address_r8.zelfName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", address_r8.zelfName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.used", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c5, ctx_r1.getTimeDiff(address_r8.lastUsed))));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", address_r8.address === ((tmp_11_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_11_0.value));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, SendTransactionComponent_div_0_ng_container_1_ng_container_32_div_2_Template, 11, 7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r1.filteredAddresses);
  }
}
function SendTransactionComponent_div_0_ng_container_1_zelf_loader_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "zelf-loader");
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.address_found"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.external_address_found"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.zelf_name_not_registered"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.zelf_name_registered"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.foundAddress.ethAddress, " ");
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.foundAddress.solanaAddress);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.foundAddress.btcAddress);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r1.foundAddress.suiAddress);
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_5_Template, 2, 1, "p", 75)(6, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_6_Template, 2, 1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_ng_container_8_Template, 2, 1, "ng-container", 3)(9, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_ng_container_9_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "h3", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_12_Template, 2, 1, "p", 78)(13, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_13_Template, 2, 1, "p", 78)(14, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_14_Template, 2, 1, "p", 78)(15, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_p_15_Template, 2, 1, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "hr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.foundAddress.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.foundAddress.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](11, _c6, ctx_r1.foundAddress.publicData.type !== "mainnet", ctx_r1.foundAddress.publicData.type === "mainnet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r1.foundAddress.publicData == null ? null : ctx_r1.foundAddress.publicData.type) !== "mainnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r1.foundAddress.publicData == null ? null : ctx_r1.foundAddress.publicData.type) === "mainnet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r1.foundAddress.publicData.zelfName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.transactionData.isEthToken || ctx_r1.transactionData.isAvaxToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.transactionData.isSolToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.transactionData.isBtcToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.transactionData.isSuiToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.continue_process"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "hr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.zelf_name_not_registered"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("send.cannot_continue_process"));
  }
}
function SendTransactionComponent_div_0_ng_container_1_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_1_Template, 19, 14, "div", 69)(2, SendTransactionComponent_div_0_ng_container_1_ng_container_34_div_2_Template, 10, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.foundAddress && !ctx_r1.isZelfNameNotFound);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.isZelfNameNotFound);
  }
}
function SendTransactionComponent_div_0_ng_container_1_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SendTransactionComponent_div_0_ng_container_1_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.continueToWithdraw());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.isWithdrawDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", t_r4("common.next"), " ");
  }
}
function SendTransactionComponent_div_0_ng_container_1_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SendTransactionComponent_div_0_ng_container_1_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.continueToConfirmation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.isConfirmationDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", t_r4("common.withdraw"), " ");
  }
}
function SendTransactionComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 4)(2, "div", 5)(3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SendTransactionComponent_div_0_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 9)(7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "form", 12)(11, "div", 13)(12, "p", 14)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "p", 19)(21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 22)(26, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("paste", function SendTransactionComponent_div_0_ng_container_1_Template_input_paste_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r1.pastedAddress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, SendTransactionComponent_div_0_ng_container_1_button_27_Template, 3, 4, "button", 24)(28, SendTransactionComponent_div_0_ng_container_1_button_28_Template, 3, 1, "button", 25)(29, SendTransactionComponent_div_0_ng_container_1_button_29_Template, 13, 1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, SendTransactionComponent_div_0_ng_container_1_div_30_Template, 5, 4, "div", 27)(31, SendTransactionComponent_div_0_ng_container_1_ng_container_31_Template, 14, 19, "ng-container", 3)(32, SendTransactionComponent_div_0_ng_container_1_ng_container_32_Template, 3, 1, "ng-container", 3)(33, SendTransactionComponent_div_0_ng_container_1_zelf_loader_33_Template, 1, 0, "zelf-loader", 3)(34, SendTransactionComponent_div_0_ng_container_1_ng_container_34_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, SendTransactionComponent_div_0_ng_container_1_button_36_Template, 2, 2, "button", 29)(37, SendTransactionComponent_div_0_ng_container_1_button_37_Template, 2, 2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_17_0;
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r4("common.send_symbol", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](22, _c0, ctx_r1.transactionData.symbol)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", t_r4("common.from"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("placeholder", t_r4("send.from_address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 20, ctx_r1.transactionData.sender.zelfName));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", t_r4("common.to"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](24, _c1, ((tmp_10_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_10_0.dirty) && ((tmp_10_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_10_0.invalid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r1.withdrawStep || ctx_r1.searching)("placeholder", t_r4("send.domain_or_address"))("readonly", ctx_r1.withdrawStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.withdrawStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_17_0.dirty) && ((tmp_17_0 = ctx_r1.form.get("toAddress")) == null ? null : tmp_17_0.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.withdrawStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.withdrawStep && ctx_r1.filteredAddresses.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.searching);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.withdrawStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.withdrawStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.withdrawStep);
  }
}
function SendTransactionComponent_div_0_zelf_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "zelf-loader");
  }
}
function SendTransactionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, SendTransactionComponent_div_0_ng_container_1_Template, 38, 26, "ng-container", 3)(2, SendTransactionComponent_div_0_zelf_loader_2_Template, 1, 0, "zelf-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.loading);
  }
}
function SendTransactionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
class SendTransactionComponent {
  _assetService;
  _bitcoinService;
  _changeDetectionRef;
  _ethService;
  _formBuilder;
  _router;
  _snackBar;
  _solanaService;
  _suiService;
  _transactionService;
  _translocoService;
  _walletService;
  _zelfNameService;
  _vaultService;
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
  form;
  foundAddress;
  isZelfNameNotFound = false;
  loading = true;
  price = 0;
  recentAddresses = [];
  searching = false;
  transactionData;
  withdrawStep = false;
  constructor(_assetService, _bitcoinService, _changeDetectionRef, _ethService, _formBuilder, _router, _snackBar, _solanaService, _suiService, _transactionService, _translocoService, _walletService, _zelfNameService, _vaultService) {
    this._assetService = _assetService;
    this._bitcoinService = _bitcoinService;
    this._changeDetectionRef = _changeDetectionRef;
    this._ethService = _ethService;
    this._formBuilder = _formBuilder;
    this._router = _router;
    this._snackBar = _snackBar;
    this._solanaService = _solanaService;
    this._suiService = _suiService;
    this._transactionService = _transactionService;
    this._translocoService = _translocoService;
    this._walletService = _walletService;
    this._zelfNameService = _zelfNameService;
    this._vaultService = _vaultService;
    this.loading = true;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.transactionData = yield _this._transactionService.getCurrentTransactionData();
      if (_this.transactionData && _this.transactionData.hasTransactionData) {
        _this._initTransactionData().catch(() => _this.goBack()).finally(() => _this.loading = false);
        return;
      }
      _this._transactionService.transactionData$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(_this.unsubscriber$)).subscribe(transactionData => {
        _this.transactionData = transactionData;
        if (!_this.transactionData || !_this.transactionData.hasTransactionData) {
          _this._router.navigate(["/send"]);
          return;
        }
        _this._initTransactionData().catch(() => _this.goBack()).finally(() => _this.loading = false);
      });
    })();
  }
  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  get addressKey() {
    if (this.transactionData.isBscToken) return "ethAddress";
    if (this.transactionData.isBtcToken) return "btcAddress";
    if (this.transactionData.isEthToken || this.transactionData.isAvaxToken) return "ethAddress";
    if (this.transactionData.isPolToken) return "ethAddress";
    if (this.transactionData.isSolToken) return "solanaAddress";
    if (this.transactionData.isSuiToken) return "suiAddress";
    throw new Error("Network address key unavailable");
  }
  get fiatPrice() {
    const amount = this.form.get("amount")?.value || 0;
    const fiatPrice = this.price || 0;
    return amount * fiatPrice || 0;
  }
  get filteredAddresses() {
    const searchValue = this.form.get("toAddress")?.value;
    return this.recentAddresses.filter(address => {
      if (!searchValue || !searchValue.trim()) return true;
      return new RegExp(searchValue, "i").test(address.address) || address.zelfName && new RegExp(searchValue, "i").test(address.zelfName);
    });
  }
  _addressValidator() {
    return control => {
      const value = control.value;
      if (!value) return null;
      if (control.value === this.transactionData.sender.address) return {
        sameAddress: true
      };
      const pattern = this._getAddressPattern();
      const isValidZelfName = this._walletService.ZelfRegex.test(value);
      if (!pattern.test(value) && !isValidZelfName) return {
        invalidFormat: true
      };
      if (isValidZelfName) return null;
      if ((this.transactionData.isEthToken || this.transactionData.isAvaxToken) && !this._walletService.isValidEVMAddress(value)) {
        return {
          invalidFormat: true
        };
      }
      if (this.transactionData.isSuiToken && !this._suiService.isValidSuiAddress(value)) {
        return {
          invalidFormat: true
        };
      }
      if (this.transactionData.isSolToken && !this._solanaService.isValidSolanaAddress(value)) {
        return {
          invalidFormat: true
        };
      }
      if (this.transactionData.isBtcToken && !this._bitcoinService.isValidBTCAddress(value)) {
        return {
          invalidBTC: true
        };
      }
      return null;
    };
  }
  _amountValidation(maxValue) {
    return control => {
      if (!control.value) return {
        greaterThan: true
      };
      const MIN_VALUE = 1e-18; // 0.000000000000000001
      const value = +control.value;
      if (isNaN(value)) return {
        invalidNumber: true
      };
      if (value < MIN_VALUE) return {
        greaterThan: {
          value: "0.000000000000000001"
        }
      };
      if (value > +maxValue) return {
        lessThan: {
          value: maxValue
        }
      };
      return null;
    };
  }
  _checkEVMAddress(text) {
    const isValidFormat = this._walletService.isValidEVMAddress(text);
    const isValidWeb3 = this._ethService.checkIfValidAddress(text.toLowerCase());
    return isValidFormat && isValidWeb3;
  }
  _fetchTokenPrice() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this2._assetService.fetchAssetPrice(_this2.transactionData.symbol);
        if (!response?.data || !response?.data?.length) return;
        _this2.price = response.data[0].open;
      } catch (error) {}
    })();
  }
  _getAddressPattern() {
    let pattern = /.*/;
    if (this.transactionData.isEthToken || this.transactionData.isAvaxToken) pattern = this._walletService.ETHRegex;
    if (this.transactionData.isSolToken) pattern = this._walletService.SOLRegex;
    if (this.transactionData.isBtcToken) pattern = this._walletService.BTCRegex;
    if (this.transactionData.isSuiToken) pattern = this._walletService.SUIRegex;
    return pattern;
  }
  _handlePaste(text) {
    if (!text) return;
    const toAddressCtrl = this.form.get("toAddress");
    if (!toAddressCtrl) return;
    toAddressCtrl.patchValue(text, {
      emitEvent: true,
      onlySelf: false
    });
    toAddressCtrl.markAsDirty();
    toAddressCtrl.updateValueAndValidity({
      emitEvent: true,
      onlySelf: false
    });
  }
  _handleToAddressChange(text) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.searching || _this3.form.get("toAddress")?.invalid) return;
      if (!text || !text.trim()) {
        _this3.isZelfNameNotFound = false;
        _this3.foundAddress = undefined;
        return;
      }
      _this3.searching = true;
      _this3.isZelfNameNotFound = false;
      const isEVM = _this3.transactionData.isEthToken || _this3.transactionData.isAvaxToken || _this3.transactionData.isPolToken || _this3.transactionData.isBscToken;
      try {
        if (_this3._walletService.ZelfRegex.test(text)) yield _this3._queryZNS("zelfName", text);
        if (!_this3.foundAddress) {
          if (_this3.transactionData.isSuiToken && _this3._suiService.isValidSuiAddress(text)) {
            yield _this3._queryZNS("suiAddress", text);
            if (!_this3.foundAddress) _this3._setRawAddressToFoundAddress(text, "suiAddress");
          } else if (isEVM && _this3._checkEVMAddress(text)) {
            yield _this3._queryZNS("ethAddress", text);
            if (!_this3.foundAddress) _this3._setRawAddressToFoundAddress(text, "ethAddress");
          } else if (_this3.transactionData.isSolToken && _this3._solanaService.isValidSolanaAddress(text)) {
            yield _this3._queryZNS("solanaAddress", text);
            if (!_this3.foundAddress) _this3._setRawAddressToFoundAddress(text, "solanaAddress");
          } else if (_this3.transactionData.isBtcToken && _this3._bitcoinService.isValidBTCAddress(text)) {
            yield _this3._queryZNS("btcAddress", text);
            if (!_this3.foundAddress) _this3._setRawAddressToFoundAddress(text, "btcAddress");
          }
        }
        if (_this3.foundAddress) return;
        _this3.isZelfNameNotFound = true;
      } catch (error) {
        if (_this3.transactionData.isSuiToken && _this3._suiService.isValidSuiAddress(text)) {
          _this3._setRawAddressToFoundAddress(text, "suiAddress");
        } else if (isEVM && _this3._checkEVMAddress(text)) {
          _this3._setRawAddressToFoundAddress(text, "ethAddress");
        } else if (_this3.transactionData.isSolToken && _this3._solanaService.isValidSolanaAddress(text)) {
          _this3._setRawAddressToFoundAddress(text, "solanaAddress");
        } else if (_this3.transactionData.isBtcToken && _this3._bitcoinService.isValidBTCAddress(text)) {
          _this3._setRawAddressToFoundAddress(text, "btcAddress");
        } else {
          _this3.isZelfNameNotFound = true;
          _this3.foundAddress = undefined;
        }
      } finally {
        _this3.searching = false;
        if (_this3.foundAddress) yield _this3._setToCurrentTransactionData();
        _this3._changeDetectionRef.detectChanges();
      }
    })();
  }
  _initForm() {
    this.form = this._formBuilder.group({
      amount: [this.transactionData?.amount || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.max(this.transactionData.balance), this._amountValidation(this.transactionData.balance)]],
      toAddress: [this.transactionData?.receiver?.address || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(66), this._addressValidator()]],
      fromAddress: [this.transactionData?.sender?.address || ""]
    });
    const toAddressCtrl = this.form?.get("toAddress");
    if (!toAddressCtrl) return;
    toAddressCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.unsubscriber$), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(1000)).subscribe(value => {
      if (!value || !value.trim() || this.form.get("toAddress")?.invalid) {
        this.foundAddress = undefined;
        this.isZelfNameNotFound = false;
        this._setToCurrentTransactionData();
        return;
      }
      this._handleToAddressChange(value);
    });
    if (!toAddressCtrl.value || !toAddressCtrl.value.trim()) return;
    if (this.transactionData?.receiver?.address) {
      this._setRawAddressToFoundAddress(this.transactionData.receiver.address, this.addressKey);
      this.withdrawStep = true;
      return;
    }
    toAddressCtrl.updateValueAndValidity();
  }
  _initTransactionData() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.recentAddresses = _this4._transactionService.findAddressInRecentAddresses("network", _this4.transactionData.network);
      yield _this4._fetchTokenPrice();
      _this4._initForm();
    })();
  }
  _queryZNS(key, value) {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (key === "zelfName") value = value.toLowerCase();
        const response = yield _this5._zelfNameService.searchZelfNameV2(key, value);
        if (!response.data) {
          _this5.foundAddress = undefined;
          return;
        }
        const foundAddress = new app_wallet__WEBPACK_IMPORTED_MODULE_2__.WalletModel(response.data.ipfs?.length ? response.data.ipfs[0] : response.data.arweave[0]);
        const zelfObjectContainsAddress = !!foundAddress[_this5.addressKey];
        _this5.foundAddress = zelfObjectContainsAddress ? foundAddress : undefined;
      } catch (error) {
        _this5.foundAddress = undefined;
        throw error;
      }
    })();
  }
  _setRawAddressToFoundAddress(text, addressKey) {
    this.searching = false;
    this.isZelfNameNotFound = false;
    this.foundAddress = new app_wallet__WEBPACK_IMPORTED_MODULE_2__.WalletModel({
      [addressKey]: text,
      publicData: {
        zelfName: this.transactionData?.receiver?.zelfName
      }
    });
    if (this.withdrawStep) return;
    const toAddressCtrl = this.form.get("toAddress");
    if (toAddressCtrl) toAddressCtrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _setToCurrentTransactionData() {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this6.withdrawStep) {
          const amount = Number(String(_this6.form.get("amount")?.value || "0").replace(",", "."));
          _this6.transactionData.amount = amount;
        }
        _this6.transactionData.receiver.address = _this6.foundAddress && _this6.foundAddress[_this6.addressKey] || "";
        _this6.transactionData.receiver.zelfName = _this6.foundAddress?.publicData?.zelfName || "";
        yield _this6._transactionService.setCurrentTransactionData(_this6.transactionData);
      } catch (exception) {
        console.error("Error setting transaction data", exception);
        _this6.openErrorSnackBar("send-transaction.error-setting-transaction-data");
      }
    })();
  }
  continueToWithdraw() {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const address = _this7.form.get("toAddress")?.value;
      const isEVM = _this7.transactionData.isEthToken || _this7.transactionData.isAvaxToken || _this7.transactionData.isPolToken || _this7.transactionData.isBscToken;
      const isSuiTokenOrNetwork = _this7.transactionData.isSuiToken;
      if (_this7.foundAddress) {
        const toAddressCtrl = _this7.form.get("toAddress");
        if (toAddressCtrl) {
          toAddressCtrl.setValue(_this7.foundAddress[isSuiTokenOrNetwork ? "suiAddress" : isEVM ? "ethAddress" : _this7.transactionData.isSolToken ? "solanaAddress" : _this7.transactionData.isBtcToken ? "btcAddress" : "solanaAddress"] || "");
          toAddressCtrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        yield _this7._setToCurrentTransactionData();
        _this7.withdrawStep = true;
        return;
      }
      if (_this7.transactionData.isSuiToken && _this7._suiService.isValidSuiAddress(address)) {
        _this7._setRawAddressToFoundAddress(address, "suiAddress");
      } else if (isEVM && _this7._checkEVMAddress(address)) {
        _this7._setRawAddressToFoundAddress(address, "ethAddress");
      } else if (_this7.transactionData.isSolToken && _this7._solanaService.isValidSolanaAddress(address)) {
        _this7._setRawAddressToFoundAddress(address, "solanaAddress");
      } else if (_this7.transactionData.isBtcToken && _this7._bitcoinService.isValidBTCAddress(address)) {
        _this7._setRawAddressToFoundAddress(address, "btcAddress");
        try {
          if (_this7.foundAddress && "btcAddress" in _this7.foundAddress) {
            const address = _this7.foundAddress.btcAddress || "";
            const btcBalance = yield _this7._bitcoinService.getBitcoinBalance(address);
            if (btcBalance.balance < parseFloat(_this7.form.get("amount")?.value || "0")) {
              _this7._snackBar.open(_this7._translocoService.translate("INSUFFICIENT_FUNDS"), _this7._translocoService.translate("CLOSE"), {
                duration: 5000
              });
              return;
            }
          }
        } catch (error) {
          console.error("Error checking Bitcoin balance:", error);
        }
      }
      yield _this7._setToCurrentTransactionData();
      _this7.withdrawStep = true;
    })();
  }
  continueToConfirmation() {
    var _this8 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this8.form.valid) return;
      const address = _this8.form.get("toAddress")?.value;
      if (!address) {
        console.error("No address provided");
        return;
      }
      const isEVM = _this8.transactionData.isEthToken || _this8.transactionData.isAvaxToken || _this8.transactionData.isPolToken || _this8.transactionData.isBscToken;
      if (!_this8.foundAddress) {
        if (_this8.transactionData.isSuiToken && _this8._suiService.isValidSuiAddress(address)) {
          _this8._setRawAddressToFoundAddress(address, "suiAddress");
        } else if (isEVM && _this8._checkEVMAddress(address)) {
          _this8._setRawAddressToFoundAddress(address, "ethAddress");
        } else if (_this8.transactionData.isSolToken && _this8._solanaService.isValidSolanaAddress(address)) {
          _this8._setRawAddressToFoundAddress(address, "solanaAddress");
        } else if (_this8.transactionData.isBtcToken && _this8._bitcoinService.isValidBTCAddress(address)) {
          _this8._setRawAddressToFoundAddress(address, "btcAddress");
        }
      }
      if (!_this8.foundAddress) {
        console.error("No valid address found");
        return;
      }
      yield _this8._setToCurrentTransactionData();
      _this8._router.navigate(["/send/confirmation"]);
    })();
  }
  getTimeDiff(lastUsed) {
    if (!lastUsed) return "";
    const now = new Date();
    const lastUsedDate = new Date(lastUsed);
    const diffInSeconds = Math.floor((now.getTime() - lastUsedDate.getTime()) / 1000);
    if (diffInSeconds < 60) {
      return `${diffInSeconds}s`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}min`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}h`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days}d`;
    } else {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months}mnth`;
    }
  }
  goBack() {
    this.transactionData.amount = 0;
    this.transactionData.receiver.address = "";
    this.transactionData.receiver.zelfName = "";
    if (this.withdrawStep) {
      this.foundAddress = undefined;
      this.form.get("toAddress")?.patchValue(this.transactionData.receiver.address);
      this.form.get("amount")?.patchValue(this.transactionData.amount);
      this._transactionService.setCurrentTransactionData(this.transactionData);
      this.withdrawStep = false;
      return;
    }
    this._transactionService.setCurrentTransactionData(this.transactionData);
    this._router.navigate(["/send"]);
  }
  isConfirmationDisabled() {
    if (!this.foundAddress || this.searching || this.form.invalid || this.form.get("amount")?.invalid) return true;
    return false;
  }
  isWithdrawDisabled() {
    if (!this.foundAddress || this.searching) return true;
    return false;
  }
  openErrorSnackBar(message) {
    this._snackBar.open(this._translocoService.translate(message), this._translocoService.translate("common.close"), {
      duration: 5000,
      panelClass: "zelf-snackbar",
      verticalPosition: "top"
    });
  }
  pasteAddress() {
    var _this9 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this9.withdrawStep || _this9.searching) return;
      const text = yield navigator.clipboard.readText();
      _this9._handlePaste(text);
    })();
  }
  pastedAddress(event) {
    var _this0 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.preventDefault();
      if (_this0.withdrawStep || _this0.searching) return;
      const text = event.clipboardData?.getData("text");
      _this0._handlePaste(text);
    })();
  }
  selectRecentAddress(address) {
    if (this.searching || this.form.get("toAddress")?.value === address) return;
    this.form.get("toAddress")?.patchValue(address.address);
  }
  sendTransaction() {
    var _this1 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this1.form.invalid) return;
      _this1.loading = true;
      try {
        const walletData = yield _this1._walletService.getCurrentWallet();
        const mnemonic = _this1._vaultService.mnemonic;
        if (!walletData || !mnemonic) {
          throw new Error("No wallet data or mnemonic available");
        }
        const amount = parseFloat(_this1.form.get("amount")?.value || "0");
        const toAddress = _this1.form.get("toAddress")?.value;
        if (_this1.transactionData.isBtcToken) {
          const transactionParams = {
            from: "",
            // Will be derived from mnemonic in Bitcoin service
            to: toAddress,
            value: String(amount),
            network: "bitcoin",
            mnemonic: mnemonic
          };
          const result = yield _this1._bitcoinService.sendTransaction(transactionParams);
          _this1._snackBar.open(_this1._translocoService.translate("TRANSACTION_SENT"), _this1._translocoService.translate("CLOSE"), {
            duration: 5000
          });
          _this1._router.navigate(["/transaction-confirmation"], {
            state: {
              hash: result.hash,
              network: "bitcoin",
              amount: amount,
              to: toAddress,
              symbol: "BTC"
            }
          });
        } else {}
      } catch (error) {
        console.error("Error sending transaction:", error);
        _this1._snackBar.open(_this1._translocoService.translate("TRANSACTION_FAILED"), _this1._translocoService.translate("CLOSE"), {
          duration: 5000
        });
      } finally {
        _this1.loading = false;
      }
    })();
  }
  setToInput(address) {
    this.form.get("toAddress")?.patchValue(address.address);
  }
  withdrawAll() {
    this.form.get("amount")?.patchValue(this.transactionData.balance);
  }
  static ɵfac = function SendTransactionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SendTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_asset_service__WEBPACK_IMPORTED_MODULE_4__.AssetService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_5__.BitcoinService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_eth_service__WEBPACK_IMPORTED_MODULE_6__.EthereumService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_solana_service__WEBPACK_IMPORTED_MODULE_7__.SolanaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_services_sui_service__WEBPACK_IMPORTED_MODULE_8__.SuiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_transaction_service__WEBPACK_IMPORTED_MODULE_9__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_jsverse_transloco__WEBPACK_IMPORTED_MODULE_20__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_10__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_11__.ZelfNameService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_vault_service__WEBPACK_IMPORTED_MODULE_12__.VaultService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: SendTransactionComponent,
    selectors: [["send-transaction"]],
    decls: 3,
    vars: 0,
    consts: [["cross", ""], ["class", "zelf-card send-transaction", 4, "transloco"], [1, "zelf-card", "send-transaction"], [4, "ngIf"], [1, "send-transaction__header"], [1, "send-transaction__col1"], ["mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--anti-flash-white", "zelf-icon-button--40", 3, "click"], ["width", "22", "height", "14", "viewBox", "0 0 22 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.0898 5.8277H4.72478L8.08478 2.4677C8.53978 2.0127 8.53978 1.2777 8.08478 0.822695C7.62978 0.367695 6.89478 0.367695 6.43978 0.822695L1.08478 6.1777C0.62978 6.6327 0.62978 7.3677 1.08478 7.8227L6.43978 13.1777C6.89478 13.6327 7.62978 13.6327 8.08478 13.1777C8.53978 12.7227 8.53978 11.9877 8.08478 11.5327L4.72478 8.16103H20.0898C20.7314 8.16103 21.2564 7.63603 21.2564 6.99436C21.2564 6.3527 20.7314 5.8277 20.0898 5.8277Z"], [1, "send-transaction__col2"], [1, "send-transaction__title"], [1, "send-transaction__col3"], [1, "send-transaction__form", 3, "formGroup"], [1, "zelf-card__content", "send-transaction__content"], [1, "send-transaction__input-label"], [1, "send-transaction__input-label-text"], [1, "zelf-input", "zelf-input--wide", "zelf-input--gap-narrow"], ["autocomplete", "off", "formControlName", "fromAddress", "id", "fromAddress", "name", "fromAddress", "readonly", "", 1, "zelf-input__control", 3, "placeholder"], [1, "send-transaction__address-name-zelf-name"], [1, "send-transaction__input-label", "send-transaction__input-label--mt-8"], ["width", "14", "height", "14", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 11C9.45 11 9 10.55 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V10C11 10.55 10.55 11 10 11ZM11 15H9V13H11V15Z", "fill", "#181818"], [1, "zelf-input", "zelf-input--wide", "zelf-input--gap-narrow", 3, "ngClass"], ["autocomplete", "off", "formControlName", "toAddress", "id", "toAddress", "name", "toAddress", "required", "", 1, "zelf-input__control", 3, "paste", "disabled", "placeholder", "readonly"], ["class", "zelf-icon-button zelf-icon-button--transparent zelf-icon-button--text", "type", "button", "mat-flat-button", "", 3, "disabled", "click", 4, "ngIf"], ["class", "zelf-icon-button zelf-icon-button--transparent", "mat-flat-button", "", 3, "disabled", 4, "ngIf"], ["class", "zelf-icon-button zelf-icon-button--anti-flash-white", "mat-flat-button", "", 3, "disabled", 4, "ngIf"], ["class", "zelf-message zelf-message--error zelf-message--column", 4, "ngIf"], [1, "zelf-card__actions"], ["class", "zelf-button zelf-button--black zelf-button--wide", "mat-flat-button", "", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--transparent", "zelf-icon-button--text", 3, "click", "disabled"], ["mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--transparent", 3, "disabled"], ["width", "22", "height", "18", "viewBox", "0 0 22 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.505 0.677734C14.555 0.677734 12.455 1.07773 11.005 2.17773C9.55501 1.07773 7.455 0.677734 5.505 0.677734C4.05501 0.677734 2.515 0.897734 1.225 1.46773C0.495005 1.79773 0.00500488 2.50773 0.00500488 3.31773V14.5977C0.00500488 15.8977 1.225 16.8577 2.485 16.5377C3.465 16.2877 4.505 16.1777 5.505 16.1777C7.065 16.1777 8.72501 16.4377 10.065 17.0977C10.665 17.3977 11.345 17.3977 11.935 17.0977C13.275 16.4277 14.935 16.1777 16.495 16.1777C17.495 16.1777 18.535 16.2877 19.515 16.5377C20.775 16.8677 21.995 15.9077 21.995 14.5977V3.31773C21.995 2.50773 21.505 1.79773 20.775 1.46773C19.495 0.897734 17.955 0.677734 16.505 0.677734ZM20.005 13.4077C20.005 14.0377 19.425 14.4977 18.805 14.3877C18.055 14.2477 17.275 14.1877 16.505 14.1877C14.805 14.1877 12.355 14.8377 11.005 15.6877V4.17773C12.355 3.32773 14.805 2.67773 16.505 2.67773C17.425 2.67773 18.335 2.76773 19.205 2.95773C19.665 3.05773 20.005 3.46773 20.005 3.93773V13.4077Z"], ["mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--anti-flash-white", 3, "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2 8H6C7.1 8 8 7.1 8 6V2C8 0.9 7.1 0 6 0H2C0.9 0 0 0.9 0 2V6C0 7.1 0.9 8 2 8ZM2 2H6V6H2V2Z", "fill", "black"], ["d", "M2 18H6C7.1 18 8 17.1 8 16V12C8 10.9 7.1 10 6 10H2C0.9 10 0 10.9 0 12V16C0 17.1 0.9 18 2 18ZM2 12H6V16H2V12Z", "fill", "black"], ["d", "M10 2V6C10 7.1 10.9 8 12 8H16C17.1 8 18 7.1 18 6V2C18 0.9 17.1 0 16 0H12C10.9 0 10 0.9 10 2ZM16 6H12V2H16V6Z", "fill", "black"], ["d", "M18 17.5V16.5C18 16.22 17.78 16 17.5 16H16.5C16.22 16 16 16.22 16 16.5V17.5C16 17.78 16.22 18 16.5 18H17.5C17.78 18 18 17.78 18 17.5Z", "fill", "black"], ["d", "M10 10.5V11.5C10 11.78 10.22 12 10.5 12H11.5C11.78 12 12 11.78 12 11.5V10.5C12 10.22 11.78 10 11.5 10H10.5C10.22 10 10 10.22 10 10.5Z", "fill", "black"], ["d", "M13.5 12H12.5C12.22 12 12 12.22 12 12.5V13.5C12 13.78 12.22 14 12.5 14H13.5C13.78 14 14 13.78 14 13.5V12.5C14 12.22 13.78 12 13.5 12Z", "fill", "black"], ["d", "M10 14.5V15.5C10 15.78 10.22 16 10.5 16H11.5C11.78 16 12 15.78 12 15.5V14.5C12 14.22 11.78 14 11.5 14H10.5C10.22 14 10 14.22 10 14.5Z", "fill", "black"], ["d", "M12.5 18H13.5C13.78 18 14 17.78 14 17.5V16.5C14 16.22 13.78 16 13.5 16H12.5C12.22 16 12 16.22 12 16.5V17.5C12 17.78 12.22 18 12.5 18Z", "fill", "black"], ["d", "M14.5 16H15.5C15.78 16 16 15.78 16 15.5V14.5C16 14.22 15.78 14 15.5 14H14.5C14.22 14 14 14.22 14 14.5V15.5C14 15.78 14.22 16 14.5 16Z", "fill", "black"], ["d", "M15.5 10H14.5C14.22 10 14 10.22 14 10.5V11.5C14 11.78 14.22 12 14.5 12H15.5C15.78 12 16 11.78 16 11.5V10.5C16 10.22 15.78 10 15.5 10Z", "fill", "black"], ["d", "M16.5 14H17.5C17.78 14 18 13.78 18 13.5V12.5C18 12.22 17.78 12 17.5 12H16.5C16.22 12 16 12.22 16 12.5V13.5C16 13.78 16.22 14 16.5 14Z", "fill", "black"], [1, "zelf-message", "zelf-message--error", "zelf-message--column"], [1, "zelf-message__row"], [4, "ngTemplateOutlet"], [1, "zelf-input", "zelf-input--wide", 3, "ngClass"], ["autocomplete", "off", "formControlName", "amount", "id", "amount", "name", "amount", "required", "", "type", "string", 1, "zelf-input__control", 3, "placeholder"], ["mat-flat-button", "", "type", "button", 1, "zelf-icon-button", "zelf-icon-button--transparent", 3, "click"], [1, "send-transaction__fiat-price"], [1, "zelf-input__tip"], [1, "send-transaction__address-book"], ["class", "zelf-action-row", "matRipple", "", 3, "matRippleColor", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "zelf-action-row", 3, "click", "matRippleColor"], [1, "send-transaction__address-row"], ["width", "20", "height", "16", "viewBox", "0 0 20 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 0H4C1.79 0 0 1.79 0 4V12C0 14.21 1.79 16 4 16H16C18.21 16 20 14.21 20 12V4C20 1.79 18.21 0 16 0ZM14.14 9.77C13.9 9.97 13.57 10.05 13.26 9.97L2.15 7.25C2.45 6.52 3.16 6 4 6H16C16.67 6 17.26 6.34 17.63 6.84L14.14 9.77ZM4 2H16C17.1 2 18 2.9 18 4V4.55C17.41 4.21 16.73 4 16 4H4C3.27 4 2.59 4.21 2 4.55V4C2 2.9 2.9 2 4 2Z", "fill", "#181818"], [1, "zelf-action-row__text", "send-transaction__address-col"], ["class", "send-transaction__address-name", 4, "ngIf"], ["class", "send-transaction__address-name send-transaction__address-name--zelf-name", 4, "ngIf"], [1, "send-transaction__address-used"], [1, "send-transaction__address-name"], [1, "send-transaction__address-name", "send-transaction__address-name--zelf-name"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z", "fill", "#1ea446"], ["class", "zelf-object-preview", 4, "ngIf"], [1, "zelf-object-preview"], [1, "zelf-object-preview__chip"], [1, "zelf-object-preview__icon-bubble"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"], ["class", "zelf-object-preview__chip-text", 4, "ngIf"], [1, "zelf-chip", 3, "ngClass"], [1, "zelf-object-preview__zelf-name"], ["class", "zelf-object-preview__address", 4, "ngIf"], [1, "zelf-object-preview__horizontal-rule"], [1, "zelf-object-preview__instructions"], [1, "zelf-object-preview__chip-text"], [1, "zelf-object-preview__address"], [1, "zelf-object-preview__icon-bubble", "zelf-object-preview__icon-bubble--error"], ["d", "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z", "fill", "currentColor"], ["mat-flat-button", "", "type", "button", 1, "zelf-button", "zelf-button--black", "zelf-button--wide", 3, "click", "disabled"], ["d", "M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM14.3 14.3C13.91 14.69 13.28 14.69 12.89 14.3L10 11.41L7.11 14.3C6.72 14.69 6.09 14.69 5.7 14.3C5.31 13.91 5.31 13.28 5.7 12.89L8.59 10L5.7 7.11C5.31 6.72 5.31 6.09 5.7 5.7C6.09 5.31 6.72 5.31 7.11 5.7L10 8.59L12.89 5.7C13.28 5.31 13.91 5.31 14.3 5.7C14.69 6.09 14.69 6.72 14.3 7.11L11.41 10L14.3 12.89C14.68 13.27 14.68 13.91 14.3 14.3Z", "fill", "#DC362E"]],
    template: function SendTransactionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, SendTransactionComponent_div_0_Template, 3, 2, "div", 1)(1, SendTransactionComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [app_pipes_address_mask_pipe__WEBPACK_IMPORTED_MODULE_1__.AddressMaskPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_21__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CurrencyPipe, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.M, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.M, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_20__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_20__.TranslocoDirective, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_3__.ZelfLoaderComponent],
    styles: [".zelf-button-external-link[_ngcontent-%COMP%] {\n  display: block;\n}\n.zelf-button-external-link--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.zelf-button[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  height: 56px;\n  justify-content: center;\n  outline: none;\n  padding: 8px 24px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.zelf-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-button__text--margin-right[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-button--thin[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n.zelf-button--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.zelf-button--wide.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #73777f !important;\n  color: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--white[_ngcontent-%COMP%]:focus, .zelf-button--white[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--white[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%] {\n  border: 1px solid #181818 !important;\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--outlined[_ngcontent-%COMP%]:focus, .zelf-button--outlined[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--outlined[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--red[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: transparent !important;\n  color: #dc362e !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--red[_ngcontent-%COMP%]:focus, .zelf-button--red[_ngcontent-%COMP%]:hover {\n  background-color: #fceeee !important;\n}\n.zelf-button--red[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e;\n}\n.zelf-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n}\n\n.zelf-icon-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  align-items: center;\n  background-color: #eeedf1 !important;\n  border-radius: 56px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  gap: 16px;\n  height: 56px;\n  justify-content: center;\n  min-height: 56px;\n  min-width: 56px;\n  outline: none;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 56px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-icon-button.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n  height: 24px;\n  width: 24px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 40px;\n  padding: 0 8px;\n}\n.zelf-icon-button--40.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e !important;\n  stroke: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #73777f !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #181818 !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]:focus, .zelf-icon-button--transparent[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--text[_ngcontent-%COMP%] {\n  width: auto !important;\n  min-width: initial !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-icon-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n  width: auto;\n}\n\n[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n}\n\n.send-transaction[_ngcontent-%COMP%] {\n  position: relative;\n}\n.send-transaction__loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  z-index: 2;\n}\n.send-transaction__header[_ngcontent-%COMP%] {\n  align-content: center;\n  column-gap: 12px;\n  display: grid;\n  gap: 24px;\n  grid-template-columns: repeat(10, 1fr);\n  justify-content: start;\n  width: 100%;\n}\n.send-transaction__col1[_ngcontent-%COMP%], .send-transaction__col3[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  display: flex;\n  align-items: center;\n}\n.send-transaction__col1[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n.send-transaction__col2[_ngcontent-%COMP%] {\n  grid-column: span 4;\n  text-align: center;\n  align-items: center;\n}\n.send-transaction__col3[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.send-transaction__title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #181818;\n}\n.send-transaction__form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  flex-grow: 1;\n  position: relative;\n}\n.send-transaction__loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  z-index: 1;\n}\n.send-transaction__content[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  flex: 1 1 auto;\n  justify-content: flex-start;\n}\n.send-transaction__input-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding-left: 16px;\n  width: 100%;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  margin: 0;\n  text-align: left;\n}\n.send-transaction__input-label--mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.send-transaction__input-label-text[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.send-transaction__address-row[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n  justify-content: flex-start;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.send-transaction__fiat-price[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: #73777f;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.1px;\n  line-height: 20px;\n  margin: 0;\n  padding: 0px 12px;\n  text-align: left;\n  vertical-align: middle;\n  width: 100%;\n}\n.send-transaction__address-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 4px;\n  width: 100%;\n  margin: 0;\n}\n.send-transaction__address-name[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  color: #181818;\n}\n.send-transaction__address-name--zelf-name[_ngcontent-%COMP%] {\n  font-family: \"Menda\", \"Arial Black\", sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-transform: uppercase;\n}\n.send-transaction__address-book[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 16px;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.send-transaction__address-name-zelf-name[_ngcontent-%COMP%] {\n  font-family: \"Menda\", \"Arial Black\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  color: #181818;\n  margin: 0 16px 0 0 !important;\n}\n.send-transaction__address-used[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  color: #73777f;\n}\n\n.zelf-object-preview[_ngcontent-%COMP%] {\n  margin: auto 0;\n  max-width: 484px;\n  width: 100%;\n  border-radius: 16px;\n  padding: 24px 16px;\n  gap: 12px;\n  border: 1px solid #e3e3e3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  box-sizing: border-box;\n}\n@media (max-width: 600px) {\n  .zelf-object-preview[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.zelf-object-preview__chip[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: 48px;\n  gap: 8px;\n  padding: 0px 16px;\n  border: 1px solid #e3e3e3;\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.04);\n  margin-bottom: 12px;\n}\n.zelf-object-preview__icon-bubble[_ngcontent-%COMP%] {\n  background-color: #e7f8ed;\n  max-height: 32px;\n  max-width: 32px;\n  border-radius: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  width: 32px;\n}\n.zelf-object-preview__icon-bubble[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446;\n}\n.zelf-object-preview__chip-text[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  color: #181818;\n  margin: 0;\n  text-transform: uppercase;\n}\n.zelf-object-preview__zelf-name[_ngcontent-%COMP%] {\n  font-family: \"Menda\", \"Arial Black\", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0%;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  color: #181818;\n  margin: 0;\n  word-wrap: break-word;\n  overflow-wrap: anywhere;\n}\n@media (max-width: 600px) {\n  .zelf-object-preview__zelf-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 20px;\n  }\n}\n.zelf-object-preview__address[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #181818;\n  margin: 0;\n  word-wrap: break-word;\n  overflow-wrap: anywhere;\n}\n.zelf-object-preview__horizontal-rule[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e3e3e3;\n}\n.zelf-object-preview__instructions[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #73777f;\n}\n.zelf-object-preview__icon-bubble--error[_ngcontent-%COMP%] {\n  background-color: #dc362e;\n  color: white;\n}\n.zelf-object-preview__error-message[_ngcontent-%COMP%] {\n  color: #ff5247;\n  text-align: center;\n  font-size: 16px;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fYnV0dG9ucy5zY3NzIiwic2VuZC10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUUvRUo7QUR5RFI7QUR5QlE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDdkJa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cG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi92YXJpYWJsZXNcIjtcblxuLnplbGYtYnV0dG9uLWV4dGVybmFsLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnplbGYtYnV0dG9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgJi0tbWFyZ2luLXJpZ2h0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGhpbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLnplbGYtYnV0dG9uLS1oeXBlcmxpbmsge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW91dGxpbmVkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIH1cbn1cblxuLnplbGYtaWNvbi1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIG1pbi13aWR0aDogNTZweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB3aWR0aDogNTZweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgJi0tNDAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuXG4gICAgICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbiIsIkB1c2UgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5AdXNlIFwiLi4vLi4vc3R5bGVzL2J1dHRvbnNcIjtcblxuOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlbmQtdHJhbnNhY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICZfX2xvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2NvbDEsXG4gICAgJl9fY29sMyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fY29sMSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgfVxuXG4gICAgJl9fY29sMiB7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb2wzIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAyNHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAmX19sb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgJl9faW5wdXQtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAmLS1tdC04IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2lucHV0LWxhYmVsLXRleHQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAmX19hZGRyZXNzLXJvdyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19maWF0LXByaWNlIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19hZGRyZXNzLWNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICZfX2FkZHJlc3MtbmFtZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG5cbiAgICAgICAgJi0temVsZi1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCIsIFwiQXJpYWwgQmxhY2tcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hZGRyZXNzLWJvb2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgJl9fYWRkcmVzcy1uYW1lLXplbGYtbmFtZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCIsIFwiQXJpYWwgQmxhY2tcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJl9fYWRkcmVzcy11c2VkIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgIH1cbn1cblxuLnplbGYtb2JqZWN0LXByZXZpZXcge1xuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIG1heC13aWR0aDogNDg0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IHZhcmlhYmxlcy4kbWluU21hbGwpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG5cbiAgICAmX19jaGlwIHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX19pY29uLWJ1YmJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDMycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3Q7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jaGlwLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgJl9femVsZi1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIiwgXCJBcmlhbCBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IHZhcmlhYmxlcy4kbWluU21hbGwpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICAgIH1cblxuICAgICZfX2hvcml6b250YWwtcnVsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuICAgIH1cblxuICAgICZfX2luc3RydWN0aW9ucyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgIH1cblxuICAgICZfX2ljb24tYnViYmxlIHtcbiAgICAgICAgJi0tZXJyb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzYyZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Vycm9yLW1lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogI2ZmNTI0NztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VuZC10cmFuc2FjdGlvbi9zZW5kLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUUvRUo7QUR5RFI7QUR5QlE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDdkJaO0FEMEJRO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FDeEJaO0FEMEJZO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBQ3hCaEI7QUQ2Qkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUM1Qlo7QUQrQlE7RUFDSSxhRWxISjtBRHFGUjtBRGdDUTtFQUVJLG9DQUFBO0VBQ0EsWUFBQTtBQy9CWjtBRGlDWTtFQUNJLGFFcEhSO0FEcUZSO0FEbUNRO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtBQ2pDWjtBRG1DWTtFQUNJLGFFaklIO0FEZ0diO0FEb0NZO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBQ2xDaEI7QUR1Q0k7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUN0Q1o7QUR5Q1E7RUFFSSxvQ0FBQTtBQ3hDWjtBRDJDUTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQ3pDWjtBRDJDWTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7QUN6Q2hCO0FENkNRO0VBQ0ksYUV0S0o7QUQySFI7QUQ4Q1E7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDNUNaO0FEZ0RJO0VBQ0ksb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUMvQ1o7QURrRFE7RUFFSSxvQ0FBQTtBQ2pEWjtBRG9EUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNsRFo7QURxRFE7RUFDSSxhRWxNSjtBRCtJUjtBRHVESTtFQUNJLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUNJO0FDdERaO0FEeURRO0VBRUksb0NBQUE7QUN4RFo7QUQyRFE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDekRaO0FENERRO0VBQ0ksYUVyT0o7QUQyS1I7QUQ4REk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FDNURSO0FEOERRO0VBQ0ksd0JBQUE7QUM1RFo7QURnRUk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FDOURSO0FEZ0VRO0VBQ0ksd0JBQUE7QUM5RFo7QURtRVE7RUFDSSxxQkFBQTtBQ2pFWjtBRHVFWTtFQUNJLHFCQUFBO0FDckVoQjtBRDBFSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ3hFUjs7QUQ0RUE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkdBQ0k7RUFFSix5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQzNFSjtBRDZFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQzNFUjtBRDhFSTtFQUNJLG1CQUFBO0FDNUVSO0FEK0VJO0VBQ0kscURBQUE7RUFDQSxhRXZTQTtFRndTQSxZQUFBO0VBQ0EsV0FBQTtBQzdFUjtBRGdGSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQzlFUjtBRGdGUTtFQUNJLFdBQUE7QUM5RVo7QURrRkk7RUFDSSxtQkFBQTtBQ2hGUjtBRG1GSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDakZSO0FEbUZRO0VBQ0ksbUJBQUE7QUNqRlo7QURvRlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2xGWjtBRHNGSTtFQUNJLDZCQUFBO0VBQ0EsY0U1VUQ7RUY2VUMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDckZaO0FEd0ZRO0VBQ0ksZUFBQTtBQ3RGWjtBRHlGUTtFQUNJLGFFMVZMO0FEbVFQO0FEMEZRO0VBQ0ksY0UvVko7RUZnV0kseUJFNVZEO0FEb1FYO0FEMEZZO0VBQ0ksYUVuV1I7QUQyUVI7QUQ0RlE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDMUZaO0FENEZZO0VBQ0ksYUUxV0o7QURnUlo7QUQ2Rlk7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDM0ZoQjtBRGdHSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FDSTtBQy9GWjtBRGtHUTtFQUNJLG9DQUFBO0FDaEdaO0FEbUdRO0VBQ0ksb0NBQUE7QUNqR1o7QURvR1E7RUFDSSxhRS9YSjtBRDZSUjtBRHFHUTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7QUNuR1o7QURzR1E7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0FDcEdaO0FEc0dZO0VBQ0ksYUVoWkg7QUQ0U2I7QUR1R1k7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDckdoQjtBRDBHSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FDSTtBQ3pHWjtBRDRHUTtFQUNJLGFFcmFKO0FEMlRSO0FENkdRO0VBRUksb0NBQUE7RUFDQSxZQUFBO0FDNUdaO0FEOEdZO0VBQ0ksYUV2YVI7QUQyVFI7QURnSFE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0FDOUdaO0FEZ0hZO0VBQ0ksYUVwYkg7QURzVWI7QURpSFk7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDL0doQjtBRG9ISTtFQUNJLHdDQUFBO0VBQ0EseUJBQUE7QUNsSFI7QURvSFE7RUFDSSxhRXRjSjtBRG9WUjtBRHFIUTtFQUVJLG9DQUFBO0FDcEhaO0FEdUhRO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ3JIWjtBRHVIWTtFQUNJLGFFaGRIO0FEMlZiO0FEMkhRO0VBQ0kscUJBQUE7QUN6SFo7QUQrSFk7RUFDSSxxQkFBQTtBQzdIaEI7QURrSUk7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0FDaElSO0FEbUlJO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQ2pJUjtBRG1JUTtFQUNJLHdCQUFBO0FDaklaO0FEcUlJO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQ25JUjtBRHFJUTtFQUNJLHdCQUFBO0FDbklaO0FEdUlJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNySVI7O0FBaFpBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFtWko7O0FBaFpBO0VBQ0ksa0JBQUE7QUFtWko7QUFqWkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQW1aUjtBQWhaSTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBa1pSO0FBL1lJO0VBRUksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFnWlI7QUE3WUk7RUFDSSxzQkFBQTtBQStZUjtBQTVZSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQThZUjtBQTNZSTtFQUNJLG9CQUFBO0FBNllSO0FBMVlJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDdkNBO0FEbWJSO0FBellJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBMllSO0FBeFlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUEwWVI7QUF2WUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQXlZUjtBQXRZSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBd1lSO0FBdFlRO0VBQ0ksZUFBQTtBQXdZWjtBQXBZSTtFQUNJLGlCQUFBO0FBc1lSO0FBbllJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFdBQUE7QUFxWVI7QUFsWUk7RUFDSSxzQkFBQTtFQUNBLGNDckdEO0VEc0dDLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBb1lSO0FBallJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQW1ZUjtBQWhZSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0NwSUE7QURzZ0JSO0FBaFlRO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFrWVo7QUE5WEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQWdZUjtBQTdYSTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDaEtBO0VEaUtBLDZCQUFBO0FBK1hSO0FBNVhJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQzFLRDtBRHdpQlA7O0FBMVhBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDcExJO0VEcUxKLHNCQUFBO0FBNlhKO0FBM1hJO0VBZko7SUFnQlEsYUFBQTtFQThYTjtBQUNGO0FBNVhJO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkNqTUE7RURrTUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBOFhSO0FBM1hJO0VBQ0kseUJDL05PO0VEZ09QLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTZYUjtBQTNYUTtFQUNJLGFDNU9GO0FEeW1CVjtBQXpYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDdE9BO0VEdU9BLFNBQUE7RUFDQSx5QkFBQTtBQTJYUjtBQXhYSTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0NwUEE7RURxUEEsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUEwWFI7QUF4WFE7RUFkSjtJQWVRLGVBQUE7SUFDQSxpQkFBQTtFQTJYVjtBQUNGO0FBeFhJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDdlFBO0VEd1FBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBMFhSO0FBdlhJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBeVhSO0FBdFhJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDelJEO0FEaXBCUDtBQXBYUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQXNYWjtBQWxYSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBb1hSO0FBSUEsbzBtQ0FBbzBtQyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4uemVsZi1idXR0b24tZXh0ZXJuYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uemVsZi1idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBnYXA6IDhweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICAmLS1tYXJnaW4tcmlnaHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10aGluIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgfVxuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuemVsZi1idXR0b24tLWh5cGVybGluayB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tb3V0bGluZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgfVxufVxuXG4uemVsZi1pY29uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBnYXA6IDE2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiA1NnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmLS00MCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICAgICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10cmFuc3BhcmVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRleHQge1xuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIiwiQHVzZSBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcbkB1c2UgXCIuLi8uLi9zdHlsZXMvYnV0dG9uc1wiO1xuXG46aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2VuZC10cmFuc2FjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJl9fbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ2FwOiAyNHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fY29sMSxcbiAgICAmX19jb2wzIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb2wxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB9XG5cbiAgICAmX19jb2wyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2NvbDMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICZfX2xvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAmX19pbnB1dC1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICYtLW10LTgge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faW5wdXQtbGFiZWwtdGV4dCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgICZfX2FkZHJlc3Mtcm93IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2ZpYXQtcHJpY2Uge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMHB4IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2FkZHJlc3MtY29sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9fYWRkcmVzcy1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcblxuICAgICAgICAmLS16ZWxmLW5hbWUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIiwgXCJBcmlhbCBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2FkZHJlc3MtYm9vayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAmX19hZGRyZXNzLW5hbWUtemVsZi1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIiwgXCJBcmlhbCBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDAgMTZweCAwIDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmX19hZGRyZXNzLXVzZWQge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgfVxufVxuXG4uemVsZi1vYmplY3QtcHJldmlldyB7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgbWF4LXdpZHRoOiA0ODRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBnYXA6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRwbGF0aW51bTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogdmFyaWFibGVzLiRtaW5TbWFsbCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cblxuICAgICZfX2NoaXAge1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRwbGF0aW51bTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgICZfX2ljb24tYnViYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgICAgIG1heC13aWR0aDogMzJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NoaXAtdGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICAmX196ZWxmLW5hbWUge1xuICAgICAgICBmb250LWZhbWlseTogXCJNZW5kYVwiLCBcIkFyaWFsIEJsYWNrXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogdmFyaWFibGVzLiRtaW5TbWFsbCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hZGRyZXNzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gICAgfVxuXG4gICAgJl9faG9yaXpvbnRhbC1ydWxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgfVxuXG4gICAgJl9faW5zdHJ1Y3Rpb25zIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgfVxuXG4gICAgJl9faWNvbi1idWJibGUge1xuICAgICAgICAmLS1lcnJvciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNjJlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgIGNvbG9yOiAjZmY1MjQ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgfVxufVxuIiwiJHByaW1hcnlDb2xvcjogIzBlMjZmZjtcbiRwcmltYXJ5TGlnaHQ6ICNkYWRkZmE7XG4kc2Vjb25kYXJ5Q29sb3I6ICNmZjU3MjE7XG4kc2Vjb25kYXJ5Q29sb3JMaWdodDogI2Y2ZTVlMDtcblxuJGNvcnJlY3Q6ICMxZWE0NDY7XG4kY29ycmVjdERhcms6ICMwZjUyMjM7XG4kY29ycmVjdExpZ2h0OiAjZTdmOGVkO1xuXG4kZXJyb3I6ICNkYzM2MmU7XG4kZXJyb3JEYXJrOiAjNjAxNDEwO1xuJGVycm9yTGlnaHQ6ICNmY2VlZWU7XG5cbiR3YXJuaW5nOiAjZGU2ODAwO1xuJHdhcm5pbmdEYXJrOiAjNGEyMTBhO1xuJHdhcm5pbmdMaWdodDogI2ZmZWVlOTtcblxuJGluZm86ICMzOTk4ZDM7XG4kaW5mb0Rhcms6ICMwMDRhNzc7XG4kaW5mb0xpZ2h0OiAjZWNmM2ZlO1xuXG4kYmxhY2s6ICMxODE4MTg7XG4kZ3JheTogIzczNzc3ZjtcbiR0YXVwZUdyYXk6ICM5NjkzOWU7XG4kZnJlbmNoR3JheTogI2MzYzZjZjtcbiRwbGF0aW51bTogI2UzZTNlMztcbiRhbnRpRmxhc2hXaGl0ZTogI2VlZWRmMTtcbiRzZWFTYWx0OiAjZjlmOWZjO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4kc21vb3RoQmV6aWVyOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40LCAwLjcsIDEpO1xuXG4kbWF4RXh0cmFTbWFsbDogNTk1cHg7XG4kbWluU21hbGw6IDYwMHB4O1xuJG1lZGl1bTogNzY4cHg7XG4kbGFyZ2U6IDg4OXB4O1xuJGNvbXB1dGVyczogMTIwMHB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=src_app_send-transaction_send-transaction_component_ts.js.map