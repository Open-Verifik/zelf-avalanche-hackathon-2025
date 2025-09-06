import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";
import { BillingService, PricingPlan } from "../../services/billing.service";

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

	constructor(private billingService: BillingService) {}

	ngOnInit(): void {
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
		// TODO: Fetch current subscription from API
		// For now, default to free
		this.currentPlan = "free";
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
