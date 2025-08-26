import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService, ApiResult } from "../../../services/data-passing.service";

@Component({
	selector: "app-note-result",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule],
	templateUrl: "./note-result.component.html",
	styleUrls: ["./note-result.component.scss"],
})
export class NoteResultComponent implements OnInit {
	apiResult: any = null;
	loading = false;
	error: string | null = null;
	showDebug = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/notes/result");
		}

		// Get data from service instead of query params
		console.log("🔍 DEBUG NoteResult - Getting data from service");

		// Get API result from service
		const apiResult = this.dataPassingService.getResult("notes");
		if (apiResult) {
			this.apiResult = apiResult;
			console.log("✅ DEBUG - Retrieved API result from service:", this.apiResult);
		} else {
			console.log("⚠️ DEBUG - No API result found in service");
			this.error = "No API result available";
		}
	}

	getResultStatus(): "success" | "error" | "unknown" {
		if (this.error) return "error";
		if (this.apiResult?.success) return "success";
		return "unknown";
	}

	toggleDebugView(): void {
		this.showDebug = !this.showDebug;
	}

	onBackToNotes(): void {
		this.router.navigate(["/dashboard/notes"]);
	}

	onAddAnotherNote(): void {
		// Clear the stored data when starting fresh
		this.dataPassingService.clearAll("notes");
		console.log("🔍 DEBUG - Cleared all note data from service");
		this.router.navigate(["/dashboard/notes/new"]);
	}
}
