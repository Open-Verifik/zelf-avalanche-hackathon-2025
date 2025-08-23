const { ethers } = require("ethers");
require("dotenv").config();

/**
 * Avalanche NFT Module - Mint NFTs from ZelfKey IPFS links
 * Integrates with ZelfKey system to create NFTs from stored data
 * @author Miguel Trevino <miguel@zelf.world>
 */

// Avalanche C-Chain configuration
const AVALANCHE_CONFIG = {
	mainnet: {
		rpcUrl: "https://fragrant-wild-smoke.avalanche-mainnet.quiknode.pro/9f6de2bac71c11f7c08e97e7be74a9d770c62a86/ext/bc/C/rpc/",
		chainId: 43114,
		explorer: "https://snowtrace.io",
		gasPrice: "25000000000", // 25 gwei
	},
	testnet: {
		rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
		chainId: 43113,
		explorer: "https://testnet.snowtrace.io",
		gasPrice: "25000000000", // 25 gwei
	},
	fuji: {
		rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
		chainId: 43113,
		explorer: "https://testnet.snowtrace.io",
		gasPrice: "25000000000", // 25 gwei
	},
};

// Custom ZelfKeyNFT Contract ABI
const ZELFKEY_NFT_ABI = [
	// ERC-721 Standard Functions
	"function name() view returns (string)",
	"function symbol() view returns (string)",
	"function tokenURI(uint256 tokenId) view returns (string)",
	"function ownerOf(uint256 tokenId) view returns (address)",
	"function balanceOf(address owner) view returns (uint256)",
	"function totalSupply() view returns (uint256)",
	"function tokenByIndex(uint256 index) view returns (uint256)",
	"function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",

	// Custom ZelfKeyNFT Functions
	"function maxSupply() view returns (uint256)",
	"function mintingEnabled() view returns (bool)",
	"function contractURI() view returns (string)",
	"function owner() view returns (address)",
	"function mintNFT(address to, string memory tokenURI) returns (uint256)",
	"function batchMintNFTs(address to, string[] memory tokenURIs) returns (uint256[] memory)",
	"function safeMint(address to, string memory tokenURI) returns (uint256)",
	"function nextTokenId() view returns (uint256)",
	"function exists(uint256 tokenId) view returns (bool)",
	"function tokensOfOwner(address owner) view returns (uint256[] memory)",

	// Admin Functions
	"function toggleMinting(bool enabled)",
	"function updateMaxSupply(uint256 newMaxSupply)",
	"function updateContractURI(string memory newContractURI)",
	"function withdraw()",
	"function emergencyDisableMinting()",

	// Events
	"event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
	"event NFTMinted(address indexed to, uint256 indexed tokenId, string tokenURI, uint256 timestamp)",
	"event BatchNFTsMinted(address indexed to, uint256[] tokenIds, string[] tokenURIs, uint256 timestamp)",
	"event MintingToggled(bool enabled)",
	"event MaxSupplyUpdated(uint256 newMaxSupply)",
];

// Default contract address (can be overridden)
const DEFAULT_CONTRACT_ADDRESS = process.env.ZELFKEY_NFT_CONTRACT_ADDRESS;

/**
 * Get master wallet from environment variables
 * @param {ethers.Provider} provider - Provider instance
 * @returns {ethers.Wallet} Master wallet instance
 */
const getMasterWallet = (provider) => {
	try {
		// Try to get mnemonic from environment
		const mnemonic = process.env.MNEMONICS || process.env.MNEMONIC;
		if (mnemonic) {
			// Validate mnemonic
			if (!ethers.isValidMnemonic(mnemonic)) {
				throw new Error("Invalid mnemonic phrase in environment variables");
			}

			// Create HD wallet from mnemonic
			const hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic);

			// Use index 0 for master wallet
			const masterWallet = hdNode.deriveChild(0);

			return masterWallet.connect(provider);
		}

		// Fallback to private key if mnemonic not available
		const privateKey = process.env.PRIVATE_KEY;
		if (privateKey) {
			return new ethers.Wallet(privateKey, provider);
		}

		throw new Error("No master wallet credentials found. Set MNEMONICS or PRIVATE_KEY in .env file");
	} catch (error) {
		throw new Error(`Failed to create master wallet: ${error.message}`);
	}
};

/**
 * Upload metadata JSON to IPFS via Pinata
 * @param {Object} metadata - NFT metadata object
 * @returns {Promise<string>} IPFS URL of the metadata
 */
const uploadMetadataToIPFS = async (metadata) => {
	try {
		console.log("📤 Uploading metadata to IPFS via Pinata...");

		// Get Pinata configuration from environment
		const pinataApiKey = process.env.PINATA_API_KEY;
		const pinataSecretKey = process.env.PINATA_API_SECRET;
		const pinataGateway = process.env.PINATA_GATEWAY_URL || "https://chocolate-occasional-kite-546.mypinata.cloud";

		if (!pinataApiKey || !pinataSecretKey) {
			throw new Error("Pinata API credentials not found in environment variables");
		}

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
				pinata_api_key: pinataApiKey,
				pinata_secret_api_key: pinataSecretKey,
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`Pinata upload failed: ${response.status} ${response.statusText}`);
		}

		const result = await response.json();
		const ipfsHash = result.IpfsHash;
		const ipfsUrl = `https://${pinataGateway}/ipfs/${ipfsHash}`;

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
 * Create NFT metadata for ZelfKey data with proper structure
 * @param {Object} zelfKeyData - Data from ZelfKey storage
 * @param {string} ipfsHash - IPFS hash of the QR code
 * @param {string} ipfsGatewayUrl - IPFS gateway URL
 * @returns {Object} NFT metadata object
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
 * Mint NFT from ZelfKey IPFS data using custom contract
 * @param {Object} params
 * @param {Object} params.zelfKeyData - Data returned from ZelfKey storage
 * @param {string} params.recipientAddress - Address to receive the NFT (required)
 * @param {string} params.contractAddress - NFT contract address (optional, uses default)
 * @param {string} params.network - Network to use (mainnet, testnet, fuji)
 * @returns {Promise<Object>} Minting result
 */
const mintNFTFromZelfKey = async (params) => {
	try {
		const { zelfKeyData, recipientAddress, contractAddress = DEFAULT_CONTRACT_ADDRESS, network = "mainnet" } = params;

		// Validate required parameters
		if (!zelfKeyData || !recipientAddress || !contractAddress) {
			throw new Error("Missing required parameters: zelfKeyData, recipientAddress, contractAddress");
		}

		// Validate recipient address format
		if (!ethers.isAddress(recipientAddress)) {
			throw new Error("Invalid recipient address format");
		}

		// Check if IPFS data is available
		if (!zelfKeyData.ipfs || !zelfKeyData.ipfs.hash) {
			throw new Error("No IPFS data available in ZelfKey data");
		}

		// Get network configuration
		const networkConfig = AVALANCHE_CONFIG[network];
		if (!networkConfig) {
			throw new Error(`Unsupported network: ${network}`);
		}

		// Create provider
		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);

		// Get master wallet (pays for gas)
		const masterWallet = getMasterWallet(provider);

		// Create contract instance
		const contract = new ethers.Contract(contractAddress, ZELFKEY_NFT_ABI, masterWallet);

		// Verify contract ownership
		try {
			const contractOwner = await contract.owner();
			if (contractOwner.toLowerCase() !== masterWallet.address.toLowerCase()) {
				throw new Error("Master wallet is not the contract owner");
			}
		} catch (error) {
			throw new Error(`Contract ownership verification failed: ${error.message}`);
		}

		// Check if minting is enabled
		try {
			const mintingEnabled = await contract.mintingEnabled();
			if (!mintingEnabled) {
				throw new Error("Minting is currently disabled on the contract");
			}
		} catch (error) {
			console.warn("Could not verify minting status:", error.message);
		}

		// Create NFT metadata with proper structure
		const metadata = createNFTMetadata(zelfKeyData, zelfKeyData.ipfs.hash, zelfKeyData.ipfs.gatewayUrl);

		// Upload metadata to IPFS (this is the CORRECT approach for image rendering)
		console.log("📤 Uploading NFT metadata to IPFS...");
		const metadataUrl = await uploadMetadataToIPFS(metadata);

		// The tokenURI should point to the METADATA JSON, not the image
		// This ensures proper image rendering on NFT marketplaces
		const metadataURI = metadataUrl;

		// Prepare transaction
		const gasPrice = ethers.parseUnits(networkConfig.gasPrice, "wei");
		const gasLimit = 500000; // Estimated gas limit for minting

		// Estimate gas
		let estimatedGas;
		try {
			estimatedGas = await contract.mintNFT.estimateGas(recipientAddress, metadataURI, { gasPrice });
		} catch (error) {
			console.warn("Could not estimate gas, using default:", error.message);
			estimatedGas = gasLimit;
		}

		// Mint NFT using custom contract
		const tx = await contract.mintNFT(recipientAddress, metadataURI, {
			gasPrice,
			gasLimit: estimatedGas,
		});

		// Wait for transaction confirmation
		const receipt = await tx.wait();

		// Get token ID from transaction receipt
		let tokenId;
		try {
			const transferEvent = receipt.logs.find((log) => {
				try {
					const parsed = contract.interface.parseLog(log);
					return parsed.name === "Transfer";
				} catch {
					return false;
				}
			});

			if (transferEvent) {
				const parsed = contract.interface.parseLog(transferEvent);
				tokenId = parsed.args[2].toString();
			}
		} catch (error) {
			console.warn("Could not parse token ID from receipt:", error.message);
		}

		// Get token URI
		let tokenURI;
		try {
			if (tokenId) {
				tokenURI = await contract.tokenURI(tokenId);
			}
		} catch (error) {
			console.warn("Could not get token URI:", error.message);
		}

		return {
			success: true,
			transactionHash: tx.hash,
			blockNumber: receipt.blockNumber,
			gasUsed: receipt.gasUsed.toString(),
			effectiveGasPrice: receipt.effectiveGasPrice.toString(),
			tokenId: tokenId || "Unknown",
			tokenURI: tokenURI || metadataURI,
			metadata,
			network,
			contractAddress,
			recipientAddress,
			masterWalletAddress: masterWallet.address,
			explorerUrl: `${networkConfig.explorer}/tx/${tx.hash}`,
			message: `NFT minted successfully on Avalanche ${network} to ${recipientAddress}`,
		};
	} catch (error) {
		console.error("Error minting NFT:", error);
		throw new Error(`Failed to mint NFT: ${error.message}`);
	}
};

/**
 * Batch mint multiple NFTs from ZelfKey data using custom contract
 * @param {Object} params
 * @param {Array} params.zelfKeyDataArray - Array of ZelfKey data objects
 * @param {string} params.recipientAddress - Address to receive all NFTs
 * @param {string} params.contractAddress - NFT contract address (optional, uses default)
 * @param {string} params.network - Network to use
 * @returns {Promise<Object>} Batch minting result
 */
const batchMintNFTsFromZelfKey = async (params) => {
	try {
		const { zelfKeyDataArray, recipientAddress, contractAddress = DEFAULT_CONTRACT_ADDRESS, network = "mainnet" } = params;

		if (!Array.isArray(zelfKeyDataArray) || zelfKeyDataArray.length === 0) {
			throw new Error("zelfKeyDataArray must be a non-empty array");
		}

		if (!recipientAddress || !ethers.isAddress(recipientAddress)) {
			throw new Error("Valid recipientAddress is required");
		}

		if (zelfKeyDataArray.length > 100) {
			throw new Error("Cannot mint more than 100 NFTs at once");
		}

		const results = [];
		const errors = [];

		for (let i = 0; i < zelfKeyDataArray.length; i++) {
			try {
				const result = await mintNFTFromZelfKey({
					zelfKeyData: zelfKeyDataArray[i],
					recipientAddress,
					contractAddress,
					network,
				});
				results.push({
					index: i,
					success: true,
					...result,
				});
			} catch (error) {
				errors.push({
					index: i,
					success: false,
					error: error.message,
					data: zelfKeyDataArray[i],
				});
			}
		}

		return {
			success: true,
			total: zelfKeyDataArray.length,
			successful: results.length,
			failed: errors.length,
			results,
			errors,
			recipientAddress,
			message: `Batch minting completed: ${results.length} successful, ${errors.length} failed`,
		};
	} catch (error) {
		console.error("Error in batch minting:", error);
		throw new Error(`Failed to batch mint NFTs: ${error.message}`);
	}
};

/**
 * Get NFT information from custom contract
 * @param {Object} params
 * @param {string} params.contractAddress - NFT contract address (optional, uses default)
 * @param {string} params.tokenId - Token ID
 * @param {string} params.network - Network to use
 * @returns {Promise<Object>} NFT information
 */
const getNFTInfo = async (params) => {
	try {
		const { contractAddress = DEFAULT_CONTRACT_ADDRESS, tokenId, network = "mainnet" } = params;

		if (!contractAddress || !tokenId) {
			throw new Error("Missing required parameters: contractAddress, tokenId");
		}

		const networkConfig = AVALANCHE_CONFIG[network];
		if (!networkConfig) {
			throw new Error(`Unsupported network: ${network}`);
		}

		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);
		const contract = new ethers.Contract(contractAddress, ZELFKEY_NFT_ABI, provider);

		// Get basic NFT information
		const [name, symbol, owner, tokenURI, totalSupply, maxSupply, mintingEnabled] = await Promise.all([
			contract.name(),
			contract.symbol(),
			contract.ownerOf(tokenId),
			contract.tokenURI(tokenId),
			contract.totalSupply(),
			contract.maxSupply(),
			contract.mintingEnabled(),
		]);

		return {
			success: true,
			contractAddress,
			tokenId: tokenId.toString(),
			name,
			symbol,
			owner,
			tokenURI,
			totalSupply: totalSupply.toString(),
			maxSupply: maxSupply.toString(),
			mintingEnabled,
			network,
			explorerUrl: `${networkConfig.explorer}/token/${contractAddress}?a=${tokenId}`,
		};
	} catch (error) {
		console.error("Error getting NFT info:", error);
		throw new Error(`Failed to get NFT info: ${error.message}`);
	}
};

/**
 * Get user's NFT collection from custom contract
 * @param {Object} params
 * @param {string} params.userAddress - User's wallet address
 * @param {string} params.contractAddress - NFT contract address (optional, uses default)
 * @param {string} params.network - Network to use
 * @returns {Promise<Object>} User's NFT collection
 */
const getUserNFTs = async (params) => {
	try {
		const { userAddress, contractAddress = DEFAULT_CONTRACT_ADDRESS, network = "mainnet" } = params;

		if (!userAddress || !contractAddress) {
			throw new Error("Missing required parameters: userAddress, contractAddress");
		}

		const networkConfig = AVALANCHE_CONFIG[network];
		if (!networkConfig) {
			throw new Error(`Unsupported network: ${network}`);
		}

		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);
		const contract = new ethers.Contract(contractAddress, ZELFKEY_NFT_ABI, provider);

		// Get user's NFT balance
		const balance = await contract.balanceOf(userAddress);
		const balanceNum = parseInt(balance.toString());

		if (balanceNum === 0) {
			return {
				success: true,
				userAddress,
				contractAddress,
				balance: 0,
				nfts: [],
				network,
				message: "No NFTs found for this address",
			};
		}

		// Get all token IDs owned by the user
		const nfts = [];
		for (let i = 0; i < balanceNum; i++) {
			try {
				const tokenId = await contract.tokenOfOwnerByIndex(userAddress, i);
				const tokenURI = await contract.tokenURI(tokenId);

				nfts.push({
					tokenId: tokenId.toString(),
					tokenURI,
					explorerUrl: `${networkConfig.explorer}/token/${contractAddress}?a=${tokenId}`,
				});
			} catch (error) {
				console.warn(`Error getting token ${i}:`, error.message);
			}
		}

		return {
			success: true,
			userAddress,
			contractAddress,
			balance: balanceNum,
			nfts,
			network,
			message: `Found ${balanceNum} NFTs for address ${userAddress}`,
		};
	} catch (error) {
		console.error("Error getting user NFTs:", error);
		throw new Error(`Failed to get user NFTs: ${error.message}`);
	}
};

/**
 * Get contract information
 * @param {Object} params
 * @param {string} params.contractAddress - NFT contract address (optional, uses default)
 * @param {string} params.network - Network to use
 * @returns {Promise<Object>} Contract information
 */
const getContractInfo = async (params) => {
	try {
		const { contractAddress = DEFAULT_CONTRACT_ADDRESS, network = "mainnet" } = params;

		if (!contractAddress) {
			throw new Error("Missing required parameter: contractAddress");
		}

		const networkConfig = AVALANCHE_CONFIG[network];
		if (!networkConfig) {
			throw new Error(`Unsupported network: ${network}`);
		}

		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);
		const contract = new ethers.Contract(contractAddress, ZELFKEY_NFT_ABI, provider);

		// Get contract information
		const [name, symbol, totalSupply, maxSupply, mintingEnabled, contractURI, owner] = await Promise.all([
			contract.name(),
			contract.symbol(),
			contract.totalSupply(),
			contract.maxSupply(),
			contract.mintingEnabled(),
			contract.contractURI(),
			contract.owner(),
		]);

		return {
			success: true,
			contractAddress,
			name,
			symbol,
			totalSupply: totalSupply.toString(),
			maxSupply: maxSupply.toString(),
			mintingEnabled,
			contractURI,
			owner,
			network,
			explorerUrl: `${networkConfig.explorer}/address/${contractAddress}`,
		};
	} catch (error) {
		console.error("Error getting contract info:", error);
		throw new Error(`Failed to get contract info: ${error.message}`);
	}
};

/**
 * Get master wallet information
 * @param {string} network - Network to use (default: mainnet)
 * @returns {Promise<Object>} Master wallet information
 */
const getMasterWalletInfo = async (network = "mainnet") => {
	try {
		const networkConfig = AVALANCHE_CONFIG[network];
		if (!networkConfig) {
			throw new Error(`Unsupported network: ${network}`);
		}

		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);

		// Get master wallet
		const masterWallet = getMasterWallet(provider);

		// Get balance
		const balance = await provider.getBalance(masterWallet.address);
		const balanceInAvax = ethers.formatEther(balance);

		return {
			success: true,
			address: masterWallet.address,
			network,
			balance: {
				wei: balance.toString(),
				avax: balanceInAvax,
			},
			explorerUrl: `${networkConfig.explorer}/address/${masterWallet.address}`,
			message: "Master wallet information retrieved successfully",
		};
	} catch (error) {
		console.error("Error getting master wallet info:", error);
		throw new Error(`Failed to get master wallet info: ${error.message}`);
	}
};

module.exports = {
	mintNFTFromZelfKey,
	batchMintNFTsFromZelfKey,
	getNFTInfo,
	getUserNFTs,
	getContractInfo,
	createNFTMetadata,
	uploadMetadataToIPFS,
	getMasterWallet,
	getMasterWalletInfo,
	AVALANCHE_CONFIG,
	ZELFKEY_NFT_ABI,
	DEFAULT_CONTRACT_ADDRESS,
};
