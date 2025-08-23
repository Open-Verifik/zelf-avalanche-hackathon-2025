/**
 * Test file for helper functions
 * Demonstrates how to use the new helper functions for decrypting QR codes
 * and extracting zelfProof data for IPFS storage
 * @author Miguel Trevino <miguel@zelf.world>
 */

const { extractZelfProofForIPFS, decryptQRCodeForIPFS, extractDataFromDataUrl, extractZelfProofFromQRCode } = require("./Utilities/helper.module");

// Mock data for testing
const mockEncryptedResponse = {
	zelfQR: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...", // Mock QR code data URL
	zelfProof: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // Mock zelfProof string
};

const mockFaceBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...";
const mockPassword = "testPassword123";

// Mock ZelfProof module for testing
const mockZelfProofModule = {
	decrypt: async (data) => {
		console.log("Mock decrypt called with:", data);
		return {
			zelfProof: "decrypted_zelf_proof_string_here",
			publicData: { type: "test", timestamp: new Date().toISOString() },
			metadata: { test: "data" },
		};
	},
};

/**
 * Test the extractDataFromDataUrl helper function
 */
const testExtractDataFromDataUrl = () => {
	console.log("\n=== Testing extractDataFromDataUrl ===");

	const testDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
	const result = extractDataFromDataUrl(testDataUrl);

	console.log("Input:", testDataUrl);
	console.log("Result:", result);

	// Test with invalid data URL
	const invalidResult = extractDataFromDataUrl("invalid-data-url");
	console.log("Invalid input result:", invalidResult);
};

/**
 * Test the extractZelfProofFromQRCode helper function
 */
const testExtractZelfProofFromQRCode = async () => {
	console.log("\n=== Testing extractZelfProofFromQRCode ===");

	// Test with a mock QR code data URL
	const qrCodeDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
	const result = await extractZelfProofFromQRCode(qrCodeDataUrl);

	console.log("Input:", qrCodeDataUrl);
	console.log("Result:", result);

	// Test with invalid input
	try {
		const invalidResult = await extractZelfProofFromQRCode("invalid-qr-code");
		console.log("Invalid input result:", invalidResult);
	} catch (error) {
		console.log("Invalid input error:", error.message);
	}

	// Test with null input
	try {
		const nullResult = await extractZelfProofFromQRCode(null);
		console.log("Null input result:", nullResult);
	} catch (error) {
		console.log("Null input error:", error.message);
	}
};

/**
 * Test the extractZelfProofForIPFS helper function
 */
const testExtractZelfProofForIPFS = async () => {
	console.log("\n=== Testing extractZelfProofForIPFS ===");

	// Test with response that has both zelfProof and zelfQR
	const result1 = await extractZelfProofForIPFS(mockEncryptedResponse);
	console.log("Response with both zelfProof and zelfQR:", result1);

	// Test with response that only has zelfQR
	const responseOnlyQR = { zelfQR: mockEncryptedResponse.zelfQR };
	const result2 = await extractZelfProofForIPFS(responseOnlyQR);
	console.log("Response with only zelfQR:", result2);

	// Test with response that only has zelfProof
	const responseOnlyProof = { zelfProof: mockEncryptedResponse.zelfProof };
	const result3 = await extractZelfProofForIPFS(responseOnlyProof);
	console.log("Response with only zelfProof:", result3);

	// Test with empty response
	const emptyResponse = {};
	const result4 = await extractZelfProofForIPFS(emptyResponse);
	console.log("Empty response:", result4);
};

/**
 * Test the decryptQRCodeForIPFS helper function
 */
const testDecryptQRCodeForIPFS = async () => {
	console.log("\n=== Testing decryptQRCodeForIPFS ===");

	// Test with response that has both zelfProof and zelfQR
	const result1 = await decryptQRCodeForIPFS(mockEncryptedResponse, mockFaceBase64, mockPassword, mockZelfProofModule);
	console.log("Response with both zelfProof and zelfQR:", result1);

	// Test with response that only has zelfQR (requires decryption)
	const responseOnlyQR = { zelfQR: mockEncryptedResponse.zelfQR };
	const result2 = await decryptQRCodeForIPFS(responseOnlyQR, mockFaceBase64, mockPassword, mockZelfProofModule);
	console.log("Response with only zelfQR (decrypted):", result2);

	// Test with response that only has zelfProof
	const responseOnlyProof = { zelfProof: mockEncryptedResponse.zelfProof };
	const result3 = await decryptQRCodeForIPFS(responseOnlyProof, mockFaceBase64, mockPassword, mockZelfProofModule);
	console.log("Response with only zelfProof:", result3);

	// Test with missing parameters
	try {
		const result4 = await decryptQRCodeForIPFS(null, mockFaceBase64, mockPassword, mockZelfProofModule);
		console.log("Missing parameters result:", result4);
	} catch (error) {
		console.log("Missing parameters error:", error.message);
	}
};

/**
 * Demonstrate how to use these functions in a real scenario
 */
const demonstrateRealUsage = async () => {
	console.log("\n=== Real Usage Example ===");

	// Simulate getting an encrypted response from ZelfProof
	const encryptedResponse = {
		zelfQR: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
		// Note: In some cases, zelfProof might not be directly available
	};

	console.log("Encrypted response received:", {
		hasZelfQR: !!encryptedResponse.zelfQR,
		hasZelfProof: !!encryptedResponse.zelfProof,
	});

	// Step 1: Try to extract zelfProof directly from QR code binary data
	const extractionResult = await extractZelfProofForIPFS(encryptedResponse);
	console.log("Extraction result:", extractionResult);

	if (extractionResult.success) {
		console.log("✅ ZelfProof string extracted successfully from QR code!");
		console.log("Ready to store to IPFS:", extractionResult.zelfProof);
		console.log("Extraction method:", extractionResult.message);
	} else if (extractionResult.requiresDecryption) {
		console.log("⚠️ Direct extraction failed, falling back to API decryption");
		console.log("Extraction error:", extractionResult.extractionError);

		// Step 2: Decrypt the QR code to get the zelfProof string
		const decryptionResult = await decryptQRCodeForIPFS(encryptedResponse, mockFaceBase64, mockPassword, mockZelfProofModule);

		if (decryptionResult.success) {
			console.log("✅ QR code decrypted successfully through API!");
			console.log("ZelfProof string:", decryptionResult.zelfProof);
			console.log("Extraction method:", decryptionResult.extractionMethod);
			console.log("Ready to store to IPFS");
		} else {
			console.log("❌ Decryption failed:", decryptionResult.error);
		}
	} else {
		console.log("❌ Failed to extract zelfProof:", extractionResult.error);
	}
};

/**
 * Test the new QR code decoding functionality
 */
const testQRCodeDecoding = async () => {
	console.log("\n=== Testing QR Code Decoding ===");

	// Create a mock QR code that contains embedded zelfProof data
	// This simulates what happens when the QR code contains the zelfProof string
	const mockQRWithEmbeddedProof = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoicGFzc3dvcmQiLCJ3ZWJzaXRlIjoiZXhhbXBsZS5jb20iLCJ0aW1lc3RhbXAiOiIyMDI0LTAxLTAxVDAwOjAwOjAwLjAwMFoifQ.signature";

	// Test direct extraction
	const directResult = await extractZelfProofFromQRCode(mockQRWithEmbeddedProof);
	console.log("Direct extraction from QR code:", directResult);

	// Test with the new extractZelfProofForIPFS function
	const ipfsResult = await extractZelfProofForIPFS({ zelfQR: mockQRWithEmbeddedProof });
	console.log("IPFS extraction result:", ipfsResult);

	// Test the fallback behavior
	const fallbackResult = await extractZelfProofForIPFS({ zelfQR: "data:image/png;base64,invalid_base64_data" });
	console.log("Fallback behavior result:", fallbackResult);
};

/**
 * Main test function
 */
const runTests = async () => {
	console.log("🚀 Starting helper function tests...\n");

	try {
		testExtractDataFromDataUrl();
		await testExtractZelfProofFromQRCode();
		await testExtractZelfProofForIPFS();
		await testDecryptQRCodeForIPFS();
		await testQRCodeDecoding();
		await demonstrateRealUsage();

		console.log("\n✅ All tests completed successfully!");
	} catch (error) {
		console.error("\n❌ Test failed:", error);
	}
};

// Run tests if this file is executed directly
if (require.main === module) {
	runTests();
}

module.exports = {
	testExtractDataFromDataUrl,
	testExtractZelfProofFromQRCode,
	testExtractZelfProofForIPFS,
	testDecryptQRCodeForIPFS,
	demonstrateRealUsage,
	testQRCodeDecoding,
};
