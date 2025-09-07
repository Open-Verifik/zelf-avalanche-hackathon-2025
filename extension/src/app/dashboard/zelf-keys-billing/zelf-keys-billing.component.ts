import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { BillingService, PricingPlan } from "../../services/billing.service";
import { WalletService } from "../../wallet.service";
import { Wallet } from "app/wallet";
import { Router } from "@angular/router";

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

	selectPlan(planId: string): void {
		if (planId === this.currentPlan) {
			return; // Don't allow selecting current plan
		}

		this.createCheckoutSession(planId);
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
