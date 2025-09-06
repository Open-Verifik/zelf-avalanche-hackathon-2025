import { validate } from "../../../Utilities/helper.module.js";

/**
 * ZelfKey Middleware - Business logic validation for password manager operations
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Supported data categories for ZelfKey storage
 */
const SUPPORTED_CATEGORIES = ["password", "notes", "credit_card", "contact"];

/**
 * Validation schemas for different data types
 */
const schemas = {
	// Generic store data schema
	storeData: {
		type: { required: true, enum: SUPPORTED_CATEGORIES },
		payload: { required: true, minKeys: 1 },
		faceBase64: { required: true, isBase64Image: true },
		password: { required: true },
	},

	// Website password schema
	password: {
		website: { required: true, minLength: 1 },
		username: { required: true, minLength: 1 },
		password: { required: true, minLength: 1 },
		folder: { required: false },
		insideFolder: { required: false },
		notes: { required: false },
		faceBase64: { required: true, isBase64Image: true },
		password: { required: true },
	},

	// Notes schema (key-value pairs)
	notes: {
		title: { required: true, minLength: 1, maxLength: 100 },
		keyValuePairs: { required: true, minKeys: 1, maxKeys: 10 },
		faceBase64: { required: true, isBase64Image: true },
		folder: { required: false },
		insideFolder: { required: false },
		password: { required: false },
	},

	// Credit card schema
	creditCard: {
		cardName: { required: true, minLength: 1 },
		cardNumber: { required: true, minLength: 13, maxLength: 19 },
		expiryMonth: { required: true, enum: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"] },
		expiryYear: { required: true, minLength: 4, maxLength: 4 },
		cvv: { required: true, minLength: 3, maxLength: 4 },
		bankName: { required: true, minLength: 1 },
		faceBase64: { required: true, isBase64Image: true },
		folder: { required: false },
		insideFolder: { required: false },
		password: { required: false },
	},
	// Retrieve data schema
	retrieve: {
		zelfProof: { required: true },
		faceBase64: { required: true, isBase64Image: true },
		password: { required: false },
	},
	// Preview data schema
	preview: {
		zelfProof: { required: true },
		faceBase64: { required: true, isBase64Image: true },
	},
	// List data schema
	list: {
		category: { required: true, enum: SUPPORTED_CATEGORIES },
	},
};

/**
 * Generic store data validation middleware
 */
const storeDataValidation = async (ctx, next) => {
	const valid = validate(schemas.storeData, ctx.request.body);

	if (valid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	// Additional business logic validation
	const { type, payload } = ctx.request.body;

	// Validate payload based on type
	let payloadSchema;
	switch (type) {
		case "password":
			payloadSchema = schemas.password;
			break;
		case "notes":
			payloadSchema = schemas.notes;
			break;
		case "credit_card":
			payloadSchema = schemas.creditCard;
			break;

		default:
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: `Unsupported data type: ${type}`,
			};
			return;
	}

	// Validate payload against type-specific schema
	const payloadValid = validate(payloadSchema, { ...payload, faceBase64: ctx.request.body.faceBase64, password: ctx.request.body.password });

	if (payloadValid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: payloadValid.error.message,
		};
		return;
	}

	// Additional business logic validation based on type
	switch (type) {
		case "notes":
			// Validate notes business logic: validate key-value pairs
			const notesKeyValuePairs = payload.keyValuePairs;
			const notesPairs = Object.entries(notesKeyValuePairs || {});

			if (notesPairs.length === 0) {
				ctx.status = 400;
				ctx.body = {
					error: "Validation error",
					message: "At least one key-value pair is required",
				};
				return;
			}

			// Validate maximum number of key-value pairs
			if (notesPairs.length > 10) {
				ctx.status = 400;
				ctx.body = {
					error: "Validation error",
					message: "Maximum 10 key-value pairs allowed",
				};
				return;
			}

			// Validate each key-value pair
			for (const [key, value] of notesPairs) {
				if (!key || key.trim().length === 0) {
					ctx.status = 400;
					ctx.body = {
						error: "Validation error",
						message: "Key names cannot be empty",
					};
					return;
				}
				if (key.length > 50) {
					ctx.status = 400;
					ctx.body = {
						error: "Validation error",
						message: "Key names cannot exceed 50 characters",
					};
					return;
				}
				if (typeof value !== "string" || value.length > 1000) {
					ctx.status = 400;
					ctx.body = {
						error: "Validation error",
						message: "Values must be strings and cannot exceed 1000 characters",
					};
					return;
				}
			}
			break;

		case "credit_card":
			// Validate credit card business logic
			const { cardNumber, expiryMonth, expiryYear } = payload;

			// Basic Luhn algorithm check for credit card
			if (!isValidCreditCard(cardNumber)) {
				ctx.status = 400;
				ctx.body = {
					error: "Validation error",
					message: "Invalid credit card number",
				};
				return;
			}

			// Validate expiry date
			const currentYear = new Date().getFullYear();
			const currentMonth = new Date().getMonth() + 1;

			if (parseInt(expiryYear) < currentYear || (parseInt(expiryYear) === currentYear && parseInt(expiryMonth) < currentMonth)) {
				ctx.status = 400;
				ctx.body = {
					error: "Validation error",
					message: "Credit card has expired",
				};
				return;
			}
			break;
	}

	await next();
};

/**
 * Store password validation middleware
 */
const storePasswordValidation = async (ctx, next) => {
	const valid = validate(schemas.password, ctx.request.body);

	if (valid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	await next();
};

/**
 * Store notes validation middleware
 */
const storeNotesValidation = async (ctx, next) => {
	const valid = validate(schemas.notes, ctx.request.body);

	if (valid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	// Additional business logic: validate key-value pairs
	const { keyValuePairs } = ctx.request.body;
	const pairs = Object.entries(keyValuePairs || {});

	if (pairs.length === 0) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: "At least one key-value pair is required",
		};
		return;
	}

	// Validate maximum number of key-value pairs
	if (pairs.length > 10) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: "Maximum 10 key-value pairs allowed",
		};
		return;
	}

	// Validate each key-value pair
	for (const [key, value] of pairs) {
		if (!key || key.trim().length === 0) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Key names cannot be empty",
			};
			return;
		}
		if (key.length > 50) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Key names cannot exceed 50 characters",
			};
			return;
		}
		if (typeof value !== "string" || value.length > 1000) {
			ctx.status = 400;
			ctx.body = {
				error: "Validation error",
				message: "Values must be strings and cannot exceed 1000 characters",
			};
			return;
		}
	}

	await next();
};

/**
 * Store credit card validation middleware
 */
const storeCreditCardValidation = async (ctx, next) => {
	const valid = validate(schemas.creditCard, ctx.request.body);

	if (valid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	// Additional business logic: validate credit card number format
	const { cardNumber, expiryMonth, expiryYear } = ctx.request.body;

	// Basic Luhn algorithm check for credit card
	if (!isValidCreditCard(cardNumber)) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: "Invalid credit card number",
		};
		return;
	}

	// Validate expiry date
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;

	if (parseInt(expiryYear) < currentYear || (parseInt(expiryYear) === currentYear && parseInt(expiryMonth) < currentMonth)) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: "Credit card has expired",
		};
		return;
	}

	await next();
};

/**
 * Retrieve data validation middleware
 */
const retrieveValidation = async (ctx, next) => {
	const valid = validate(schemas.retrieve, ctx.request.body);

	if (valid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	await next();
};

const listValidation = async (ctx, next) => {
	const valid = validate(schemas.list, ctx.request.query);

	if (valid.error) {
		ctx.status = 400;

		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	await next();
};

/**
 * Preview data validation middleware
 */
const previewValidation = async (ctx, next) => {
	const valid = validate(schemas.preview, ctx.request.body);

	if (valid.error) {
		ctx.status = 400;
		ctx.body = {
			error: "Validation error",
			message: valid.error.message,
		};
		return;
	}

	await next();
};

/**
 * Luhn algorithm for credit card validation
 * @param {string} cardNumber - Credit card number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidCreditCard(cardNumber) {
	// Remove spaces and dashes
	const cleanNumber = cardNumber.replace(/\s+/g, "").replace(/-/g, "");

	// Check if it's all digits
	if (!/^\d+$/.test(cleanNumber)) {
		return false;
	}

	let sum = 0;
	let isEven = false;

	// Loop through values starting from the rightmost side
	for (let i = cleanNumber.length - 1; i >= 0; i--) {
		let digit = parseInt(cleanNumber.charAt(i));

		if (isEven) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}

		sum += digit;
		isEven = !isEven;
	}

	return sum % 10 === 0;
}

export {
	SUPPORTED_CATEGORIES,
	storeDataValidation,
	storePasswordValidation,
	storeNotesValidation,
	storeCreditCardValidation,
	retrieveValidation,
	previewValidation,
	listValidation,
};
