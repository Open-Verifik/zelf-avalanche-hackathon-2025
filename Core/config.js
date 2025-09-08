import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const API_ROOT = "/api";

const configuration = {
	name: "API",
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || "3000",
	base_url: process.env.BASE_URL || "https://zelf.world",
	sessionSecret: process.env.SESSION_SECRET,
	sessions: {
		version: 2,
		globalLimit: process.env.GLOBAL_LIMIT || 5 * 60 * 10, // 5 requests per second for 10 minutes
		searchLimit: process.env.SEARCH_LIMIT || 1 * 30 * 10, // 1 request per 2 seconds for 10 minutes
		decryptLimit: process.env.DECRYPT_LIMIT || 30, // 30 requests max per 10 minutes
	},
	JWT_SECRET: process.env.CONNECTION_KEY || "hackathon-test-secret-key-2025",
	basePath: (path) => {
		return API_ROOT.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
	},
	full_url: process.env.BASE_URL + ":" + process.env.PORT,
	zelfEncrypt: {
		serverKey: process.env.ZELF_ENCRYPT_SERVER_KEY,
	},
	zelfProof: {
		url: process.env.ZELF_URL || "https://api.zelf.world",
		email: process.env.ZELF_EMAIL,
		apiKey: process.env.ZELF_API_KEY || "password",
		clientAuthUrl: process.env.ZELF_PROOF_CLIENT_AUTH_URL || "/api/clients/auth",
	},
	pinata: {
		apiKey: process.env.PINATA_API_KEY,
		secretApiKey: process.env.PINATA_SECRET_API_KEY,
		jwt: process.env.PINATA_JWT,
		gateway: process.env.PINATA_GATEWAY || "https://gateway.pinata.cloud",
	},
	pgp: {
		secretKey: process.env.PGP_SECRET_KEY || "",
		passphrase: process.env.PGP_PASSPHRASE || "",
		globalSecretKey: process.env.PGP_GLOBAL_SECRET_KEY || "",
		globalPassphrase: process.env.PGP_GLOBAL_PASSPHRASE || "",
	},
	arwave: {
		env: process.env.ARWAVE_ENV || "production",
		key: process.env.ARWAVE_KEY,
		owner: process.env.ARWEAVE_OWNER,
		n: process.env.ARWAVE_N,
		e: process.env.ARWAVE_E,
		d: process.env.ARWAVE_D,
		p: process.env.ARWAVE_P,
		q: process.env.ARWAVE_Q,
		dp: process.env.ARWAVE_DP,
		dq: process.env.ARWAVE_DQ,
		qi: process.env.ARWAVE_QI,
		hold: {
			owner: process.env._ARWEAVE_OWNER,
			n: process.env._ARWAVE_N,
			e: process.env._ARWAVE_E,
			d: process.env._ARWAVE_D,
			p: process.env._ARWAVE_P,
			q: process.env._ARWAVE_Q,
			dp: process.env._ARWAVE_DP,
			dq: process.env._ARWAVE_DQ,
			qi: process.env._ARWAVE_QI,
		},
		parentName: process.env.ARWEAVE_PARENT_NAME,
		processId: process.env.ARWEAVE_PROCESS_ID,
		transactionId: process.env.ARWEAVE_TRANSACTION_ID,
	},
	arns: {
		processId: process.env.ARNS_PROCESS_ID,
		index_transaction_id: process.env.ARNS_INDEX_TRANSACTION_ID,
	},
	logging: {
		// Control logging verbosity across the application
		enabled: process.env.LOGGING_ENABLED !== "false", // Default: true
		level: process.env.LOG_LEVEL || "info", // Options: "error", "warn", "info", "debug", "verbose"
		avalanche: {
			enabled: process.env.AVALANCHE_LOGGING !== "false", // Default: true
			showSetup: process.env.AVALANCHE_SHOW_SETUP !== "false", // Default: true
			showGas: process.env.AVALANCHE_SHOW_GAS !== "false", // Default: true
			showTransaction: process.env.AVALANCHE_SHOW_TX !== "false", // Default: true
			showVerification: process.env.AVALANCHE_SHOW_VERIFY !== "false", // Default: true
			showImageRendering: process.env.AVALANCHE_SHOW_IMAGE !== "false", // Default: true
		},
	},
	cryptoPayments: {
		demoMode: process.env.CRYPTO_PAYMENTS_DEMO_MODE === "true" || false,
		demoMultiplier: 0.005, // 0.5% of original price for demo mode (max $0.049 for $9.99)
	},
	avalanche: {
		createNFT: process.env.AVALANCHE_CREATE_NFT === "true",
		rpcUrl:
			process.env.AVALANCHE_RPC_URL ||
			"https://wild-bitter-meadow.avalanche-mainnet.quiknode.pro/e2565749ca44c2873fe2a0a747f5ac68ae7eb14f/ext/bc/C/rpc/",
		chainId: 43114, // Avalanche C-Chain mainnet
	},
	stripe: {
		redirectUrl: process.env.STRIPE_REDIRECTURL || "https://verifik.app",
		secretKey: process.env.STRIPE_SECRET_KEY,
		publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
		webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
		taxes: 0.19,
		successUrl: process.env.STRIPE_SUCCESS_URL || "http://localhost:3010/api/stripe/result?success=true",
		cancelUrl: process.env.STRIPE_CANCEL_URL || "http://localhost:3010/api/stripe/result?canceled=true",
		// Subscription plans
		plans: {
			basic: {
				priceId: process.env.STRIPE_BASIC_PRICE_ID,
				name: "Basic Plan",
				description: "Essential features for personal use",
				price: 9.99,
				currency: "usd",
				interval: "month",
			},
			pro: {
				priceId: process.env.STRIPE_PRO_PRICE_ID,
				name: "Pro Plan",
				description: "Advanced features for power users",
				price: 19.99,
				currency: "usd",
				interval: "month",
			},
			enterprise: {
				priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
				name: "Enterprise Plan",
				description: "Full features for teams and businesses",
				price: 49.99,
				currency: "usd",
				interval: "month",
			},
		},
	},
};

export default configuration;
