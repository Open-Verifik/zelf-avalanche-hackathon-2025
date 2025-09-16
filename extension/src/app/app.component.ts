import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { environment } from "environments/environment";

import { ChromeService } from "./chrome.service";
import { HttpWrapperService } from "./http-wrapper.service";
import { PopoutCommunicationService } from "./services/popout-communication.service";
import { WalletService } from "./wallet.service";
import { LicenseService } from "./services/license.service";
import { ZelfLoaderComponent } from "./zelf-loader/zelf-loader.component";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-root",
    standalone: false,
    styleUrls: ["./app.component.scss", "./main.scss"],
    template: `
        <!-- Loading Screen -->
        <div *ngIf="isLoading" class="app-loading-screen">
            <zelf-loader [diameter]="120" [absolute]="true"></zelf-loader>
            <div class="app-loading-text">
                <h3>Loading ZelfKeys</h3>
                <p>Initializing your secure environment...</p>
            </div>
        </div>

        <!-- Main App Content -->
        <div *ngIf="!isLoading" class="flex flex-col flex-auto main-div" [ngClass]="isPopout ? 'main-div--popout' : ''">
            <div class="flex flex-col flex-auto">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class AppComponent implements OnInit, OnDestroy {
    private unsubscriber$ = new Subject<void>();
    private publicKey!: string;

    apiUrl: string = environment.apiUrl;
    isPopout: boolean = false;
    isLoading: boolean = true;

    constructor(
        private _httpWrapperService: HttpWrapperService,
        private _walletService: WalletService,
        private _chromeService: ChromeService,
        private _popoutCommunicationService: PopoutCommunicationService,
        private _router: Router,
        private _licenseService: LicenseService
    ) {
        this.isPopout = this._chromeService.isPopout;

        this._chromeService.isPopout$.pipe(takeUntil(this.unsubscriber$)).subscribe((isPopout) => {
            this.isPopout = isPopout;
        });
    }

    ngOnInit(): void {
        this._getPublicKey();

        // Check if we're in a popup and have pending decryption data
        this.checkForPendingDecryption();

        // Notify background script that popup is ready
        this.notifyPopupReady();

        // Listen for navigation messages from background script
        this.setupNavigationListener();

        // Hide loading screen after a short delay to ensure license loading is complete
        this.hideLoadingScreen();
    }

    private checkForPendingDecryption(): void {
        if (!this.isPopout) return;

        const decryptionData = this._popoutCommunicationService.getDecryptionData();

        if (!decryptionData) return;

        this._router.navigateByUrl("/passwords/decrypt", { replaceUrl: true });
    }

    private notifyPopupReady(): void {
        if (this.isPopout && typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.sendMessage({
                type: "POPUP_READY",
            });
        }
    }

    private setupNavigationListener(): void {
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.type === "NAVIGATE_TO_ROUTE") {
                    const route = message.payload?.route;
                    if (route) {
                        console.log("AppComponent: Received navigation request to:", route);
                        this._router.navigate([`/${route}`]);
                    }
                    sendResponse({ success: true });
                } else if (message.type === "PASSWORD_DECRYPTOR_DATA") {
                    console.log("AppComponent: Received decryption data from background script:", message.payload);
                    // Set the decryption data in the service
                    this._popoutCommunicationService.setDecryptionData(message.payload);
                    // Navigate to the decrypt route
                    this._router.navigateByUrl("/passwords/decrypt", { replaceUrl: true });
                    sendResponse({ success: true });
                }
                return true;
            });
        }
    }

    ngOnDestroy(): void {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    _getPublicKey(): void {
        let { hash } = this._walletService.getUserFingerprint();

        const url = `${this.apiUrl}/api/sessions/yek-cilbup`;

        this._httpWrapperService
            .sendRequest("get", url, {
                identifier: hash,
            })
            .then((response) => {
                this.publicKey = response.data;

                this._chromeService.setItem("publicKey", this.publicKey);
                this._httpWrapperService.setPublicKey(this.publicKey);
            });
    }

    private async hideLoadingScreen(): Promise<void> {
        // Wait for license loading to complete
        await this._licenseService.waitForLicenseLoading();

        // Add a small delay for smooth transition
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
}
