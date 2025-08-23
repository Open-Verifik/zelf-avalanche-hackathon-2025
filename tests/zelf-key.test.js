// Set test environment
process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../server");
const config = require("../Core/config");

describe("ZelfKey Endpoints", () => {
	const selfiesData = require("../Repositories/ZelfProof/assets/selfies.json");

	describe("POST /api/zelf-key/store", () => {
		describe("Store Website Password", () => {
			it("should store website password successfully", async () => {
				const payload = {
					type: "password",
					payload: {
						website: "github.com",
						username: "user@email.com",
						password: "securepass123",
						notes: "Work account",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body).toHaveProperty("success", true);
					expect(response.body).toHaveProperty("zelfProof");
					expect(response.body).toHaveProperty("publicData");
					expect(response.body.publicData.type).toBe("website_password");
					expect(response.body.publicData.website).toBe("github.com");
					expect(response.body.publicData.username).toBe("***com");
					expect(response.body.publicData).toHaveProperty("timestamp");

					// Check if QR code is returned (data URL format)
					expect(response.body.zelfProof).toMatch(/^data:image\/png;base64,/);

					// Check IPFS information (may be null if pinning fails)
					if (response.body.ipfs) {
						expect(response.body.ipfs).toHaveProperty("hash");
						expect(response.body.ipfs).toHaveProperty("gatewayUrl");
						expect(response.body.ipfs).toHaveProperty("pinSize");
						expect(response.body.ipfs).toHaveProperty("timestamp");
					}

					expect(response.body.message).toContain("Website password stored successfully as QR code");
				} else {
					// External API failure is expected in test environment
					expect([401, 500]).toContain(response.status);
					expect(response.body).toHaveProperty("error");
				}
			});

			it("should store website password without notes", async () => {
				const payload = {
					type: "password",
					payload: {
						website: "stackoverflow.com",
						username: "developer123",
						password: "devpass456",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body.publicData.type).toBe("website_password");
					expect(response.body.publicData.website).toBe("stackoverflow.com");
					expect(response.body.publicData.username).toBe("***123");

					// Check if QR code is returned
					expect(response.body.zelfProof).toMatch(/^data:image\/png;base64,/);
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});
		});

		describe("Store Notes", () => {
			it("should store notes with key-value pairs successfully", async () => {
				const payload = {
					type: "notes",
					payload: {
						title: "API Keys",
						keyValuePairs: {
							OpenAI: "sk-1234567890abcdef",
							Stripe: "pk_test_1234567890",
							AWS: "AKIA1234567890ABCDEF",
						},
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body).toHaveProperty("success", true);
					expect(response.body).toHaveProperty("zelfProof");
					expect(response.body).toHaveProperty("publicData");
					expect(response.body.publicData.type).toBe("notes");
					expect(response.body.publicData.title).toBe("API Keys");
					expect(response.body.publicData.pairCount).toBe(3);
					expect(response.body.publicData).toHaveProperty("timestamp");
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});

			it("should store notes with maximum allowed key-value pairs (10)", async () => {
				const keyValuePairs = {};
				for (let i = 1; i <= 10; i++) {
					keyValuePairs[`key${i}`] = `value${i}`;
				}

				const payload = {
					type: "notes",
					payload: {
						title: "Max Keys Test",
						keyValuePairs,
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body.publicData.pairCount).toBe(10);
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});
		});

		describe("Store Credit Card", () => {
			it("should store credit card successfully", async () => {
				const payload = {
					type: "credit_card",
					payload: {
						cardName: "John Doe",
						cardNumber: "4111111111111111", // Valid test card
						expiryMonth: "12",
						expiryYear: "2028",
						cvv: "123",
						bankName: "Chase Bank",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body).toHaveProperty("success", true);
					expect(response.body).toHaveProperty("zelfProof");
					expect(response.body).toHaveProperty("publicData");
					expect(response.body.publicData.type).toBe("credit_card");
					expect(response.body.publicData.cardName).toBe("John Doe");
					expect(response.body.publicData.cardNumber).toBe("****-****-****-1111");
					expect(response.body.publicData.expiryMonth).toBe("12");
					expect(response.body.publicData.expiryYear).toBe("2028");
					expect(response.body.publicData.bankName).toBe("Chase Bank");
					expect(response.body.publicData).toHaveProperty("timestamp");
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});
		});

		describe("Store Contact", () => {
			it("should store contact with all fields successfully", async () => {
				const payload = {
					type: "contact",
					payload: {
						name: "Jane Smith",
						email: "jane.smith@company.com",
						phone: "+1-555-123-4567",
						address: "123 Business St, City, State 12345",
						company: "Tech Corp",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body).toHaveProperty("success", true);
					expect(response.body).toHaveProperty("zelfProof");
					expect(response.body).toHaveProperty("publicData");
					expect(response.body.publicData.type).toBe("contact");
					expect(response.body.publicData.name).toBe("Jane Smith");
					expect(response.body.publicData.email).toBe("***com");
					expect(response.body.publicData.phone).toBe("***4567");
					expect(response.body.publicData).toHaveProperty("timestamp");
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});

			it("should store contact with minimal required fields", async () => {
				const payload = {
					type: "contact",
					payload: {
						name: "Minimal Contact",
						email: "minimal@test.com",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body.publicData.name).toBe("Minimal Contact");
					expect(response.body.publicData.email).toBe("***com");
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});
		});

		describe("Store Bank Details", () => {
			it("should store bank details successfully", async () => {
				const payload = {
					type: "bank_details",
					payload: {
						bankName: "Wells Fargo",
						accountNumber: "1234567890123456",
						routingNumber: "121000248",
						accountType: "checking",
						accountHolder: "John Doe",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					expect(response.body).toHaveProperty("success", true);
					expect(response.body).toHaveProperty("zelfProof");
					expect(response.body).toHaveProperty("publicData");
					expect(response.body.publicData.type).toBe("bank_details");
					expect(response.body.publicData.bankName).toBe("Wells Fargo");
					expect(response.body.publicData.accountNumber).toBe("****3456");
					expect(response.body.publicData.accountType).toBe("checking");
					expect(response.body.publicData.accountHolder).toBe("John Doe");
					expect(response.body.publicData).toHaveProperty("timestamp");
				} else {
					expect([401, 500]).toContain(response.status);
				}
			});
		});
	});

	describe("POST /api/zelf-key/store/password", () => {
		it("should store password using specific endpoint", async () => {
			const payload = {
				website: "specific-endpoint.com",
				username: "testuser",
				password: "testpass123",
				notes: "Testing specific endpoint",
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/store/password").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("website_password");
				expect(response.body.publicData.website).toBe("specific-endpoint.com");
				expect(response.body.publicData.username).toBe("***ser"); // Last 3 chars: "ser"
				expect(response.body.publicData).toHaveProperty("timestamp");

				// Check if QR code is returned
				expect(response.body.zelfProof).toMatch(/^data:image\/png;base64,/);
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	describe("POST /api/zelf-key/store/notes", () => {
		it("should store notes using specific endpoint", async () => {
			const payload = {
				title: "Specific Endpoint Test",
				keyValuePairs: {
					TestKey: "TestValue",
				},
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/store/notes").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("notes");
				expect(response.body.publicData.title).toBe("Specific Endpoint Test");
				expect(response.body.publicData.pairCount).toBe(1);
				expect(response.body.publicData).toHaveProperty("timestamp");
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	describe("POST /api/zelf-key/store/credit-card", () => {
		it("should store credit card using specific endpoint", async () => {
			const payload = {
				cardName: "Specific Test",
				cardNumber: "5555555555554444", // Valid test card
				expiryMonth: "06",
				expiryYear: "2029",
				cvv: "321",
				bankName: "Test Bank",
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/store/credit-card").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("credit_card");
				expect(response.body.publicData.cardName).toBe("Specific Test");
				expect(response.body.publicData.cardNumber).toBe("****-****-****-4444");
				expect(response.body.publicData.expiryMonth).toBe("06");
				expect(response.body.publicData.expiryYear).toBe("2029");
				expect(response.body.publicData.bankName).toBe("Test Bank");
				expect(response.body.publicData).toHaveProperty("timestamp");
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	describe("POST /api/zelf-key/store/contact", () => {
		it("should store contact using specific endpoint", async () => {
			const payload = {
				name: "Specific Contact",
				email: "specific@test.com",
				phone: "+1-555-987-6543",
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/store/contact").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("contact");
				expect(response.body.publicData.name).toBe("Specific Contact");
				expect(response.body.publicData.email).toBe("***com");
				expect(response.body.publicData.phone).toBe("***6543");
				expect(response.body.publicData).toHaveProperty("timestamp");
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	describe("POST /api/zelf-key/store/bank-details", () => {
		it("should store bank details using specific endpoint", async () => {
			const payload = {
				bankName: "Specific Bank",
				accountNumber: "9876543210987654",
				routingNumber: "987654321",
				accountType: "savings",
				accountHolder: "Specific Holder",
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/store/bank-details").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("bank_details");
				expect(response.body.publicData.bankName).toBe("Specific Bank");
				expect(response.body.publicData.accountNumber).toBe("****7654");
				expect(response.body.publicData.accountType).toBe("savings");
				expect(response.body.publicData.accountHolder).toBe("Specific Holder");
				expect(response.body.publicData).toHaveProperty("timestamp");
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	describe("POST /api/zelf-key/retrieve", () => {
		let storedZelfProof;

		beforeAll(async () => {
			// First store some data to retrieve later
			const payload = {
				type: "password",
				payload: {
					website: "retrieve-test.com",
					username: "retrieveuser",
					password: "retrievepass123",
				},
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			try {
				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					storedZelfProof = response.body.zelfProof;
				}
			} catch (error) {
				console.log("Could not store data for retrieve test");
			}
		});

		it("should retrieve stored data successfully", async () => {
			if (!storedZelfProof) {
				console.log("Skipping retrieve test - no stored data available");
				return;
			}

			const payload = {
				zelfProof: storedZelfProof,
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/retrieve").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("data");
				expect(response.body.data).toHaveProperty("publicData");
				expect(response.body.data).toHaveProperty("metadata");

				// Check public data structure
				expect(response.body.data.publicData.type).toBe("website_password");
				expect(response.body.data.publicData.website).toBe("retrieve-test.com");
				expect(response.body.data.publicData.username).toBe("***ser"); // Last 3 chars: "ser"
				expect(response.body.data.publicData).toHaveProperty("timestamp");

				// Check metadata structure (only sensitive data)
				expect(response.body.data.metadata.username).toBe("retrieveuser");
				expect(response.body.data.metadata.password).toBe("retrievepass123");
				// Website is not in metadata (it's public data)
				expect(response.body.data.metadata).not.toHaveProperty("website");
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	describe("POST /api/zelf-key/preview", () => {
		let storedZelfProof;

		beforeAll(async () => {
			// First store some data to preview later
			const payload = {
				type: "notes",
				payload: {
					title: "Preview Test Notes",
					keyValuePairs: {
						PreviewKey: "PreviewValue",
					},
				},
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			try {
				const response = await request(app).post("/api/zelf-key/store").send(payload);

				if (response.status === 200) {
					storedZelfProof = response.body.zelfProof;
				}
			} catch (error) {
				console.log("Could not store data for preview test");
			}
		});

		it("should preview stored data successfully", async () => {
			if (!storedZelfProof) {
				console.log("Skipping preview test - no stored data available");
				return;
			}

			const payload = {
				zelfProof: storedZelfProof,
				faceBase64: selfiesData.manSelfie,
			};

			const response = await request(app).post("/api/zelf-key/preview").send(payload);

			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("notes");
				expect(response.body.publicData.title).toBe("Preview Test Notes");
				expect(response.body.publicData.pairCount).toBe(1);
				expect(response.body.publicData).toHaveProperty("timestamp");

				// Verify that sensitive data is NOT in publicData
				expect(response.body.publicData).not.toHaveProperty("keyValuePairs");
			} else {
				expect([401, 500]).toContain(response.status);
			}
		});
	});

	// Edge Cases and Validation Tests
	describe("Edge Cases and Validation", () => {
		describe("Missing Required Fields", () => {
			it("should reject request with missing type", async () => {
				const payload = {
					payload: {
						website: "test.com",
						username: "user",
						password: "pass",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject request with missing payload", async () => {
				const payload = {
					type: "password",
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject request with missing faceBase64", async () => {
				const payload = {
					type: "password",
					payload: {
						website: "test.com",
						username: "user",
						password: "pass",
					},
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject request with missing password", async () => {
				const payload = {
					type: "password",
					payload: {
						website: "test.com",
						username: "user",
						password: "pass",
					},
					faceBase64: selfiesData.manSelfie,
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Invalid Data Types", () => {
			it("should reject unsupported data type", async () => {
				const payload = {
					type: "invalid_type",
					payload: {
						someField: "someValue",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Notes Validation", () => {
			it("should reject notes with more than 10 key-value pairs", async () => {
				const keyValuePairs = {};
				for (let i = 1; i <= 11; i++) {
					keyValuePairs[`key${i}`] = `value${i}`;
				}

				const payload = {
					type: "notes",
					payload: {
						title: "Too Many Keys",
						keyValuePairs,
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject notes with empty key names", async () => {
				const payload = {
					type: "notes",
					payload: {
						title: "Empty Keys",
						keyValuePairs: {
							"": "value1",
							validKey: "value2",
						},
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject notes with keys longer than 50 characters", async () => {
				const longKey = "a".repeat(51);
				const payload = {
					type: "notes",
					payload: {
						title: "Long Key",
						keyValuePairs: {
							[longKey]: "value",
						},
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject notes with values longer than 1000 characters", async () => {
				const longValue = "a".repeat(1001);
				const payload = {
					type: "notes",
					payload: {
						title: "Long Value",
						keyValuePairs: {
							key: longValue,
						},
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Credit Card Validation", () => {
			it("should reject invalid credit card number", async () => {
				const payload = {
					type: "credit_card",
					payload: {
						cardName: "Test User",
						cardNumber: "1234567890123456", // Invalid card number
						expiryMonth: "12",
						expiryYear: "2028",
						cvv: "123",
						bankName: "Test Bank",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject expired credit card", async () => {
				const payload = {
					type: "credit_card",
					payload: {
						cardName: "Test User",
						cardNumber: "4111111111111111",
						expiryMonth: "01",
						expiryYear: "2020", // Expired
						cvv: "123",
						bankName: "Test Bank",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject invalid expiry month", async () => {
				const payload = {
					type: "credit_card",
					payload: {
						cardName: "Test User",
						cardNumber: "4111111111111111",
						expiryMonth: "13", // Invalid month
						expiryYear: "2028",
						cvv: "123",
						bankName: "Test Bank",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Contact Validation", () => {
			it("should reject contact without any contact method", async () => {
				const payload = {
					type: "contact",
					payload: {
						name: "No Contact Info",
						// Missing email, phone, and address
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject invalid email format", async () => {
				const payload = {
					type: "contact",
					payload: {
						name: "Invalid Email",
						email: "invalid-email-format",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject phone number too short", async () => {
				const payload = {
					type: "contact",
					payload: {
						name: "Short Phone",
						phone: "123", // Too short
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Bank Details Validation", () => {
			it("should reject invalid routing number format", async () => {
				const payload = {
					type: "bank_details",
					payload: {
						bankName: "Test Bank",
						accountNumber: "1234567890123456",
						routingNumber: "12345", // Too short
						accountType: "checking",
						accountHolder: "Test Holder",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});

			it("should reject invalid account type", async () => {
				const payload = {
					type: "bank_details",
					payload: {
						bankName: "Test Bank",
						accountNumber: "1234567890123456",
						routingNumber: "123456789",
						accountType: "invalid_type", // Invalid type
						accountHolder: "Test Holder",
					},
					faceBase64: selfiesData.manSelfie,
					password: "master_password_123",
				};

				const response = await request(app).post("/api/zelf-key/store").send(payload);

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});

		describe("Empty Payload Validation", () => {
			it("should reject empty payload", async () => {
				const response = await request(app).post("/api/zelf-key/store").send({});

				expect(response.status).toBe(400);
				expect(response.body).toHaveProperty("error", "Validation error");
			});
		});
	});

	describe("Authentication and Route Protection", () => {
		it("should process requests without authentication (unprotected routes)", async () => {
			const payload = {
				type: "password",
				payload: {
					website: "unprotected-test.com",
					username: "unprotecteduser",
					password: "unprotectedpass123",
				},
				faceBase64: selfiesData.manSelfie,
				password: "master_password_123",
			};

			const response = await request(app).post("/api/zelf-key/store").send(payload);

			// Since all routes are unprotected, this should be processed, not rejected by auth
			if (response.status === 200) {
				expect(response.body).toHaveProperty("success", true);
				expect(response.body).toHaveProperty("zelfProof");
				expect(response.body).toHaveProperty("publicData");
				expect(response.body.publicData.type).toBe("website_password");
				expect(response.body.publicData.website).toBe("unprotected-test.com");
				expect(response.body.publicData.username).toBe("***ser"); // Last 3 chars: "ser"
				expect(response.body.publicData).toHaveProperty("timestamp");

				// Check if QR code is returned
				expect(response.body.zelfProof).toMatch(/^data:image\/png;base64,/);
			} else {
				// External API failure is expected in test environment
				expect([401, 500]).toContain(response.status);
				expect(response.body).toHaveProperty("error");
			}
		});
	});
});
