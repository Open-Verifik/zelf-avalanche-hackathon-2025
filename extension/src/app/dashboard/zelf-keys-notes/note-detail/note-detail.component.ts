import { CopyToClipboardBase } from "@/app/base/copy-to-clipboard/copy-to-clipboard.base";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { Subject } from "rxjs";

import { ChromeService } from "../../../chrome.service";
import { NoteDataService } from "../../../services/note-data.service";
import { ScrollToSectionService } from "../../../services/scroll-to-section.service";
import { WalletService } from "../../../wallet.service";
import { NoteItem, DecryptedNoteData } from "../../../models/zelf-key-item.model";
import { BiometricsBottomSheetComponent, BiometricResult, BiometricsBottomSheetData } from "../../shared/biometrics-bottom-sheet.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { DecryptedItemData } from "../../../models/zelf-key-item.model";

@Component({
    imports: [CommonModule, TranslocoModule, RouterModule],
    selector: "app-note-detail",
    styleUrls: ["./note-detail.component.scss"],
    templateUrl: "./note-detail.component.html",
})
export class NoteDetailComponent extends CopyToClipboardBase implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    decryptedData: DecryptedNoteData | null = null;
    decrypting = false;
    error: string | null = null;
    loading = false;
    note: NoteItem | null = null;
    showBiometrics = false;

    constructor(
        private _noteDataService: NoteDataService,
        private _router: Router,
        private _scrollToSectionService: ScrollToSectionService,
        private _walletService: WalletService,
        public _chromeService: ChromeService,
        public _snackBar: MatSnackBar,
        public _translocoService: TranslocoService,
        private _bottomSheet: MatBottomSheet
    ) {
        super(_chromeService, _snackBar, _translocoService);
    }

    async ngOnInit(): Promise<void> {
        if (this._chromeService.isExtension) {
            await this._chromeService.ensureFullScreen("dashboard/notes/detail");
        }

        this.loadNoteData();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private async loadNoteData(): Promise<void> {
        this.loading = true;
        this.error = null;

        try {
            // Get note data from the service
            const noteData = this._noteDataService.getCurrentNote();

            if (!noteData) {
                this.error = "No note data available";
                return;
            }

            this.note = noteData;
        } catch (error) {
            console.error("Error loading note data:", error);
            this.error = "Failed to load note data";
        } finally {
            this.loading = false;
        }
    }

    onDecryptClick(): void {
        const bottomSheetRef = this._bottomSheet.open(BiometricsBottomSheetComponent, {
            backdropClass: "zelf-backdrop",
            panelClass: "zelf-bottom-sheet-biometrics",
            data: {
                itemData: this.note,
                itemType: "note",
                mode: "decrypt",
            } as BiometricsBottomSheetData,
        });

        bottomSheetRef.afterDismissed().subscribe((result: BiometricResult | undefined) => {
            if (result) {
                this.onBiometricsSuccess(result);
            }
        });
    }

    onBiometricsSuccess(biometricData: BiometricResult): void {
        if (biometricData.retrievedData) {
            // The retrievedData is now a DecryptedItemData structure
            const decryptedItem = biometricData.retrievedData;

            this.decryptedData = {
                title: decryptedItem.metadata.title || "No title",
                content: decryptedItem.metadata.content || "No content",
                folder: decryptedItem.publicData?.folder || "No folder",
            };

            // Trigger scroll to decrypted content section
            this._scrollToSectionService.scrollToSection("note-decrypted-content", "note");
        } else {
            console.error("No retrieved data found in biometrics response");
            this.error = "Failed to retrieve note data";
        }
    }

    async decryptNote(biometricData: any): Promise<void> {
        this.decrypting = true;
        this.error = null;

        try {
            const payload = {
                zelfProof: this.note!.publicData.zelfProof,
                faceBase64: biometricData.faceBase64,
                password: biometricData.password || undefined, // Optional
            };

            const response = await this._walletService.retrievePassword(payload);

            if (response?.data?.metadata) {
                this.decryptedData = {
                    title: response.data.metadata.title || "No title",
                    content: response.data.metadata.content || "No content",
                    folder: response.data.metadata.folder || "No folder",
                };

                this.showBiometrics = false;
            } else {
                throw new Error("Failed to decrypt note data");
            }
        } catch (error) {
            console.error("Error decrypting note:", error);
            this.error = "Failed to decrypt note. Please try again.";
        } finally {
            this.decrypting = false;
        }
    }

    onBackToList(): void {
        this._noteDataService.clearCurrentNote();
        this._router.navigate(["/dashboard/notes"]);
    }

    onCopyNoteId(): void {
        if (this.note?.id) {
            this._copyToClipboard(this.note.id);
        }
    }

    onCopyNoteContent(): void {
        if (this.decryptedData?.content) {
            this._copyToClipboard(this.decryptedData.content);
        }
    }

    onCopyNoteTitle(): void {
        if (this.decryptedData?.title) {
            this._copyToClipboard(this.decryptedData.title);
        }
    }

    onImageError(event: Event): void {
        const img = event.target as HTMLImageElement;
        img.style.display = "none";
        // Optionally show a placeholder or error message
        const container = img.parentElement;
        if (container) {
            container.innerHTML = '<div class="note-detail__image-error">Image not available</div>';
        }
    }

    onDownloadZelfProof(): void {
        if (!this.note?.url) return;

        const link = document.createElement("a");
        link.href = this.note.url;
        link.download = `zelfproof-${this.note.publicData.title || "note"}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
