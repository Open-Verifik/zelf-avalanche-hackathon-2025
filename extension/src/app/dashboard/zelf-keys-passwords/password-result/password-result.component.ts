import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";

import { CopyToClipboardBase } from "app/base/copy-to-clipboard/copy-to-clipboard.base";
import { ChromeService } from "app/chrome.service";
import { DataPassingService, ApiResult } from "app/services/data-passing.service";

@Component({
    selector: "app-password-result",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule],
    templateUrl: "./password-result.component.html",
    styleUrls: ["./password-result.component.scss"],
})
export class PasswordResultComponent extends CopyToClipboardBase implements OnInit {
    apiResult: any = {};
    passwordData: any = {};
    loading = true;
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
        // Ensure extension is in full screen mode for better security when showing password results
        if (this.chromeService.isExtension) {
            await this.chromeService.ensureFullScreen("dashboard/passwords/result");
        }

        // Get data from service instead of query params

        // Get API result from service
        const apiResult = this.dataPassingService.getResult("passwords");
        if (apiResult) {
            this.apiResult = apiResult;
        } else {
            this.apiResult = { error: "No API result available" };
        }

        // Get password form data from service
        const passwordData = this.dataPassingService.getData("passwords");
        if (passwordData) {
            this.passwordData = passwordData;
        }

        this.loading = false;
    }

    onBackToPasswords(): void {
        this.router.navigate(["/dashboard/passwords"]);
    }

    async onAddAnotherPassword(): Promise<void> {
        // Clear the stored data when starting fresh
        await this.dataPassingService.clearAll("passwords");
        this.router.navigate(["/dashboard/passwords/new"]);
    }

    toggleDebugView(): void {
        this.showDebug = !this.showDebug;
    }

    async copyZelfProof(): Promise<void> {
        if (!this.apiResult.zelfProof) return;

        await this._copyToClipboard(this.apiResult.zelfProof);
    }

    getResultStatus(): "success" | "error" | "unknown" {
        if (this.apiResult.error) {
            return "error";
        }
        if (this.apiResult.success === true) {
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
                return "Password Stored Successfully!";
            case "error":
                return "Error Storing Password";
            default:
                return "Unknown Status";
        }
    }

    getStatusMessage(): string {
        switch (this.getResultStatus()) {
            case "success":
                return "Your password has been securely stored with biometric verification.";
            case "error":
                return "There was an error storing your password. Please try again.";
            default:
                return "The status of your password storage request is unclear.";
        }
    }
}
