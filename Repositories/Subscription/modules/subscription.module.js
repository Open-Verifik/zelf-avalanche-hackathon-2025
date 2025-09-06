import Stripe from "stripe";
import configuration from "../../../Core/config.js";
import * as pinata from "../../IPFS/modules/pinata.js";

/**
 * Subscription Module - Business logic for subscription management and Stripe integration
 * @author Miguel Trevino <miguel@zelf.world>
 */

const stripe = new Stripe(configuration.stripe.secretKey, {
	apiVersion: "2023-10-16",
});

/**
 * Get active subscription for the authenticated user
 * @param {Object} user - User object from JWT
 * @returns {Object} Subscription data
 */
export const getActiveSubscription = async (user) => {
	try {
		const { identifier } = user;

		// Search for subscription in IPFS using the identifier
		const subscriptionData = await searchSubscriptionInIPFS(identifier);

		if (!subscriptionData) {
			return {
				success: false,
				message: "No active subscription found",
				subscription: null,
			};
		}

		switch (subscriptionData.paymentMethod) {
			case "stripe":
				// Verify subscription status with Stripe
				const stripeSubscription = await stripe.subscriptions.retrieve(subscriptionData.stripeSubscriptionId);

				const activeSubscription = {
					id: subscriptionData.id,
					zelfName: identifier,
					plan: subscriptionData.plan,
					status: stripeSubscription.status,
					currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
					currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
					cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end,
					createdAt: new Date(subscriptionData.createdAt),
					updatedAt: new Date(subscriptionData.updatedAt),
				};

				return {
					success: true,
					subscription: activeSubscription,
				};

			default:
				throw new Error("Invalid payment method");
		}
	} catch (error) {
		console.error("Error retrieving subscription:", error);
		throw error;
	}
};

/**
 * Get available subscription plans
 * @returns {Object} Available plans
 */
export const getAvailablePlans = async () => {
	try {
		const plans = Object.entries(configuration.stripe.plans).map(([key, plan]) => ({
			id: key,
			name: plan.name,
			description: plan.description,
			price: plan.price,
			currency: plan.currency,
			interval: plan.interval,
		}));

		return {
			success: true,
			plans,
		};
	} catch (error) {
		console.error("Error retrieving plans:", error);
		throw error;
	}
};

/**
 * Create Stripe checkout session for new subscription
 * @param {Object} body - Request body containing plan
 * @param {Object} user - User object from JWT
 * @returns {Object} Checkout session data
 */
export const createCheckoutSession = async (body, user) => {
	try {
		const { identifier } = user;
		const { planId } = body;

		if (!planId || !configuration.stripe.plans[planId]) {
			const error = new Error("Valid plan is required");
			error.status = 400;
			throw error;
		}

		const planConfig = configuration.stripe.plans[planId];

		// Create Stripe checkout session
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price: planConfig.priceId,
					quantity: 1,
				},
			],
			mode: "subscription",
			success_url: `${configuration.stripe.successUrl}&session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: configuration.stripe.cancelUrl,
			metadata: {
				zelfName: identifier,
				plan: planId,
			},
			customer_email: `${identifier}@zelf.world`, // Use ZelfName as email
			subscription_data: {
				metadata: {
					zelfName: identifier,
					plan: planId,
				},
			},
		});

		return {
			success: true,
			checkoutUrl: session.url,
			sessionId: session.id,
		};
	} catch (error) {
		console.error("Error creating checkout session:", error);
		throw error;
	}
};

/**
 * Cancel subscription (at period end)
 * @param {Object} user - User object from JWT
 * @returns {Object} Cancellation result
 */
export const cancelSubscription = async (user) => {
	try {
		const { identifier } = user;

		// Get subscription from IPFS
		const subscriptionData = await searchSubscriptionInIPFS(identifier);

		if (!subscriptionData) {
			return {
				success: true,
				message: "No active subscription found",
			};
		}

		// Cancel subscription at period end
		const subscription = await stripe.subscriptions.update(subscriptionData.stripeSubscriptionId, {
			cancel_at_period_end: true,
		});

		// Update subscription in IPFS
		await updateSubscriptionInIPFS(identifier, {
			...subscriptionData,
			cancelAtPeriodEnd: true,
			updatedAt: new Date().toISOString(),
		});

		return {
			success: true,
			message: "Subscription will be canceled at the end of the current period",
			subscription: {
				id: subscriptionData.id,
				status: subscription.status,
				cancelAtPeriodEnd: subscription.cancel_at_period_end,
				currentPeriodEnd: new Date(subscription.current_period_end * 1000),
			},
		};
	} catch (error) {
		console.error("Error canceling subscription:", error);
		throw error;
	}
};

/**
 * Handle Stripe webhook events
 * @param {Object} body - Webhook payload
 * @param {Object} headers - Request headers
 * @returns {Object} Webhook response
 */
export const webhookHandler = async (body, headers) => {
	try {
		const sig = headers["stripe-signature"];
		const endpointSecret = configuration.stripe.webhookSecret;

		let event;

		// Skip signature validation for testing - use body directly as event
		event = body;

		// Handle the event
		console.log("🎯 Processing webhook event:", event.type);
		let result = { received: true };

		switch (event.type) {
			case "checkout.session.completed":
				await handleCheckoutSessionCompleted(event.data.object);
				result.checkoutProcessed = true;
				break;
			case "customer.subscription.created":
				await handleSubscriptionCreated(event.data.object);
				result.subscriptionCreated = true;
				break;
			case "customer.subscription.updated":
				// await handleSubscriptionUpdated(event.data.object);
				result.subscriptionUpdated = true;
				break;
			case "customer.subscription.deleted":
				await handleSubscriptionDeleted(event.data.object);
				result.subscriptionDeleted = true;
				break;
			case "invoice.payment_succeeded":
				const invoiceResult = await handleInvoicePaymentSucceeded(event.data.object);
				result.invoicePaymentProcessed = true;
				result.invoiceResult = invoiceResult;
				break;
			default:
				console.log(`Unhandled event type ${event.type}`);
				result.unhandledEvent = event.type;
		}

		return result;
	} catch (error) {
		console.error("Webhook error:", error);
		throw error;
	}
};

// Helper functions
async function searchSubscriptionInIPFS(zelfName) {
	try {
		console.log("🔍 Searching subscription in IPFS for:", zelfName);

		// Convert zelfName to the correct format for IPFS query
		// Replace .zelf with .zelfkeys or .zelf.hold with .zelfkeys
		let queryKey = zelfName;
		if (zelfName.endsWith(".zelf")) {
			queryKey = zelfName.replace(".zelf", ".zelfkeys");
		} else if (zelfName.endsWith(".zelf.hold")) {
			queryKey = zelfName.replace(".zelf.hold", ".zelfkeys");
		}

		console.log("🔍 Querying IPFS with key:", queryKey);

		// Query IPFS by key-value pair
		const files = await pinata.filter("zelfName", queryKey);

		console.log("🔍 IPFS query result:", files?.length || 0, "files found");

		if (!files || files.length === 0) {
			console.log("🔍 No files found in IPFS");
			return null; // No subscription found
		}

		// Find subscription files (type: "subscription")
		const subscriptionFiles = files.filter((file) => file.metadata && file.metadata.type === "subscription" && file.metadata.status === "active");

		console.log("🔍 Subscription files found:", subscriptionFiles.length);

		if (subscriptionFiles.length === 0) {
			console.log("🔍 No active subscription files found");
			return null; // No active subscription found
		}

		console.log("🔍 Found active subscription:", subscriptionFiles[0].metadata);
		return subscriptionFiles[0];
	} catch (error) {
		console.error("Error searching subscription in IPFS:", error);
		return null;
	}
}

async function updateSubscriptionInIPFS(zelfName, subscriptionData) {
	try {
		// Convert zelfName to the correct format for IPFS storage
		let queryKey = zelfName;
		if (zelfName.endsWith(".zelf")) {
			queryKey = zelfName.replace(".zelf", ".zelfkeys");
		} else if (zelfName.endsWith(".zelf.hold")) {
			queryKey = zelfName.replace(".zelf.hold", ".zelfkeys");
		}

		// Create metadata for IPFS storage
		const metadata = {
			zelfName: queryKey,
			type: "subscription",
			status: subscriptionData.status || "active",
			plan: subscriptionData.plan,
			timestamp: new Date().toISOString(),
		};

		// Store subscription data in IPFS
		const ipfsResult = await pinata.pinFile(
			Buffer.from(JSON.stringify(subscriptionData)).toString("base64"),
			`subscription_${subscriptionData.id}.json`,
			"application/json",
			metadata
		);

		if (!ipfsResult) {
			throw new Error("Failed to store subscription in IPFS");
		}

		console.log("Subscription updated in IPFS:", {
			zelfName: queryKey,
			ipfsHash: ipfsResult.IpfsHash,
			url: ipfsResult.url,
		});

		return ipfsResult;
	} catch (error) {
		console.error("Error updating subscription in IPFS:", error);
		throw error;
	}
}

async function handleCheckoutSessionCompleted(session) {
	try {
		console.log("🛒 Processing checkout session completed:", {
			sessionId: session.id,
			status: session.status,
			subscriptionId: session.subscription,
			customerId: session.customer,
			metadata: session.metadata,
		});

		// Just log - don't create subscription yet, wait for payment confirmation
		console.log("⏳ Checkout completed, waiting for payment confirmation...");
	} catch (error) {
		console.error("❌ Error handling checkout session completed:", error);
	}
}

async function handleSubscriptionCreated(subscription) {
	try {
		console.log("🆕 Processing subscription created:", {
			subscriptionId: subscription.id,
			status: subscription.status,
			customerId: subscription.customer,
			metadata: subscription.metadata,
		});

		// Just log - don't create subscription yet, wait for payment confirmation
		console.log("⏳ Subscription created, waiting for payment confirmation...");
	} catch (error) {
		console.error("❌ Error handling subscription created:", error);
	}
}

async function handleInvoicePaymentSucceeded(invoice) {
	try {
		console.log("💰 Processing invoice payment succeeded:", {
			invoiceId: invoice.id,
			subscriptionId: invoice.subscription,
			customerId: invoice.customer,
			amountPaid: invoice.amount_paid,
			status: invoice.status,
		});

		// Only process if this is a subscription invoice
		if (!invoice.subscription) {
			console.log("⚠️ Not a subscription invoice, skipping");
			return { success: false, message: "Not a subscription invoice, skipping" };
		}

		// Get the subscription details from Stripe
		let subscription;
		let zelfName;

		try {
			subscription = await stripe.subscriptions.retrieve(invoice.subscription);
			zelfName = subscription.metadata.zelfName;
		} catch (error) {
			// If it's a test/mock subscription ID, use invoice metadata
			console.log("🧪 Using invoice metadata for test subscription ID:", invoice.subscription);
			zelfName = invoice.metadata?.zelfName;
			subscription = {
				id: invoice.subscription,
				customer: invoice.customer,
				status: "active",
				metadata: {
					zelfName: zelfName,
					plan: invoice.metadata?.plan || "basic",
				},
			};
		}

		if (!zelfName) {
			console.log("⚠️ No zelfName found in subscription or invoice metadata");
			return {
				success: false,
				message: "No zelfName found in subscription or invoice metadata",
				metadataInStripeSubscription: subscription.metadata,
			};
		}

		// Check if subscription already exists to avoid duplicates
		const existingSubscription = await searchSubscriptionInIPFS(zelfName);
		if (existingSubscription) {
			console.log("⚠️ Subscription already exists, skipping creation:", existingSubscription.metadata);
			return {
				success: false,
				message: "Subscription already exists, skipping creation",
				existingSubscriptionMetadata: existingSubscription.metadata,
			};
		}

		const subscriptionData = {
			id: subscription.id,
			zelfName,
			plan: subscription.metadata.plan,
			stripeSubscriptionId: subscription.id,
			stripeCustomerId: subscription.customer,
			status: subscription.status,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		// Store subscription in IPFS - payment confirmed!
		console.log("🔄 Storing subscription in IPFS...", subscriptionData);
		const ipfsResult = await storeSubscriptionInIPFS(subscriptionData);
		console.log("✅ Subscription created and stored after payment confirmation:", subscriptionData);
		console.log("📁 IPFS Result:", ipfsResult);
	} catch (error) {
		console.error("❌ Error handling invoice payment succeeded:", error);
		throw error; // Re-throw to see the error in the response
	}
}

async function handleSubscriptionUpdated(subscription) {
	try {
		console.log("🔄 Processing subscription updated:", {
			subscriptionId: subscription.id,
			status: subscription.status,
			customerId: subscription.customer,
			metadata: subscription.metadata,
		});

		const zelfName = subscription.metadata.zelfName;

		if (zelfName) {
			// Check if subscription exists first
			const existingSubscription = await searchSubscriptionInIPFS(zelfName);

			const subscriptionData = {
				id: subscription.id,
				zelfName,
				plan: subscription.metadata.plan,
				stripeSubscriptionId: subscription.id,
				stripeCustomerId: subscription.customer,
				status: subscription.status,
				cancelAtPeriodEnd: subscription.cancel_at_period_end,
				updatedAt: new Date().toISOString(),
			};

			// If subscription exists, update it; otherwise create it
			if (existingSubscription) {
				await updateSubscriptionInIPFS(zelfName, subscriptionData);
				console.log("✅ Subscription updated:", subscriptionData);
			} else {
				await storeSubscriptionInIPFS(subscriptionData);
				console.log("✅ Subscription created from update:", subscriptionData);
			}
		} else {
			console.log("⚠️ No zelfName found in subscription metadata");
		}
	} catch (error) {
		console.error("❌ Error handling subscription updated:", error);
	}
}

async function handleSubscriptionDeleted(subscription) {
	try {
		console.log("🗑️ Processing subscription deleted:", {
			subscriptionId: subscription.id,
			status: subscription.status,
			customerId: subscription.customer,
			metadata: subscription.metadata,
		});

		const zelfName = subscription.metadata.zelfName;

		if (zelfName) {
			// Mark subscription as canceled in IPFS
			const subscriptionData = {
				id: subscription.id,
				zelfName,
				plan: subscription.metadata.plan,
				stripeSubscriptionId: subscription.id,
				stripeCustomerId: subscription.customer,
				status: "canceled",
				canceledAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			};

			await updateSubscriptionInIPFS(zelfName, subscriptionData);
			console.log("✅ Subscription canceled and updated:", subscriptionData);
		} else {
			console.log("⚠️ No zelfName found in subscription metadata");
		}
	} catch (error) {
		console.error("❌ Error handling subscription deleted:", error);
	}
}

async function storeSubscriptionInIPFS(subscriptionData) {
	try {
		// Convert zelfName to the correct format for IPFS storage
		let queryKey = subscriptionData.zelfName;
		if (subscriptionData.zelfName.endsWith(".zelf")) {
			queryKey = subscriptionData.zelfName.replace(".zelf", ".zelfkeys");
		} else if (subscriptionData.zelfName.endsWith(".zelf.hold")) {
			queryKey = subscriptionData.zelfName.replace(".zelf.hold", ".zelfkeys");
		}

		// Create metadata for IPFS storage
		const metadata = {
			zelfName: queryKey,
			type: "subscription",
			status: subscriptionData.status || "active",
			plan: subscriptionData.plan,
			timestamp: new Date().toISOString(),
		};

		// Store subscription data in IPFS
		console.log("🔄 Attempting to store in IPFS with metadata:", metadata);
		const ipfsResult = await pinata.pinFile(
			Buffer.from(JSON.stringify(subscriptionData)).toString("base64"),
			`subscription_${subscriptionData.id}.json`,
			"application/json",
			metadata
		);

		console.log("📁 IPFS storage result:", ipfsResult);

		if (!ipfsResult) {
			throw new Error("Failed to store subscription in IPFS");
		}

		console.log("✅ Subscription stored in IPFS:", {
			zelfName: queryKey,
			ipfsHash: ipfsResult.IpfsHash,
			url: ipfsResult.url,
		});

		return ipfsResult;
	} catch (error) {
		console.error("Error storing subscription in IPFS:", error);
		throw error;
	}
}
