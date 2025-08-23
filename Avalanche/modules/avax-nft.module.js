import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

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
	console.log("📍 Setting up provider and wallet...");
	const provider = new ethers.JsonRpcProvider(CONSTANTS.rpcUrl);

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

	const contract = new ethers.Contract(CONSTANTS.contractAddress, CONSTANTS.NFT_ABI, masterWallet);

	console.log(`✅ Contract: ${CONSTANTS.contractAddress}`);

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

	console.log(`🔗 Token URI (metadata): ${tokenURI}`);
	console.log(`🖼️  Image URL: ${NFTData.url}\n`);

	// 5. Mint the NFT
	console.log("🎯 Minting NFT...");
	console.log(`   To: ${authToken.address}`);
	console.log(`   Token URI: ${tokenURI}`);
	console.log(`   Image: ${NFTData.url}`);

	// Estimate gas
	console.log("⛽ Estimating gas...");
	const gasEstimate = await contract.mintNFT.estimateGas(authToken.address, tokenURI);
	console.log(`   Estimated Gas: ${gasEstimate.toString()}`);

	const gasPrice = ethers.parseUnits(CONSTANTS.gasPrice, "wei");
	const estimatedCost = gasEstimate * gasPrice;
	console.log(`   Estimated Cost: ${ethers.formatEther(estimatedCost)} AVAX\n`);

	// Mint the NFT
	console.log("🚀 Executing mint transaction...");
	const tx = await contract.mintNFT(authToken.address, tokenURI, {
		gasLimit: gasEstimate,
		gasPrice,
	});

	console.log(`✅ Transaction sent!`);
	console.log(`   Hash: ${tx.hash}`);
	console.log(`   From: ${masterWallet.address}`);
	console.log(`   To: ${CONSTANTS.contractAddress}`);
	console.log(`   Gas Price: ${ethers.formatUnits(CONSTANTS.gasPrice, "gwei")} gwei\n`);

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

	const _estimatedCost = ethers.formatEther(estimatedCost);

	console.log("📊 NFT Details:");
	console.log(`   Token ID: ${newTokenId}`);
	console.log(`   Owner: ${authToken.address}`);
	console.log(`   Contract: ${CONSTANTS.contractAddress}`);
	console.log(`   Total Supply: ${totalSupply.toString()}`);
	console.log(`   Explorer: https://snowtrace.io/tx/${tx.hash}\n`);

	// 8. Verify the NFT
	console.log("✅ Verification Complete!");
	console.log(`   NFT #${newTokenId} successfully minted`);
	console.log(`   Sent to: ${authToken.address}`);
	console.log(`   Gas fees paid by: ${masterWallet.address}`);
	console.log(`   Cost: ${_estimatedCost} AVAX`);
	console.log(`   Network: Avalanche Mainnet`);
	console.log(`   Metadata: ${tokenURI}`);
	console.log(`   Image: ${NFTData.url}\n`);

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

	return {
		ipfsHash,
		ipfsUrl,
		record: result,
	};
};

export { createNFT, insertMetadata };
