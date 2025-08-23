/**
 * Simple validation utility for authentication
 */
const validate = (schema, data) => {
	const errors = [];

	for (const [key, rules] of Object.entries(schema)) {
		if (rules.required && !data[key]) {
			errors.push(`${key} is required`);
		}

		if (rules.type && data[key] && typeof data[key] !== rules.type) {
			errors.push(`${key} must be a ${rules.type}`);
		}
	}

	return {
		error: errors.length > 0 ? { message: errors.join(", ") } : null,
	};
};

/**
 * Validation schema for authentication
 */
const authSchema = {
	email: {
		required: true,
		type: "string",
	},
	apiKey: {
		required: true,
		type: "string",
	},
};

/**
 * Authentication validation middleware
 */
const authValidation = async (ctx, next) => {
	const valid = validate(authSchema, ctx.request.body);

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

module.exports = {
	authValidation,
};
