import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";

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
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
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
		this.formValid = !!(this.passwordData.url && this.passwordData.title && this.passwordData.email && this.passwordData.password);
	}

	onCancel(): void {
		this.router.navigate(["/dashboard/passwords"]);
	}

	onSave(): void {
		if (!this.formValid) {
			return;
		}

		// Navigate to biometrics step with password data
		const passwordData = encodeURIComponent(JSON.stringify(this.passwordData));
		this.router.navigate(["/dashboard/passwords/biometrics"], {
			queryParams: { passwordData },
		});
	}
}
