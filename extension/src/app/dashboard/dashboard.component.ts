import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { WalletService } from "../wallet.service";
import { WalletModel } from "../wallet";

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
		private route: ActivatedRoute
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

	navigateToTab(tab: string): void {
		this.activeTab = tab;
		if (tab === "start") {
			this.router.navigate(["/dashboard"]);
		} else {
			this.router.navigate(["/dashboard", tab]);
		}
	}

	get zelfName(): string {
		return this.wallet?.name ? this.wallet.name.toUpperCase() : "USER.ZELF";
	}
}
