import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";

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
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		// Get result data from route query params
		this.route.queryParams.subscribe((params) => {
			if (params["result"]) {
				try {
					this.apiResult = JSON.parse(params["result"]);
				} catch (e) {
					console.error("Error parsing API result:", e);
					this.apiResult = { error: "Failed to parse API response" };
				}
			}

			if (params["passwordData"]) {
				try {
					this.passwordData = JSON.parse(decodeURIComponent(params["passwordData"]));
				} catch (e) {
					console.error("Error parsing password data:", e);
				}
			}

			this.loading = false;
		});
	}

	onBackToPasswords(): void {
		this.router.navigate(["/dashboard/passwords"]);
	}

	onAddAnotherPassword(): void {
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
