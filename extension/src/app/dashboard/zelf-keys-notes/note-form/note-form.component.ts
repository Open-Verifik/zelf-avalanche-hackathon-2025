import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";

import { Wallet } from "app/wallet";
import { WalletService } from "app/wallet.service";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService } from "../../../services/data-passing.service";
import {
    BiometricResult,
    BiometricsBottomSheetComponent,
    BiometricsBottomSheetData,
} from "../../shared/biometrics-bottom-sheet/biometrics-bottom-sheet.component";

@Component({
    selector: "app-note-form",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule, FormsModule],
    templateUrl: "./note-form.component.html",
    styleUrls: ["./note-form.component.scss"],
})
export class NoteFormComponent implements OnInit {
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
        masterPassword: "",
    };

    isNewNote = true;
    formValid = false;
    transformedNoteData: any = null;
    showMasterPassword = false;
    wallet!: Wallet;
    hasMasterPassword = false;
    shareables: any = {};

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private chromeService: ChromeService,
        private dataPassingService: DataPassingService,
        private _walletService: WalletService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _bottomSheet: MatBottomSheet
    ) {}

    async ngOnInit(): Promise<void> {
        // Ensure extension is in full screen mode for better security when handling notes
        if (this.chromeService.isExtension) {
            await this.chromeService.ensureFullScreen("dashboard/notes/new");
        }

        // Check if this is a new note or editing existing
        // For now, this route is always for creating new notes
        // TODO: Add edit route like "notes/edit/:id" for editing existing notes
        this.isNewNote = true;

        await this._setWallet();

        this.checkFormValidity();
    }

    private async _setWallet(): Promise<any> {
        const wallet = await this._walletService.getFirstWalletFromStorage();

        if (!wallet?.name) {
            this.router.navigate(["/welcome"]);

            return;
        }

        this.shareables.wallet = wallet;

        this.wallet = this.shareables.wallet;

        this.hasMasterPassword = wallet.hasPassword || false;

        this._changeDetectorRef.detectChanges();
        this.checkFormValidity();
    }

    toggleFolder(): void {
        this.noteData.insideFolder = !this.noteData.insideFolder;
    }

    toggleMasterPassword(): void {
        this.noteData.useMasterPassword = !this.noteData.useMasterPassword;
        if (!this.noteData.useMasterPassword) {
            this.noteData.masterPassword = ""; // Clear password when toggling off
        }
        this.checkFormValidity();
    }

    checkFormValidity(): void {
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

    onCancel(): void {
        this.router.navigate(["/dashboard/notes"]);
    }

    onBiometricsSuccess(biometricData: BiometricResult): void {
        // Navigate to result page after successful biometrics
        this.router.navigate(["/dashboard/notes/result"]);
    }

    onBiometricsCancel(): void {
        // Bottom sheet handles its own dismissal
    }

    async onSave(): Promise<void> {
        if (!this.formValid) {
            return;
        }

        // Transform note data to match backend API expectations
        // Convert content to keyValuePairs format
        this.transformedNoteData = {
            title: this.noteData.title,
            keyValuePairs: {
                content: this.noteData.content,
            },
            folder: this.noteData.folder,
            insideFolder: this.noteData.insideFolder,
            useMasterPassword: this.noteData.useMasterPassword,
            masterPassword: this.noteData.masterPassword,
            type: "notes",
        };

        await this.dataPassingService.storeData("notes", this.transformedNoteData);

        // Show biometrics bottom sheet instead of navigating
        this._openBiometricsBottomSheet();
    }

    toggleMasterPasswordVisibility(): void {
        this.showMasterPassword = !this.showMasterPassword;
    }

    private _openBiometricsBottomSheet(): void {
        const data: BiometricsBottomSheetData = {
            itemData: this.transformedNoteData,
            itemType: "note",
            mode: "encrypt",
        };

        const bottomSheetRef = this._bottomSheet.open(BiometricsBottomSheetComponent, {
            data: data,
            backdropClass: "zelf-backdrop",
            panelClass: "zelf-bottom-sheet-biometrics",
        });

        bottomSheetRef.afterDismissed().subscribe((result: BiometricResult | undefined) => {
            if (result) {
                this.onBiometricsSuccess(result);
            } else {
                this.onBiometricsCancel();
            }
        });
    }
}
