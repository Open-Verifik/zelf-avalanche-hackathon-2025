import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { ChromeService } from "../../chrome.service";

@Component({
	selector: "app-zelf-keys-addresses",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-addresses.component.html",
	styleUrls: ["./zelf-keys-addresses.component.scss"],
})
export class ZelfKeysAddressesComponent implements OnInit {
	constructor(private chromeService: ChromeService) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/addresses");
		}
	}
}
