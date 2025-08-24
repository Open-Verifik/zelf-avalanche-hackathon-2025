import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { WalletService } from "../../../wallet.service";
import { PasswordDataService } from "../../../services/password-data.service";
import { PasswordBiometricsComponent } from "../password-biometrics/password-biometrics.component";

@Component({
	selector: "app-password-detail",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule, PasswordBiometricsComponent],
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
		private passwordDataService: PasswordDataService
	) {}

	ngOnInit(): void {
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
			if (passwordData) {
				this.password = passwordData;
				console.log("Password data loaded from service:", this.password);
			} else {
				// Fallback: try to get from route params if needed
				console.error("No password data found in service");
				this.error = "Password data not found";
			}
		} catch (error) {
			console.error("Error loading password data:", error);
			this.error = "Failed to load password data";
		} finally {
			this.loading = false;
		}
	}

	onDecryptClick(): void {
		this.showBiometrics = true;
	}

	onBiometricsSuccess(biometricData: any): void {
		this.decryptPassword(biometricData);
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
			console.log("Retrieve API response:", response);

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
