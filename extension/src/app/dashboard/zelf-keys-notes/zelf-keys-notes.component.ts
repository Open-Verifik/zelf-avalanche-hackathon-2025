import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { ChromeService } from "../../chrome.service";

@Component({
	selector: "app-zelf-keys-notes",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-notes.component.html",
	styleUrls: ["./zelf-keys-notes.component.scss"],
})
export class ZelfKeysNotesComponent implements OnInit {
	constructor(private chromeService: ChromeService) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/notes");
		}
	}
}
