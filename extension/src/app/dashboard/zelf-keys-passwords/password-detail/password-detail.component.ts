import { CopyToClipboardBase } from "@/app/base/copy-to-clipboard/copy-to-clipboard.base";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { Subject } from "rxjs";

import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ChromeService } from "../../../chrome.service";
import { AutofillIntegrationService } from "../../../services/autofill-integration.service";
import { PasswordDataService } from "../../../services/password-data.service";
import { ScrollToSectionService } from "../../../services/scroll-to-section.service";
import { WalletService } from "../../../wallet.service";
import {
    BiometricResult,
    BiometricsBottomSheetComponent,
    BiometricsBottomSheetData,
} from "../../shared/biometrics-bottom-sheet/biometrics-bottom-sheet.component";

@Component({
    imports: [CommonModule, TranslocoModule, RouterModule],
    selector: "app-password-detail",
    styleUrls: ["./password-detail.component.scss"],
    templateUrl: "./password-detail.component.html",
})
export class PasswordDetailComponent extends CopyToClipboardBase implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    decryptedData: any = null;
    decrypting = false;
    error: string | null = null;
    loading = false;
    password: any = null;
    showBiometrics = false;
    showPassword = false;

    constructor(
        private _autofillIntegrationService: AutofillIntegrationService,
        private _passwordDataService: PasswordDataService,
        private _router: Router,
        private _scrollToSectionService: ScrollToSectionService,
        private _walletService: WalletService,
        public _chromeService: ChromeService,
        public _snackBar: MatSnackBar,
        public _translocoService: TranslocoService,
        private _bottomSheet: MatBottomSheet
    ) {
        super(_chromeService, _snackBar, _translocoService);
    }

    async ngOnInit(): Promise<void> {
        if (this._chromeService.isExtension) {
            await this._chromeService.ensureFullScreen("dashboard/passwords/detail");
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
            const passwordData = this._passwordDataService.getCurrentPassword();

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
        const bottomSheetRef = this._bottomSheet.open(BiometricsBottomSheetComponent, {
            backdropClass: "zelf-backdrop",
            panelClass: "zelf-bottom-sheet-biometrics",
            data: {
                itemData: this.password,
                itemType: "password",
                mode: "decrypt",
            } as BiometricsBottomSheetData,
        });

        bottomSheetRef.afterDismissed().subscribe((result: BiometricResult | undefined) => {
            if (result) {
                this.onBiometricsSuccess(result);
            }
        });
    }

    onBiometricsSuccess(biometricData: BiometricResult): void {
        if (biometricData.retrievedData) {
            // The retrievedData is now a DecryptedItemData structure
            const decryptedItem = biometricData.retrievedData;

            this.decryptedData = {
                username: decryptedItem.metadata.username || "",
                password: decryptedItem.metadata.password || "",
                website: (decryptedItem.publicData as any)?.website || "",
                category: decryptedItem.publicData?.category,
                difficulty: decryptedItem.difficulty,
                timestamp: decryptedItem.publicData?.timestamp,
                type: (decryptedItem.publicData as any)?.type,
                zelfName: decryptedItem.publicData?.zelfName,
            };

            // Trigger scroll to decrypted content section
            this._scrollToSectionService.scrollToSection("password-decrypted-content", "password");
        } else {
            console.error("No retrieved data found in biometrics response");
            this.error = "Failed to retrieve password data";
        }
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

            const response = await this._walletService.retrievePassword(payload);

            if (response?.data?.metadata) {
                this.decryptedData = {
                    ...response.data.metadata,
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
        this._passwordDataService.clearCurrentPassword();
        this._router.navigate(["/dashboard/passwords"]);
    }

    onCopyPassword(): void {
        if (!this.decryptedData?.password) return;

        this._copyToClipboard(this.decryptedData.password);
    }

    onTogglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    onCopyWebsite(): void {
        if (this.decryptedData?.website) {
            this._copyToClipboard(this.decryptedData.website);
        }
    }

    onImageError(event: Event): void {
        const img = event.target as HTMLImageElement;
        img.style.display = "none";
        // Optionally show a placeholder or error message
        const container = img.parentElement;
        if (container) {
            container.innerHTML = '<div class="password-detail__image-error">Image not available</div>';
        }
    }

    onDownloadZelfProof(): void {
        if (!this.password?.url) return;

        const link = document.createElement("a");
        link.href = this.password.url;
        link.download = `zelfproof-${this.password.publicData?.website || "password"}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    getWebsiteHostname(website: string): string {
        if (!website) return "";

        try {
            const url = new URL(website);
            return url.hostname;
        } catch (error) {
            return website;
        }
    }

    copyWebsiteToClipboard(): void {
        if (!this.password?.publicData?.website) return;

        this._copyToClipboard(this.password.publicData.website);
    }

    async prefillWebsite(): Promise<void> {
        if (!this.password?.publicData?.website || !this.decryptedData) {
            console.warn("Cannot prefill: missing website or decrypted data");
            return;
        }

        try {
            // Open the website in a new tab using browser API directly
            const newTab = await browser.tabs.create({ url: this.password.publicData.website });

            if (!newTab?.id) return;

            // Use the new waitForFormAndFill method
            await this._autofillIntegrationService.waitForFormAndFill(newTab.id, {
                username: this.decryptedData.username,
                password: this.decryptedData.password,
                website: this.password.publicData.website,
                tabId: newTab.id,
            });

            console.log("Prefill request sent for tab:", newTab.id);
        } catch (error) {
            console.error("Error prefilling website:", error);
        }
    }
}
