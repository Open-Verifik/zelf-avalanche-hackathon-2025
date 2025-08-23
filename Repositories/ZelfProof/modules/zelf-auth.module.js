const axios = require("axios");
const config = require("../../../Core/config");

let credentials = null;

/**
 * Authenticate user with email and API key by calling external Zelf API
 * @param {string} email - User email
 * @param {string} apiKey - API key from request body
 * @returns {Promise<Object>} Authentication result with JWT token from Zelf API
 */
const authenticateUser = async (email, apiKey) => {
	try {
		// Create axios instance for external API call
		const authInstance = axios.create({
			timeout: 25000,
			baseURL: config.zelfProof.url,
		});

		// Set the API key in headers
		authInstance.defaults.headers.common["X-API-Key"] = apiKey;

		// Call the external Zelf API to authenticate
		const response = await authInstance.post("/api/clients/auth", {
			email: email,
		});

		// Return the response from the external API
		return {
			success: true,
			token: response.data.token || response.data.access_token,
			expiresIn: response.data.expires_in || "24h",
			message: "Authentication successful",
			data: response.data, // Include any additional data from the external API
		};
	} catch (error) {
		console.error("External API authentication error:", error.response?.data || error.message);

		// Handle specific external API error messages
		if (error.response?.data?.error) {
			const apiError = error.response.data.error;

			if (apiError === "client_not_found" || apiError === "client_invalid_api_key") {
				throw new Error("Invalid credentials");
			} else if (apiError === "invalid_request" || apiError === "missing_fields") {
				throw new Error("Invalid request data");
			}
		}

		// Fallback to status code handling
		if (error.response?.status === 401) {
			throw new Error("Invalid credentials");
		} else if (error.response?.status === 400) {
			throw new Error("Invalid request data");
		} else {
			throw new Error("Authentication failed - external API error");
		}
	}
};

const getAuthInstance = async () => {
	const authInstance = axios.create({
		timeout: 25000,
		baseURL: config.zelfProof.url,
	});

	authInstance.defaults.headers.common["X-API-Key"] = config.zelfProof.apiKey;

	const credentials = await authInstance.post("/zelf/clients/auth", {
		email: config.zelfProof.email,
	});

	credentials = credentials.data;
};

const getEncryptionInstance = async () => {
	_encryptionInstance = axios.create({
		timeout: 25000,
		baseURL: config.zelfProof.url,
	});

	await getAuthInstance();

	_encryptionInstance.defaults.headers.common["Authorization"] = `Bearer ${credentials.token}`;

	return _encryptionInstance;
};

module.exports = {
	authenticateUser,
	getEncryptionInstance,
};
