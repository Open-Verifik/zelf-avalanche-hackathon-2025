const ZelfProofModule = require("./Repositories/ZelfProof/modules/zelf-proof.module.js");
const { extractZelfProofFromQRCode } = require("./Utilities/helper.module.js");

async function testEncryptionComparison() {
	try {
		console.log("🧪 Testing encryption comparison...");

		// Mock data for testing
		const publicData = {
			website: "test-website.com",
			username: "testuser",
			timestamp: `${new Date().toISOString()}`,
		};

		const metadata = {
			type: "password",
			version: "1.0",
		};

		const faceBase64 =
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
		const masterPassword = "testpassword123";

		console.log("🔒 Calling encryptQRCode...");
		const zelfQREncryptionResponse = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `password`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		console.log("\n📊 encryptQRCode RESPONSE:");
		console.log("=".repeat(50));
		console.log("Response keys:", Object.keys(zelfQREncryptionResponse));
		console.log("Response type:", typeof zelfQREncryptionResponse);
		console.log("Response length:", zelfQREncryptionResponse.length);

		// If it's an array-like structure, let's examine the content
		if (Array.isArray(zelfQREncryptionResponse) || (zelfQREncryptionResponse.length && typeof zelfQREncryptionResponse.length === "number")) {
			console.log("\n🔍 Array-like response detected:");
			console.log("  - Length:", zelfQREncryptionResponse.length);
			console.log("  - First few elements:", Array.from(zelfQREncryptionResponse).slice(0, 10));

			// Try to convert to string to see what we have
			try {
				const asString = String.fromCharCode.apply(null, Array.from(zelfQREncryptionResponse));
				console.log("  - As string (first 200 chars):", asString.substring(0, 200));

				// Check if this looks like base64
				if (asString.match(/^[A-Za-z0-9+/=]+$/)) {
					console.log("  - ✅ Looks like base64 data!");

					// Try to decode it
					try {
						const decoded = Buffer.from(asString, "base64");
						console.log("  - ✅ Base64 decoded successfully!");
						console.log("  - Decoded length:", decoded.length);
						console.log("  - Decoded preview:", decoded.toString("binary").substring(0, 100));

						// This might be our zelfProof!
						return {
							success: true,
							zelfProof: decoded.toString("binary"),
							extractionMethod: "direct_base64_decode",
							message: "ZelfProof extracted directly from response array",
						};
					} catch (decodeError) {
						console.log("  - ❌ Base64 decode failed:", decodeError.message);
					}
				}
			} catch (stringError) {
				console.log("  - ❌ Could not convert to string:", stringError.message);
			}
		}

		// Check if we have zelfProof directly
		if (zelfQREncryptionResponse.zelfProof) {
			console.log("\n🔑 Direct zelfProof found:");
			console.log("  - Length:", zelfQREncryptionResponse.zelfProof.length);
			console.log("  - Preview:", zelfQREncryptionResponse.zelfProof.substring(0, 100));
		}

		// Check if we have zelfQR
		if (zelfQREncryptionResponse.zelfQR) {
			console.log("\n📱 zelfQR found:");
			console.log("  - Length:", zelfQREncryptionResponse.zelfQR.length);
			console.log("  - Preview:", zelfQREncryptionResponse.zelfQR.substring(0, 100));

			// Now try to extract from QR code
			console.log("\n🔍 Attempting to extract from QR code...");
			const extractionResult = await extractZelfProofFromQRCode(zelfQREncryptionResponse.zelfQR);

			console.log("📊 Extraction result:");
			console.log("  - Success:", extractionResult.success);
			console.log("  - Method:", extractionResult.extractionMethod);
			if (extractionResult.zelfProof) {
				console.log("  - Extracted length:", extractionResult.zelfProof.length);
				console.log("  - Extracted preview:", extractionResult.zelfProof.substring(0, 100));

				// Compare with direct zelfProof if available
				if (zelfQREncryptionResponse.zelfProof) {
					const sizeDiff = Math.abs(extractionResult.zelfProof.length - zelfQREncryptionResponse.zelfProof.length);
					const sizeSimilarity = sizeDiff <= 10 ? "VERY SIMILAR" : sizeDiff <= 50 ? "SIMILAR" : "DIFFERENT";
					console.log("  - Size comparison:", sizeSimilarity, `(diff: ${sizeDiff} chars)`);
				}
			}
		}

		// Try regular encrypt method with error handling
		try {
			console.log("\n🔒 Calling encrypt...");
			const zelfProofEncryptionResponse = await ZelfProofModule.encrypt({
				publicData,
				metadata,
				faceBase64,
				password: masterPassword,
				identifier: `password`,
				requireLiveness: true,
				tolerance: "REGULAR",
				os: "DESKTOP",
			});

			console.log("\n🔑 encrypt RESPONSE:");
			console.log("  - Response keys:", Object.keys(zelfProofEncryptionResponse));
			if (zelfProofEncryptionResponse.zelfProof) {
				console.log("  - zelfProof length:", zelfProofEncryptionResponse.zelfProof.length);
				console.log("  - zelfProof preview:", zelfProofEncryptionResponse.zelfProof.substring(0, 100));
			}
		} catch (encryptError) {
			console.log("\n⚠️ encrypt method failed:", encryptError.message);
			console.log("  - This is expected if the API endpoint doesn't exist or has issues");
		}
	} catch (error) {
		console.error("❌ Test failed:", error);
		console.error("Error details:", error.message);
	}
}

// Run the test
testEncryptionComparison();
