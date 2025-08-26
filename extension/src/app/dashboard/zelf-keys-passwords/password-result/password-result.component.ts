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
		console.log("🔍 DEBUG PasswordResult - Getting data from service");

		// Get API result from service
		const apiResult = this.dataPassingService.getResult("passwords");
		if (apiResult) {
			this.apiResult = apiResult;
			console.log("✅ DEBUG - Retrieved API result from service:", this.apiResult);
		} else {
			console.log("⚠️ DEBUG - No API result found in service");
			this.apiResult = { error: "No API result available" };
		}

		// Get password form data from service
		const passwordData = this.dataPassingService.getData("passwords");
		if (passwordData) {
			this.passwordData = passwordData;
			console.log("✅ DEBUG - Retrieved password data from service:", this.passwordData);
		} else {
			console.log("⚠️ DEBUG - No password data found in service");
		}

		this.loading = false;
	}

	onBackToPasswords(): void {
		this.router.navigate(["/dashboard/passwords"]);
	}

	onAddAnotherPassword(): void {
		// Clear the stored data when starting fresh
		this.dataPassingService.clearAll("passwords");
		console.log("🔍 DEBUG - Cleared all password data from service");
		this.router.navigate(["/dashboard/passwords/new"]);
	}

	toggleDebugView(): void {
		this.showDebug = !this.showDebug;
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
