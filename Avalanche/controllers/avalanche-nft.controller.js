const AvalancheNFTModule = require("../modules/avalanche-nft.module");

/**
 * Avalanche NFT Controller
 * Handles HTTP requests for NFT operations on Avalanche
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Mint NFT from ZelfKey IPFS data using master wallet
 * @param {Object} ctx - Koa context
 */
const mintNFTFromZelfKey = async (ctx) => {
	try {
		const { zelfKeyData, recipientAddress, contractAddress, network = "mainnet" } = ctx.request.body;

		// Validate required fields
		if (!zelfKeyData || !recipientAddress || !contractAddress) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Missing required fields: zelfKeyData, recipientAddress, contractAddress",
			};
			return;
		}

		// Validate recipient address format
		if (!/^0x[a-fA-F0-9]{40}$/.test(recipientAddress)) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Invalid recipient address format",
			};
			return;
		}

		// Check if IPFS data is available
		if (!zelfKeyData.ipfs || !zelfKeyData.ipfs.hash) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "No IPFS data available in ZelfKey data",
			};
			return;
		}

		// Mint NFT using master wallet
		const result = await AvalancheNFTModule.mintNFTFromZelfKey({
			zelfKeyData,
			recipientAddress,
			contractAddress,
			network,
		});

		ctx.body = result;
	} catch (error) {
		console.error("Error in mintNFTFromZelfKey controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Batch mint multiple NFTs from ZelfKey data using master wallet
 * @param {Object} ctx - Koa context
 */
const batchMintNFTsFromZelfKey = async (ctx) => {
	try {
		const { zelfKeyDataArray, recipientAddress, contractAddress, network = "mainnet" } = ctx.request.body;

		// Validate required fields
		if (!zelfKeyDataArray || !recipientAddress || !contractAddress) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Missing required fields: zelfKeyDataArray, recipientAddress, contractAddress",
			};
			return;
		}

		if (!Array.isArray(zelfKeyDataArray) || zelfKeyDataArray.length === 0) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "zelfKeyDataArray must be a non-empty array",
			};
			return;
		}

		// Validate recipient address format
		if (!/^0x[a-fA-F0-9]{40}$/.test(recipientAddress)) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Invalid recipient address format",
			};
			return;
		}

		// Check if all items have IPFS data
		const invalidItems = zelfKeyDataArray.filter((item) => !item.ipfs || !item.ipfs.hash);
		if (invalidItems.length > 0) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: `Found ${invalidItems.length} items without IPFS data`,
			};
			return;
		}

		// Batch mint NFTs using master wallet
		const result = await AvalancheNFTModule.batchMintNFTsFromZelfKey({
			zelfKeyDataArray,
			recipientAddress,
			contractAddress,
			network,
		});

		ctx.body = result;
	} catch (error) {
		console.error("Error in batchMintNFTsFromZelfKey controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get NFT information
 * @param {Object} ctx - Koa context
 */
const getNFTInfo = async (ctx) => {
	try {
		const { contractAddress, tokenId, network = "mainnet" } = ctx.request.body;

		// Validate required fields
		if (!contractAddress || !tokenId) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Missing required fields: contractAddress, tokenId",
			};
			return;
		}

		// Get NFT info
		const result = await AvalancheNFTModule.getNFTInfo({
			contractAddress,
			tokenId,
			network,
		});

		ctx.body = result;
	} catch (error) {
		console.error("Error in getNFTInfo controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get user's NFT collection
 * @param {Object} ctx - Koa context
 */
const getUserNFTs = async (ctx) => {
	try {
		const { userAddress, contractAddress, network = "mainnet" } = ctx.request.body;

		// Validate required fields
		if (!userAddress || !contractAddress) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Missing required fields: userAddress, contractAddress",
			};
			return;
		}

		// Validate Ethereum address format
		if (!/^0x[a-fA-F0-9]{40}$/.test(userAddress)) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Invalid userAddress format",
			};
			return;
		}

		// Get user's NFTs
		const result = await AvalancheNFTModule.getUserNFTs({
			userAddress,
			contractAddress,
			network,
		});

		ctx.body = result;
	} catch (error) {
		console.error("Error in getUserNFTs controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Deploy a new NFT contract using master wallet
 * @param {Object} ctx - Koa context
 */
const deployNFTContract = async (ctx) => {
	try {
		const { name, symbol, network = "mainnet" } = ctx.request.body;

		// Validate required fields
		if (!name || !symbol) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Missing required fields: name, symbol",
			};
			return;
		}

		// Validate name and symbol
		if (name.length < 1 || name.length > 50) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Contract name must be between 1 and 50 characters",
			};
			return;
		}

		if (symbol.length < 1 || symbol.length > 10) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Contract symbol must be between 1 and 10 characters",
			};
			return;
		}

		// Deploy contract using master wallet
		const result = await AvalancheNFTModule.deployNFTContract({
			name,
			symbol,
			network,
		});

		ctx.body = result;
	} catch (error) {
		console.error("Error in deployNFTContract controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Create NFT metadata preview (without minting)
 * @param {Object} ctx - Koa context
 */
const previewNFTMetadata = async (ctx) => {
	try {
		const { zelfKeyData, ipfsHash, ipfsGatewayUrl } = ctx.request.body;

		// Validate required fields
		if (!zelfKeyData || !ipfsHash || !ipfsGatewayUrl) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Missing required fields: zelfKeyData, ipfsHash, ipfsGatewayUrl",
			};
			return;
		}

		// Create metadata preview
		const metadata = AvalancheNFTModule.createNFTMetadata(zelfKeyData, ipfsHash, ipfsGatewayUrl);

		ctx.body = {
			success: true,
			metadata,
			message: "NFT metadata preview created successfully",
		};
	} catch (error) {
		console.error("Error in previewNFTMetadata controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get master wallet information
 * @param {Object} ctx - Koa context
 */
const getMasterWalletInfo = async (ctx) => {
	try {
		const { network = "mainnet" } = ctx.request.body;

		// Get master wallet info
		const result = await AvalancheNFTModule.getMasterWalletInfo(network);

		ctx.body = result;
	} catch (error) {
		console.error("Error in getMasterWalletInfo controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get available networks
 * @param {Object} ctx - Koa context
 */
const getNetworks = async (ctx) => {
	try {
		const networks = Object.keys(AvalancheNFTModule.AVALANCHE_CONFIG).map((network) => ({
			name: network,
			...AvalancheNFTModule.AVALANCHE_CONFIG[network],
		}));

		ctx.body = {
			success: true,
			networks,
			message: "Available networks retrieved successfully",
		};
	} catch (error) {
		console.error("Error in getNetworks controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Get contract ABI
 * @param {Object} ctx - Koa context
 */
const getContractABI = async (ctx) => {
	try {
		ctx.body = {
			success: true,
			abi: AvalancheNFTModule.ERC721_ABI,
			message: "Contract ABI retrieved successfully",
		};
	} catch (error) {
		console.error("Error in getContractABI controller:", error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

module.exports = {
	mintNFTFromZelfKey,
	batchMintNFTsFromZelfKey,
	getNFTInfo,
	getUserNFTs,
	deployNFTContract,
	previewNFTMetadata,
	getMasterWalletInfo,
	getNetworks,
	getContractABI,
};
