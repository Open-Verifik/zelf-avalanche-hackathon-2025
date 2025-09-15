/**
 * Protected repository routes for the hackathon project
 */

import zelfKeyRoute from "../Repositories/ZelfKey/routes/zelf-key.route.js";

import subscriptionProtectedRoute from "../Repositories/Subscription/routes/subscription-protected.routes.js";

export default (router) => {
    // Register ZelfProof routes
    // Register Protected Subscription routes
    subscriptionProtectedRoute(router);
    // Register ZelfKey routes (unprotected)
    zelfKeyRoute(router);
};
