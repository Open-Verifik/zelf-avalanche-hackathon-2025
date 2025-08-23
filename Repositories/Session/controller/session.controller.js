import * as Module from "../modules/session.module.js";

/**
 * @param {*} request - restify request
 * @param {*} response - restify response
 */
const create = async (ctx) => {
	try {
		// const origin = ctx.request.header.origin || null;
		// const referer = ctx.request.header.referer || null;
		const clientIp = ctx.request.ip;
		// const userAgent = ctx.request.header["user-agent"] || null;

		// const forwardedFor = ctx.request.header["x-forwarded-for"] || "No X-Forwarded-For header";

		// console.log(`Request Details:
		// 	Origin: ${origin}
		// 	Referer: ${referer}
		// 	Client IP: ${clientIp}
		// 	User Agent: ${userAgent}
		// 	X-Forwarded-For: ${forwardedFor}
		// `);

		// if (process.env.NODE_ENV === "production" && (!origin || !clientIp)) {
		// 	ctx.status = 403;

		// 	ctx.body = { error: "rejected" };

		// 	return;
		// }

		const data = await Module.insert({ ...ctx.request.body, clientIP: clientIp }, ctx.state.user);

		ctx.body = { data };
	} catch (error) {
		console.error({ error });

		ctx.status = error.status || 500;

		ctx.body = { error: error.message };
	}
};

const getPublicKey = async (ctx) => {
	try {
		const clientIP = ctx.request.ip;
		const { identifier, name, email } = ctx.request.query;

		const data = await Module.extractPublicKey({ identifier, clientIP, name, email });

		ctx.body = { data };
	} catch (error) {
		console.error({ error });

		ctx.status = error?.status || 500;

		ctx.body = { error: error?.message || error };
	}
};

const decryptContent = async (ctx) => {
	try {
		const data = await Module.decryptContent(ctx.request.body);

		ctx.body = { data };
	} catch (error) {
		ctx.status = error.status || 500;

		ctx.body = { error: error.message };
	}
};

export { create, getPublicKey, decryptContent };
