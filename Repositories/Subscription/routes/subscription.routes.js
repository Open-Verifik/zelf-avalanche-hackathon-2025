import * as Controller from "../controllers/subscription.controller.js";
import * as Middleware from "../middlewares/subscription.middleware.js";

/**
 * Unprotected Subscription Routes - API endpoints that don't require authentication
 * @author Miguel Trevino <miguel@zelf.world>
 */
const PATH = "/api/subscription";

export default (server) => {
	// Get available subscription plans (public endpoint)
	server.get(`${PATH}/plans`, Controller.getAvailablePlans);

	// Stripe webhook handler (no JWT validation needed)
	server.post(`${PATH}/webhook`, Middleware.validateWebhookSignature, Controller.webhookHandler);
};
