import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
	selector: "app-zelf-keys-addresses",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-addresses.component.html",
	styleUrls: ["./zelf-keys-addresses.component.scss"],
})
export class ZelfKeysAddressesComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
