import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { BillingService, PricingPlan } from "../../services/billing.service";
import { WalletService } from "../../wallet.service";

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

	constructor(
		private billingService: BillingService,
		private _walletService: WalletService
	) {}

	async ngOnInit(): Promise<void> {
		await this._walletService.initZelfKeySession();

		this.loadPlans();

		this.loadCurrentPlan();
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
				console.log("Response:", response);

				if (!response.success || !response.data) {
					this.currentPlan = "free";
					return;
				}

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

		console.log(`Upgrading to ${planId} plan`);
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
}
