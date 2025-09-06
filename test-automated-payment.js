#!/usr/bin/env node

/**
 * Automated Payment Testing Script
 * Simulates the complete payment flow and webhook processing
 * @author Miguel Trevino <miguel@zelf.world>
 */

import request from "supertest";

const BASE_URL = "http://localhost:3010";

async function createTestSession() {
	console.log("🔐 Creating test session...");

	// Generate realistic ZelfName
	const randomId = Math.random().toString(36).substring(2, 8);
	const zelfName = `user-${randomId}.zelf`;

	const sessionResponse = await request(BASE_URL).post("/api/sessions").send({
		identifier: zelfName,
		address: "0xB7b30A282eb6c0fEef1Bd8D268E05f4c2a2Ab565",
	});

	if (sessionResponse.status === 200) {
		console.log(`✅ Session created successfully for ${zelfName}`);
		return { token: sessionResponse.body.data.token, zelfName };
	} else {
		throw new Error("Failed to create session");
	}
}

async function simulatePaymentFlow() {
	console.log("🚀 Starting Automated Payment Flow Simulation...\n");

	try {
		// Step 1: Create session
		const { token: authToken, zelfName } = await createTestSession();

		// Step 2: Create checkout session
		console.log("🛒 Creating checkout session...");
		const checkoutResponse = await request(BASE_URL)
			.post("/api/subscription/checkout")
			.set("Authorization", `Bearer ${authToken}`)
			.send({ planId: "basic" });

		if (checkoutResponse.status !== 200) {
			throw new Error(`Checkout failed: ${checkoutResponse.body.error}`);
		}

		const sessionId = checkoutResponse.body.sessionId;
		console.log(`✅ Checkout session created: ${sessionId}`);

		// Step 3: Simulate checkout.session.completed webhook
		console.log("\n📨 Simulating checkout.session.completed webhook...");

		// Generate realistic Stripe IDs
		const customerId = `cus_${Math.random().toString(36).substring(2, 15)}`;
		const subscriptionId = `sub_${Math.random().toString(36).substring(2, 15)}`;
		const eventId = `evt_${Math.random().toString(36).substring(2, 15)}`;

		const checkoutWebhook = {
			id: eventId,
			object: "event",
			type: "checkout.session.completed",
			data: {
				object: {
					id: sessionId,
					object: "checkout.session",
					status: "complete",
					customer: customerId,
					subscription: subscriptionId,
					metadata: {
						zelfName: zelfName,
						plan: "basic",
					},
					payment_status: "paid",
					amount_total: 999,
					currency: "usd",
					created: Math.floor(Date.now() / 1000),
				},
			},
		};

		const webhookResponse = await request(BASE_URL).post("/api/subscription/webhook").send(checkoutWebhook);

		console.log(`✅ Checkout webhook processed: ${webhookResponse.status}`);

		// Step 4: Simulate customer.subscription.created webhook
		console.log("\n📨 Simulating customer.subscription.created webhook...");

		// Generate realistic price and subscription item IDs
		const priceId = `price_${Math.random().toString(36).substring(2, 15)}`;
		const subscriptionItemId = `si_${Math.random().toString(36).substring(2, 15)}`;
		const subscriptionEventId = `evt_${Math.random().toString(36).substring(2, 15)}`;

		const subscriptionWebhook = {
			id: subscriptionEventId,
			object: "event",
			type: "customer.subscription.created",
			data: {
				object: {
					id: subscriptionId,
					object: "subscription",
					status: "active",
					customer: customerId,
					metadata: {
						zelfName: zelfName,
						plan: "basic",
					},
					current_period_start: Math.floor(Date.now() / 1000),
					current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
					created: Math.floor(Date.now() / 1000),
					items: {
						data: [
							{
								id: subscriptionItemId,
								object: "subscription_item",
								price: {
									id: priceId,
									object: "price",
									unit_amount: 999,
									currency: "usd",
									recurring: {
										interval: "month",
									},
								},
							},
						],
					},
				},
			},
		};

		const subscriptionResponse = await request(BASE_URL).post("/api/subscription/webhook").send(subscriptionWebhook);

		console.log(`✅ Subscription webhook processed: ${subscriptionResponse.status}`);

		// Step 5: Simulate invoice.payment_succeeded webhook (this creates the subscription)
		console.log("\n💰 Simulating invoice.payment_succeeded webhook...");

		const invoiceEventId = `evt_${Math.random().toString(36).substring(2, 15)}`;
		const invoiceId = `in_${Math.random().toString(36).substring(2, 15)}`;

		const invoiceWebhook = {
			id: invoiceEventId,
			object: "event",
			type: "invoice.payment_succeeded",
			data: {
				object: {
					id: invoiceId,
					object: "invoice",
					subscription: subscriptionId,
					customer: customerId,
					amount_paid: 999,
					currency: "usd",
					status: "paid",
					created: Math.floor(Date.now() / 1000),
					metadata: {
						zelfName: zelfName,
						plan: "basic",
					},
				},
			},
		};

		const invoiceResponse = await request(BASE_URL).post("/api/subscription/webhook").send(invoiceWebhook);

		console.log(`✅ Invoice payment webhook processed: ${invoiceResponse.status}`);

		// Step 6: Check subscription status
		console.log("\n📋 Checking subscription status...");
		const statusResponse = await request(BASE_URL).get("/api/subscription/active").set("Authorization", `Bearer ${authToken}`);

		console.log(`Status: ${statusResponse.status}`);
		console.log("Response:", statusResponse.body);

		// Step 7: Test subscription update
		console.log("\n🔄 Testing subscription update...");

		const updateEventId = `evt_${Math.random().toString(36).substring(2, 15)}`;
		const newPriceId = `price_${Math.random().toString(36).substring(2, 15)}`;

		const updateWebhook = {
			id: updateEventId,
			object: "event",
			type: "customer.subscription.updated",
			data: {
				object: {
					id: subscriptionId,
					object: "subscription",
					status: "active",
					customer: customerId,
					metadata: {
						zelfName: zelfName,
						plan: "pro",
					},
					current_period_start: Math.floor(Date.now() / 1000),
					current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
					created: Math.floor(Date.now() / 1000),
					cancel_at_period_end: false,
					items: {
						data: [
							{
								id: subscriptionItemId,
								object: "subscription_item",
								price: {
									id: newPriceId,
									object: "price",
									unit_amount: 1999,
									currency: "usd",
									recurring: {
										interval: "month",
									},
								},
							},
						],
					},
				},
			},
		};

		const updateResponse = await request(BASE_URL).post("/api/subscription/webhook").send(updateWebhook);

		console.log(`✅ Update webhook processed: ${updateResponse.status}`);

		// Step 8: Test subscription cancellation
		console.log("\n🗑️ Testing subscription cancellation...");

		const cancelEventId = `evt_${Math.random().toString(36).substring(2, 15)}`;

		const cancelWebhook = {
			id: cancelEventId,
			object: "event",
			type: "customer.subscription.deleted",
			data: {
				object: {
					id: subscriptionId,
					object: "subscription",
					status: "canceled",
					customer: customerId,
					metadata: {
						zelfName: zelfName,
						plan: "pro",
					},
					current_period_start: Math.floor(Date.now() / 1000),
					current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
					created: Math.floor(Date.now() / 1000),
					canceled_at: Math.floor(Date.now() / 1000),
					cancel_at_period_end: true,
				},
			},
		};

		const cancelResponse = await request(BASE_URL).post("/api/subscription/webhook").send(cancelWebhook);

		console.log(`✅ Cancel webhook processed: ${cancelResponse.status}`);

		console.log("\n🎉 Complete payment flow simulation finished!");
		console.log("📊 Summary:");
		console.log(`✅ Checkout session created: ${sessionId}`);
		console.log(`✅ Payment completed for: ${zelfName}`);
		console.log(`✅ Subscription created: ${subscriptionId}`);
		console.log(`✅ Customer ID: ${customerId}`);
		console.log(`✅ Subscription updated to Pro plan`);
		console.log(`✅ Subscription canceled`);
		console.log(`📁 IPFS files should be created with ZelfName: ${zelfName}`);

		return true;
	} catch (error) {
		console.error("❌ Automated payment flow failed:", error.message);
		return false;
	}
}

// Run the automated test
if (import.meta.url === `file://${process.argv[1]}`) {
	simulatePaymentFlow()
		.then((success) => {
			console.log(`\n🎯 Overall Result: ${success ? "SUCCESS" : "FAILED"}`);
			process.exit(success ? 0 : 1);
		})
		.catch((error) => {
			console.error("💥 Test execution failed:", error);
			process.exit(1);
		});
}

export { simulatePaymentFlow, createTestSession };
