/**
 * Test file for real QR code functionality
 * Generates a real QR code and tests the extraction
 * @author Miguel Trevino <miguel@zelf.world>
 */

const QRCode = require("qrcode");
const { extractZelfProofFromQRCode } = require("./Utilities/helper.module");

/**
 * Generate a QR code with the zelfProof string
 */
const generateTestQRCode = async () => {
	try {
		// This is the kind of zelfProof string you'd get from the API
		const testZelfProof =
			"A65ys1dfLWZoHEuxg5GnapZMrNT9idX7j7scy/En/kcpyoCRR1kd2+0h/kxhAawoRIHztYNsHdG3orJDkxkWReZoEhDXvmPiZiU66QIUrHtgaV5gJX3rbRPzG3fmDE4j4cRY5noa9AO8pqiKPsnLJJaEt21UbnLEEsadKJF4Nn+wIvACcAMivYQjfWG74cKstKegHMtZnmRBXqvvoQk/z0SvdQJ2CW5YWK1PzcvcNNjYMdb2YsngI4CqTWtkk3z5IAU+8JXuR10Z7vh74pPmZUK5aIavWRvcsMFI928zEgFJDkftISvRIeDS+0z6tgodq4Dwlql7lZ/9iEXlJyHTNpYQd3+XdqPGn/eTT3hRxL4T+20AgnBHOAWjEHcgMTaFBDGLnL9t0F05sgUy7cgSxhdcXL6DmGXVRRVhCbwpcxRchWqZZu6K6Wwi93J16jQg0ROTjvpxB7i/pek9YI/sjI88NkJros2RuA/Gs5b3GH5/s1nWgDGheGvjq35C4d2Mi0AtJTUburTJhqk/VPZy710TRXaTfd3PSIJxblq+yoiTr4llai9fbGDpIBlRlurmNg9xEGk/i1SjlhNq1lCXezCWRFwyqgIRSLLXsqVpMDIn10aV+M3SYYih/d3jYdOGpxPcFsF10694dEdq3SDfRCo6q";

		console.log("🔍 Original zelfProof string:");
		console.log(testZelfProof);
		console.log("\n" + "=".repeat(80) + "\n");

		// Generate QR code as data URL
		const qrCodeDataUrl = await QRCode.toDataURL(testZelfProof, {
			width: 300,
			margin: 2,
			color: {
				dark: "#000000",
				light: "#FFFFFF",
			},
		});

		console.log("📱 Generated QR code data URL:");
		console.log(qrCodeDataUrl.substring(0, 100) + "...");
		console.log("\n" + "=".repeat(80) + "\n");

		// Test extraction
		console.log("🔓 Testing QR code extraction...");
		const extractionResult = await extractZelfProofFromQRCode(qrCodeDataUrl);

		console.log("📊 Extraction result:");
		console.log(JSON.stringify(extractionResult, null, 2));
		console.log("\n" + "=".repeat(80) + "\n");

		// Verify the result
		if (extractionResult.success) {
			console.log("✅ SUCCESS! ZelfProof extracted from QR code!");
			console.log("📝 Extracted string:", extractionResult.zelfProof);
			console.log("🔍 Extraction method:", extractionResult.extractionMethod);

			// Check if it matches the original
			if (extractionResult.zelfProof === testZelfProof) {
				console.log("🎯 PERFECT MATCH! The extracted string is identical to the original!");
			} else {
				console.log("⚠️  WARNING: Extracted string doesn't match original");
				console.log("Original length:", testZelfProof.length);
				console.log("Extracted length:", extractionResult.zelfProof.length);
			}
		} else {
			console.log("❌ FAILED to extract zelfProof from QR code");
			console.log("Error:", extractionResult.error);
			console.log("Message:", extractionResult.message);
		}
	} catch (error) {
		console.error("❌ Test failed:", error);
	}
};

/**
 * Test with a simple text QR code
 */
const testSimpleQRCode = async () => {
	try {
		console.log("\n🧪 Testing with simple text QR code...");

		const simpleText = "Hello World! This is a test QR code.";
		const qrCodeDataUrl = await QRCode.toDataURL(simpleText, {
			width: 200,
			margin: 1,
		});

		console.log("📝 Simple text:", simpleText);
		console.log("📱 QR code generated");

		const extractionResult = await extractZelfProofFromQRCode(qrCodeDataUrl);

		if (extractionResult.success) {
			console.log("✅ Simple QR code decoded successfully!");
			console.log("📝 Extracted text:", extractionResult.zelfProof);
		} else {
			console.log("❌ Simple QR code failed:", extractionResult.error);
		}
	} catch (error) {
		console.error("❌ Simple test failed:", error);
	}
};

/**
 * Main test function
 */
const runRealTests = async () => {
	console.log("🚀 Starting REAL QR code tests...\n");

	try {
		await generateTestQRCode();
		await testSimpleQRCode();

		console.log("\n✅ All real tests completed!");
	} catch (error) {
		console.error("\n❌ Real test failed:", error);
	}
};

// Run tests if this file is executed directly
if (require.main === module) {
	runRealTests();
}

module.exports = {
	generateTestQRCode,
	testSimpleQRCode,
	runRealTests,
};
