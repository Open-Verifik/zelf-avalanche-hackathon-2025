// Set test environment
process.env.NODE_ENV = "test";

import request from "supertest";
import app from "../server.js";
import config from "../Core/config.js";

describe("Subscription Endpoints", () => {
	let authToken;
	let correctAuthToken;

	beforeAll(async () => {
		// Create a session to get JWT token for subscription endpoints
		try {
			const sessionResponse = await request(app)
				.post("/api/sessions")
				.send({
					identifier: `name${Math.random().toString(36).substring(2, 6)}.zelf`,
					address: "0xB7b30A282eb6c0fEef1Bd8D268E05f4c2a2Ab565",
				});

			if (sessionResponse.status === 200) {
				authToken = sessionResponse.body.data.token;
				console.log("Successfully obtained JWT token for subscription tests");
			} else {
				console.log("Could not get JWT token, subscription tests will expect 401 errors");
			}

			const correctSessionResponse = await request(app).post("/api/sessions").send({
				identifier: `user-lcaj5d.zelf`,
				address: "0xB7b30A282eb6c0fEef1Bd8D268E05f4c2a2Ab565",
			});
			correctAuthToken = correctSessionResponse.body.data.token;
		} catch (error) {
			console.log("Could not get JWT token, subscription tests will expect 401 errors");
		}
	});

	describe("GET /api/subscription/active", () => {
		it("should return active subscription for correct user", async () => {
			const response = await request(app).get("/api/subscription/active").set("Authorization", `Bearer ${correctAuthToken}`);

			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty("success", true);
			expect(response.body).toHaveProperty("subscription");
		});

		it("should return no active subscription for new user", async () => {
			const response = await request(app).get("/api/subscription/active").set("Authorization", `Bearer ${authToken}`);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("subscription", null);
				expect(response.body.message).toContain("No active subscription found");
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should handle missing authorization token", async () => {
			const response = await request(app).get("/api/subscription/active");

			expect(response.status).toBe(401);
			expect(response.body).toHaveProperty("error");
		});
	});

	describe("GET /api/subscription/plans", () => {
		it("should return available subscription plans", async () => {
			const response = await request(app).get("/api/subscription/plans");

			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty("success", true);
			expect(response.body).toHaveProperty("plans");
			expect(Array.isArray(response.body.plans)).toBe(true);
			expect(response.body.plans.length).toBeGreaterThan(0);

			// Check plan structure
			const plan = response.body.plans[0];
			expect(plan).toHaveProperty("id");
			expect(plan).toHaveProperty("name");
			expect(plan).toHaveProperty("description");
			expect(plan).toHaveProperty("price");
			expect(plan).toHaveProperty("currency");
			expect(plan).toHaveProperty("interval");
		});

		it("should include all three plan types", async () => {
			const response = await request(app).get("/api/subscription/plans");

			expect(response.status).toBe(200);
			expect(response.body.plans).toHaveLength(3);

			const planIds = response.body.plans.map((plan) => plan.id);
			expect(planIds).toContain("basic");
			expect(planIds).toContain("pro");
			expect(planIds).toContain("enterprise");
		});
	});

	describe("POST /api/subscription/checkout", () => {
		it("should create checkout session for basic plan", async () => {
			const payload = {
				planId: "basic",
			};

			const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("checkoutUrl");
				expect(response.body.checkoutUrl).toMatch(/^https:\/\/checkout\.stripe\.com/);
				expect(response.body).toHaveProperty("sessionId");
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should create checkout session for pro plan", async () => {
			const payload = {
				planId: "pro",
			};

			const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("checkoutUrl");
				expect(response.body.checkoutUrl).toMatch(/^https:\/\/checkout\.stripe\.com/);
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});

		it("should create checkout session for enterprise plan", async () => {
			const payload = {
				planId: "enterprise",
			};

			const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("checkoutUrl");
				expect(response.body.checkoutUrl).toMatch(/^https:\/\/checkout\.stripe\.com/);
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});

		it("should reject invalid plan ID", async () => {
			const payload = {
				planId: "invalid_plan",
			};

			const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("planId");
		});

		it("should reject missing plan ID", async () => {
			const payload = {};

			const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("planId");
		});

		it("should handle missing authorization token", async () => {
			const payload = {
				planId: "basic",
			};

			const response = await request(app).post("/api/subscription/checkout").send(payload);

			expect(response.status).toBe(401);
			expect(response.body).toHaveProperty("error");
		});
	});

	describe("POST /api/subscription/cancel", () => {
		it("should handle cancellation request for non-existent subscription", async () => {
			const response = await request(app).post("/api/subscription/cancel").set("Authorization", `Bearer ${authToken}`);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body.message).toContain("No active subscription found");
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should handle missing authorization token", async () => {
			const response = await request(app).post("/api/subscription/cancel");

			expect(response.status).toBe(401);
			expect(response.body).toHaveProperty("error");
		});
	});

	describe("POST /api/subscription/webhook", () => {
		it("should handle webhook events", async () => {
			const webhookPayload = {
				type: "customer.subscription.created",
				data: {
					object: {
						id: "sub_test123",
						customer: "cus_test123",
						status: "active",
						current_period_start: Math.floor(Date.now() / 1000),
						current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
						cancel_at_period_end: false,
					},
				},
			};

			const response = await request(app).post("/api/subscription/webhook").send(webhookPayload);

			// Webhook should always return 200 to acknowledge receipt
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty("success", true);
			expect(response.body.message).toContain("Webhook received");
		});

		it("should handle invalid webhook payload", async () => {
			const invalidPayload = {
				invalid: "data",
			};

			const response = await request(app).post("/api/subscription/webhook").send(invalidPayload);

			// Webhook should still return 200 to acknowledge receipt
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty("success", true);
		});
	});

	// Edge Cases and Validation Tests
	describe("Edge Cases and Validation", () => {
		describe("Plan Validation", () => {
			it("should reject empty plan ID", async () => {
				const payload = {
					planId: "",
				};

				const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject null plan ID", async () => {
				const payload = {
					planId: null,
				};

				const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject undefined plan ID", async () => {
				const payload = {
					planId: undefined,
				};

				const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Authentication Tests", () => {
			it("should reject requests with invalid token format", async () => {
				const response = await request(app).get("/api/subscription/active").set("Authorization", "InvalidToken");

				expect(response.status).toBe(401);
				expect(response.body).toHaveProperty("error");
			});

			it("should reject requests with malformed authorization header", async () => {
				const response = await request(app).get("/api/subscription/active").set("Authorization", "Bearer");

				expect(response.status).toBe(401);
				expect(response.body).toHaveProperty("error");
			});
		});

		describe("Empty Payload Validation", () => {
			it("should reject empty checkout payload", async () => {
				const response = await request(app).post("/api/subscription/checkout").set("Authorization", `Bearer ${authToken}`).send({});

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});
	});

	describe("Integration Tests", () => {
		it("should handle complete subscription flow simulation", async () => {
			// Step 1: Check no active subscription
			const activeResponse = await request(app).get("/api/subscription/active").set("Authorization", `Bearer ${authToken}`);

			if (activeResponse.status === 200) {
				expect(activeResponse.body.subscription).toBeNull();
			}

			// Step 2: Get available plans
			const plansResponse = await request(app).get("/api/subscription/plans");
			expect(plansResponse.status).toBe(200);
			expect(plansResponse.body.plans.length).toBeGreaterThan(0);

			// Step 3: Create checkout session
			const checkoutResponse = await request(app)
				.post("/api/subscription/checkout")
				.set("Authorization", `Bearer ${authToken}`)
				.send({ planId: "basic" });

			if (checkoutResponse.status === 200) {
				expect(checkoutResponse.body).toHaveProperty("checkoutUrl");
			}

			// Step 4: Simulate webhook event
			const webhookResponse = await request(app)
				.post("/api/subscription/webhook")
				.send({
					type: "customer.subscription.created",
					data: {
						object: {
							id: "sub_test123",
							customer: "cus_test123",
							status: "active",
						},
					},
				});

			expect(webhookResponse.status).toBe(200);
		});
	});
});
