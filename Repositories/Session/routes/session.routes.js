import config from "../../../Core/config.js";
import * as Controller from "../controller/session.controller.js";
import * as Middleware from "../middlewares/session.middleware.js";

const base = "/sessions";

export default (server) => {
	const PATH = config.basePath(base);

	// Get public key for session
	server.get(`${PATH}/public-key`, Middleware.getPublicKeyValidation, Controller.getPublicKey);

	// Create new session
	server.post(`${PATH}`, Middleware.createValidation, Controller.create);

	// Decrypt content
	server.post(`${PATH}/decrypt-content`, Middleware.decryptValidation, Controller.decryptContent);
};
