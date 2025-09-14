import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { WalletService } from "../wallet.service";
import { WalletModel } from "../wallet";
import { ChromeService } from "../chrome.service";
import { HomeHeaderAccountsComponent } from "../home/home-header-accounts/home-header-accounts.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Subject, takeUntil } from "rxjs";

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
        private _activatedRoute: ActivatedRoute,
        private _bottomSheet: MatBottomSheet,
        private _chromeService: ChromeService,
        private _router: Router,
        private _walletService: WalletService
    ) {
        this.unsubscriber$ = new Subject();
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

    private async _initWallet(): Promise<void> {
        const { wallet } = await this._walletService.getAllWalletsFromStorage();

        this.wallet = wallet || {};
        this.loaded = true;
    }

    private _initNavigation(): void {
        this._activatedRoute.url.pipe(takeUntil(this.unsubscriber$)).subscribe((segments) => {
            if (segments.length > 0) {
                this.activeTab = segments[0].path;
            } else {
                this.activeTab = "start";
            }
        });
    }

    async navigateToTab(tab: string): Promise<void> {
        this.activeTab = tab;

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
            data: this.wallet,
        });
    }
}
