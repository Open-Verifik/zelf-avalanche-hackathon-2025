import { Component, Injector, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { environment } from "environments/environment";

import { ChromeService } from "./chrome.service";
import { HttpWrapperService } from "./http-wrapper.service";
import { AutofillDataService } from "./services/autofill-data.service";
import { AutofillIntegrationService } from "./services/autofill-integration.service";
import { PopoutCommunicationService } from "./services/popout-communication.service";
import { WalletService } from "./wallet.service";
import { LicenseService } from "./services/license.service";
import { DomainService } from "./services/domain.service";
import { initializeDomainService } from "./utils/domain.utils";

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
    private publicKey!: string;
    private unsubscriber$ = new Subject<void>();

    apiUrl: string = environment.apiUrl;
    isPopout: boolean = false;
    isLoading: boolean = true;

    constructor(
        private _chromeService: ChromeService,
        private _httpWrapperService: HttpWrapperService,
        private _popoutCommunicationService: PopoutCommunicationService,
        private _router: Router,
        private _licenseService: LicenseService,
        private _walletService: WalletService,
        private _injector: Injector,
        private _domainService: DomainService
    ) {
        this._initializeRequiredServices();

        this.isPopout = this._chromeService.isPopout;

        this._chromeService.isPopout$.pipe(takeUntil(this.unsubscriber$)).subscribe((isPopout) => {
            this.isPopout = isPopout;
        });
    }

    ngOnInit(): void {
        this._getPublicKey();

        // Initialize domain service
        // initializeDomainService(this._domainService);

        // Check if we're in a popup and have pending decryption data
        this.checkForPendingDecryption();

        // Notify background script that popup is ready
        this.notifyPopupReady();

        // Listen for navigation messages from background script
        this.setupNavigationListener();

        // Hide loading screen after a short delay to ensure license loading is complete
        this.hideLoadingScreen();
    }

    ngOnDestroy(): void {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
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
        if (typeof chrome === "undefined" || !chrome.runtime) return;
    }

    /**
     * These services are required and must be initialized along with the application.
     */
    private _initializeRequiredServices(): void {
        this._injector.get(AutofillIntegrationService);
        this._injector.get(AutofillDataService);
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

        // If license was loaded from cache, show it immediately
        // If loaded from server, add a small delay for smooth transition
        const delay = this._licenseService.hasLicense() ? 100 : 500;

        setTimeout(() => {
            this.isLoading = false;
        }, delay);
    }
}
