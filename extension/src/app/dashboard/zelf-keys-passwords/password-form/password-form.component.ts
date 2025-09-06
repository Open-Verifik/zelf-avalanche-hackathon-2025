import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService } from "../../../services/data-passing.service";
import { DataBiometricsComponent } from "../../shared/data-biometrics.component";
import { WalletService } from "app/wallet.service";
import { Wallet } from "app/wallet";

@Component({
	selector: "app-password-form",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, FormsModule, DataBiometricsComponent],
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
		masterPassword: "",
	};

	view?: string;
	shareables: any;
	wallet!: Wallet;
	hasMasterPassword = false;
	isNewPassword = true;
	showPassword = false;
	showMasterPassword = false;
	formValid = false;
	showBiometrics = false;
	transformedPasswordData: any = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService,
		private _walletService: WalletService,
		private _changeDetectorRef: ChangeDetectorRef
	) {
		this.view = this.route.snapshot.queryParamMap.get("view") || "home";

		this.shareables = {
			selectedTab: "assets",
			view: this.view,
			wallet: {},
		};
	}

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

		await this._setWallet();

		this.checkFormValidity();
	}

	private async _setWallet(): Promise<any> {
		const wallet = await this._walletService.getFirstWalletFromStorage();

		if (!wallet?.name) {
			this.router.navigate(["/welcome"]);

			return;
		}

		this.shareables.wallet = wallet;

		this.wallet = this.shareables.wallet;

		console.log("wallet", wallet);

		this.hasMasterPassword = wallet.hasPassword || false;

		this._changeDetectorRef.detectChanges();
		this.checkFormValidity();
	}

	togglePasswordVisibility(): void {
		this.showPassword = !this.showPassword;
	}

	toggleMasterPasswordVisibility(): void {
		this.showMasterPassword = !this.showMasterPassword;
	}

	toggleFolder(): void {
		this.passwordData.insideFolder = !this.passwordData.insideFolder;
	}

	checkFormValidity(): void {
		const hasUrl = !!this.passwordData.url;
		const hasTitle = !!this.passwordData.title;
		const hasEmail = !!this.passwordData.email;
		const hasPassword = !!this.passwordData.password;
		const hasMasterPassword = !!this.passwordData.masterPassword;

		// Master password is only required if the wallet has a password
		const masterPasswordValid = this.hasMasterPassword ? hasMasterPassword : true;

		this.formValid = !!(hasUrl && hasTitle && hasEmail && hasPassword && masterPasswordValid);
	}

	onCancel(): void {
		this.router.navigate(["/dashboard/passwords"]);
	}

	onBiometricsSuccess(biometricData: any): void {
		// Navigate to result page after successful biometrics
		this.router.navigate(["/dashboard/passwords/result"]);
	}

	onBiometricsCancel(): void {
		this.showBiometrics = false;
	}

	async onSave(): Promise<void> {
		if (!this.formValid) {
			return;
		}

		// Transform password data to match backend API expectations
		this.transformedPasswordData = {
			url: this.passwordData.url,
			title: this.passwordData.title,
			email: this.passwordData.email,
			password: this.passwordData.password,
			notes: this.passwordData.notes,
			folder: this.passwordData.folder,
			insideFolder: this.passwordData.insideFolder,
			masterPassword: this.passwordData.masterPassword,
			type: "passwords",
		};

		await this.dataPassingService.storeData("passwords", this.transformedPasswordData);

		// Show biometrics modal instead of navigating
		this.showBiometrics = true;
	}
}
