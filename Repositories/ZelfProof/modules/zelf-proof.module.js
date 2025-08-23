const axiosInstance = require("./zelf-auth.module");

/**
 * Encrypt into a ZelfProof
 * @param {Object} data
 * @param {string} data.publicData
 * @param {string} data.faceBase64
 * @param {string} data.metadata
 * @param {string} data.password
 * @param {string} data.identifier
 * @param {boolean} data.requireLiveness
 * @param {string} data.tolerance
 * @param {string} data.verifierKey
 * @returns {Promise<Object>}
 * @author Miguel Trevino <miguel@zelf.world>
 */
const encrypt = async (data) => {
	try {
		const axios = await axiosInstance.getEncryptionInstance();

		const { publicData, faceBase64, metadata, password, identifier, requireLiveness, tolerance, verifierKey, livenessLevel, os } = data;

		const encryptedResponse = await axios.post("/api/zelf-proof/encrypt", {
			publicData,
			faceBase64,
			metadata,
			password: password || undefined,
			identifier,
			requireLiveness,
			tolerance,
			verifierKey: verifierKey || undefined,
			livenessLevel: livenessLevel || "REGULAR",
			os: os || "DESKTOP",
		});

		const zelfProof = encryptedResponse.data.zelfProof;

		return { zelfProof };
	} catch (exception) {
		const _error = exception.response?.data;

		let error = new Error(_error?.message || "Something went wrong");

		switch (_error?.code || _error?.message) {
			case "ERR_INVALID_IMAGE":
				error.status = 400;

				break;

			default:
				break;
		}

		throw error;
	}
};

/**
 * Encrypt into a ZelfProof QR Code
 * @param {Object} data
 * @param {string} data.publicData
 * @param {string} data.faceBase64
 * @param {string} data.metadata
 * @param {string} data.password
 * @param {string} data.identifier
 * @param {boolean} data.requireLiveness
 * @param {string} data.tolerance
 * @param {string} data.verifierKey
 * @param {string} data.os
 * @returns {Promise<Object>}
 * @author Miguel Trevino <miguel@zelf.world>
 */
const encryptQRCode = async (data) => {
	try {
		const axios = await axiosInstance.getEncryptionInstance();

		const { publicData, faceBase64, metadata, password, identifier, requireLiveness, tolerance, verifierKey, os } = data;

		const encryptedResponse = await axios.post(
			"/api/zelf-proof/encrypt-qr-code",
			{
				publicData,
				faceBase64,
				metadata,
				password: password || undefined,
				identifier,
				requireLiveness,
				tolerance,
				verifierKey: verifierKey || undefined,
				os,
			},
			{ responseType: "arraybuffer" }
		);

		if (!encryptedResponse?.data) return encryptedResponse;

		const base64Image = Buffer.from(encryptedResponse.data).toString("base64");

		const zelfQR = `data:image/png;base64,${base64Image}`;

		return { zelfQR };
	} catch (exception) {
		const error = _formattingError(exception.response?.data);

		let _error = new Error(error.message);

		_error.status = error.status;

		throw _error;
	}
};

/**
 * Decrypt a ZelfProof
 * @param {Object} data
 * @param {string} data.faceBase64
 * @param {string} data.os
 * @param {string} data.password
 * @param {string} data.zelfProof
 * @param {string} data.verifierKey
 * @returns {Promise<Object>}
 * @author Miguel Trevino <miguel@zelf.world>
 */
const decrypt = async (data) => {
	try {
		const axios = await axiosInstance.getEncryptionInstance();

		const { zelfProof, faceBase64, os, password, verifierKey } = data;

		const encryptedResponse = await axios.post("/api/zelf-proof/decrypt", {
			faceBase64,
			os,
			password,
			zelfProof,
			verifierKey,
		});

		return encryptedResponse?.data;
	} catch (exception) {
		const error = _formattingError(exception.response?.data);

		let _error = new Error(error.message);

		_error.status = error.status;

		throw _error;
	}
};

/**
 * Preview a ZelfProof
 * @param {Object} data
 * @param {string} data.zelfProof
 * @param {string} data.verifierKey
 * @returns {Promise<Object>}
 * @author Miguel Trevino <miguel@zelf.world>
 */
const preview = async (data) => {
	try {
		const axios = await axiosInstance.getEncryptionInstance();

		const { zelfProof, verifierKey } = data;

		const encryptedResponse = await axios.post("/api/zelf-proof/preview", {
			zelfProof,
			verifierKey,
		});

		return encryptedResponse?.data;
	} catch (exception) {
		const error = _formattingError(exception.response?.data);

		let _error = new Error(error.message);

		_error.status = error.status;

		throw _error;
	}
};

/**
 * Format error messages for the hackathon project
 * @param {Object} error - Error object to format
 * @returns {Object} Formatted error object
 */
const _formattingError = (error = {}) => {
	if (error?.code) {
		error.code = error.code.toUpperCase();
	}

	if (error?.message) {
		error.message = error.message.toUpperCase();
	}

	return error;
};

module.exports = {
	encrypt,
	encryptQRCode,
	decrypt,
	preview,
};
