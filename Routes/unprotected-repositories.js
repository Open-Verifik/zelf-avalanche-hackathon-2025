/**
 * Unprotected repository routes for the hackathon project
 */

module.exports = (router) => {
	// Register authentication routes (unprotected)
	require("../Repositories/ZelfProof/routes/auth.route")(router);

	// Register ZelfProof routes (unprotected)
	require("../Repositories/ZelfProof/routes/zelf-proof.route")(router);
};
