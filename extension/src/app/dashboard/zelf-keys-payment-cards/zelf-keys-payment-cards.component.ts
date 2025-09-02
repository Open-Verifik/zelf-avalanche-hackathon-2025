import { Component, OnInit, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { Router } from "@angular/router";
import { ChromeService } from "../../chrome.service";
import { HttpWrapperService } from "../../http-wrapper.service";
import { WalletService } from "../../wallet.service";
import { environment } from "../../../environments/environment";

@Component({
	selector: "app-zelf-keys-payment-cards",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-payment-cards.component.html",
	styleUrls: ["./zelf-keys-payment-cards.component.scss"],
})
export class ZelfKeysPaymentCardsComponent implements OnInit, AfterViewInit {
	paymentCards: any[] = [];
	isLoading = false;
	error: string | null = null;
	apiKeysSessionJWT: string = "";

	constructor(
		private chromeService: ChromeService,
		private router: Router,
		private httpWrapperService: HttpWrapperService,
		private walletService: WalletService
	) {}

	async ngOnInit(): Promise<void> {
		// Ensure extension is in full screen mode for better user experience
		if (this.chromeService.isExtension) {
			await this.chromeService.ensureFullScreen("dashboard/payment-cards");
		}

		// Initialize ZelfKey session and fetch payment cards
		await this.initZelfKeySession();
		await this.loadPaymentCards();
	}

	async ngAfterViewInit(): Promise<void> {
		// Only refresh if we already have a session (don't reload on initial load)
		if (this.apiKeysSessionJWT) {
			await this.loadPaymentCards();
		}
	}

	async initZelfKeySession(): Promise<void> {
		try {
			// Check if wallet exists first
			const { wallet } = await this.walletService.getAllWalletsFromStorage();
			if (!wallet?.ethAddress) {
				this.error = "No wallet found. Please set up your wallet first.";
				return;
			}

			console.log("Initializing ZelfKey session for wallet:", wallet.ethAddress);

			// The wallet service now caches the JWT token
			const sessionResponse = await this.walletService.initZelfKeySession();
			console.log("Session response:", sessionResponse);

			// Get the cached token
			const jwt = this.walletService.getZelfKeyJWT();

			if (jwt) {
				this.apiKeysSessionJWT = jwt;
				console.log("JWT token obtained successfully");
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

		// Check if we have a valid JWT token
		if (!this.apiKeysSessionJWT) {
			this.error = "No authentication token available. Please refresh the page.";
			this.isLoading = false;
			return;
		}

		try {
			const response = await this.httpWrapperService.sendRequest(
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
				// Transform the API response to match our component structure
				this.paymentCards = response.data.map((item: any) => ({
					id: item.id,
					cardName: item.publicData?.cardName || "Unknown",
					cardNumber: item.publicData?.cardNumber || "",
					expiryMonth: item.publicData?.expiryMonth || "",
					expiryYear: item.publicData?.expiryYear || "",
					bankName: item.publicData?.bankName || "Unknown Bank",
					zelfProof: item.publicData?.zelfProof || item.id,
					createdAt: new Date(item.timestamp),
					// Store the full item for potential future use
					rawData: item,
				}));
			} else {
				this.paymentCards = [];
			}
		} catch (error) {
			console.error("Error loading payment cards:", error);
			this.error = "Failed to load payment cards. Please try again.";
			this.paymentCards = [];
		} finally {
			this.isLoading = false;
		}
	}

	onAddNewCard(): void {
		this.router.navigate(["/dashboard/payment-cards/new"]);
	}

	async onRefresh(): Promise<void> {
		await this.loadPaymentCards();
	}

	onEditCard(card: any): void {
		// TODO: Implement edit functionality
		console.log("Edit card:", card);
	}

	onDeleteCard(card: any): void {
		// TODO: Implement delete functionality
		console.log("Delete card:", card);
	}

	// Get card type from card number
	getCardType(cardNumber: string): string {
		if (cardNumber.startsWith("4")) return "VISA";
		if (cardNumber.startsWith("5") || cardNumber.startsWith("2")) return "MASTERCARD";
		if (cardNumber.startsWith("3")) return "AMEX";
		if (cardNumber.startsWith("6")) return "DISCOVER";
		return "CARD";
	}

	// Mask card number for display
	getMaskedCardNumber(cardNumber: string): string {
		if (cardNumber.length < 4) return cardNumber;
		const lastFour = cardNumber.slice(-4);
		return "•••• •••• •••• " + lastFour;
	}

	// Generate randomized color based on zelfProof
	getCardColor(zelfProof: string): string {
		// Use zelfProof as seed for consistent colors
		let hash = 0;
		for (let i = 0; i < zelfProof.length; i++) {
			const char = zelfProof.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32-bit integer
		}

		// Generate color based on hash
		const hue = Math.abs(hash) % 360;
		const saturation = 60 + (Math.abs(hash) % 30); // 60-90%
		const lightness = 45 + (Math.abs(hash) % 20); // 45-65%

		return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	}

	// Generate gradient colors for card
	getCardGradient(zelfProof: string): string {
		const baseColor = this.getCardColor(zelfProof);
		// Convert HSL to RGB for gradient calculation
		const hsl = baseColor.match(/\d+/g);
		if (!hsl) return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

		const h = parseInt(hsl[0]);
		const s = parseInt(hsl[1]);
		const l = parseInt(hsl[2]);

		// Create a complementary color for gradient
		const complementaryH = (h + 180) % 360;
		const lighterL = Math.min(95, l + 20);
		const darkerL = Math.max(25, l - 20);

		return `linear-gradient(135deg, hsl(${h}, ${s}%, ${lighterL}%) 0%, hsl(${complementaryH}, ${s}%, ${darkerL}%) 100%)`;
	}

	// Generate mini QR code data URL (placeholder for now)
	getMiniQRCode(zelfProof: string): string {
		// In a real implementation, this would generate an actual QR code
		// For now, return a data URL of a QR-like pattern
		const canvas = document.createElement("canvas");
		canvas.width = 24;
		canvas.height = 24;
		const ctx = canvas.getContext("2d");

		if (ctx) {
			// Create a QR-like pattern based on zelfProof
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, 24, 24);

			ctx.fillStyle = "#000000";

			// Create corner squares (like QR code)
			ctx.fillRect(1, 1, 6, 6);
			ctx.fillRect(17, 1, 6, 6);
			ctx.fillRect(1, 17, 6, 6);

			// Create inner pattern based on zelfProof
			for (let i = 0; i < zelfProof.length && i < 16; i++) {
				const x = 8 + (i % 4) * 2;
				const y = 8 + Math.floor(i / 4) * 2;
				if (zelfProof.charCodeAt(i) % 2 === 0) {
					ctx.fillRect(x, y, 2, 2);
				}
			}
		}

		return canvas.toDataURL();
	}
}
