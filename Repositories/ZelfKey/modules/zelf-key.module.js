const ZelfProofModule = require("../../ZelfProof/modules/zelf-proof.module");

/**
 * ZelfKey Module - Password Manager functionality similar to LastPass
 * Uses ZelfProof for encryption and secure storage
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Store website passwords
 * @param {Object} data
 * @param {string} data.website - Website URL or name
 * @param {string} data.username - Username/email for the site
 * @param {string} data.password - Password for the site
 * @param {string} data.notes - Additional notes
 * @param {string} data.faceBase64 - User's face for encryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const storePassword = async (data) => {
	try {
		const { website, username, password, notes, faceBase64, masterPassword } = data;

		// Create metadata structure for website password
		const metadata = {
			type: "website_password",
			website,
			username,
			password,
			notes: notes || "",
			timestamp: new Date().toISOString(),
			version: "1.0",
		};

		// Create public data (non-sensitive info)
		const publicData = {
			type: "website_password",
			website,
			username: username ? "***" + username.slice(-3) : "***", // Partial username for display
			hasNotes: !!notes,
			timestamp: metadata.timestamp,
		};

		// Encrypt using ZelfProof module
		const encryptedResponse = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `password_${website}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		return {
			success: true,
			zelfProof: encryptedResponse.zelfProof,
			publicData,
			message: "Website password stored successfully",
		};
	} catch (error) {
		console.error("Error storing website password:", error);
		throw new Error("Failed to store website password");
	}
};

/**
 * Store notes as key-value pairs (metadata structure)
 * @param {Object} data
 * @param {string} data.title - Note title
 * @param {Object} data.keyValuePairs - Object with up to 10 key-value pairs
 * @param {string} data.faceBase64 - User's face for encryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const storeNotes = async (data) => {
	try {
		const { title, keyValuePairs, faceBase64, masterPassword } = data;

		// Validate key-value pairs (max 10)
		const pairs = Object.entries(keyValuePairs || {});
		if (pairs.length > 10) {
			throw new Error("Maximum 10 key-value pairs allowed");
		}

		// Create metadata structure for notes
		const metadata = {
			type: "notes",
			title,
			keyValuePairs,
			timestamp: new Date().toISOString(),
			version: "1.0",
		};

		// Create public data
		const publicData = {
			type: "notes",
			title,
			pairCount: pairs.length,
			timestamp: metadata.timestamp,
		};

		// Encrypt using ZelfProof module
		const encryptedResponse = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `notes_${title}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		return {
			success: true,
			zelfProof: encryptedResponse.zelfProof,
			publicData,
			message: "Notes stored successfully",
		};
	} catch (error) {
		console.error("Error storing notes:", error);
		throw new Error("Failed to store notes");
	}
};

/**
 * Store credit card information
 * @param {Object} data
 * @param {string} data.cardName - Name on the card
 * @param {string} data.cardNumber - Credit card number
 * @param {string} data.expiryMonth - Expiry month (MM)
 * @param {string} data.expiryYear - Expiry year (YYYY)
 * @param {string} data.cvv - CVV code
 * @param {string} data.bankName - Bank name
 * @param {string} data.faceBase64 - User's face for encryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const storeCreditCard = async (data) => {
	try {
		const { cardName, cardNumber, expiryMonth, expiryYear, cvv, bankName, faceBase64, masterPassword } = data;

		// Create metadata structure for credit card
		const metadata = {
			type: "credit_card",
			cardName,
			cardNumber,
			expiryMonth,
			expiryYear,
			cvv,
			bankName,
			timestamp: new Date().toISOString(),
			version: "1.0",
		};

		// Create public data (masked sensitive info)
		const publicData = {
			type: "credit_card",
			cardName,
			cardNumber: `****-****-****-${cardNumber.slice(-4)}`,
			expiryMonth,
			expiryYear,
			bankName,
			timestamp: metadata.timestamp,
		};

		// Encrypt using ZelfProof module
		const encryptedResponse = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `creditcard_${bankName}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		return {
			success: true,
			zelfProof: encryptedResponse.zelfProof,
			publicData,
			message: "Credit card stored successfully",
		};
	} catch (error) {
		console.error("Error storing credit card:", error);
		throw new Error("Failed to store credit card");
	}
};

/**
 * Store contact information
 * @param {Object} data
 * @param {string} data.name - Contact name
 * @param {string} data.email - Contact email
 * @param {string} data.phone - Contact phone
 * @param {string} data.address - Contact address
 * @param {string} data.company - Company name
 * @param {string} data.faceBase64 - User's face for encryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const storeContact = async (data) => {
	try {
		const { name, email, phone, address, company, faceBase64, masterPassword } = data;

		// Create metadata structure for contact
		const metadata = {
			type: "contact",
			name,
			email,
			phone,
			address,
			company,
			timestamp: new Date().toISOString(),
			version: "1.0",
		};

		// Create public data
		const publicData = {
			type: "contact",
			name,
			email: email ? "***" + email.slice(-3) : "***",
			phone: phone ? "***" + phone.slice(-4) : "***",
			company,
			timestamp: metadata.timestamp,
		};

		// Encrypt using ZelfProof module
		const encryptedResponse = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `contact_${name}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		return {
			success: true,
			zelfProof: encryptedResponse.zelfProof,
			publicData,
			message: "Contact stored successfully",
		};
	} catch (error) {
		console.error("Error storing contact:", error);
		throw new Error("Failed to store contact");
	}
};

/**
 * Store bank account details
 * @param {Object} data
 * @param {string} data.bankName - Bank name
 * @param {string} data.accountNumber - Account number
 * @param {string} data.routingNumber - Routing number
 * @param {string} data.accountType - Type of account (checking, savings, etc.)
 * @param {string} data.accountHolder - Account holder name
 * @param {string} data.faceBase64 - User's face for encryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const storeBankDetails = async (data) => {
	try {
		const { bankName, accountNumber, routingNumber, accountType, accountHolder, faceBase64, masterPassword } = data;

		// Create metadata structure for bank details
		const metadata = {
			type: "bank_details",
			bankName,
			accountNumber,
			routingNumber,
			accountType,
			accountHolder,
			timestamp: new Date().toISOString(),
			version: "1.0",
		};

		// Create public data (masked sensitive info)
		const publicData = {
			type: "bank_details",
			bankName,
			accountNumber: `****${accountNumber.slice(-4)}`,
			accountType,
			accountHolder,
			timestamp: metadata.timestamp,
		};

		// Encrypt using ZelfProof module
		const encryptedResponse = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `bank_${bankName}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		return {
			success: true,
			zelfProof: encryptedResponse.zelfProof,
			publicData,
			message: "Bank details stored successfully",
		};
	} catch (error) {
		console.error("Error storing bank details:", error);
		throw new Error("Failed to store bank details");
	}
};

/**
 * Main function to handle different types of data storage
 * @param {Object} data
 * @param {string} data.type - Type of data to store (password, notes, credit_card, contact, bank_details)
 * @param {Object} data.payload - Data payload specific to the type
 * @param {string} data.faceBase64 - User's face for encryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const storeData = async (data) => {
	try {
		const { type, payload, faceBase64, password } = data;

		// Validate required fields
		if (!type || !payload || !faceBase64 || !password) {
			throw new Error("Missing required fields: type, payload, faceBase64, password");
		}

		// Route to appropriate storage function
		switch (type) {
			case "password":
				return await storePassword({ ...payload, faceBase64, masterPassword: password });

			case "notes":
				return await storeNotes({ ...payload, faceBase64, masterPassword: password });

			case "credit_card":
				return await storeCreditCard({ ...payload, faceBase64, masterPassword: password });

			case "contact":
				return await storeContact({ ...payload, faceBase64, masterPassword: password });

			case "bank_details":
				return await storeBankDetails({ ...payload, faceBase64, masterPassword: password });

			default:
				throw new Error(`Unsupported data type: ${type}`);
		}
	} catch (error) {
		console.error("Error in storeData:", error);
		throw error;
	}
};

/**
 * Retrieve stored data using ZelfProof
 * @param {Object} data
 * @param {string} data.zelfProof - Encrypted ZelfProof
 * @param {string} data.faceBase64 - User's face for decryption
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>}
 */
const retrieveData = async (data) => {
	try {
		const { zelfProof, faceBase64, password } = data;

		// Decrypt using ZelfProof module
		const decryptedResponse = await ZelfProofModule.decrypt({
			zelfProof,
			faceBase64,
			password,
			os: "DESKTOP",
		});

		return {
			success: true,
			data: decryptedResponse,
			message: "Data retrieved successfully",
		};
	} catch (error) {
		console.error("Error retrieving data:", error);
		throw new Error("Failed to retrieve data");
	}
};

/**
 * Preview stored data without full decryption
 * @param {Object} data
 * @param {string} data.zelfProof - Encrypted ZelfProof
 * @param {string} data.faceBase64 - User's face for preview
 * @returns {Promise<Object>}
 */
const previewData = async (data) => {
	try {
		const { zelfProof, faceBase64 } = data;

		// Preview using ZelfProof module
		const previewResponse = await ZelfProofModule.preview({
			zelfProof,
			faceBase64,
			tolerance: "REGULAR",
		});

		return {
			success: true,
			publicData: previewResponse.publicData,
			message: "Data preview successful",
		};
	} catch (error) {
		console.error("Error previewing data:", error);
		throw new Error("Failed to preview data");
	}
};

module.exports = {
	storeData,
	storePassword,
	storeNotes,
	storeCreditCard,
	storeContact,
	storeBankDetails,
	retrieveData,
	previewData,
};
