import * as Module from "../modules/subscription.module.js";

/**
 * Subscription Controller - Handles subscription management and Stripe integration
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Get active subscription for the authenticated user
 * @param {Object} ctx - Koa context
 */
const getActiveSubscription = async (ctx) => {
	try {
		const data = await Module.getActiveSubscription(ctx.state.user);

		ctx.status = 200;
		ctx.body = {
			success: true,
			subscription: data.subscription,
			message: data.subscription ? "Active subscription found" : "No active subscription found",
		};
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get available subscription plans
 * @param {Object} ctx - Koa context
 */
const getAvailablePlans = async (ctx) => {
	try {
		const data = await Module.getAvailablePlans();

		ctx.status = 200;
		ctx.body = {
			success: true,
			plans: data.plans,
		};
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Create Stripe checkout session for new subscription
 * @param {Object} ctx - Koa context
 */
const createCheckoutSession = async (ctx) => {
	try {
		const data = await Module.createCheckoutSession(ctx.request.body, ctx.state.user);

		ctx.status = 200;
		ctx.body = {
			success: true,
			checkoutUrl: data.checkoutUrl,
			sessionId: data.sessionId,
		};
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Cancel subscription (at period end)
 * @param {Object} ctx - Koa context
 */
const cancelSubscription = async (ctx) => {
	try {
		const data = await Module.cancelSubscription(ctx.state.user);

		ctx.status = 200;
		ctx.body = {
			success: true,
			message: data.message || "Subscription canceled successfully",
		};
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Stripe webhook handler
 * @param {Object} ctx - Koa context
 */
const webhookHandler = async (ctx) => {
	try {
		const data = await Module.webhookHandler(ctx.request.body, ctx.headers);

		ctx.status = 200;
		ctx.body = {
			success: true,
			message: "Webhook received",
		};
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

export { getActiveSubscription, getAvailablePlans, createCheckoutSession, cancelSubscription, webhookHandler };
