import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { ChromeService } from "../../chrome.service";

@Component({
	selector: "app-start",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./start.component.html",
	styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
	constructor(private chromeService: ChromeService) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/start");
		}
	}
}
