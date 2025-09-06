import { Injectable } from "@angular/core";
import { HttpWrapperService } from "./../http-wrapper.service";
import { environment } from "../../environments/environment";
import { WalletService } from "app/wallet.service";

export interface PricingPlan {
	id: string;
	name: string;
	price: number;
	currency: string;
	interval: string;
	description: string;
	features?: string[];
	buttonText: string;
	buttonClass: string;
	isPopular?: boolean;
	isCurrent?: boolean;
	priceId?: string; // Stripe price ID
}

export interface ApiPlan {
	id: string;
	name: string;
	description: string;
	price: number;
	currency: string;
	interval: string;
	priceId?: string; // Stripe price ID
}

export interface ApiResponse {
	success: boolean;
	plans: ApiPlan[];
}

export interface CheckoutResponse {
	success: boolean;
	checkoutUrl: string;
	sessionId: string;
}

export interface SubscriptionData {
	id: string;
	url: string;
	ipfs_pin_hash: string;
	name: string;
	type: string;
	endDate: string;
	zelfName: string;
	startDate: string;
	stripeData: {
		id: string;
		latestInvoice: string;
		customer: string;
		status: string;
		plan: string;
	};
	paymentMethod: string;
}

export interface SubscriptionResponse {
	success: boolean;
	data: SubscriptionData | null;
	message: string;
}

@Injectable({
	providedIn: "root",
})
export class BillingService {
	private baseUrl: string = environment.keysApiUrl;

	constructor(
		private _httpWrapper: HttpWrapperService,
		private _walletService: WalletService
	) {}

	/**
	 * Get available subscription plans
	 * @returns Promise with the list of available plans
	 */
	async getAvailablePlans(): Promise<ApiResponse> {
		return this._httpWrapper.sendRequest("get", `${this.baseUrl}/api/subscription/plans`);
	}

	/**
	 * Get active subscription for the current user
	 * @returns Promise with the active subscription data
	 */
	async getActiveSubscription(): Promise<SubscriptionResponse> {
		const apiKeysSessionJWT = this._walletService.getZelfKeyJWT();
		return this._httpWrapper.sendRequest("get", `${this.baseUrl}/api/subscription/active`, null, {
			headers: {
				Authorization: `Bearer ${apiKeysSessionJWT}`,
			},
		});
	}

	/**
	 * Create a Stripe checkout session
	 * @param planId - The ID of the plan to subscribe to
	 * @returns Promise with the checkout session data
	 */
	async createCheckoutSession(planId: string): Promise<CheckoutResponse> {
		const apiKeysSessionJWT = this._walletService.getZelfKeyJWT();

		return this._httpWrapper.sendRequest(
			"post",
			`${this.baseUrl}/api/subscription/checkout`,
			{
				planId: planId,
			},
			{
				headers: {
					Authorization: `Bearer ${apiKeysSessionJWT}`,
				},
			}
		);
	}

	/**
	 * Cancel the current subscription
	 * @returns Promise with the cancellation result
	 */
	async cancelSubscription(): Promise<{ success: boolean; message: string }> {
		const apiKeysSessionJWT = this._walletService.getZelfKeyJWT();
		return this._httpWrapper.sendRequest("post", `${this.baseUrl}/api/subscription/cancel`, null, {
			headers: {
				Authorization: `Bearer ${apiKeysSessionJWT}`,
			},
		});
	}

	/**
	 * Transform API plans to pricing plans with additional UI properties
	 * @param apiPlans - Plans from the API
	 * @returns Transformed pricing plans
	 */
	transformApiPlansToPricingPlans(apiPlans: ApiPlan[]): PricingPlan[] {
		return apiPlans.map((plan) => ({
			id: plan.id,
			name: plan.name,
			price: plan.price,
			currency: plan.currency.toUpperCase(),
			interval: plan.interval,
			description: plan.description,
			features: this.getPlanFeatures(plan.id),
			buttonText: this.getPlanButtonText(plan.id),
			buttonClass: this.getPlanButtonClass(plan.id),
			isPopular: plan.id === "pro",
			isCurrent: false, // Will be updated based on current subscription
			priceId: plan.priceId, // Pass through Stripe price ID
		}));
	}

	/**
	 * Get features for a specific plan
	 * @param planId - The plan ID
	 * @returns Array of feature strings
	 */
	private getPlanFeatures(planId: string): string[] {
		const featuresMap: { [key: string]: string[] } = {
			basic: ["Up to 10 passwords", "Basic encryption", "Single device access", "Community support", "Basic backup"],
			pro: [
				"Unlimited passwords",
				"Advanced encryption",
				"Multi-device sync",
				"Priority support",
				"Cloud backup",
				"Password sharing",
				"Advanced security features",
				"Dark mode themes",
			],
			enterprise: [
				"Everything in Pro",
				"Team collaboration",
				"Advanced analytics",
				"Custom integrations",
				"White-label options",
				"API access",
				"Priority feature requests",
				"24/7 premium support",
				"Advanced reporting",
			],
		};
		return featuresMap[planId] || [];
	}

	/**
	 * Get button text for a specific plan
	 * @param planId - The plan ID
	 * @returns Button text string
	 */
	private getPlanButtonText(planId: string): string {
		const buttonTextMap: { [key: string]: string } = {
			basic: "Get Basic",
			pro: "Get Pro",
			enterprise: "Get Enterprise",
		};
		return buttonTextMap[planId] || "Get Plan";
	}

	/**
	 * Get button CSS class for a specific plan
	 * @param planId - The plan ID
	 * @returns CSS class string
	 */
	private getPlanButtonClass(planId: string): string {
		const buttonClassMap: { [key: string]: string } = {
			basic: "upgrade-button",
			pro: "upgrade-button pro",
			enterprise: "upgrade-button enterprise",
		};
		return buttonClassMap[planId] || "upgrade-button";
	}
}
