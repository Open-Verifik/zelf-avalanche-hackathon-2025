const AvalancheNFTModule = require("./modules/avalanche-nft.module");

/**
 * Test file for Avalanche NFT Module
 * Demonstrates how to use the module with master wallet (gas fees covered by service)
 *
 * Note: This is for demonstration purposes only.
 * In production, the master wallet from .env pays for all gas fees.
 */

console.log("🚀 Avalanche NFT Module Test (Master Wallet - Mainnet)");
console.log("=======================================================\n");

// Sample ZelfKey data (simulating what you'd get from storing data)
const sampleZelfKeyData = {
	publicData: {
		type: "website_password",
		website: "github.com",
		username: "***com",
		timestamp: "2025-01-15T10:30:00.000Z",
	},
	ipfs: {
		hash: "QmX1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd",
		gatewayUrl: "https://ipfs.io/ipfs/QmX1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcd",
		pinSize: 12345,
	},
	message: "Website password stored successfully as QR code and zelfProof string",
	success: true,
	zelfProof: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
	zelfQR: "encrypted_string_here",
};

// Sample notes data
const sampleNotesData = {
	publicData: {
		type: "notes",
		title: "API Keys Collection",
		pairCount: 3,
		timestamp: "2025-01-15T11:00:00.000Z",
	},
	ipfs: {
		hash: "QmY9876543210fedcba9876543210fedcba9876543210fedcba9876543210",
		gatewayUrl: "https://ipfs.io/ipfs/QmY9876543210fedcba9876543210fedcba9876543210fedcba9876543210",
		pinSize: 9876,
	},
	message: "Notes stored successfully",
	success: true,
	zelfProof: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
	zelfQR: "encrypted_string_here",
};

// Sample credit card data
const sampleCreditCardData = {
	publicData: {
		type: "credit_card",
		cardName: "John Doe",
		cardNumber: "****-****-****-1111",
		expiryMonth: "12",
		expiryYear: "2028",
		bankName: "Chase Bank",
		timestamp: "2025-01-15T12:00:00.000Z",
	},
	ipfs: {
		hash: "QmZ555555555555555555555555555555555555555555555555555555555555",
		gatewayUrl: "https://ipfs.io/ipfs/QmZ555555555555555555555555555555555555555555555555555555555555",
		pinSize: 5432,
	},
	message: "Credit card stored successfully",
	success: true,
	zelfProof: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
	zelfQR: "encrypted_string_here",
};

async function testAvalancheNFTModule() {
	try {
		console.log("1. 📋 Testing NFT Metadata Creation");
		console.log("-----------------------------------");

		// Test metadata creation for different data types
		const passwordMetadata = AvalancheNFTModule.createNFTMetadata(
			sampleZelfKeyData,
			sampleZelfKeyData.ipfs.hash,
			sampleZelfKeyData.ipfs.gatewayUrl
		);

		const notesMetadata = AvalancheNFTModule.createNFTMetadata(sampleNotesData, sampleNotesData.ipfs.hash, sampleNotesData.ipfs.gatewayUrl);

		const creditCardMetadata = AvalancheNFTModule.createNFTMetadata(
			sampleCreditCardData,
			sampleCreditCardData.ipfs.hash,
			sampleCreditCardData.ipfs.gatewayUrl
		);

		console.log("✅ Password NFT Metadata:");
		console.log(`   Name: ${passwordMetadata.name}`);
		console.log(`   Description: ${passwordMetadata.description}`);
		console.log(`   Image: ${passwordMetadata.image}`);
		console.log(`   Attributes: ${passwordMetadata.attributes.length} attributes`);
		console.log(`   IPFS Hash: ${passwordMetadata.attributes.find((attr) => attr.trait_type === "IPFS Hash")?.value}`);

		console.log("\n✅ Notes NFT Metadata:");
		console.log(`   Name: ${notesMetadata.name}`);
		console.log(`   Title: ${notesMetadata.attributes.find((attr) => attr.trait_type === "Title")?.value}`);
		console.log(`   Key-Value Pairs: ${notesMetadata.attributes.find((attr) => attr.trait_type === "Key-Value Pairs")?.value}`);

		console.log("\n✅ Credit Card NFT Metadata:");
		console.log(`   Name: ${creditCardMetadata.name}`);
		console.log(`   Card Name: ${creditCardMetadata.attributes.find((attr) => attr.trait_type === "Card Name")?.value}`);
		console.log(`   Bank: ${creditCardMetadata.attributes.find((attr) => attr.trait_type === "Bank")?.value}`);

		console.log("\n2. 🌐 Testing Network Configuration");
		console.log("----------------------------------");

		const networks = Object.keys(AvalancheNFTModule.AVALANCHE_CONFIG).map((network) => ({
			name: network,
			...AvalancheNFTModule.AVALANCHE_CONFIG[network],
		}));

		networks.forEach((network) => {
			console.log(`✅ ${network.name.toUpperCase()}:`);
			console.log(`   RPC URL: ${network.rpcUrl}`);
			console.log(`   Chain ID: ${network.chainId}`);
			console.log(`   Explorer: ${network.explorer}`);
			console.log(`   Gas Price: ${network.gasPrice} wei`);
		});

		console.log("\n3. 📜 Testing Contract ABI");
		console.log("----------------------------");

		console.log(`✅ ERC-721 ABI Functions: ${AvalancheNFTModule.ERC721_ABI.length} functions`);
		console.log("   Available functions:");
		AvalancheNFTModule.ERC721_ABI.forEach((func, index) => {
			console.log(`   ${index + 1}. ${func}`);
		});

		console.log("\n4. 🔄 Testing Batch Metadata Creation");
		console.log("--------------------------------------");

		const batchData = [sampleZelfKeyData, sampleNotesData, sampleCreditCardData];
		console.log(`✅ Created metadata for ${batchData.length} different data types`);

		batchData.forEach((data, index) => {
			const metadata = AvalancheNFTModule.createNFTMetadata(data, data.ipfs.hash, data.ipfs.gatewayUrl);
			console.log(`   ${index + 1}. ${metadata.name} - ${data.publicData.type}`);
		});

		console.log("\n5. 📊 Metadata Structure Analysis");
		console.log("---------------------------------");

		const sampleMetadata = passwordMetadata;
		console.log("✅ NFT Metadata Structure:");
		console.log(`   - Name: ${sampleMetadata.name}`);
		console.log(`   - Description: ${sampleMetadata.description}`);
		console.log(`   - Image: ${sampleMetadata.image}`);
		console.log(`   - External URL: ${sampleMetadata.external_url}`);
		console.log(`   - Attributes: ${sampleMetadata.attributes.length} total`);
		console.log(`   - Properties: ${Object.keys(sampleMetadata.properties).length} categories`);

		console.log("\n   📋 Attributes Breakdown:");
		sampleMetadata.attributes.forEach((attr, index) => {
			console.log(`     ${index + 1}. ${attr.trait_type}: ${attr.value}`);
		});

		console.log("\n   🗂️  Properties Breakdown:");
		Object.entries(sampleMetadata.properties).forEach(([key, value]) => {
			if (typeof value === "object") {
				console.log(`     - ${key}: ${Object.keys(value).length} sub-properties`);
			} else {
				console.log(`     - ${key}: ${value}`);
			}
		});

		console.log("\n6. 🚨 Error Handling Test");
		console.log("---------------------------");

		// Test with invalid data
		try {
			const invalidMetadata = AvalancheNFTModule.createNFTMetadata({ publicData: { type: "invalid_type" } }, "invalid_hash", "invalid_url");
			console.log("✅ Invalid data handled gracefully");
		} catch (error) {
			console.log(`❌ Error handling test failed: ${error.message}`);
		}

		console.log("\n7. 🎯 Master Wallet Integration Example (Mainnet)");
		console.log("--------------------------------------------------");

		console.log("✅ Here's how the new master wallet system works on mainnet:");
		console.log(`
// 1. Store data with ZelfKey (existing functionality)
const zelfKeyResult = await ZelfKeyModule.storePassword({
    website: "github.com",
    username: "user@email.com", 
    password: "securepass123",
    faceBase64: "...",
    masterPassword: "..."
});

// 2. Mint NFT using master wallet on mainnet (gas fees covered by service)
const nftResult = await AvalancheNFTModule.mintNFTFromZelfKey({
    zelfKeyData: zelfKeyResult,
    recipientAddress: "0x1234...", // User's address to receive NFT
    contractAddress: "0x5678...",  // NFT contract address
    network: "mainnet"              // Use Avalanche mainnet (default)
});

// 3. NFT is now on Avalanche mainnet!
console.log("NFT Token ID:", nftResult.tokenId);
console.log("Transaction Hash:", nftResult.transactionHash);
console.log("Recipient Address:", nftResult.recipientAddress);
console.log("Master Wallet Address:", nftResult.masterWalletAddress);
console.log("Network: Mainnet");
console.log("Explorer URL:", nftResult.explorerUrl);
		`);

		console.log("\n8. 🔑 Master Wallet Configuration (Mainnet)");
		console.log("--------------------------------------------");

		console.log("✅ To use this module on mainnet, you need to set up your .env file:");
		console.log(`
# Required: Master wallet credentials
MNEMONICS="your twelve or twenty four word mnemonic phrase here"

# Optional: Network and gas configuration (defaults to mainnet)
NETWORK=mainnet
GAS_PRICE=25000000000
		`);

		console.log("\n9. 📝 API Usage Examples (Mainnet)");
		console.log("-----------------------------------");

		console.log("✅ API Endpoints now default to mainnet:");
		console.log(`
POST /api/avalanche-nft/mint
{
    "zelfKeyData": {...},
    "recipientAddress": "0x1234...",
    "contractAddress": "0x5678...",
    "network": "mainnet"  // Optional, defaults to mainnet
}

POST /api/avalanche-nft/batch-mint
{
    "zelfKeyDataArray": [...],
    "recipientAddress": "0x1234...",
    "contractAddress": "0x5678...",
    "network": "mainnet"  // Optional, defaults to mainnet
}

POST /api/avalanche-nft/master-wallet
{
    "network": "mainnet"  // Optional, defaults to mainnet
}
		`);

		console.log("\n🎉 All tests completed successfully!");
		console.log("\n📚 Next Steps (Mainnet):");
		console.log("   1. Copy env.template to .env and add your mnemonic phrase");
		console.log("   2. Ensure your master wallet has real AVAX for gas fees");
		console.log("   3. Deploy an NFT contract on Avalanche mainnet");
		console.log("   4. Test minting with real blockchain interaction");
		console.log("   5. Verify NFTs on Snowtrace mainnet explorer");
		console.log("\n💡 Key Benefits of Master Wallet System (Mainnet):");
		console.log("   - Users don't need to provide private keys or mnemonics");
		console.log("   - Gas fees are covered by your service");
		console.log("   - Simplified API for end users");
		console.log("   - Better security (no private key exposure)");
		console.log("   - Centralized gas fee management");
		console.log("   - Production-ready on Avalanche mainnet");
		console.log("\n⚠️  Important Mainnet Notes:");
		console.log("   - All operations use real AVAX (not test tokens)");
		console.log("   - Gas fees are paid in real AVAX");
		console.log("   - Transactions are permanent and irreversible");
		console.log("   - Use real contracts and addresses");
	} catch (error) {
		console.error("❌ Test failed:", error);
	}
}

// Run the test
testAvalancheNFTModule().catch(console.error);
