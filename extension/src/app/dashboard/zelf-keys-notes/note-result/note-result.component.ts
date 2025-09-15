import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";

import { CopyToClipboardBase } from "app/base/copy-to-clipboard/copy-to-clipboard.base";
import { ChromeService } from "app/chrome.service";
import { DataPassingService, ApiResult } from "app/services/data-passing.service";

@Component({
    selector: "app-note-result",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule],
    templateUrl: "./note-result.component.html",
    styleUrls: ["./note-result.component.scss"],
})
export class NoteResultComponent extends CopyToClipboardBase implements OnInit {
    apiResult: any = null;
    noteData: any = null;
    loading = false;
    error: string | null = null;
    showDebug = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private chromeService: ChromeService,
        private dataPassingService: DataPassingService,
        private snackBar: MatSnackBar,
        private translocoService: TranslocoService
    ) {
        super(chromeService, snackBar, translocoService);
    }

    async ngOnInit(): Promise<void> {
        // Ensure extension is in full screen mode for better user experience
        if (this.chromeService.isExtension) {
            await this.chromeService.ensureFullScreen("dashboard/notes/result");
        }

        // Get data from service instead of query params

        // Get API result from service
        const apiResult = this.dataPassingService.getResult("notes");
        if (apiResult) {
            this.apiResult = apiResult;
        } else {
            this.error = "No API result available";
        }
    }

    getResultStatus(): "success" | "error" | "unknown" {
        if (this.error || this.apiResult?.error) {
            return "error";
        }
        if (this.apiResult?.success === true) {
            return "success";
        }
        return "unknown";
    }

    getStatusIcon(): string {
        switch (this.getResultStatus()) {
            case "success":
                return "✅";
            case "error":
                return "❌";
            default:
                return "❓";
        }
    }

    getStatusTitle(): string {
        switch (this.getResultStatus()) {
            case "success":
                return "Note Stored Successfully!";
            case "error":
                return "Error Storing Note";
            default:
                return "Unknown Status";
        }
    }

    getStatusMessage(): string {
        switch (this.getResultStatus()) {
            case "success":
                return "Your note has been securely stored and encrypted with blockchain verification.";
            case "error":
                return this.error || "An error occurred while storing your note.";
            default:
                return "The system couldn't determine the storage status.";
        }
    }

    toggleDebugView(): void {
        this.showDebug = !this.showDebug;
    }

    onBackToNotes(): void {
        this.router.navigate(["/dashboard/notes"]);
    }

    async onAddAnotherNote(): Promise<void> {
        // Clear the stored data when starting fresh
        await this.dataPassingService.clearAll("notes");
        this.router.navigate(["/dashboard/notes/new"]);
    }

    async copyZelfProof(): Promise<void> {
        if (!this.apiResult?.zelfProof) return;

        await this._copyToClipboard(this.apiResult.zelfProof);
    }
}
