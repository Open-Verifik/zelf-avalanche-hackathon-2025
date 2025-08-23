const config = require("./config");

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
		},
	},
	security: [
		{
			bearerAuth: [],
		},
	],
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
				description: "Create an encrypted ZelfProof using biometric face verification. Supports liveness detection and multiple security levels.",
				security: [{ bearerAuth: [] }],
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
				security: [{ bearerAuth: [] }],
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
				security: [{ bearerAuth: [] }],
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
				security: [{ bearerAuth: [] }],
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
	},
};

module.exports = swaggerSpec;
