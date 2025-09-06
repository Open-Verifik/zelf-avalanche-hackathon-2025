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
};
