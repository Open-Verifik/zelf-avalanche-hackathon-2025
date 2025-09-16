import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { Subject, takeUntil } from "rxjs";
import { ChromeService } from "../../chrome.service";
import { BillingService } from "../../services/billing.service";
import { NoteDataService } from "../../services/note-data.service";
import { WalletService } from "../../wallet.service";
import { DataCardComponent } from "../shared/data-card/data-card.component";
import { SubscriptionBannerComponent } from "../shared/subscription-banner/subscription-banner.component";

@Component({
    imports: [CommonModule, TranslocoModule, RouterModule, DataCardComponent, SubscriptionBannerComponent],
    selector: "app-zelf-keys-notes",
    standalone: true,
    styleUrls: ["./zelf-keys-notes.component.scss"],
    templateUrl: "./zelf-keys-notes.component.html",
})
export class ZelfKeysNotesComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    currentPlan: string = "free";
    error: string | null = null;
    loading = true;
    storedNotes: any[] = [];

    constructor(
        private _billingService: BillingService,
        private _chromeService: ChromeService,
        private _noteDataService: NoteDataService,
        private _router: Router,
        private _walletService: WalletService
    ) {
        this._subscribeToBillingService();
    }

    async ngOnInit(): Promise<void> {
        // Ensure extension is in full screen mode for better user experience
        if (this._chromeService.isExtension) {
            await this._chromeService.ensureFullScreen("dashboard/notes");
        }

        this.loadStoredNotes();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private _subscribeToBillingService(): void {
        this.currentPlan = this._billingService.currentPlan;

        this._billingService.currentPlan$.pipe(takeUntil(this.destroy$)).subscribe((plan) => {
            this.currentPlan = plan;
        });
    }

    async loadStoredNotes(): Promise<void> {
        this.loading = true;
        this.error = null;

        try {
            const response = await this._walletService.listStoredNotes();

            if (response?.data && Array.isArray(response.data)) {
                this.storedNotes = response.data;
            } else if (response?.data && Array.isArray(response.data.data)) {
                // Handle nested data structure
                this.storedNotes = response.data.data;
            } else {
                this.storedNotes = [];
            }
        } catch (error) {
            console.error("Error loading stored notes:", error);
            this.error = "Failed to load stored notes. Please try again.";
            this.storedNotes = [];
        } finally {
            this.loading = false;
        }
    }

    onAddNote(): void {
        this._router.navigate(["/dashboard/notes/new"]);
    }

    onRefresh(): void {
        this.loadStoredNotes();
    }

    onNoteClick(note: any): void {
        // Store the note data and navigate to detail view
        this._noteDataService.setCurrentNote(note);
        this._router.navigate(["/dashboard/notes/detail"]);
    }

    trackByNote(index: number, note: any): any {
        return note.id || note.publicData?.id || index;
    }
}
