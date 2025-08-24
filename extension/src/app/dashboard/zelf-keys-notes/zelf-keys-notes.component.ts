import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
	selector: "app-zelf-keys-notes",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-notes.component.html",
	styleUrls: ["./zelf-keys-notes.component.scss"],
})
export class ZelfKeysNotesComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
