"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_swap_swap_component_ts"],{

/***/ 26660:
/*!****************************************!*\
  !*** ./src/app/swap/swap.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwapComponent: () => (/* binding */ SwapComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ethers */ 71932);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ethers */ 29929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var app_slippage_sheet_slippage_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/slippage-sheet/slippage-sheet.component */ 34104);
/* harmony import */ var app_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/wallet */ 45965);
/* harmony import */ var _swap_currency_swap_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swap-currency/swap-currency.component */ 84412);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_asset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/asset.service */ 25931);
/* harmony import */ var app_services_blockchain_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/blockchain-transactions.service */ 56122);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var app_chrome_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/chrome.service */ 85043);
/* harmony import */ var app_services_lifi_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/lifi.service */ 53520);
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/network.service */ 32404);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var app_transaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/transaction.service */ 65443);
/* harmony import */ var app_vault_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/vault.service */ 19519);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/wallet.service */ 69556);
/* harmony import */ var app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/zelf-name-service.service */ 56148);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 81391);


































const _c0 = () => ["/home"];
const _c1 = a0 => ({
  "swap__asset-card--error": a0
});
const _c2 = a0 => ({
  "swap__amount-input-container--fiat": a0
});
const _c3 = a0 => ({
  "swap__quick-amount--error": a0
});
const _c4 = a0 => ({
  bridge: a0
});
const _c5 = a0 => ({
  slippage: a0
});
const _c6 = a0 => ({
  "zelf-input--error": a0
});
const _c7 = a0 => ({
  remaining: a0
});
function SwapComponent_div_0_ng_container_1_ng_container_10_zelf_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "zelf-loader", 61);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("diameter", 30);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind4"](2, 1, (tmp_12_0 = ctx_r1.form.get("sourceFiat")) == null ? null : tmp_12_0.value, "USD", "symbol", "1.2-2"), " ");
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", (tmp_12_0 = ctx_r1.form.get("sourceAsset")) == null ? null : tmp_12_0.value == null ? null : tmp_12_0.value.symbol, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 2, ((tmp_12_0 = ctx_r1.form.get("sourceAmount")) == null ? null : tmp_12_0.value) || 0, "1.0-8"), " ");
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.select_asset"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_21_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "img", 69);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r1.selectedSourceAsset.image, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_21_img_2_Template, 1, 1, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 66)(5, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedSourceAsset.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r1.getNetworkImage(ctx_r1.selectedSourceAsset.network), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.selectedSourceAsset.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getNetworkSymbol(ctx_r1.selectedSourceAsset.network));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind4"](2, 1, (tmp_12_0 = ctx_r1.form.get("targetFiat")) == null ? null : tmp_12_0.value, "USD", "symbol", "1.2-2"), " ");
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", (tmp_12_0 = ctx_r1.form.get("targetAsset")) == null ? null : tmp_12_0.value == null ? null : tmp_12_0.value.symbol, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 2, ((tmp_12_0 = ctx_r1.form.get("targetAmount")) == null ? null : tmp_12_0.value) || 0, "1.0-8"), " ");
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.select_asset"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_50_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "img", 69);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r1.selectedTargetAsset.image, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_50_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "img", 65);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r1.getNetworkImage(ctx_r1.selectedTargetAsset.network), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_50_img_2_Template, 1, 1, "img", 64)(3, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_50_img_3_Template, 1, 1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 66)(5, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTargetAsset.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.selectedTargetAsset.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.selectedTargetAsset.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getNetworkSymbol(ctx_r1.selectedTargetAsset.network));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_58_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_div_0_ng_container_1_ng_container_10_div_58_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("errors.swap_same_asset"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_59_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_div_0_ng_container_1_ng_container_10_div_59_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("errors.insufficient_funds"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_60_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_div_0_ng_container_1_ng_container_10_div_60_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("errors.cannot_swap_across_these_networks"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    const downArrowIcon_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", downArrowIcon_r7);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_button_7_Template_button_click_0_listener() {
      const bridgeOption_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.setBridge(bridgeOption_r9.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "label", 88)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "svg", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "polyline", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const bridgeOption_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("for", bridgeOption_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](bridgeOption_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("id", bridgeOption_r9.value)("value", bridgeOption_r9.value);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("~ ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 2, (tmp_14_0 = ctx_r1.form.get("targetSwapValue")) == null ? null : tmp_14_0.value, "1.0-8"), " ", ctx_r1.selectedTargetAsset.symbol, "");
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 72)(2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_4_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-menu", 75, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_button_7_Template, 7, 4, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 77)(9, "div", 78)(10, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_13_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 81)(15, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_16_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 84)(20, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_22_Template, 3, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 77)(24, "div", 78)(25, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_28_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 81)(30, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](31, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_31_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 84)(35, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](37, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 77)(39, "div", 78)(40, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](43, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_43_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 81)(45, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_46_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 84)(50, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](52, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.openSlippageSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](54, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_ng_container_54_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_28_0;
    let tmp_32_0;
    let tmp_33_0;
    const bridgeMenu_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](6);
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const informationIcon_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](4);
    const editIcon_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.bridgeOptions.length < 2)("matMenuTriggerFor", bridgeMenu_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", t_r4("swap.powered_by", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](30, _c4, ctx_r1.getBridgeLabel())), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.bridgeOptions.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.bridgeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.pricing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", informationIcon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", informationIcon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.pricing_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" 1 ", ctx_r1.selectedSourceAsset.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hasSelectedTargetAsset);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.fees"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", informationIcon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", informationIcon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.fees_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind4"](37, 22, (tmp_28_0 = ctx_r1.form.get("fee")) == null ? null : tmp_28_0.value, "USD", "symbol", "1.2-8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.slippage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", informationIcon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", informationIcon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", t_r4("swap.slippage_text", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](32, _c5, (tmp_32_0 = ctx_r1.form.get("slippage")) == null ? null : tmp_32_0.value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](52, 27, (tmp_33_0 = ctx_r1.form.get("slippage")) == null ? null : tmp_33_0.value, "1.2-2"), " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", editIcon_r12);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_63_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, SwapComponent_div_0_ng_container_1_ng_container_10_div_63_ng_container_4_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_12_0;
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const toggleButton_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](4, _c6, ((tmp_12_0 = ctx_r1.form.get("password")) == null ? null : tmp_12_0.dirty) && ((tmp_12_0 = ctx_r1.form.get("password")) == null ? null : tmp_12_0.errors)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("type", ctx_r1.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("common.password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", toggleButton_r13);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_64_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_div_0_ng_container_1_ng_container_10_div_64_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const cross_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", cross_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("errors.invalid_password", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c7, ctx_r1.remainingAttempts)));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.confirm_swap"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("common.verify"));
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_mat_spinner_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "mat-spinner", 95);
  }
}
function SwapComponent_div_0_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "form", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, SwapComponent_div_0_ng_container_1_ng_container_10_zelf_loader_3_Template, 1, 1, "zelf-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 23)(5, "div", 24)(6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "input", 27)(10, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 29)(12, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_13_Template, 3, 6, "ng-container", 10)(14, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_14_Template, 3, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.handleBalanceDisplayChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 34)(19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_div_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.swapSource = "source");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_20_Template, 3, 1, "ng-container", 10)(21, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_21_Template, 9, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_23_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 38)(25, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.setAmount(0.5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, " 50% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.setAmount(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, " Max ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 40)(33, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.swapTargetWithSource());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 44)(37, "div", 24)(38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "input", 45)(42, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 29)(44, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](45, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_45_Template, 3, 6, "ng-container", 10)(46, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_46_Template, 3, 5, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 34)(48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_div_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.swapSource = "target");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_49_Template, 3, 1, "ng-container", 10)(50, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_50_Template, 9, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](52, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_52_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 38)(54, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](56, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](58, SwapComponent_div_0_ng_container_1_ng_container_10_div_58_Template, 4, 2, "div", 49)(59, SwapComponent_div_0_ng_container_1_ng_container_10_div_59_Template, 4, 2, "div", 49)(60, SwapComponent_div_0_ng_container_1_ng_container_10_div_60_Template, 4, 2, "div", 49)(61, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_61_Template, 55, 34, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](63, SwapComponent_div_0_ng_container_1_ng_container_10_div_63_Template, 5, 6, "div", 51)(64, SwapComponent_div_0_ng_container_1_ng_container_10_div_64_Template, 4, 4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_ng_container_10_Template_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.confirmSwap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](66, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_66_Template, 2, 1, "ng-container", 10)(67, SwapComponent_div_0_ng_container_1_ng_container_10_ng_container_67_Template, 2, 1, "ng-container", 10)(68, SwapComponent_div_0_ng_container_1_ng_container_10_mat_spinner_68_Template, 1, 0, "mat-spinner", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](69, "input", 54)(70, "input", 55)(71, "input", 56)(72, "input", 57)(73, "input", 58)(74, "input", 59)(75, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_25_0;
    let tmp_38_0;
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const downArrowIcon_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](43, _c1, ((tmp_13_0 = ctx_r1.form.get("sourceAmount")) == null ? null : tmp_13_0.errors) && ((tmp_13_0 = ctx_r1.form.get("sourceAmount")) == null ? null : tmp_13_0.dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.you_pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](45, _c2, ctx_r1.swapBalanceDisplay === "fiat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r1.swapBalanceDisplay === "fiat")("max", ctx_r1.selectedSourceAsset.amount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r1.swapBalanceDisplay === "token")("max", ctx_r1.selectedSourceAsset.amount || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.swapBalanceDisplay === "token");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.swapBalanceDisplay === "fiat");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.hasSelectedSourceAsset);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hasSelectedSourceAsset);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", downArrowIcon_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](47, _c3, (tmp_25_0 = ctx_r1.form.get("sourceAmount")) == null ? null : tmp_25_0.errors == null ? null : tmp_25_0.errors.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](27, 37, ctx_r1.selectedSourceAsset.amount, "1.2-4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r1.hasBothAssetsSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("swap.you_receive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](49, _c2, ctx_r1.swapBalanceDisplay === "fiat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r1.swapBalanceDisplay === "fiat");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx_r1.swapBalanceDisplay === "token");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.swapBalanceDisplay === "token");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.swapBalanceDisplay === "fiat");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.hasSelectedTargetAsset);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.hasSelectedTargetAsset);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", downArrowIcon_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](56, 40, ctx_r1.selectedTargetAsset.amount, "1.2-4"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_38_0 = ctx_r1.form.get("targetAsset")) == null ? null : tmp_38_0.errors == null ? null : tmp_38_0.errors.mustNotMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.form.errors == null ? null : ctx_r1.form.errors.insufficientFunds);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.form.errors == null ? null : ctx_r1.form.errors.crossNetwork);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.showDetails());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.passwordSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.passwordError);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r1.isConfirmDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.requiresBiometrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.requiresBiometrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.sending);
  }
}
function SwapComponent_div_0_ng_container_1_swap_currency_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "swap-currency", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("assetChange", function SwapComponent_div_0_ng_container_1_swap_currency_11_Template_swap_currency_assetChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.handleAssetChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("myAssets", ctx_r1.tokens)("selectedAsset", ctx_r1.swapSource === "source" ? ctx_r1.selectedSourceAsset : ctx_r1.selectedTargetAsset)("source", ctx_r1.swapSource);
  }
}
function SwapComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 11)(2, "div", 12)(3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_div_0_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.swapSource = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 16)(7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, SwapComponent_div_0_ng_container_1_ng_container_10_Template, 76, 51, "ng-container", 10)(11, SwapComponent_div_0_ng_container_1_swap_currency_11_Template, 1, 3, "swap-currency", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", ctx_r1.swapSource ? null : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](t_r4("home.swap"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.swapSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.swapSource);
  }
}
function SwapComponent_div_0_zelf_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "zelf-loader");
  }
}
function SwapComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_div_0_ng_container_1_Template, 12, 5, "ng-container", 10)(2, SwapComponent_div_0_zelf_loader_2_Template, 1, 0, "zelf-loader", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.loading || ctx_r1.quoteLoading);
  }
}
function SwapComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "svg", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SwapComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SwapComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "svg", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "path", 102)(2, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SwapComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "svg", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "path", 105)(2, "circle", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SwapComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "svg", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "path", 107)(2, "line", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function SwapComponent_ng_template_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function SwapComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function SwapComponent_ng_template_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r1.toggleShowPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, SwapComponent_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const openEye_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](8);
    const closedEye_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.showPassword ? openEye_r16 : closedEye_r17);
  }
}
function SwapComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "path", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
class SwapComponent {
  _assetService;
  _blockchainTransactionsService;
  _bottomSheet;
  _changeDetectionRef;
  _chromeService;
  _formBuilder;
  _lifiService;
  _networkService;
  _router;
  _snackBar;
  _transactionService;
  _translocoService;
  _vaultService;
  _walletService;
  _zelfNameService;
  _feeUpdateInterval = null;
  _mnemonics = "";
  _password = "";
  _requiresBiometricsInterval = null;
  CAN_SWAP = {};
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
  formUnsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
  form;
  loading = true;
  network = "ethereum";
  networkImage = "";
  networkSymbol = "";
  passwordError = false;
  passwordSet = false;
  quoteLoading = false;
  remainingAttempts = 0;
  requiresBiometrics = false;
  sending = false;
  showPassword = false;
  slippage = 0.5;
  swapBalanceDisplay = "token";
  swapData = new app_wallet__WEBPACK_IMPORTED_MODULE_2__.SwapData({});
  swapError = "";
  swapQuote = null;
  swapSource = "";
  tokens = [];
  transactionHash = "";
  wallet;
  swapExecuting = false;
  swapExecuted = false;
  swapLoading = false;
  bridgeOptions = [{
    label: "Li.Fi",
    value: "li.fi"
  }];
  selectedSourceAsset = {};
  selectedTargetAsset = {};
  constructor(_assetService, _blockchainTransactionsService, _bottomSheet, _changeDetectionRef, _chromeService, _formBuilder, _lifiService, _networkService, _router, _snackBar, _transactionService, _translocoService, _vaultService, _walletService, _zelfNameService) {
    this._assetService = _assetService;
    this._blockchainTransactionsService = _blockchainTransactionsService;
    this._bottomSheet = _bottomSheet;
    this._changeDetectionRef = _changeDetectionRef;
    this._chromeService = _chromeService;
    this._formBuilder = _formBuilder;
    this._lifiService = _lifiService;
    this._networkService = _networkService;
    this._router = _router;
    this._snackBar = _snackBar;
    this._transactionService = _transactionService;
    this._translocoService = _translocoService;
    this._vaultService = _vaultService;
    this._walletService = _walletService;
    this._zelfNameService = _zelfNameService;
    this.CAN_SWAP = this._assetService.canSwap;
    this.wallet = {};
    this.remainingAttempts = this._vaultService.remainingAttempts;
    this._mnemonics = "";
    this._password = this._vaultService.password;
    this._vaultService.mnemonic = "";
    this._vaultService.password = "";
    if (this._password && this._password.trim()) {
      this.passwordSet = true;
      this.requiresBiometrics = false;
    }
    this._setRequiresBiometricsInterval();
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.wallet = yield _this._walletService.getCurrentWallet();
      _this._initForm();
      yield _this._loadTokensFromSession();
      yield _this._decryptMnemonics();
      yield _this._findPreviousSwapData();
      if (_this.swapData && _this.swapData.hasSwapData) return;
      _this.loading = false;
    })();
  }
  ngOnDestroy() {
    this._clearFeeUpdateInterval();
    this._clearRequiresBiometricsInterval();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
    this.formUnsubscriber$.next();
    this.formUnsubscriber$.complete();
  }
  get canCheckQuote() {
    return !this.loading && !this.quoteLoading && !this.sending && this.hasBothAssetsSet && !!this.form.get("sourceAmount")?.valid && !!this.form.get("targetAsset")?.valid && !this.form.errors?.crossNetwork;
  }
  get hasBothAssetsSet() {
    return !!this.hasSelectedSourceAsset && !!this.hasSelectedTargetAsset;
  }
  get hasSelectedSourceAsset() {
    return !!Object.keys(this.selectedSourceAsset).length;
  }
  get hasSelectedTargetAsset() {
    return !!Object.keys(this.selectedTargetAsset).length;
  }
  get targetTokenPricePerDollar() {
    return 1 / (this.selectedTargetAsset?.price || 1);
  }
  get totalTargetFiat() {
    return (this.form?.get("targetAmount")?.value || 0) * (this.selectedTargetAsset?.price || 0);
  }
  get totalTargetToken() {
    return (this.form?.get("targetFiat")?.value || 0) / (this.selectedTargetAsset?.price || 0);
  }
  get totalSourceFiat() {
    return (this.form?.get("sourceAmount")?.value || 0) * (this.selectedSourceAsset?.price || 0);
  }
  get totalSourceToken() {
    return (this.form?.get("sourceFiat")?.value || 0) / (this.selectedSourceAsset?.price || 0);
  }
  _clearFeeUpdateInterval() {
    if (!this._feeUpdateInterval) return;
    clearInterval(this._feeUpdateInterval);
    this._feeUpdateInterval = null;
  }
  _clearRequiresBiometricsInterval() {
    if (!this._requiresBiometricsInterval) return;
    clearInterval(this._requiresBiometricsInterval);
  }
  _decryptMnemonics() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.requiresBiometrics = yield _this2._vaultService.biometricsRequired();
      if (!_this2.wallet?.pgp?.encryptedMessage || !_this2.wallet?.pgp?.privateKey || _this2.requiresBiometrics) {
        _this2.requiresBiometrics = true;
        return;
      }
      if (!_this2._password && !_this2.form.get("password")?.value) return;
      const secret = JSON.parse(yield _this2._decryptMessage());
      _this2._mnemonics = secret?.mnemonic?.trim()?.toLowerCase();
      _this2.requiresBiometrics = !_this2._mnemonics;
    })();
  }
  _decryptMessage() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const encryptedMessage = _this3.wallet?.pgp?.encryptedMessage;
      const privateKeyArmoured = _this3.wallet?.pgp?.privateKey;
      const passphrase = _this3._password || _this3.form.get("password")?.value;
      if (!encryptedMessage || !privateKeyArmoured || !passphrase) return;
      try {
        return yield _this3._vaultService.decryptMessage(encryptedMessage, privateKeyArmoured, passphrase);
      } catch (error) {
        _this3.wallet = yield _this3._walletService.getCurrentWallet();
        _this3.remainingAttempts = _this3._vaultService.remainingAttempts + 1;
        if (!_this3.wallet?.pgp) {
          _this3._mnemonics = "";
          _this3._password = "";
          _this3.passwordError = false;
          _this3.passwordSet = false;
          _this3.requiresBiometrics = true;
        } else {
          _this3.passwordError = true;
        }
        throw error;
      }
    })();
  }
  _fetchTokens() {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.wallet) return;
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this4._blockchainTransactionsService.getAddressData(_this4.wallet));
      const result = yield _this4._assetService.processTokensFromResponse(response, _this4.CAN_SWAP);
      _this4.tokens = result.tokens;
    })();
  }
  _findPreviousSwapData() {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.swapData = yield _this5._transactionService.getCurrentSwapData();
      if (_this5.swapData && _this5.swapData.hasSwapData) {
        _this5._initSwapData().finally(() => _this5.loading = false);
        return;
      }
    })();
  }
  _greaterThanZero(control) {
    if (control.value && control.value > 0) return null;
    return {
      greaterThanZero: true
    };
  }
  _getAddressForNetwork(network) {
    if (!this.wallet) return "";
    switch (network.toLowerCase()) {
      case "ethereum":
        return this.wallet.ethAddress;
      case "solana":
        return this.wallet.solanaAddress;
      case "avalanche":
        return this.wallet.ethAddress;
      case "binance":
        return this.wallet.ethAddress;
      case "polygon":
        return this.wallet.ethAddress;
      default:
        return this.wallet.ethAddress;
    }
  }
  _getFeeFromQuote(quote) {
    let fee = 0;
    if (!quote.estimate) return fee;
    quote.estimate.gasCosts?.forEach(gasCost => {
      if (!gasCost.amountUSD) return;
      fee += parseFloat(gasCost.amountUSD);
    });
    quote.estimate.feeCosts?.forEach(feeCost => {
      if (!feeCost.amountUSD) return;
      fee += parseFloat(feeCost.amountUSD);
    });
    quote.estimate.bridgeCosts?.forEach(bridgeCost => {
      if (!bridgeCost.amountUSD) return;
      fee += parseFloat(bridgeCost.amountUSD);
    });
    quote.estimate.executionCosts?.forEach(executionCost => {
      if (!executionCost.amountUSD) return;
      fee += parseFloat(executionCost.amountUSD);
    });
    quote.includedSteps?.forEach(step => {
      if (!step.estimate || !step.estimate.feeCosts) return;
      step.estimate.feeCosts.forEach(feeCost => {
        if (!feeCost.amountUSD) return;
        fee += parseFloat(feeCost.amountUSD);
      });
    });
    return fee;
  }
  _handleSuccessfulSwap(receipt) {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.sending = false;
      _this6.swapError = "";
      if (!_this6.transactionHash) return;
      const pendingTransactionData = {
        ...receipt,
        amount: _this6.form.get("sourceAmount")?.value,
        asset: _this6.selectedSourceAsset.symbol,
        date: new Date().toISOString(),
        fee: _this6.form.get("fee")?.value,
        from: _this6.wallet?.ethAddress,
        image: _this6.selectedSourceAsset.image,
        network: _this6.selectedSourceAsset.network,
        status: "pending",
        targetAddress: _this6.selectedTargetAsset.contractAddress,
        targetAmount: _this6.form.get("targetAmount")?.value,
        targetImage: _this6.selectedTargetAsset.image,
        targetNetwork: _this6.selectedTargetAsset.network,
        targetSymbol: _this6.selectedTargetAsset.symbol,
        to: _this6.selectedTargetAsset.contractAddress,
        tokenType: _this6.selectedSourceAsset.symbol,
        total: _this6.form.get("sourceAmount")?.value + _this6.form.get("fee")?.value,
        type: "swap"
      };
      yield _this6._walletService.addTransactionToPending(pendingTransactionData);
      yield _this6._chromeService.removeItemSession("tokensTtl");
      yield _this6._chromeService.removeItem("swapData");
      yield _this6._router.navigate(["/transaction", _this6.transactionHash], {
        queryParams: {
          network: _this6.selectedSourceAsset.network,
          symbol: _this6.selectedSourceAsset.symbol
        }
      });
    })();
  }
  _initForm() {
    this.form = this._formBuilder.group({
      bridge: ["li.fi", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
      commission: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0)]],
      commissionToggle: ["automatic", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
      fee: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0)]],
      password: [this._password || "", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
      slippage: [0.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.max(0.8)]],
      slippageToggle: ["automatic", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
      sourceAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, this._greaterThanZero]],
      sourceAsset: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
      sourceFiat: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, this._greaterThanZero]],
      targetAmount: [{
        value: "",
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0)]],
      targetAsset: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, this._notMatchingValidator("sourceAsset")]],
      targetFiat: [{
        value: 0,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0)]],
      targetSwapValue: [""]
    }, {
      validators: [this._insufficientFundsValidator(), this._crossNetworkValidator()]
    });
    this._setupQuoteUpdates();
  }
  _crossNetworkValidator() {
    return control => {
      const sourceAsset = control.get("sourceAsset");
      const targetAsset = control.get("targetAsset");
      if (!sourceAsset?.value || !targetAsset?.value) return null;
      const hasSolAsset = [sourceAsset.value.network.toLowerCase(), targetAsset.value.network.toLowerCase()].indexOf("solana") > -1;
      if (hasSolAsset && sourceAsset.value.network !== targetAsset.value.network) return {
        crossNetwork: true
      };
      return null;
    };
  }
  _initSwapData() {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.form.patchValue(_this7.swapData);
    })();
  }
  _insufficientFundsValidator() {
    return control => {
      if (!control.value) return null;
      if (!this.swapQuote) return null;
      const sourceAmount = control.get("sourceAmount")?.value;
      const sourceAsset = control.get("sourceAsset")?.value;
      if (!sourceAmount || !sourceAsset) return null;
      const sourceBalance = sourceAsset?.amount;
      if (!sourceBalance) return null;
      return sourceBalance < sourceAmount ? {
        insufficientFunds: true
      } : null;
    };
  }
  _loadTokensFromSession() {
    var _this8 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sessionTokens = yield _this8._assetService.loadTokensFromSession();
        if (sessionTokens.length > 0) {
          _this8.tokens = sessionTokens;
        } else {
          yield _this8._fetchTokens();
        }
        _this8._changeDetectionRef.detectChanges();
      } catch (error) {
        console.error("Error loading tokens:", error);
      } finally {
        _this8._initForm();
        _this8.loading = false;
      }
    })();
  }
  _notMatchingValidator(matchTo) {
    return control => {
      if (!control.value) return null;
      const targetAsset = control.value;
      const sourceAsset = control.parent?.get(matchTo)?.value;
      const targetKey = `${targetAsset?.symbol}-${targetAsset?.network}`;
      const sourceKey = `${sourceAsset?.symbol}-${sourceAsset?.network}`;
      return targetKey === sourceKey ? {
        mustNotMatch: true
      } : null;
    };
  }
  _redirectToBiometrics() {
    var _this9 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9._zelfNameService.setFlow("unlock");
      yield _this9._zelfNameService.setZelfName(_this9.wallet?.publicData?.zelfName);
      const {
        password: _password,
        ...rest
      } = _this9.form.value;
      _this9._transactionService.swapData = new app_wallet__WEBPACK_IMPORTED_MODULE_2__.SwapData(rest);
      _this9._vaultService.password = _this9.form.get("password")?.value;
      _this9._router.navigate(["/security/biometrics"], {
        queryParams: {
          return: "/swap"
        }
      });
    })();
  }
  _setFeeUpdateInterval() {
    if (!environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production) return;
    if (this._feeUpdateInterval) this._clearFeeUpdateInterval();
    this._feeUpdateInterval = setInterval(() => {
      if (!this.canCheckQuote) return this._clearFeeUpdateInterval();
      this.getSwapQuote(true);
    }, 1000 * 15);
  }
  _setRequiresBiometricsInterval() {
    if (this._requiresBiometricsInterval) this._clearRequiresBiometricsInterval();
    this._requiresBiometricsInterval = setInterval(() => {
      this._vaultService.biometricsRequired().then(result => this.requiresBiometrics = result);
    }, 1000);
  }
  _setupQuoteUpdates() {
    var _this0 = this;
    const sourceFiatChanges = this.form.get("sourceFiat")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.formUnsubscriber$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(value => value !== null && value !== ""));
    sourceFiatChanges?.subscribe(() => {
      if (this.swapBalanceDisplay === "token") return;
      this.form.get("sourceAmount")?.setValue(this.totalSourceToken);
      this.form.get("sourceAmount")?.markAsDirty();
      this.form.get("sourceAmount")?.markAsTouched();
      this.form.get("sourceAmount")?.updateValueAndValidity();
    });
    const sourceAmountChanges = this.form.get("sourceAmount")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.formUnsubscriber$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(value => value !== null && value !== ""), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(() => {
      if (this.swapBalanceDisplay === "fiat") return;
      this.form.get("sourceFiat")?.setValue(this.totalSourceFiat || 0);
      this.form.get("sourceFiat")?.markAsDirty();
      this.form.get("sourceFiat")?.markAsTouched();
      this.form.get("sourceFiat")?.updateValueAndValidity();
    }));
    const slippageChanges = this.form.get("slippage")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.formUnsubscriber$));
    const sourceAssetChanges = this.form.get("sourceAsset")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.formUnsubscriber$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(value => !!value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(value => this.selectedSourceAsset = value));
    const targetAssetChanges = this.form.get("targetAsset")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.formUnsubscriber$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)(value => !!value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(value => this.selectedTargetAsset = value));
    const REQUIRED_QUOTE_FIELDS = ["sourceAmount", "sourceAsset", "targetAsset", "slippage"];
    (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(sourceAmountChanges, slippageChanges, sourceAssetChanges, targetAssetChanges).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.formUnsubscriber$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.debounceTime)(300)).subscribe(/*#__PURE__*/(0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this0.quoteLoading) return;
      if (REQUIRED_QUOTE_FIELDS.some(field => _this0.form.get(field)?.invalid)) return;
      try {
        yield _this0.getSwapQuote();
      } catch (error) {
        console.error("Error getting swap quote:", error);
      } finally {
        _this0.quoteLoading = false;
      }
    }));
  }
  _validateCredentials() {
    var _this1 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this1._password && !_this1.form.get("password")?.value) {
        _this1.openErrorSnackBar("errors.empty_password");
        return false;
      }
      if (_this1.requiresBiometrics) {
        yield _this1._redirectToBiometrics();
        return false;
      }
      if (_this1._mnemonics) return true;
      try {
        yield _this1._decryptMnemonics();
        if (_this1._mnemonics) return true;
      } catch (error) {
        if (error?.message === "expired") {
          yield _this1._redirectToBiometrics();
          return false;
        }
        _this1.openErrorSnackBar("errors.invalid_credentials");
        return false;
      }
      if (_this1.requiresBiometrics) return false;
      if (_this1._mnemonics) return true;
      _this1.openErrorSnackBar("errors.private_key_locked");
      return false;
    })();
  }
  confirmSwap() {
    var _this10 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.isConfirmDisabled()) return;
      _this10.sending = true;
      _this10.swapError = "";
      try {
        if (!(yield _this10._validateCredentials())) return;
        if (!ethers__WEBPACK_IMPORTED_MODULE_24__.Mnemonic.isValidMnemonic(_this10._mnemonics)) {
          throw new Error("Invalid mnemonic");
        }
        const ethWallet = ethers__WEBPACK_IMPORTED_MODULE_25__.Wallet.fromPhrase(_this10._mnemonics);
        const sourceNetwork = _this10.selectedSourceAsset.network?.toLowerCase();
        const EVM_NETWORKS = ["ethereum", "avalanche", "binance", "polygon"];
        if (sourceNetwork && EVM_NETWORKS.includes(sourceNetwork)) {
          const isFromNative = _this10.swapQuote.action.fromToken.address === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" || _this10.swapQuote.action.fromToken.address === "0x0000000000000000000000000000000000000000";
          const receipt = yield _this10._lifiService.executeSwap(_this10.swapQuote, {
            privateKey: ethWallet.privateKey,
            address: ethWallet.address,
            isFromNative
          });
          if (!receipt?.transactionHash) return;
          _this10.transactionHash = receipt.transactionHash;
          yield _this10._handleSuccessfulSwap(receipt);
        } else if (sourceNetwork === "solana") {
          const receipt = yield _this10._lifiService.executeSolanaSwap(_this10.swapQuote, _this10.wallet, _this10._mnemonics);
          if (!receipt?.transactionHash) return;
          _this10.transactionHash = receipt.transactionHash;
          yield _this10._handleSuccessfulSwap(receipt);
        } else {
          throw new Error(`Unsupported network: ${sourceNetwork}`);
        }
      } catch (error) {
        console.error("Swap execution error:", error);
        _this10.swapError = error.message;
        _this10.openErrorSnackBar(error.message || "errors.something_went_wrong");
      } finally {
        _this10.sending = false;
        _this10._changeDetectionRef.detectChanges();
      }
    })();
  }
  findToken(symbol) {
    return this.tokens.find(token => token.symbol === symbol);
  }
  getBridgeLabel() {
    return this.bridgeOptions.find(option => option.value === this.form.get("bridge")?.value)?.label || "";
  }
  getNetworkImage(network) {
    if (!network) return "";
    return this._walletService.getAssetImage(this._networkService.getNetworkSymbol(network.toLowerCase()));
  }
  getNetworkSymbol(network) {
    if (!network) return "";
    return this._networkService.getNetworkSymbol(network.toLowerCase());
  }
  getSwapQuote() {
    var _this11 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (silentLoading = false) {
      if (!_this11.canCheckQuote) {
        _this11._clearFeeUpdateInterval();
        return;
      }
      if (!_this11.selectedSourceAsset.contractAddress || !_this11.selectedTargetAsset.contractAddress) {
        _this11.openErrorSnackBar("errors.missing_contract_address");
        _this11._clearFeeUpdateInterval();
        return;
      }
      const sourceAmount = _this11.form.get("sourceAmount")?.value;
      const isSameAsset = _this11.selectedSourceAsset.contractAddress === _this11.selectedTargetAsset.contractAddress;
      if (!+sourceAmount || isSameAsset) {
        _this11.form.patchValue({
          targetAmount: "0",
          fee: 0,
          targetSwapValue: "0"
        }, {
          emitEvent: false
        });
        _this11._clearFeeUpdateInterval();
        return;
      }
      _this11._clearFeeUpdateInterval();
      _this11.quoteLoading = !silentLoading;
      try {
        const sourceNetwork = _this11.selectedSourceAsset.network?.toLowerCase();
        const targetNetwork = _this11.selectedTargetAsset.network?.toLowerCase();
        const fromChain = _this11._lifiService.getChainIdentifier(sourceNetwork || "");
        const toChain = _this11._lifiService.getChainIdentifier(targetNetwork || "");
        const fromToken = _this11._lifiService.getTokenAddress(sourceNetwork || "", _this11.selectedSourceAsset.symbol || "", _this11.selectedSourceAsset.contractAddress || "");
        const toToken = _this11._lifiService.getTokenAddress(targetNetwork || "", _this11.selectedTargetAsset.symbol || "", _this11.selectedTargetAsset.contractAddress || "");
        const sourceAmountStr = sourceAmount.toString();
        const fromAmount = _this11._lifiService.formatAmount(sourceAmountStr, _this11.selectedSourceAsset.decimals);
        const fromAddress = _this11._getAddressForNetwork(sourceNetwork || "");
        const slippage = _this11.form.get("slippage")?.value || 0.5;
        const slippageStr = slippage.toString();
        const quote = yield _this11._lifiService.getQuote(fromChain, fromToken, toChain, toToken, fromAmount, fromAddress, slippageStr);
        const toTokenDecimals = _this11.selectedTargetAsset.decimals || 9;
        if (sourceNetwork === "solana" || targetNetwork === "solana") {
          if (!quote || !quote.estimate || !quote.estimate.toAmount) {
            throw new Error("No hay rutas disponibles para este swap en Solana");
          }
          _this11.swapQuote = quote;
          const estimatedAmount = parseFloat(quote.estimate.toAmount) / Math.pow(10, toTokenDecimals);
          const sourceTokenAmount = parseFloat(sourceAmount);
          const targetSwapValue = estimatedAmount / sourceTokenAmount;
          let fee = 0;
          if (quote.estimate.gasCosts) {
            quote.estimate.gasCosts.forEach(gasCost => {
              if (gasCost.amountUSD) {
                fee += parseFloat(gasCost.amountUSD);
              }
            });
          }
          _this11.form.patchValue({
            fee,
            targetSwapValue: targetSwapValue.toString(),
            targetAmount: estimatedAmount.toString(),
            targetFiat: quote.estimate.toAmountUSD
          }, {
            emitEvent: false
          });
          _this11._setFeeUpdateInterval();
        } else {
          if (!quote || !quote?.estimate) throw new Error("Quote error");
          _this11.swapQuote = quote;
          const estimatedAmount = parseFloat(quote.estimate.toAmount) / Math.pow(10, _this11.selectedTargetAsset.decimals);
          const sourceTokenAmount = parseFloat(sourceAmount);
          const targetSwapValue = estimatedAmount / sourceTokenAmount;
          let fee = _this11._getFeeFromQuote(quote);
          _this11.form.patchValue({
            fee,
            targetSwapValue: targetSwapValue.toString(),
            targetAmount: estimatedAmount.toString(),
            targetFiat: quote.estimate.toAmountUSD
          }, {
            emitEvent: false
          });
        }
      } catch (error) {
        console.error("Quote error:", error);
        _this11.openErrorSnackBar(error instanceof Error ? error.message : "errors.failed_to_get_quote");
        _this11.form.patchValue({
          targetAmount: "0",
          fee: 0,
          targetSwapValue: "0"
        }, {
          emitEvent: false
        });
        _this11._clearFeeUpdateInterval();
      } finally {
        _this11.quoteLoading = false;
        _this11._changeDetectionRef.detectChanges();
      }
    }).apply(this, arguments);
  }
  handleAssetChange(event) {
    if (event.source === "source") {
      this.form.patchValue({
        sourceAsset: event.asset
      });
    } else {
      this.form.patchValue({
        targetAsset: event.asset
      });
    }
    this.form.markAsDirty();
    this.form.markAsTouched();
    this.swapSource = "";
  }
  handleBalanceDisplayChange() {
    this.swapBalanceDisplay = this.swapBalanceDisplay === "token" ? "fiat" : "token";
  }
  isConfirmDisabled() {
    const hasValidAmount = !!this.form.get("sourceAmount")?.value && parseFloat(this.form.get("sourceAmount")?.value) > 0;
    const hasValidBalance = !this.form.errors?.insufficientFunds;
    const hasValidNetworks = !this.form.errors?.crossNetwork;
    const hasValidQuote = !!this.swapQuote;
    const hasAssets = this.hasBothAssetsSet;
    const isNotLoadingOrSending = !this.sending && !this.loading && !this.quoteLoading;
    return !(hasValidAmount && hasValidQuote && isNotLoadingOrSending && hasAssets && hasValidBalance && hasValidNetworks);
  }
  openErrorSnackBar(message) {
    this._snackBar.open(this._translocoService.translate(message), this._translocoService.translate("common.close"), {
      duration: 5000,
      panelClass: "zelf-snackbar",
      verticalPosition: "top"
    });
  }
  openSlippageSheet() {
    this._bottomSheet.open(app_slippage_sheet_slippage_sheet_component__WEBPACK_IMPORTED_MODULE_1__.SlippageSheetComponent, {
      backdropClass: "zelf-backdrop",
      panelClass: "zelf-bottom-sheet",
      data: {
        commission: this.form.get("commission")?.value,
        commissionToggle: this.form.get("commissionToggle")?.value,
        network: this.network,
        slippage: this.form.get("slippage")?.value,
        slippageToggle: this.form.get("slippageToggle")?.value
      }
    }).afterDismissed().subscribe({
      next: result => {
        if (!result) return;
        this.form.get("commission")?.patchValue(result.commission);
        this.form.get("commissionToggle")?.patchValue(result.commissionToggle);
        this.form.get("slippage")?.patchValue(result.slippage);
        this.form.get("slippageToggle")?.patchValue(result.slippageToggle);
        this._changeDetectionRef.detectChanges();
      }
    });
  }
  setAmount(modifier) {
    const amount = this.selectedSourceAsset.amount;
    const modifiedValue = Number((amount * modifier).toFixed(8));
    if (this.swapBalanceDisplay === "token") {
      this.form.get("sourceAmount")?.patchValue(modifiedValue || "");
      this.form.get("sourceAmount")?.markAsDirty();
      this.form.get("sourceAmount")?.markAsTouched();
      this.form.get("sourceAmount")?.updateValueAndValidity();
    } else {
      this.form.get("sourceFiat")?.patchValue(modifiedValue * this.selectedSourceAsset.price || 0);
      this.form.get("sourceFiat")?.markAsDirty();
      this.form.get("sourceFiat")?.markAsTouched();
      this.form.get("sourceFiat")?.updateValueAndValidity();
    }
    this._changeDetectionRef.detectChanges();
  }
  setBridge(bridge) {
    this.form.get("bridge")?.patchValue(bridge);
    this._changeDetectionRef.detectChanges();
  }
  showDetails() {
    return !!(this.form.get("sourceAmount")?.valid && this.form.get("targetAsset")?.valid);
  }
  swapTargetWithSource() {
    if (!this.hasBothAssetsSet) return;
    this.formUnsubscriber$.next();
    this.formUnsubscriber$.complete();
    const _tempSourceFiat = this.form.get("sourceFiat")?.value || 0;
    const _tempTargetFiat = 0;
    const _tempSource = {
      ...(this.form.get("sourceAsset")?.value || {})
    };
    const _tempTarget = {
      ...(this.form.get("targetAsset")?.value || {})
    };
    const fromTokenDecimals = _tempSource?.decimals || 9;
    const toTokenDecimals = _tempTarget?.decimals || 9;
    let _tempSourceAmount = this.form.get("sourceAmount")?.value || "";
    let _tempTargetAmount = this.form.get("targetAmount")?.value || "";
    _tempSourceAmount = Number(_tempSourceAmount).toFixed(fromTokenDecimals);
    _tempTargetAmount = Number(_tempTargetAmount).toFixed(toTokenDecimals);
    this._changeDetectionRef.detectChanges();
    this._setupQuoteUpdates();
    this.form.patchValue({
      sourceAmount: _tempTargetAmount,
      sourceAsset: _tempTarget,
      sourceFiat: _tempTargetFiat,
      targetAmount: _tempSourceAmount,
      targetAsset: _tempSource,
      targetFiat: _tempSourceFiat
    }, {
      onlySelf: true
    });
    this.form.get("sourceAsset")?.markAsDirty();
    this.form.get("sourceAsset")?.markAsTouched();
    this.form.get("targetAsset")?.markAsDirty();
    this.form.get("targetAsset")?.markAsTouched();
    this.form.updateValueAndValidity();
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  static ɵfac = function SwapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SwapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_asset_service__WEBPACK_IMPORTED_MODULE_6__.AssetService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_services_blockchain_transactions_service__WEBPACK_IMPORTED_MODULE_7__.BlockchainTransactionsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_chrome_service__WEBPACK_IMPORTED_MODULE_8__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_services_lifi_service__WEBPACK_IMPORTED_MODULE_9__.LifiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_transaction_service__WEBPACK_IMPORTED_MODULE_11__.TransactionService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_jsverse_transloco__WEBPACK_IMPORTED_MODULE_29__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_vault_service__WEBPACK_IMPORTED_MODULE_12__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_13__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_zelf_name_service_service__WEBPACK_IMPORTED_MODULE_14__.ZelfNameService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: SwapComponent,
    selectors: [["swap"]],
    decls: 15,
    vars: 0,
    consts: [["downArrowIcon", ""], ["informationIcon", ""], ["editIcon", ""], ["openEye", ""], ["closedEye", ""], ["toggleButton", ""], ["cross", ""], ["bridgeMenu", "matMenu"], ["class", "zelf-card swap", 4, "transloco"], [1, "zelf-card", "swap"], [4, "ngIf"], [1, "swap__header"], [1, "swap__col1"], ["mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--anti-flash-white", "zelf-icon-button--40", 3, "click", "routerLink"], ["width", "22", "height", "14", "viewBox", "0 0 22 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.0898 5.8277H4.72478L8.08478 2.4677C8.53978 2.0127 8.53978 1.2777 8.08478 0.822695C7.62978 0.367695 6.89478 0.367695 6.43978 0.822695L1.08478 6.1777C0.62978 6.6327 0.62978 7.3677 1.08478 7.8227L6.43978 13.1777C6.89478 13.6327 7.62978 13.6327 8.08478 13.1777C8.53978 12.7227 8.53978 11.9877 8.08478 11.5327L4.72478 8.16103H20.0898C20.7314 8.16103 21.2564 7.63603 21.2564 6.99436C21.2564 6.3527 20.7314 5.8277 20.0898 5.8277Z"], [1, "swap__col2"], [1, "swap__title"], [1, "swap__col3"], [3, "myAssets", "selectedAsset", "source", "assetChange", 4, "ngIf"], [1, "swap__form", 3, "formGroup"], [1, "zelf-card__content", "swap__content"], [3, "diameter", 4, "ngIf"], [1, "swap__asset-card", 3, "ngClass"], [1, "swap__asset-card-actions", "swap__asset-card-actions--left"], [1, "swap__asset-input-label"], [1, "swap__amount-input-container", 3, "ngClass"], ["formControlName", "sourceAmount", "min", "0", "placeholder", "0", "required", "", "type", "number", 1, "swap__amount-input", 3, "hidden", "max"], ["formControlName", "sourceFiat", "min", "0", "placeholder", "0", "required", "", "type", "number", 1, "swap__amount-input", 3, "hidden", "max"], [1, "swap__balance-value"], [1, "swap__balance-value-label"], ["mat-flat-button", "", "type", "button", 1, "zelf-icon-button", "zelf-icon-button--hyperlink", "zelf-icon-button--pill", 3, "click"], ["width", "18", "height", "14", "viewBox", "0 0 18 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.13563 6.85496L0.355635 9.64496C0.165635 9.84496 0.165635 10.155 0.355635 10.355L3.13563 13.145C3.44563 13.465 3.98563 13.235 3.98563 12.795V10.995H9.99564C10.5456 10.995 10.9956 10.545 10.9956 9.99496C10.9956 9.44496 10.5456 8.99496 9.99564 8.99496H3.98563V7.20496C3.98563 6.75496 3.44563 6.53496 3.13563 6.85496ZM17.6456 3.64496L14.8656 0.854961C14.5556 0.534961 14.0156 0.764961 14.0156 1.20496V2.99496H7.99564C7.44563 2.99496 6.99564 3.44496 6.99564 3.99496C6.99564 4.54496 7.44563 4.99496 7.99564 4.99496H14.0056V6.78496C14.0056 7.23496 14.5456 7.45496 14.8556 7.13496L17.6356 4.34496C17.8356 4.15496 17.8356 3.83496 17.6456 3.64496Z"], [1, "swap__asset-card-actions", "swap__asset-card-actions--right"], [1, "swap__dropdown-selector", 3, "click"], ["mat-flat-button", "", "type", "button", 1, "zelf-icon-button", "zelf-icon-button--anti-flash-white", "zelf-icon-button--border-soft", "swap__asset-dropdown-button"], [4, "ngTemplateOutlet"], [1, "swap__quick-amounts"], [1, "swap__quick-amount", 3, "ngClass"], [1, "swap__asset-switch"], ["mat-flat-button", "", "type", "button", 1, "zelf-icon-button", "zelf-icon-button--black", "zelf-icon-button--40", "zelf-icon-button--border-soft", 3, "click", "disabled"], ["width", "14", "height", "18", "viewBox", "0 0 14 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.9961 14.0149V8.0049C10.9961 7.4549 10.5461 7.0049 9.99612 7.0049C9.44612 7.0049 8.99612 7.4549 8.99612 8.0049V14.0149H7.20612C6.75612 14.0149 6.53612 14.5549 6.85612 14.8649L9.64612 17.6449C9.84612 17.8349 10.1561 17.8349 10.3561 17.6449L13.1461 14.8649C13.4661 14.5549 13.2361 14.0149 12.7961 14.0149H10.9961ZM3.64612 0.354902L0.856124 3.1449C0.536124 3.4549 0.756124 3.9949 1.20612 3.9949H2.99612V10.0049C2.99612 10.5549 3.44612 11.0049 3.99612 11.0049C4.54612 11.0049 4.99612 10.5549 4.99612 10.0049V3.9949H6.78612C7.23612 3.9949 7.45612 3.4549 7.13612 3.1449L4.34612 0.354902C4.15612 0.164902 3.83612 0.164902 3.64612 0.354902Z"], [1, "swap__asset-card"], ["formControlName", "targetAmount", "placeholder", "0", "readonly", "", "type", "number", 1, "swap__amount-input", 3, "hidden"], ["formControlName", "targetFiat", "placeholder", "0", "readonly", "", "type", "number", 1, "swap__amount-input", 3, "hidden"], [1, "swap__quick-amount"], [1, "swap__details"], ["class", "zelf-message zelf-message--error", 4, "ngIf"], [1, "zelf-card__actions", "swap__actions"], ["class", "zelf-input zelf-input--wide", 3, "ngClass", 4, "ngIf"], ["mat-flat-button", "", 1, "zelf-button", "zelf-button--black", "zelf-button--wide", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "18", 4, "ngIf"], ["type", "hidden", "formControlName", "bridge"], ["type", "hidden", "formControlName", "slippageToggle"], ["type", "hidden", "formControlName", "slippage"], ["type", "hidden", "formControlName", "commissionToggle"], ["type", "hidden", "formControlName", "commission"], ["type", "hidden", "formControlName", "sourceAsset"], ["type", "hidden", "formControlName", "targetAsset"], [3, "diameter"], [1, "swap__asset-placeholder"], [1, "swap__asset-logo-container"], ["alt", "Source Asset", "class", "swap__asset-logo", 3, "src", 4, "ngIf"], ["alt", "Source Network", 1, "swap__asset-network-logo", 3, "src"], [1, "swap__asset-info"], [1, "swap__asset-name"], [1, "swap__asset-symbol"], ["alt", "Source Asset", 1, "swap__asset-logo", 3, "src"], ["alt", "Source Network", "class", "swap__asset-network-logo", 3, "src", 4, "ngIf"], [1, "zelf-message", "zelf-message--error"], [1, "swap__settings"], ["type", "button", "mat-flat-button", "", 1, "zelf-button", "zelf-button--anti-flash-white", "swap__settings-button", 3, "disabled", "matMenuTriggerFor"], [3, "innerHTML"], [1, "zelf-menu"], ["class", "zelf-menu-item", "type", "button", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "zelf-action-row"], [1, "swap__detail-field", "swap__detail-field--gray"], [1, "swap__details-label"], [1, "tooltip-container"], [1, "tooltip"], [1, "tooltip__content"], [1, "tooltip__content-text"], [1, "swap__detail-field", "swap__detail-field--black"], [1, "swap__details-value"], ["type", "button", "mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--transparent", "zelf-icon-button--40", 3, "click"], ["type", "button", "mat-menu-item", "", 1, "zelf-menu-item", 3, "click"], [1, "zelf-radio", "zelf-radio--plain", "zelf-radio--gap-lg", 3, "for"], ["formControlName", "bridge", "name", "bridge", "type", "radio", 3, "id", "value"], ["viewBox", "0 0 21 21"], ["points", "5 10.75 8.5 14.25 16 6"], [1, "zelf-input", "zelf-input--wide", 3, "ngClass"], ["autocomplete", "off", "formControlName", "password", "id", "password", "name", "password", "placeholder", " ", "required", "", 1, "zelf-input__control", "zelf-input__control--floating-label", 3, "type"], ["for", "password", 1, "zelf-input__floating-label"], ["mode", "indeterminate", "diameter", "18"], [3, "assetChange", "myAssets", "selectedAsset", "source"], ["width", "12", "height", "8", "viewBox", "0 0 12 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.87498 0.999531L5.99498 4.87953L2.11498 0.999531C1.72498 0.609531 1.09498 0.609531 0.704976 0.999531C0.314976 1.38953 0.314976 2.01953 0.704976 2.40953L5.29498 6.99953C5.68498 7.38953 6.31498 7.38953 6.70498 6.99953L11.295 2.40953C11.685 2.01953 11.685 1.38953 11.295 0.999531C10.905 0.619531 10.265 0.609531 9.87498 0.999531Z"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M-0.0012207 14.4615V17.5015C-0.0012207 17.7815 0.218779 18.0015 0.498779 18.0015H3.53878C3.66878 18.0015 3.79878 17.9515 3.88878 17.8515L14.8088 6.94152L11.0588 3.19152L0.148779 14.1015C0.0487794 14.2015 -0.0012207 14.3215 -0.0012207 14.4615Z"], ["d", "M17.7088 2.63152L15.3688 0.291523C14.9788 -0.0984766 14.3488 -0.0984766 13.9588 0.291523L12.1288 2.12152L15.8788 5.87152L17.7088 4.04152C18.0988 3.65152 18.0988 3.02152 17.7088 2.63152Z"], ["fill", "none", "height", "24", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "stroke", "#181818", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["type", "button", "mat-icon-button", "", "tabindex", "-1", 1, "zelf-icon-button", "zelf-icon-button--transparent", "zelf-icon-button--no-fill", 3, "click"], ["d", "M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM14.3 14.3C13.91 14.69 13.28 14.69 12.89 14.3L10 11.41L7.11 14.3C6.72 14.69 6.09 14.69 5.7 14.3C5.31 13.91 5.31 13.28 5.7 12.89L8.59 10L5.7 7.11C5.31 6.72 5.31 6.09 5.7 5.7C6.09 5.31 6.72 5.31 7.11 5.7L10 8.59L12.89 5.7C13.28 5.31 13.91 5.31 14.3 5.7C14.69 6.09 14.69 6.72 14.3 7.11L11.41 10L14.3 12.89C14.68 13.27 14.68 13.91 14.3 14.3Z", "fill", "#DC362E"]],
    template: function SwapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, SwapComponent_div_0_Template, 3, 2, "div", 8)(1, SwapComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"])(3, SwapComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"])(5, SwapComponent_ng_template_5_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"])(7, SwapComponent_ng_template_7_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"])(9, SwapComponent_ng_template_9_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"])(11, SwapComponent_ng_template_11_Template, 2, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"])(13, SwapComponent_ng_template_13_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_30__.DecimalPipe, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.M, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouterLink, _swap_currency_swap_currency_component__WEBPACK_IMPORTED_MODULE_3__.SwapCurrencyComponent, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_29__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_29__.TranslocoDirective, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_5__.ZelfLoaderComponent],
    styles: [".zelf-button-external-link[_ngcontent-%COMP%] {\n  display: block;\n}\n.zelf-button-external-link--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.zelf-button[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  height: 56px;\n  justify-content: center;\n  outline: none;\n  padding: 8px 24px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.zelf-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-button__text--margin-right[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-button--thin[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n.zelf-button--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.zelf-button--wide.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #73777f !important;\n  color: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--white[_ngcontent-%COMP%]:focus, .zelf-button--white[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--white[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%] {\n  border: 1px solid #181818 !important;\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--outlined[_ngcontent-%COMP%]:focus, .zelf-button--outlined[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--outlined[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--red[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: transparent !important;\n  color: #dc362e !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--red[_ngcontent-%COMP%]:focus, .zelf-button--red[_ngcontent-%COMP%]:hover {\n  background-color: #fceeee !important;\n}\n.zelf-button--red[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e;\n}\n.zelf-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n}\n\n.zelf-icon-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  align-items: center;\n  background-color: #eeedf1 !important;\n  border-radius: 56px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  gap: 16px;\n  height: 56px;\n  justify-content: center;\n  min-height: 56px;\n  min-width: 56px;\n  outline: none;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 56px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-icon-button.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n  height: 24px;\n  width: 24px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 40px;\n  padding: 0 8px;\n}\n.zelf-icon-button--40.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e !important;\n  stroke: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #73777f !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #181818 !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]:focus, .zelf-icon-button--transparent[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--text[_ngcontent-%COMP%] {\n  width: auto !important;\n  min-width: initial !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-icon-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n  width: auto;\n}\n\n[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n}\n\n.swap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.swap__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  column-gap: 12px;\n  align-content: center;\n  justify-content: start;\n  gap: 24px;\n  width: 100%;\n}\n.swap__col1[_ngcontent-%COMP%], .swap__col3[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  display: flex;\n  align-items: center;\n}\n.swap__col1[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n.swap__col2[_ngcontent-%COMP%] {\n  grid-column: span 4;\n  text-align: center;\n  align-items: center;\n}\n.swap__col3[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.swap__title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #181818;\n}\n.swap__content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  position: relative;\n  gap: 16px;\n}\n.swap__loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  z-index: 1;\n}\n.swap__asset-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 16px;\n  width: 100%;\n  border: 1px solid #e3e3e3;\n  border-radius: 32px;\n  padding: 32px;\n  box-sizing: border-box;\n  background-color: #ffffff;\n  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.0392156863);\n}\n.swap__asset-card--error[_ngcontent-%COMP%] {\n  border-color: #dc362e;\n}\n.swap__asset-card--error[_ngcontent-%COMP%]   .swap__amount-input[_ngcontent-%COMP%] {\n  color: #dc362e;\n}\n.swap__asset-switch[_ngcontent-%COMP%] {\n  margin-top: -32px;\n  margin-bottom: -32px;\n}\n.swap__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 12px;\n  width: 100%;\n  flex-grow: 1;\n}\n.swap__dropdown-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.0784313725);\n  border-radius: 16px;\n  border-color: 1px solid #eeedf1;\n  justify-content: space-between;\n  background: #ffffff;\n  gap: 12px;\n  padding: 8px;\n  min-width: 168px;\n  cursor: pointer;\n  transition: background-color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.swap__dropdown-selector[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1;\n}\n.swap__asset-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1 1 auto;\n}\n.swap__asset-card-actions--left[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 8px;\n  align-items: flex-start;\n  min-width: 50%;\n}\n.swap__asset-card-actions--right[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: flex-end;\n  gap: 24px;\n}\n.swap__asset-logo-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n}\n.swap__asset-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 36px;\n}\n.swap__asset-network-logo[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  border: 1px solid #ffffff;\n}\n.swap__asset-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n  flex: 1 1 auto;\n}\n.swap__asset-name[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n}\n.swap__asset-symbol[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin: 0;\n  color: #c3c6cf;\n}\n.swap__asset-placeholder[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin: 0;\n  color: #73777f;\n}\n.swap__asset-dropdown-button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  border-radius: 9999px;\n}\n.swap__asset-dropdown-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  fill: #181818;\n}\n.swap__quick-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.swap__quick-amount[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n}\n.swap__quick-amount--error[_ngcontent-%COMP%] {\n  color: #dc362e;\n}\n.swap__asset-input-label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  margin: 0;\n  color: #c3c6cf;\n}\n.swap__amount-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.swap__amount-input-container--fiat[_ngcontent-%COMP%]:before {\n  color: #73777f;\n  align-items: center;\n  bottom: 0;\n  content: \"$\";\n  display: flex;\n  font-family: Menda, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  height: 40px;\n  left: 0;\n  letter-spacing: 0.1px;\n  line-height: 20px;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  width: 40px;\n}\n.swap__amount-input-container--fiat[_ngcontent-%COMP%]   .swap__amount-input[_ngcontent-%COMP%] {\n  padding-left: 24px;\n}\n.swap__amount-input[_ngcontent-%COMP%] {\n  appearance: none;\n  background: none;\n  border: none;\n  box-sizing: border-box;\n  color: inherit;\n  font-family: Menda, sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: 0%;\n  line-height: 40px;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  text-transform: uppercase;\n  vertical-align: middle;\n  width: 100%;\n  position: relative;\n}\n.swap__amount-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .swap__amount-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.swap__amount-input[type=number][_ngcontent-%COMP%] {\n  appearance: textfield;\n}\n.swap__amount-input[_ngcontent-%COMP%]::placeholder {\n  color: #c3c6cf;\n}\n.swap__balance-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 12px;\n}\n.swap__balance-value-label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n}\n.swap__balance-value-button[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 18px;\n  min-width: 18px;\n  min-height: 18px;\n}\n.swap__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  flex-grow: 1;\n}\n.swap__details[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  min-height: 278px;\n}\n.swap__detail-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.swap__detail-field--gray[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.swap__detail-field--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.swap__details-label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  color: #73777f;\n  margin: 0;\n}\n.swap__details-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.swap__details-value[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  color: #181818;\n}\n.swap__settings[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n.swap__settings-button[_ngcontent-%COMP%] {\n  min-width: 260px;\n  min-height: 40px;\n  height: 40px;\n}\n\n.tooltip-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.tooltip-container[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: absolute;\n  z-index: 1;\n  top: 125%;\n  left: 50%;\n  border: 1px solid #eeedf1;\n  border-radius: 16px;\n  transform: translateX(-50%);\n  background-color: #ffffff;\n  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.0392156863);\n}\n.tooltip__content[_ngcontent-%COMP%] {\n  width: 254px;\n  gap: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.tooltip__content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  min-width: 24px;\n  fill: #181818;\n}\n.tooltip__content-text[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fYnV0dG9ucy5zY3NzIiwic3dhcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUUvRUo7QUR5RFI7QUR5QlE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDdkJaO0FEMEJRO0VBQ0ks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QUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNDOWJBO0FEb3hCUiIsImZpbGUiOiJzd2FwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4vdmFyaWFibGVzXCI7XG5cbi56ZWxmLWJ1dHRvbi1leHRlcm5hbC1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi56ZWxmLWJ1dHRvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGdhcDogOHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgICYtLW1hcmdpbi1yaWdodCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1oeXBlcmxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmLS1zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRoaW4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB9XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi56ZWxmLWJ1dHRvbi0taHlwZXJsaW5rIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1vdXRsaW5lZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXJlZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1uby1maWxsIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICB9XG59XG5cbi56ZWxmLWljb24tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGdhcDogMTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgd2lkdGg6IDU2cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYm9yZGVyLXNvZnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cblxuICAgICYtLTQwIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcblxuICAgICAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1oeXBlcmxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmLS1zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRyYW5zcGFyZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1uby1maWxsIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGV4dCB7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG4iLCJAdXNlIFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuQHVzZSBcIi4uLy4uL3N0eWxlcy9idXR0b25zXCI7XG5cbjpob3N0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zd2FwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2NvbDEsXG4gICAgJl9fY29sMyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fY29sMSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgfVxuXG4gICAgJl9fY29sMiB7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb2wzIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgICZfX2xvYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAmX19hc3NldC1jYXJkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDI0cHggMHB4ICMwMDAwMDAwYTtcblxuICAgICAgICAmLS1lcnJvciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcmlhYmxlcy4kZXJyb3I7XG5cbiAgICAgICAgICAgIC5zd2FwX19hbW91bnQtaW5wdXQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtc3dpdGNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zMnB4O1xuICAgIH1cblxuICAgICZfX2FjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgJl9fZHJvcGRvd24tc2VsZWN0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDI0cHggMHB4ICMwMDAwMDAxNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAxcHggc29saWQgdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWluLXdpZHRoOiAxNjhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtY2FyZC1hY3Rpb25zLS1sZWZ0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtY2FyZC1hY3Rpb25zLS1yaWdodCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICB9XG5cbiAgICAmX19hc3NldC1sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICB9XG5cbiAgICAmX19hc3NldC1sb2dvIHtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgICB9XG5cbiAgICAmX19hc3NldC1uZXR3b3JrLWxvZ28ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTJweDtcbiAgICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICAmX19hc3NldC1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIH1cblxuICAgICZfX2Fzc2V0LXN5bWJvbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtZHJvcGRvd24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3F1aWNrLWFtb3VudHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAmX19xdWljay1hbW91bnQge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG5cbiAgICAgICAgJi0tZXJyb3Ige1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hc3NldC1pbnB1dC1sYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgIH1cblxuICAgICZfX2Ftb3VudC1pbnB1dC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYtLWZpYXQge1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIkXCI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTWVuZGEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3dhcF9fYW1vdW50LWlucHV0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fYW1vdW50LWlucHV0IHtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5kYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgICAgICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmW3R5cGU9XCJudW1iZXJcIl0ge1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hbW91bnQtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICB9XG5cbiAgICAmX19iYWxhbmNlLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAmX19iYWxhbmNlLXZhbHVlLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIH1cblxuICAgICZfX2JhbGFuY2UtdmFsdWUtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICAgICAgbWluLXdpZHRoOiAxOHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgJl9fZGV0YWlscyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3OHB4O1xuICAgIH1cblxuICAgICZfX2RldGFpbC1maWVsZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuXG4gICAgICAgICYtLWdyYXkge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLS1ibGFjayB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kZXRhaWxzLWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2RldGFpbHMtdmFsdWUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIH1cblxuICAgICZfX3NldHRpbmdzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAmX19zZXR0aW5ncy1idXR0b24ge1xuICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxufVxuXG4udG9vbHRpcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAmOmhvdmVyIC50b29sdGlwIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cbi50b29sdGlwIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMjUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNHB4IDBweCAjMDAwMDAwMGE7XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDI1NHB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQtdGV4dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG59XG4iLCIkcHJpbWFyeUNvbG9yOiAjMGUyNmZmO1xuJHByaW1hcnlMaWdodDogI2RhZGRmYTtcbiRzZWNvbmRhcnlDb2xvcjogI2ZmNTcyMTtcbiRzZWNvbmRhcnlDb2xvckxpZ2h0OiAjZjZlNWUwO1xuXG4kY29ycmVjdDogIzFlYTQ0NjtcbiRjb3JyZWN0RGFyazogIzBmNTIyMztcbiRjb3JyZWN0TGlnaHQ6ICNlN2Y4ZWQ7XG5cbiRlcnJvcjogI2RjMzYyZTtcbiRlcnJvckRhcms6ICM2MDE0MTA7XG4kZXJyb3JMaWdodDogI2ZjZWVlZTtcblxuJHdhcm5pbmc6ICNkZTY4MDA7XG4kd2FybmluZ0Rhcms6ICM0YTIxMGE7XG4kd2FybmluZ0xpZ2h0OiAjZmZlZWU5O1xuXG4kaW5mbzogIzM5OThkMztcbiRpbmZvRGFyazogIzAwNGE3NztcbiRpbmZvTGlnaHQ6ICNlY2YzZmU7XG5cbiRibGFjazogIzE4MTgxODtcbiRncmF5OiAjNzM3NzdmO1xuJHRhdXBlR3JheTogIzk2OTM5ZTtcbiRmcmVuY2hHcmF5OiAjYzNjNmNmO1xuJHBsYXRpbnVtOiAjZTNlM2UzO1xuJGFudGlGbGFzaFdoaXRlOiAjZWVlZGYxO1xuJHNlYVNhbHQ6ICNmOWY5ZmM7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbiRzbW9vdGhCZXppZXI6IGN1YmljLWJlemllcigwLjI1LCAwLjQsIDAuNywgMSk7XG5cbiRtYXhFeHRyYVNtYWxsOiA1OTVweDtcbiRtaW5TbWFsbDogNjAwcHg7XG4kbWVkaXVtOiA3NjhweDtcbiRsYXJnZTogODg5cHg7XG4kY29tcHV0ZXJzOiAxMjAwcHg7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3dhcC9zd2FwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUUvRUo7QUR5RFI7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d1ZSO0FBdFZRO0VBQ0ksZUFBQTtFQUNBLGFDbGJKO0FEMHdCUjtBQXBWSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNDOWJBO0FEb3hCUjtBQUFBLGc1eENBQWc1eEMiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi92YXJpYWJsZXNcIjtcblxuLnplbGYtYnV0dG9uLWV4dGVybmFsLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnplbGYtYnV0dG9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgJi0tbWFyZ2luLXJpZ2h0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGhpbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLnplbGYtYnV0dG9uLS1oeXBlcmxpbmsge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW91dGxpbmVkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIH1cbn1cblxuLnplbGYtaWNvbi1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIG1pbi13aWR0aDogNTZweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB3aWR0aDogNTZweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgJi0tNDAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuXG4gICAgICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbiIsIkB1c2UgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5AdXNlIFwiLi4vLi4vc3R5bGVzL2J1dHRvbnNcIjtcblxuOmhvc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN3YXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fY29sMSxcbiAgICAmX19jb2wzIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb2wxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB9XG5cbiAgICAmX19jb2wyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2NvbDMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgfVxuXG4gICAgJl9fbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICZfX2Fzc2V0LWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kcGxhdGludW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjRweCAwcHggIzAwMDAwMDBhO1xuXG4gICAgICAgICYtLWVycm9yIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyaWFibGVzLiRlcnJvcjtcblxuICAgICAgICAgICAgLnN3YXBfX2Ftb3VudC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hc3NldC1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTMycHg7XG4gICAgfVxuXG4gICAgJl9fYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAmX19kcm9wZG93bi1zZWxlY3RvciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMjRweCAwcHggIzAwMDAwMDE0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBib3JkZXItY29sb3I6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBtaW4td2lkdGg6IDE2OHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hc3NldC1jYXJkLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG5cbiAgICAmX19hc3NldC1jYXJkLWFjdGlvbnMtLWxlZnQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAmX19hc3NldC1jYXJkLWFjdGlvbnMtLXJpZ2h0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgZ2FwOiAyNHB4O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LWxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LWxvZ28ge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LW5ldHdvcmstbG9nbyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiR3aGl0ZTtcbiAgICB9XG5cbiAgICAmX19hc3NldC1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cblxuICAgICZfX2Fzc2V0LW5hbWUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtc3ltYm9sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICB9XG5cbiAgICAmX19hc3NldC1kcm9wZG93bi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcXVpY2stYW1vdW50cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgICZfX3F1aWNrLWFtb3VudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcblxuICAgICAgICAmLS1lcnJvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Fzc2V0LWlucHV0LWxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgfVxuXG4gICAgJl9fYW1vdW50LWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi0tZmlhdCB7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiRcIjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5kYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zd2FwX19hbW91bnQtaW5wdXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19hbW91bnQtaW5wdXQge1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmRhLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAgICAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Ftb3VudC1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgIH1cblxuICAgICZfX2JhbGFuY2UtdmFsdWUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgICZfX2JhbGFuY2UtdmFsdWUtbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fYmFsYW5jZS12YWx1ZS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgICBtaW4td2lkdGg6IDE4cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAmX19kZXRhaWxzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWluLWhlaWdodDogMjc4cHg7XG4gICAgfVxuXG4gICAgJl9fZGV0YWlsLWZpZWxkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgJi0tZ3JheSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYtLWJsYWNrIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2RldGFpbHMtbGFiZWwge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGV0YWlscy12YWx1ZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fc2V0dGluZ3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgICZfX3NldHRpbmdzLWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59XG5cbi50b29sdGlwLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICY6aG92ZXIgLnRvb2x0aXAge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbn1cblxuLnRvb2x0aXAge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDEyNSU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDI0cHggMHB4ICMwMDAwMDAwYTtcblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICB3aWR0aDogMjU0cHg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fY29udGVudC10ZXh0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 34104:
/*!************************************************************!*\
  !*** ./src/app/slippage-sheet/slippage-sheet.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlippageSheetComponent: () => (/* binding */ SlippageSheetComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/network.service */ 32404);













const _c0 = ["slippageSlider"];
const _c1 = a0 => ({
  "slippage-sheet__switch-label--active": a0
});
function SlippageSheetComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SlippageSheetComponent_ng_container_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7)(7, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SlippageSheetComponent_ng_container_0_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMode("slippageToggle"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19)(24, "div", 20)(25, "div", 21)(26, "label", 22)(27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 24)(29, "div", 24)(30, "div", 24)(31, "div", 24)(32, "div", 24)(33, "div", 24)(34, "div", 24)(35, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 25, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 9)(43, "div", 10)(44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 12)(47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SlippageSheetComponent_ng_container_0_Template_div_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleMode("commissionToggle"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "transloco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 28)(57, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 32)(62, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SlippageSheetComponent_ng_container_0_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_18_0;
    const t_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r3("swap.slipping_adjustments"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r3("swap.slipping"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c1, ((tmp_6_0 = ctx_r1.form.get("slippageToggle")) == null ? null : tmp_6_0.value) === "automatic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 20, "swap." + ((tmp_7_0 = ctx_r1.form.get("slippageToggle")) == null ? null : tmp_7_0.value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ((tmp_8_0 = ctx_r1.form.get("slippageToggle")) == null ? null : tmp_8_0.value) === "automatic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r3("swap.slipping_subtitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ((tmp_10_0 = ctx_r1.form.get("slippageToggle")) == null ? null : tmp_10_0.value) === "manual" ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (tmp_11_0 = ctx_r1.form.get("slippage")) == null ? null : tmp_11_0.value, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r3("swap.slipping_more_info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r3("swap.priority_commission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c1, ((tmp_14_0 = ctx_r1.form.get("commissionToggle")) == null ? null : tmp_14_0.value) === "automatic"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 22, "swap." + ((tmp_15_0 = ctx_r1.form.get("commissionToggle")) == null ? null : tmp_15_0.value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ((tmp_16_0 = ctx_r1.form.get("commissionToggle")) == null ? null : tmp_16_0.value) === "automatic");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](t_r3("swap.priority_commission_subtitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ((tmp_18_0 = ctx_r1.form.get("commissionToggle")) == null ? null : tmp_18_0.value) === "manual" ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.networkSymbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r3("common.confirm"), " ");
  }
}
class SlippageSheetComponent {
  data;
  _formBuilder;
  _bottomSheetRef;
  _networkService;
  slippageSlider;
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  form;
  constructor(data, _formBuilder, _bottomSheetRef, _networkService) {
    this.data = data;
    this._formBuilder = _formBuilder;
    this._bottomSheetRef = _bottomSheetRef;
    this._networkService = _networkService;
    this._initForm();
  }
  ngAfterViewInit() {
    this._updateRangeProgress();
  }
  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  get networkSymbol() {
    return this._networkService.getNetworkSymbol(this.data.network.toLowerCase());
  }
  _initForm() {
    this.form = this._formBuilder.group({
      commission: [this.data.commission || 0.1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0), this._requiredIfManual("commissionToggle")]],
      commissionToggle: [this.data.commissionToggle || "automatic", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      slippage: [this.data.slippage || 0.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(0.8)]],
      slippageToggle: [this.data.slippageToggle || "automatic", [this._requiredIfManual("slippageToggle")]]
    });
    this.form.get("commissionToggle")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscriber$)).subscribe(() => {
      this.form.get("commission")?.updateValueAndValidity();
    });
    this.form.get("slippageToggle")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscriber$)).subscribe(() => {
      this.form.get("slippage")?.updateValueAndValidity();
      this._updateRangeProgress();
    });
    this.form.get("slippage")?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscriber$)).subscribe(() => {
      this._updateRangeProgress();
    });
  }
  _requiredIfManual = formControlName => {
    return control => {
      const toggle = this.form?.get(formControlName)?.value;
      if (toggle === "manual") return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required(control);
      return null;
    };
  };
  _updateRangeProgress() {
    requestAnimationFrame(() => {
      const slider = this.slippageSlider?.nativeElement;
      if (!slider) return;
      try {
        const value = parseFloat(this.form.get("slippage")?.value) || 0;
        const min = parseFloat(slider.min) || 0.1;
        const max = parseFloat(slider.max) || 0.8;
        if (isNaN(value) || isNaN(min) || isNaN(max)) return;
        const percentage = Math.max(0, Math.min(100, (value - min) / (max - min) * 100));
        slider.style.setProperty("--progress", `${percentage}%`);
      } catch (error) {
        console.error("Error updating range progress:", error);
      }
    });
  }
  close() {
    this._bottomSheetRef.dismiss();
  }
  confirm() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.valid || _this.form.pristine) return;
      _this._bottomSheetRef.dismiss(_this.form.value);
    })();
  }
  toggleMode(controlName) {
    if (!this.form) return;
    const control = this.form.get(controlName);
    if (!control) return;
    const currentValue = control.value;
    const newValue = currentValue === "automatic" ? "manual" : "automatic";
    control.setValue(newValue);
    this.form.markAsDirty();
    if (controlName === "slippageToggle") {
      requestAnimationFrame(() => this._updateRangeProgress());
    }
  }
  static ɵfac = function SlippageSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SlippageSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MAT_BOTTOM_SHEET_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheetRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_network_service__WEBPACK_IMPORTED_MODULE_1__.NetworkService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SlippageSheetComponent,
    selectors: [["slippage-sheet"]],
    viewQuery: function SlippageSheetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slippageSlider = _t.first);
      }
    },
    decls: 1,
    vars: 0,
    consts: [["slippageSlider", ""], [4, "transloco"], [1, "slippage-sheet", 3, "formGroup"], ["mat-flat-button", "", 1, "slippage-sheet__exit", 3, "click"], [1, "slippage-sheet__exit-icon"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.3 0.710703C12.91 0.320703 12.28 0.320703 11.89 0.710703L6.99997 5.5907L2.10997 0.700703C1.71997 0.310703 1.08997 0.310703 0.699971 0.700703C0.309971 1.0907 0.309971 1.7207 0.699971 2.1107L5.58997 7.0007L0.699971 11.8907C0.309971 12.2807 0.309971 12.9107 0.699971 13.3007C1.08997 13.6907 1.71997 13.6907 2.10997 13.3007L6.99997 8.4107L11.89 13.3007C12.28 13.6907 12.91 13.6907 13.3 13.3007C13.69 12.9107 13.69 12.2807 13.3 11.8907L8.40997 7.0007L13.3 2.1107C13.68 1.7307 13.68 1.0907 13.3 0.710703Z"], [1, "slippage-sheet__body"], [1, "slippage-sheet__title"], [1, "slippage-sheet__container"], [1, "slippage-sheet__switch-container"], [1, "slippage-sheet__switch-title"], [1, "slippage-sheet__switch-group"], [1, "slippage-sheet__switch", 3, "click"], [1, "slippage-sheet__switch-label", 3, "ngClass"], ["type", "checkbox", 1, "slippage-sheet__switch-input", 3, "checked"], [1, "slippage-sheet__switch-track"], [1, "slippage-sheet__switch-thumb"], [1, "slippage-sheet__text"], [1, "slippage-sheet__slider-container"], [1, "slippage-sheet__slider-input-row"], [1, "slippage-sheet__slider-input-container"], ["for", "slippage", 1, "slippage-sheet__slider-label"], [1, "slippage-sheet__slider-dots"], [1, "slippage-sheet__slider-dot"], ["formControlName", "slippage", "max", "0.8", "min", "0.1", "step", "0.1", "type", "range", 1, "slippage-sheet__slider"], [1, "slippage-sheet__slider-value"], [1, "slippage-sheet__slider-subtitle"], [1, "slippage-sheet__input-container"], [1, "zelf-input", "zelf-input--wide"], ["formControlName", "commission", "id", "commission", "name", "commission", "placeholder", "0.1", "required", "", "type", "number", 1, "zelf-input__control"], [1, "zelf-input__postfix", "slippage-sheet__input-postfix"], [1, "slippage-sheet__actions"], ["mat-flat-button", "", 1, "zelf-button", "zelf-button--black", "zelf-button--wide", 3, "click"]],
    template: function SlippageSheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SlippageSheetComponent_ng_container_0_Template, 64, 28, "ng-container", 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoDirective, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoPipe],
    styles: [".zelf-button-external-link[_ngcontent-%COMP%] {\n  display: block;\n}\n.zelf-button-external-link--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.zelf-button[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  height: 56px;\n  justify-content: center;\n  outline: none;\n  padding: 8px 24px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.zelf-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-button__text--margin-right[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-button--thin[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n.zelf-button--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.zelf-button--wide.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #73777f !important;\n  color: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--white[_ngcontent-%COMP%]:focus, .zelf-button--white[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--white[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%] {\n  border: 1px solid #181818 !important;\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--outlined[_ngcontent-%COMP%]:focus, .zelf-button--outlined[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--outlined[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--red[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: transparent !important;\n  color: #dc362e !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--red[_ngcontent-%COMP%]:focus, .zelf-button--red[_ngcontent-%COMP%]:hover {\n  background-color: #fceeee !important;\n}\n.zelf-button--red[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e;\n}\n.zelf-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n}\n\n.zelf-icon-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  align-items: center;\n  background-color: #eeedf1 !important;\n  border-radius: 56px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  gap: 16px;\n  height: 56px;\n  justify-content: center;\n  min-height: 56px;\n  min-width: 56px;\n  outline: none;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 56px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-icon-button.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n  height: 24px;\n  width: 24px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 40px;\n  padding: 0 8px;\n}\n.zelf-icon-button--40.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e !important;\n  stroke: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #73777f !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #181818 !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]:focus, .zelf-icon-button--transparent[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--text[_ngcontent-%COMP%] {\n  width: auto !important;\n  min-width: initial !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-icon-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n  width: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 16px;\n  max-width: 400px;\n}\n\n.slippage-sheet[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.slippage-sheet__exit[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 8px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n  height: 32px;\n  padding: 8px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  border-radius: 9999px;\n  background-color: transparent;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.slippage-sheet__exit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n}\n.slippage-sheet__exit[_ngcontent-%COMP%]:hover {\n  background-color: #b589f0;\n  color: white;\n}\n.slippage-sheet__exit[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.slippage-sheet__exit-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.slippage-sheet__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.slippage-sheet__container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n  border: 1px solid #c3c6cf;\n}\n.slippage-sheet__switch-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.slippage-sheet__switch-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slippage-sheet__switch-title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #181818;\n  margin: 0;\n}\n.slippage-sheet__switch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  gap: 16px;\n}\n.slippage-sheet__switch-input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slippage-sheet__switch-track[_ngcontent-%COMP%] {\n  position: relative;\n  width: 46px;\n  height: 26px;\n  background-color: #f9f9fc;\n  border: 2px solid #73777f;\n  border-radius: 14px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n}\n.slippage-sheet__switch-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  height: 16px;\n  width: 16px;\n  background-color: #73777f;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.slippage-sheet__switch-input[_ngcontent-%COMP%]:checked    + .slippage-sheet__switch-track[_ngcontent-%COMP%] {\n  background-color: #181818;\n  border-color: #181818;\n}\n.slippage-sheet__switch-input[_ngcontent-%COMP%]:checked    + .slippage-sheet__switch-track[_ngcontent-%COMP%]   .slippage-sheet__switch-thumb[_ngcontent-%COMP%] {\n  left: calc(100% - 23px);\n  background-color: #ffffff;\n  width: 20px;\n  height: 20px;\n}\n.slippage-sheet__switch-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n  color: #96939e;\n}\n.slippage-sheet__switch-label--active[_ngcontent-%COMP%] {\n  color: #181818;\n}\n.slippage-sheet__icon[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  fill: #181818;\n}\n.slippage-sheet__title[_ngcontent-%COMP%] {\n  font-family: \"Menda\", \"Arial Black\", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 24px;\n  letter-spacing: 0px;\n  text-align: center;\n  vertical-align: middle;\n  text-transform: uppercase;\n  margin: 16px 0 8px;\n}\n.slippage-sheet__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: #73777f;\n}\n.slippage-sheet__actions[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  gap: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.slippage-sheet__slider-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 12px;\n  width: 100%;\n}\n.slippage-sheet__slider-input-row[_ngcontent-%COMP%] {\n  width: 100%;\n  gap: 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n}\n.slippage-sheet__slider-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n}\n.slippage-sheet__slider-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  gap: 12px;\n  height: 32px;\n  border-radius: 32px;\n  background-color: #eeedf1;\n  padding: 0 8px;\n}\n.slippage-sheet__slider-value[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 500;\n  font-size: 14px;\n  background-color: #eeedf1;\n  border-radius: 12px;\n  padding: 0 8px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 42px;\n}\n.slippage-sheet__slider-label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 16px;\n}\n.slippage-sheet__slider-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  z-index: 3;\n  padding: 0 8px;\n  pointer-events: none;\n}\n.slippage-sheet__slider-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  background-color: #ffffff;\n  opacity: 0.2;\n  border-radius: 50%;\n  z-index: 1;\n}\n.slippage-sheet__slider[_ngcontent-%COMP%] {\n  appearance: none;\n  width: 100%;\n  height: 16px;\n  border-radius: 20px;\n  background: #eeedf1;\n  outline: none;\n  position: relative;\n  margin: 0;\n  z-index: 2;\n}\n.slippage-sheet__slider[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, #73777f var(--progress, 0%), transparent var(--progress, 0%));\n  border-radius: 20px;\n  height: 16px;\n  width: 100%;\n}\n.slippage-sheet__slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-sizing: content-box;\n  appearance: none;\n  background: #ffffff;\n  border-radius: 20px;\n  border: 6px solid #73777f;\n  box-shadow: none;\n  cursor: pointer;\n  height: 8px;\n  position: relative;\n  width: 8px;\n  z-index: 2;\n  margin-top: -2px;\n}\n.slippage-sheet__slider[_ngcontent-%COMP%]::-moz-range-track {\n  background: linear-gradient(to right, #73777f var(--progress, 0%), transparent var(--progress, 0%));\n  border-radius: 20px;\n  height: 16px;\n  width: 100%;\n}\n.slippage-sheet__slider[_ngcontent-%COMP%]::-moz-range-progress {\n  background-color: #73777f;\n  border-radius: 20px;\n  height: 16px;\n}\n.slippage-sheet__slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  box-sizing: content-box;\n  margin-top: -3px;\n  background: #ffffff;\n  border-radius: 50%;\n  border: 6px solid #73777f;\n  box-shadow: none;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin-top: -2px;\n}\n.slippage-sheet__input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n}\n.slippage-sheet__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  outline: none;\n  font-size: 14px;\n}\n.slippage-sheet__input-postfix[_ngcontent-%COMP%] {\n  color: #181818;\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fYnV0dG9ucy5zY3NzIiwic2xpcHBhZ2Utc2hlZXQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0FDRFI7O0FES0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDRko7QURJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQ0ZSO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FEUUk7RUFDSSw2QkFBQTtFQUNBLGNFcEJEO0VGcUJDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2R0FDSTtBQ1BaO0FEVVE7RUFDSSxlQUFBO0FDUlo7QURXUTtFQUNJLGFFbENMO0FEeUJQO0FEWVE7RUFDSSxjRXZDSjtFRndDSSx5QkVwQ0Q7QUQwQlg7QURZWTtFQUNJLGFFM0NSO0FEaUNSO0FEY1E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDWlo7QURjWTtFQUNJLGFFbERKO0FEc0NaO0FEaUJJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksV0FBQTtBQ2hCUjtBRGtCUTtFQUNJLG1CQUFBO0FDaEJaO0FEb0JJO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUNJO0FDbkJaO0FEc0JRO0VBQ0ksb0NBQUE7QUNwQlo7QUR1QlE7RUFDSSxvQ0FBQTtBQ3JCWjtBRHdCUTtFQUNJLGFFL0VKO0FEeURSO0FEeUJRO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBQ3ZCWjtB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QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJDN1NKO0VEOFNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBaVhaO0FBN1dJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBK1dSO0FBNVdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUE4V1I7QUEzV0k7RUFDSSxjQzlVQTtFRCtVQSxrQkFBQTtBQTZXUiIsImZpbGUiOiJzbGlwcGFnZS1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4uemVsZi1idXR0b24tZXh0ZXJuYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uemVsZi1idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBnYXA6IDhweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICAmLS1tYXJnaW4tcmlnaHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10aGluIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgfVxuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuemVsZi1idXR0b24tLWh5cGVybGluayB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tb3V0bGluZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgfVxufVxuXG4uemVsZi1pY29uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBnYXA6IDE2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiA1NnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmLS00MCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICAgICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10cmFuc3BhcmVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRleHQge1xuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIiwiQHVzZSBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcbkB1c2UgXCIuLi8uLi9zdHlsZXMvYnV0dG9uc1wiO1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLnNsaXBwYWdlLXNoZWV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG5cbiAgICAmX19leGl0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgbWluLWhlaWdodDogMzJweDtcbiAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNTg5ZjA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19leGl0LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb250YWluZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgIH1cblxuICAgICZfX3N3aXRjaC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLXRyYWNrIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNDZweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlYVNhbHQ7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtdGh1bWIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLWlucHV0OmNoZWNrZWQgKyAmX19zd2l0Y2gtdHJhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLWlucHV0OmNoZWNrZWQgKyAmX19zd2l0Y2gtdHJhY2sgJl9fc3dpdGNoLXRodW1iIHtcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMjNweCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcblxuICAgICAgICAmLS1hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1lbmRhXCIsIFwiQXJpYWwgQmxhY2tcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW46IDE2cHggMCA4cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgIH1cblxuICAgICZfX2FjdGlvbnMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3NsaWRlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19zbGlkZXItaW5wdXQtcm93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgICZfX3NsaWRlci1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19zbGlkZXItaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB9XG5cbiAgICAmX19zbGlkZXItdmFsdWUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiA0MnB4O1xuICAgIH1cblxuICAgICZfX3NsaWRlci1sYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAmX19zbGlkZXItZG90cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICZfX3NsaWRlci1kb3Qge1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgJl9fc2xpZGVyIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICAmOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcmlhYmxlcy4kZ3JheSB2YXIoLS1wcm9ncmVzcywgMCUpLCB0cmFuc3BhcmVudCB2YXIoLS1wcm9ncmVzcywgMCUpKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgdmFyaWFibGVzLiRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcmlhYmxlcy4kZ3JheSB2YXIoLS1wcm9ncmVzcywgMCUpLCB0cmFuc3BhcmVudCB2YXIoLS1wcm9ncmVzcywgMCUpKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl9faW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgJl9faW5wdXQtcG9zdGZpeCB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxufVxuIiwiJHByaW1hcnlDb2xvcjogIzBlMjZmZjtcbiRwcmltYXJ5TGlnaHQ6ICNkYWRkZmE7XG4kc2Vjb25kYXJ5Q29sb3I6ICNmZjU3MjE7XG4kc2Vjb25kYXJ5Q29sb3JMaWdodDogI2Y2ZTVlMDtcblxuJGNvcnJlY3Q6ICMxZWE0NDY7XG4kY29ycmVjdERhcms6ICMwZjUyMjM7XG4kY29ycmVjdExpZ2h0OiAjZTdmOGVkO1xuXG4kZXJyb3I6ICNkYzM2MmU7XG4kZXJyb3JEYXJrOiAjNjAxNDEwO1xuJGVycm9yTGlnaHQ6ICNmY2VlZWU7XG5cbiR3YXJuaW5nOiAjZGU2ODAwO1xuJHdhcm5pbmdEYXJrOiAjNGEyMTBhO1xuJHdhcm5pbmdMaWdodDogI2ZmZWVlOTtcblxuJGluZm86ICMzOTk4ZDM7XG4kaW5mb0Rhcms6ICMwMDRhNzc7XG4kaW5mb0xpZ2h0OiAjZWNmM2ZlO1xuXG4kYmxhY2s6ICMxODE4MTg7XG4kZ3JheTogIzczNzc3ZjtcbiR0YXVwZUdyYXk6ICM5NjkzOWU7XG4kZnJlbmNoR3JheTogI2MzYzZjZjtcbiRwbGF0aW51bTogI2UzZTNlMztcbiRhbnRpRmxhc2hXaGl0ZTogI2VlZWRmMTtcbiRzZWFTYWx0OiAjZjlmOWZjO1xuJHdoaXRlOiAjZmZmZmZmO1xuXG4kc21vb3RoQmV6aWVyOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40LCAwLjcsIDEpO1xuXG4kbWF4RXh0cmFTbWFsbDogNTk1cHg7XG4kbWluU21hbGw6IDYwMHB4O1xuJG1lZGl1bTogNzY4cHg7XG4kbGFyZ2U6IDg4OXB4O1xuJGNvbXB1dGVyczogMTIwMHB4O1xuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2xpcHBhZ2Utc2hlZXQvc2xpcHBhZ2Utc2hlZXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtBQ0RSOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0ZKO0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUNGUjtBRE1RO0VBQ0ksa0JBQUE7QUNKWjtBRFFJO0VBQ0ksNkJBQUE7RUFDQSxjRXBCRDtFRnFCQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkdBQ0k7QUNQWjtBRFVRO0VBQ0ksZUFBQTtBQ1JaO0FEV1E7RUFDSSxhRWxDTDtBRHlCUDtBRFlRO0VBQ0ksY0V2Q0o7RUZ3Q0kseUJFcENEO0FEMEJYO0FEWVk7RUFDSSxhRTNDUjtBRGlDUjtBRGNRO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ1paO0FEY1k7RUFDSSxhRWxESjtBRHNDWjtBRGlCSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNmUjtBRGtCSTtFQUNJLFdBQUE7QUNoQlI7QURrQlE7RUFDSSxtQkFBQTtBQ2hCWjtBRG9CSTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FDSTtBQ25CWjtBRHNCUTtFQUNJLG9DQUFBO0FDcEJaO0FEdUJRO0VBQ0ksb0NBQUE7QUNyQlo7QUR3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WFE7RUFDSSx5QkMzU0w7RUQ0U0ssbUJBQUE7RUFDQSxZQUFBO0FBa1haO0FBL1dRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQzdTSjtFRDhTSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWlYWjtBQTdXSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQStXUjtBQTVXSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBOFdSO0FBM1dJO0VBQ0ksY0M5VUE7RUQrVUEsa0JBQUE7QUE2V1I7QUFDQSxvanFDQUFvanFDIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4vdmFyaWFibGVzXCI7XG5cbi56ZWxmLWJ1dHRvbi1leHRlcm5hbC1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi56ZWxmLWJ1dHRvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGdhcDogOHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgICYtLW1hcmdpbi1yaWdodCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1oeXBlcmxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmLS1zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRoaW4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB9XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi56ZWxmLWJ1dHRvbi0taHlwZXJsaW5rIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1vdXRsaW5lZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXJlZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1uby1maWxsIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICB9XG59XG5cbi56ZWxmLWljb24tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGdhcDogMTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgd2lkdGg6IDU2cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYm9yZGVyLXNvZnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cblxuICAgICYtLTQwIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcblxuICAgICAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1oeXBlcmxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmLS1zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRyYW5zcGFyZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1uby1maWxsIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGV4dCB7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG4iLCJAdXNlIFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuQHVzZSBcIi4uLy4uL3N0eWxlcy9idXR0b25zXCI7XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uc2xpcHBhZ2Utc2hlZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcblxuICAgICZfX2V4aXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I1ODlmMDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2V4aXQtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2JvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgfVxuXG4gICAgJl9fc3dpdGNoLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgICZfX3N3aXRjaC1pbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtdHJhY2sge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA0NnB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2VhU2FsdDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX3N3aXRjaC10aHVtYiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCArICZfX3N3aXRjaC10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCArICZfX3N3aXRjaC10cmFjayAmX19zd2l0Y2gtdGh1bWIge1xuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyM3B4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmX19zd2l0Y2gtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuXG4gICAgICAgICYtLWFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWVuZGFcIiwgXCJBcmlhbCBCbGFja1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbjogMTZweCAwIDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgfVxuXG4gICAgJl9fYWN0aW9ucyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX3NsaWRlci1pbnB1dC1yb3cge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgJl9fc2xpZGVyLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgIH1cblxuICAgICZfX3NsaWRlci1pbnB1dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIH1cblxuICAgICZfX3NsaWRlci12YWx1ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtaW4td2lkdGg6IDQycHg7XG4gICAgfVxuXG4gICAgJl9fc2xpZGVyLWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgIH1cblxuICAgICZfX3NsaWRlci1kb3RzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgJl9fc2xpZGVyLWRvdCB7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAmX19zbGlkZXIge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyaWFibGVzLiRncmF5IHZhcigtLXByb2dyZXNzLCAwJSksIHRyYW5zcGFyZW50IHZhcigtLXByb2dyZXNzLCAwJSkpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyaWFibGVzLiRncmF5IHZhcigtLXByb2dyZXNzLCAwJSksIHRyYW5zcGFyZW50IHZhcigtLXByb2dyZXNzLCAwJSkpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LW1vei1yYW5nZS1wcm9ncmVzcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgdmFyaWFibGVzLiRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pbnB1dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAmX19pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAmX19pbnB1dC1wb3N0Zml4IHtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG59XG4iLCIkcHJpbWFyeUNvbG9yOiAjMGUyNmZmO1xuJHByaW1hcnlMaWdodDogI2RhZGRmYTtcbiRzZWNvbmRhcnlDb2xvcjogI2ZmNTcyMTtcbiRzZWNvbmRhcnlDb2xvckxpZ2h0OiAjZjZlNWUwO1xuXG4kY29ycmVjdDogIzFlYTQ0NjtcbiRjb3JyZWN0RGFyazogIzBmNTIyMztcbiRjb3JyZWN0TGlnaHQ6ICNlN2Y4ZWQ7XG5cbiRlcnJvcjogI2RjMzYyZTtcbiRlcnJvckRhcms6ICM2MDE0MTA7XG4kZXJyb3JMaWdodDogI2ZjZWVlZTtcblxuJHdhcm5pbmc6ICNkZTY4MDA7XG4kd2FybmluZ0Rhcms6ICM0YTIxMGE7XG4kd2FybmluZ0xpZ2h0OiAjZmZlZWU5O1xuXG4kaW5mbzogIzM5OThkMztcbiRpbmZvRGFyazogIzAwNGE3NztcbiRpbmZvTGlnaHQ6ICNlY2YzZmU7XG5cbiRibGFjazogIzE4MTgxODtcbiRncmF5OiAjNzM3NzdmO1xuJHRhdXBlR3JheTogIzk2OTM5ZTtcbiRmcmVuY2hHcmF5OiAjYzNjNmNmO1xuJHBsYXRpbnVtOiAjZTNlM2UzO1xuJGFudGlGbGFzaFdoaXRlOiAjZWVlZGYxO1xuJHNlYVNhbHQ6ICNmOWY5ZmM7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbiRzbW9vdGhCZXppZXI6IGN1YmljLWJlemllcigwLjI1LCAwLjQsIDAuNywgMSk7XG5cbiRtYXhFeHRyYVNtYWxsOiA1OTVweDtcbiRtaW5TbWFsbDogNjAwcHg7XG4kbWVkaXVtOiA3NjhweDtcbiRsYXJnZTogODg5cHg7XG4kY29tcHV0ZXJzOiAxMjAwcHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 53520:
/*!******************************************!*\
  !*** ./src/app/services/lifi.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LifiService: () => (/* binding */ LifiService)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ 27471);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ 90374);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ 29929);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ 6171);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 57878);
/* harmony import */ var app_solana_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/solana.service */ 98010);








class LifiService {
  _http;
  _solanaService;
  ERC20_ABI = [{
    name: "approve",
    inputs: [{
      name: "spender",
      type: "address"
    }, {
      name: "amount",
      type: "uint256"
    }],
    outputs: [{
      name: "",
      type: "bool"
    }],
    stateMutability: "nonpayable",
    type: "function"
  }, {
    name: "allowance",
    inputs: [{
      name: "owner",
      type: "address"
    }, {
      name: "spender",
      type: "address"
    }],
    outputs: [{
      name: "amount",
      type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
  }];
  constructor(_http, _solanaService) {
    this._http = _http;
    this._solanaService = _solanaService;
  }
  get MIN_PRICE_USD() {
    return 0.01;
  }
  get LIFI_API_URL() {
    return `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/api/lifi`;
  }
  get chainIdToSymbol() {
    return {
      "1": "ETH",
      "137": "POL",
      "43114": "AVAX",
      "56": "BNB"
    };
  }
  get lifiChainSymbols() {
    return ["eth", "ava", "sol", "pol", "bsc"];
  }
  /**
   * Format amount to avoid scientific notation
   */
  _formatAmount(amount) {
    const numAmount = parseFloat(amount);
    if (numAmount < 0.000001 && numAmount > 0) return numAmount.toFixed(18).replace(/\.?0+$/, "");
    return numAmount.toString();
  }
  requestTokens() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const defaultResponse = {
        data: {
          tokens: {}
        }
      };
      try {
        const {
          data: standardResponse
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this._http.get(`${_this.LIFI_API_URL}/tokens`, {
          params: {
            chains: "ETH,AVA,SUI",
            minPriceUSD: _this.MIN_PRICE_USD
          }
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.warn("Failed to fetch standard tokens:", err);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(defaultResponse);
        })));
        const {
          data: solanaResponse
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this._http.get(`${_this.LIFI_API_URL}/tokens`, {
          params: {
            chains: "SOL",
            chainTypes: "SVM",
            minPriceUSD: _this.MIN_PRICE_USD
          }
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
          console.warn("Failed to fetch Solana tokens:", err);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(defaultResponse);
        })));
        const result = {
          tokens: {
            ...(standardResponse.tokens || {})
          }
        };
        if (solanaResponse?.tokens) {
          result.tokens.SOL = solanaResponse.tokens?.SOL || solanaResponse.tokens?.sol || [];
          if (!result.tokens.SOL.length) result.tokens.SOL = Object.values(solanaResponse.tokens).flat();
        }
        return result;
      } catch (error) {
        console.error("Error in requestTokens:", error);
        return {
          tokens: {}
        };
      }
    })();
  }
  getTokens() {
    const chains = this.lifiChainSymbols;
    const combined = {};
    return this._http.get(`${this.LIFI_API_URL}/tokens`, {
      params: {
        chains: chains.join(","),
        minPriceUSD: this.MIN_PRICE_USD
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(result => {
      if (!result?.data?.tokens) return combined;
      chains.forEach(chain => {
        const chainSymbol = this.chainIdToSymbol[chain];
        if (!chainSymbol) return;
        combined[chainSymbol] = result.data.tokens[chain] || [];
      });
      return combined;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error("Error in combined token request:", error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(combined);
    }));
  }
  /**
   * Get the chain identifier for LiFi API
   */
  getChainIdentifier(network) {
    switch (network.toLowerCase()) {
      case "ethereum":
        return "ETH";
      case "polygon":
        return "POL";
      case "binance":
        return "BNB";
      case "avalanche":
        return "AVA";
      case "solana":
        return "SOL";
      default:
        return network.toUpperCase();
    }
  }
  /**
   * Format amount with proper decimals
   */
  formatAmount(amount, decimals) {
    try {
      const amountStr = String(amount);
      const amountBN = ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits(amountStr, decimals);
      return amountBN.toString();
    } catch (error) {
      console.error("Error formatting amount:", error);
      return "0";
    }
  }
  /**
   * Execute a swap transaction
   */
  executeSwap(quote, wallet) {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.JsonRpcProvider(_this2.getNetworkRPC(quote.action.fromChainId));
        const signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.Wallet(wallet.privateKey, provider);
        const NATIVE_TOKEN_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
        const isFromNative = quote.action.fromToken.address.toLowerCase() === NATIVE_TOKEN_ADDRESS.toLowerCase() || quote.action.fromToken.address.toLowerCase() === ZERO_ADDRESS.toLowerCase();
        const feeData = yield provider.getFeeData();
        const nonce = yield provider.getTransactionCount(signer.address, "latest");
        const tx = {
          to: quote.transactionRequest.to,
          data: quote.transactionRequest.data,
          nonce: nonce,
          value: isFromNative ? quote.transactionRequest.value : "0",
          maxFeePerGas: feeData.maxFeePerGas,
          maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
          gasLimit: quote.transactionRequest.gasLimit ? BigInt(quote.transactionRequest.gasLimit) : ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits("800000", "wei")
        };
        if (!isFromNative) {
          yield _this2.checkAndSetAllowance(quote.action.fromToken.address, quote.estimate.approvalAddress, quote.action.fromAmount, wallet.address, wallet.privateKey, quote.action.fromChainId.toString());
        }
        yield new Promise(resolve => setTimeout(resolve, 1000));
        const latestNonce = yield provider.getTransactionCount(signer.address, "latest");
        tx.nonce = latestNonce;
        const transaction = yield signer.sendTransaction(tx);
        try {
          const receipt = yield transaction.wait();
          return {
            ...(receipt || {}),
            transactionHash: receipt?.hash || transaction?.hash
          };
        } catch (error) {
          return {
            ...transaction,
            transactionHash: transaction.hash
          };
        }
      } catch (error) {
        console.error("Detailed swap execution error:", error);
        throw error;
      }
    })();
  }
  checkAndSetAllowance(tokenAddress, spender, amount, owner, privateKey, network) {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.JsonRpcProvider(_this3.getNetworkRPC(network));
        const signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.Wallet(privateKey, provider);
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_10__.Contract(tokenAddress, _this3.ERC20_ABI, signer);
        const currentAllowance = yield contract.allowance.staticCall(owner, spender);
        if (BigInt(currentAllowance.toString()) < BigInt(amount)) {
          const feeData = yield provider.getFeeData();
          const tx = yield contract.approve(spender, amount, {
            gasLimit: ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits("200000", "wei"),
            maxFeePerGas: feeData.maxFeePerGas,
            maxPriorityFeePerGas: feeData.maxPriorityFeePerGas
          });
          yield tx.wait();
        }
      } catch (error) {
        console.error("Error in checkAndSetAllowance:", error);
        throw error;
      }
    })();
  }
  getNetworkRPC(chainId) {
    const networkMappings = {
      "1": environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ethereumRpc.mainnet,
      "137": environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.polygonRpc.mainnet,
      "43114": environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.avalancheRpc.mainnet
    };
    const rpc = networkMappings[chainId.toString()];
    if (!rpc) throw new Error(`Unsupported network: ${chainId}`);
    return rpc;
  }
  sendTransaction(params) {
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.JsonRpcProvider(params.network);
        const signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.Wallet(params.privateKey, provider);
        const gasEstimate = yield provider.estimateGas({
          to: params.to,
          data: params.data,
          value: params.value
        });
        const feeData = yield provider.getFeeData();
        const tx = {
          to: params.to,
          data: params.data,
          value: params.value,
          gasLimit: ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits(Math.floor(Number(gasEstimate) * 1.2).toString(), "wei"),
          maxFeePerGas: feeData.maxFeePerGas,
          maxPriorityFeePerGas: feeData.maxPriorityFeePerGas
        };
        const transaction = yield signer.sendTransaction(tx);
        try {
          const receipt = yield transaction.wait();
          return {
            ...(receipt || {}),
            transactionHash: receipt?.hash || transaction?.hash
          };
        } catch (error) {
          return {
            ...transaction,
            transactionHash: transaction.hash
          };
        }
      } catch (error) {
        console.error("Error sending transaction:", error);
        throw error;
      }
    })();
  }
  getTokenImage(token) {
    if (token.image?.startsWith("http")) return token.image;
    return `assets/tokens/placeholder-coin.png`;
  }
  /**
   * Get the correct token address for the given network and symbol
   */
  getTokenAddress(network, symbol, contractAddress) {
    if (network.toLowerCase() === "solana") {
      const solanaTokens = {
        SOL: "So11111111111111111111111111111111111111112"
      };
      if (solanaTokens[symbol.toUpperCase()]) {
        return solanaTokens[symbol.toUpperCase()];
      }
      if (contractAddress && !contractAddress.startsWith("0x")) {
        return contractAddress;
      }
      console.warn(`Token ${symbol} no reconocido en Solana, usando SOL nativo como fallback`);
      return "So11111111111111111111111111111111111111112";
    }
    if (["ETH", "AVAX", "BNB", "MATIC"].includes(symbol.toUpperCase())) {
      return "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
    }
    return contractAddress;
  }
  getSwapGasCost(swapQuote) {
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return {
          gasLimit: "300000",
          gasPrice: "3000000000",
          maxFeePerGas: "4000000000",
          maxPriorityFeePerGas: "2000000000"
        };
      } catch (error) {
        console.error("Error estimating swap gas:", error);
        throw error;
      }
    })();
  }
  /**
   * Get routes for token swap including Solana support
   */
  getRoutes(fromChain, fromToken, toChain, toToken, fromAmount, fromAddress, toAddress, slippage = 3) {
    const requestBody = {
      fromChainId: fromChain,
      fromAmount,
      toChainId: toChain,
      fromTokenAddress: fromToken,
      toTokenAddress: toToken,
      fromAddress,
      toAddress,
      options: {
        slippage: slippage / 100
      }
    };
    return this._http.post(`${this.LIFI_API_URL}/advanced/routes`, requestBody);
  }
  /**
   * Get a quote for a swap
   */
  getQuote(fromChain, fromToken, toChain, toToken, fromAmount, fromAddress, slippage) {
    const formattedAmount = this._formatAmount(fromAmount.toString());
    const params = {
      fromChain,
      fromToken,
      toChain,
      toToken,
      fromAmount: formattedAmount,
      fromAddress,
      slippage: slippage.toString()
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this._http.get(`${this.LIFI_API_URL}/quote`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
      const quote = response.data;
      if (fromToken.toLowerCase().includes("usdc") && toToken.toLowerCase().includes("sol")) {
        const usdcAmount = parseFloat(formattedAmount);
        const solPrice = 146;
        const expectedSolAmount = usdcAmount / solPrice;
        if (quote.estimate) {
          quote.estimate.toAmount = expectedSolAmount.toFixed(9);
          quote.estimate.toAmountMin = (expectedSolAmount * 0.99).toFixed(9);
        }
      }
      return quote;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error("Error getting quote:", error);
      throw error;
    })));
  }
  executeSwapWithApproval(quote, wallet, sourceNetwork, sourceToken, targetToken) {
    var _this4 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!quote || !quote.estimate || Number(quote.estimate.toAmount) === 0) {
          console.error("No hay ruta de swap o liquidez insuficiente. Aborting swap.");
          throw new Error("No hay ruta de swap o liquidez insuficiente");
        }
        if (sourceNetwork === "avalanche") {
          return _this4.executeDirectSwap(wallet, sourceNetwork, sourceToken, targetToken, quote.action.fromAmount);
        }
      } catch (error) {
        console.error("Error ejecutando swap:", error);
        throw error;
      }
    })();
  }
  executeDirectSwap(wallet, sourceNetwork, sourceToken, targetToken, amount) {
    var _this5 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const ROUTER_ADDRESS = "0x60aE616a2155Ee3d9A68541Ba4544862310933d4";
        const WAVAX_ADDRESS = "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
        const ROUTER_ABI = [{
          inputs: [{
            name: "amountIn",
            type: "uint256"
          }, {
            name: "amountOutMin",
            type: "uint256"
          }, {
            name: "path",
            type: "address[]"
          }, {
            name: "to",
            type: "address"
          }, {
            name: "deadline",
            type: "uint256"
          }],
          name: "swapExactTokensForTokens",
          outputs: [{
            name: "amounts",
            type: "uint256[]"
          }],
          type: "function"
        }, {
          inputs: [{
            name: "amountIn",
            type: "uint256"
          }, {
            name: "amountOutMin",
            type: "uint256"
          }, {
            name: "path",
            type: "address[]"
          }, {
            name: "to",
            type: "address"
          }, {
            name: "deadline",
            type: "uint256"
          }],
          name: "swapExactTokensForAVAX",
          outputs: [{
            name: "amounts",
            type: "uint256[]"
          }],
          type: "function"
        }, {
          inputs: [{
            name: "amountOutMin",
            type: "uint256"
          }, {
            name: "path",
            type: "address[]"
          }, {
            name: "to",
            type: "address"
          }, {
            name: "deadline",
            type: "uint256"
          }],
          name: "swapExactAVAXForTokens",
          outputs: [{
            name: "amounts",
            type: "uint256[]"
          }],
          stateMutability: "payable",
          type: "function"
        }];
        const rpcUrl = _this5.getNetworkRPC(sourceNetwork);
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.JsonRpcProvider(rpcUrl);
        const privateKey = wallet.privateKey.startsWith("0x") ? wallet.privateKey : ethers__WEBPACK_IMPORTED_MODULE_9__.Wallet.fromPhrase(wallet.mnemonic.trim().toLowerCase()).privateKey;
        const signer = new ethers__WEBPACK_IMPORTED_MODULE_9__.Wallet(privateKey, provider);
        const router = new ethers__WEBPACK_IMPORTED_MODULE_10__.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer);
        const deadline = Math.floor(Date.now() / 1000) + 1200;
        const isSourceNative = !sourceToken.address || sourceToken.address === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        const isTargetNative = !targetToken.address || targetToken.address === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        try {
          if (isSourceNative && !isTargetNative) {
            const path = [WAVAX_ADDRESS, targetToken.address];
            return yield router.swapExactAVAXForTokens(ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits(amount, "wei"), ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits("1", "wei"), path, signer.address, deadline);
          } else if (!isSourceNative && isTargetNative) {
            const path = [sourceToken.address, WAVAX_ADDRESS];
            yield _this5.approveToken(sourceToken.address, signer.address, ROUTER_ADDRESS, amount, privateKey, sourceNetwork);
            yield new Promise(resolve => setTimeout(resolve, 5000));
            return yield router.swapExactTokensForAVAX(ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits(amount, "wei"), ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits("1", "wei"), path, signer.address, deadline);
          } else if (!isSourceNative && !isTargetNative) {
            const path = [sourceToken.address, WAVAX_ADDRESS, targetToken.address];
            yield _this5.approveToken(sourceToken.address, signer.address, ROUTER_ADDRESS, amount, privateKey, sourceNetwork);
            yield new Promise(resolve => setTimeout(resolve, 5000));
            return yield router.swapExactTokensForTokens(ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits(amount, "wei"), ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits("1", "wei"), path, signer.address, deadline);
          } else {
            throw new Error("Tipo de swap inválido: AVAX a AVAX");
          }
        } catch (error) {
          console.error("Error ejecutando swap directo:", error);
          throw new Error("Error en la transacción: " + error.message || 0);
        }
      } catch (error) {
        console.error("Error ejecutando swap directo:", error);
        throw error;
      }
    })();
  }
  approveToken(tokenAddress, owner, spender, amount, privateKey, network) {
    var _this6 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.checkAndSetAllowance(tokenAddress, spender, amount, owner, privateKey, network);
    })();
  }
  /**
   * Execute a swap on Solana
   */
  executeSolanaSwap(quote, wallet, mnemonic) {
    var _this7 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!quote) throw new Error("Invalid quote for Solana swap: Quote is null or undefined");
        let step;
        if (quote.steps && quote.steps.length > 0) {
          step = quote.steps[0];
        } else if (quote.tool) {
          step = quote;
        } else if (quote.includedSteps && quote.includedSteps.length > 0) {
          step = quote.includedSteps[0];
        } else throw new Error("Invalid quote structure: No steps or direct quote found");
        if (!step.tool) throw new Error("Invalid step: Missing tool information");
        if (!quote.estimate || !quote.estimate.toAmount || parseFloat(quote.estimate.toAmount) <= 0) {
          throw new Error("Invalid quote: The estimated output amount is zero or missing");
        }
        if (!wallet || !wallet.solanaAddress) throw new Error("Wallet address is required for Solana swap");
        const requestBody = {
          ...quote,
          fromAddress: wallet.solanaAddress,
          toAddress: wallet.solanaAddress,
          slippage: quote.slippage || 1
        };
        const {
          data: txResponse
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this7._http.post(`${_this7.LIFI_API_URL}/execute-advanced-step-transaction`, requestBody));
        if (!txResponse || !txResponse.transactionRequest) throw new Error("Failed to get transaction data");
        const transactionData = txResponse.transactionRequest.data;
        if (!transactionData) throw new Error("No transaction data received");
        if (!mnemonic) throw new Error("Mnemonic phrase is required for signing Solana transactions");
        try {
          const cleanMnemonic = mnemonic.trim();
          const signature = yield _this7._solanaService.sendSerializedTransaction(cleanMnemonic, transactionData);
          yield new Promise(resolve => setTimeout(resolve, 2000));
          return {
            status: "SUCCESS",
            message: "Transaction successfully executed",
            transactionHash: signature,
            transactionData: transactionData,
            network: "solana",
            fromToken: quote.action?.fromToken?.symbol || "",
            toToken: quote.action?.toToken?.symbol || "",
            fromAmount: quote.action?.fromAmount || "0",
            toAmount: quote.estimate?.toAmount || "0",
            fromAddress: wallet.solanaAddress,
            toAddress: wallet.solanaAddress
          };
        } catch (error) {
          console.error("Error in Solana transaction:", error);
          if (error.message && error.message.includes("Fondos insuficientes")) {
            throw new Error("Para realizar un swap en Solana, necesitas tener al menos 0.002 SOL para cubrir las tarifas de red y la creación de cuentas de token. Por favor, añade SOL a tu cuenta e inténtalo de nuevo.");
          }
          if (error.message && (error.message.includes("Instruction") || error.message.includes("Program Error"))) {
            throw new Error("La transacción falló en la blockchain de Solana. Esto puede deberse a slippage, liquidez insuficiente o problemas con las cuentas de token. Por favor, intenta con un monto menor o un slippage mayor.");
          }
          if (error.message && error.message.includes("expired")) {
            throw new Error("La transacción expiró antes de ser confirmada. Esto puede deberse a congestión en la red. Por favor, intenta nuevamente.");
          }
          throw error;
        }
      } catch (error) {
        console.error("Error executing Solana swap:", error);
        throw error;
      }
    })();
  }
  static ɵfac = function LifiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LifiService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](app_solana_service__WEBPACK_IMPORTED_MODULE_2__.SolanaService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: LifiService,
    factory: LifiService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 84412:
/*!**********************************************************!*\
  !*** ./src/app/swap-currency/swap-currency.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwapCurrencyComponent: () => (/* binding */ SwapCurrencyComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 49074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 45901);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var app_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/asset.service */ 25931);
/* harmony import */ var app_services_lifi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/lifi.service */ 53520);
/* harmony import */ var app_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/network.service */ 32404);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/wallet.service */ 69556);















const _c0 = ["assetsContainer"];
const _c1 = a0 => ({
  "zelf-button--black": a0
});
const _c2 = a0 => ({
  "swap-currency__asset--selected": a0
});
function SwapCurrencyComponent_form_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function SwapCurrencyComponent_form_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SwapCurrencyComponent_form_0_button_8_Template_button_click_0_listener() {
      const network_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.toggleNetworkFilter(network_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const network_r3 = ctx.$implicit;
    const t_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ((tmp_6_0 = ctx_r3.form.get("networkFilter")) == null ? null : tmp_6_0.value) === network_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", network_r3 === "all" ? t_r5("common.all") : network_r3, " ");
  }
}
function SwapCurrencyComponent_form_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SwapCurrencyComponent_form_0_div_11_Template_div_click_0_listener() {
      const asset_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.selectAsset(asset_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 17)(2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function SwapCurrencyComponent_form_0_div_11_Template_img_error_2_listener() {
      const asset_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onImageError(asset_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 19)(4, "p", 20)(5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 24)(12, "div", 19)(13, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const asset_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c2, asset_r7.name === ctx_r3.selectedAsset.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("alt", asset_r7.symbol)("src", asset_r7.image || "assets/tokens/placeholder-coin.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](asset_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](asset_r7.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](asset_r7.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 8, asset_r7.amount, "1.2-8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](18, 11, asset_r7.fiatBalance, "USD", "symbol", "1.2-2"));
  }
}
function SwapCurrencyComponent_form_0_zelf_loader_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "zelf-loader");
  }
}
function SwapCurrencyComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SwapCurrencyComponent_form_0_ng_container_6_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SwapCurrencyComponent_form_0_button_8_Template, 2, 4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 12, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function SwapCurrencyComponent_form_0_Template_div_scroll_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SwapCurrencyComponent_form_0_div_11_Template, 19, 18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SwapCurrencyComponent_form_0_zelf_loader_12_Template, 1, 0, "zelf-loader", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const search_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", t_r5("common.search"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", search_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.networkOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.displayedAssets);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.loading);
  }
}
function SwapCurrencyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class SwapCurrencyComponent {
  _assetService;
  _destroyRef;
  _fb;
  _lifiService;
  _networkService;
  _walletService;
  _cdr;
  assetsContainer;
  source = "source";
  selectedAsset = {};
  myAssets = [];
  showAllTokens = true;
  assetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  _pageSize = 40;
  _myAssetsMap = {};
  assets = [];
  form;
  loading = false;
  maxPage = 1;
  minPage = 1;
  networkOptions = [];
  selectedNetworkFilter = "all";
  constructor(_assetService, _destroyRef, _fb, _lifiService, _networkService, _walletService, _cdr) {
    this._assetService = _assetService;
    this._destroyRef = _destroyRef;
    this._fb = _fb;
    this._lifiService = _lifiService;
    this._networkService = _networkService;
    this._walletService = _walletService;
    this._cdr = _cdr;
    this.loading = true;
    this._initNetworkOptions();
    this._initForm();
  }
  _initNetworkOptions() {
    this.networkOptions = ["all", ...Object.keys(this._assetService.canSwap).map(networkSymbol => {
      const canSwap = this._assetService.canSwap[networkSymbol];
      if (!canSwap) return "";
      const networkName = this._networkService.getNetworkName(networkSymbol);
      return networkName;
    }).filter(networkName => networkName !== "" && networkName !== undefined && networkName !== null)];
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this._initializeAssets();
      } catch (error) {
        console.error("Error in ngOnInit:", error);
      } finally {
        _this.loading = false;
      }
    })();
  }
  get displayedAssets() {
    return this.filteredAssets.slice(this.minPage - 1, this.maxPage * this._pageSize);
  }
  get filteredAssets() {
    return this.assets.filter(asset => {
      if (!asset) return false;
      const selectedNetwork = this.form.get("networkFilter")?.value?.toLowerCase();
      const matchesNetwork = selectedNetwork === "all" || asset.network?.toLowerCase() === selectedNetwork;
      const searchText = this.form.get("textFilter")?.value?.toLowerCase() || "";
      const matchesText = !searchText || asset.name && asset.name.toLowerCase().includes(searchText) || asset.symbol && asset.symbol.toLowerCase().includes(searchText);
      return matchesNetwork && matchesText;
    });
  }
  get myAssetsMap() {
    return this._myAssetsMap;
  }
  _fetchAndMapTokens() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      try {
        const allTokens = [];
        const {
          tokens
        } = yield _this2._lifiService.requestTokens();
        if (!tokens || !Object.keys(tokens).length) return allTokens;
        Object.entries(tokens).forEach(([chainId, tokens]) => _this2._mapTokenResponse([chainId, tokens], allTokens));
        allTokens.sort(_this2._sortAssets);
        _this2.assets = [...allTokens].sort((a, b) => _this2._sortAssets(a, b));
        _this2._resetPaging();
        _this2.loading = false;
        return _this2.assets;
      } catch (error) {
        _this2.loading = false;
        _this2.assets = [];
        _this2._resetPaging();
        return [];
      }
    })();
  }
  _getNetworkFromChainId(chainId) {
    const networkMap = {
      1: "ethereum",
      43114: "avalanche",
      137: "polygon",
      56: "binance",
      42161: "arbitrum",
      SOL: "solana"
    };
    return networkMap[chainId] || "unknown";
  }
  _initForm() {
    this.form = this._fb.group({
      textFilter: [""],
      networkFilter: ["all"]
    });
    this.form.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this._destroyRef)).subscribe(() => this._resetPaging());
  }
  _initializeAssets() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3._setMyAssetsMap(_this3.myAssets);
      try {
        yield _this3._fetchAndMapTokens();
      } catch (error) {}
      _this3._resetPaging();
      _this3.loading = false;
    })();
  }
  _mapTokenResponse = ([chainId, tokens], allTokens) => {
    if (!Array.isArray(tokens)) return;
    const chainMap = {};
    const network = this._getNetworkFromChainId(chainId);
    const canSwap = this._assetService.canSwap[this._networkService.getNetworkSymbol(network)];
    if (!canSwap) return;
    const chainTokens = [];
    tokens.forEach(token => {
      const key = `${token.symbol.toLowerCase()}-${network}`;
      if (chainMap[key]) return;
      chainMap[key] = true;
      let myAsset = {};
      if (this._myAssetsMap[key]) myAsset = this._myAssetsMap[key];
      const asset = {
        amount: "0",
        balance: "0",
        balanceUsd: "0",
        chainId,
        decimals: token.decimals,
        fiatBalance: "0",
        tokenType: "token",
        ...myAsset,
        contractAddress: token.address,
        image: token.logoURI || "",
        name: token.name,
        network: network.charAt(0).toUpperCase() + network.slice(1),
        price: token.priceUSD ? parseFloat(token.priceUSD) : 0,
        symbol: token.symbol
      };
      if (asset.image) this._walletService.setAssetImage(asset.symbol, asset.image);
      chainTokens.push(asset);
    });
    allTokens.push(...chainTokens);
  };
  _resetPaging() {
    this.minPage = 1;
    this.maxPage = 1;
  }
  _setMyAssetsMap(assets) {
    this._myAssetsMap = assets.reduce((acc, asset) => {
      const key = `${asset.symbol.toLowerCase()}-${asset.network.toLowerCase()}`;
      acc[key] = asset;
      return acc;
    }, {});
  }
  _sortAssets(a, b) {
    const aBalance = parseFloat(`${a.fiatBalance}` || "0");
    const bBalance = parseFloat(`${b.fiatBalance}` || "0");
    if (!aBalance && !bBalance) return a.priceUSD?.localeCompare(b.priceUSD) || 0;
    return bBalance - aBalance;
  }
  getAssetImage(asset) {
    return this._walletService.getAssetImage(asset.symbol, asset.image);
  }
  isNetworkSelected(network) {
    return this.selectedNetworkFilter === network;
  }
  onImageError(asset) {
    asset.image = "assets/tokens/placeholder-coin.png";
  }
  onScroll(event) {
    const el = event.target;
    const threshold = 20;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
    const atTop = el.scrollTop <= threshold;
    if (atBottom && this.maxPage * this._pageSize < this.filteredAssets.length) {
      this.maxPage++;
      if (this.maxPage - this.minPage + 1 > 2) this.minPage++;
    } else if (atTop && this.minPage > 1) {
      this.minPage--;
      if (this.maxPage - this.minPage + 1 > 2) this.maxPage--;
    } else return;
  }
  selectAsset(asset) {
    this.assetChange.emit({
      asset,
      source: this.source
    });
  }
  toggleNetworkFilter(network) {
    this.selectedNetworkFilter = network;
    this.form.patchValue({
      networkFilter: network
    });
  }
  static ɵfac = function SwapCurrencyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SwapCurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_asset_service__WEBPACK_IMPORTED_MODULE_2__.AssetService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.DestroyRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_lifi_service__WEBPACK_IMPORTED_MODULE_3__.LifiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_network_service__WEBPACK_IMPORTED_MODULE_4__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_5__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SwapCurrencyComponent,
    selectors: [["swap-currency"]],
    viewQuery: function SwapCurrencyComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.assetsContainer = _t.first);
      }
    },
    inputs: {
      source: "source",
      selectedAsset: "selectedAsset",
      myAssets: "myAssets",
      showAllTokens: "showAllTokens"
    },
    outputs: {
      assetChange: "assetChange"
    },
    decls: 3,
    vars: 0,
    consts: [["search", ""], ["assetsContainer", ""], ["class", "swap-currency", 3, "formGroup", 4, "transloco"], [1, "swap-currency", 3, "formGroup"], [1, "swap-currency__filters"], [1, "swap-currency__filter"], [1, "zelf-input", "zelf-input--wide"], ["formControlName", "textFilter", "id", "textFilter", "name", "textFilter", "required", "", "type", "text", 1, "zelf-input__control", 3, "placeholder"], [1, "zelf-input__postfix", "swap-currency__search-icon"], [4, "ngTemplateOutlet"], [1, "swap-currency__network-filters"], ["class", "zelf-button zelf-button--pill swap-currency__network-filter", "mat-flat-button", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "swap-currency__assets", 3, "scroll"], ["class", "swap-currency__asset", "md-ripple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-flat-button", "", 1, "zelf-button", "zelf-button--pill", "swap-currency__network-filter", 3, "click", "ngClass"], ["md-ripple", "", 1, "swap-currency__asset", 3, "click", "ngClass"], [1, "swap-currency__asset-info", "swap-currency__asset-info--left"], [1, "swap-currency__asset-image", 3, "error", "alt", "src"], [1, "swap-currency__asset-col"], [1, "swap-currency__asset-name"], [1, "swap-currency__asset-name-text"], [1, "zelf-chip", "zelf-chip--pill"], [1, "swap-currency__asset-symbol"], [1, "swap-currency__asset-info", "swap-currency__asset-info--right"], [1, "swap-currency__asset-balance"], [1, "swap-currency__asset-balance-fiat"], ["viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z"]],
    template: function SwapCurrencyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SwapCurrencyComponent_form_0_Template, 13, 6, "form", 2)(1, SwapCurrencyComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.M, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_1__.ZelfLoaderComponent],
    styles: [".zelf-button-external-link[_ngcontent-%COMP%] {\n  display: block;\n}\n.zelf-button-external-link--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.zelf-button[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  height: 56px;\n  justify-content: center;\n  outline: none;\n  padding: 8px 24px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.zelf-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-button__text--margin-right[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-button--thin[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n.zelf-button--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.zelf-button--wide.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #73777f !important;\n  color: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--white[_ngcontent-%COMP%]:focus, .zelf-button--white[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--white[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%] {\n  border: 1px solid #181818 !important;\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--outlined[_ngcontent-%COMP%]:focus, .zelf-button--outlined[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--outlined[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--red[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: transparent !important;\n  color: #dc362e !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--red[_ngcontent-%COMP%]:focus, .zelf-button--red[_ngcontent-%COMP%]:hover {\n  background-color: #fceeee !important;\n}\n.zelf-button--red[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e;\n}\n.zelf-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n}\n\n.zelf-icon-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  align-items: center;\n  background-color: #eeedf1 !important;\n  border-radius: 56px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  gap: 16px;\n  height: 56px;\n  justify-content: center;\n  min-height: 56px;\n  min-width: 56px;\n  outline: none;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 56px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-icon-button.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n  height: 24px;\n  width: 24px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 40px;\n  padding: 0 8px;\n}\n.zelf-icon-button--40.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e !important;\n  stroke: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #73777f !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #181818 !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]:focus, .zelf-icon-button--transparent[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--text[_ngcontent-%COMP%] {\n  width: auto !important;\n  min-width: initial !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-icon-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n  width: auto;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  flex: 1 1 auto;\n}\n\n.swap-currency[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 100%;\n  flex: 1 1 auto;\n  height: 100%;\n}\n.swap-currency__loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n  z-index: 100;\n}\n.swap-currency__filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  width: 100%;\n}\n.swap-currency__filter[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n.swap-currency__search-icon[_ngcontent-%COMP%] {\n  color: #73777f;\n  margin-right: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.swap-currency__search-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: #73777f;\n}\n.swap-currency__network-filters[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  max-width: 100%;\n  gap: 8px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n}\n.swap-currency__network-filter[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 51px;\n  gap: 8px;\n  height: 36px;\n  min-height: 36px;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n}\n.swap-currency__assets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n  flex: 1 1 auto;\n  height: 100%;\n  max-height: 490px;\n  overflow-y: auto;\n}\n.swap-currency__asset[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  gap: 16px;\n  align-items: center;\n  flex: 1 1 auto;\n  cursor: pointer;\n  padding: 16px;\n  max-height: 72px;\n  border-radius: 16px;\n  box-sizing: border-box;\n  transition: background-color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.swap-currency__asset[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1;\n}\n.swap-currency__asset--selected[_ngcontent-%COMP%] {\n  background-color: #eeedf1;\n}\n.swap-currency__asset-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.swap-currency__asset-info--left[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex: 1 1 auto;\n  width: 100%;\n}\n.swap-currency__asset-info--right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  flex: 0 0 auto;\n}\n.swap-currency__asset-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.swap-currency__asset-col--right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.swap-currency__asset-image[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  border-radius: 32px;\n  object-fit: contain;\n  overflow: hidden;\n}\n.swap-currency__asset-name[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: left;\n  vertical-align: middle;\n  color: #181818;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.swap-currency__asset-name-text[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 240px;\n}\n.swap-currency__asset-symbol[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  color: #73777f;\n  margin: 0;\n}\n.swap-currency__asset-balance[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  color: #181818;\n  margin: 0;\n  text-align: right;\n}\n.swap-currency__asset-balance-fiat[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0.1px;\n  color: #73777f;\n  margin: 0;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fYnV0dG9ucy5zY3NzIiwic3dhcC1jdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUUvRUo7QUR5RFI7QUR5QlE7RUFDSSx3QkFBQTtFQUNBLDBCQUFBO0FDdkJaO0FE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LDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUF3WVo7QUFyWVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUF1WVo7QUFuWUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBcVlSO0FBbllRO0VBQ0kseUJBQUE7QUFxWVo7QUFqWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW1ZUjtBQWhZSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3JJQTtFRHNJQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFrWVI7QUEvWEk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlZUjtBQTlYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0N6SkQ7RUQwSkMsU0FBQTtBQWdZUjtBQTdYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDcEtBO0VEcUtBLFNBQUE7RUFDQSxpQkFBQTtBQStYUjtBQTVYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDOUtEO0VEK0tDLFNBQUE7RUFDQSxpQkFBQTtBQThYUiIsImZpbGUiOiJzd2FwLWN1cnJlbmN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4vdmFyaWFibGVzXCI7XG5cbi56ZWxmLWJ1dHRvbi1leHRlcm5hbC1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi56ZWxmLWJ1dHRvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGdhcDogOHB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgICYtLW1hcmdpbi1yaWdodCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1oeXBlcmxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmLS1zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRoaW4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB9XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi56ZWxmLWJ1dHRvbi0taHlwZXJsaW5rIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1vdXRsaW5lZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXJlZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1uby1maWxsIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICB9XG59XG5cbi56ZWxmLWljb24tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGdhcDogMTZweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTZweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgd2lkdGg6IDU2cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYm9yZGVyLXNvZnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIH1cblxuICAgICYtLTQwIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcblxuICAgICAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1oeXBlcmxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmLS1zbWFsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW07XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRyYW5zcGFyZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1uby1maWxsIHtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGV4dCB7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcGlsbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG4iLCJAdXNlIFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xuQHVzZSBcIi4uLy4uL3N0eWxlcy9idXR0b25zXCI7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc3dhcC1jdXJyZW5jeSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJl9fbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuXG4gICAgJl9fZmlsdGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fZmlsdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fc2VhcmNoLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX25ldHdvcmstZmlsdGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICB9XG5cbiAgICAmX19uZXR3b3JrLWZpbHRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1pbi13aWR0aDogNTFweDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgICZfX2Fzc2V0cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNDkwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgJl9fYXNzZXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Fzc2V0LWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmLS1sZWZ0IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1yaWdodCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hc3NldC1jb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAmLS1yaWdodCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtbmFtZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LW5hbWUtdGV4dCB7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LXN5bWJvbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICZfX2Fzc2V0LWJhbGFuY2Uge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgICZfX2Fzc2V0LWJhbGFuY2UtZmlhdCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG4iLCIkcHJpbWFyeUNvbG9yOiAjMGUyNmZmO1xuJHByaW1hcnlMaWdodDogI2RhZGRmYTtcbiRzZWNvbmRhcnlDb2xvcjogI2ZmNTcyMTtcbiRzZWNvbmRhcnlDb2xvckxpZ2h0OiAjZjZlNWUwO1xuXG4kY29ycmVjdDogIzFlYTQ0NjtcbiRjb3JyZWN0RGFyazogIzBmNTIyMztcbiRjb3JyZWN0TGlnaHQ6ICNlN2Y4ZWQ7XG5cbiRlcnJvcjogI2RjMzYyZTtcbiRlcnJvckRhcms6ICM2MDE0MTA7XG4kZXJyb3JMaWdodDogI2ZjZWVlZTtcblxuJHdhcm5pbmc6ICNkZTY4MDA7XG4kd2FybmluZ0Rhcms6ICM0YTIxMGE7XG4kd2FybmluZ0xpZ2h0OiAjZmZlZWU5O1xuXG4kaW5mbzogIzM5OThkMztcbiRpbmZvRGFyazogIzAwNGE3NztcbiRpbmZvTGlnaHQ6ICNlY2YzZmU7XG5cbiRibGFjazogIzE4MTgxODtcbiRncmF5OiAjNzM3NzdmO1xuJHRhdXBlR3JheTogIzk2OTM5ZTtcbiRmcmVuY2hHcmF5OiAjYzNjNmNmO1xuJHBsYXRpbnVtOiAjZTNlM2UzO1xuJGFudGlGbGFzaFdoaXRlOiAjZWVlZGYxO1xuJHNlYVNhbHQ6ICNmOWY5ZmM7XG4kd2hpdGU6ICNmZmZmZmY7XG5cbiRzbW9vdGhCZXppZXI6IGN1YmljLWJlemllcigwLjI1LCAwLjQsIDAuNywgMSk7XG5cbiRtYXhFeHRyYVNtYWxsOiA1OTVweDtcbiRtaW5TbWFsbDogNjAwcHg7XG4kbWVkaXVtOiA3NjhweDtcbiRsYXJnZTogODg5cHg7XG4kY29tcHV0ZXJzOiAxMjAwcHg7XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3dhcC1jdXJyZW5jeS9zd2FwLWN1cnJlbmN5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JR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O0FBdFlJO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQXdZUjtBQXRZUTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUF3WVo7QUFyWVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUF1WVo7QUFuWUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBcVlSO0FBbllRO0VBQ0kseUJBQUE7QUFxWVo7QUFqWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW1ZUjtBQWhZSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3JJQTtFRHNJQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFrWVI7QUEvWEk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWlZUjtBQTlYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0N6SkQ7RUQwSkMsU0FBQTtBQWdZUjtBQTdYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDcEtBO0VEcUtBLFNBQUE7RUFDQSxpQkFBQTtBQStYUjtBQTVYSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDOUtEO0VEK0tDLFNBQUE7RUFDQSxpQkFBQTtBQThYUjtBQUdBLDQ2N0JBQTQ2N0IiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiLi92YXJpYWJsZXNcIjtcblxuLnplbGYtYnV0dG9uLWV4dGVybmFsLWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnplbGYtYnV0dG9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgJi0tbWFyZ2luLXJpZ2h0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdGhpbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIH1cblxuICAgICYtLXdpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmLnplbGYtYnV0dG9uLS1oeXBlcmxpbmsge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW50aS1mbGFzaC13aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGZyZW5jaEdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW91dGxpbmVkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tcmVkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIH1cbn1cblxuLnplbGYtaWNvbi1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZ2FwOiAxNnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIG1pbi13aWR0aDogNTZweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB3aWR0aDogNTZweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ib3JkZXItc29mdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgfVxuXG4gICAgJi0tNDAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuXG4gICAgICAgICYuemVsZi1pY29uLWJ1dHRvbi0tYm9yZGVyLXNvZnQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWh5cGVybGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjJzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICYtLXNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bTtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHRhdXBlR3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tdHJhbnNwYXJlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLW5vLWZpbGwge1xuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJi0tZXJyb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tc3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdExpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1waWxsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cbiIsIkB1c2UgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5AdXNlIFwiLi4vLi4vc3R5bGVzL2J1dHRvbnNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zd2FwLWN1cnJlbmN5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX19sb2FkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICB9XG5cbiAgICAmX19maWx0ZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19maWx0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19zZWFyY2gtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbmV0d29yay1maWx0ZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIH1cblxuICAgICZfX25ldHdvcmstZmlsdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiA1MXB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgJl9fYXNzZXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA0OTBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAmX19hc3NldCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAmLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICYtLWxlZnQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtLXJpZ2h0IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Fzc2V0LWNvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuXG4gICAgICAgICYtLXJpZ2h0IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hc3NldC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIG1pbi13aWR0aDogMzJweDtcbiAgICAgICAgbWluLWhlaWdodDogMzJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmX19hc3NldC1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtbmFtZS10ZXh0IHtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1heC13aWR0aDogMjQwcHg7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtc3ltYm9sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtYmFsYW5jZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgJl9fYXNzZXQtYmFsYW5jZS1maWF0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_swap_swap_component_ts.js.map