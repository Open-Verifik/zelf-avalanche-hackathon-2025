import dotenv from "dotenv";

dotenv.config();

// Test configuration
const TEST_CONFIG = {
	// Your existing image URL
	imageUrl: "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreiaiynykojjizkp3v653cxpwv5jswwrhmn7ml2c2oiq4",

	// Pinata configuration
	apiKey: process.env.PINATA_API_KEY,
	secretKey: process.env.PINATA_API_SECRET,
	gateway: process.env.PINATA_GATEWAY_URL || "https://chocolate-occasional-kite-546.mypinata.cloud",
};

async function testMetadataStructure() {
	try {
		console.log("🧪 Testing NFT Metadata Structure");
		console.log("==================================\n");

		// 1. Show what we have
		console.log("📸 What we have:");
		console.log(`   Image URL: ${TEST_CONFIG.imageUrl}`);
		console.log(`   This is a direct link to your QR code image\n`);

		// 2. Create the metadata JSON
		console.log("📋 Creating metadata JSON...");
		const metadata = {
			name: "ZelfKey QR Code NFT",
			description: "A QR code containing encrypted data, secured with ZelfKey biometric verification",
			image: TEST_CONFIG.imageUrl, // This points to your QR code
			external_url: "https://zelf.world",
			attributes: [
				{
					trait_type: "Data Type",
					value: "encrypted_qr_code",
				},
				{
					trait_type: "Security Method",
					value: "ZelfKey Biometric",
				},
				{
					trait_type: "Storage",
					value: "IPFS",
				},
			],
		};

		console.log("✅ Metadata created:");
		console.log(JSON.stringify(metadata, null, 2));
		console.log(`\n🔑 Key Point: The 'image' field points to: ${metadata.image}\n`);

		// 3. Upload metadata to IPFS
		console.log("📤 Uploading metadata to IPFS...");

		// Create the metadata file
		const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], {
			type: "application/json",
		});

		// Create FormData for Pinata
		const formData = new FormData();
		formData.append("file", metadataBlob, "nft-metadata.json");
		formData.append(
			"pinataMetadata",
			JSON.stringify({
				name: "ZelfKey NFT Metadata",
				keyvalues: {
					type: "nft_metadata",
					project: "zelfkey_avalanche",
				},
			})
		);

		// Upload to Pinata
		const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
			method: "POST",
			headers: {
				pinata_api_key: TEST_CONFIG.apiKey,
				pinata_secret_api_key: TEST_CONFIG.secretKey,
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`Pinata upload failed: ${response.status} ${response.statusText}`);
		}

		const result = await response.json();
		const metadataHash = result.IpfsHash;
		const metadataUrl = `https://${TEST_CONFIG.gateway}/ipfs/${metadataHash}`;

		console.log("✅ Metadata uploaded to IPFS!");
		console.log(`   Hash: ${metadataHash}`);
		console.log(`   URL: ${metadataUrl}\n`);

		// 4. Explain the structure
		console.log("🔍 NFT Metadata Structure Explained:");
		console.log("=====================================");
		console.log("1. 🖼️  IMAGE: Your QR code is stored at:");
		console.log(`   ${TEST_CONFIG.imageUrl}`);
		console.log("");
		console.log("2. 📄 METADATA: JSON file is stored at:");
		console.log(`   ${metadataUrl}`);
		console.log("");
		console.log("3. 🔗 TOKEN URI: NFT contract should point to:");
		console.log(`   ${metadataUrl} (NOT the image URL)`);
		console.log("");
		console.log("4. 🎯 RESULT: When someone views the NFT:");
		console.log("   - Contract reads tokenURI → Gets metadata JSON");
		console.log("   - Metadata JSON contains image URL");
		console.log("   - Marketplace displays the image from that URL");
		console.log("");

		// 5. Test the metadata URL
		console.log("🧪 Testing metadata URL...");
		try {
			const metadataResponse = await fetch(metadataUrl);
			if (metadataResponse.ok) {
				const fetchedMetadata = await metadataResponse.json();
				console.log("✅ Metadata URL works! Fetched:");
				console.log(JSON.stringify(fetchedMetadata, null, 2));
			} else {
				console.log("❌ Metadata URL not accessible");
			}
		} catch (error) {
			console.log("❌ Error fetching metadata:", error.message);
		}

		console.log("\n🎯 Summary:");
		console.log("============");
		console.log("• Your QR code image: ✅ Stored on IPFS");
		console.log("• Metadata JSON: ✅ Uploaded to IPFS");
		console.log("• NFT contract: ❌ Currently points to image URL (wrong)");
		console.log("• NFT contract: ✅ Should point to metadata URL");
		console.log("");
		console.log("💡 This is why your NFT shows a placeholder!");
		console.log("   The contract needs to point to the metadata JSON,");
		console.log("   not directly to the image.");

		return {
			imageUrl: TEST_CONFIG.imageUrl,
			metadataUrl: metadataUrl,
			metadataHash: metadataHash,
			metadata: metadata,
		};
	} catch (error) {
		console.error("❌ Test Failed:", error.message);
		throw error;
	}
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
	testMetadataStructure()
		.then((result) => {
			console.log("\n🎊 Test completed!");
			console.log("Now you understand why the two-step process is necessary.");
			process.exit(0);
		})
		.catch((error) => {
			console.error("\n💥 Test failed!");
			process.exit(1);
		});
}

export { testMetadataStructure, TEST_CONFIG };
