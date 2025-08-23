import Router from "@koa/router";
import protectedRepositories from "./protected-repositories.js";

const router = new Router();

protectedRepositories(router);

export default router;
