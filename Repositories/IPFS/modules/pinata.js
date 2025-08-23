const { PinataSDK } = require("pinata");
const { Blob } = require("buffer");
require("dotenv").config();
const FormData = require("form-data");
const axios = require("axios");

const pinataJwt = process.env.PINATA_JWT;
const pinataGateway = process.env.PINATA_GATEWAY_URL;

const pinata = new PinataSDK({
	pinataJwt,
	pinataGateway,
});

const os = process.env.ENVOS;

const pinataWeb3 = require("pinata-web3");

const web3Instance = new pinataWeb3.PinataSDK({
	pinataJwt,
	pinataGateway,
});

const upload = async (base64Image, filename = "image.png", mimeType = "image/png", metadata = {}) => {
	try {
		// Upload the file to Pinata
		const uploadResponse = await pinata.upload.base64(base64Image).addMetadata({
			name: filename,
			keyValues: metadata,
		});

		const expiresIn = 1800;

		const url = await pinata.gateways.createSignedURL({
			cid: uploadResponse.cid,
			expires: expiresIn,
			pinned: false,
			web3: false,
		});

		return { ...uploadResponse, url, urlExpiresIn: expiresIn, metadata };
	} catch (error) {
		console.error("Error uploading file:", error);
	}

	return null;
};

const retrieve = async (cid, expires = 1800) => {
	if (!cid) return null;

	try {
		const pinnedFiles = await web3Instance.listFiles().cid(cid);

		const url = await pinata.gateways.createSignedURL({
			cid,
			expires,
		});

		return { url, pinnedFiles };
	} catch (exception) {
		const error = new Error(exception.message || "file_not_found");

		error.status = exception.status || 404;

		throw error; // Rethrow to ensure higher-level code catches this.
	}
};

/**
 * pin a file into Pinata IPFS
 * @param {String} base64Image
 * @param {String} filename
 * @param {String} mimeType
 * @param {Object} metadata
 * @returns ipfs file
 */
const pinFile = async (base64Image, filename = "image.png", mimeType = "image/png", metadata = {}) => {
	if (os === "Win") return await pinFileWindows(base64Image, filename, mimeType, metadata);

	try {
		const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

		// Upload the file to Pinata
		const uploadResponse = await web3Instance.upload.base64(base64Data).addMetadata({
			name: filename,
			keyValues: metadata,
		});

		return {
			url: `https://${pinataGateway}/ipfs/${uploadResponse.IpfsHash}`,
			...uploadResponse,
			Keyvalues: undefined,
			pinned: true,
			web3: true,
			name: filename,
			metadata: uploadResponse.Keyvalues,
		};
	} catch (error) {
		console.error(error);
	}

	return null;
};

const pinFileWindows = async (base64Image, filename = "image.png", mimeType = "image/png", metadata = {}) => {
	const PINATA_API_KEY = process.env.PINATA_API_KEY;

	const PINATA_SECRET_API_KEY = process.env.PINATA_API_SECRET;

	try {
		const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");

		const formData = new FormData();

		const buffer = Buffer.from(base64Data, "base64");
		formData.append("file", buffer, filename);

		if (metadata) {
			formData.append(
				"pinataMetadata",
				JSON.stringify({
					name: filename,
					keyvalues: metadata,
				})
			);
		}

		const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
			headers: {
				...formData.getHeaders(),
				pinata_api_key: PINATA_API_KEY,
				pinata_secret_api_key: PINATA_SECRET_API_KEY,
			},
		});

		const uploadResponse = response.data;

		return {
			url: `https://${pinataGateway}/ipfs/${uploadResponse.IpfsHash}`,
			...uploadResponse,
			pinned: true,
			web3: true,
			name: filename,
			metadata,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};
const filter = async (property = "name", value) => {
	let files;

	switch (property) {
		case "name":
			files = await web3Instance.listFiles().name(value);
			break;

		default:
			files = await web3Instance.listFiles().keyValue(property, value);

			break;
	}

	if (!files.length) return [];

	for (let index = 0; index < files.length; index++) {
		const file = files[index];

		file.url = `https://${pinataGateway}/ipfs/${file.ipfs_pin_hash}`;
	}

	return files;
};

const unPinFiles = async (CIDs = []) => {
	return await web3Instance.unpin(CIDs);
};

module.exports = {
	upload,
	retrieve,
	pinFile,
	pinFileWindows,
	filter,
	unPinFiles,
};
