/**
 * Protected repository routes for the hackathon project
 */

module.exports = (router) => {
	// Register ZelfProof routes
	require("../Repositories/ZelfProof/routes/zelf-proof.route")(router);
};
