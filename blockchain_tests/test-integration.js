import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

// Test configuration
const TEST_CONFIG = {
	// Your deployed contract address
	contractAddress: "0x6C995090C530756d59E6eEa5a3bA209863e0E167",

	// Recipient address (where the NFT will be sent)
	recipientAddress: "0x2DDcA84eF860085053A0008471BF27D73658f261",

	// Network configuration
	network: "mainnet",
	rpcUrl: "https://fragrant-wild-smoke.avalanche-mainnet.quiknode.pro/9f6de2bac71c11f7c08e97e7be74a9d770c62a86/ext/bc/C/rpc/",
	chainId: 43114,
	gasPrice: "25000000000", // 25 gwei
};

// Simple NFT Contract ABI (only what we need for minting)
const NFT_ABI = [
	"function name() view returns (string)",
	"function symbol() view returns (string)",
	"function totalSupply() view returns (uint256)",
	"function owner() view returns (address)",
	"function mintNFT(address to, string memory tokenURI) returns (uint256)",
];

// Pinata API configuration (for uploading metadata to IPFS)
const PINATA_CONFIG = {
	apiKey: process.env.PINATA_API_KEY,
	secretKey: process.env.PINATA_API_SECRET,
	gateway: process.env.PINATA_GATEWAY_URL || "https://chocolate-occasional-kite-546.mypinata.cloud",
};

/**
 * Simulate ZelfKey data structure (in real usage, this comes from ZelfKey module)
 */
const createMockZelfKeyData = () => {
	return {
		publicData: {
			type: "website_password",
			website: "example.com",
			username: "testuser",
			timestamp: new Date().toISOString(),
		},
		ipfs: {
			hash: "bafkreiaiynykojjizkpuh2q5plrnk3v653cxpwv5jswwrhmn7ml2c2oiq4",
			gatewayUrl: "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreiaiynykojjizkpuh2q5plrnk3v653cxpwv5jswwrhmn7ml2c2oiq4",
			pinSize: 12345,
			timestamp: new Date().toISOString(),
			name: "zelfkey_password_example.com.png",
			metadata: {
				type: "website_password",
				website: "example.com",
			},
			contentType: "qr_code",
		},
		message: "Website password stored successfully as QR code",
		timestamp: new Date().toISOString(),
	};
};

/**
 * Create NFT metadata for ZelfKey data with proper structure
 * This matches the logic in avalanche-nft.module.js
 */
const createNFTMetadata = (zelfKeyData, ipfsHash, ipfsGatewayUrl) => {
	const { publicData, message, timestamp } = zelfKeyData;

	// Base metadata structure following NFT standards
	const metadata = {
		name: `ZelfKey ${publicData.type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
		description:
			message ||
			`Secure ${publicData.type.replace(
				/_/g,
				" "
			)} stored with ZelfKey biometric encryption. This NFT represents encrypted data that can only be accessed through biometric verification.`,
		image: ipfsGatewayUrl, // This points to the QR code image
		external_url: "https://zelf.world",
		attributes: [
			{
				trait_type: "Data Type",
				value: publicData.type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
			},
			{
				trait_type: "Storage Method",
				value: "ZelfKey Biometric Encryption",
			},
			{
				trait_type: "Security Level",
				value: "Maximum",
			},
			{
				trait_type: "IPFS Hash",
				value: ipfsHash,
			},
			{
				trait_type: "Timestamp",
				value: timestamp || new Date().toISOString(),
			},
			{
				trait_type: "Project",
				value: "ZelfKey Avalanche Integration",
			},
		],
		properties: {
			files: [
				{
					type: "image/png",
					uri: ipfsGatewayUrl,
				},
			],
			category: "image",
			zelfKey: {
				type: publicData.type,
				encrypted: true,
				biometric: true,
				ipfs: {
					hash: ipfsHash,
					gateway: ipfsGatewayUrl,
				},
			},
		},
	};

	// Add type-specific attributes
	switch (publicData.type) {
		case "website_password":
			metadata.attributes.push(
				{
					trait_type: "Website",
					value: publicData.website || "Unknown",
				},
				{
					trait_type: "Username",
					value: publicData.username || "Unknown",
				},
				{
					trait_type: "Security",
					value: "Biometric Protected",
				}
			);
			break;

		case "notes":
			metadata.attributes.push(
				{
					trait_type: "Title",
					value: publicData.title || "Secure Note",
				},
				{
					trait_type: "Content Type",
					value: "Encrypted Text",
				},
				{
					trait_type: "Access Method",
					value: "Face Recognition",
				}
			);
			break;

		case "credit_card":
			metadata.attributes.push(
				{
					trait_type: "Card Name",
					value: publicData.cardName || "Credit Card",
				},
				{
					trait_type: "Bank",
					value: publicData.bankName || "Unknown Bank",
				},
				{
					trait_type: "Card Type",
					value: "Encrypted",
				},
				{
					trait_type: "Security",
					value: "Biometric Locked",
				}
			);
			break;

		case "contact":
			metadata.attributes.push(
				{
					trait_type: "Contact Name",
					value: publicData.name || "Unknown Contact",
				},
				{
					trait_type: "Email",
					value: publicData.email || "No Email",
				},
				{
					trait_type: "Phone",
					value: publicData.phone || "No Phone",
				},
				{
					trait_type: "Privacy",
					value: "Biometric Protected",
				}
			);
			break;

		case "bank_details":
			metadata.attributes.push(
				{
					trait_type: "Bank Name",
					value: publicData.bankName || "Unknown Bank",
				},
				{
					trait_type: "Account Type",
					value: publicData.accountType || "Unknown",
				},
				{
					trait_type: "Account Holder",
					value: publicData.accountHolder || "Unknown",
				},
				{
					trait_type: "Security",
					value: "Face Recognition Required",
				}
			);
			break;

		default:
			// Generic attributes for unknown types
			metadata.attributes.push(
				{
					trait_type: "Content",
					value: "Encrypted Data",
				},
				{
					trait_type: "Access Control",
					value: "Biometric Only",
				}
			);
			break;
	}

	return metadata;
};

/**
 * Upload metadata JSON to IPFS via Pinata
 * This matches the logic in avalanche-nft.module.js
 */
const uploadMetadataToIPFS = async (metadata) => {
	try {
		console.log("📤 Uploading metadata to IPFS via Pinata...");

		// Create the metadata JSON blob
		const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], {
			type: "application/json",
		});

		// Create FormData for Pinata
		const formData = new FormData();
		formData.append("file", metadataBlob, "zelfkey-nft-metadata.json");
		formData.append(
			"pinataMetadata",
			JSON.stringify({
				name: "ZelfKey NFT Metadata",
				keyvalues: {
					type: "nft_metadata",
					project: "zelfkey_avalanche",
					timestamp: new Date().toISOString(),
				},
			})
		);

		// Upload to Pinata
		const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
			method: "POST",
			headers: {
				pinata_api_key: PINATA_CONFIG.apiKey,
				pinata_secret_api_key: PINATA_CONFIG.secretKey,
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`Pinata upload failed: ${response.status} ${response.statusText}`);
		}

		const result = await response.json();
		const ipfsHash = result.IpfsHash;
		const ipfsUrl = `https://${PINATA_CONFIG.gateway}/ipfs/${ipfsHash}`;

		console.log(`✅ Metadata uploaded to IPFS!`);
		console.log(`   Hash: ${ipfsHash}`);
		console.log(`   URL: ${ipfsUrl}`);

		return ipfsUrl;
	} catch (error) {
		console.error("❌ Failed to upload metadata to IPFS:", error.message);
		throw error;
	}
};

/**
 * Test the complete ZelfKey → IPFS → NFT integration
 */
async function testCompleteIntegration() {
	try {
		console.log("🚀 Testing Complete ZelfKey → IPFS → NFT Integration");
		console.log("====================================================\n");

		// 1. Setup provider and wallet
		console.log("📍 Setting up provider and wallet...");
		const provider = new ethers.JsonRpcProvider(TEST_CONFIG.rpcUrl);

		// Get master wallet from mnemonic
		const mnemonic = process.env.MNEMONICS;
		if (!mnemonic) {
			throw new Error("MNEMONICS not found in .env file");
		}

		const masterWallet = ethers.Wallet.fromPhrase(mnemonic, provider);
		console.log(`✅ Master Wallet: ${masterWallet.address}`);

		// Check balance
		const balance = await provider.getBalance(masterWallet.address);
		console.log(`💰 Balance: ${ethers.formatEther(balance)} AVAX\n`);

		// 2. Create contract instance
		console.log("📦 Creating contract instance...");
		const contract = new ethers.Contract(TEST_CONFIG.contractAddress, NFT_ABI, masterWallet);
		console.log(`✅ Contract: ${TEST_CONFIG.contractAddress}`);

		// 3. Simulate ZelfKey data (in real usage, this comes from ZelfKey module)
		console.log("🔐 Simulating ZelfKey data...");
		const zelfKeyData = createMockZelfKeyData();
		console.log("✅ ZelfKey data created:");
		console.log(`   Type: ${zelfKeyData.publicData.type}`);
		console.log(`   Website: ${zelfKeyData.publicData.website}`);
		console.log(`   IPFS Hash: ${zelfKeyData.ipfs.hash}`);
		console.log(`   Gateway URL: ${zelfKeyData.ipfs.gatewayUrl}\n`);

		// 4. Create NFT metadata (using the same logic as avalanche-nft.module.js)
		console.log("🎨 Creating NFT metadata...");
		const metadata = createNFTMetadata(zelfKeyData, zelfKeyData.ipfs.hash, zelfKeyData.ipfs.gatewayUrl);
		console.log("✅ Metadata created:");
		console.log(JSON.stringify(metadata, null, 2));

		// 5. Upload metadata to IPFS (this is the CORRECT approach for image rendering)
		console.log("\n📤 Uploading metadata to IPFS...");
		const metadataUrl = await uploadMetadataToIPFS(metadata);

		// The tokenURI should point to the METADATA JSON, not the image
		// This ensures proper image rendering on NFT marketplaces
		const tokenURI = metadataUrl;
		console.log(`🔗 Token URI (metadata): ${tokenURI}`);
		console.log(`🖼️  Image URL: ${zelfKeyData.ipfs.gatewayUrl}\n`);

		// 6. Mint the NFT
		console.log("🎯 Minting NFT...");
		console.log(`   To: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Token URI: ${tokenURI}`);
		console.log(`   Image: ${zelfKeyData.ipfs.gatewayUrl}`);

		// Estimate gas
		console.log("⛽ Estimating gas...");
		const gasEstimate = await contract.mintNFT.estimateGas(TEST_CONFIG.recipientAddress, tokenURI);
		console.log(`   Estimated Gas: ${gasEstimate.toString()}`);

		// Calculate estimated cost
		const gasPrice = ethers.parseUnits(TEST_CONFIG.gasPrice, "wei");
		const estimatedCost = gasEstimate * gasPrice;
		console.log(`   Estimated Cost: ${ethers.formatEther(estimatedCost)} AVAX\n`);

		// Mint the NFT
		console.log("🚀 Executing mint transaction...");
		const tx = await contract.mintNFT(TEST_CONFIG.recipientAddress, tokenURI, {
			gasLimit: gasEstimate,
			gasPrice: gasPrice,
		});

		console.log(`✅ Transaction sent!`);
		console.log(`   Hash: ${tx.hash}`);
		console.log(`   From: ${masterWallet.address}`);
		console.log(`   To: ${TEST_CONFIG.contractAddress}`);
		console.log(`   Gas Price: ${ethers.formatUnits(gasPrice, "gwei")} gwei\n`);

		// 7. Wait for confirmation
		console.log("⏳ Waiting for transaction confirmation...");
		const receipt = await tx.wait();

		console.log("🎉 NFT Minted Successfully!");
		console.log(`   Block Number: ${receipt.blockNumber}`);
		console.log(`   Gas Used: ${receipt.gasUsed.toString()}`);
		console.log(`   Status: ${receipt.status === 1 ? "Success" : "Failed"}\n`);

		// 8. Get the new token ID
		console.log("🔍 Getting token details...");
		const totalSupply = await contract.totalSupply();
		const newTokenId = totalSupply.toString();

		console.log("📊 NFT Details:");
		console.log(`   Token ID: ${newTokenId}`);
		console.log(`   Owner: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Contract: ${TEST_CONFIG.contractAddress}`);
		console.log(`   Total Supply: ${totalSupply.toString()}`);
		console.log(`   Explorer: https://snowtrace.io/tx/${tx.hash}\n`);

		// 9. Verify the NFT
		console.log("✅ Integration Complete!");
		console.log(`   NFT #${newTokenId} successfully minted`);
		console.log(`   Sent to: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Gas fees paid by: ${masterWallet.address}`);
		console.log(`   Cost: ${ethers.formatEther(estimatedCost)} AVAX`);
		console.log(`   Network: Avalanche Mainnet`);
		console.log(`   Metadata: ${metadataUrl}`);
		console.log(`   Image: ${zelfKeyData.ipfs.gatewayUrl}\n`);

		// 10. Explain the complete flow
		console.log("🔍 Complete Integration Flow:");
		console.log("=============================");
		console.log("1. 🔐 ZelfKey Module: Creates encrypted QR code");
		console.log("2. 📤 IPFS Upload: QR code stored on IPFS via Pinata");
		console.log("3. 🎨 Metadata Creation: NFT metadata with proper structure");
		console.log("4. 📤 IPFS Upload: Metadata JSON uploaded to IPFS");
		console.log("5. 🎯 NFT Minting: NFT created with tokenURI → metadata JSON");
		console.log("6. 🖼️  Image Rendering: NFT marketplaces display image correctly");
		console.log("");
		console.log("✅ Result: Fully functional NFT with visible QR code image!");

		return {
			success: true,
			tokenId: newTokenId,
			transactionHash: tx.hash,
			recipient: TEST_CONFIG.recipientAddress,
			cost: ethers.formatEther(estimatedCost),
			metadata: metadata,
			metadataUrl: metadataUrl,
			imageUrl: zelfKeyData.ipfs.gatewayUrl,
			zelfKeyData: zelfKeyData,
		};
	} catch (error) {
		console.error("❌ Integration Test Failed:", error.message);
		console.error("Stack:", error.stack);
		throw error;
	}
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
	console.log("🧪 Starting Complete Integration Test...\n");

	testCompleteIntegration()
		.then((result) => {
			console.log("\n🎊 Integration Test Completed Successfully!");
			console.log("Your ZelfKey → IPFS → NFT pipeline is working perfectly!");
			console.log(`\n📱 View your NFT:`);
			console.log(`   Snowtrace: https://snowtrace.io/address/${TEST_CONFIG.contractAddress}`);
			console.log(`   Metadata: ${result.metadataUrl}`);
			console.log(`   Image: ${result.imageUrl}`);
			console.log(`\n🔗 Integration Points:`);
			console.log(`   ZelfKey Module: ✅ Ready for integration`);
			console.log(`   IPFS Storage: ✅ Working with Pinata`);
			console.log(`   NFT Minting: ✅ Working on Avalanche`);
			console.log(`   Image Rendering: ✅ Proper metadata structure`);
			process.exit(0);
		})
		.catch((error) => {
			console.error("\n💥 Integration Test Failed!");
			console.error("Check the error details above and fix any issues.");
			process.exit(1);
		});
}

export { testCompleteIntegration, TEST_CONFIG, createNFTMetadata, uploadMetadataToIPFS };
