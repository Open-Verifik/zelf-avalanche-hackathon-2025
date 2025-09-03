import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { RouterModule, Router, ActivatedRoute } from "@angular/router";
import { ChromeService } from "../../../chrome.service";
import { DataPassingService } from "../../../services/data-passing.service";

@Component({
	selector: "app-payment-card-result",
	standalone: true,
	imports: [CommonModule, TranslocoModule, RouterModule],
	templateUrl: "./payment-card-result.component.html",
	styleUrls: ["./payment-card-result.component.scss"],
})
export class PaymentCardResultComponent implements OnInit {
	result: any = null;
	isSuccess = false;
	error: string | null = null;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private chromeService: ChromeService,
		private dataPassingService: DataPassingService
	) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/payment-cards/result");
		}

		// Get result from data passing service
		this.result = this.dataPassingService.getResult("payment-cards");

		// Debug logging
		console.log("Payment card result data:", this.result);
		console.log("ZelfProof:", this.result?.zelfProof);
		console.log("ZelfQR:", this.result?.zelfQR);

		if (this.result) {
			this.isSuccess = this.result?.success === true;
			if (!this.isSuccess) {
				this.error = this.result?.message || "Unknown error occurred";
			}
		} else {
			this.error = "No result data found";
		}
	}

	onBackToCards(): void {
		this.router.navigate(["/dashboard/payment-cards"]);
	}

	onAddAnother(): void {
		this.router.navigate(["/dashboard/payment-cards/new"]);
	}
}
