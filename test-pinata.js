const PinataModule = require("./Utilities/pinata.module");

/**
 * Test Pinata functionality
 */
async function testPinata() {
	console.log("🧪 Testing Pinata Integration...\n");

	try {
		// Test connection
		console.log("1. Testing Pinata connection...");
		const connectionTest = await PinataModule.testConnection();
		console.log("Connection result:", connectionTest);
		console.log("");

		if (connectionTest.success) {
			// Test pinning a simple JSON
			console.log("2. Testing JSON pinning...");
			const testData = {
				message: "Hello from ZelfKey!",
				timestamp: new Date().toISOString(),
				test: true,
			};

			const jsonResult = await PinataModule.pinJSONToIPFS(testData, "zelfkey_test.json", { test: true, source: "test-script" });
			console.log("JSON pinning result:", jsonResult);
			console.log("");

			// Test pinning a simple text file
			console.log("3. Testing file pinning...");
			const testText = "This is a test file from ZelfKey!";
			const fileResult = await PinataModule.pinFileToIPFS(Buffer.from(testText, "utf8"), "zelfkey_test.txt", {
				test: true,
				source: "test-script",
			});
			console.log("File pinning result:", fileResult);
			console.log("");

			console.log("✅ All Pinata tests passed!");
			console.log("🌐 You can view your pinned files at:");
			console.log(`   JSON: ${jsonResult.gatewayUrl}`);
			console.log(`   Text: ${fileResult.gatewayUrl}`);
		} else {
			console.log("❌ Pinata connection failed. Please check your credentials.");
		}
	} catch (error) {
		console.error("❌ Error during Pinata testing:", error.message);
		console.log("\n💡 Make sure you have the following environment variables set:");
		console.log("   - PINATA_JWT (preferred)");
		console.log("   - OR PINATA_API_KEY and PINATA_SECRET_API_KEY");
	}
}

// Run the test
testPinata().catch(console.error);
