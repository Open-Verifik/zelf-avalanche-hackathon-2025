import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService, ApiResult } from "../../../services/data-passing.service";

@Component({
	selector: "app-password-result",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule],
	templateUrl: "./password-result.component.html",
	styleUrls: ["./password-result.component.scss"],
})
export class PasswordResultComponent implements OnInit {
	apiResult: any = {};
	passwordData: any = {};
	loading = true;
	showDebug = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {}

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
		if (this.apiResult.zelfProof) {
			try {
				await navigator.clipboard.writeText(this.apiResult.zelfProof);
				// You could add a toast notification here
			} catch (error) {
				// Fallback for older browsers
				const textArea = document.createElement("textarea");
				textArea.value = this.apiResult.zelfProof;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand("copy");
				document.body.removeChild(textArea);
			}
		}
	}

	getResultStatus(): "success" | "error" | "unknown" {
		if (this.apiResult.error || this.apiResult.status === "error") {
			return "error";
		}
		if (this.apiResult.status === "success" || this.apiResult.data) {
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
