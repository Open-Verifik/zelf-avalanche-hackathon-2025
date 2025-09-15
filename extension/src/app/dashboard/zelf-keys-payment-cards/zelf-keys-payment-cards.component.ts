import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslocoModule } from "@jsverse/transloco";
import { environment } from "environments/environment";
import { Subject, takeUntil } from "rxjs";

import { ChromeService } from "../../chrome.service";
import { HttpWrapperService } from "../../http-wrapper.service";
import { BillingService } from "../../services/billing.service";
import { PaymentCardDataService } from "../../services/payment-card-data.service";
import { WalletService } from "../../wallet.service";
import { SubscriptionBannerComponent } from "../shared/subscription-banner/subscription-banner.component";

@Component({
    imports: [CommonModule, TranslocoModule, SubscriptionBannerComponent],
    selector: "app-zelf-keys-payment-cards",
    standalone: true,
    styleUrls: ["./zelf-keys-payment-cards.component.scss"],
    templateUrl: "./zelf-keys-payment-cards.component.html",
})
export class ZelfKeysPaymentCardsComponent implements OnInit, AfterViewInit, OnDestroy {
    private destroy$ = new Subject<void>();

    apiKeysSessionJWT: string = "";
    currentPlan: string = "free";
    error: string | null = null;
    isLoading = false;
    paymentCards: any[] = [];

    constructor(
        private _billingService: BillingService,
        private _chromeService: ChromeService,
        private _router: Router,
        private _httpWrapperService: HttpWrapperService,
        private _walletService: WalletService,
        private _paymentCardDataService: PaymentCardDataService
    ) {
        this._subscribeToBillingService();
    }

    async ngOnInit(): Promise<void> {
        if (this._chromeService.isExtension) {
            await this._chromeService.ensureFullScreen("dashboard/payment-cards");
        }

        await this.initZelfKeySession();
        await this.loadPaymentCards();
    }

    async ngAfterViewInit(): Promise<void> {
        if (!this.apiKeysSessionJWT) return;

        await this.loadPaymentCards();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private _subscribeToBillingService(): void {
        this.currentPlan = this._billingService.currentPlan;

        this._billingService.currentPlan$.pipe(takeUntil(this.destroy$)).subscribe((plan) => {
            this.currentPlan = plan;
        });
    }

    async initZelfKeySession(): Promise<void> {
        try {
            const { wallet } = await this._walletService.getAllWalletsFromStorage();

            if (!wallet?.ethAddress) {
                this.error = "No wallet found. Please set up your wallet first.";

                return;
            }

            await this._walletService.initZelfKeySession();

            const jwt = await this._walletService.getZelfKeyJWT();

            if (jwt) {
                this.apiKeysSessionJWT = jwt;
            } else {
                console.error("Failed to get ZelfKey JWT token");
                this.error = "Authentication failed. Please ensure you have a valid wallet.";
            }
        } catch (error) {
            console.error("Error initializing ZelfKey session:", error);
            this.error = "Failed to initialize session. Please check your wallet connection.";
        }
    }

    async loadPaymentCards(): Promise<void> {
        this.isLoading = true;
        this.error = null;

        if (!this.apiKeysSessionJWT) {
            this.error = "No authentication token available. Please refresh the page.";
            this.isLoading = false;

            return;
        }

        try {
            const response = await this._httpWrapperService.sendRequest(
                "get",
                `${environment.keysApiUrl}/api/zelf-key/list?category=credit_card`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${this.apiKeysSessionJWT}`,
                    },
                }
            );

            if (response.success && response.data) {
                this.paymentCards = response.data.map((item: any) => {
                    let parsedCardData: any = {};

                    if (item.publicData?.card) {
                        try {
                            parsedCardData = JSON.parse(item.publicData.card);
                        } catch (error) {
                            console.error("Error parsing card data:", error);
                        }
                    }

                    let expiryMonth = "";
                    let expiryYear = "";

                    if (parsedCardData.expires) {
                        const [month, year] = parsedCardData.expires.split("/");

                        expiryMonth = month;
                        expiryYear = year ? `20${year}` : "";
                    }

                    const _item = {
                        bankName: parsedCardData.bankName || "Unknown Bank",
                        cardName: parsedCardData.name || "Unknown",
                        cardNumber: parsedCardData.number || "",
                        createdAt: new Date(item.timestamp),
                        expiryMonth: expiryMonth,
                        expiryYear: expiryYear,
                        id: item.id,
                        name: item.name,
                        publicData: item.publicData,
                        size: item.size,
                        timestamp: item.timestamp,
                        url: item.url,
                        zelfProof: item.publicData?.zelfProof || item.id,
                        zelfQR: item.url,
                        rawData: item,
                    };

                    return _item;
                });
            } else {
                this.paymentCards = [];
            }
        } catch (error) {
            this.error = "Failed to load payment cards. Please try again.";
            this.paymentCards = [];
        } finally {
            this.isLoading = false;
        }
    }

    onAddNewCard(): void {
        this._router.navigate(["/dashboard/payment-cards/new"]);
    }

    async onRefresh(): Promise<void> {
        await this.loadPaymentCards();
    }

    onPaymentCardClick(paymentCard: any): void {
        this._paymentCardDataService.setCurrentPaymentCard(paymentCard);
        this._router.navigate(["/dashboard/payment-cards/detail"]);
    }

    getCardType(cardNumber: string): string {
        if (cardNumber.startsWith("4")) return "VISA";
        if (cardNumber.startsWith("5") || cardNumber.startsWith("2")) return "MASTERCARD";
        if (cardNumber.startsWith("3")) return "AMEX";
        if (cardNumber.startsWith("6")) return "DISCOVER";

        return "CARD";
    }

    getMaskedCardNumber(cardNumber: string): string {
        if (cardNumber.length < 4) return cardNumber;

        const lastFour = cardNumber.slice(-4);

        return "•••• •••• •••• " + lastFour;
    }

    getCardColor(zelfProof: string): string {
        let hash = 0;

        for (let i = 0; i < zelfProof.length; i++) {
            const char = zelfProof.charCodeAt(i);

            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }

        const hue = Math.abs(hash) % 360;
        const saturation = 60 + (Math.abs(hash) % 30);
        const lightness = 45 + (Math.abs(hash) % 20);

        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    getCardGradient(zelfProof: string): string {
        const baseColor = this.getCardColor(zelfProof);
        const hsl = baseColor.match(/\d+/g);

        if (!hsl) return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

        const h = parseInt(hsl[0]);
        const s = parseInt(hsl[1]);
        const l = parseInt(hsl[2]);

        const complementaryH = (h + 180) % 360;
        const lighterL = Math.min(95, l + 20);
        const darkerL = Math.max(25, l - 20);

        return `linear-gradient(135deg, hsl(${h}, ${s}%, ${lighterL}%) 0%, hsl(${complementaryH}, ${s}%, ${darkerL}%) 100%)`;
    }
}
