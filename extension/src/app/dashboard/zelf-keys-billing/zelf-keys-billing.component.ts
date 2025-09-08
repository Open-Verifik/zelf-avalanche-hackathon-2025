import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { BillingService, PricingPlan } from "../../services/billing.service";
import { WalletService } from "../../wallet.service";
import { Wallet } from "app/wallet";
import { Router } from "@angular/router";

interface CryptoPaymentDisplayData {
	planId: string;
	paymentAddress: string;
	amount: number;
	currency: string;
	usdAmount: number;
	avaxPrice?: number;
	lockedPriceToken?: string;
	expiresAt: string;
	zkPay?: any;
	selectedPlan?: PricingPlan;
	isDemoMode?: boolean;
	originalAmount?: {
		usd: number;
		avax: number;
	};
}

@Component({
	selector: "app-zelf-keys-billing",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-billing.component.html",
	styleUrls: ["./zelf-keys-billing.component.scss"],
})
export class ZelfKeysBillingComponent implements OnInit {
	plans: PricingPlan[] = [];
	currentPlan: string = "free";
	loading: boolean = true;
	error: string | null = null;
	hasActiveSubscription: boolean = false;
	activeSubscription: any = null;
	shareables: any = null;
	showCryptoPayment: boolean = false;
	cryptoPaymentData: CryptoPaymentDisplayData | null = null;
	paymentPollingInterval: any = null;

	constructor(
		private billingService: BillingService,
		private _walletService: WalletService,
		private _router: Router,
		private _changeDetectorRef: ChangeDetectorRef
	) {
		this.shareables = {
			wallet: {},
		};
	}

	async ngOnInit(): Promise<void> {
		await this._walletService.initZelfKeySession();

		await this._setWallet();

		this.loadPlans();

		this.loadCurrentPlan();
	}

	private async _setWallet(): Promise<any> {
		const wallet = await this._walletService.getFirstWalletFromStorage();

		if (!wallet?.name) {
			this._router.navigate(["/welcome"]);

			return;
		}

		this.shareables.wallet = wallet;

		this._changeDetectorRef.detectChanges();
	}

	private loadPlans(): void {
		this.loading = true;
		this.error = null;

		this.billingService
			.getAvailablePlans()
			.then((response) => {
				if (response.success && response.plans) {
					this.plans = this.billingService.transformApiPlansToPricingPlans(response.plans);
					this.loading = false;
					return;
				}

				this.error = "Failed to load subscription plans";
				this.loading = false;
			})
			.catch((error) => {
				console.error("Error loading plans:", error);
				this.error = "Failed to load subscription plans";
				this.loading = false;
			});
	}

	private loadCurrentPlan(): void {
		this.billingService
			.getActiveSubscription()
			.then((response) => {
				if (!response.success || !response.data) {
					this.currentPlan = "free";
					this.hasActiveSubscription = false;
					this.activeSubscription = null;
					return;
				}

				// Set active subscription data
				this.hasActiveSubscription = true;
				this.activeSubscription = response.data;

				console.log("🔍 Active subscription loaded:", {
					stripeDataStatus: response.data.stripeData?.status,
					cancelAtPeriodEnd: response.data.stripeData?.cancelAtPeriodEnd,
					cancelledAt: response.data.stripeData?.cancelledAt,
				});

				// Extract plan from stripeData
				const stripeData = response.data.stripeData;
				if (stripeData && stripeData.plan) {
					// Find the plan that matches the Stripe price ID
					const currentPlan = this.plans.find((plan) => {
						// Check if the plan has a priceId that matches the Stripe plan
						return plan.priceId === stripeData.plan;
					});

					this.currentPlan = currentPlan?.id || "basic";

					// Update the plans array to mark current plan
					this.plans = this.plans.map((plan) => ({
						...plan,
						isCurrent: plan.id === this.currentPlan,
					}));
				} else {
					this.currentPlan = "free";
				}
			})
			.catch((error) => {
				console.error("Error loading current plan:", error);
				this.currentPlan = "free";
				this.hasActiveSubscription = false;
				this.activeSubscription = null;
			});
	}

	// Public method for retry button
	public retryLoadPlans(): void {
		this.loadPlans();
	}

	selectPlan(planId: string, paymentMethod: "stripe" | "crypto"): void {
		if (planId === this.currentPlan) {
			return; // Don't allow selecting current plan
		}

		console.log(`Selected ${planId} plan with ${paymentMethod} payment`);

		if (paymentMethod === "stripe") {
			this.createCheckoutSession(planId);
		} else if (paymentMethod === "crypto") {
			this.createCryptoPayment(planId);
		}
	}

	/**
	 * Create crypto payment for the selected plan
	 * @param planId - The ID of the plan to subscribe to
	 */
	private createCryptoPayment(planId: string): void {
		console.log(`Creating crypto payment for ${planId} plan`);

		this.billingService
			.createCryptoPayment(planId)
			.then((response) => {
				if (response.data && response.data.success && response.data.paymentAddress) {
					console.log("✅ Crypto payment created:", response);

					// Store payment data and show crypto payment interface
					this.cryptoPaymentData = {
						planId,
						paymentAddress: response.data.paymentAddress,
						amount: response.data.amount,
						currency: response.data.currency,
						usdAmount: response.data.usdAmount,
						avaxPrice: response.data.avaxPrice,
						lockedPriceToken: response.data.lockedPriceToken,
						expiresAt: response.data.expiresAt,
						zkPay: response.data.zkPay,
						selectedPlan: this.plans.find((plan) => plan.id === planId),
						isDemoMode: response.data.isDemoMode,
						originalAmount: response.data.originalAmount,
					};

					this.showCryptoPayment = true;
					this.startPaymentMonitoring();
				} else {
					this.error = "Failed to create crypto payment";
				}
			})
			.catch((error) => {
				console.error("Error creating crypto payment:", error);
				this.error = "Failed to create crypto payment";
			});
	}

	/**
	 * Start monitoring for crypto payment confirmation
	 */
	private startPaymentMonitoring(): void {
		if (this.paymentPollingInterval) {
			clearInterval(this.paymentPollingInterval);
		}

		// Check payment status every 30 seconds
		this.paymentPollingInterval = setInterval(() => {
			this.checkPaymentStatus();
		}, 30000);

		// Also check immediately
		this.checkPaymentStatus();
	}

	/**
	 * Check if crypto payment has been confirmed
	 */
	private checkPaymentStatus(): void {
		if (!this.cryptoPaymentData?.lockedPriceToken) return;

		console.log("🔍 Checking payment status...");

		this.billingService
			.confirmCryptoPayment(this.cryptoPaymentData.lockedPriceToken)
			.then((response) => {
				console.log("📡 Payment check response:", response);

				if (response.success && response.paymentConfirmed) {
					console.log("✅ Payment confirmed!", response);
					this.stopPaymentMonitoring();

					// Show success message
					if (response.subscriptionCreated) {
						console.log("🎉 Subscription activated!");
					}

					// Hide crypto payment interface
					this.showCryptoPayment = false;
					this.cryptoPaymentData = null;

					// Refresh subscription data
					this.loadCurrentPlan();
				} else {
					console.log("⏳ Payment not confirmed yet:", response.message);
				}
			})
			.catch((error) => {
				console.error("Error checking payment status:", error);
			});
	}

	/**
	 * Stop payment monitoring
	 */
	private stopPaymentMonitoring(): void {
		if (this.paymentPollingInterval) {
			clearInterval(this.paymentPollingInterval);
			this.paymentPollingInterval = null;
		}
	}

	/**
	 * Cancel crypto payment and return to plan selection
	 */
	cancelCryptoPayment(): void {
		this.stopPaymentMonitoring();
		this.showCryptoPayment = false;
		this.cryptoPaymentData = null;
	}

	/**
	 * Go back to plan selection from crypto payment interface
	 */
	goBackToPlans(): void {
		this.stopPaymentMonitoring();
		this.showCryptoPayment = false;
		this.cryptoPaymentData = null;
	}

	/**
	 * Generate QR code data URL for the payment address
	 * @returns string data URL for QR code
	 */
	generatePaymentQR(): string {
		if (!this.cryptoPaymentData?.paymentAddress) return "";

		// For now, return a simple QR code URL (you can use a QR library later)
		return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${this.cryptoPaymentData.paymentAddress}`;
	}

	/**
	 * Copy payment address to clipboard
	 */
	copyPaymentAddress(): void {
		if (this.cryptoPaymentData?.paymentAddress) {
			navigator.clipboard.writeText(this.cryptoPaymentData.paymentAddress);
			// You could show a toast notification here
			console.log("Payment address copied to clipboard");
		}
	}

	/**
	 * Calculate the demo discount percentage
	 * @returns Discount percentage as a string
	 */
	getDemoDiscount(): string {
		if (!this.cryptoPaymentData?.isDemoMode || !this.cryptoPaymentData?.originalAmount) {
			return "0";
		}

		const originalPrice = this.cryptoPaymentData.originalAmount.usd;
		const demoPrice = this.cryptoPaymentData.usdAmount;
		const discountPercentage = ((originalPrice - demoPrice) / originalPrice) * 100;

		return discountPercentage.toFixed(1);
	}

	/**
	 * Get crypto payment data from active subscription
	 * @returns Crypto payment data or null
	 */
	getCryptoData(): any {
		if (this.activeSubscription?.paymentMethod === "crypto" && this.activeSubscription?.cryptoData) {
			try {
				return typeof this.activeSubscription.cryptoData === "string"
					? JSON.parse(this.activeSubscription.cryptoData)
					: this.activeSubscription.cryptoData;
			} catch (error) {
				console.error("Error parsing crypto data:", error);
				return null;
			}
		}
		return null;
	}

	/**
	 * Get subscription status based on payment method
	 * @returns Status string
	 */
	getSubscriptionStatus(): string {
		if (this.activeSubscription?.paymentMethod === "crypto") {
			const cryptoData = this.getCryptoData();
			return cryptoData?.status || "Active";
		} else {
			// Stripe subscription status
			return this.isCancelledActive() ? "Cancelled (Active Until Period End)" : this.activeSubscription?.stripeData?.status || "Active";
		}
	}

	/**
	 * Get transaction URL for blockchain explorer
	 * @returns Transaction URL
	 */
	getTransactionUrl(): string {
		const cryptoData = this.getCryptoData();
		if (cryptoData?.transactionHash) {
			return `https://snowtrace.io/tx/${cryptoData.transactionHash}`;
		}
		return "#";
	}

	/**
	 * Get appropriate end date label based on payment method
	 * @returns Label string
	 */
	getEndDateLabel(): string {
		if (this.activeSubscription?.paymentMethod === "crypto") {
			return "Expires On:";
		} else {
			return this.isCancelledActive() ? "Access Ends:" : "Next Billing:";
		}
	}

	private createCheckoutSession(planId: string): void {
		this.billingService
			.createCheckoutSession(planId)
			.then((response) => {
				if (response.success && response.checkoutUrl) {
					// Redirect to Stripe checkout
					window.open(response.checkoutUrl, "_blank");
				} else {
					this.error = "Failed to create checkout session";
				}
			})
			.catch((error) => {
				console.error("Error creating checkout session:", error);
				this.error = "Failed to create checkout session";
			});
	}

	getPlanButtonText(plan: PricingPlan): string {
		if (plan.isCurrent) {
			return "Your current plan";
		}
		return plan.buttonText;
	}

	getPlanButtonClass(plan: PricingPlan): string {
		if (plan.isCurrent) {
			return "current-plan";
		}
		return plan.buttonClass;
	}

	isPlanDisabled(plan: PricingPlan): boolean {
		return plan.isCurrent || false;
	}

	/**
	 * Check if the subscription is cancelled but still active
	 * @returns boolean indicating if subscription is cancelled but active
	 */
	isCancelledActive(): boolean {
		if (!this.activeSubscription) return false;

		// Check both the main status and stripeData for cancelled status
		const mainStatus = this.activeSubscription.stripeData?.status === "cancelled_active";
		const stripeStatus = this.activeSubscription.stripeData?.status === "cancelled_active";
		const cancelAtPeriodEnd = this.activeSubscription.stripeData?.cancelAtPeriodEnd === true;

		return mainStatus || stripeStatus || cancelAtPeriodEnd;
	}

	/**
	 * Get the current plan details by matching with available plans
	 * @returns PricingPlan object with name, price, etc.
	 */
	getCurrentPlanDetails(): PricingPlan | null {
		if (!this.activeSubscription || !this.plans.length) return null;

		// Try to match by price ID first (most reliable)
		const priceId = this.activeSubscription.stripeData?.plan;

		if (priceId) {
			const matchedPlan = this.plans.find((plan) => plan.priceId === priceId);

			if (matchedPlan) return matchedPlan;
		}

		// Fallback: try to match by plan name from metadata
		const planName = this.activeSubscription.stripeData?.metadata?.plan;

		if (planName) {
			const matchedPlan = this.plans.find((plan) => plan.id === planName);

			if (matchedPlan) return matchedPlan;
		}

		// Last fallback: return the current plan if marked as current
		const currentPlan = this.plans.find((plan) => plan.isCurrent);
		return currentPlan || null;
	}

	/**
	 * Get the display name for the current subscription plan
	 * @returns string plan name
	 */
	getCurrentPlanName(): string {
		const planDetails = this.getCurrentPlanDetails();
		if (planDetails) return planDetails.name;

		// Fallback to backend data
		return this.activeSubscription?.stripeData?.planName || this.activeSubscription?.name || "Premium Plan";
	}

	/**
	 * Get the price for the current subscription plan
	 * @returns string formatted price
	 */
	getCurrentPlanPrice(): string {
		const planDetails = this.getCurrentPlanDetails();
		if (planDetails) {
			return `$${planDetails.price}/${planDetails.interval}`;
		}

		// Fallback to backend data (convert from cents if needed)
		const backendPrice = this.activeSubscription?.stripeData?.planPrice || this.activeSubscription?.stripeData?.amount;
		if (backendPrice) {
			const priceInDollars = backendPrice > 100 ? backendPrice / 100 : backendPrice;
			return `$${priceInDollars.toFixed(2)}/month`;
		}

		return "N/A";
	}

	/**
	 * Open Stripe customer portal for subscription management
	 */
	openCustomerPortal(): void {
		this.billingService
			.createCustomerPortalSession()
			.then((response) => {
				if (response.success && response.portalUrl) {
					// Open the portal in a new tab
					window.open(response.portalUrl, "_blank");
				} else {
					console.error("❌ Portal creation failed:", response);
					this.error = "Failed to open subscription management portal";
				}
			})
			.catch((error) => {
				console.error("❌ Error opening customer portal:", error);

				// Provide more specific error messages
				if (error.message?.includes("Customer ID not found")) {
					this.error = "Unable to find customer information. Please contact support.";
				} else if (error.message?.includes("No active subscription")) {
					this.error = "No active subscription found. Please refresh the page.";
				} else {
					this.error = `Failed to open subscription management: ${error.message || "Unknown error"}`;
				}
			});
	}
}
