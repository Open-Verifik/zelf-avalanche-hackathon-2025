import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
	selector: "app-start",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./start.component.html",
	styleUrls: ["./start.component.scss"],
})
export class StartComponent {
	constructor() {}
}
