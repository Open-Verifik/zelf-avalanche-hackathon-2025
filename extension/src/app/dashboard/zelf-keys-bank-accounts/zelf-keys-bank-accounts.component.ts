import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { ChromeService } from "../../chrome.service";

@Component({
	selector: "app-zelf-keys-bank-accounts",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-bank-accounts.component.html",
	styleUrls: ["./zelf-keys-bank-accounts.component.scss"],
})
export class ZelfKeysBankAccountsComponent implements OnInit {
	constructor(private chromeService: ChromeService) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/bank-accounts");
		}
	}
}
