import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { WalletService } from "../../wallet.service";
import { ChromeService } from "../../chrome.service";
import { DataCardComponent } from "../shared/data-card.component";

@Component({
	selector: "app-zelf-keys-notes",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, DataCardComponent],
	templateUrl: "./zelf-keys-notes.component.html",
	styleUrls: ["./zelf-keys-notes.component.scss"],
})
export class ZelfKeysNotesComponent implements OnInit, OnDestroy {
	storedNotes: any[] = [];
	loading = false;
	error: string | null = null;
	private destroy$ = new Subject<void>();

	constructor(
		private router: Router,
		private walletService: WalletService,
		private chromeService: ChromeService
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

			console.log("Full notes response:", response);

			if (response?.data && Array.isArray(response.data)) {
				this.storedNotes = response.data;
				console.log("Stored notes:", this.storedNotes);
			} else if (response?.data && Array.isArray(response.data.data)) {
				// Handle nested data structure
				this.storedNotes = response.data.data;
				console.log("Stored notes (nested):", this.storedNotes);
			} else {
				console.log("No valid data structure found in notes response");
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
		console.log("Note clicked:", note);
		// Navigate to note detail view or handle note action
		// this.router.navigate(["/dashboard/notes/detail"]);
	}

	trackByNote(index: number, note: any): any {
		return note.id || note.publicData?.id || index;
	}
}
