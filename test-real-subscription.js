#!/usr/bin/env node

/**
 * Real Subscription Testing Script
 * Creates actual Stripe subscriptions and tests the full flow
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

async function testSubscriptionFlow() {
	console.log("🚀 Starting Real Subscription Flow Test...\n");

	try {
		// Step 1: Create session
		const { token: authToken, zelfName } = await createTestSession();

		// Step 2: Check initial subscription status
		console.log("\n📋 Checking initial subscription status...");
		const initialStatus = await request(BASE_URL).get("/api/subscription/active").set("Authorization", `Bearer ${authToken}`);

		console.log(`Status: ${initialStatus.status}`);
		console.log("Response:", initialStatus.body);

		// Step 3: Get available plans
		console.log("\n💰 Getting available plans...");
		const plansResponse = await request(BASE_URL).get("/api/subscription/plans");

		console.log(`Status: ${plansResponse.status}`);
		console.log("Plans:", plansResponse.body);

		// Step 4: Create checkout session
		console.log("\n🛒 Creating checkout session for basic plan...");
		const checkoutResponse = await request(BASE_URL)
			.post("/api/subscription/checkout")
			.set("Authorization", `Bearer ${authToken}`)
			.send({ planId: "basic" });

		console.log(`Status: ${checkoutResponse.status}`);
		console.log("Checkout Response:", checkoutResponse.body);

		if (checkoutResponse.status === 200) {
			console.log("\n🎉 Checkout session created successfully!");
			console.log(`🔗 Checkout URL: ${checkoutResponse.body.checkoutUrl}`);
			console.log(`🆔 Session ID: ${checkoutResponse.body.sessionId}`);
			console.log(`👤 ZelfName: ${zelfName}`);

			console.log("\n📝 Next Steps:");
			console.log("1. Open the checkout URL in your browser");
			console.log("2. Complete the payment with Stripe test card: 4242 4242 4242 4242");
			console.log("3. Watch the webhook events in your terminal");
			console.log("4. Check the subscription status after payment");
			console.log(`5. Look for IPFS files with ZelfName: ${zelfName}`);
		}

		return true;
	} catch (error) {
		console.error("❌ Test failed:", error.message);
		return false;
	}
}

// Run the test
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

export { testSubscriptionFlow, createTestSession };
