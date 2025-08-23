import { validate } from "../../../Utilities/helper.module.js";

/**
 * Validation schemas
 */
const schemas = {
	encrypt: {
		livenessDetectionPriorCreation: { required: false },
		publicData: { required: true, minKeys: 1 },
		livenessLevel: { required: false, enum: ["REGULAR", "SOFT", "HARDENED"] },
		metadata: { required: true, minKeys: 1 },
		os: { required: true, enum: ["DESKTOP", "ANDROID", "IOS"] },
		password: { required: false },
		identifier: { required: true },
		faceBase64: { required: true, isBase64Image: true },
		requireLiveness: { required: false },
		tolerance: { required: false, enum: ["REGULAR", "SOFT", "HARDENED"] },
	},
	decrypt: {
		faceBase64: { required: true, isBase64Image: true },
		os: { required: true, enum: ["DESKTOP", "ANDROID", "IOS"] },
		zelfProof: { required: true },
		password: { required: false },
		verifierKey: { required: false },
	},
	preview: {
		zelfProof: { required: true },
		verifierKey: { required: false },
	},
};

/**
 * Encrypt validation middleware
 */
const encryptValidation = async (ctx, next) => {
	const valid = validate(schemas.encrypt, ctx.request.body);

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
 * Decrypt validation middleware
 */
const decryptValidation = async (ctx, next) => {
	const valid = validate(schemas.decrypt, ctx.request.body);

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
 * Preview validation middleware
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

export { encryptValidation, decryptValidation, previewValidation };
