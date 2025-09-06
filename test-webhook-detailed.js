#!/usr/bin/env node

/**
 * Detailed Webhook Testing Script
 * Tests webhook processing with detailed logging
 * @author Miguel Trevino <miguel@zelf.world>
 */

import request from "supertest";

const BASE_URL = "http://localhost:3010";

// Test webhook event with detailed logging
const testEvent = {
	id: "evt_test_detailed_webhook",
	object: "event",
	api_version: "2023-10-16",
	created: Math.floor(Date.now() / 1000),
	data: {
		object: {
			id: "sub_1L2d4wFO6i3ofqGHdetailed123",
			object: "subscription",
			status: "active",
			customer: "cus_test_customer_detailed",
			metadata: {
				zelfName: "test-user-detailed.zelf",
				plan: "basic",
			},
			current_period_start: Math.floor(Date.now() / 1000),
			current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
			created: Math.floor(Date.now() / 1000),
			items: {
				data: [
					{
						id: "si_test_subscription_item_detailed",
						object: "subscription_item",
						price: {
							id: "price_1L2d4wFO6i3ofqGHdetailed123",
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
		id: "req_test_detailed_123",
		idempotency_key: null,
	},
	type: "customer.subscription.created",
};

async function testDetailedWebhook() {
	console.log("🧪 Testing Detailed Webhook Processing...\n");

	console.log("📤 Sending webhook event:");
	console.log(JSON.stringify(testEvent, null, 2));
	console.log("\n" + "=".repeat(50) + "\n");

	try {
		const response = await request(BASE_URL).post("/api/subscription/webhook").send(testEvent);

		console.log(`📥 Response Status: ${response.status}`);
		console.log(`📥 Response Body:`, response.body);

		return response.status === 200;
	} catch (error) {
		console.error(`❌ Error testing webhook:`, error.message);
		return false;
	}
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
	testDetailedWebhook()
		.then((success) => {
			console.log(`\n🎯 Test Result: ${success ? "PASS" : "FAIL"}`);
			process.exit(success ? 0 : 1);
		})
		.catch((error) => {
			console.error("💥 Test execution failed:", error);
			process.exit(1);
		});
}

export { testDetailedWebhook, testEvent };
