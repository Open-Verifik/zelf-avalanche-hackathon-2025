import * as Controller from "../controllers/subscription.controller.js";
import * as Middleware from "../middlewares/subscription.middleware.js";

/**
 * Protected Subscription Routes - API endpoints requiring authentication
 * @author Miguel Trevino <miguel@zelf.world>
 */
const PATH = "/api/subscription";

export default (server) => {
	// Get active subscription for the authenticated user
	server.get(`${PATH}/active`, Middleware.validateUserIdentifier, Controller.getActiveSubscription);

	// Create Stripe checkout session for new subscription
	server.post(`${PATH}/checkout`, Middleware.validateUserIdentifier, Middleware.validateCheckoutRequest, Controller.createCheckoutSession);

	// Cancel subscription (at period end)
	server.post(`${PATH}/cancel`, Middleware.validateUserIdentifier, Controller.cancelSubscription);

	// Create Stripe customer portal session for subscription management
	server.post(`${PATH}/portal`, Middleware.validateUserIdentifier, Controller.createCustomerPortalSession);

	// Create crypto payment for subscription
	server.post(`${PATH}/crypto-payment`, Middleware.validateUserIdentifier, Controller.createCryptoPayment);

	// Confirm crypto payment by checking blockchain transactions
	server.post(`${PATH}/confirm-crypto-payment`, Middleware.validateUserIdentifier, Controller.confirmCryptoPayment);
};
