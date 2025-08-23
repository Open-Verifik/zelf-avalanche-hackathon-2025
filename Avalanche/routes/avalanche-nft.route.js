const Router = require("@koa/router");
const AvalancheNFTController = require("../controllers/avalanche-nft.controller");

const router = new Router({
	prefix: "/api/avalanche-nft",
});

/**
 * @swagger
 * /api/avalanche-nft/mint:
 *   post:
 *     summary: Mint NFT from ZelfKey IPFS data
 *     description: Creates an NFT on Avalanche blockchain using ZelfKey stored data. Gas fees are covered by the master wallet.
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - zelfKeyData
 *               - recipientAddress
 *               - contractAddress
 *             properties:
 *               zelfKeyData:
 *                 type: object
 *                 description: Data returned from ZelfKey storage
 *               recipientAddress:
 *                 type: string
 *                 description: Address to receive the NFT
 *               contractAddress:
 *                 type: string
 *                 description: NFT contract address
 *               network:
 *                 type: string
 *                 enum: [mainnet, testnet, fuji]
 *                 default: mainnet
 *                 description: Avalanche network to use
 *     responses:
 *       200:
 *         description: NFT minted successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/mint", AvalancheNFTController.mintNFTFromZelfKey);

/**
 * @swagger
 * /api/avalanche-nft/batch-mint:
 *   post:
 *     summary: Batch mint multiple NFTs from ZelfKey data
 *     description: Creates multiple NFTs on Avalanche blockchain using ZelfKey stored data. Gas fees are covered by the master wallet.
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - zelfKeyDataArray
 *               - recipientAddress
 *               - contractAddress
 *             properties:
 *               zelfKeyDataArray:
 *                 type: array
 *                 items:
 *                   type: object
 *                 description: Array of ZelfKey data objects
 *               recipientAddress:
 *                 type: string
 *                 description: Address to receive all NFTs
 *               contractAddress:
 *                 type: string
 *                 description: NFT contract address
 *               network:
 *                 type: string
 *                 enum: [mainnet, testnet, fuji]
 *                 default: mainnet
 *                 description: Avalanche network to use
 *     responses:
 *       200:
 *         description: Batch minting completed
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/batch-mint", AvalancheNFTController.batchMintNFTsFromZelfKey);

/**
 * @swagger
 * /api/avalanche-nft/info:
 *   post:
 *     summary: Get NFT information
 *     description: Retrieves information about a specific NFT
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - contractAddress
 *               - tokenId
 *             properties:
 *               contractAddress:
 *                 type: string
 *                 description: NFT contract address
 *               tokenId:
 *                 type: string
 *                 description: Token ID
 *               network:
 *                 type: string
 *                 enum: [mainnet, testnet, fuji]
 *                 default: mainnet
 *                 description: Avalanche network to use
 *     responses:
 *       200:
 *         description: NFT information retrieved successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/info", AvalancheNFTController.getNFTInfo);

/**
 * @swagger
 * /api/avalanche-nft/user-nfts:
 *   post:
 *     summary: Get user's NFT collection
 *     description: Retrieves all NFTs owned by a specific user address
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userAddress
 *               - contractAddress
 *             properties:
 *               userAddress:
 *                 type: string
 *                 description: User's wallet address
 *               contractAddress:
 *                 type: string
 *                 description: NFT contract address
 *               network:
 *                 type: string
 *                 enum: [mainnet, testnet, fuji]
 *                 default: mainnet
 *                 description: Avalanche network to use
 *     responses:
 *       200:
 *         description: User's NFT collection retrieved successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/user-nfts", AvalancheNFTController.getUserNFTs);

/**
 * @swagger
 * /api/avalanche-nft/deploy:
 *   post:
 *     summary: Deploy a new NFT contract
 *     description: Deploys a new ERC-721 NFT contract on Avalanche using the master wallet
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - symbol
 *             properties:
 *               name:
 *                 type: string
 *                 description: Contract name (1-50 characters)
 *               symbol:
 *                 type: string
 *                 description: Contract symbol (1-10 characters)
 *               network:
 *                 type: string
 *                 enum: [mainnet, testnet, fuji]
 *                 default: mainnet
 *                 description: Avalanche network to use
 *     responses:
 *       200:
 *         description: Contract deployed successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/deploy", AvalancheNFTController.deployNFTContract);

/**
 * @swagger
 * /api/avalanche-nft/preview-metadata:
 *   post:
 *     summary: Preview NFT metadata
 *     description: Creates NFT metadata preview without minting
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - zelfKeyData
 *               - ipfsHash
 *               - ipfsGatewayUrl
 *             properties:
 *               zelfKeyData:
 *                 type: object
 *                 description: Data from ZelfKey storage
 *               ipfsHash:
 *                 type: string
 *                 description: IPFS hash of the content
 *               ipfsGatewayUrl:
 *                 type: string
 *                 description: IPFS gateway URL
 *     responses:
 *       200:
 *         description: Metadata preview created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/preview-metadata", AvalancheNFTController.previewNFTMetadata);

/**
 * @swagger
 * /api/avalanche-nft/master-wallet:
 *   post:
 *     summary: Get master wallet information
 *     description: Retrieves information about the master wallet used for gas fees
 *     tags: [Avalanche NFT]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               network:
 *                 type: string
 *                 enum: [mainnet, testnet, fuji]
 *                 default: mainnet
 *                 description: Avalanche network to use
 *     responses:
 *       200:
 *         description: Master wallet information retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.post("/master-wallet", AvalancheNFTController.getMasterWalletInfo);

/**
 * @swagger
 * /api/avalanche-nft/networks:
 *   get:
 *     summary: Get available networks
 *     description: Retrieves list of available Avalanche networks
 *     tags: [Avalanche NFT]
 *     responses:
 *       200:
 *         description: Networks retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/networks", AvalancheNFTController.getNetworks);

/**
 * @swagger
 * /api/avalanche-nft/contract-abi:
 *   get:
 *     summary: Get contract ABI
 *     description: Retrieves the ERC-721 contract ABI
 *     tags: [Avalanche NFT]
 *     responses:
 *       200:
 *         description: Contract ABI retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/contract-abi", AvalancheNFTController.getContractABI);

module.exports = router;
