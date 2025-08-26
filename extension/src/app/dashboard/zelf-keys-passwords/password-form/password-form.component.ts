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
		// Ensure extension is in full screen mode for better security when handling passwords
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/passwords/new");
		}

		// Check if this is a new password or editing existing
		const id = this.route.snapshot.paramMap.get("id");
		this.isNewPassword = id === "new";

		if (!this.isNewPassword) {
			// TODO: Load existing password data
			// this.loadPasswordData(id);
		}

		this.checkFormValidity();
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
	}

	onCancel(): void {
		this.router.navigate(["/dashboard/passwords"]);
	}

	async onSave(): Promise<void> {
		if (!this.formValid) {
			return;
		}

		// Store data in service instead of query params
		const formData = {
			...this.passwordData,
			type: "passwords",
		};

		await this.dataPassingService.storeData("passwords", formData);
	}
}
