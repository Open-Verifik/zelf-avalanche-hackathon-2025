import config from "./config.js";

/**
 * Swagger/OpenAPI 3.0 configuration for Zelf Avalanche Hackathon 2025 API
 */
const swaggerSpec = {
	openapi: "3.0.0",
	info: {
		title: "Zelf Avalanche Hackathon 2025 API",
		version: "1.0.0",
		description: "API for Zelf Avalanche Hackathon 2025 project",
		contact: {
			name: "Miguel Trevino",
			email: "miguel@zelf.world",
		},
	},
	servers: [
		{
			url: `http://localhost:${config.port}`,
			description: "Development server",
		},
		{
			url: config.base_url || "https://zelf.world",
			description: "Production server",
		},
	],
	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				bearerFormat: "JWT",
			},
		},
		schemas: {
			// Authentication schemas
			AuthRequest: {
				type: "object",
				required: ["email", "apiKey"],
				properties: {
					email: {
						type: "string",
						format: "email",
						description: "User email for authentication",
						example: "user@example.com",
					},
					apiKey: {
						type: "string",
						description: "API key for authentication",
						example: "your-api-key-here",
					},
				},
			},
			AuthResponse: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Whether authentication was successful",
						example: true,
					},
					token: {
						type: "string",
						description: "JWT token for accessing protected endpoints",
						example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
					},
					expiresIn: {
						type: "string",
						description: "Token expiration time",
						example: "24h",
					},
					message: {
						type: "string",
						description: "Success message",
						example: "Authentication successful",
					},
				},
			},
			AuthError: {
				type: "object",
				properties: {
					error: {
						type: "string",
						description: "Error type",
						example: "Invalid credentials",
					},
					message: {
						type: "string",
						description: "Error message",
						example: "Email or API key is incorrect",
					},
				},
			},

			// ZelfProof schemas
			ZelfProofEncryptRequest: {
				type: "object",
				required: ["publicData", "faceBase64", "metadata", "os", "identifier"],
				properties: {
					publicData: {
						type: "object",
						description: "Public data to be encrypted (minimum 1 key required)",
						example: { name: "John Doe", email: "john@example.com" },
					},
					faceBase64: {
						type: "string",
						description: "Base64 encoded face image for biometric verification",
						example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
					},
					metadata: {
						type: "object",
						description: "Additional metadata (minimum 1 key required)",
						example: { device: "iPhone 12", location: "New York" },
					},
					os: {
						type: "string",
						enum: ["DESKTOP", "ANDROID", "IOS"],
						description: "Operating system",
						example: "IOS",
					},
					password: {
						type: "string",
						description: "Optional password for additional security",
						example: "secure_password_123",
					},
					identifier: {
						type: "string",
						description: "Unique identifier for the proof",
						example: "proof_123456789",
					},
					requireLiveness: {
						type: "boolean",
						description: "Whether liveness detection is required",
						example: true,
					},
					tolerance: {
						type: "string",
						enum: ["REGULAR", "SOFT", "HARDENED"],
						description: "Liveness tolerance level",
						example: "REGULAR",
					},
					verifierKey: {
						type: "string",
						description: "Optional verifier key for additional validation",
						example: "verifier_key_123",
					},
				},
			},
			ZelfProofDecryptRequest: {
				type: "object",
				required: ["faceBase64", "os", "zelfProof"],
				properties: {
					faceBase64: {
						type: "string",
						description: "Base64 encoded face image for biometric verification",
						example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
					},
					os: {
						type: "string",
						enum: ["DESKTOP", "ANDROID", "IOS"],
						description: "Operating system",
						example: "IOS",
					},
					password: {
						type: "string",
						description: "Password used during encryption (if applicable)",
						example: "secure_password_123",
					},
					zelfProof: {
						type: "string",
						description: "Zelf proof data to decrypt",
						example: "encrypted_zelf_proof_data",
					},
					verifierKey: {
						type: "string",
						description: "Verifier key for validation (if applicable)",
						example: "verifier_key_123",
					},
				},
			},
			ZelfProofPreviewRequest: {
				type: "object",
				required: ["zelfProof"],
				properties: {
					zelfProof: {
						type: "string",
						description: "Zelf proof data to preview",
						example: "zelf_proof_data",
					},
					verifierKey: {
						type: "string",
						description: "Verifier key for validation (if applicable)",
						example: "verifier_key_123",
					},
				},
			},
			ZelfProofEncryptResponse: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Whether the encryption was successful",
						example: true,
					},
					zelfProof: {
						type: "string",
						description: "Encrypted zelf proof data",
						example: "encrypted_proof_data_here",
					},
					zelfQR: {
						type: "string",
						description: "QR code data (for encrypt-qr-code endpoint)",
						example: "data:image/png;base64,qr_code_data_here",
					},
				},
			},
			ZelfProofDecryptResponse: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Whether the decryption was successful",
						example: true,
					},
					publicData: {
						type: "object",
						description: "Decrypted public data",
						example: { name: "John Doe", email: "john@example.com" },
					},
					metadata: {
						type: "object",
						description: "Decrypted metadata",
						example: { device: "iPhone 12", location: "New York" },
					},
					identifier: {
						type: "string",
						description: "Proof identifier",
						example: "proof_123456789",
					},
				},
			},
			ZelfProofPreviewResponse: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Whether the preview was successful",
						example: true,
					},
					preview: {
						type: "object",
						description: "Preview data without full decryption",
						properties: {
							identifier: {
								type: "string",
								description: "Proof identifier",
								example: "proof_123456789",
							},
							hasPublicData: {
								type: "boolean",
								description: "Whether the proof contains public data",
								example: true,
							},
							hasMetadata: {
								type: "boolean",
								description: "Whether the proof contains metadata",
								example: true,
							},
							isEncrypted: {
								type: "boolean",
								description: "Whether the proof is encrypted",
								example: true,
							},
						},
					},
				},
			},

			// ZelfKey schemas
			ZelfKeyPasswordPayload: {
				type: "object",
				required: ["website", "username", "password"],
				properties: {
					website: {
						type: "string",
						description: "Website URL or name",
						example: "github.com",
					},
					username: {
						type: "string",
						description: "Username or email for the website",
						example: "user@email.com",
					},
					password: {
						type: "string",
						description: "Password for the website",
						example: "securepass123",
					},
					notes: {
						type: "string",
						description: "Additional notes about the password",
						example: "Work account",
					},
				},
			},
			ZelfKeyNotesPayload: {
				type: "object",
				required: ["title", "keyValuePairs"],
				properties: {
					title: {
						type: "string",
						description: "Title for the notes",
						example: "API Keys",
					},
					keyValuePairs: {
						type: "object",
						description: "Key-value pairs for storing notes (max 10 pairs)",
						example: {
							OpenAI: "sk-1234567890abcdef",
							Stripe: "pk_test_1234567890",
							AWS: "AKIA1234567890ABCDEF",
						},
					},
				},
			},
			ZelfKeyCreditCardPayload: {
				type: "object",
				required: ["cardName", "cardNumber", "cvv", "expiryMonth", "expiryYear"],
				properties: {
					cardName: {
						type: "string",
						description: "Name on the credit card",
						example: "John Doe",
					},
					cardNumber: {
						type: "string",
						description: "Credit card number (will be masked in public data)",
						example: "4111111111111111",
					},
					cvv: {
						type: "string",
						description: "Card verification value",
						example: "123",
					},
					expiryMonth: {
						type: "string",
						description: "Expiry month (1-12)",
						example: "12",
					},
					expiryYear: {
						type: "string",
						description: "Expiry year (4 digits)",
						example: "2028",
					},
					cardType: {
						type: "string",
						description: "Type of credit card",
						example: "visa",
					},
				},
			},
			ZelfKeyContactPayload: {
				type: "object",
				required: ["name"],
				properties: {
					name: {
						type: "string",
						description: "Contact name",
						example: "John Doe",
					},
					email: {
						type: "string",
						format: "email",
						description: "Contact email (will be masked in public data)",
						example: "john.doe@example.com",
					},
					phone: {
						type: "string",
						description: "Contact phone number (will be masked in public data)",
						example: "+1-555-123-4567",
					},
					company: {
						type: "string",
						description: "Company name",
						example: "Tech Corp",
					},
					address: {
						type: "string",
						description: "Contact address",
						example: "123 Main St, City, State 12345",
					},
				},
			},
			ZelfKeyBankDetailsPayload: {
				type: "object",
				required: ["bankName", "accountNumber", "routingNumber", "accountType", "accountHolder"],
				properties: {
					bankName: {
						type: "string",
						description: "Name of the bank",
						example: "Wells Fargo",
					},
					accountNumber: {
						type: "string",
						description: "Bank account number (will be masked in public data)",
						example: "1234567890123456",
					},
					routingNumber: {
						type: "string",
						description: "9-digit routing number",
						example: "121000248",
					},
					accountType: {
						type: "string",
						enum: ["checking", "savings"],
						description: "Type of bank account",
						example: "checking",
					},
					accountHolder: {
						type: "string",
						description: "Name of the account holder",
						example: "John Doe",
					},
				},
			},
			ZelfKeyStoreRequest: {
				type: "object",
				required: ["type", "payload", "faceBase64", "password"],
				properties: {
					type: {
						type: "string",
						enum: ["password", "notes", "credit_card", "contact", "bank_details"],
						description: "Type of data to store",
						example: "password",
					},
					payload: {
						oneOf: [
							{ $ref: "#/components/schemas/ZelfKeyPasswordPayload" },
							{ $ref: "#/components/schemas/ZelfKeyNotesPayload" },
							{ $ref: "#/components/schemas/ZelfKeyCreditCardPayload" },
							{ $ref: "#/components/schemas/ZelfKeyContactPayload" },
							{ $ref: "#/components/schemas/ZelfKeyBankDetailsPayload" },
						],
						description: "Data payload based on the type",
					},
					faceBase64: {
						type: "string",
						description: "Base64 encoded face image for biometric verification",
						example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
					},
					password: {
						type: "string",
						description: "Master password for encrypting the data",
						example: "master_password_123",
					},
				},
			},
			ZelfKeyStoreResponse: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Whether the operation was successful",
						example: true,
					},
					zelfProof: {
						type: "string",
						description: "QR code data URL containing the encrypted data",
						example: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
					},
					ipfs: {
						type: "object",
						description: "IPFS pinning information (if successful)",
						properties: {
							hash: {
								type: "string",
								description: "IPFS hash of the pinned file",
								example: "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
							},
							gatewayUrl: {
								type: "string",
								description: "Gateway URL to access the file",
								example: "https://gateway.pinata.cloud/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
							},
							pinSize: {
								type: "number",
								description: "Size of the pinned file in bytes",
								example: 12345,
							},
							timestamp: {
								type: "string",
								description: "Timestamp when the file was pinned",
								example: "2025-01-27T10:30:00.000Z",
							},
							name: {
								type: "string",
								description: "Filename of the pinned file",
								example: "zelfkey_password_github_1706358600000.png",
							},
							metadata: {
								type: "object",
								description: "Metadata associated with the pinned file",
							},
						},
					},
					publicData: {
						type: "object",
						description: "Public data structure (non-sensitive information)",
						properties: {
							type: {
								type: "string",
								description: "Type of stored data",
								example: "website_password",
							},
							timestamp: {
								type: "string",
								description: "Timestamp when the data was stored",
								example: "2025-01-27T10:30:00.000Z",
							},
						},
					},
					message: {
						type: "string",
						description: "Success message",
						example: "Website password stored successfully as QR code",
					},
				},
			},
			ZelfKeyRetrieveRequest: {
				type: "object",
				required: ["zelfProof", "faceBase64", "password"],
				properties: {
					zelfProof: {
						type: "string",
						description: "QR code data URL or zelfProof string",
						example: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
					},
					faceBase64: {
						type: "string",
						description: "Base64 encoded face image for biometric verification",
						example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
					},
					password: {
						type: "string",
						description: "Master password used during encryption",
						example: "master_password_123",
					},
				},
			},
			ZelfKeyPreviewRequest: {
				type: "object",
				required: ["zelfProof", "faceBase64"],
				properties: {
					zelfProof: {
						type: "string",
						description: "QR code data URL or zelfProof string",
						example: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
					},
					faceBase64: {
						type: "string",
						description: "Base64 encoded face image for biometric verification",
						example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
					},
				},
			},
			ZelfKeyDataResponse: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Whether the operation was successful",
						example: true,
					},
					data: {
						type: "object",
						description: "Retrieved or previewed data",
						properties: {
							publicData: {
								type: "object",
								description: "Public data structure (non-sensitive information)",
							},
							metadata: {
								type: "object",
								description: "Sensitive data (only available in retrieve operations)",
							},
						},
					},
				},
			},

			// Session schemas
			SessionCreateRequest: {
				type: "object",
				required: ["identifier", "address"],
				properties: {
					identifier: {
						type: "string",
						description: "Unique identifier for the session",
						example: "user123",
					},
					address: {
						type: "string",
						description: "Wallet address for the session",
						example: "0x1234567890abcdef1234567890abcdef12345678",
					},
				},
			},
			SessionCreateResponse: {
				type: "object",
				properties: {
					data: {
						type: "object",
						properties: {
							token: {
								type: "string",
								description: "JWT token for the session",
								example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
							},
						},
					},
				},
			},
			SessionPublicKeyResponse: {
				type: "object",
				properties: {
					data: {
						type: "string",
						description: "PGP public key for encryption",
						example: "-----BEGIN PGP PUBLIC KEY BLOCK-----\n...\n-----END PGP PUBLIC KEY BLOCK-----",
					},
				},
			},
			SessionDecryptRequest: {
				type: "object",
				required: ["message"],
				properties: {
					message: {
						type: "string",
						description: "Encrypted message to decrypt",
						example: "-----BEGIN PGP MESSAGE-----\n...\n-----END PGP MESSAGE-----",
					},
				},
			},
			SessionDecryptResponse: {
				type: "object",
				properties: {
					data: {
						type: "string",
						description: "Decrypted content",
						example: "Decrypted message content",
					},
				},
			},
		},
	},
	// security: [
	// 	{
	// 		bearerAuth: [],
	// 	},
	// ],
	paths: {
		// Authentication endpoints
		"/api/auth/authenticate": {
			post: {
				tags: ["Authentication"],
				summary: "Authenticate user and get JWT token",
				description: "Authenticate user with email and API key to receive a JWT token for accessing protected endpoints.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/AuthRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Authentication successful",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/AuthResponse" },
							},
						},
					},
					400: {
						description: "Validation error or missing fields",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Missing required fields",
										},
										details: {
											type: "object",
											properties: {
												email: {
													type: "string",
													example: "Email is required",
												},
												apiKey: {
													type: "string",
													example: "API key is required",
												},
											},
										},
									},
								},
							},
						},
					},
					401: {
						description: "Invalid credentials",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/AuthError" },
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/AuthError" },
							},
						},
					},
				},
			},
		},

		// ZelfProof endpoints
		"/api/zelf-proof/encrypt": {
			post: {
				tags: ["ZelfProof - Encryption"],
				summary: "Encrypt data with ZelfProof",
				description:
					"Create an encrypted ZelfProof using biometric face verification. Supports liveness detection and multiple security levels.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfProofEncryptRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Data encrypted successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfProofEncryptResponse" },
							},
						},
					},
					409: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "faceBase64 is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Something went wrong",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-proof/encrypt-qr-code": {
			post: {
				tags: ["ZelfProof - Encryption"],
				summary: "Encrypt data with ZelfProof and generate QR code",
				description: "Create an encrypted ZelfProof with QR code generation for easy sharing and verification.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfProofEncryptRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Data encrypted and QR code generated successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfProofEncryptResponse" },
							},
						},
					},
					409: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "faceBase64 is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Something went wrong",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-proof/decrypt": {
			post: {
				tags: ["ZelfProof - Decryption"],
				summary: "Decrypt ZelfProof data",
				description: "Decrypt a ZelfProof using biometric face verification to access the original data.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfProofDecryptRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Data decrypted successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfProofDecryptResponse" },
							},
						},
					},
					409: {
						description: "Validation error or biometric verification failed",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "faceBase64 is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Something went wrong",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-proof/preview": {
			post: {
				tags: ["ZelfProof - Preview"],
				summary: "Preview ZelfProof data",
				description: "Preview ZelfProof metadata without full decryption. Useful for validation and basic information retrieval.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfProofPreviewRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Preview generated successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfProofPreviewResponse" },
							},
						},
					},
					409: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "zelfProof is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Something went wrong",
										},
									},
								},
							},
						},
					},
				},
			},
		},

		// ZelfKey endpoints
		"/api/zelf-key/store": {
			post: {
				tags: ["ZelfKey - Storage"],
				summary: "Store data with ZelfKey",
				description:
					"Store various types of data (passwords, notes, credit cards, contacts, bank details) using biometric face verification and QR code encryption. Data is automatically pinned to IPFS.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfKeyStoreRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Data stored successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyStoreResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Validation failed",
										},
										details: {
											type: "object",
											description: "Validation error details",
										},
									},
								},
							},
						},
					},
					401: {
						description: "Unauthorized - JWT token required",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Protected resource, use Authorization header to get access",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to store data",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/store/password": {
			post: {
				tags: ["ZelfKey - Storage"],
				summary: "Store website password",
				description: "Store website password using the specific password endpoint. This is a convenience endpoint for password storage.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["website", "username", "password", "faceBase64", "password"],
								properties: {
									website: {
										type: "string",
										description: "Website URL or name",
										example: "github.com",
									},
									username: {
										type: "string",
										description: "Username or email for the website",
										example: "user@email.com",
									},
									password: {
										type: "string",
										description: "Password for the website",
										example: "securepass123",
									},
									notes: {
										type: "string",
										description: "Additional notes about the password",
										example: "Work account",
									},
									faceBase64: {
										type: "string",
										description: "Base64 encoded face image for biometric verification",
										example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
									},
									password: {
										type: "string",
										description: "Master password for encrypting the data",
										example: "master_password_123",
									},
								},
							},
						},
					},
				},
				responses: {
					200: {
						description: "Password stored successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyStoreResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Validation failed",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to store password",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/store/notes": {
			post: {
				tags: ["ZelfKey - Storage"],
				summary: "Store notes with key-value pairs",
				description: "Store notes using key-value pairs (maximum 10 pairs). Useful for storing API keys, configuration data, etc.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["title", "keyValuePairs", "faceBase64", "password"],
								properties: {
									title: {
										type: "string",
										description: "Title for the notes",
										example: "API Keys",
									},
									keyValuePairs: {
										type: "object",
										description: "Key-value pairs for storing notes (max 10 pairs)",
										example: {
											OpenAI: "sk-1234567890abcdef",
											Stripe: "pk_test_1234567890",
										},
									},
									faceBase64: {
										type: "string",
										description: "Base64 encoded face image for biometric verification",
										example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
									},
									password: {
										type: "string",
										description: "Master password for encrypting the data",
										example: "master_password_123",
									},
								},
							},
						},
					},
				},
				responses: {
					200: {
						description: "Notes stored successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyStoreResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Validation failed",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to store notes",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/store/credit-card": {
			post: {
				tags: ["ZelfKey - Storage"],
				summary: "Store credit card information",
				description:
					"Store credit card details with automatic validation (Luhn algorithm, expiry date checks). Credit card numbers are masked in public data.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["cardName", "cardNumber", "cvv", "expiryMonth", "expiryYear", "faceBase64", "password"],
								properties: {
									cardName: {
										type: "string",
										description: "Name on the credit card",
										example: "John Doe",
									},
									cardNumber: {
										type: "string",
										description: "Credit card number (will be masked in public data)",
										example: "4111111111111111",
									},
									cvv: {
										type: "string",
										description: "Card verification value",
										example: "123",
									},
									expiryMonth: {
										type: "string",
										description: "Expiry month (1-12)",
										example: "12",
									},
									expiryYear: {
										type: "string",
										description: "Expiry year (4 digits)",
										example: "2028",
									},
									cardType: {
										type: "string",
										description: "Type of credit card",
										example: "visa",
									},
									faceBase64: {
										type: "string",
										description: "Base64 encoded face image for biometric verification",
										example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
									},
									password: {
										type: "string",
										description: "Master password for encrypting the data",
										example: "master_password_123",
									},
								},
							},
						},
					},
				},
				responses: {
					200: {
						description: "Credit card stored successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyStoreResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Invalid credit card number",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to store credit card",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/store/contact": {
			post: {
				tags: ["ZelfKey - Storage"],
				summary: "Store contact information",
				description: "Store contact details with automatic masking of sensitive information (email, phone) in public data.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["name", "faceBase64", "password"],
								properties: {
									name: {
										type: "string",
										description: "Contact name",
										example: "John Doe",
									},
									email: {
										type: "string",
										format: "email",
										description: "Contact email (will be masked in public data)",
										example: "john.doe@example.com",
									},
									phone: {
										type: "string",
										description: "Contact phone number (will be masked in public data)",
										example: "+1-555-123-4567",
									},
									company: {
										type: "string",
										description: "Company name",
										example: "Tech Corp",
									},
									address: {
										type: "string",
										description: "Contact address",
										example: "123 Main St, City, State 12345",
									},
									faceBase64: {
										type: "string",
										description: "Base64 encoded face image for biometric verification",
										example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
									},
									password: {
										type: "string",
										description: "Master password for encrypting the data",
										example: "master_password_123",
									},
								},
							},
						},
					},
				},
				responses: {
					200: {
						description: "Contact stored successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyStoreResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "At least one contact method required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to store contact",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/store/bank-details": {
			post: {
				tags: ["ZelfKey - Storage"],
				summary: "Store bank account details",
				description:
					"Store bank account information with automatic validation (routing number format, account type validation). Account numbers are masked in public data.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: {
								type: "object",
								required: ["bankName", "accountNumber", "routingNumber", "accountType", "accountHolder", "faceBase64", "password"],
								properties: {
									bankName: {
										type: "string",
										description: "Name of the bank",
										example: "Wells Fargo",
									},
									accountNumber: {
										type: "string",
										description: "Bank account number (will be masked in public data)",
										example: "1234567890123456",
									},
									routingNumber: {
										type: "string",
										description: "9-digit routing number",
										example: "121000248",
									},
									accountType: {
										type: "string",
										enum: ["checking", "savings"],
										description: "Type of bank account",
										example: "checking",
									},
									accountHolder: {
										type: "string",
										description: "Name of the account holder",
										example: "John Doe",
									},
									faceBase64: {
										type: "string",
										description: "Base64 encoded face image for biometric verification",
										example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
									},
									password: {
										type: "string",
										description: "Master password for encrypting the data",
										example: "master_password_123",
									},
								},
							},
						},
					},
				},
				responses: {
					200: {
						description: "Bank details stored successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyStoreResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Invalid routing number format",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to store bank details",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/retrieve": {
			post: {
				tags: ["ZelfKey - Retrieval"],
				summary: "Retrieve stored data",
				description:
					"Retrieve and decrypt stored data using the zelfProof and biometric face verification. Returns both public data and sensitive metadata.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfKeyRetrieveRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Data retrieved successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyDataResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Validation failed",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error or decryption failed",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to retrieve data",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/zelf-key/preview": {
			post: {
				tags: ["ZelfKey - Preview"],
				summary: "Preview stored data",
				description:
					"Preview stored data without full decryption. Useful for validation and basic information retrieval. Only returns public data, not sensitive metadata.",
				security: [{ bearerAuth: [] }],
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/ZelfKeyPreviewRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Preview generated successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ZelfKeyDataResponse" },
							},
						},
					},
					400: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Validation failed",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to preview data",
										},
									},
								},
							},
						},
					},
				},
			},
		},

		// Session endpoints
		"/api/sessions/public-key": {
			get: {
				tags: ["Sessions"],
				summary: "Get public key for session encryption",
				description: "Retrieve a PGP public key for encrypting messages that can be decrypted by the session.",
				parameters: [
					{
						name: "identifier",
						in: "query",
						required: true,
						schema: {
							type: "string",
						},
						description: "Unique identifier for the session",
						example: "user123",
					},
					{
						name: "name",
						in: "query",
						required: false,
						schema: {
							type: "string",
						},
						description: "Optional name for the key pair",
						example: "John Doe",
					},
					{
						name: "email",
						in: "query",
						required: false,
						schema: {
							type: "string",
							format: "email",
						},
						description: "Optional email for the key pair",
						example: "user@example.com",
					},
				],
				responses: {
					200: {
						description: "Public key retrieved successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/SessionPublicKeyResponse" },
							},
						},
					},
					409: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "identifier is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to generate public key",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/sessions": {
			post: {
				tags: ["Sessions"],
				summary: "Create a new session",
				description: "Create a new session with identifier and wallet address, returns a JWT token.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/SessionCreateRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Session created successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/SessionCreateResponse" },
							},
						},
					},
					409: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "identifier is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "Failed to create session",
										},
									},
								},
							},
						},
					},
				},
			},
		},
		"/api/sessions/decrypt-content": {
			post: {
				tags: ["Sessions"],
				summary: "Decrypt encrypted content",
				description: "Decrypt a PGP encrypted message using the session's private key.",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/SessionDecryptRequest" },
						},
					},
				},
				responses: {
					200: {
						description: "Content decrypted successfully",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/SessionDecryptResponse" },
							},
						},
					},
					409: {
						description: "Validation error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										validationError: {
											type: "string",
											example: "message is required",
										},
									},
								},
							},
						},
					},
					500: {
						description: "Internal server error",
						content: {
							"application/json": {
								schema: {
									type: "object",
									properties: {
										error: {
											type: "string",
											example: "decryption_failed",
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
};

export default swaggerSpec;
