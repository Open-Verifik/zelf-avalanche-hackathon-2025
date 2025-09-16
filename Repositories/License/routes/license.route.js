import * as Controller from "../controllers/license.controller.js";
import * as Middleware from "../middlewares/license.middleware.js";

/**
 * License Routes - License management API endpoints
 * @author Miguel Trevino <miguel@zelf.world>
 */
const PATH = "/api/license";

export default (server) => {
    // Get ZelfKeys license information
    server.get(`${PATH}/zelfkeys`, Middleware.validateGlobalLicense, Controller.getZelfKeysLicense);
};
