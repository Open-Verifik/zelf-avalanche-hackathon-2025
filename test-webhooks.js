#!/usr/bin/env node

/**
 * Webhook Testing Script
 * Simulates subscription events and tests webhook handling
 * @author Miguel Trevino <miguel@zelf.world>
 */

import request from "supertest";

const BASE_URL = "http://localhost:3010";
const WEBHOOK_ENDPOINT = `${BASE_URL}/api/subscription/webhook`;

// Test webhook events
const webhookEvents = {
	// Successful subscription creation
	subscriptionCreated: {
		id: "evt_test_webhook",
		object: "event",
		api_version: "2023-10-16",
		created: Math.floor(Date.now() / 1000),
		data: {
			object: {
				id: "sub_1L2d4wFO6i3ofqGHtest123",
				object: "subscription",
				status: "active",
				customer: "cus_test_customer_123",
				metadata: {
					zelfName: "test-user.zelf",
					plan: "basic",
				},
				current_period_start: Math.floor(Date.now() / 1000),
				current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60, // 30 days
				created: Math.floor(Date.now() / 1000),
				items: {
					data: [
						{
							id: "si_test_subscription_item_123",
							object: "subscription_item",
							price: {
								id: "price_1L2d4wFO6i3ofqGHtest123",
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
		livemode: false,
		pending_webhooks: 1,
		request: {
			id: "req_test_request_123",
			idempotency_key: null,
		},
		type: "customer.subscription.created",
	},

	// Subscription updated
	subscriptionUpdated: {
		id: "evt_test_webhook_updated",
		object: "event",
		api_version: "2023-10-16",
		created: Math.floor(Date.now() / 1000),
		data: {
			object: {
				id: "sub_test_subscription_123",
				object: "subscription",
				status: "active",
				customer: "cus_test_customer_123",
				metadata: {
					zelfName: "test-user.zelf",
					plan: "pro",
				},
				current_period_start: Math.floor(Date.now() / 1000),
				current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
				created: Math.floor(Date.now() / 1000),
				items: {
					data: [
						{
							id: "si_test_subscription_item_123",
							object: "subscription_item",
							price: {
								id: "price_test_pro_123",
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
		livemode: false,
		pending_webhooks: 1,
		request: {
			id: "req_test_request_updated_123",
			idempotency_key: null,
		},
		type: "customer.subscription.updated",
	},

	// Subscription canceled
	subscriptionCanceled: {
		id: "evt_test_webhook_canceled",
		object: "event",
		api_version: "2023-10-16",
		created: Math.floor(Date.now() / 1000),
		data: {
			object: {
				id: "sub_test_subscription_123",
				object: "subscription",
				status: "canceled",
				customer: "cus_test_customer_123",
				metadata: {
					zelfName: "test-user.zelf",
					plan: "basic",
				},
				current_period_start: Math.floor(Date.now() / 1000),
				current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
				created: Math.floor(Date.now() / 1000),
				canceled_at: Math.floor(Date.now() / 1000),
				cancel_at_period_end: true,
			},
		},
		livemode: false,
		pending_webhooks: 1,
		request: {
			id: "req_test_request_canceled_123",
			idempotency_key: null,
		},
		type: "customer.subscription.deleted",
	},

	// Checkout session completed
	checkoutSessionCompleted: {
		id: "evt_test_checkout_completed",
		object: "event",
		api_version: "2023-10-16",
		created: Math.floor(Date.now() / 1000),
		data: {
			object: {
				id: "cs_test_checkout_session_123",
				object: "checkout.session",
				status: "complete",
				customer: "cus_test_customer_123",
				subscription: "sub_1L2d4wFO6i3ofqGHtest123",
				metadata: {
					zelfName: "test-user.zelf",
					plan: "basic",
				},
				payment_status: "paid",
				amount_total: 999,
				currency: "usd",
				created: Math.floor(Date.now() / 1000),
			},
		},
		livemode: false,
		pending_webhooks: 1,
		request: {
			id: "req_test_checkout_123",
			idempotency_key: null,
		},
		type: "checkout.session.completed",
	},
};

async function testWebhook(eventName, eventData) {
	console.log(`\n🧪 Testing ${eventName}...`);

	try {
		const response = await request(BASE_URL).post("/api/subscription/webhook").send(eventData);

		console.log(`✅ Status: ${response.status}`);
		console.log(`📝 Response:`, response.body);

		return response.status === 200;
	} catch (error) {
		console.error(`❌ Error testing ${eventName}:`, error.message);
		return false;
	}
}

async function testSubscriptionFlow() {
	console.log("🚀 Starting Subscription Webhook Testing...\n");

	// Test 1: Checkout Session Completed
	const checkout = await testWebhook("Checkout Session Completed", webhookEvents.checkoutSessionCompleted);

	// Test 2: Subscription Created
	const created = await testWebhook("Subscription Created", webhookEvents.subscriptionCreated);

	// Test 3: Subscription Updated
	const updated = await testWebhook("Subscription Updated", webhookEvents.subscriptionUpdated);

	// Test 4: Subscription Canceled
	const canceled = await testWebhook("Subscription Canceled", webhookEvents.subscriptionCanceled);

	// Summary
	console.log("\n📊 Test Results Summary:");
	console.log(`✅ Checkout Session Completed: ${checkout ? "PASS" : "FAIL"}`);
	console.log(`✅ Subscription Created: ${created ? "PASS" : "FAIL"}`);
	console.log(`✅ Subscription Updated: ${updated ? "PASS" : "FAIL"}`);
	console.log(`✅ Subscription Canceled: ${canceled ? "PASS" : "FAIL"}`);

	const allPassed = checkout && created && updated && canceled;
	console.log(`\n🎯 Overall: ${allPassed ? "ALL TESTS PASSED" : "SOME TESTS FAILED"}`);

	return allPassed;
}

// Run the tests
if (import.meta.url === `file://${process.argv[1]}`) {
	testSubscriptionFlow()
		.then((success) => {
			process.exit(success ? 0 : 1);
		})
		.catch((error) => {
			console.error("💥 Test execution failed:", error);
			process.exit(1);
		});
}

export { testWebhook, testSubscriptionFlow, webhookEvents };
