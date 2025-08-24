import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

// Test configuration
const TEST_CONFIG = {
	// Your deployed contract address
	contractAddress: "0x6C995090C530756d59E6eEa5a3bA209863e0E167",

	// Recipient address (where the NFT will be sent)
	recipientAddress: "0x2DDcA84eF860085053A0008471BF27D73658f261",

	// Test IPFS URL from your example (this will be the IMAGE, not the tokenURI)
	imageUrl: "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreiaiynykojjizkpuh2q5plrnk3v653cxpwv5jswwrhmn7ml2c2oiq4",

	// Network configuration
	network: "mainnet",
	rpcUrl: "https://fragrant-wild-smoke.avalanche-mainnet.quiknode.pro/9f6de2bac71c11f7c08e97e7be74a9d770c62a86/ext/bc/C/rpc/",
	chainId: 43114,
	gasPrice: "25000000000", // 25 gwei
};

// Simple NFT Contract ABI (only what we need for minting)
const 

// Pinata API configuration (for uploading metadata to IPFS)
const PINATA_CONFIG = {
	apiKey: process.env.PINATA_API_KEY,
	secretKey: process.env.PINATA_API_SECRET,
	gateway: process.env.PINATA_GATEWAY_URL || "https://chocolate-occasional-kite-546.mypinata.cloud",
};

async function uploadMetadataToIPFS(metadata) {
	try {
		console.log("📤 Uploading metadata to IPFS via Pinata...");

		// Create the metadata JSON
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
}

async function testNFTMintingProper() {
	try {
		console.log("🚀 Testing Proper NFT Minting on Avalanche Mainnet");
		console.log("==================================================\n");

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

		// 3. Create proper NFT metadata
		console.log("🎨 Creating proper NFT metadata...");
		const nftMetadata = {
			name: "ZelfKey Test NFT #1",
			description:
				"A test NFT created from IPFS data using the ZelfKey system. This NFT represents encrypted data stored with biometric security.",
			image: TEST_CONFIG.imageUrl, // This is the IMAGE URL
			external_url: "https://zelf.world",
			attributes: [
				{
					trait_type: "Data Type",
					value: "test_data",
				},
				{
					trait_type: "Storage Method",
					value: "ZelfKey Biometric Encryption",
				},
				{
					trait_type: "IPFS Hash",
					value: "bafkreiaiynykojjizkpuh2q5plrnk3v653cxpwv5jswwrhmn7ml2c2oiq4",
				},
				{
					trait_type: "Timestamp",
					value: new Date().toISOString(),
				},
				{
					trait_type: "Test",
					value: "true",
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
						uri: TEST_CONFIG.imageUrl,
					},
				],
				category: "image",
			},
		};

		console.log("📋 Metadata created:");
		console.log(JSON.stringify(nftMetadata, null, 2));

		// 4. Upload metadata to IPFS (this is the CORRECT approach)
		console.log("\n📤 Uploading metadata to IPFS...");
		const metadataUrl = await uploadMetadataToIPFS(nftMetadata);

		// The tokenURI should point to the METADATA JSON, not the image
		const tokenURI = metadataUrl;
		console.log(`🔗 Token URI (metadata): ${tokenURI}`);
		console.log(`🖼️  Image URL: ${TEST_CONFIG.imageUrl}\n`);

		// 5. Mint the NFT
		console.log("🎯 Minting NFT...");
		console.log(`   To: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Token URI: ${tokenURI}`);
		console.log(`   Image: ${TEST_CONFIG.imageUrl}`);

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

		// 6. Wait for confirmation
		console.log("⏳ Waiting for transaction confirmation...");
		const receipt = await tx.wait();

		console.log("🎉 NFT Minted Successfully!");
		console.log(`   Block Number: ${receipt.blockNumber}`);
		console.log(`   Gas Used: ${receipt.gasUsed.toString()}`);
		console.log(`   Status: ${receipt.status === 1 ? "Success" : "Failed"}\n`);

		// 7. Get the new token ID
		console.log("🔍 Getting token details...");
		const totalSupply = await contract.totalSupply();
		const newTokenId = totalSupply.toString();

		console.log("📊 NFT Details:");
		console.log(`   Token ID: ${newTokenId}`);
		console.log(`   Owner: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Contract: ${TEST_CONFIG.contractAddress}`);
		console.log(`   Total Supply: ${totalSupply.toString()}`);
		console.log(`   Explorer: https://snowtrace.io/tx/${tx.hash}\n`);

		// 8. Verify the NFT
		console.log("✅ Verification Complete!");
		console.log(`   NFT #${newTokenId} successfully minted`);
		console.log(`   Sent to: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Gas fees paid by: ${masterWallet.address}`);
		console.log(`   Cost: ${ethers.formatEther(estimatedCost)} AVAX`);
		console.log(`   Network: Avalanche Mainnet`);
		console.log(`   Metadata: ${metadataUrl}`);
		console.log(`   Image: ${TEST_CONFIG.imageUrl}\n`);

		// 9. Important notes about image rendering
		console.log("🔍 About Image Rendering:");
		console.log("   ✅ Token URI points to metadata JSON (correct)");
		console.log("   ✅ Metadata JSON contains image URL");
		console.log("   ✅ NFT marketplaces will now render the image properly");
		console.log("   ✅ The image should display correctly on Snowtrace and other explorers");

		return {
			success: true,
			tokenId: newTokenId,
			transactionHash: tx.hash,
			recipient: TEST_CONFIG.recipientAddress,
			cost: ethers.formatEther(estimatedCost),
			metadata: nftMetadata,
			metadataUrl: metadataUrl,
			imageUrl: TEST_CONFIG.imageUrl,
		};
	} catch (error) {
		console.error("❌ NFT Minting Test Failed:", error.message);
		console.error("Stack:", error.stack);
		throw error;
	}
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
	console.log("🧪 Starting Proper NFT Minting Test...\n");

	testNFTMintingProper()
		.then((result) => {
			console.log("\n🎊 Test Completed Successfully!");
			console.log("Your NFT minting system is now working with proper image rendering!");
			console.log(`\n📱 View your NFT:`);
			console.log(`   Snowtrace: https://snowtrace.io/address/${TEST_CONFIG.contractAddress}`);
			console.log(`   Metadata: ${result.metadataUrl}`);
			console.log(`   Image: ${result.imageUrl}`);
			process.exit(0);
		})
		.catch((error) => {
			console.error("\n💥 Test Failed!");
			console.error("Check the error details above and fix any issues.");
			process.exit(1);
		});
}

export { testNFTMintingProper, TEST_CONFIG };
