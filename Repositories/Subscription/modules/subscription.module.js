import Stripe from "stripe";
import configuration from "../../../Core/config.js";
import * as pinata from "../../IPFS/modules/pinata.js";
import moment from "moment";
import { generateMnemonic } from "../../../Utilities/mnemonic.module.js";
import { createEthWallet } from "../../../Utilities/eth-wallet.module.js";
import * as zelfProofModule from "../../ZelfProof/modules/zelf-proof.module.js";
import avaxSignerModule from "../../../core-wallet-signer.json" with { type: "json" };
import { calculateCryptoAmount } from "../../../Utilities/crypto-price.module.js";
import { lockPriceData } from "../../../Utilities/price-lock.module.js";

/**
 * Subscription Module - Business logic for subscription management and Stripe integration
 * @author Miguel Trevino <miguel@zelf.world>
 */

const stripe = new Stripe(configuration.stripe.secretKey, {
	apiVersion: "2023-10-16",
});

/**
 * Convert zelfName to zelfKeys format for IPFS operations
 * @param {string} zelfName - The original zelfName (e.g., "user.zelf" or "user.zelf.hold")
 * @returns {string} The converted zelfKeys format (e.g., "user.zelfkeys")
 */
const convertToZelfKeysFormat = (zelfName, extension = ".zelfkeys") => {
	if (!zelfName) return zelfName;

	if (zelfName.endsWith(".zelf.hold")) {
		return zelfName.replace(".zelf.hold", extension);
	}

	if (zelfName.endsWith(".zelf")) {
		return zelfName.replace(".zelf", extension);
	}

	// If it doesn't end with .zelf or .zelf.hold, return as is
	return zelfName;
};

/**
 * Get active subscription for the authenticated user
 * @param {Object} user - User object from JWT
 * @returns {Object} Subscription data
 */
const getActiveSubscription = async (user) => {
	try {
		const { identifier } = user;

		console.log("Identifier:::::", identifier);

		// Convert zelfName to zelfKeys format for IPFS operations
		const zelfKeysTag = convertToZelfKeysFormat(identifier, ".zelfkeys");

		console.log("ZelfKeysTag:::::", zelfKeysTag);

		// Search for subscription in IPFS using the converted identifier
		const subscriptionData = await searchSubscriptionInIPFS(zelfKeysTag);

		if (!subscriptionData) {
			return {
				success: false,
				message: "No active subscription found",
				subscription: null,
			};
		}

		return subscriptionData;

		// switch (subscriptionData.paymentMethod) {
		// 	case "stripe":
		// 		// Verify subscription status with Stripe
		// 		const stripeSubscription = await stripe.subscriptions.retrieve(subscriptionData.stripeSubscriptionId);

		// 		const activeSubscription = {
		// 			id: subscriptionData.id,
		// 			zelfName: identifier,
		// 			plan: subscriptionData.plan,
		// 			status: stripeSubscription.status,
		// 			currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
		// 			currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
		// 			cancelAtPeriodEnd: stripeSubscription.cancel_at_period_end,
		// 			createdAt: new Date(subscriptionData.createdAt),
		// 		};

		// 		return {
		// 			success: true,
		// 			subscription: activeSubscription,
		// 		};

		// 	default:
		// 		throw new Error("Invalid payment method");
		// }
	} catch (error) {
		console.error("Error retrieving subscription:", error);
		throw error;
	}
};

/**
 * Get available subscription plans
 * @returns {Object} Available plans
 */
const getAvailablePlans = async () => {
	try {
		const plans = Object.entries(configuration.stripe.plans).map(([key, plan]) => ({
			id: key,
			name: plan.name,
			description: plan.description,
			price: plan.price,
			currency: plan.currency,
			interval: plan.interval,
			priceId: plan.priceId, // Include Stripe price ID
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
const createCheckoutSession = async (body, user) => {
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
const cancelSubscription = async (user) => {
	try {
		const { identifier } = user;

		// Convert zelfName to zelfKeys format for IPFS operations
		const zelfKeysTag = convertToZelfKeysFormat(identifier, ".zelfkeys");

		// Get subscription from IPFS
		const subscriptionData = await searchSubscriptionInIPFS(zelfKeysTag);

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
		await updateSubscriptionInIPFS(zelfKeysTag, {
			...subscriptionData,
			cancelAtPeriodEnd: true,
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
 * Create crypto payment for subscription
 * @param {Object} body - Request body with planId
 * @param {Object} user - User object from JWT
 * @returns {Object} Crypto payment data
 */
const createCryptoPayment = async (body, user) => {
	try {
		const { planId } = body;
		const { identifier } = user;

		// Get plan details
		const plans = configuration.stripe.plans;
		const selectedPlan = plans[planId];

		if (!selectedPlan) throw new Error("Invalid plan selected");

		const zkPayTag = convertToZelfKeysFormat(identifier, ".zkpay");

		// Check for existing zkPay record first
		const recordsFound = await pinata.filter("zkPay", zkPayTag);
		const existingZkPay = recordsFound && Array.isArray(recordsFound) && recordsFound.length ? recordsFound[0] : null;

		// Get real-time AVAX price and calculate amount
		console.log("💰 Fetching real-time AVAX price...");
		const priceCalculation = await calculateCryptoAmount(selectedPlan.price, "AVAX");
		
		// Check if demo mode is enabled
		const isDemoMode = configuration.cryptoPayments.demoMode;
		const demoMultiplier = configuration.cryptoPayments.demoMultiplier;
		
		// Calculate demo amounts if in demo mode
		const demoUsdAmount = isDemoMode ? selectedPlan.price * demoMultiplier : selectedPlan.price;
		const demoPriceCalculation = isDemoMode ? await calculateCryptoAmount(demoUsdAmount, "AVAX") : priceCalculation;
		
		console.log("📊 Price calculation:", {
			isDemoMode,
			originalUsdAmount: selectedPlan.price,
			originalAvaxAmount: priceCalculation.cryptoAmount,
			demoUsdAmount: isDemoMode ? demoUsdAmount : "N/A",
			demoAvaxAmount: isDemoMode ? demoPriceCalculation.cryptoAmount : "N/A",
			avaxPrice: priceCalculation.cryptoPrice,
		});

		// Create price lock data (use demo amounts if in demo mode)
		const priceLockData = {
			planId,
			planName: selectedPlan.name,
			usdAmount: isDemoMode ? demoUsdAmount : selectedPlan.price,
			avaxAmount: isDemoMode ? demoPriceCalculation.cryptoAmount : priceCalculation.cryptoAmount,
			avaxPrice: priceCalculation.cryptoPrice,
			zelfName: identifier,
			zkPayTag,
			isDemoMode,
			originalUsdAmount: selectedPlan.price,
			originalAvaxAmount: priceCalculation.cryptoAmount,
		};

		// Lock the price for 30 minutes
		const lockedPriceToken = lockPriceData(priceLockData, 30);

		const returnData = {
			success: true, 
			paymentAddress: existingZkPay.metadata.keyvalues.avalancheAddress,
			amount: isDemoMode ? demoPriceCalculation.cryptoAmount : priceCalculation.cryptoAmount,
			currency: "AVAX",
			usdAmount: isDemoMode ? demoUsdAmount : selectedPlan.price,
			avaxPrice: priceCalculation.cryptoPrice,
			lockedPriceToken,
			expiresAt: moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss"),
			isDemoMode,
			originalAmount: {
				usd: selectedPlan.price,
				avax: priceCalculation.cryptoAmount,
			},
		};

		if (existingZkPay) {
			return {
				...returnData,
				zkPay: {
					url: existingZkPay.url,
					ipfs_pin_hash: existingZkPay.ipfs_pin_hash,
					name: existingZkPay.metadata.name,
					publicData: existingZkPay.metadata.keyvalues,
				},
			};
		}

		// Create new zkPay record with locked pricing
		const zkPay = await _storePaymentAddress(identifier, zkPayTag, priceLockData);

		return {
			...returnData,
			zkPay,
		};
	} catch (error) {
		console.error("Error creating crypto payment:", error);
		throw error;
	}
};

const _storePaymentAddress = async (zelfName, zkPay, priceLockData) => {
	// first we need to encrypt and encryptQRCode the zelfProofData
	const mnemonic = generateMnemonic(12);

	const wallet = createEthWallet(mnemonic);

		const zkPayData = {
			publicData: {
				avalancheAddress: wallet.address,
				customerTag: zelfName,
				zkPay,
				planId: priceLockData.planId,
				planName: priceLockData.planName,
				usdAmount: priceLockData.usdAmount,
				avaxAmount: priceLockData.avaxAmount,
				avaxPrice: priceLockData.avaxPrice,
				paymentMethod: "crypto",
				status: "pending",
				createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
				isDemoMode: priceLockData.isDemoMode || false,
				originalUsdAmount: priceLockData.originalUsdAmount || priceLockData.usdAmount,
				originalAvaxAmount: priceLockData.originalAvaxAmount || priceLockData.avaxAmount,
			},
		identifier: zkPay,
		faceBase64: avaxSignerModule.faceBase64,
		password: avaxSignerModule.password,
		metadata: {
			mnemonic: mnemonic,
		},
		os: "DESKTOP",
		requireLiveness: true,
		livenessLevel: "REGULAR",
	};

	const { zelfProof } = await zelfProofModule.encrypt(zkPayData);

	const { zelfQR } = await zelfProofModule.encryptQRCode(zkPayData);

	const ipfsResult = await pinata.pinFile(zelfQR, `${zkPay}`, "application/json", { ...zkPayData.publicData, zelfProof });
	
	return {
		url: ipfsResult.url,
		ipfs_pin_hash: ipfsResult.IpfsHash,
		name: ipfsResult.Name,
		publicData: ipfsResult.metadata,
	};
};

// Track processed webhook events to prevent duplicates
const processedWebhooks = new Map();

/**
 * Handle Stripe webhook events
 * @param {Object} body - Webhook payload
 * @param {Object} headers - Request headers
 * @returns {Object} Webhook response
 */
const webhookHandler = async (body, headers) => {
	try {
		let event;

		// Skip signature validation for testing - use body directly as event
		event = body;

		// Create unique key for deduplication
		const eventKey = `${event.type}_${event.data?.object?.id}_${event.created}`;

		// Check if we've already processed this exact event
		if (processedWebhooks.has(eventKey)) {
			console.log("🔄 Duplicate webhook detected, skipping:", eventKey);
			return { received: true, duplicate: true };
		}

		// Mark as processing immediately to prevent race conditions
		processedWebhooks.set(eventKey, Date.now());

		// Small delay to handle rapid-fire webhooks (let other duplicates arrive first)
		await new Promise((resolve) => setTimeout(resolve, 100));

		// Clean up old entries (older than 1 hour)
		const oneHourAgo = Date.now() - 60 * 60 * 1000;
		for (const [key, timestamp] of processedWebhooks.entries()) {
			if (timestamp < oneHourAgo) {
				processedWebhooks.delete(key);
			}
		}

		// Handle the event
		console.log("🎯 Processing webhook event:", event.type, "Key:", eventKey);
		let result = { received: true, eventKey };

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
				await handleSubscriptionUpdated(event.data.object);
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
		// Remove from processed map if there was an error
		const eventKey = `${body.type}_${body.data?.object?.id}_${body.created}`;
		processedWebhooks.delete(eventKey);
		throw error;
	}
};

// Helper functions
async function searchSubscriptionInIPFS(zelfKeysTag) {
	try {
		const files = await pinata.filter("zelfName", zelfKeysTag);

		let activeSubscription = null;

		for (let index = 0; index < files.length; index++) {
			const element = files[index];

			const keyValues = element.metadata?.keyvalues;

			// now we need to check if the currentDate moment now() is between the startDate and endDate
			const currentDate = moment();
			const startDate = moment(keyValues.startDate);
			const endDate = moment(keyValues.endDate);

			// Check if subscription is active (either active or cancelled but still within period)
			const isWithinPeriod = currentDate.isBetween(startDate, endDate);
			const isActiveOrCancelledActive = !keyValues.status || keyValues.status === "active" || keyValues.status === "cancelled_active";

			if (isWithinPeriod && isActiveOrCancelledActive) {
				activeSubscription = {
					id: element.id,
					url: element.url,
					ipfs_pin_hash: element.ipfs_pin_hash,
					name: element.metadata.name,
					...keyValues,
					stripeData: keyValues.stripeData ? JSON.parse(keyValues.stripeData) : null,
				};
				break;
			}
		}

		return activeSubscription;
	} catch (error) {
		console.error("Error searching subscription in IPFS:", error);
	}

	return null;
}

async function updateSubscriptionInIPFS(zelfKeysTag, subscriptionData) {
	try {
		const ipfsResult = await pinata.pinFile(
			Buffer.from(JSON.stringify(subscriptionData)).toString("base64"),
			`${zelfKeysTag}.json`,
			"application/json",
			subscriptionData
		);

		if (!ipfsResult) throw new Error("Failed to store subscription in IPFS");

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
		// console.log("🆕 Processing subscription created:", {
		// 	subscriptionId: subscription.id,
		// 	status: subscription.status,
		// 	customerId: subscription.customer,
		// 	metadata: subscription.metadata,
		// });
		// Just log - don't create subscription yet, wait for payment confirmation
		// console.log("⏳ Subscription created, waiting for payment confirmation...");
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
			return {
				success: false,
				message: "No zelfName found in subscription or invoice metadata",
				metadataInStripeSubscription: subscription.metadata,
			};
		}

		// Convert zelfName to zelfKeys format for IPFS operations
		const zelfKeysTag = convertToZelfKeysFormat(zelfName);

		// Check if subscription already exists to avoid duplicates
		const existingSubscription = await searchSubscriptionInIPFS(zelfKeysTag);

		if (existingSubscription) {
			return {
				success: false,
				message: "Subscription already exists, skipping creation",
				existingSubscriptionMetadata: existingSubscription.metadata,
			};
		}

		console.log("🔍 Subscription:", subscription);

		const subscriptionData = {
			stripeData: JSON.stringify({
				id: subscription.id,
				latestInvoice: subscription.latest_invoice,
				customer: subscription.customer,
				status: subscription.status,
				plan: subscription.plan.id,
				planName: subscription.plan.name,
				price: subscription.plan.amount / 100,
			}),
			zelfName: zelfKeysTag,
			startDate: moment(new Date(subscription.current_period_start * 1000)).format("YYYY-MM-DD HH:mm:ss"),
			endDate: moment(new Date(subscription.current_period_end * 1000)).format("YYYY-MM-DD HH:mm:ss"),
			paymentMethod: "stripe",
			type: "subscription",
		};

		const ipfsResult = await storeSubscriptionInIPFS(subscriptionData);

		console.log("📁 IPFS Result:", ipfsResult);
	} catch (error) {
		console.error("❌ Error handling invoice payment succeeded:", error);
		throw error; // Re-throw to see the error in the response
	}
}

async function handleSubscriptionUpdated(subscription) {
	try {
		const zelfName = subscription.metadata?.zelfName;

		if (!zelfName) return;

		console.log("🔄 Processing subscription update:", {
			subscriptionId: subscription.id,
			status: subscription.status,
			cancelAtPeriodEnd: subscription.cancel_at_period_end,
			zelfName,
		});

		// Convert zelfName to zelfKeys format for IPFS operations
		const zelfKeysTag = convertToZelfKeysFormat(zelfName);

		// Check if subscription exists first
		const existingSubscription = await searchSubscriptionInIPFS(zelfKeysTag);

		if (!existingSubscription) {
			console.log("⚠️ No existing subscription found to update for:", zelfKeysTag);
			return;
		}

		console.log("📝 Updating existing subscription:", {
			currentHash: existingSubscription.ipfs_pin_hash,
			currentStatus: existingSubscription.stripeData?.status,
			newStatus: subscription.status,
		});

		// Parse existing stripe data
		const stripeData =
			typeof existingSubscription.stripeData === "string" ? JSON.parse(existingSubscription.stripeData) : existingSubscription.stripeData;

		// Update stripe data with new information
		stripeData.status = subscription.cancel_at_period_end ? "cancelled_active" : subscription.status;
		stripeData.cancelledAt = subscription.cancel_at_period_end ? moment().format("YYYY-MM-DD HH:mm:ss") : null;
		stripeData.cancelAtPeriodEnd = subscription.cancel_at_period_end;
		stripeData.plan = subscription.plan.id;
		stripeData.planName = subscription.plan.name;
		stripeData.price = subscription.plan.amount / 100;

		const subscriptionData = {
			stripeData: JSON.stringify(stripeData),
			zelfName: zelfKeysTag,
			startDate: moment(new Date(subscription.current_period_start * 1000)).format("YYYY-MM-DD HH:mm:ss"),
			endDate: moment(new Date(subscription.current_period_end * 1000)).format("YYYY-MM-DD HH:mm:ss"),
			paymentMethod: "stripe",
			type: "subscription",
		};

		// Atomically replace the subscription: unpin old, create new
		try {
			// First create the new record
			const newRecord = await pinata.pinFile(
				Buffer.from(JSON.stringify(subscriptionData)).toString("base64"),
				`${zelfKeysTag}.json`,
				"application/json",
				subscriptionData
			);

			if (!newRecord) throw new Error("Failed to create new subscription record");

			// Then unpin the old record
			await pinata.unPinFiles([existingSubscription.ipfs_pin_hash]);

			console.log("✅ Subscription updated successfully:", {
				zelfName: zelfKeysTag,
				oldHash: existingSubscription.ipfs_pin_hash,
				newHash: newRecord.ipfs_pin_hash || newRecord.IpfsHash,
				status: subscriptionData.stripeData.status,
			});
		} catch (ipfsError) {
			console.error("❌ Error updating IPFS record:", ipfsError);
			throw ipfsError;
		}
	} catch (error) {
		console.error("❌ Error handling subscription updated:", error);
		throw error;
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

		const zelfName = subscription.metadata?.zelfName;

		if (!zelfName) {
			console.log("⚠️ No zelfName found in subscription metadata, skipping deletion");
			return;
		}

		// Convert zelfName to zelfKeys format for IPFS operations
		const zelfKeysTag = convertToZelfKeysFormat(zelfName);

		// Find the existing subscription in IPFS to get the pin hash
		const existingSubscription = await searchSubscriptionInIPFS(zelfKeysTag);

		if (!existingSubscription) {
			console.log("⚠️ No existing subscription found to delete for:", zelfKeysTag);
			return;
		}

		// Delete the subscription from IPFS
		try {
			await pinata.unPinFiles([existingSubscription.ipfs_pin_hash]);
			console.log("✅ Subscription record deleted from IPFS:", {
				zelfName: zelfKeysTag,
				ipfsHash: existingSubscription.ipfs_pin_hash,
				subscriptionId: subscription.id,
			});
		} catch (unpinError) {
			console.error("❌ Failed to unpin from IPFS, but subscription is deleted in Stripe:", unpinError);

			// Even if unpinning fails, we should mark it as deleted in case the record still exists
			const deletedSubscriptionData = {
				stripeData: JSON.stringify({
					...existingSubscription.stripeData,
					status: "deleted",
					deletedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
				}),
				zelfName: zelfKeysTag,
				startDate: existingSubscription.startDate,
				endDate: existingSubscription.endDate,
				paymentMethod: "stripe",
				type: "subscription",
			};

			await updateSubscriptionInIPFS(zelfKeysTag, deletedSubscriptionData);
			console.log("✅ Subscription marked as deleted in IPFS as fallback");
		}
	} catch (error) {
		console.error("❌ Error handling subscription deleted:", error);
		throw error;
	}
}

async function storeSubscriptionInIPFS(subscriptionData) {
	try {
		const ipfsResult = await pinata.pinFile(
			Buffer.from(JSON.stringify(subscriptionData)).toString("base64"),
			`${subscriptionData.zelfName}.json`,
			"application/json",
			subscriptionData
		);

		if (!ipfsResult) throw new Error("Failed to store subscription in IPFS");

		return ipfsResult;
	} catch (error) {
		console.error("Error storing subscription in IPFS:", error);
		throw error;
	}
}

/**
 * Create Stripe customer portal session for subscription management
 * @param {Object} user - User object from JWT
 * @returns {Object} Portal session data
 */
const createCustomerPortalSession = async (user) => {
	try {
		const { identifier } = user;

		// Convert zelfName to zelfKeys format for IPFS operations
		const zelfKeysTag = convertToZelfKeysFormat(identifier);

		// Search for subscription in IPFS
		const subscriptionData = await searchSubscriptionInIPFS(zelfKeysTag);

		if (!subscriptionData) throw new Error("No active subscription found");

		// Validate that we have the required customer ID
		if (!subscriptionData.stripeData?.customer) {
			throw new Error("Customer ID not found in subscription data");
		}

		// Create customer portal session
		const portalSession = await stripe.billingPortal.sessions.create({
			customer: subscriptionData.stripeData.customer,
			return_url: `${configuration.stripe.redirectUrl}/dashboard/billing`,
		});

		return {
			success: true,
			portalUrl: portalSession.url,
			sessionId: portalSession.id,
		};
	} catch (error) {
		console.error("❌ Error creating customer portal session:", error);
		throw error;
	}
};

// ========================================
// EXPORTS - All exported functions listed here
// ========================================

export {
	getActiveSubscription,
	getAvailablePlans,
	createCheckoutSession,
	cancelSubscription,
	createCustomerPortalSession,
	createCryptoPayment,
	webhookHandler,
};
