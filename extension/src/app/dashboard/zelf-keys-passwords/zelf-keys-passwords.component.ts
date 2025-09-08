import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { Subject } from "rxjs";
import { ChromeService } from "../../chrome.service";
import { DataPassingService } from "../../services/data-passing.service";
import { PasswordDataService } from "../../services/password-data.service";
import { WalletService } from "../../wallet.service";
import { DataCardComponent } from "../shared/data-card.component";

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
        // Check if we're navigating to the decrypt route - if so, don't open fullscreen
        const currentUrl = this.router.url;
        const isDecryptRoute = currentUrl.includes("/passwords/decrypt");

        console.log("ZelfKeysPasswordsComponent: Current URL:", currentUrl);
        console.log("ZelfKeysPasswordsComponent: Is decrypt route:", isDecryptRoute);
        console.log("ZelfKeysPasswordsComponent: Is extension:", this.chromeService.isExtension);
        console.log("ZelfKeysPasswordsComponent: Is popout:", this.chromeService.isPopout);

        // Ensure extension is in full screen mode for better security and user experience
        // This is especially important for password management
        // But don't open fullscreen if we're navigating to the decrypt route (popup mode)
        if (this.chromeService.isExtension && !isDecryptRoute) {
            console.log("ZelfKeysPasswordsComponent: Opening fullscreen...");
            await this.chromeService.ensureFullScreen("dashboard/passwords");
        } else {
            console.log("ZelfKeysPasswordsComponent: Skipping fullscreen - decrypt route or not extension");
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
