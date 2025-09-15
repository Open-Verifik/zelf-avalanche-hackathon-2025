import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { ChromeService } from "../../chrome.service";

@Component({
    selector: "app-start",
    standalone: true,
    imports: [CommonModule, TranslocoModule, RouterModule],
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
    constructor(private chromeService: ChromeService) {}

    async ngOnInit(): Promise<void> {
        if (!this.chromeService.isExtension) return;

        await this.chromeService.ensureFullScreen("dashboard/start");
    }
}
