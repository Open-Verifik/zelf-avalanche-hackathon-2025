"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-notes_note-form_note-form_component_ts"],{

/***/ 1086:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-notes/note-form/note-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteFormComponent: () => (/* binding */ NoteFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chrome.service */ 85043);
/* harmony import */ var _services_data_passing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data-passing.service */ 9284);











function NoteFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_div_22_Template_input_ngModelChange_1_listener($event) {
      const pair_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](pair_r3.key, $event) || (pair_r3.key = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_div_22_Template_input_ngModelChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.checkFormValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_div_22_Template_input_ngModelChange_2_listener($event) {
      const pair_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](pair_r3.value, $event) || (pair_r3.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_div_22_Template_input_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.checkFormValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteFormComponent_div_22_Template_button_click_3_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeKeyValuePair(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pair_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", pair_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", pair_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.noteData.keyValuePairs.length <= 1);
  }
}
function NoteFormComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_div_34_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.noteData.folder, $event) || (ctx_r3.noteData.folder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.noteData.folder);
  }
}
function NoteFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_div_41_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.noteData.masterPassword, $event) || (ctx_r3.noteData.masterPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_div_41_Template_input_ngModelChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.checkFormValidity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Adding a master password provides additional security layer. Biometric verification is always required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.noteData.masterPassword);
  }
}
class NoteFormComponent {
  router;
  route;
  chromeService;
  dataPassingService;
  noteData = {
    title: "Meeting Notes",
    keyValuePairs: [{
      key: "Date",
      value: new Date().toLocaleDateString()
    }, {
      key: "Location",
      value: "Conference Room A"
    }, {
      key: "Attendees",
      value: "Team Members"
    }, {
      key: "Agenda",
      value: "Q1 Planning"
    }, {
      key: "Notes",
      value: "Discussed project timeline and goals..."
    }],
    folder: "Work",
    insideFolder: true,
    useMasterPassword: false,
    masterPassword: ""
  };
  isNewNote = true;
  formValid = false;
  maxKeyValuePairs = 10;
  constructor(router, route, chromeService, dataPassingService) {
    this.router = router;
    this.route = route;
    this.chromeService = chromeService;
    this.dataPassingService = dataPassingService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better security when handling notes
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/notes/new");
      }
      // Check if this is a new note or editing existing
      const id = _this.route.snapshot.paramMap.get("id");
      _this.isNewNote = id === "new";
      if (!_this.isNewNote) {
        // TODO: Load existing note data
        // this.loadNoteData(id);
      }
      _this.checkFormValidity();
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
  addKeyValuePair() {
    if (this.noteData.keyValuePairs.length < this.maxKeyValuePairs) {
      this.noteData.keyValuePairs.push({
        key: "",
        value: ""
      });
      this.checkFormValidity();
    }
  }
  removeKeyValuePair(index) {
    if (this.noteData.keyValuePairs.length > 1) {
      this.noteData.keyValuePairs.splice(index, 1);
      this.checkFormValidity();
    }
  }
  checkFormValidity() {
    const hasTitle = !!this.noteData.title.trim();
    const hasValidPairs = this.noteData.keyValuePairs.every(pair => pair.key.trim() && pair.value.trim());
    // Master password is optional - only validate if user chose to use it
    const hasValidMasterPassword = !this.noteData.useMasterPassword || this.noteData.useMasterPassword && !!this.noteData.masterPassword.trim();
    // Backend validation requirements:
    // - title: required, minLength: 1, maxLength: 100
    // - keyValuePairs: required, minKeys: 1, maxKeys: 10
    // - masterPassword: optional (only if user enables it)
    this.formValid = hasTitle && hasValidPairs && hasValidMasterPassword;
  }
  onCancel() {
    this.router.navigate(["/dashboard/notes"]);
  }
  onSave() {
    if (!this.formValid) {
      return;
    }
    // Store data in service instead of query params
    const formData = {
      ...this.noteData,
      type: "notes"
    };
    this.dataPassingService.storeData("notes", formData);
    console.log("🔍 DEBUG - Note data stored in service:", formData);
    // Navigate to biometrics step
    this.router.navigate(["/dashboard/notes/biometrics"]);
  }
  static ɵfac = function NoteFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NoteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_1__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_passing_service__WEBPACK_IMPORTED_MODULE_2__.DataPassingService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NoteFormComponent,
    selectors: [["app-note-form"]],
    decls: 47,
    vars: 17,
    consts: [["noteForm", "ngForm"], [1, "note-form"], [1, "form-header"], [1, "form-content"], [3, "ngSubmit"], [1, "form-section"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "name", "title", "placeholder", "Enter note title", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "section-header"], [1, "form-label"], ["type", "button", 1, "btn-add-pair", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M12 5v14M5 12h14", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "key-value-pairs"], ["class", "key-value-row", 4, "ngFor", "ngForOf"], [1, "pairs-info"], [1, "pairs-count"], [1, "pairs-hint"], [1, "folder-toggle"], [1, "toggle-switch", 3, "click"], [1, "toggle-slider"], ["class", "folder-input", 4, "ngIf"], [1, "password-toggle"], ["class", "password-input-field", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "key-value-row"], ["type", "text", "placeholder", "Key", "required", "", 1, "form-input", "key-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Value", "required", "", 1, "form-input", "value-input", 3, "ngModelChange", "ngModel"], ["type", "button", "title", "Remove this key-value pair", 1, "btn-remove-pair", 3, "click", "disabled"], ["d", "M18 6L6 18M6 6l12 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "folder-input"], ["type", "text", "placeholder", "Enter folder name", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "password-input-field"], ["type", "password", "id", "masterPassword", "name", "masterPassword", "placeholder", "Enter your master password (optional)", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"]],
    template: function NoteFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Create a secure note with key-value pairs for easy organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "form", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NoteFormComponent_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSave());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Note Title *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NoteFormComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.noteData.title, $event) || (ctx.noteData.title = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_Template_input_ngModelChange_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.checkFormValidity());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5)(14, "div", 8)(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Key-Value Pairs *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteFormComponent_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.addKeyValuePair());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Add Pair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, NoteFormComponent_div_22_Template, 6, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15)(24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 5)(29, "div", 18)(30, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Organize in Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteFormComponent_Template_div_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleFolder());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, NoteFormComponent_div_34_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 5)(36, "div", 22)(37, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Add Master Password (Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteFormComponent_Template_div_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleMasterPassword());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, NoteFormComponent_div_41_Template, 4, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 24)(43, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoteFormComponent_Template_button_click_43_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onCancel());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isNewNote ? "Add New Note" : "Edit Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.noteData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.noteData.keyValuePairs.length >= ctx.maxKeyValuePairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.noteData.keyValuePairs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.noteData.keyValuePairs.length, "/", ctx.maxKeyValuePairs, " pairs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Add up to ", ctx.maxKeyValuePairs, " key-value pairs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.noteData.insideFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.noteData.insideFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.noteData.useMasterPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.noteData.useMasterPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-disabled", !ctx.formValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.formValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isNewNote ? "Create Note" : "Update Note", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
    styles: [".note-form[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.note-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.note-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 32px;\n  border: 1px solid #f0f0f0;\n  overflow: hidden;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin-bottom: 12px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s ease;\n  background: #fafafa;\n  box-sizing: border-box;\n  margin-bottom: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n  max-width: 200px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-add-pair[_ngcontent-%COMP%] {\n  background: #667eea;\n  border: none;\n  border-radius: 8px;\n  padding: 10px 20px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n  min-width: 120px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-add-pair[_ngcontent-%COMP%]:hover {\n  background: #5a6fd8;\n  transform: translateY(-1px);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-add-pair[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-add-pair[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n  align-items: center;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .key-input[_ngcontent-%COMP%], \n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .value-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .btn-remove-pair[_ngcontent-%COMP%] {\n  background: #ff6b6b;\n  border: none;\n  border-radius: 6px;\n  padding: 8px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .btn-remove-pair[_ngcontent-%COMP%]:hover {\n  background: #ff5252;\n  transform: scale(1.05);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .btn-remove-pair[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .btn-remove-pair[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .pairs-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  color: #666;\n  margin-top: 8px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .pairs-info[_ngcontent-%COMP%]   .pairs-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #667eea;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .pairs-info[_ngcontent-%COMP%]   .pairs-hint[_ngcontent-%COMP%] {\n  color: #999;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 22px;\n  background: #e0e0e0;\n  border-radius: 11px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider.active[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]:hover {\n  background: #d0d0d0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .folder-input[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 22px;\n  background: #e0e0e0;\n  border-radius: 11px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider.active[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]:hover {\n  background: #d0d0d0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-input-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-input-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .password-input-field[_ngcontent-%COMP%]   .form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin: 0;\n  line-height: 1.4;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #f0f0f0;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 8px;\n  padding: 12px 24px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled, .note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary.btn-disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n@media (max-width: 768px) {\n  .note-form[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .note-form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .note-form[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: stretch;\n  }\n  .note-form[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .key-input[_ngcontent-%COMP%], \n   .note-form[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .value-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .note-form[_ngcontent-%COMP%]   .key-value-pairs[_ngcontent-%COMP%]   .key-value-row[_ngcontent-%COMP%]   .btn-remove-pair[_ngcontent-%COMP%] {\n    align-self: center;\n    width: 100%;\n    max-width: 120px;\n  }\n  .note-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .note-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%], \n   .note-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4RUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNIO0FBRUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBSDtBQUlDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0FBRkg7QUFJRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRko7QUFLRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBQ0MsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQUhMO0FBTUk7RUFDQyxXQUFBO0FBSkw7QUFRRztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTko7QUFRSTtFQUNDLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTkw7QUFTSTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVBMO0FBU0s7RUFDQyxtQkFBQTtFQUNBLDJCQUFBO0FB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QUFBO0FBNUNMOztBQW9EQTtFQUNDO0lBQ0MsZUFBQTtFQWpEQTtFQW1EQTtJQUNDLGtCQUFBO0VBakREO0VBcURDO0lBQ0Msc0JBQUE7SUFDQSxRQUFBO0lBQ0Esb0JBQUE7RUFuREY7RUFxREU7O0lBRUMsV0FBQTtFQW5ESDtFQXNERTtJQUNDLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBcERIO0VBeURBO0lBQ0Msc0JBQUE7RUF2REQ7RUF5REM7O0lBRUMsV0FBQTtFQXZERjtBQUNGIiwiZmlsZSI6Im5vdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWZvcm0ge1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMjBweDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG5cblx0LmZvcm0taGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0LmZvcm0tY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0cGFkZGluZzogMzJweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHQuZm9ybS1zZWN0aW9uIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0LmZvcm0tbGFiZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdC5mb3JtLWlucHV0IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMTZweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIEVuc3VyZXMgcGFkZGluZyBkb2Vzbid0IGFkZCB0byB3aWR0aFxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwOyAvLyBSZW1vdmUgYW55IGRlZmF1bHQgbWFyZ2luc1xuXG5cdFx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnNlY3Rpb24taGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1sYWJlbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAyMDBweDsgLy8gTGltaXQgbGFiZWwgd2lkdGggdG8gZ2l2ZSBtb3JlIHNwYWNlIHRvIGJ1dHRvblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmJ0bi1hZGQtcGFpciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzY2N2VlYTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDsgLy8gU2xpZ2h0bHkgaW5jcmVhc2VkIHBhZGRpbmcgZm9yIGJldHRlciBidXR0b24gcHJvcG9ydGlvbnNcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4OyAvLyBTbGlnaHRseSBsYXJnZXIgZm9udFxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogOHB4OyAvLyBTbGlnaHRseSBpbmNyZWFzZWQgZ2FwXG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7IC8vIFByZXZlbnRzIGJ1dHRvbiBmcm9tIHNocmlua2luZ1xuXHRcdFx0XHRcdG1pbi13aWR0aDogMTIwcHg7IC8vIEVuc3VyZXMgY29uc2lzdGVudCBidXR0b24gd2lkdGhcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzVhNmZkODtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmRpc2FibGVkIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjY2M7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmtleS12YWx1ZS1wYWlycyB7XG5cdFx0XHRcdC5rZXktdmFsdWUtcm93IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHQua2V5LWlucHV0LFxuXHRcdFx0XHRcdC52YWx1ZS1pbnB1dCB7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAwOyAvLyBQcmV2ZW50cyBmbGV4IGl0ZW1zIGZyb20gb3ZlcmZsb3dpbmdcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnRuLXJlbW92ZS1wYWlyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZjZiNmI7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGZsZXgtc2hyaW5rOiAwOyAvLyBQcmV2ZW50cyBidXR0b24gZnJvbSBzaHJpbmtpbmdcblx0XHRcdFx0XHRcdHdpZHRoOiAzNnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzNnB4O1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmNTI1Mjtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JjpkaXNhYmxlZCB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjY2M7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBhaXJzLWluZm8ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDhweDtcblxuXHRcdFx0XHQucGFpcnMtY291bnQge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGFpcnMtaGludCB7XG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmZvbGRlci10b2dnbGUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC50b2dnbGUtc3dpdGNoIHtcblx0XHRcdFx0XHR3aWR0aDogNDRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIycHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2UwZTBlMDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMXB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblxuXHRcdFx0XHRcdC50b2dnbGUtc2xpZGVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDI0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZDBkMGQwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZm9sZGVyLWlucHV0IHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdC5wYXNzd29yZC10b2dnbGUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC50b2dnbGUtc3dpdGNoIHtcblx0XHRcdFx0XHR3aWR0aDogNDRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIycHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2UwZTBlMDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMXB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblxuXHRcdFx0XHRcdC50b2dnbGUtc2xpZGVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDI0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZDBkMGQwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGFzc3dvcmQtaW5wdXQtZmllbGQge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1pbnB1dCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4OyAvLyBBZGQgc29tZSBzcGFjZSBiZWxvdyB0aGUgcGFzc3dvcmQgaW5wdXRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5mb3JtLWhpbnQge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mb3JtLWFjdGlvbnMge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGdhcDogMTZweDtcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcblxuXHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdCY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6ZGlzYWJsZWQsXG5cdFx0XHRcdCYuYnRuLWRpc2FibGVkIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjY2NjO1xuXHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubm90ZS1mb3JtIHtcblx0XHRwYWRkaW5nOiAwIDE2cHg7XG5cblx0XHQuZm9ybS1jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblx0XHR9XG5cblx0XHQua2V5LXZhbHVlLXBhaXJzIHtcblx0XHRcdC5rZXktdmFsdWUtcm93IHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG5cdFx0XHRcdC5rZXktaW5wdXQsXG5cdFx0XHRcdC52YWx1ZS1pbnB1dCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYnRuLXJlbW92ZS1wYWlyIHtcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mb3JtLWFjdGlvbnMge1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRcdFx0LmJ0bi1zZWNvbmRhcnksXG5cdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1ub3Rlcy9ub3RlLWZvcm0vbm90ZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhFQUFBO0FBQ0Q7QUFDQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0g7QUFFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFIO0FBSUM7RUFDQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDQyxtQkFBQTtFQUNBLFdBQUE7QUFGSDtBQUlHO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUtHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDQyxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBSEw7QUFNSTtFQUNDLFdBQUE7QUFKTDtBQVFHO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFOSjtBQVFJO0VBQ0MsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOTDtBQVNJO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFB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Q0FBQTtBQTFDTDtBQTZDSTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE1Q0w7O0FBb0RBO0VBQ0M7SUFDQyxlQUFBO0VBakRBO0VBbURBO0lBQ0Msa0JBQUE7RUFqREQ7RUFxREM7SUFDQyxzQkFBQTtJQUNBLFFBQUE7SUFDQSxvQkFBQTtFQW5ERjtFQXFERTs7SUFFQyxXQUFBO0VBbkRIO0VBc0RFO0lBQ0Msa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFwREg7RUF5REE7SUFDQyxzQkFBQTtFQXZERDtFQXlEQzs7SUFFQyxXQUFBO0VBdkRGO0FBQ0Y7QUFDQSxvMmVBQW8yZSIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWZvcm0ge1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMjBweDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG5cblx0LmZvcm0taGVhZGVyIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdGgyIHtcblx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdH1cblxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0fVxuXHR9XG5cblx0LmZvcm0tY29udGVudCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0XHRib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG5cdFx0cGFkZGluZzogMzJweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHQuZm9ybS1zZWN0aW9uIHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0LmZvcm0tbGFiZWwge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdC5mb3JtLWlucHV0IHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHBhZGRpbmc6IDEycHggMTZweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIEVuc3VyZXMgcGFkZGluZyBkb2Vzbid0IGFkZCB0byB3aWR0aFxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwOyAvLyBSZW1vdmUgYW55IGRlZmF1bHQgbWFyZ2luc1xuXG5cdFx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjNjY3ZWVhO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmOjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnNlY3Rpb24taGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1sYWJlbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAyMDBweDsgLy8gTGltaXQgbGFiZWwgd2lkdGggdG8gZ2l2ZSBtb3JlIHNwYWNlIHRvIGJ1dHRvblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmJ0bi1hZGQtcGFpciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzY2N2VlYTtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDsgLy8gU2xpZ2h0bHkgaW5jcmVhc2VkIHBhZGRpbmcgZm9yIGJldHRlciBidXR0b24gcHJvcG9ydGlvbnNcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4OyAvLyBTbGlnaHRseSBsYXJnZXIgZm9udFxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGdhcDogOHB4OyAvLyBTbGlnaHRseSBpbmNyZWFzZWQgZ2FwXG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7IC8vIFByZXZlbnRzIGJ1dHRvbiBmcm9tIHNocmlua2luZ1xuXHRcdFx0XHRcdG1pbi13aWR0aDogMTIwcHg7IC8vIEVuc3VyZXMgY29uc2lzdGVudCBidXR0b24gd2lkdGhcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzVhNmZkODtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmRpc2FibGVkIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjY2M7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHN2ZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmtleS12YWx1ZS1wYWlycyB7XG5cdFx0XHRcdC5rZXktdmFsdWUtcm93IHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGdhcDogMTJweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHQua2V5LWlucHV0LFxuXHRcdFx0XHRcdC52YWx1ZS1pbnB1dCB7XG5cdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAwOyAvLyBQcmV2ZW50cyBmbGV4IGl0ZW1zIGZyb20gb3ZlcmZsb3dpbmdcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnRuLXJlbW92ZS1wYWlyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZjZiNmI7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGZsZXgtc2hyaW5rOiAwOyAvLyBQcmV2ZW50cyBidXR0b24gZnJvbSBzaHJpbmtpbmdcblx0XHRcdFx0XHRcdHdpZHRoOiAzNnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzNnB4O1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmNTI1Mjtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JjpkaXNhYmxlZCB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNjY2M7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3ZnIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LnBhaXJzLWluZm8ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDhweDtcblxuXHRcdFx0XHQucGFpcnMtY291bnQge1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjdlZWE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucGFpcnMtaGludCB7XG5cdFx0XHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmZvbGRlci10b2dnbGUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC50b2dnbGUtc3dpdGNoIHtcblx0XHRcdFx0XHR3aWR0aDogNDRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIycHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2UwZTBlMDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMXB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblxuXHRcdFx0XHRcdC50b2dnbGUtc2xpZGVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDI0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZDBkMGQwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZm9sZGVyLWlucHV0IHtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdC5wYXNzd29yZC10b2dnbGUge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHRcdC5mb3JtLWxhYmVsIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC50b2dnbGUtc3dpdGNoIHtcblx0XHRcdFx0XHR3aWR0aDogNDRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDIycHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2UwZTBlMDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMXB4O1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRcdFx0XHRmbGV4LXNocmluazogMDtcblxuXHRcdFx0XHRcdC50b2dnbGUtc2xpZGVyIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdFx0XHRcdGxlZnQ6IDJweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDI0cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZDBkMGQwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQucGFzc3dvcmQtaW5wdXQtZmllbGQge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHQuZm9ybS1pbnB1dCB7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4OyAvLyBBZGQgc29tZSBzcGFjZSBiZWxvdyB0aGUgcGFzc3dvcmQgaW5wdXRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5mb3JtLWhpbnQge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mb3JtLWFjdGlvbnMge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGdhcDogMTZweDtcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdFx0XHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRcdFx0cGFkZGluZy10b3A6IDI0cHg7XG5cdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcblxuXHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5idG4tcHJpbWFyeSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuXG5cdFx0XHRcdCY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCY6ZGlzYWJsZWQsXG5cdFx0XHRcdCYuYnRuLWRpc2FibGVkIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjY2NjO1xuXHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubm90ZS1mb3JtIHtcblx0XHRwYWRkaW5nOiAwIDE2cHg7XG5cblx0XHQuZm9ybS1jb250ZW50IHtcblx0XHRcdHBhZGRpbmc6IDI0cHggMjBweDtcblx0XHR9XG5cblx0XHQua2V5LXZhbHVlLXBhaXJzIHtcblx0XHRcdC5rZXktdmFsdWUtcm93IHtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0Z2FwOiA4cHg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG5cdFx0XHRcdC5rZXktaW5wdXQsXG5cdFx0XHRcdC52YWx1ZS1pbnB1dCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYnRuLXJlbW92ZS1wYWlyIHtcblx0XHRcdFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAxMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mb3JtLWFjdGlvbnMge1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRcdFx0LmJ0bi1zZWNvbmRhcnksXG5cdFx0XHQuYnRuLXByaW1hcnkge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-notes_note-form_note-form_component_ts.js.map