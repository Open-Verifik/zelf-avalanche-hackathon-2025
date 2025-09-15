import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";

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

        // after getting the result we need to format the data from publicData
        let parsedCardData: any = {};
        if (this.result?.publicData?.card) {
            try {
                parsedCardData = JSON.parse(this.result?.publicData?.card);
            } catch (error) {
                console.error("Error parsing card data:", error);
            }
        }

        // Extract expiry month and year from the expires field (format: "12/26")
        let expiryMonth = "";
        let expiryYear = "";
        if (parsedCardData.expires) {
            const [month, year] = parsedCardData.expires.split("/");
            expiryMonth = month;
            expiryYear = year ? `20${year}` : ""; // Convert "26" to "2026"
        }

        this.result.publicData.cardName = parsedCardData.name;
        this.result.publicData.cardNumber = parsedCardData.number;
        this.result.publicData.expiryMonth = expiryMonth;
        this.result.publicData.expiryYear = expiryYear;
        this.result.publicData.bankName = parsedCardData.bankName;

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

    async copyZelfProof(): Promise<void> {
        if (this.result?.zelfProof) {
            try {
                await navigator.clipboard.writeText(this.result.zelfProof);
            } catch (error) {
                // Fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = this.result.zelfProof;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            }
        }
    }

    onImageError(event: Event): void {
        const img = event.target as HTMLImageElement;
        img.style.display = "none";
        // Optionally show a placeholder or error message
        const container = img.parentElement;
        if (container) {
            container.innerHTML = '<div class="image-error">Image not available</div>';
        }
    }

    onDownloadZelfProof(): void {
        if (!this.result?.url) return;

        const link = document.createElement("a");
        link.href = this.result.url;
        link.download = `zelfproof-${this.result.publicData?.cardName || "payment-card"}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
