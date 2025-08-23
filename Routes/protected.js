const Router = require("@koa/router");

const router = new Router();

require("./protected-repositories")(router);

module.exports = router;
