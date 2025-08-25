import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { ChromeService } from "../../chrome.service";

@Component({
	selector: "app-zelf-keys-payment-cards",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-payment-cards.component.html",
	styleUrls: ["./zelf-keys-payment-cards.component.scss"],
})
export class ZelfKeysPaymentCardsComponent implements OnInit {
	constructor(private chromeService: ChromeService) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/payment-cards");
		}
	}
}
