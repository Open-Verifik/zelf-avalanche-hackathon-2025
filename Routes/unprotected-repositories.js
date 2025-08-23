/**
 * Unprotected repository routes for the hackathon project
 */

import authRoute from "../Repositories/ZelfProof/routes/auth.route.js";
import zelfProofRoute from "../Repositories/ZelfProof/routes/zelf-proof.route.js";
import zelfKeyRoute from "../Repositories/ZelfKey/routes/zelf-key.route.js";
import sessionRoutes from "../Repositories/Session/routes/session.routes.js";

export default (router) => {
	// Register authentication routes (unprotected)
	authRoute(router);

	// Register ZelfProof routes (unprotected)
	zelfProofRoute(router);

	// Register Session routes (unprotected)
	sessionRoutes(router);
};
