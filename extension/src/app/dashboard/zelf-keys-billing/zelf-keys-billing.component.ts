import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoModule } from "@jsverse/transloco";

interface PricingPlan {
	id: string;
	name: string;
	price: number;
	currency: string;
	period: string;
	tagline: string;
	features: string[];
	buttonText: string;
	buttonClass: string;
	isPopular?: boolean;
	isCurrent?: boolean;
}

@Component({
	selector: "app-zelf-keys-billing",
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: "./zelf-keys-billing.component.html",
	styleUrls: ["./zelf-keys-billing.component.scss"],
})
export class ZelfKeysBillingComponent implements OnInit {
	plans: PricingPlan[] = [
		{
			id: "free",
			name: "Free",
			price: 0,
			currency: "USD",
			period: "month",
			tagline: "Essential features for getting started",
			features: ["Up to 10 passwords", "Basic encryption", "Single device access", "Community support", "Basic backup"],
			buttonText: "Your current plan",
			buttonClass: "current-plan",
			isCurrent: true,
		},
		{
			id: "plus",
			name: "Plus",
			price: 9.99,
			currency: "USD",
			period: "month",
			tagline: "More features for power users",
			features: [
				"Unlimited passwords",
				"Advanced encryption",
				"Multi-device sync",
				"Priority support",
				"Cloud backup",
				"Password sharing",
				"Advanced security features",
				"Dark mode themes",
			],
			buttonText: "Get Plus",
			buttonClass: "upgrade-button",
			isPopular: true,
		},
		{
			id: "pro",
			name: "Pro",
			price: 19.99,
			currency: "USD",
			period: "month",
			tagline: "Full access to all features",
			features: [
				"Everything in Plus",
				"Team collaboration",
				"Advanced analytics",
				"Custom integrations",
				"White-label options",
				"API access",
				"Priority feature requests",
				"24/7 premium support",
				"Advanced reporting",
			],
			buttonText: "Get Pro",
			buttonClass: "upgrade-button pro",
		},
	];

	currentPlan: string = "free";

	ngOnInit(): void {
		// In a real app, this would fetch the user's current subscription status
		this.loadCurrentPlan();
	}

	private loadCurrentPlan(): void {
		// Mock current plan - in real app, fetch from service
		this.currentPlan = "free";
	}

	selectPlan(planId: string): void {
		if (planId === this.currentPlan) {
			return; // Don't allow selecting current plan
		}

		// In a real app, this would handle the subscription upgrade
		console.log(`Upgrading to ${planId} plan`);
		// TODO: Implement subscription logic
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
