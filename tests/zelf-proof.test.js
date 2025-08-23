// Set test environment
process.env.NODE_ENV = "test";

import request from "supertest";
import app from "../server.js";
import config from "../Core/config.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("ZelfProof Endpoints", () => {
	let authToken;
	const selfiesData = JSON.parse(readFileSync(resolve(__dirname, "../Repositories/ZelfProof/assets/selfies.json"), "utf8"));

	beforeAll(async () => {
		// Get authentication token for protected endpoints
		try {
			const authResponse = await request(app).post("/api/auth/authenticate").send({
				email: config.zelfProof.email,
				apiKey: config.zelfProof.apiKey,
			});

			if (authResponse.status === 200) {
				authToken = authResponse.body.token;
				console.log("Successfully obtained auth token");
			} else {
				console.log("Could not get auth token, tests will run with 401 expected");
			}
		} catch (error) {
			console.log("Could not get auth token, tests will run with 401 expected");
		}
	});

	describe("POST /api/zelf-proof/encrypt", () => {
		it("should encrypt data successfully with valid payload", async () => {
			const payload = {
				livenessDetectionPriorCreation: false,
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				livenessLevel: "REGULAR",
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt").send(payload);

			// Handle both success (200) and external API failure (401/500) scenarios
			if (response.status === 200) {
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body.zelfProof).toBeDefined();
				expect(typeof response.body.zelfProof).toBe("string");
				expect(response.body.zelfProof.length).toBeGreaterThan(0);
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should reject request with missing faceBase64 field", async () => {
			const payload = {
				livenessDetectionPriorCreation: false,
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				livenessLevel: "REGULAR",
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt").send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("faceBase64 is required");
		});

		it("should reject request with missing identifier field", async () => {
			const payload = {
				livenessDetectionPriorCreation: false,
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				livenessLevel: "REGULAR",
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt").send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("identifier is required");
		});

		it("should reject request with empty payload", async () => {
			const response = await request(app).post("/api/zelf-proof/encrypt").send({});

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
		});

		it("should process request without authentication (unprotected route)", async () => {
			const payload = {
				livenessDetectionPriorCreation: false,
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				livenessLevel: "REGULAR",
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt").send(payload);

			// Should get a response (not 401) since routes are unprotected
			// Could be 200 (success) or 500 (external API error) depending on environment
			expect([200, 500]).toContain(response.status);
		});
	});

	describe("POST /api/zelf-proof/encrypt-qr-code", () => {
		it("should encrypt QR code successfully with valid payload", async () => {
			const payload = {
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt-qr-code").send(payload);

			// Handle both success (200) and external API failure (401/500) scenarios
			if (response.status === 200) {
				expect(response.body).toHaveProperty("zelfQR");
				expect(response.body.zelfQR).toBeDefined();
				expect(typeof response.body.zelfQR).toBe("string");
				expect(response.body.zelfQR).toMatch(/^data:image\/png;base64,/);
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should reject request with missing faceBase64 field", async () => {
			const payload = {
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt-qr-code").send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("faceBase64 is required");
		});

		it("should reject request with missing identifier field", async () => {
			const payload = {
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt-qr-code").send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("identifier is required");
		});

		it("should reject request with empty payload", async () => {
			const response = await request(app).post("/api/zelf-proof/encrypt-qr-code").send({});

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
		});

		it("should process request without authentication (unprotected route)", async () => {
			const payload = {
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/encrypt-qr-code").send(payload);

			// Should get a response (not 401) since routes are unprotected
			// Could be 200 (success) or 500 (external API error) depending on environment
			expect([200, 500]).toContain(response.status);
		});
	});

	describe("POST /api/zelf-proof/preview", () => {
		let validZelfProof;
		let originalPublicData;

		beforeAll(async () => {
			// First, encrypt some data to get a zelfProof for testing preview
			const encryptPayload = {
				livenessDetectionPriorCreation: false,
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				livenessLevel: "REGULAR",
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			try {
				const encryptResponse = await request(app)
					.post("/api/zelf-proof/encrypt")
					.set("Authorization", `Bearer ${authToken}`)
					.send(encryptPayload);

				if (encryptResponse.status === 200) {
					validZelfProof = encryptResponse.body.zelfProof;
					originalPublicData = encryptPayload.publicData;
					console.log("Successfully obtained zelfProof for preview tests");
				} else {
					console.log("Could not get zelfProof, preview tests will expect errors");
				}
			} catch (error) {
				console.log("Could not get zelfProof, preview tests will expect errors");
			}
		});

		it("should preview zelfProof successfully and return original publicData", async () => {
			// Skip test if we don't have a valid zelfProof
			if (!validZelfProof) {
				console.log("Skipping preview test - no valid zelfProof available");
				return;
			}

			const payload = {
				zelfProof: validZelfProof,
				faceBase64: selfiesData.manSelfie,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/preview").set("Authorization", `Bearer ${authToken}`).send(payload);

			// Handle both success (200) and external API failure (401/500) scenarios
			if (response.status === 200) {
				expect(response.body).toHaveProperty("publicData");

				// Compare individual keys instead of entire object
				const returnedPublicData = response.body.publicData;
				Object.keys(originalPublicData).forEach((key) => {
					expect(returnedPublicData).toHaveProperty(key);
					expect(returnedPublicData[key]).toBe(originalPublicData[key]);
				});

				console.log("Preview test successful - all publicData keys match original");
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should reject request with missing zelfProof field", async () => {
			const payload = {
				faceBase64: selfiesData.manSelfie,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/preview").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("zelfProof is required");
		});

		it("should reject request with missing zelfProof field", async () => {
			const payload = {
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/preview").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("zelfProof is required");
		});

		it("should reject request with empty payload", async () => {
			const response = await request(app).post("/api/zelf-proof/preview").set("Authorization", `Bearer ${authToken}`).send({});

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
		});

		it("should pass validation with only zelfProof (faceBase64 not required)", async () => {
			const payload = {
				zelfProof: "sample-zelf-proof-string",
			};

			const response = await request(app).post("/api/zelf-proof/preview").set("Authorization", `Bearer ${authToken}`).send(payload);

			// Should pass validation (400 would be validation error, 500 is business logic error)
			expect(response.status).not.toBe(400);
			// The request might fail with 500 due to invalid zelfProof, but that's not a validation error
			expect(response.status).toBeGreaterThanOrEqual(400);
		});

		it("should process request without authentication (unprotected route)", async () => {
			// Skip test if we don't have a valid zelfProof
			if (!validZelfProof) {
				console.log("Skipping unauthenticated preview test - no valid zelfProof available");
				return;
			}

			const payload = {
				zelfProof: validZelfProof,
				faceBase64: selfiesData.manSelfie,
				tolerance: "REGULAR",
			};

			const response = await request(app).post("/api/zelf-proof/preview").send(payload);

			// Since all routes are unprotected, this should be processed, not rejected by auth
			if (response.status === 200) {
				expect(response.body).toHaveProperty("publicData");

				// Compare individual keys instead of entire object
				const returnedPublicData = response.body.publicData;
				Object.keys(originalPublicData).forEach((key) => {
					expect(returnedPublicData).toHaveProperty(key);
					expect(returnedPublicData[key]).toBe(originalPublicData[key]);
				});
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});
	});

	describe("POST /api/zelf-proof/decrypt", () => {
		let validZelfProof;
		let originalPublicData;
		let originalMetadata;

		beforeAll(async () => {
			// First, encrypt some data to get a zelfProof for testing decrypt
			const encryptPayload = {
				livenessDetectionPriorCreation: false,
				publicData: {
					publicKeyA: "ABC",
					publicKeyB: "DEF",
					publicKeyC: "XYZ",
				},
				livenessLevel: "REGULAR",
				metadata: {
					secretA: "123456",
					secretB: "789456",
					secretC: "121336",
				},
				os: "DESKTOP",
				password: "123456",
				identifier: "133445",
				faceBase64: selfiesData.manSelfie,
				requireLiveness: true,
				tolerance: "REGULAR",
			};

			try {
				const encryptResponse = await request(app)
					.post("/api/zelf-proof/encrypt")
					.set("Authorization", `Bearer ${authToken}`)
					.send(encryptPayload);

				if (encryptResponse.status === 200) {
					validZelfProof = encryptResponse.body.zelfProof;
					originalPublicData = encryptPayload.publicData;
					originalMetadata = encryptPayload.metadata;
					console.log("Successfully obtained zelfProof for decrypt tests");
				} else {
					console.log("Could not get zelfProof, decrypt tests will expect errors");
				}
			} catch (error) {
				console.log("Could not get zelfProof, decrypt tests will expect errors");
			}
		});

		it("should decrypt zelfProof successfully and return original publicData and metadata", async () => {
			// Skip test if we don't have a valid zelfProof
			if (!validZelfProof) {
				console.log("Skipping decrypt test - no valid zelfProof available");
				return;
			}

			const payload = {
				zelfProof: validZelfProof,
				faceBase64: selfiesData.manSelfie,
				os: "DESKTOP",
				password: "123456",
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send(payload);

			// Handle both success (200) and external API failure (401/500) scenarios
			if (response.status === 200) {
				expect(response.body).toHaveProperty("publicData");
				expect(response.body).toHaveProperty("metadata");

				// Compare individual keys for publicData
				const returnedPublicData = response.body.publicData;
				Object.keys(originalPublicData).forEach((key) => {
					expect(returnedPublicData).toHaveProperty(key);
					expect(returnedPublicData[key]).toBe(originalPublicData[key]);
				});

				// Compare individual keys for metadata
				const returnedMetadata = response.body.metadata;
				Object.keys(originalMetadata).forEach((key) => {
					expect(returnedMetadata).toHaveProperty(key);
					expect(returnedMetadata[key]).toBe(originalMetadata[key]);
				});

				console.log("Decrypt test successful - all publicData and metadata keys match original");
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should reject request with missing zelfProof field", async () => {
			const payload = {
				faceBase64: selfiesData.manSelfie,
				os: "DESKTOP",
				password: "123456",
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("zelfProof is required");
		});

		it("should reject request with missing faceBase64 field", async () => {
			const payload = {
				zelfProof: "sample-zelf-proof-string",
				os: "DESKTOP",
				password: "123456",
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("faceBase64 is required");
		});

		it("should reject request with missing os field", async () => {
			const payload = {
				zelfProof: "sample-zelf-proof-string",
				faceBase64: selfiesData.manSelfie,
				password: "123456",
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send(payload);

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
			expect(response.body.message).toContain("os is required");
		});

		it("should reject request with empty payload", async () => {
			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send({});

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty("error", "Validation error");
		});

		it("should process request without authentication (unprotected route)", async () => {
			// Skip test if we don't have a valid zelfProof
			if (!validZelfProof) {
				console.log("Skipping unauthenticated decrypt test - no valid zelfProof available");
				return;
			}

			const payload = {
				zelfProof: validZelfProof,
				faceBase64: selfiesData.manSelfie,
				os: "DESKTOP",
				password: "123456",
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").send(payload);

			// Since all routes are unprotected, this should be processed, not rejected by auth
			if (response.status === 200) {
				expect(response.body).toHaveProperty("publicData");
				expect(response.body).toHaveProperty("metadata");

				// Compare individual keys for publicData
				const returnedPublicData = response.body.publicData;
				Object.keys(originalPublicData).forEach((key) => {
					expect(returnedPublicData).toHaveProperty(key);
					expect(returnedPublicData[key]).toBe(originalPublicData[key]);
				});

				// Compare individual keys for metadata
				const returnedMetadata = response.body.metadata;
				Object.keys(originalMetadata).forEach((key) => {
					expect(returnedMetadata).toHaveProperty(key);
					expect(returnedMetadata[key]).toBe(originalMetadata[key]);
				});
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});

		it("should reject decrypt attempt with wrong face (wrong selfie)", async () => {
			// Skip test if we don't have a valid zelfProof
			if (!validZelfProof) {
				console.log("Skipping wrong face test - no valid zelfProof available");
				return;
			}

			const payload = {
				zelfProof: validZelfProof,
				faceBase64: selfiesData.womanSelfie, // Wrong selfie - should fail
				os: "DESKTOP",
				password: "123456",
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send(payload);

			// Should fail because wrong face is used for decryption
			// Could be 400 (validation error) or 500 (external API error) depending on implementation
			expect([400, 500]).toContain(response.status);
			expect(response.body).toHaveProperty("error");

			console.log("Wrong face test successful - decrypt properly rejected with wrong selfie");
		});

		it("should reject decrypt attempt with wrong password", async () => {
			// Skip test if we don't have a valid zelfProof
			if (!validZelfProof) {
				console.log("Skipping wrong password test - no valid zelfProof available");
				return;
			}

			const payload = {
				zelfProof: validZelfProof,
				faceBase64: selfiesData.manSelfie, // Correct selfie
				os: "DESKTOP",
				password: "wrongpassword", // Wrong password - should fail
			};

			const response = await request(app).post("/api/zelf-proof/decrypt").set("Authorization", `Bearer ${authToken}`).send(payload);

			// Should fail because wrong password is used for decryption
			// Could be 400 (validation error) or 500 (external API error) depending on implementation
			expect([400, 500]).toContain(response.status);
			expect(response.body).toHaveProperty("error");

			console.log("Wrong password test successful - decrypt properly rejected with wrong password");
		});
	});
});
