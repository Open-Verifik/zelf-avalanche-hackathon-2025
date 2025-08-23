import { authenticateUser } from "../modules/zelf-auth.module.js";

/**
 * Authenticate user and return JWT token
 * @param {Object} ctx - Koa context
 */
const authenticate = async (ctx) => {
	try {
		const { email, apiKey } = ctx.request.body;

		// Validate required fields
		if (!email || !apiKey) {
			ctx.status = 400;
			ctx.body = {
				error: "Missing required fields",
				details: {
					email: !email ? "Email is required" : null,
					apiKey: !apiKey ? "API key is required" : null,
				},
			};
			return;
		}

		// Authenticate user
		const result = await authenticateUser(email, apiKey);

		ctx.status = 200;
		ctx.body = result;
	} catch (error) {
		console.error("Authentication error:", error);

		if (error.message === "Invalid credentials") {
			ctx.status = 401;
			ctx.body = {
				error: "Invalid credentials",
				message: "Email or API key is incorrect",
			};
		} else {
			ctx.status = 500;
			ctx.body = {
				error: "Authentication failed",
				message: error.message || "Something went wrong",
			};
		}
	}
};

export { authenticate };
