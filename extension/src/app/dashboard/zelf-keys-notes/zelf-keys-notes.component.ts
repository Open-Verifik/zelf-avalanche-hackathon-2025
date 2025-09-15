import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { Subject } from "rxjs";
import { ChromeService } from "../../chrome.service";
import { NoteDataService } from "../../services/note-data.service";
import { WalletService } from "../../wallet.service";
import { DataCardComponent } from "../shared/data-card.component";

@Component({
    imports: [CommonModule, TranslocoModule, RouterModule, DataCardComponent],
    selector: "app-zelf-keys-notes",
    standalone: true,
    styleUrls: ["./zelf-keys-notes.component.scss"],
    templateUrl: "./zelf-keys-notes.component.html",
})
export class ZelfKeysNotesComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    error: string | null = null;
    loading = false;
    storedNotes: any[] = [];

    constructor(
        private router: Router,
        private walletService: WalletService,
        private chromeService: ChromeService,
        private noteDataService: NoteDataService
    ) {}

    async ngOnInit(): Promise<void> {
        // Ensure extension is in full screen mode for better user experience
        if (this.chromeService.isExtension) {
            await this.chromeService.ensureFullScreen("dashboard/notes");
        }

        this.loadStoredNotes();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    async loadStoredNotes(): Promise<void> {
        this.loading = true;
        this.error = null;

        try {
            const response = await this.walletService.listStoredNotes();

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
        this.router.navigate(["/dashboard/notes/new"]);
    }

    onRefresh(): void {
        this.loadStoredNotes();
    }

    onNoteClick(note: any): void {
        // Store the note data and navigate to detail view
        this.noteDataService.setCurrentNote(note);
        this.router.navigate(["/dashboard/notes/detail"]);
    }

    trackByNote(index: number, note: any): any {
        return note.id || note.publicData?.id || index;
    }
}
