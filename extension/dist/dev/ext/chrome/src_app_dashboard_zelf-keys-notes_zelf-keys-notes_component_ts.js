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











function ZelfKeysNotesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading your notes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysNotesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Error loading notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_8_Template_button_click_7_listener() {
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
function ZelfKeysNotesComponent_div_9_app_data_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-data-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardClick", function ZelfKeysNotesComponent_div_9_app_data_card_7_Template_app_data_card_cardClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onNoteClick($event));
    })("launchClick", function ZelfKeysNotesComponent_div_9_app_data_card_7_Template_app_data_card_launchClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onNoteClick($event));
    })("optionsClick", function ZelfKeysNotesComponent_div_9_app_data_card_7_Template_app_data_card_optionsClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onNoteClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const note_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", note_r5);
  }
}
function ZelfKeysNotesComponent_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_9_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onAddNote());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Add New Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Securely store a new note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ZelfKeysNotesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ZelfKeysNotesComponent_div_9_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ZelfKeysNotesComponent_div_9_app_data_card_7_Template, 1, 1, "app-data-card", 14)(8, ZelfKeysNotesComponent_div_9_div_8_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.storedNotes.length, " stored note", ctx_r1.storedNotes.length !== 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.storedNotes)("ngForTrackBy", ctx_r1.trackByNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.storedNotes.length === 0);
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
    decls: 10,
    vars: 3,
    consts: [[1, "zelf-keys-notes"], [1, "header"], [1, "content"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "notes-grid", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "icon"], [1, "btn-secondary", 3, "click"], [1, "notes-grid"], [1, "list-header"], [1, "notes-cards"], ["category", "notes", 3, "item", "cardClick", "launchClick", "optionsClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "add-note", 3, "click", 4, "ngIf"], ["category", "notes", 3, "cardClick", "launchClick", "optionsClick", "item"], [1, "add-note", 3, "click"], [1, "add-icon"]],
    template: function ZelfKeysNotesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Manage your secure notes and key-value pairs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ZelfKeysNotesComponent_div_7_Template, 4, 0, "div", 3)(8, ZelfKeysNotesComponent_div_8_Template, 9, 1, "div", 4)(9, ZelfKeysNotesComponent_div_9_Template, 9, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _shared_data_card_component__WEBPACK_IMPORTED_MODULE_1__.DataCardComponent],
    styles: [".zelf-keys-notes[_ngcontent-%COMP%] {\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f0f0f0;\n  border-top: 3px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 12px 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 0 0 24px 0;\n  max-width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 16px;\n  padding: 40px 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #6c757d;\n  margin-bottom: 16px;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 8px 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%]   .add-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  margin: 0;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 12px;\n  padding: 16px 32px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  color: #666;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.zelf-keys-notes[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #ced4da;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .zelf-keys-notes[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .notes-grid[_ngcontent-%COMP%]   .notes-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplbGYta2V5cy1ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQUE7RUFDQSw4RUFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNIO0FBRUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFBSDtBQUtFOztFQUVDLGtCQUFBO0VBQ0Esa0JBQUE7QUFISDtBQUtHOztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0c7O0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0FBRko7QUFLRzs7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtHOztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQU9HO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUxMO0FBUUk7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBTkw7QUFRSztFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFOTjtBQVdHO0VBQ0MsYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVEo7QUFXSTtFQUNDLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFUTDtBQVdLO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQVROO0FBWUs7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBVk47QUFhSztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVhOO0FBY0s7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFaTjtBQW9CQztFQUNDLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7QUFsQkY7QUFvQkU7RUFDQywyQkFBQTtFQUNBLCtDQUFBO0FBbEJIO0FBc0JDO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEJGO0FBc0JFO0VBQ0MsbUJBQUE7RUFDQSxxQkFBQTtBQXBCSDs7QUF5QkE7RUFDQztJQUNDLHVCQUFBO0VBdEJBO0VBd0JEO0lBQ0MseUJBQUE7RUF0QkE7QUFDRjtBQTBCQTtFQUlJO0lBQ0MsMEJBQUE7SUFDQSxTQUFBO0VBM0JIO0FBQ0YiLCJmaWxlIjoiemVsZi1rZXlzLW5vdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnplbGYta2V5cy1ub3RlcyB7XG5cdHBhZGRpbmc6IDA7XG5cdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBzYW5zLXNlcmlmO1xuXG5cdC5oZWFkZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0aDIge1xuXHRcdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0fVxuXG5cdFx0cCB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQuY29udGVudCB7XG5cdFx0LmxvYWRpbmctc3RhdGUsXG5cdFx0LmVycm9yLXN0YXRlIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDYwcHggMjBweDtcblxuXHRcdFx0LnNwaW5uZXIge1xuXHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0XHRib3JkZXI6IDNweCBzb2xpZCAjZjBmMGYwO1xuXHRcdFx0XHRib3JkZXItdG9wOiAzcHggc29saWQgIzY2N2VlYTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0byAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuaWNvbiB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogNDhweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxMnB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAyNHB4IDA7XG5cdFx0XHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lm5vdGVzLWdyaWQge1xuXHRcdFx0Lmxpc3QtaGVhZGVyIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG5cdFx0XHRcdGgzIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRjb2xvcjogIzFhMWExYTtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQuYnRuLXNlY29uZGFyeSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAxNnB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNjZWQ0ZGE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC5ub3Rlcy1jYXJkcyB7XG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcblx0XHRcdFx0Z2FwOiAyNHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG5cdFx0XHRcdC5hZGQtbm90ZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0XHRcdFx0XHRib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDQwcHggMjBweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDIwMHB4O1xuXG5cdFx0XHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjYWRiNWJkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5hZGQtaWNvbiB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDQ4cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzZjNzU3ZDtcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNDk1MDU3O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgOHB4IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzZjNzU3ZDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBHbG9iYWwgYnV0dG9uIHN0eWxlcyBmb3IgdGhpcyBjb21wb25lbnRcblx0LmJ0bi1wcmltYXJ5IHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdHBhZGRpbmc6IDE2cHggMzJweDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cdFx0Ym94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblx0XHRcdGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjQpO1xuXHRcdH1cblx0fVxuXG5cdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0Y29sb3I6ICM2NjY7XG5cdFx0cGFkZGluZzogMTJweCAyNHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHR9XG5cdH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuemVsZi1rZXlzLW5vdGVzIHtcblx0XHQuY29udGVudCB7XG5cdFx0XHQubm90ZXMtZ3JpZCB7XG5cdFx0XHRcdC5ub3Rlcy1jYXJkcyB7XG5cdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cdFx0XHRcdFx0Z2FwOiAxNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3plbGYta2V5cy1ub3Rlcy96ZWxmLWtleXMtbm90ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsOEVBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSDtBQUVFO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUg7QUFLRTs7RUFFQyxrQkFBQTtFQUNBLGtCQUFBO0FBSEg7QUFLRzs7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtHOztFQUNDLGVBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0c7O0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRko7QUFLRzs7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFPRztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFMTDtBQVFJO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQU5MO0FBUUs7RUFDQyxtQkFBQTtFQUNBLHFCQUFBO0FBTk47QUFXRztFQUNDLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVRKO0FBV0k7RUFDQyxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBVEw7QUFXSztFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFUTjtBQVlLO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVZOO0FBYUs7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFYTjtBQWNLO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBWk47QUFvQkM7RUFDQyw2REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0FBbEJGO0FBb0JFO0VBQ0MsMkJBQUE7RUFDQSwrQ0FBQTtBQWxCSDtBQXNCQztFQUNDLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXBCRjtBQXNCRTtFQUNDLG1CQUFBO0VBQ0EscUJBQUE7QUFwQkg7O0FBeUJBO0VBQ0M7SUFDQyx1QkFBQTtFQXRCQTtFQXdCRDtJQUNDLHlCQUFBO0VBdEJBO0FBQ0Y7QUEwQkE7RUFJSTtJQUNDLDBCQUFBO0lBQ0EsU0FBQTtFQTNCSDtBQUNGO0FBQ0Esby9PQUFvL08iLCJzb3VyY2VzQ29udGVudCI6WyIuemVsZi1rZXlzLW5vdGVzIHtcblx0cGFkZGluZzogMDtcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG5cblx0LmhlYWRlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRoMiB7XG5cdFx0XHRmb250LXNpemU6IDI4cHg7XG5cdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHR9XG5cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdH1cblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHQubG9hZGluZy1zdGF0ZSxcblx0XHQuZXJyb3Itc3RhdGUge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogNjBweCAyMHB4O1xuXG5cdFx0XHQuc3Bpbm5lciB7XG5cdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdGJvcmRlcjogM3B4IHNvbGlkICNmMGYwZjA7XG5cdFx0XHRcdGJvcmRlci10b3A6IDNweCBzb2xpZCAjNjY3ZWVhO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvIDIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiA0OHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMyB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0Y29sb3I6ICMxYTFhMWE7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDEycHggMDtcblx0XHRcdH1cblxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdG1hcmdpbjogMCAwIDI0cHggMDtcblx0XHRcdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQubm90ZXMtZ3JpZCB7XG5cdFx0XHQubGlzdC1oZWFkZXIge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMWExYTFhO1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5idG4tc2Vjb25kYXJ5IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0XHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRcdFx0cGFkZGluZzogOHB4IDE2cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2U5ZWNlZjtcblx0XHRcdFx0XHRcdGJvcmRlci1jb2xvcjogI2NlZDRkYTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Lm5vdGVzLWNhcmRzIHtcblx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuXHRcdFx0XHRnYXA6IDI0cHg7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMycHg7XG5cblx0XHRcdFx0LmFkZC1ub3RlIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRcdFx0XHRcdGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0XHRcdFx0cGFkZGluZzogNDBweCAyMHB4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0bWluLWhlaWdodDogMjAwcHg7XG5cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNlOWVjZWY7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICNhZGI1YmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmFkZC1pY29uIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNDhweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNmM3NTdkO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM0OTUwNTc7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCA4cHggMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNmM3NTdkO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEdsb2JhbCBidXR0b24gc3R5bGVzIGZvciB0aGlzIGNvbXBvbmVudFxuXHQuYnRuLXByaW1hcnkge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0cGFkZGluZzogMTZweCAzMnB4O1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblx0XHRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4zKTtcblxuXHRcdCY6aG92ZXIge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXHRcdFx0Ym94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG5cdFx0fVxuXHR9XG5cblx0LmJ0bi1zZWNvbmRhcnkge1xuXHRcdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0XHRjb2xvcjogIzY2Njtcblx0XHRwYWRkaW5nOiAxMnB4IDI0cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZTllY2VmO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC56ZWxmLWtleXMtbm90ZXMge1xuXHRcdC5jb250ZW50IHtcblx0XHRcdC5ub3Rlcy1ncmlkIHtcblx0XHRcdFx0Lm5vdGVzLWNhcmRzIHtcblx0XHRcdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRcdFx0XHRnYXA6IDE2cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_zelf-keys-notes_zelf-keys-notes_component_ts.js.map