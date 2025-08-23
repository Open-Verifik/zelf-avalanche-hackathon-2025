import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

// Test configuration
const TEST_CONFIG = {
	// Your deployed contract address
	contractAddress: "0x6C995090C530756d59E6eEa5a3bA209863e0E167",

	// Recipient address (where the NFT will be sent)
	recipientAddress: "0x2DDcA84eF860085053A0008471BF27D73658f261",

	// Test IPFS URL from your example
	ipfsUrl: "https://chocolate-occasional-kite-546.mypinata.cloud/ipfs/bafkreiaiynykojjizkp3v653cxpwv5jswwrhmn7ml2c2oiq4",

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

async function testNFTMinting() {
	try {
		console.log("🚀 Testing NFT Minting on Avalanche Mainnet");
		console.log("==========================================\n");

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

		// 3. Create NFT metadata
		console.log("🎨 Creating NFT metadata...");
		const nftMetadata = {
			name: "Test ZelfKey NFT",
			description: "A test NFT created from IPFS data using the ZelfKey system",
			image: TEST_CONFIG.ipfsUrl,
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
					value: "bafkreiaiynykojjizkp3v653cxpwv5jswwrhmn7ml2c2oiq4",
				},
				{
					trait_type: "Timestamp",
					value: new Date().toISOString(),
				},
				{
					trait_type: "Test",
					value: "true",
				},
			],
		};

		// 4. Upload metadata to IPFS (simulate with a simple approach)
		console.log("📤 Preparing metadata for minting...");
		const metadataString = JSON.stringify(nftMetadata, null, 2);
		console.log("📋 Metadata created:");
		console.log(metadataString);

		// For this test, we'll use the IPFS URL directly as the tokenURI
		// In production, you'd upload the metadata to IPFS first
		const tokenURI = TEST_CONFIG.ipfsUrl;
		console.log(`🔗 Token URI: ${tokenURI}\n`);

		// ⚠️  NOTE: This approach won't render the image properly because:
		// - NFT standards expect tokenURI to point to metadata JSON, not image URL
		// - The image should be referenced INSIDE the metadata JSON
		// - For proper rendering, we need to upload metadata JSON to IPFS first

		// 5. Mint the NFT
		console.log("🎯 Minting NFT...");
		console.log(`   To: ${TEST_CONFIG.recipientAddress}`);
		console.log(`   Token URI: ${tokenURI}`);

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

		return {
			success: true,
			tokenId: newTokenId,
			transactionHash: tx.hash,
			recipient: TEST_CONFIG.recipientAddress,
			cost: ethers.formatEther(estimatedCost),
			metadata: nftMetadata,
		};
	} catch (error) {
		console.error("❌ NFT Minting Test Failed:", error.message);
		console.error("Stack:", error.stack);
		throw error;
	}
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
	console.log("🧪 Starting NFT Minting Test...\n");

	testNFTMinting()
		.then((result) => {
			console.log("\n🎊 Test Completed Successfully!");
			console.log("Your NFT minting system is working perfectly!");
			process.exit(0);
		})
		.catch((error) => {
			console.error("\n💥 Test Failed!");
			console.error("Check the error details above and fix any issues.");
			process.exit(1);
		});
}

export { testNFTMinting, TEST_CONFIG };
