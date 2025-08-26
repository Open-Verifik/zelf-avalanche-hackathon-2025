"use strict";
(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_dashboard_zelf-keys-notes_zelf-keys-notes_component_ts"],{

/***/ 76171:
/*!************************************************************************!*\
  !*** ./src/app/dashboard/zelf-keys-notes/zelf-keys-notes.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZelfKeysNotesComponent: () => (/* binding */ ZelfKeysNotesComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _shared_data_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data-card.component */ 81695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../wallet.service */ 69556);
/* harmony import */ var _chrome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chrome.service */ 85043);











function ZelfKeysNotesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading your notes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysNotesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Error loading notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ZelfKeysNotesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 17)(5, "div", 17)(6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 19)(9, "div", 20)(10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "No notes yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Start adding your notes to keep them secure and easily accessible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_10_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onAddNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Add Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysNotesComponent_div_11_app_data_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-data-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardClick", function ZelfKeysNotesComponent_div_11_app_data_card_7_Template_app_data_card_cardClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onNoteClick($event));
    })("launchClick", function ZelfKeysNotesComponent_div_11_app_data_card_7_Template_app_data_card_launchClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onNoteClick($event));
    })("optionsClick", function ZelfKeysNotesComponent_div_11_app_data_card_7_Template_app_data_card_optionsClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onNoteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const note_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", note_r6);
  }
}
function ZelfKeysNotesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ZelfKeysNotesComponent_div_11_app_data_card_7_Template, 1, 1, "app-data-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 27)(9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_11_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onAddNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Add Another Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.storedNotes.length, " stored note", ctx_r1.storedNotes.length !== 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.storedNotes)("ngForTrackBy", ctx_r1.trackByNote);
  }
}
class ZelfKeysNotesComponent {
  router;
  walletService;
  chromeService;
  storedNotes = [];
  loading = false;
  error = null;
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  constructor(router, walletService, chromeService) {
    this.router = router;
    this.walletService = walletService;
    this.chromeService = chromeService;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Ensure extension is in full screen mode for better user experience
      if (_this.chromeService.isExtension) {
        yield _this.chromeService.ensureFullScreen("dashboard/notes");
      }
      _this.loadStoredNotes();
    })();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadStoredNotes() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = null;
      try {
        const response = yield _this2.walletService.listStoredNotes();
        console.log("Full notes response:", response);
        if (response?.data && Array.isArray(response.data)) {
          _this2.storedNotes = response.data;
          console.log("Stored notes:", _this2.storedNotes);
        } else if (response?.data && Array.isArray(response.data.data)) {
          // Handle nested data structure
          _this2.storedNotes = response.data.data;
          console.log("Stored notes (nested):", _this2.storedNotes);
        } else {
          console.log("No valid data structure found in notes response");
          _this2.storedNotes = [];
        }
      } catch (error) {
        console.error("Error loading stored notes:", error);
        _this2.error = "Failed to load stored notes. Please try again.";
        _this2.storedNotes = [];
      } finally {
        _this2.loading = false;
      }
    })();
  }
  onAddNote() {
    this.router.navigate(["/dashboard/notes/new"]);
  }
  onRefresh() {
    this.loadStoredNotes();
  }
  onNoteClick(note) {
    console.log("Note clicked:", note);
    // Navigate to note detail view or handle note action
    // this.router.navigate(["/dashboard/notes/detail"]);
  }
  trackByNote(index, note) {
    return note.id || note.publicData?.id || index;
  }
  static ɵfac = function ZelfKeysNotesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ZelfKeysNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_chrome_service__WEBPACK_IMPORTED_MODULE_3__.ChromeService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ZelfKeysNotesComponent,
    selectors: [["app-zelf-keys-notes"]],
    decls: 12,
    vars: 4,
    consts: [[1, "zelf-keys-notes"], [1, "notes-main-view"], [1, "header"], [1, "content"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "notes-grid", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "icon"], [1, "btn-secondary", 3, "click"], [1, "empty-state"], [1, "empty-illustration"], [1, "notepad"], [1, "notepad-content"], [1, "notepad-line"], [1, "pencil"], [1, "pencil-body"], [1, "pencil-tip"], [1, "pencil-eraser"], [1, "btn-primary", 3, "click"], [1, "notes-grid"], [1, "list-header"], [1, "notes-cards"], ["category", "notes", 3, "item", "cardClick", "launchClick", "optionsClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "add-more"], ["category", "notes", 3, "cardClick", "launchClick", "optionsClick", "item"]],
    template: function ZelfKeysNotesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Manage your secure notes and key-value pairs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ZelfKeysNotesComponent_div_8_Template, 4, 0, "div", 4)(9, ZelfKeysNotesComponent_div_9_Template, 9, 1, "div", 5)(10, ZelfKeysNotesComponent_div_10_Template, 17, 0, "div", 6)(11, ZelfKeysNotesComponent_div_11_Template, 11, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.storedNotes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.storedNotes.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _shared_data_card_component__WEBPACK_IMPORTED_MODULE_1__.DataCardComponent],
    styles: [".zelf-keys-notes[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f0f0f0;\n  border-top: 3px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 24px 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin: 0 auto 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .notepad[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 80px;\n  height: 100px;\n  background: white;\n  border: 2px solid #e0e0e0;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .notepad[_ngcontent-%COMP%]   .notepad-content[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .notepad[_ngcontent-%COMP%]   .notepad-content[_ngcontent-%COMP%]   .notepad-line[_ngcontent-%COMP%] {\n  height: 2px;\n  background: #f0f0f0;\n  margin-bottom: 8px;\n  border-radius: 1px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .notepad[_ngcontent-%COMP%]   .notepad-content[_ngcontent-%COMP%]   .notepad-line[_ngcontent-%COMP%]:nth-child(1) {\n  width: 60%;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .notepad[_ngcontent-%COMP%]   .notepad-content[_ngcontent-%COMP%]   .notepad-line[_ngcontent-%COMP%]:nth-child(2) {\n  width: 80%;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .notepad[_ngcontent-%COMP%]   .notepad-content[_ngcontent-%COMP%]   .notepad-line[_ngcontent-%COMP%]:nth-child(3) {\n  width: 45%;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .pencil[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 10px;\n  transform: rotate(45deg);\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .pencil[_ngcontent-%COMP%]   .pencil-body[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 40px;\n  background: #ffd700;\n  border-radius: 2px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .pencil[_ngcontent-%COMP%]   .pencil-tip[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  border-top: 6px solid #ffd700;\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-illustration[_ngcontent-%COMP%]   .pencil[_ngcontent-%COMP%]   .pencil-eraser[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: #ff69b4;\n  border-radius: 50%;\n  position: absolute;\n  top: -3px;\n  left: -1px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .add-more[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 12px;\n  padding: 16px 32px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .zelf-keys-notes[_ngcontent-%COMP%]   .notes-main-view[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSw4RUFBQTtBQUNEO0FBRUU7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQUg7QUFFRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0c7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjtBQU1HOzs7RUFHQyxrQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNSTs7O0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBRkw7QUFLSTs7O0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBREw7QUFJSTs7O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUw7QUFHSTs7O0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNMO0FBSUk7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZMO0FBSUs7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFGTjtBQUlNO0VBQ0MsaUJBQUE7QUFGUDtBQUlPO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUZSO0FBSVE7RUFDQyxVQUFBO0FBRlQ7QUFLUTtFQUNDLFVBQUE7QUFIVDtBQU1RO0VBQ0MsVUFBQTtBQUpUO0FBVUs7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFSTjtBQVVNO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUlA7QUFXTTtFQUNDLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQVRQO0FBWU07RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBVlA7QUFpQkk7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZkw7QUFpQks7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQWZOO0FBa0JLO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWhCTjtBQWtCTTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFoQlA7QUFxQkk7RUFDQyxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFuQkw7QUFzQkk7RUFDQyxrQkFBQTtBQXBCTDtBQTJCQztFQUNDLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUF6QkY7QUEyQkU7RUFDQywyQkFBQTtFQUNBLCtDQUFBO0FBekJIO0FBNkJDO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBM0JGO0FBNkJFO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQTNCSDs7QUFnQ0E7RUFDQztJQUNDLHVCQUFBO0VBN0JBO0VBK0JEO0lBQ0MseUJBQUE7RUE3QkE7QUFDRjtBQWlDQTtFQUtLO0lBQ0MsMEJBQUE7SUFDQSxTQUFBO0VBbkNKO0FBQ0YiLCJmaWxlIjoiemVsZi1rZXlzLW5vdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnplbGYta2V5cy1ub3RlcyB7XG5cdHBhZGRpbmc6IDA7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuXG5cdC5ub3Rlcy1tYWluLXZpZXcge1xuXHRcdC5oZWFkZXIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzJweDtcblxuXHRcdFx0aDIge1xuXHRcdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuY29udGVudCB7XG5cdFx0XHQubG9hZGluZy1zdGF0ZSxcblx0XHRcdC5lcnJvci1zdGF0ZSxcblx0XHRcdC5lbXB0eS1zdGF0ZSB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0XHRcdC5zcGlubmVyIHtcblx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAzcHggc29saWQgI2YwZjBmMDtcblx0XHRcdFx0XHRib3JkZXItdG9wOiAzcHggc29saWQgIzY2N2VlYTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0byAyMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNDhweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAyNHB4IDA7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmVtcHR5LXN0YXRlIHtcblx0XHRcdFx0LmVtcHR5LWlsbHVzdHJhdGlvbiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDI0cHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0XHRcdFx0Lm5vdGVwYWQge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDgwcHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHRcdFx0XHRcdFx0Lm5vdGVwYWQtY29udGVudCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEycHggOHB4O1xuXG5cdFx0XHRcdFx0XHRcdC5ub3RlcGFkLWxpbmUge1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMnB4O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmMGYwZjA7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDFweDtcblxuXHRcdFx0XHRcdFx0XHRcdCY6bnRoLWNoaWxkKDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNDUlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5wZW5jaWwge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cblx0XHRcdFx0XHRcdC5wZW5jaWwtYm9keSB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZDcwMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQucGVuY2lsLXRpcCB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAwO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDA7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdFx0XHRib3JkZXItdG9wOiA2cHggc29saWQgI2ZmZDcwMDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRib3R0b206IC02cHg7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wZW5jaWwtZXJhc2VyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDZweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA2cHg7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZjY5YjQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHR0b3A6IC0zcHg7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6IC0xcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5ub3Rlcy1ncmlkIHtcblx0XHRcdFx0Lmxpc3QtaGVhZGVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQubm90ZXMtY2FyZHMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuXHRcdFx0XHRcdGdhcDogMjRweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmFkZC1tb3JlIHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBHbG9iYWwgYnV0dG9uIHN0eWxlcyBmb3IgdGhpcyBjb21wb25lbnRcblx0LmJ0bi1wcmltYXJ5IHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdH1cblx0fVxuXG5cdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0Y29sb3I6ICM2NjY7XG5cdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHR9XG5cdH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuemVsZi1rZXlzLW5vdGVzIHtcblx0XHQubm90ZXMtbWFpbi12aWV3IHtcblx0XHRcdC5jb250ZW50IHtcblx0XHRcdFx0Lm5vdGVzLWdyaWQge1xuXHRcdFx0XHRcdC5ub3Rlcy1jYXJkcyB7XG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdFx0XHRcdGdhcDogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1ub3Rlcy96ZWxmLWtleXMtbm90ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsOEVBQUE7QUFDRDtBQUVFO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUFIO0FBRUc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUdHO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREo7QUFNRzs7O0VBR0Msa0JBQUE7RUFDQSxrQkFBQTtBQUpKO0FBTUk7OztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZMO0FBS0k7OztFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQURMO0FBSUk7OztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFMO0FBR0k7OztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDTDtBQUlJO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGTDtBQUlLO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBRk47QUFJTTtFQUNDLGlCQUFBO0FBRlA7QUFJTztFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0MsVUFBQTtBQUZUO0FBS1E7RUFDQyxVQUFBO0FBSFQ7QUFNUTtFQUNDLFVBQUE7QUFKVDtBQVVLO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0FBUk47QUFVTTtFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJQO0FBV007RUFDQyxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUFUUDtBQVlNO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVZQO0FBaUJJO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWZMO0FBaUJLO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFmTjtBQWtCSztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFoQk47QUFrQk07RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0FBaEJQO0FBcUJJO0VBQ0MsYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBbkJMO0FBc0JJO0VBQ0Msa0JBQUE7QUFwQkw7QUEyQkM7RUFDQyw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0FBekJGO0FBMkJFO0VBQ0MsMkJBQUE7RUFDQSwrQ0FBQTtBQXpCSDtBQTZCQztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTNCRjtBQTZCRTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUEzQkg7O0FBZ0NBO0VBQ0M7SUFDQyx1QkFBQTtFQTdCQTtFQStCRDtJQUNDLHlCQUFBO0VBN0JBO0FBQ0Y7QUFpQ0E7RUFLSztJQUNDLDBCQUFBO0lBQ0EsU0FBQTtFQW5DSjtBQUNGO0FBQ0Esb3dUQUFvd1QiLCJzb3VyY2VzQ29udGVudCI6WyIuemVsZi1rZXlzLW5vdGVzIHtcblx0cGFkZGluZzogMDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG5cblx0Lm5vdGVzLW1haW4tdmlldyB7XG5cdFx0LmhlYWRlciB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDhweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHRwIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jb250ZW50IHtcblx0XHRcdC5sb2FkaW5nLXN0YXRlLFxuXHRcdFx0LmVycm9yLXN0YXRlLFxuXHRcdFx0LmVtcHR5LXN0YXRlIHtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRwYWRkaW5nOiA2MHB4IDIwcHg7XG5cblx0XHRcdFx0LnNwaW5uZXIge1xuXHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjZjBmMGYwO1xuXHRcdFx0XHRcdGJvcmRlci10b3A6IDNweCBzb2xpZCAjNjY3ZWVhO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgMTJweCAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDI0cHggMDtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQuZW1wdHktc3RhdGUge1xuXHRcdFx0XHQuZW1wdHktaWxsdXN0cmF0aW9uIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTIwcHg7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gMjRweDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0XHRcdFx0XHQubm90ZXBhZCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR3aWR0aDogODBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdFx0XHRcdFx0XHQubm90ZXBhZC1jb250ZW50IHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTJweCA4cHg7XG5cblx0XHRcdFx0XHRcdFx0Lm5vdGVwYWQtbGluZSB7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAycHg7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2YwZjBmMDtcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMXB4O1xuXG5cdFx0XHRcdFx0XHRcdFx0JjpudGgtY2hpbGQoMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDYwJTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQmOm50aC1jaGlsZCgyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogODAlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdCY6bnRoLWNoaWxkKDMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA0NSU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBlbmNpbCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblxuXHRcdFx0XHRcdFx0LnBlbmNpbC1ib2R5IHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDRweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZkNzAwO1xuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5wZW5jaWwtdGlwIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDA7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci10b3A6IDZweCBzb2xpZCAjZmZkNzAwO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogLTZweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnBlbmNpbC1lcmFzZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNnB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDZweDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmNjliNDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogLTNweDtcblx0XHRcdFx0XHRcdFx0bGVmdDogLTFweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm5vdGVzLWdyaWQge1xuXHRcdFx0XHQubGlzdC1oZWFkZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjRweDtcblxuXHRcdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogOHB4IDE2cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5ub3Rlcy1jYXJkcyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG5cdFx0XHRcdFx0Z2FwOiAyNHB4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYWRkLW1vcmUge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEdsb2JhbCBidXR0b24gc3R5bGVzIGZvciB0aGlzIGNvbXBvbmVudFxuXHQuYnRuLXByaW1hcnkge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0cGFkZGluZzogMTZweCAzMnB4O1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0fVxuXHR9XG5cblx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRjb2xvcjogIzY2Njtcblx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC56ZWxmLWtleXMtbm90ZXMge1xuXHRcdC5ub3Rlcy1tYWluLXZpZXcge1xuXHRcdFx0LmNvbnRlbnQge1xuXHRcdFx0XHQubm90ZXMtZ3JpZCB7XG5cdFx0XHRcdFx0Lm5vdGVzLWNhcmRzIHtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-notes_zelf-keys-notes_component_ts.js.map