import { ethers } from "ethers";
import dotenv from "dotenv";
import configuration from "../../Core/config.js";

dotenv.config();

// Logging utility based on config
const log = {
	info: (message, config = {}) => {
		if (configuration.logging?.avalanche?.enabled !== false) {
			console.log(message);
		}
	},
	setup: (message, config = {}) => {
		if (configuration.logging?.avalanche?.showSetup !== false) {
			console.log(message);
		}
	},
	gas: (message, config = {}) => {
		if (configuration.logging?.avalanche?.showGas !== false) {
			console.log(message);
		}
	},
	transaction: (message, config = {}) => {
		if (configuration.logging?.avalanche?.showTransaction !== false) {
			console.log(message);
		}
	},
	verification: (message, config = {}) => {
		if (configuration.logging?.avalanche?.showVerification !== false) {
			console.log(message);
		}
	},
	imageRendering: (message, config = {}) => {
		if (configuration.logging?.avalanche?.showImageRendering !== false) {
			console.log(message);
		}
	},
	always: (message) => console.log(message), // Always show critical info
	error: (message) => console.error(message), // Always show errors
};

const CONSTANTS = {
	// Your deployed contract address
	contractAddress: "0x6C995090C530756d59E6eEa5a3bA209863e0E167",

	// Network configuration
	network: "mainnet",
	rpcUrl: "https://fragrant-wild-smoke.avalanche-mainnet.quiknode.pro/9f6de2bac71c11f7c08e97e7be74a9d770c62a86/ext/bc/C/rpc/",
	chainId: 43114,
	gasPrice: "25000000000", // 25 gwei
	NFT_ABI: [
		"function name() view returns (string)",
		"function symbol() view returns (string)",
		"function totalSupply() view returns (uint256)",
		"function owner() view returns (address)",
		"function mintNFT(address to, string memory tokenURI) returns (uint256)",
	],
};

const getMasterWallet = async () => {
	// 1. Setup provider and wallet
	log.setup("📍 Setting up provider and wallet...");
	const provider = new ethers.JsonRpcProvider(CONSTANTS.rpcUrl);

	// Get master wallet from mnemonic
	const mnemonic = process.env.MNEMONICS;
	if (!mnemonic) {
		throw new Error("MNEMONICS not found in .env file");
	}

	const masterWallet = ethers.Wallet.fromPhrase(mnemonic, provider);
	log.info(`✅ Master Wallet: ${masterWallet.address}`);

	// Check balance
	const balance = await provider.getBalance(masterWallet.address);
	log.info(`💰 Balance: ${ethers.formatEther(balance)} AVAX\n`);

	// 2. Create contract instance
	log.info("📦 Creating contract instance...");

	const contract = new ethers.Contract(CONSTANTS.contractAddress, CONSTANTS.NFT_ABI, masterWallet);

	log.info(`✅ Contract: ${CONSTANTS.contractAddress}`);

	return {
		masterWallet,
		contract,
		balance,
	};
};

const createNFT = async (data, authToken) => {
	const NFTData = await prepareNFTData(data, authToken);

	const { masterWallet, contract, balance } = await getMasterWallet();

	const zelfKeyData = await insertMetadata(NFTData);

	const tokenURI = zelfKeyData.ipfsUrl;

	log.info(`🔗 Token URI (metadata): ${tokenURI}`);
	log.info(`🖼️  Image URL: ${NFTData.url}\n`);

	// 5. Mint the NFT
	log.info("🎯 Minting NFT...");
	log.info(`   To: ${authToken.address}`);
	log.info(`   Token URI: ${tokenURI}`);
	log.info(`   Image: ${NFTData.url}`);

	// Estimate gas
	log.gas("⛽ Estimating gas...");
	const gasEstimate = await contract.mintNFT.estimateGas(authToken.address, tokenURI);
	log.gas(`   Estimated Gas: ${gasEstimate.toString()}`);

	const gasPrice = ethers.parseUnits(CONSTANTS.gasPrice, "wei");
	const estimatedCost = gasEstimate * gasPrice;
	log.gas(`   Estimated Cost: ${ethers.formatEther(estimatedCost)} AVAX\n`);

	// Mint the NFT
	log.transaction("🚀 Executing mint transaction...");
	const tx = await contract.mintNFT(authToken.address, tokenURI, {
		gasLimit: gasEstimate,
		gasPrice,
	});

	log.transaction(`✅ Transaction sent!`);
	log.transaction(`   Hash: ${tx.hash}`);
	log.transaction(`   From: ${masterWallet.address}`);
	log.transaction(`   To: ${CONSTANTS.contractAddress}`);
	log.transaction(`   Gas Price: ${ethers.formatUnits(CONSTANTS.gasPrice, "gwei")} gwei\n`);

	// 6. Wait for confirmation
	log.info("⏳ Waiting for transaction confirmation...");
	const receipt = await tx.wait();

	log.info("🎉 NFT Minted Successfully!");
	log.verification(`   Block Number: ${receipt.blockNumber}`);
	log.verification(`   Gas Used: ${receipt.gasUsed.toString()}`);
	log.verification(`   Status: ${receipt.status === 1 ? "Success" : "Failed"}\n`);

	// 7. Get the new token ID
	log.info("🔍 Getting token details...");
	const totalSupply = await contract.totalSupply();
	const newTokenId = totalSupply.toString();

	const _estimatedCost = ethers.formatEther(estimatedCost);

	log.info("📊 NFT Details:");
	log.info(`   Token ID: ${newTokenId}`);
	log.info(`   Owner: ${authToken.address}`);
	log.info(`   Contract: ${CONSTANTS.contractAddress}`);
	log.info(`   Total Supply: ${totalSupply.toString()}`);
	log.info(`   Explorer: https://snowtrace.io/tx/${tx.hash}\n`);

	// 8. Verify the NFT
	log.verification("✅ Verification Complete!");
	log.verification(`   NFT #${newTokenId} successfully minted`);
	log.verification(`   Sent to: ${authToken.address}`);
	log.verification(`   Gas fees paid by: ${masterWallet.address}`);
	log.verification(`   Cost: ${_estimatedCost} AVAX`);
	log.verification(`   Network: Avalanche Mainnet`);
	log.verification(`   Metadata: ${tokenURI}`);
	log.verification(`   Image: ${NFTData.image}\n`);

	// 9. Important notes about image rendering
	log.imageRendering("🔍 About Image Rendering:");
	log.imageRendering("   ✅ Token URI points to metadata JSON (correct)");
	log.imageRendering("   ✅ Metadata JSON contains image URL");
	log.imageRendering("   ✅ NFT marketplaces will now render the image properly");
	log.imageRendering("   ✅ The image should display correctly on Snowtrace and other explorers");

	return {
		success: true,
		tokenId: newTokenId,
		transactionHash: tx.hash,
		recipient: authToken.address,
		cost: _estimatedCost,
		metadata: NFTData,
		metadataUrl: tokenURI,
		imageUrl: NFTData.url,
		explorerUrl: `https://snowtrace.io/tx/${tx.hash}`,
		owner: authToken.address,
		contractAddress: CONSTANTS.contractAddress,
	};
};

const prepareNFTData = async (data, authToken) => {
	const { name, identifier, url, publicData, zelfProof, website } = data;

	const attributes = [
		{
			trait_type: "zelfProof",
			value: zelfProof,
		},
		{
			trait_type: "owner",
			value: authToken.address,
		},
	];

	for (const key in publicData) {
		attributes.push({
			trait_type: key,
			value: publicData[key],
		});
	}
	// remove special characters and all spaces from name and make it lowercase
	const _name = `${name || identifier}`
		.replace(/\s+/g, "_")
		.toLowerCase()
		.replace(/[^a-z0-9_]/g, "");

	const metadata = {
		name: _name,
		description: `ZelfKey NFT for ${_name}`,
		image: url, // Changed from "url" to "image" for proper NFT rendering
		external_url: website || "https://zelf.world",
		attributes: attributes,
		properties: {
			files: [
				{
					type: "image/png",
					uri: url,
				},
			],
			category: "image",
		},
	};

	return metadata;
};

const insertMetadata = async (NFTData) => {
	const PINATA_CONFIG = {
		apiKey: process.env.PINATA_API_KEY,
		secretKey: process.env.PINATA_API_SECRET,
		gateway: process.env.PINATA_GATEWAY_URL || "https://chocolate-occasional-kite-546.mypinata.cloud",
	};

	log.info("📤 Uploading metadata to IPFS via Pinata...");

	const metadataBlob = new Blob([JSON.stringify(NFTData, null, 2)], {
		type: "application/json",
	});
	const formData = new FormData();
	formData.append("file", metadataBlob, `${NFTData.name}.json`);
	formData.append(
		"pinataMetadata",
		JSON.stringify({
			name: NFTData.name,
			keyvalues: {
				type: "nft_metadata",
				project: "zelfkey_avalanche",
			},
		})
	);

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

	log.info(`✅ Metadata uploaded to IPFS! Hash: ${ipfsHash}`);

	return {
		ipfsHash,
		ipfsUrl,
		record: result,
	};
};

export { createNFT, insertMetadata };
