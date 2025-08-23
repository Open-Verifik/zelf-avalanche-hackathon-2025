import * as ZelfProofModule from "../../ZelfProof/modules/zelf-proof.module.js";
import * as pinata from "../../IPFS/modules/pinata.js";

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
		const { website, username, password, faceBase64, masterPassword } = data;

		// Create metadata structure for website password
		const metadata = {
			username,
			password,
		};

		// Create public data (non-sensitive info)
		const publicData = {
			type: "website_password",
			website,
			username: username ? "***" + username.slice(-3) : "***", // Partial username for display
			timestamp: `${new Date().toISOString()}`,
		};

		const { zelfQR } = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `password`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		const { zelfProof } = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `password`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		let qrCodeIPFS = null;

		try {
			qrCodeIPFS = await pinata.pinFile(zelfQR, `zelfkey_password_${website}_${Date.now()}.png`, "image/png", {
				...publicData,
				zelfProof,
				contentType: "qr_code",
			});
		} catch (ipfsError) {
			console.warn("⚠️ Failed to pin QR code to IPFS, continuing without IPFS:", ipfsError.message);
		}

		const result = {
			success: true,
			zelfProof: zelfQR, // QR code data URL for tests
			zelfQR: zelfProof, // Encrypted string
			ipfs: qrCodeIPFS
				? {
						hash: qrCodeIPFS.IpfsHash,
						gatewayUrl: qrCodeIPFS.url,
						pinSize: qrCodeIPFS.PinSize,
						timestamp: `${new Date().toISOString()}`,
						name: qrCodeIPFS.name,
						metadata: qrCodeIPFS.metadata,
						contentType: "qr_code",
				  }
				: null,
			publicData,
			message: "Website password stored successfully as QR code and zelfProof string",
		};

		return result;
	} catch (error) {
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

		// Create metadata structure for notes
		const metadata = keyValuePairs;

		// Create public data
		const publicData = {
			type: "notes",
			title,
			pairCount: Object.keys(keyValuePairs || {}).length,
			timestamp: `${new Date().toISOString()}`,
		};

		// Encrypt using ZelfProof module
		const { zelfQR } = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `notes_${title}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		const { zelfProof } = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `notes_${title}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		// Pin the QR code to IPFS if available
		let qrCodeIPFS = null;
		if (zelfQR) {
			try {
				qrCodeIPFS = await pinata.pinFile(zelfQR, `zelfkey_notes_${title}_${Date.now()}.png`, "image/png", {
					...publicData,
					contentType: "qr_code",
				});
			} catch (ipfsError) {
				console.warn("Failed to pin QR code to IPFS, continuing without IPFS:", ipfsError.message);
			}
		}

		return {
			success: true,
			zelfProof: zelfQR, // QR code data URL for tests
			zelfQR: zelfProof, // Encrypted string
			ipfs: qrCodeIPFS
				? {
						hash: qrCodeIPFS.IpfsHash,
						gatewayUrl: qrCodeIPFS.url,
						pinSize: qrCodeIPFS.PinSize,
						timestamp: `${new Date().toISOString()}`,
						name: qrCodeIPFS.name,
						metadata: qrCodeIPFS.metadata,
						contentType: "qr_code",
				  }
				: null,
			publicData,
			message: "Notes stored successfully",
		};
	} catch (error) {
		console.error("Error storing notes:", { error });
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

		// Validate credit card data
		if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) {
			throw new Error("Invalid credit card number");
		}

		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth() + 1;

		if (parseInt(expiryYear) < currentYear || (parseInt(expiryYear) === currentYear && parseInt(expiryMonth) < currentMonth)) {
			throw new Error("Credit card has expired");
		}

		if (parseInt(expiryMonth) < 1 || parseInt(expiryMonth) > 12) {
			throw new Error("Invalid expiry month");
		}

		// Create metadata structure for credit card
		const metadata = {
			cardNumber,
			expiryMonth,
			expiryYear,
			cvv,
		};

		// Create public data (masked sensitive info)
		const publicData = {
			type: "credit_card",
			cardName,
			cardNumber: `****-****-****-${cardNumber.slice(-4)}`,
			expiryMonth,
			expiryYear,
			bankName,
			timestamp: `${new Date().toISOString()}`,
		};

		// Encrypt using ZelfProof module
		const { zelfQR } = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `creditcard_${bankName}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		const { zelfProof } = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `creditcard_${bankName}_${Date.now()}`,
		});

		return {
			success: true,
			zelfProof: zelfQR, // QR code data URL for tests
			zelfQR: zelfProof, // Encrypted string
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

		// Validate contact data
		if (!email && !phone && !address) {
			throw new Error("At least one contact method (email, phone, or address) is required");
		}

		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			throw new Error("Invalid email format");
		}

		if (phone && phone.length < 7) {
			throw new Error("Phone number is too short");
		}

		// Create metadata structure for contact
		const metadata = {
			name,
			email,
			phone,
			address,
			company,
		};

		// Create public data
		const publicData = {
			type: "contact",
			name,
			email: email ? "***" + email.slice(-3) : "***",
			phone: phone ? "***" + phone.slice(-4) : "***",
			timestamp: `${new Date().toISOString()}`,
		};

		// Encrypt using ZelfProof module
		const { zelfQR } = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `contact_${name}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		const { zelfProof } = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `contact_${name}_${Date.now()}`,
		});

		return {
			success: true,
			zelfProof: zelfQR, // QR code data URL for tests
			zelfQR: zelfProof, // Encrypted string
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

		// Validate bank details
		if (!routingNumber || routingNumber.length !== 9) {
			throw new Error("Routing number must be exactly 9 digits");
		}

		const validAccountTypes = ["checking", "savings", "money_market", "cd", "ira", "roth_ira"];
		if (!validAccountTypes.includes(accountType)) {
			throw new Error("Invalid account type");
		}

		// Create metadata structure for bank details
		const metadata = {
			accountNumber,
			routingNumber,
			accountType,
		};

		// Create public data (masked sensitive info)
		const publicData = {
			type: "bank_details",
			bankName,
			accountNumber: `****${accountNumber.slice(-4)}`,
			accountType,
			accountHolder,
			timestamp: `${new Date().toISOString()}`,
		};

		// Encrypt using ZelfProof module
		const { zelfQR } = await ZelfProofModule.encryptQRCode({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `bank_${bankName}_${Date.now()}`,
			requireLiveness: true,
			tolerance: "REGULAR",
			os: "DESKTOP",
		});

		const { zelfProof } = await ZelfProofModule.encrypt({
			publicData,
			metadata,
			faceBase64,
			password: masterPassword,
			identifier: `bank_${bankName}_${Date.now()}`,
		});

		return {
			success: true,
			zelfProof: zelfQR, // QR code data URL for tests
			zelfQR: zelfProof, // Encrypted string
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
		let result;
		switch (type) {
			case "password":
				result = await storePassword({ ...payload, faceBase64, masterPassword: password });
				break;

			case "notes":
				result = await storeNotes({ ...payload, faceBase64, masterPassword: password });
				break;

			case "credit_card":
				result = await storeCreditCard({ ...payload, faceBase64, masterPassword: password });
				break;

			case "contact":
				result = await storeContact({ ...payload, faceBase64, masterPassword: password });
				break;

			case "bank_details":
				result = await storeBankDetails({ ...payload, faceBase64, masterPassword: password });
				break;

			default:
				throw new Error(`Unsupported data type: ${type}`);
		}

		// Add IPFS information if available
		if (result.ipfs) {
			result.message += ` | IPFS: ${result.ipfs.hash}`;
		}

		return result;
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

/**
 * Create NFT-ready data structure from ZelfKey storage
 * This function prepares the data for NFT minting with proper metadata
 * @param {Object} data
 * @param {string} data.zelfProof - Encrypted ZelfProof string
 * @param {string} data.faceBase64 - User's face for verification
 * @param {string} data.password - User's master password
 * @returns {Promise<Object>} NFT-ready data structure
 */
const createNFTReadyData = async (data) => {
	try {
		const { zelfProof, faceBase64, password } = data;

		// First, retrieve the data to get the IPFS information
		const retrievedData = await retrieveData({
			zelfProof,
			faceBase64,
			password,
		});

		if (!retrievedData.success || !retrievedData.data.ipfs) {
			throw new Error("No IPFS data available for NFT creation");
		}

		const { ipfs, publicData } = retrievedData.data;

		// Create NFT-ready structure
		const nftReadyData = {
			success: true,
			zelfKeyData: {
				publicData,
				ipfs: {
					hash: ipfs.hash,
					gatewayUrl: ipfs.gatewayUrl,
					pinSize: ipfs.pinSize,
					timestamp: ipfs.timestamp,
					name: ipfs.name,
					metadata: ipfs.metadata,
					contentType: ipfs.contentType,
				},
				message: `NFT-ready data created from ${publicData.type}`,
				timestamp: new Date().toISOString(),
			},
			nftMetadata: {
				name: `ZelfKey ${publicData.type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
				description: `Secure ${publicData.type.replace(/_/g, " ")} stored with ZelfKey biometric encryption`,
				image: ipfs.gatewayUrl,
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
						value: ipfs.hash,
					},
					{
						trait_type: "Timestamp",
						value: ipfs.timestamp,
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
							uri: ipfs.gatewayUrl,
						},
					],
					category: "image",
					zelfKey: {
						type: publicData.type,
						encrypted: true,
						biometric: true,
						ipfs: {
							hash: ipfs.hash,
							gateway: ipfs.gatewayUrl,
						},
					},
				},
			},
			message: "NFT-ready data structure created successfully",
		};

		return nftReadyData;
	} catch (error) {
		console.error("Error creating NFT-ready data:", error);
		throw new Error(`Failed to create NFT-ready data: ${error.message}`);
	}
};

export { storeData, storePassword, storeNotes, storeCreditCard, storeContact, storeBankDetails, retrieveData, previewData, createNFTReadyData };
