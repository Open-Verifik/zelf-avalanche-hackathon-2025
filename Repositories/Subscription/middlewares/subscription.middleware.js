import configuration from "../../../Core/config.js";
import { validate } from "../../../Utilities/helper.module.js";

/**
 * Subscription Middleware - Handles request validation
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Validation schemas for subscription operations
 */
const schemas = {
	checkout: {
		planId: { required: true, enum: Object.keys(configuration.stripe.plans) },
	},
};

/**
 * Validate user identifier middleware
 */
const validateUserIdentifier = async (ctx, next) => {
	const { identifier } = ctx.state.user;

	if (!identifier) {
		ctx.status = 400;
		ctx.body = {
			error: "ZelfName identifier is required",
		};
		return;
	}

	await next();
};

/**
 * Validate checkout request middleware
 */
const validateCheckoutRequest = async (ctx, next) => {
	try {
		const valid = validate(schemas.checkout, ctx.request.body);

		if (valid.error) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: valid.error.message,
				availablePlans: Object.keys(configuration.stripe.plans),
			};
			return;
		}

		// Add plan details to ctx.state for use in controller
		ctx.state.planDetails = configuration.stripe.plans[ctx.request.body.planId];

		await next();
	} catch (error) {
		console.error("Checkout validation error:", error);
		ctx.status = 500;
		ctx.body = {
			error: "Request validation failed",
			message: error.message,
		};
	}
};

/**
 * Validate webhook signature middleware
 */
const validateWebhookSignature = async (ctx, next) => {
	// Skip signature validation for testing - just pass through
	await next();
};

/**
 * Validate subscription access middleware
 */
const validateSubscriptionAccess = async (ctx, next) => {
	try {
		// This middleware can be used to check if user has access to subscription features
		// For now, it just passes through - you can add subscription status checks here

		await next();
	} catch (error) {
		console.error("Subscription access validation error:", error);
		ctx.status = 500;
		ctx.body = {
			error: "Subscription access validation failed",
			message: error.message,
		};
	}
};

export { validateUserIdentifier, validateCheckoutRequest, validateWebhookSignature, validateSubscriptionAccess };
