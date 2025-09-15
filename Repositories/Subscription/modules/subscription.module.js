import Stripe from "stripe";
import configuration from "../../../Core/config.js";
import * as pinata from "../../IPFS/modules/pinata.js";
import moment from "moment";
import { generateMnemonic } from "../../../Utilities/mnemonic.module.js";
import { createEthWallet } from "../../../Utilities/eth-wallet.module.js";
import * as zelfProofModule from "../../ZelfProof/modules/zelf-proof.module.js";
import { signer as avaxSignerModule } from "../../../core-wallet-signer.js";
import { calculateCryptoAmount } from "../../../Utilities/crypto-price.module.js";
import { lockPriceData, verifyLockedPrice } from "../../../Utilities/price-lock.module.js";

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

        // Convert zelfName to zelfKeys format for IPFS operations
        const zelfKeysTag = convertToZelfKeysFormat(identifier, ".zelfkeys");

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

        const priceCalculation = await calculateCryptoAmount(selectedPlan.price, "AVAX");

        // Check if demo mode is enabled
        const isDemoMode = configuration.cryptoPayments.demoMode;
        const demoMultiplier = configuration.cryptoPayments.demoMultiplier;

        // Calculate demo amounts if in demo mode
        const demoUsdAmount = isDemoMode ? selectedPlan.price * demoMultiplier : selectedPlan.price;
        const demoPriceCalculation = isDemoMode ? await calculateCryptoAmount(demoUsdAmount, "AVAX") : priceCalculation;

        // Create price lock data (use demo amounts if in demo mode)
        const priceLockData = {
            planId,
            usdAmount: isDemoMode ? demoUsdAmount : selectedPlan.price,
            avaxAmount: isDemoMode ? demoPriceCalculation.cryptoAmount : priceCalculation.cryptoAmount,
            avaxPrice: priceCalculation.cryptoPrice,
            zelfName: identifier,
            zkPayTag,
            isDemoMode,
            currency: "AVAX",
            paymentAddress: existingZkPay?.metadata.keyvalues.avalancheAddress,
        };

        // Lock the price for 30 minutes
        const lockedPriceToken = lockPriceData(priceLockData, 30);

        if (existingZkPay) {
            // Use existing zkPay record
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

        // Build return data with the newly created payment address and pricing info
        const returnData = {
            success: true,
            paymentAddress: zkPay.publicData.avalancheAddress,
            amount: priceLockData.avaxAmount,
            currency: "AVAX",
            usdAmount: priceLockData.usdAmount,
            avaxPrice: priceLockData.avaxPrice,
            lockedPriceToken,
            expiresAt: moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss"),
            isDemoMode: priceLockData.isDemoMode,
            originalAmount: {
                usd: priceLockData.originalUsdAmount,
                avax: priceLockData.originalAvaxAmount,
            },
        };

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
            zkPay,
            customerTag: zelfName,
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
        paymentAddress: wallet.address,
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

        console.log("🔍 Files found in IPFS:", files);

        let activeSubscription = null;

        for (let index = 0; index < files.length; index++) {
            const element = files[index];

            const keyValues = element.metadata?.keyvalues;

            const isActiveOrCancelledActive = !keyValues.status || keyValues.status === "active" || keyValues.status === "cancelled_active";

            if (isActiveOrCancelledActive) {
                activeSubscription = {
                    id: element.id,
                    url: element.url,
                    ipfs_pin_hash: element.ipfs_pin_hash,
                    name: element.metadata.name,
                    ...keyValues,
                    stripeData: keyValues.stripeData ? JSON.parse(keyValues.stripeData) : null,
                    cryptoData: keyValues.cryptoData ? JSON.parse(keyValues.cryptoData) : null,
                };
                break;
            }
        }

        console.log("🔍 Active subscription:", activeSubscription);

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

        console.log("🔍 Existing subscription:", existingSubscription);

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

/**
 * Confirm crypto payment by checking blockchain transactions
 * @param {Object} body - Request body containing lockedPriceToken
 * @param {Object} user - User object from JWT
 * @returns {Object} Payment confirmation result
 */
const confirmCryptoPayment = async (body, user) => {
    try {
        const { lockedPriceToken } = body;
        const { identifier } = user;

        if (!lockedPriceToken) {
            return {
                success: false,
                paymentConfirmed: false,
                message: "Locked price token is required",
            };
        }

        // Decode the locked price token to get payment details
        let priceLockData;
        try {
            priceLockData = verifyLockedPrice(lockedPriceToken);
        } catch (error) {
            console.error({ error }, "Error verifying locked price token");
            return {
                success: false,
                paymentConfirmed: false,
                message: "Invalid or expired payment token",
            };
        }

        // Validate that the token belongs to this user
        if (priceLockData.zelfName !== identifier) {
            return {
                success: false,
                paymentConfirmed: false,
                message: "Payment token does not belong to this user",
            };
        }

        // Check if token is expired
        const now = moment();
        const expiresAt = moment(priceLockData.expiresAt);
        if (now.isAfter(expiresAt)) {
            return {
                success: false,
                paymentConfirmed: false,
                message: "Payment token has expired",
            };
        }

        // Get the zkPay record to find the payment address
        const zkPayTag = priceLockData.zkPayTag;
        const recordsFound = await pinata.filter("zkPay", zkPayTag);
        const zkPayRecord = recordsFound && Array.isArray(recordsFound) && recordsFound.length ? recordsFound[0] : null;

        if (!zkPayRecord) {
            return {
                success: false,
                paymentConfirmed: false,
                message: "Payment record not found",
            };
        }

        const paymentAddress = zkPayRecord.metadata.keyvalues.avalancheAddress;
        const requiredAmount = priceLockData.avaxAmount;

        console.log("🔍 Checking payment for address:", paymentAddress);
        console.log("💰 Required amount:", requiredAmount, "AVAX");

        // Check blockchain transactions for this address
        const transactionResult = await checkAvalancheTransactions(paymentAddress, requiredAmount);

        if (transactionResult.paymentFound) {
            console.log("✅ Payment confirmed! Transaction:", transactionResult);

            // Check if subscription already exists to avoid duplicates
            const zelfKeysTag = convertToZelfKeysFormat(identifier, ".zelfkeys");
            const existingSubscription = await searchSubscriptionInIPFS(zelfKeysTag);

            if (existingSubscription) {
                return {
                    success: true,
                    paymentConfirmed: true,
                    transactionHash: transactionResult.transactionHash,
                    subscriptionCreated: false,
                    message: "Payment confirmed but subscription already exists",
                };
            }

            // Create subscription record
            const subscriptionData = {
                cryptoData: JSON.stringify({
                    customer: identifier,
                    status: "active",
                    plan: priceLockData.planId,
                    planName: priceLockData.planName,
                    price: priceLockData.usdAmount,
                    paymentMethod: "crypto",
                    transactionHash: transactionResult.transactionHash,
                    isDemoMode: priceLockData.isDemoMode || false,
                }),
                zelfName: zelfKeysTag,
                startDate: moment().format("YYYY-MM-DD HH:mm:ss"),
                endDate: moment().add(1, "month").format("YYYY-MM-DD HH:mm:ss"),
                paymentMethod: "crypto",
                type: "subscription",
            };

            await storeSubscriptionInIPFS(subscriptionData);

            return {
                success: true,
                paymentConfirmed: true,
                transactionHash: transactionResult.transactionHash,
                subscriptionCreated: true,
                message: "Payment confirmed and subscription activated",
            };
        } else {
            return {
                success: true,
                paymentConfirmed: false,
                message: "No sufficient payment found yet",
            };
        }
    } catch (error) {
        console.error("❌ Error confirming crypto payment:", error);
        return {
            success: false,
            paymentConfirmed: false,
            message: "Error checking payment: " + error.message,
        };
    }
};

/**
 * Check Avalanche blockchain for transactions to a specific address
 * @param {string} address - The address to check
 * @param {number} requiredAmount - The minimum amount required in AVAX
 * @returns {Object} Transaction check result
 */
const checkAvalancheTransactions = async (address, requiredAmount) => {
    try {
        console.log("🌐 Calling Avalanche RPC for address:", address);

        // Get today's timestamp range for filtering transactions
        const todayStart = moment().startOf("day").unix();
        const todayEnd = moment().endOf("day").unix();

        // Use SnowTrace API (Avalanche's block explorer API) to find transactions
        console.log("🔍 Trying SnowTrace API for transaction history...");
        try {
            const snowTraceResponse = await fetch(
                `https://api.snowtrace.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=YourApiKeyToken`
            );
            const snowTraceData = await snowTraceResponse.json();

            console.log("📊 SnowTrace API response:", snowTraceData);

            if (snowTraceData.status === "1" && snowTraceData.result) {
                for (const tx of snowTraceData.result) {
                    const txAmount = parseFloat(tx.value) / Math.pow(10, 18); // Convert from wei to AVAX
                    const txTimestamp = parseInt(tx.timeStamp);

                    console.log(`🔍 SnowTrace TX: ${tx.hash} - ${txAmount} AVAX at ${txTimestamp}`);

                    // Check if transaction meets our criteria
                    if (txAmount >= requiredAmount && txTimestamp >= todayStart && txTimestamp <= todayEnd) {
                        return {
                            paymentFound: true,
                            transactionHash: tx.hash,
                            amount: txAmount,
                            blockNumber: tx.blockNumber,
                            timestamp: txTimestamp,
                            source: "snowtrace_api",
                        };
                    }
                }
            }
        } catch (snowTraceError) {
            console.error("❌ SnowTrace API error:", snowTraceError);
        }

        // Fallback: Simple balance check for demo purposes
        const balanceResponse = await fetch(configuration.avalanche.rpcUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                jsonrpc: "2.0",
                method: "eth_getBalance",
                params: [address, "latest"],
                id: 4,
            }),
        });

        const balanceData = await balanceResponse.json();
        if (balanceData.result) {
            const balanceWei = BigInt(balanceData.result);
            const balanceAvax = Number(balanceWei) / Math.pow(10, 18);

            console.log("💰 Address balance:", balanceAvax, "AVAX");

            // For demo/testing: if balance >= required, consider it paid
            if (balanceAvax >= requiredAmount) {
                console.log("✅ Using balance check as fallback (demo mode)");
                return {
                    paymentFound: true,
                    transactionHash: `balance_check_${Date.now()}`,
                    amount: balanceAvax,
                    note: "Payment confirmed via balance check (demo mode)",
                    source: "balance_check",
                };
            }
        }

        return {
            paymentFound: false,
            message: "No sufficient payment transactions found today",
        };
    } catch (error) {
        console.error("❌ Error checking Avalanche transactions:", error);
        return {
            paymentFound: false,
            error: error.message,
        };
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
    confirmCryptoPayment,
    webhookHandler,
};
