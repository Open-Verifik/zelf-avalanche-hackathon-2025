import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService } from "../../../services/data-passing.service";

@Component({
	selector: "app-password-form",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, FormsModule],
	templateUrl: "./password-form.component.html",
	styleUrls: ["./password-form.component.scss"],
})
export class PasswordFormComponent implements OnInit {
	passwordData = {
		url: "https://google.com",
		title: "Google Personal",
		email: "juliet@google.com",
		password: "mypassword123",
		notes: "My google account",
		folder: "My Favorites",
		insideFolder: true,
	};

	isNewPassword = true;
	showPassword = false;
	formValid = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {}

	async ngOnInit(): Promise<void> {
		console.log("🔍 DEBUG Password Form ngOnInit:");
		console.log("  - Component initialized");

		// Ensure extension is in full screen mode for better security when handling passwords
		if (this.chromeService.isExtension) {
			console.log("  - Extension detected, ensuring full screen");
			await this.chromeService.ensureFullScreen("dashboard/passwords/new");
			console.log("  - Full screen ensured");
		}

		// Check if this is a new password or editing existing
		const id = this.route.snapshot.paramMap.get("id");
		this.isNewPassword = id === "new";
		console.log("  - Route ID:", id);
		console.log("  - Is new password:", this.isNewPassword);

		if (!this.isNewPassword) {
			// TODO: Load existing password data
			// this.loadPasswordData(id);
			console.log("  - Would load existing password data for ID:", id);
		}

		this.checkFormValidity();
		console.log("  - Form validity checked:", this.formValid);
		console.log("  - Initial passwordData:", this.passwordData);
	}

	togglePasswordVisibility(): void {
		this.showPassword = !this.showPassword;
	}

	toggleFolder(): void {
		this.passwordData.insideFolder = !this.passwordData.insideFolder;
	}

	checkFormValidity(): void {
		const hasUrl = !!this.passwordData.url;
		const hasTitle = !!this.passwordData.title;
		const hasEmail = !!this.passwordData.email;
		const hasPassword = !!this.passwordData.password;

		this.formValid = !!(hasUrl && hasTitle && hasEmail && hasPassword);

		console.log("🔍 DEBUG checkFormValidity:");
		console.log("  - URL:", this.passwordData.url, "→", hasUrl);
		console.log("  - Title:", this.passwordData.title, "→", hasTitle);
		console.log("  - Email:", this.passwordData.email, "→", hasEmail);
		console.log("  - Password:", this.passwordData.password, "→", hasPassword);
		console.log("  - Form valid:", this.formValid);
	}

	onCancel(): void {
		this.router.navigate(["/dashboard/passwords"]);
	}

	onSave(): void {
		if (!this.formValid) {
			console.log("❌ Form validation failed, cannot save");
			return;
		}

		console.log("🔍 DEBUG Password Form onSave:");
		console.log("  - Form valid:", this.formValid);
		console.log("  - passwordData:", this.passwordData);

		// Store data in service instead of query params
		const formData = {
			...this.passwordData,
			type: "passwords",
		};

		this.dataPassingService.storeData("passwords", formData);
		console.log("🔍 DEBUG - Data stored in service:", formData);

		// Navigate to biometrics step
		console.log("🔍 DEBUG Navigation - Target route: /dashboard/passwords/biometrics");
		this.router.navigate(["/dashboard/passwords/biometrics"]);
	}
}
