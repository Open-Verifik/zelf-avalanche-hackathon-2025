import { ethers } from "ethers";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

/**
 * ZelfKeyNFT Contract Deployment Script
 * Deploys the custom ARC-721 contract to Avalanche mainnet
 * @author Miguel Trevino <miguel@zelf.world>
 */

// Contract configuration
const CONTRACT_CONFIG = {
	name: "ZelfKey Secure Storage NFTs",
	symbol: "ZELFKEY",
	maxSupply: 1000000, // 1 million NFTs maximum
	contractURI: "https://ipfs.io/ipfs/QmContractMetadata", // Update with your contract metadata
	network: "mainnet", // or "testnet" or "fuji"
};

// Avalanche network configuration
const NETWORKS = {
	mainnet: {
		rpcUrl: "https://fragrant-wild-smoke.avalanche-mainnet.quiknode.pro/9f6de2bac71c11f7c08e97e7be74a9d770c62a86/ext/bc/C/rpc/",
		chainId: 43114,
		explorer: "https://snowtrace.io",
		gasPrice: "25000000000", // 25 gwei
		blockExplorer: "https://snowtrace.io",
	},
	testnet: {
		rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
		chainId: 43113,
		explorer: "https://testnet.snowtrace.io",
		gasPrice: "25000000000", // 25 gwei
		blockExplorer: "https://testnet.snowtrace.io",
	},
	fuji: {
		rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
		chainId: 43113,
		explorer: "https://testnet.snowtrace.io",
		gasPrice: "25000000000", // 25 gwei
		blockExplorer: "https://testnet.snowtrace.io",
	},
};

// Contract ABI (simplified for deployment)
const CONTRACT_ABI = [
	"function name() view returns (string)",
	"function symbol() view returns (string)",
	"function totalSupply() view returns (uint256)",
	"function maxSupply() view returns (uint256)",
	"function mintingEnabled() view returns (bool)",
	"function contractURI() view returns (string)",
	"function owner() view returns (address)",
	"function mintNFT(address to, string memory tokenURI) returns (uint256)",
	"function batchMintNFTs(address to, string[] memory tokenURIs) returns (uint256[] memory)",
	"function toggleMinting(bool enabled)",
	"function updateMaxSupply(uint256 newMaxSupply)",
	"function updateContractURI(string memory newContractURI)",
];

// Load contract artifact
const loadContractArtifact = () => {
	try {
		const artifactPath = path.join(process.cwd(), "Avalanche/artifacts/Avalanche/contracts/ZelfKeyNFT.sol/ZelfKeyNFT.json");
		const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
		return {
			abi: artifact.abi,
			bytecode: artifact.bytecode,
		};
	} catch (error) {
		throw new Error(`Failed to load contract artifact: ${error.message}. Please run 'npm run compile' first.`);
	}
};

/**
 * Get master wallet from environment variables
 */
function getMasterWallet(provider) {
	try {
		// Try to get mnemonic from environment
		const mnemonic = process.env.MNEMONICS || process.env.MNEMONIC;
		if (mnemonic) {
			try {
				// Use standard derivation path (m/44'/60'/0'/0/0) instead of deriveChild(0)
				const masterWallet = ethers.Wallet.fromPhrase(mnemonic);
				return masterWallet.connect(provider);
			} catch (error) {
				throw new Error("Invalid mnemonic phrase in environment variables");
			}
		}

		// Fallback to private key
		const privateKey = process.env.PRIVATE_KEY;
		if (privateKey) {
			return new ethers.Wallet(privateKey, provider);
		}

		throw new Error("No master wallet credentials found. Set MNEMONICS or PRIVATE_KEY in .env file");
	} catch (error) {
		throw new Error(`Failed to create master wallet: ${error.message}`);
	}
}

/**
 * Deploy the ZelfKeyNFT contract
 */
async function deployContract() {
	try {
		console.log("🚀 Starting ZelfKeyNFT Contract Deployment");
		console.log("==========================================\n");
		console.log("📍 Debug: Function started successfully");

		// Get network configuration
		console.log("📍 Debug: Getting network config...");
		const networkConfig = NETWORKS[CONTRACT_CONFIG.network];
		if (!networkConfig) {
			throw new Error(`Unsupported network: ${CONTRACT_CONFIG.network}`);
		}
		console.log("📍 Debug: Network config loaded successfully");

		console.log(`📡 Network: ${CONTRACT_CONFIG.network.toUpperCase()}`);
		console.log(`🔗 RPC URL: ${networkConfig.rpcUrl}`);
		console.log(`🆔 Chain ID: ${networkConfig.chainId}`);
		console.log(`🔍 Explorer: ${networkConfig.explorer}\n`);

		// Create provider
		console.log("📍 Debug: Creating provider...");
		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);
		console.log("📍 Debug: Provider created successfully");

		// Get master wallet
		const masterWallet = getMasterWallet(provider);
		console.log(`👤 Master Wallet: ${masterWallet.address}`);

		// Check balance
		const balance = await provider.getBalance(masterWallet.address);
		const balanceInAvax = ethers.formatEther(balance);
		console.log(`💰 Balance: ${balanceInAvax} AVAX\n`);

		if (parseFloat(balanceInAvax) < 0.1) {
			console.log("⚠️  Warning: Low balance. Ensure you have at least 0.1 AVAX for deployment.");
		}

		// Contract parameters
		const constructorArgs = [];

		console.log("📋 Contract Parameters:");
		console.log(`   Name: ${CONTRACT_CONFIG.name}`);
		console.log(`   Symbol: ${CONTRACT_CONFIG.symbol}`);
		console.log(`   Max Supply: ${CONTRACT_CONFIG.maxSupply.toLocaleString()}`);
		console.log(`   Contract URI: ${CONTRACT_CONFIG.contractURI}\n`);

		// Load contract artifact
		console.log("📦 Loading contract artifact...");
		const { abi, bytecode } = loadContractArtifact();

		// Debug: Show artifact info
		console.log(`   ABI Functions: ${abi.length} functions loaded`);
		console.log(`   Bytecode Length: ${bytecode.length} characters`);
		console.log(`   Bytecode Preview: ${bytecode.substring(0, 66)}...`);

		// Create contract factory
		console.log("🔨 Creating contract factory...");
		const factory = new ethers.ContractFactory(abi, bytecode, masterWallet);

		// Estimate gas with better error handling
		console.log("⛽ Estimating deployment gas...");
		const gasPrice = ethers.parseUnits(networkConfig.gasPrice, "wei");

		let estimatedGas;
		try {
			const deploymentTx = await factory.getDeployTransaction(...constructorArgs);
			estimatedGas = await provider.estimateGas(deploymentTx);

			console.log(`   Estimated Gas: ${estimatedGas.toString()}`);
			console.log(`   Gas Price: ${ethers.formatUnits(gasPrice, "gwei")} gwei`);
			console.log(`   Estimated Cost: ${ethers.formatEther(estimatedGas * gasPrice)} AVAX\n`);
		} catch (gasError) {
			console.log("⚠️  Gas estimation failed, using default gas limit");
			console.log(`   Error: ${gasError.message}`);

			// Use a reasonable default gas limit for NFT contract deployment
			estimatedGas = 3000000n; // 3M gas should be enough (as BigInt)
			console.log(`   Using Default Gas: ${estimatedGas.toLocaleString()}`);
			console.log(`   Gas Price: ${ethers.formatUnits(gasPrice, "gwei")} gwei`);
			console.log(`   Estimated Cost: ${ethers.formatEther(estimatedGas * gasPrice)} AVAX\n`);
		}

		// Deploy contract
		console.log("🚀 Deploying contract...");
		const contract = await factory.deploy(...constructorArgs, {
			gasPrice,
			gasLimit: estimatedGas,
		});

		console.log(`   Transaction Hash: ${contract.deploymentTransaction().hash}`);
		console.log(`   Contract Address: ${await contract.getAddress()}\n`);

		// Wait for deployment
		console.log("⏳ Waiting for deployment confirmation...");
		await contract.waitForDeployment();

		const contractAddress = await contract.getAddress();
		console.log("✅ Contract deployed successfully!");
		console.log(`   Address: ${contractAddress}`);
		console.log(`   Explorer: ${networkConfig.explorer}/address/${contractAddress}\n`);

		// Verify contract deployment
		console.log("🔍 Verifying contract deployment...");
		const deployedContract = new ethers.Contract(contractAddress, abi, provider);

		try {
			const [name, symbol, totalSupply, owner] = await Promise.all([
				deployedContract.name(),
				deployedContract.symbol(),
				deployedContract.totalSupply(),
				deployedContract.owner(),
			]);

			console.log("✅ Contract verification successful:");
			console.log(`   Name: ${name}`);
			console.log(`   Symbol: ${symbol}`);
			console.log(`   Total Supply: ${totalSupply.toString()}`);
			console.log(`   Owner: ${owner}`);

			if (owner.toLowerCase() === masterWallet.address.toLowerCase()) {
				console.log("   ✅ Ownership correctly set to master wallet");
			} else {
				console.log("   ❌ Ownership verification failed");
			}
		} catch (error) {
			console.log("⚠️  Contract verification failed:", error.message);
		}

		// Save deployment info
		const deploymentInfo = {
			network: CONTRACT_CONFIG.network,
			contractAddress,
			transactionHash: contract.deploymentTransaction().hash,
			deployer: masterWallet.address,
			constructorArgs,
			timestamp: new Date().toISOString(),
			explorer: networkConfig.explorer,
		};

		console.log("\n📄 Deployment Information:");
		console.log(JSON.stringify(deploymentInfo, null, 2));

		// Save to file
		const deploymentFile = `deployment-${CONTRACT_CONFIG.network}-${Date.now()}.json`;
		fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
		console.log(`\n💾 Deployment info saved to: ${deploymentFile}`);

		console.log("\n🎉 Deployment completed successfully!");
		console.log("\n📚 Next Steps:");
		console.log("   1. Verify contract on Snowtrace");
		console.log("   2. Update your .env with the contract address");
		console.log("   3. Test minting functionality");
		console.log("   4. Start creating NFTs!");

		return deploymentInfo;
	} catch (error) {
		console.error("❌ Deployment failed:", error);
		throw error;
	}
}

/**
 * Test the deployed contract
 */
async function testContract(contractAddress) {
	try {
		console.log("\n🧪 Testing Deployed Contract");
		console.log("============================\n");

		const networkConfig = NETWORKS[CONTRACT_CONFIG.network];
		const provider = new ethers.JsonRpcProvider(networkConfig.rpcUrl);
		const masterWallet = getMasterWallet(provider);

		const { abi } = loadContractArtifact();
		const contract = new ethers.Contract(contractAddress, abi, masterWallet);

		// Test basic functions
		console.log("📋 Testing basic contract functions...");

		const [name, symbol, totalSupply, owner] = await Promise.all([contract.name(), contract.symbol(), contract.totalSupply(), contract.owner()]);

		console.log("✅ Basic functions working:");
		console.log(`   Name: ${name}`);
		console.log(`   Symbol: ${symbol}`);
		console.log(`   Total Supply: ${totalSupply.toString()}`);
		console.log(`   Owner: ${owner}`);

		console.log("\n🎯 Contract is ready for use!");
	} catch (error) {
		console.error("❌ Contract testing failed:", error);
	}
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
	deployContract()
		.then((deploymentInfo) => {
			if (deploymentInfo && deploymentInfo.contractAddress) {
				return testContract(deploymentInfo.contractAddress);
			}
		})
		.catch((error) => {
			console.error("❌ Script execution failed:", error);
			process.exit(1);
		});
}

export { deployContract, testContract, CONTRACT_CONFIG, NETWORKS };
