import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";

@Component({
	selector: "app-zelf-keys-payment-cards",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-payment-cards.component.html",
	styleUrls: ["./zelf-keys-payment-cards.component.scss"],
})
export class ZelfKeysPaymentCardsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
