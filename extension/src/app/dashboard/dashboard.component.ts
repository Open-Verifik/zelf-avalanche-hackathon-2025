import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { WalletService } from "../wallet.service";
import { WalletModel } from "../wallet";
import { ChromeService } from "../chrome.service";

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule],
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    wallet: Partial<WalletModel> = {};
    loaded: boolean = false;
    activeTab: string = "start";

    constructor(
        private walletService: WalletService,
        private router: Router,
        private route: ActivatedRoute,
        private chromeService: ChromeService
    ) {}

    async ngOnInit(): Promise<void> {
        await this._initWallet();
        this._initNavigation();
    }

    private async _initWallet(): Promise<void> {
        const { wallet } = await this.walletService.getAllWalletsFromStorage();
        this.wallet = wallet || {};
        this.loaded = true;
    }

    private _initNavigation(): void {
        // Get the current route to set active tab
        this.route.url.subscribe((segments) => {
            if (segments.length > 0) {
                this.activeTab = segments[0].path;
            } else {
                this.activeTab = "start";
            }
        });
    }

    async navigateToTab(tab: string): Promise<void> {
        this.activeTab = tab;

        console.log("DashboardComponent: Navigating to tab:", tab);
        console.log("DashboardComponent: Is extension:", this.chromeService.isExtension);
        console.log("DashboardComponent: Is popout:", this.chromeService.isPopout);
        console.log("DashboardComponent: Is side panel:", this.chromeService.isSidePanel);

        // Check if we're navigating to the password-decryptor route
        // If so, don't open fullscreen - stay in popup mode
        if (tab === "passwords/decrypt") {
            console.log("DashboardComponent: Decrypt route detected - staying in popup mode");
            // Navigate normally without opening fullscreen
            this.router.navigate(["/dashboard", tab]);
            return;
        }

        // Ensure extension opens in full screen for better user experience
        // This is especially important for the passwords tab and other sensitive data
        if (this.chromeService.isExtension) {
            // Check if we're currently in a popup or side panel
            if (this.chromeService.isPopout || this.chromeService.isSidePanel) {
                console.log("DashboardComponent: Opening full page for popup/sidepanel");
                // Open the specific tab in full page mode
                await this.chromeService.openFullPage(`dashboard/${tab}`);
                return;
            } else {
                console.log("DashboardComponent: Ensuring full screen for tab");
                // Ensure we're in full screen mode for the current tab
                await this.chromeService.ensureFullScreen(`dashboard/${tab}`);
                return;
            }
        }

        // If not in extension mode, navigate normally
        if (tab === "start") {
            this.router.navigate(["/dashboard"]);
        } else {
            this.router.navigate(["/dashboard", tab]);
        }
    }

    navigateToWallet(): void {
        this.router.navigate(["/home"]);
    }

    get zelfName(): string {
        return this.wallet?.name ? this.wallet.name.toUpperCase() : "USER.ZELF";
    }
}
