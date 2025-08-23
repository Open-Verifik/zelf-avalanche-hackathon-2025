import "@nomicfoundation/hardhat-ethers";
import dotenv from "dotenv";

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
export default {
	solidity: {
		version: "0.8.20",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
			viaIR: true,
		},
	},
	networks: {
		// Avalanche Mainnet
		avalanche: {
			type: "http",
			url: "https://fragrant-wild-smoke.avalanche-mainnet.quiknode.pro/9f6de2bac71c11f7c08e97e7be74a9d770c62a86/ext/bc/C/rpc/",
			chainId: 43114,
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
			gasPrice: 25000000000, // 25 gwei
		},
		// Avalanche Fuji Testnet
		fuji: {
			type: "http",
			url: "https://api.avax-test.network/ext/bc/C/rpc",
			chainId: 43113,
			accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
			gasPrice: 25000000000, // 25 gwei
		},
		// Local development
		hardhat: {
			type: "edr-simulated",
			chainId: 1337,
		},
	},
	etherscan: {
		apiKey: {
			avalanche: "", // Optional: Add SNOWTRACE_API_KEY for automatic verification
			fuji: "", // Optional: Add SNOWTRACE_API_KEY for automatic verification
		},
		customChains: [
			{
				network: "avalanche",
				chainId: 43114,
				urls: {
					apiURL: "https://api.snowtrace.io/api",
					browserURL: "https://snowtrace.io",
				},
			},
			{
				network: "fuji",
				chainId: 43113,
				urls: {
					apiURL: "https://api-testnet.snowtrace.io/api",
					browserURL: "https://testnet.snowtrace.io",
				},
			},
		],
	},
	paths: {
		sources: "./Avalanche/contracts",
		tests: "./Avalanche/test",
		cache: "./Avalanche/cache",
		artifacts: "./Avalanche/artifacts",
	},
	mocha: {
		timeout: 40000,
	},
};
