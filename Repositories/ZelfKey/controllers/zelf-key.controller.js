import * as Module from "../modules/zelf-key.module.js";

/**
 * ZelfKey Controller - Handles HTTP requests for password manager operations
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Store data (encrypt) - Main entry point for all data types
 * @param {Object} ctx - Koa context
 */
const storeData = async (ctx) => {
	try {
		const data = await Module.storeData(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Store website password specifically
 * @param {Object} ctx - Koa context
 */
const storePassword = async (ctx) => {
	try {
		const data = await Module.storePassword(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Store notes as key-value pairs
 * @param {Object} ctx - Koa context
 */
const storeNotes = async (ctx) => {
	try {
		const data = await Module.storeNotes(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Store credit card information
 * @param {Object} ctx - Koa context
 */
const storeCreditCard = async (ctx) => {
	try {
		const data = await Module.storeCreditCard(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Store contact information
 * @param {Object} ctx - Koa context
 */
const storeContact = async (ctx) => {
	try {
		const data = await Module.storeContact(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Store bank account details
 * @param {Object} ctx - Koa context
 */
const storeBankDetails = async (ctx) => {
	try {
		const data = await Module.storeBankDetails(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Retrieve stored data (decrypt)
 * @param {Object} ctx - Koa context
 */
const retrieveData = async (ctx) => {
	try {
		const data = await Module.retrieveData(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

/**
 * Preview stored data without full decryption
 * @param {Object} ctx - Koa context
 */
const previewData = async (ctx) => {
	try {
		const data = await Module.previewData(ctx.request.body, ctx.state.user);
		ctx.body = { ...data };
	} catch (error) {
		console.error(error);
		ctx.status = error.status || 500;
		ctx.body = { error: error.message };
	}
};

export { storeData, storePassword, storeNotes, storeCreditCard, storeContact, storeBankDetails, retrieveData, previewData };
