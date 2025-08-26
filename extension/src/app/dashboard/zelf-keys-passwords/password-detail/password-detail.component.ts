import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { WalletService } from "../../../wallet.service";
import { PasswordDataService } from "../../../services/password-data.service";
import { DataBiometricsComponent } from "../../shared/data-biometrics.component";
import { ChromeService } from "../../../chrome.service";

@Component({
	selector: "app-password-detail",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, DataBiometricsComponent],
	templateUrl: "./password-detail.component.html",
	styleUrls: ["./password-detail.component.scss"],
})
export class PasswordDetailComponent implements OnInit, OnDestroy {
	password: any = null;
	loading = false;
	error: string | null = null;
	showBiometrics = false;
	decryptedData: any = null;
	decrypting = false;

	private destroy$ = new Subject<void>();

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private walletService: WalletService,
		private passwordDataService: PasswordDataService,
		private chromeService: ChromeService
	) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better security when viewing password details
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/passwords/detail");
		}

		this.loadPasswordData();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	async loadPasswordData(): Promise<void> {
		this.loading = true;
		this.error = null;

		try {
			// Get password data from the service
			const passwordData = this.passwordDataService.getCurrentPassword();

			if (!passwordData) {
				this.error = "Password data not found";
				return;
			}

			this.password = passwordData;
		} catch (error) {
			this.error = "Failed to load password data";
		} finally {
			this.loading = false;
		}
	}

	onDecryptClick(): void {
		this.showBiometrics = true;
	}

	onBiometricsSuccess(biometricData: any): void {
		// Use the data that was already retrieved from the biometrics component
		if (biometricData.retrievedData) {
			this.decryptedData = {
				...biometricData.retrievedData.metadata,
				// Also include some public data for display
				website: biometricData.retrievedData.publicData?.website,
				zelfName: biometricData.retrievedData.publicData?.zelfName,
				timestamp: biometricData.retrievedData.publicData?.timestamp,
				type: biometricData.retrievedData.publicData?.type,
				category: biometricData.retrievedData.publicData?.category,
				difficulty: biometricData.retrievedData.difficulty,
			};
			this.showBiometrics = false;
		} else {
			console.error("No retrieved data found in biometrics response");
			this.error = "Failed to retrieve password data";
		}
	}

	onBiometricsCancel(): void {
		this.showBiometrics = false;
	}

	async decryptPassword(biometricData: any): Promise<void> {
		this.decrypting = true;
		this.error = null;

		try {
			const payload = {
				zelfProof: this.password.publicData.zelfProof,
				faceBase64: biometricData.faceBase64,
				password: biometricData.password || undefined, // Optional
			};

			const response = await this.walletService.retrievePassword(payload);

			if (response?.data?.metadata) {
				// The decrypted data is in response.data.metadata
				this.decryptedData = {
					...response.data.metadata,
					// Also include some public data for display
					website: response.data.publicData?.website,
					zelfName: response.data.publicData?.zelfName,
					timestamp: response.data.publicData?.timestamp,
					type: response.data.publicData?.type,
					category: response.data.publicData?.category,
					difficulty: response.data.difficulty,
				};
				this.showBiometrics = false;
			} else {
				throw new Error("Failed to decrypt password data");
			}
		} catch (error) {
			console.error("Error decrypting password:", error);
			this.error = "Failed to decrypt password. Please try again.";
		} finally {
			this.decrypting = false;
		}
	}

	onBackToList(): void {
		// Clear the password data from service
		this.passwordDataService.clearCurrentPassword();
		this.router.navigate(["/dashboard/passwords"]);
	}

	onEditPassword(): void {
		// Navigate to edit password with the current data
		this.router.navigate(["/dashboard/passwords/edit"], {
			state: { password: this.password },
		});
	}

	onCopyPassword(): void {
		if (this.decryptedData?.password) {
			navigator.clipboard
				.writeText(this.decryptedData.password)
				.then(() => {
					// Could add a toast notification here
					console.log("Password copied to clipboard");
				})
				.catch((err) => {
					console.error("Failed to copy password:", err);
				});
		}
	}
}
