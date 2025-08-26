import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { WalletService } from "../../wallet.service";
import { PasswordDataService } from "../../services/password-data.service";
import { ChromeService } from "../../chrome.service";
import { DataCardComponent } from "../shared/data-card.component";
import { DataPassingService } from "../../services/data-passing.service";

@Component({
	selector: "app-zelf-keys-passwords",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, DataCardComponent],
	templateUrl: "./zelf-keys-passwords.component.html",
	styleUrls: ["./zelf-keys-passwords.component.scss"],
})
export class ZelfKeysPasswordsComponent implements OnInit, OnDestroy {
	storedPasswords: any[] = [];
	loading = false;
	error: string | null = null;
	private destroy$ = new Subject<void>();

	constructor(
		private router: Router,
		private walletService: WalletService,
		private passwordDataService: PasswordDataService,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better security and user experience
		// This is especially important for password management
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/passwords");
		}

		this.loadStoredPasswords();
		// clean up the data in local storage for the passwords inside data passing service
		this.dataPassingService.clearData("passwords");
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	async loadStoredPasswords(): Promise<void> {
		this.loading = true;
		this.error = null;

		try {
			const response = await this.walletService.listStoredPasswords();

			if (response?.data && Array.isArray(response.data)) {
				this.storedPasswords = response.data;
			} else if (response?.data && Array.isArray(response.data.data)) {
				// Handle nested data structure
				this.storedPasswords = response.data.data;
			} else {
				console.log("No valid data structure found in response");
				this.storedPasswords = [];
			}
		} catch (error) {
			this.error = "Failed to load stored passwords. Please try again.";
			this.storedPasswords = [];
		} finally {
			this.loading = false;
		}
	}

	onAddPassword(): void {
		this.router.navigate(["/dashboard/passwords/new"]);
	}

	onRefresh(): void {
		this.loadStoredPasswords();
	}

	onPasswordClick(password: any): void {
		// Store the password data in the service
		this.passwordDataService.setCurrentPassword(password);

		// Navigate to password detail view
		this.router.navigate(["/dashboard/passwords/detail"]);
	}

	trackByPassword(index: number, password: any): any {
		return password.publicData?.id || password.publicData?.title || index;
	}
}
