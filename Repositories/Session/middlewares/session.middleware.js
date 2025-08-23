import { validate, string } from "../../../Core/JoiUtils.js";

const schema = {
	publicKey: {
		identifier: string().required(),
	},
	insert: {
		identifier: string().required(),
		address: string().required(),
	},
	decrypt: {
		message: string().required(),
	},
};

const createValidation = async (ctx, next) => {
	const valid = validate(schema.insert, ctx.request.body);

	if (valid.error) {
		ctx.status = 409;

		ctx.body = { validationError: valid.error.message };

		return;
	}

	return next();
};

const getPublicKeyValidation = async (ctx, next) => {
	const valid = validate(schema.publicKey, ctx.query);

	if (valid.error) {
		ctx.status = 409;

		ctx.body = { validationError: valid.error.message };

		return;
	}

	await next();
};

const decryptValidation = async (ctx, next) => {
	const valid = validate(schema.decrypt, ctx.request.body);

	if (valid.error) {
		ctx.status = 409;

		ctx.body = { validationError: valid.error.message };

		return;
	}

	await next();
};

const validateJWT = async (ctx, next) => {
	const authUser = ctx.state.user;

	if (!authUser.session) {
		await next();

		return;
	}

	await next();
};

export { createValidation, getPublicKeyValidation, decryptValidation, validateJWT };
