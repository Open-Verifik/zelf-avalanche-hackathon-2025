import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
	selector: "app-zelf-keys-bank-accounts",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-bank-accounts.component.html",
	styleUrls: ["./zelf-keys-bank-accounts.component.scss"],
})
export class ZelfKeysBankAccountsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
