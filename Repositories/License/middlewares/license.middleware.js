/**
 * License Middleware - Validation and preprocessing for license operations
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Validate license request
 * @param {Object} ctx - Koa context
 * @param {Function} next - Next middleware function
 */
const validateGlobalLicense = async (ctx, next) => {
    return await next();
};

export { validateGlobalLicense };
