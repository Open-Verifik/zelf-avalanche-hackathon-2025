import openpgp from "openpgp";
import jwt from "jsonwebtoken";
import config from "../../../Core/config.js";
import * as PGPKeyModule from "../../PGP/modules/pgp-keys.module.js";

let armoredPublicKey = null;
let secretKey = config.pgp.secretKey;
let passphrase = config.pgp.passphrase;

/**
 * @param {*} params
 */
const insert = async (params) => {
	// simple session to keep track of who is doing the operations, we haven't add security to it.
	const identifier = params.identifier || params.clientIP;

	return {
		token: jwt.sign(
			{
				address: params.address,
				session: `${params.identifier}-${Date.now()}`,
				identifier,
				ip: params.clientIP,
			},
			config.JWT_SECRET
		),
	};
};

const extractPublicKey = async (params) => {
	const identifier = config.env === "development" ? params.identifier : params.clientIP;

	const storedKey = await PGPKeyModule.findKey(identifier); // uuid

	if (storedKey) return storedKey.publicKey;

	const pgpRecord = await PGPKeyModule.generateKey("session", identifier, params.name, params.email, params.password);

	return pgpRecord.publicKey;
};

/**
 *
 * @param {*} params
 */
const getPublicKey = async (params) => {
	const { privateKey, publicKey } = await openpgp.generateKey({
		type: "ecc", // Type of the key, e.g., 'ecc' (Elliptic Curve)
		curve: "curve25519", // Curve to use for ECC
		userIDs: [{ name: params.name || "Wallet", email: params.email || "wallet@zelf.world" }],
		passphrase,
	});

	secretKey = privateKey;

	armoredPublicKey = publicKey;

	return { publicKey, params };
};

const decryptContent = async (params, identifier) => {
	const { message: encryptedMessage } = params;

	try {
		const privateKey = await openpgp.readPrivateKey({ armoredKey: secretKey });

		const decryptedPrivateKey = await openpgp.decryptKey({
			privateKey,
			passphrase,
		});

		// Read the encrypted message
		const message = await openpgp.readMessage({
			armoredMessage: encryptedMessage,
		});

		// Decrypt the message
		const { data: decrypted } = await openpgp.decrypt({
			message,
			decryptionKeys: decryptedPrivateKey,
		});

		return decrypted;
	} catch (error) {
		console.error("Error during decryption:", { error });

		throw new Error("decryption_failed");
	}
};

const encryptContent = async (message) => {
	if (!armoredPublicKey) return null;

	const publicKey = await openpgp.readKey({ armoredKey: armoredPublicKey });

	// Encrypt the message
	const encryptedMessage = await openpgp.encrypt({
		message: await openpgp.createMessage({ text: JSON.stringify(message) }),
		encryptionKeys: publicKey,
	});

	return encryptedMessage;
};

const _getPrivateKey = async (authUser) => {
	const pgpRecord = await PGPKeyModule.findKey(null, authUser);

	if (!pgpRecord) throw new Error("key_not_found");

	const privateKey = await PGPKeyModule.decryptKey(pgpRecord.type, pgpRecord.key);

	return privateKey;
};

const sessionDecrypt = async (content, authUser) => {
	if (!content) return null;

	let privateKey = null;
	try {
		privateKey = await _getPrivateKey(authUser);

		const decryptedContent = await PGPKeyModule.decryptContent("session", privateKey, content);

		return decryptedContent;
	} catch (exception) {
		throw new Error("decryption_failed");
	}
};

const walletEncrypt = async (content, identifier, password = "") => {
	let pgpRecord = await PGPKeyModule.findKey(identifier);

	const payload = {
		publicKey: pgpRecord?.publicKey,
		privateKey: null,
		new: false,
	};

	if (!pgpRecord) {
		await _generateNewWalletKeys(identifier, payload, password);
	} else {
		payload.privateKey = await PGPKeyModule.decryptKey(pgpRecord.type, pgpRecord.key);
	}

	const publicKey = await openpgp.readKey({
		armoredKey: payload.publicKey,
	});

	// Encrypt the message
	const encryptedMessage = await openpgp.encrypt({
		message: await openpgp.createMessage({ text: typeof content === "string" ? content : JSON.stringify(content) }),
		encryptionKeys: publicKey,
	});

	return { encryptedMessage, privateKey: payload.privateKey };
};

const _generateNewWalletKeys = async (identifier, walletData, password) => {
	const newPgpRecord = await PGPKeyModule.generateKey("storage", identifier, null, null, password);

	walletData.publicKey = newPgpRecord.publicKey;
	walletData.privateKey = newPgpRecord.privateKey;
	walletData.new = true;
};

const walletDecrypt = async (content, identifier, password) => {
	try {
		const _privateKey = await _getPrivateKey({ identifier });

		const privateKey = await openpgp.readPrivateKey({ armoredKey: _privateKey });

		const decryptedPrivateKey = await openpgp.decryptKey({
			privateKey,
			passphrase: config.pgp.globalPassphrase,
		});

		// Read the encrypted message
		const message = await openpgp.readMessage({
			armoredMessage: content,
		});

		// Decrypt the message
		const { data: decrypted } = await openpgp.decrypt({
			message,
			decryptionKeys: decryptedPrivateKey,
		});

		return decrypted;
	} catch (error) {
		console.error("Error during decryption:", { error });

		throw new Error("decryption_failed");
	}
};

/**
 * delete session
 * @param {Object} authUser
 * @author Miguel Trevino
 */
const deleteSession = async (authUser) => {
	return await Model.deleteMany({ identifier: authUser.identifier });
};

export { insert, getPublicKey, decryptContent, encryptContent, extractPublicKey, sessionDecrypt, walletEncrypt, walletDecrypt, deleteSession };
