"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-notes_note-form_note-form_component_ts"],{

/***/ 51086:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-notes/note-form/note-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteFormComponent: () => (/* binding */ NoteFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_data_biometrics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data-biometrics.component */ 79874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chrome.service */ 85043);
/* harmony import */ var _services_data_passing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data-passing.service */ 59284);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/wallet.service */ 69556);













function NoteFormComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_div_25_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.noteData.folder, $event) || (ctx_r2.noteData.folder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.noteData.folder);
  }
}
function NoteFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 23)(2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_div_26_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.noteData.masterPassword, $event) || (ctx_r2.noteData.masterPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_div_26_Template_input_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.checkFormValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.noteData.masterPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("We require the ", ctx_r2.wallet.name, " password to encrypt and store your credentials. Biometric verification is always required.");
  }
}
function NoteFormComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoteFormComponent_div_32_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoteFormComponent_div_32_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 27)(3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoteFormComponent_div_32_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Verify Your Identity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Please verify your face to create this note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 31)(11, "app-data-biometrics", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("biometricsSuccess", function NoteFormComponent_div_32_Template_app_data_biometrics_biometricsSuccess_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onBiometricsSuccess($event));
    })("biometricsCancel", function NoteFormComponent_div_32_Template_app_data_biometrics_biometricsCancel_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onBiometricsCancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isDecryptMode", false)("itemData", ctx_r2.transformedNoteData);
  }
}
class NoteFormComponent {
  router;
  route;
  chromeService;
  dataPassingService;
  _walletService;
  _changeDetectorRef;
  noteData = {
    title: "Meeting Notes",
    content: `Date: ${new Date().toLocaleDateString()}
Location: Conference Room A
Attendees: Team Members

Agenda: Q1 Planning

Notes:
- Discussed project timeline and goals
- Reviewed budget allocation
- Set quarterly objectives
- Assigned team responsibilities

Next Steps:
- Finalize project roadmap
- Schedule follow-up meeting
- Prepare detailed budget proposal`,
    folder: "Work",
    insideFolder: true,
    useMasterPassword: false,
    masterPassword: ""
  };
  isNewNote = true;
  formValid = false;
  showBiometrics = false;
  transformedNoteData = null;
  wallet;
  hasMasterPassword = false;
  shareables = {};
  constructor(router, route, chromeService, dataPassingService, _walletService, _changeDetectorRef) {
    this.router = router;
    this.route = route;
    this.chromeService = chromeService;
    this.dataPassingService = dataPassingService;
    this._walletService = _walletService;
    this._changeDetectorRef = _changeDetectorRef;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better security when handling notes
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/notes/new");
      }
      // Check if this is a new note or editing existing
      // For now, this route is always for creating new notes
      // TODO: Add edit route like "notes/edit/:id" for editing existing notes
      _this.isNewNote = true;
      yield _this._setWallet();
      _this.checkFormValidity();
    })();
  }
  _setWallet() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const wallet = yield _this2._walletService.getFirstWalletFromStorage();
      if (!wallet?.name) {
        _this2.router.navigate(["/welcome"]);
        return;
      }
      _this2.shareables.wallet = wallet;
      _this2.wallet = _this2.shareables.wallet;
      console.log("wallet", wallet);
      _this2.hasMasterPassword = wallet.hasPassword || false;
      _this2._changeDetectorRef.detectChanges();
      _this2.checkFormValidity();
    })();
  }
  toggleFolder() {
    this.noteData.insideFolder = !this.noteData.insideFolder;
  }
  toggleMasterPassword() {
    this.noteData.useMasterPassword = !this.noteData.useMasterPassword;
    if (!this.noteData.useMasterPassword) {
      this.noteData.masterPassword = ""; // Clear password when toggling off
    }
    this.checkFormValidity();
  }
  checkFormValidity() {
    const hasTitle = !!this.noteData.title.trim();
    const hasContent = !!this.noteData.content.trim();
    // Backend validation requirements:
    // - title: required, minLength: 1, maxLength: 100
    // - content: required, minLength: 1
    // - masterPassword: optional (only if user enables it)
    // Master password is only required if the wallet has a password
    // Master password is optional - only validate if user chose to use it
    const hasMasterPassword = !!this.noteData.masterPassword;
    const masterPasswordValid = this.hasMasterPassword ? hasMasterPassword : true;
    this.formValid = hasTitle && hasContent && masterPasswordValid;
  }
  onCancel() {
    this.router.navigate(["/dashboard/notes"]);
  }
  onBiometricsSuccess(biometricData) {
    // Navigate to result page after successful biometrics
    this.router.navigate(["/dashboard/notes/result"]);
  }
  onBiometricsCancel() {
    this.showBiometrics = false;
  }
  onSave() {
    var _this3 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.formValid) {
        return;
      }
      // Transform note data to match backend API expectations
      // Convert content to keyValuePairs format
      _this3.transformedNoteData = {
        title: _this3.noteData.title,
        keyValuePairs: {
          content: _this3.noteData.content
        },
        folder: _this3.noteData.folder,
        insideFolder: _this3.noteData.insideFolder,
        useMasterPassword: _this3.noteData.useMasterPassword,
        masterPassword: _this3.noteData.masterPassword,
        type: "notes"
      };
      yield _this3.dataPassingService.storeData("notes", _this3.transformedNoteData);
      // Show biometrics modal instead of navigating
      _this3.showBiometrics = true;
    })();
  }
  static ɵfac = function NoteFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NoteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_2__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_passing_service__WEBPACK_IMPORTED_MODULE_3__.DataPassingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_4__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NoteFormComponent,
    selectors: [["app-note-form"]],
    decls: 33,
    vars: 12,
    consts: [["noteForm", "ngForm"], [1, "note-form"], [1, "form-header"], [1, "form-content"], [3, "ngSubmit"], [1, "form-section"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "name", "title", "placeholder", "Enter note title", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "content", 1, "form-label"], ["id", "content", "name", "content", "placeholder", "Write your note here... You can include multiple paragraphs, lists, or any other content you need to remember securely.", "rows", "8", "required", "", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-hint"], [1, "folder-toggle"], [1, "form-label"], [1, "toggle-switch", 3, "click"], [1, "toggle-slider"], ["class", "folder-input", 4, "ngIf"], ["class", "form-section", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "biometrics-modal", 3, "click", 4, "ngIf"], [1, "folder-input"], ["type", "text", "placeholder", "Enter folder name", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "password-input-field"], ["type", "password", "id", "masterPassword", "name", "masterPassword", "placeholder", "Enter your master password", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "biometrics-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], ["type", "button", 1, "modal-close", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M18 6L6 18M6 6L18 18", "stroke", "#666", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "modal-body"], [3, "biometricsSuccess", "biometricsCancel", "isDecryptMode", "itemData"]],
    template: function NoteFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Create a secure note with key-value pairs for easy organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "form", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function NoteFormComponent_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSave());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Note Title *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.noteData.title, $event) || (ctx.noteData.title = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_Template_input_ngModelChange_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.checkFormValidity());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Note Content *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_Template_textarea_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.noteData.content, $event) || (ctx.noteData.content = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_Template_textarea_ngModelChange_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.checkFormValidity());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Your note content will be encrypted and stored securely. You can write as much as you need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 5)(20, "div", 11)(21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Organize in Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoteFormComponent_Template_div_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.toggleFolder());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, NoteFormComponent_div_25_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, NoteFormComponent_div_26_Template, 5, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17)(28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NoteFormComponent_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onCancel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, NoteFormComponent_div_32_Template, 12, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.isNewNote ? "Add New Note" : "Edit Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.noteData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.noteData.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.noteData.insideFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.noteData.insideFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasMasterPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("btn-disabled", !ctx.formValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.formValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isNewNote ? "Create Note" : "Update Note", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showBiometrics);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _shared_data_biometrics_component__WEBPACK_IMPORTED_MODULE_1__.DataBiometricsComponent],
    styles: [".note-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.note-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.note-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 32px;\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 12px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  box-sizing: border-box;\n  margin-bottom: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  resize: vertical;\n  min-height: 200px;\n  font-family: inherit;\n  line-height: 1.5;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 0;\n  line-height: 1.4;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 22px;\n  background: #e0e0e0;\n  border-radius: 11px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider.active[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]:hover {\n  background: #d0d0d0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-input[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 22px;\n  background: #e0e0e0;\n  border-radius: 11px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider.active[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]:hover {\n  background: #d0d0d0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-input-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-input-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-input-field[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 0;\n  line-height: 1.4;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 8px;\n  padding: 12px 24px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled, .note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary.btn-disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n.biometrics-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-width: 90vw;\n  max-height: 90vh;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 24px 32px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  text-align: center;\n  position: relative;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: auto;\n  max-height: calc(90vh - 100px);\n}\n.biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   app-data-biometrics[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 768px) {\n  .note-form[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .note-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .note-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n   .note-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 20px;\n    max-width: calc(100vw - 40px);\n    max-height: calc(100vh - 40px);\n  }\n  .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 24px 12px;\n  }\n  .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n    top: 12px;\n    right: 12px;\n    padding: 6px;\n  }\n  .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n  }\n  .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .biometrics-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4RUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNIO0FBRUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBSDtBQUlDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FBRkg7QUFJRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRko7QUFLRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBQ0MsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQUhMO0FBTUk7RUFDQyxXQUFBO0FBSkw7QUFRRztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTko7QUFRSTtFQUNDLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFOTDtBQVNJO0VBQ0MsV0FBQTtBQVBMO0FBV0c7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVRKO0FBWUc7RUFDQyxhQUFBO0VB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U0FBQTtBQXhDSjtBQTRDRTtFQUNDLFVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUExQ0g7QUE2Q0c7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEzQ0o7O0FBa0RBO0VBQ0M7SUFDQyxlQUFBO0VBL0NBO0VBaURBO0lBQ0Msa0JBQUE7RUEvQ0Q7RUFrREE7SUFDQyxzQkFBQTtFQWhERDtFQWtEQzs7SUFFQyxXQUFBO0VBaERGO0VBc0RBO0lBQ0MsWUFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7RUFwREQ7RUFzREM7SUFDQyx1QkFBQTtFQXBERjtFQXNERTtJQUNDLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQXBESDtFQXNERztJQUNDLFdBQUE7SUFDQSxZQUFBO0VBcERKO0VBd0RFO0lBQ0MsZUFBQTtFQXRESDtFQXlERTtJQUNDLGVBQUE7RUF2REg7QUFDRiIsImZpbGUiOiJub3RlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1mb3JtIHtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuXG5cdC5mb3JtLWhlYWRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5mb3JtLWNvbnRlbnQge1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0Ym94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXHRcdHBhZGRpbmc6IDMycHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0LmZvcm0tc2VjdGlvbiB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHQuZm9ybS1pbnB1dCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyBFbnN1cmVzIHBhZGRpbmcgZG9lc24ndCBhZGQgdG8gd2lkdGhcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDsgLy8gUmVtb3ZlIGFueSBkZWZhdWx0IG1hcmdpbnNcblxuXHRcdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5mb3JtLXRleHRhcmVhIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdHJlc2l6ZTogdmVydGljYWw7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblxuXHRcdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5mb3JtLWhpbnQge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHR9XG5cblx0XHRcdC5mb2xkZXItdG9nZ2xlIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1sYWJlbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudG9nZ2xlLXN3aXRjaCB7XG5cdFx0XHRcdFx0d2lkdGg6IDQ0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTFweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cblx0XHRcdFx0XHQudG9nZ2xlLXNsaWRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAycHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdFx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAyNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2QwZDBkMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmZvbGRlci1pbnB1dCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHQucGFzc3dvcmQtdG9nZ2xlIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1sYWJlbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudG9nZ2xlLXN3aXRjaCB7XG5cdFx0XHRcdFx0d2lkdGg6IDQ0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTFweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cblx0XHRcdFx0XHQudG9nZ2xlLXNsaWRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAycHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdFx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAyNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2QwZDBkMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBhc3N3b3JkLWlucHV0LWZpZWxkIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0LmZvcm0taW5wdXQge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDsgLy8gQWRkIHNvbWUgc3BhY2UgYmVsb3cgdGhlIHBhc3N3b3JkIGlucHV0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZm9ybS1oaW50IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZm9ybS1hY3Rpb25zIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XG5cblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0XHQmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmRpc2FibGVkLFxuXHRcdFx0XHQmLmJ0bi1kaXNhYmxlZCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2NjYztcblx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIEJpb21ldHJpY3MgTW9kYWwgU3R5bGVzXG4uYmlvbWV0cmljcy1tb2RhbCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR6LWluZGV4OiAxMDAwO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcblxuXHQubW9kYWwtY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0bWF4LXdpZHRoOiA5MHZ3O1xuXHRcdG1heC1oZWlnaHQ6IDkwdmg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQubW9kYWwtaGVhZGVyIHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMzJweCAxNnB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC5tb2RhbC1jbG9zZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAxNnB4O1xuXHRcdFx0XHRyaWdodDogMTZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubW9kYWwtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0XHRtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMDBweCk7XG5cblx0XHRcdC8vIE1ha2UgdGhlIGJpb21ldHJpY3MgY29tcG9uZW50IGZpbGwgdGhlIG1vZGFsXG5cdFx0XHRhcHAtZGF0YS1iaW9tZXRyaWNzIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm5vdGUtZm9ybSB7XG5cdFx0cGFkZGluZzogMCAxNnB4O1xuXG5cdFx0LmZvcm0tY29udGVudCB7XG5cdFx0XHRwYWRkaW5nOiAyNHB4IDIwcHg7XG5cdFx0fVxuXG5cdFx0LmZvcm0tYWN0aW9ucyB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQuYnRuLXNlY29uZGFyeSxcblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5iaW9tZXRyaWNzLW1vZGFsIHtcblx0XHQubW9kYWwtY29udGVudCB7XG5cdFx0XHRtYXJnaW46IDIwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcblx0XHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcblxuXHRcdFx0Lm1vZGFsLWhlYWRlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDIwcHggMjRweCAxMnB4O1xuXG5cdFx0XHRcdC5tb2RhbC1jbG9zZSB7XG5cdFx0XHRcdFx0dG9wOiAxMnB4O1xuXHRcdFx0XHRcdHJpZ2h0OiAxMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDZweDtcblxuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1ub3Rlcy9ub3RlLWZvcm0vbm90ZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhFQUFBO0FBQ0Q7QUFDQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFIO0FBSUM7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUFGSDtBQUlHO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUtHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDQyxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBSEw7QUFNSTtFQUNDLFdBQUE7QUFKTDtBQVFHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0MsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQU5MO0FBU0k7RUFDQyxXQUFBO0FBUEw7QUFXRztFQUNDLGVB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Q0EsY0FBQTtFQUNBLGlCQUFBO0FBdkNKO0FBMENHO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBeENKO0FBNENFO0VBQ0MsVUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQTFDSDtBQTZDRztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTNDSjs7QUFrREE7RUFDQztJQUNDLGVBQUE7RUEvQ0E7RUFpREE7SUFDQyxrQkFBQTtFQS9DRDtFQWtEQTtJQUNDLHNCQUFBO0VBaEREO0VBa0RDOztJQUVDLFdBQUE7RUFoREY7RUFzREE7SUFDQyxZQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtFQXBERDtFQXNEQztJQUNDLHVCQUFBO0VBcERGO0VBc0RFO0lBQ0MsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBcERIO0VBc0RHO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUFwREo7RUF3REU7SUFDQyxlQUFBO0VBdERIO0VBeURFO0lBQ0MsZUFBQTtFQXZESDtBQUNGO0FBRUEsNHdlQUE0d2UiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1mb3JtIHtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuXG5cdC5mb3JtLWhlYWRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5mb3JtLWNvbnRlbnQge1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0Ym94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuXHRcdHBhZGRpbmc6IDMycHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXG5cdFx0LmZvcm0tc2VjdGlvbiB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEycHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHQuZm9ybS1pbnB1dCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyBFbnN1cmVzIHBhZGRpbmcgZG9lc24ndCBhZGQgdG8gd2lkdGhcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDsgLy8gUmVtb3ZlIGFueSBkZWZhdWx0IG1hcmdpbnNcblxuXHRcdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5mb3JtLXRleHRhcmVhIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdHJlc2l6ZTogdmVydGljYWw7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xuXHRcdFx0XHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcblxuXHRcdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzY2N2VlYTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Jjo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5mb3JtLWhpbnQge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHR9XG5cblx0XHRcdC5mb2xkZXItdG9nZ2xlIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1sYWJlbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudG9nZ2xlLXN3aXRjaCB7XG5cdFx0XHRcdFx0d2lkdGg6IDQ0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTFweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cblx0XHRcdFx0XHQudG9nZ2xlLXNsaWRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAycHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdFx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAyNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2QwZDBkMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmZvbGRlci1pbnB1dCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDE2cHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXG5cdFx0XHQucGFzc3dvcmQtdG9nZ2xlIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1sYWJlbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQudG9nZ2xlLXN3aXRjaCB7XG5cdFx0XHRcdFx0d2lkdGg6IDQ0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMnB4O1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlMGUwZTA7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTFweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cblx0XHRcdFx0XHQudG9nZ2xlLXNsaWRlciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAycHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdFx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAyNHB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2QwZDBkMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBhc3N3b3JkLWlucHV0LWZpZWxkIHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0LmZvcm0taW5wdXQge1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDhweDsgLy8gQWRkIHNvbWUgc3BhY2UgYmVsb3cgdGhlIHBhc3N3b3JkIGlucHV0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuZm9ybS1oaW50IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZm9ybS1hY3Rpb25zIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRcdFx0bWFyZ2luLXRvcDogMzJweDtcblx0XHRcdHBhZGRpbmctdG9wOiAyNHB4O1xuXHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XG5cblx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMjRweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdFx0XHQmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOmRpc2FibGVkLFxuXHRcdFx0XHQmLmJ0bi1kaXNhYmxlZCB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2NjYztcblx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIEJpb21ldHJpY3MgTW9kYWwgU3R5bGVzXG4uYmlvbWV0cmljcy1tb2RhbCB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR6LWluZGV4OiAxMDAwO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcblxuXHQubW9kYWwtY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdFx0bWF4LXdpZHRoOiA5MHZ3O1xuXHRcdG1heC1oZWlnaHQ6IDkwdmg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHQubW9kYWwtaGVhZGVyIHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMzJweCAxNnB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC5tb2RhbC1jbG9zZSB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAxNnB4O1xuXHRcdFx0XHRyaWdodDogMTZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHR3aWR0aDogMjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubW9kYWwtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0XHRtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMDBweCk7XG5cblx0XHRcdC8vIE1ha2UgdGhlIGJpb21ldHJpY3MgY29tcG9uZW50IGZpbGwgdGhlIG1vZGFsXG5cdFx0XHRhcHAtZGF0YS1iaW9tZXRyaWNzIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm5vdGUtZm9ybSB7XG5cdFx0cGFkZGluZzogMCAxNnB4O1xuXG5cdFx0LmZvcm0tY29udGVudCB7XG5cdFx0XHRwYWRkaW5nOiAyNHB4IDIwcHg7XG5cdFx0fVxuXG5cdFx0LmZvcm0tYWN0aW9ucyB7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHQuYnRuLXNlY29uZGFyeSxcblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC5iaW9tZXRyaWNzLW1vZGFsIHtcblx0XHQubW9kYWwtY29udGVudCB7XG5cdFx0XHRtYXJnaW46IDIwcHg7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcblx0XHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcblxuXHRcdFx0Lm1vZGFsLWhlYWRlciB7XG5cdFx0XHRcdHBhZGRpbmc6IDIwcHggMjRweCAxMnB4O1xuXG5cdFx0XHRcdC5tb2RhbC1jbG9zZSB7XG5cdFx0XHRcdFx0dG9wOiAxMnB4O1xuXHRcdFx0XHRcdHJpZ2h0OiAxMnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDZweDtcblxuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-notes_note-form_note-form_component_ts.js.map