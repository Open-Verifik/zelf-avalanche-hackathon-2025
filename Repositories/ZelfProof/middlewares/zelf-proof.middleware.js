/**
 * Simple validation utility for the hackathon project
 */
const validate = (schema, data) => {
	const errors = [];

	for (const [key, rules] of Object.entries(schema)) {
		if (rules.required && !data[key]) {
			errors.push(`${key} is required`);
		}

		if (rules.enum && data[key] && !rules.enum.includes(data[key])) {
			errors.push(`${key} must be one of: [${rules.enum.join(", ")}]`);
		}

		if (rules.minKeys && data[key] && typeof data[key] === "object") {
			const keyCount = Object.keys(data[key]).length;
			if (keyCount < rules.minKeys) {
				errors.push(`${key} must have at least ${rules.minKeys} keys`);
			}
		}
	}

	return {
		error: errors.length > 0 ? { message: errors.join(", ") } : null,
	};
};

/**
 * Validation schemas
 */
const schemas = {
	encrypt: {
		publicData: { required: true, minKeys: 1 },
		faceBase64: { required: true },
		metadata: { required: true, minKeys: 1 },
		os: { required: true, enum: ["DESKTOP", "ANDROID", "IOS"] },
		identifier: { required: true },
		requireLiveness: { required: false },
		tolerance: { required: false, enum: ["REGULAR", "SOFT", "HARDENED"] },
		password: { required: false },
		verifierKey: { required: false },
	},
	decrypt: {
		faceBase64: { required: true },
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
		ctx.status = 409;
		ctx.body = { validationError: valid.error.message };
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
		ctx.status = 409;
		ctx.body = { validationError: valid.error.message };
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
		ctx.status = 409;
		ctx.body = { validationError: valid.error.message };
		return;
	}

	await next();
};

module.exports = {
	encryptValidation,
	decryptValidation,
	previewValidation,
};
