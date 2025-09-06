#!/usr/bin/env node

/**
 * Real Stripe Webhook Testing Script
 * Uses Stripe CLI to trigger real webhook events
 * @author Miguel Trevino <miguel@zelf.world>
 */

import { spawn } from "child_process";
import request from "supertest";

const BASE_URL = "http://localhost:3010";

async function createTestSession() {
	console.log("🔐 Creating test session...");

	const sessionResponse = await request(BASE_URL)
		.post("/api/sessions")
		.send({
			identifier: `test-${Math.random().toString(36).substring(2, 8)}.zelf`,
			address: "0xB7b30A282eb6c0fEef1Bd8D268E05f4c2a2Ab565",
		});

	if (sessionResponse.status === 200) {
		console.log("✅ Session created successfully");
		return sessionResponse.body.data.token;
	} else {
		throw new Error("Failed to create session");
	}
}

async function createRealCheckoutSession(authToken) {
	console.log("🛒 Creating real Stripe checkout session...");

	const checkoutResponse = await request(BASE_URL)
		.post("/api/subscription/checkout")
		.set("Authorization", `Bearer ${authToken}`)
		.send({ planId: "basic" });

	if (checkoutResponse.status !== 200) {
		throw new Error(`Checkout failed: ${checkoutResponse.body.error}`);
	}

	console.log(`✅ Real checkout session created: ${checkoutResponse.body.sessionId}`);
	console.log(`🔗 Checkout URL: ${checkoutResponse.body.checkoutUrl}`);

	return checkoutResponse.body;
}

function triggerStripeWebhook(eventType, data = {}) {
	return new Promise((resolve, reject) => {
		console.log(`📨 Triggering Stripe webhook: ${eventType}`);

		const stripe = spawn("stripe", ["events", "resend", eventType], {
			stdio: ["pipe", "pipe", "pipe"],
		});

		if (Object.keys(data).length > 0) {
			stripe.stdin.write(JSON.stringify(data));
			stripe.stdin.end();
		}

		let output = "";
		let error = "";

		stripe.stdout.on("data", (data) => {
			output += data.toString();
		});

		stripe.stderr.on("data", (data) => {
			error += data.toString();
		});

		stripe.on("close", (code) => {
			if (code === 0) {
				console.log(`✅ Webhook ${eventType} triggered successfully`);
				resolve(output);
			} else {
				console.error(`❌ Webhook ${eventType} failed:`, error);
				reject(new Error(error));
			}
		});
	});
}

async function testRealStripeWebhooks() {
	console.log("🚀 Starting Real Stripe Webhook Testing...\n");

	try {
		// Step 1: Create session
		const authToken = await createTestSession();

		// Step 2: Create real checkout session
		const checkout = await createRealCheckoutSession(authToken);

		console.log("\n📝 Next Steps:");
		console.log("1. Open the checkout URL in your browser");
		console.log("2. Complete the payment with test card: 4242 4242 4242 4242");
		console.log("3. Watch for webhook events in your server console");
		console.log("4. Press Enter when payment is completed...");

		// Wait for user input
		process.stdin.setRawMode(true);
		process.stdin.resume();
		process.stdin.on("data", async () => {
			console.log("\n🔄 Payment completed! Testing webhook events...");

			try {
				// Test various webhook events
				await triggerStripeWebhook("customer.subscription.created");
				await new Promise((resolve) => setTimeout(resolve, 1000));

				await triggerStripeWebhook("customer.subscription.updated");
				await new Promise((resolve) => setTimeout(resolve, 1000));

				await triggerStripeWebhook("customer.subscription.deleted");

				console.log("\n🎉 Real Stripe webhook testing completed!");
				process.exit(0);
			} catch (error) {
				console.error("❌ Webhook testing failed:", error.message);
				process.exit(1);
			}
		});
	} catch (error) {
		console.error("❌ Real Stripe webhook testing failed:", error.message);
		process.exit(1);
	}
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
	testRealStripeWebhooks();
}

export { testRealStripeWebhooks, createTestSession, createRealCheckoutSession };
