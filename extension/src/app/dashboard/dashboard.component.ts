import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { Subject, takeUntil } from "rxjs";

import { ChromeService } from "../chrome.service";
import { HomeHeaderAccountsComponent } from "../home/home-header-accounts/home-header-accounts.component";
import { ScrollToSectionService } from "../services/scroll-to-section.service";
import { WalletModel } from "../wallet";
import { WalletService } from "../wallet.service";

@Component({
    imports: [CommonModule, TranslocoModule, RouterModule],
    selector: "dashboard",
    standalone: true,
    styleUrls: ["./dashboard.component.scss"],
    templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit, OnDestroy {
    private unsubscriber$: Subject<void> = new Subject<void>();

    activeTab: string = "start";
    loaded: boolean = false;
    wallet: Partial<WalletModel> = {};

    constructor(
        private _bottomSheet: MatBottomSheet,
        private _changeDetectionRef: ChangeDetectorRef,
        private _chromeService: ChromeService,
        private _router: Router,
        private _scrollToSectionService: ScrollToSectionService,
        private _walletService: WalletService
    ) {
        this.unsubscriber$ = new Subject();

        this._initSubscriptions();
    }

    async ngOnInit(): Promise<void> {
        await this._initWallet();

        this._initNavigation();
    }

    async ngOnDestroy(): Promise<void> {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    get zelfName(): string {
        return this.wallet?.name ? this.wallet.name.toUpperCase() : "USER.ZELF";
    }

    private _initSubscriptions(): void {
        this._router.events.pipe(takeUntil(this.unsubscriber$)).subscribe((event) => {
            if (!(event instanceof NavigationEnd)) return;

            const contentElement = document.querySelector(".dashboard__content");

            if (!contentElement) return;

            contentElement.scrollTop = 0;
        });

        // Subscribe to scroll-to-section events
        this._scrollToSectionService.scrollEvent$.pipe(takeUntil(this.unsubscriber$)).subscribe((event) => {
            if (event) {
                this._scrollToDecryptedSection(event.sectionId);
            }
        });
    }

    private async _initWallet(): Promise<void> {
        const { wallet } = await this._walletService.getAllWalletsFromStorage();

        this.wallet = wallet || {};
        this.loaded = true;
    }

    private _initNavigation(): void {
        // Set initial active tab based on current route
        this._updateActiveTabFromRoute();

        // Listen for route changes using Router events
        this._router.events.pipe(takeUntil(this.unsubscriber$)).subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._updateActiveTabFromRoute();
            }
        });
    }

    private _updateActiveTabFromRoute(): void {
        const currentUrl = this._router.url;
        const urlParts = currentUrl.split("/");
        const dashboardIndex = urlParts.indexOf("dashboard");

        if (dashboardIndex !== -1 && urlParts.length > dashboardIndex + 1) {
            const childPath = urlParts[dashboardIndex + 1];

            this.activeTab = this._getActiveTabFromPath(childPath);
        } else {
            this.activeTab = "start";
        }

        this._changeDetectionRef.detectChanges();
    }

    private _getActiveTabFromPath(path: string): string {
        if (path.startsWith("passwords")) {
            return "passwords";
        }

        if (path.startsWith("notes")) {
            return "notes";
        }

        if (path.startsWith("payment-cards")) {
            return "payment-cards";
        }

        if (path.startsWith("billing")) {
            return "billing";
        }

        if (path.startsWith("addresses")) {
            return "addresses";
        }

        if (path.startsWith("bank-accounts")) {
            return "bank-accounts";
        }

        if (path.startsWith("biometrics")) {
            return "biometrics";
        }

        return path;
    }

    async navigateToTab(tab: string): Promise<void> {
        if (tab === "passwords/decrypt") {
            this._router.navigate(["/dashboard", tab]);
            return;
        }

        if (this._chromeService.isExtension) {
            if (this._chromeService.isPopout || this._chromeService.isSidePanel) {
                await this._chromeService.openFullPage(`dashboard/${tab}`);
                return;
            } else {
                await this._chromeService.ensureFullScreen(`dashboard/${tab}`);
                return;
            }
        }

        if (tab === "start") {
            this._router.navigate(["/dashboard"]);
        } else {
            this._router.navigate(["/dashboard", tab]);
        }
    }

    navigateToWallet(): void {
        this._router.navigate(["/home"]);
    }

    openBottomSheet(): void {
        this._bottomSheet.open(HomeHeaderAccountsComponent, {
            backdropClass: "zelf-backdrop",
            panelClass: "zelf-bottom-sheet-seasalt",
            data: { wallet: this.wallet },
        });
    }

    private _scrollToDecryptedSection(sectionId: string): void {
        // Wait for the next tick to ensure the DOM is updated
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            }
        }, 100);
    }
}
