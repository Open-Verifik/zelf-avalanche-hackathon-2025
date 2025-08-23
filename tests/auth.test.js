/**
 * Unit tests for authentication endpoint
 */

const request = require("supertest");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const config = require("../Core/config");

// Create a test app
const app = new Koa();
app.use(bodyParser());

// Import and register the authentication routes
const Router = require("@koa/router");
const router = new Router();
require("../Repositories/ZelfProof/routes/auth.route")(router);
app.use(router.routes());

// Test credentials from config
const testCredentials = {
	email: config.zelfProof.email,
	apiKey: config.zelfProof.apiKey,
};

describe("Authentication Endpoint Tests", () => {
	describe("POST /api/auth/authenticate", () => {
		it("should authenticate with valid credentials from config", async () => {
			const response = await request(app.callback()).post("/api/auth/authenticate").send(testCredentials).expect(200);

			expect(response.body.success).toBe(true);
			expect(response.body.token).toBeDefined();
			expect(response.body.expiresIn).toBeDefined();
			expect(response.body.message).toBe("Authentication successful");
		});

		it("should reject invalid email", async () => {
			const response = await request(app.callback())
				.post("/api/auth/authenticate")
				.send({
					email: "invalid@email.com",
					apiKey: testCredentials.apiKey,
				})
				.expect(401);

			expect(response.body.error).toBe("Invalid credentials");
		});

		it("should reject invalid API key", async () => {
			const response = await request(app.callback())
				.post("/api/auth/authenticate")
				.send({
					email: testCredentials.email,
					apiKey: "invalid-api-key",
				})
				.expect(401);

			expect(response.body.error).toBe("Invalid credentials");
		});

		it("should reject missing email", async () => {
			const response = await request(app.callback())
				.post("/api/auth/authenticate")
				.send({
					apiKey: testCredentials.apiKey,
				})
				.expect(400);

			expect(response.body.error).toBe("Validation error");
			expect(response.body.message).toContain("email is required");
		});

		it("should reject missing API key", async () => {
			const response = await request(app.callback())
				.post("/api/auth/authenticate")
				.send({
					email: testCredentials.email,
				})
				.expect(400);

			expect(response.body.error).toBe("Validation error");
			expect(response.body.message).toContain("apiKey is required");
		});

		it("should reject empty request body", async () => {
			const response = await request(app.callback()).post("/api/auth/authenticate").send({}).expect(400);

			expect(response.body.error).toBe("Validation error");
			expect(response.body.message).toContain("email is required");
			expect(response.body.message).toContain("apiKey is required");
		});
	});
});

// Run tests if this file is executed directly
if (require.main === module) {
	const { execSync } = require("child_process");
	try {
		console.log("Running authentication tests...");
		console.log("Test credentials:", testCredentials);
		execSync("npm test", { stdio: "inherit" });
	} catch (error) {
		console.error("Tests failed:", error.message);
		process.exit(1);
	}
}
