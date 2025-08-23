const Router = require("@koa/router");

const router = new Router();

require("./unprotected-repositories")(router);

module.exports = router;
