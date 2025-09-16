/**
 * Unprotected repository routes for the hackathon project
 */

import authRoute from "../Repositories/ZelfProof/routes/auth.route.js";
import zelfProofRoute from "../Repositories/ZelfProof/routes/zelf-proof.route.js";
import licenseRoute from "../Repositories/License/routes/license.route.js";

import sessionRoutes from "../Repositories/Session/routes/session.routes.js";
import subscriptionRoute from "../Repositories/Subscription/routes/subscription.routes.js";
import stripeResultRoute from "./stripe-result.js";
import stageTwoDemoRoute from "./stage-two-demo.js";

export default (router) => {
    // Register authentication routes (unprotected)
    authRoute(router);

    // Register ZelfProof routes (unprotected)
    zelfProofRoute(router);

    // Register License routes (unprotected)
    licenseRoute(router);

    // Register Session routes (unprotected)
    sessionRoutes(router);

    // Register Subscription routes (unprotected endpoints: plans, webhook)
    subscriptionRoute(router);

    // Register Stripe result routes (unprotected checkout success/failure pages)
    stripeResultRoute(router);

    // Register Stage Two demo video route (unprotected showcase page)
    stageTwoDemoRoute(router);
};
