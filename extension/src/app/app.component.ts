import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

import { environment } from "environments/environment";

import { ChromeService } from "./chrome.service";
import { HttpWrapperService } from "./http-wrapper.service";
import { WalletService } from "./wallet.service";
import { AutofillIntegrationService } from "./services/autofill-integration.service";
import { PopoutCommunicationService } from "./services/popout-communication.service";
import { Router } from "@angular/router";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-root",
    standalone: false,
    styleUrls: ["./app.component.scss", "./main.scss"],
    template: `<div class="flex flex-col flex-auto main-div" [ngClass]="isPopout ? 'main-div--popout' : ''">
        <div class="flex flex-col flex-auto">
            <router-outlet></router-outlet>
        </div>
    </div>`,
})
export class AppComponent implements OnInit, OnDestroy {
    private unsubscriber$ = new Subject<void>();
    private publicKey!: string;

    apiUrl: string = environment.apiUrl;
    isPopout: boolean = false;

    constructor(
        private _httpWrapperService: HttpWrapperService,
        private _walletService: WalletService,
        private _chromeService: ChromeService,
        private _autofillIntegrationService: AutofillIntegrationService,
        private _popoutCommunicationService: PopoutCommunicationService,
        private _router: Router
    ) {
        console.log("AppComponent: Constructor called - Angular app is loading");
        this.isPopout = this._chromeService.isPopout;

        this._chromeService.isPopout$.pipe(takeUntil(this.unsubscriber$)).subscribe((isPopout) => {
            this.isPopout = isPopout;
        });
    }

    ngOnInit(): void {
        this._getPublicKey();
        // Ensure AutofillIntegrationService is instantiated
        console.log("AppComponent: AutofillIntegrationService injected:", !!this._autofillIntegrationService);

        // Force the service to be used to ensure it's instantiated
        if (this._autofillIntegrationService) {
            console.log("AppComponent: AutofillIntegrationService is ready");
            this._autofillIntegrationService.testService();
        }

        // Check if we're in a popup and have pending decryption data
        this.checkForPendingDecryption();

        // Notify background script that popup is ready
        this.notifyPopupReady();

        // Listen for navigation messages from background script
        this.setupNavigationListener();
    }

    private checkForPendingDecryption(): void {
        if (this.isPopout) {
            const decryptionData = this._popoutCommunicationService.getDecryptionData();
            if (decryptionData) {
                console.log("AppComponent: Found pending decryption data, navigating to decrypt route");
                this._router.navigate(["/dashboard/passwords/decrypt"]);
            }
        }
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
                        this._router.navigate([`/dashboard/${route}`]);
                    }
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
}
