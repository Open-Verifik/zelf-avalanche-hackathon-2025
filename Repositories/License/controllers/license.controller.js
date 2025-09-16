import * as Module from "../modules/license.module.js";
import { errorHandler } from "../../../Core/http-handler.js";

/**
 * License Controller - Handles HTTP requests for license operations
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Get ZelfKeys license information
 * @param {Object} ctx - Koa context
 */
const getZelfKeysLicense = async (ctx) => {
    try {
        const result = await Module.getLicense(ctx.state.user);

        ctx.body = {
            data: result,
        };
    } catch (error) {
        const _exception = errorHandler(error, ctx);

        ctx.status = _exception.status;

        ctx.body = _exception;
    }
};

export { getZelfKeysLicense };
