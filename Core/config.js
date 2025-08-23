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
};

export default configuration;
