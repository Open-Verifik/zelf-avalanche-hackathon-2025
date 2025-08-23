import Router from "@koa/router";
import unprotectedRepositories from "./unprotected-repositories.js";

const router = new Router();

unprotectedRepositories(router);

export default router;
