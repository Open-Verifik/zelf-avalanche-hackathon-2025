/**
 * Protected repository routes for the hackathon project
 */

import zelfKeyRoute from "../Repositories/ZelfKey/routes/zelf-key.route.js";

export default (router) => {
	// Register ZelfProof routes

	// Register ZelfKey routes (unprotected)
	zelfKeyRoute(router);
};
