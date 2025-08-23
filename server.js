const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const config = require("./Core/config");
const secret = config.JWT_SECRET; // Replace with your secret key
const cors = require("@koa/cors");
const { koaSwagger } = require("koa2-swagger-ui");
const app = new Koa();
app.proxy = true; // Trust the proxy's X-Forwarded-For header
app.use(bodyParser());

// Enable CORS
app.use(cors());

// Import Swagger configuration
const swaggerSpec = require("./Core/swagger.config");

// Swagger UI middleware
app.use(
	koaSwagger({
		routePrefix: "/swagger", // Swagger UI endpoint
		swaggerOptions: {
			url: "/swagger.json", // Swagger JSON endpoint
			spec: swaggerSpec,
		},
	})
);

// Swagger JSON endpoint
app.use(async (ctx, next) => {
	if (ctx.path === "/swagger.json") {
		ctx.body = swaggerSpec;
		return;
	}
	await next();
});

// JWT error handling
app.use((ctx, next) => {
	return next().catch((err) => {
		if (err.status === 401) {
			ctx.status = 401;
			ctx.body = { error: "Protected resource, use Authorization header to get access" };
		} else {
			throw err;
		}
	});
});

const server = app.listen(config.port, () => {
	console.info(`Server running on port ${config.port}`);

	// Unprotected routes
	const unprotectedRoutes = require("./Routes/unprotected");

	app.use(unprotectedRoutes.routes());

	app.use(jwt({ secret }));

	// Protected routes
	const protectedRoutes = require("./Routes/protected");

	app.use(protectedRoutes.routes());

	console.info(`1. initialized routes.`);
});

process.on("unhandledRejection", (reason, p) => {
	console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
	cleanup()
		.catch(console.error)
		.then(() => {
			console.info("exiting...");
			process.exit(1);
		});
});

const cleanup = () => {
	return new Promise((resolve, reject) => {
		console.info("Cleanup initiated...");
		server.close((err) => {
			if (err) {
				console.error("Error closing server:", err);
				reject(err);
			} else {
				console.info("Server closed");
				resolve();
			}
		});
	});
};

process.on("SIGINT", () => {
	console.info("SIGINT: Attempting to terminate");
	cleanup()
		.catch(console.error)
		.then(() => {
			console.info("exiting...");
			process.exit(0);
		});
});

process.on("SIGTERM", () => {
	console.info("SIGTERM: Attempting to terminate");
	cleanup()
		.catch(console.error)
		.then(() => {
			console.info("exiting...");
			process.exit(0);
		});
});

// Handle nodemon restarts (if you are using it)
process.once("SIGUSR2", () => {
	console.info("SIGUSR2: Attempting to terminate");
	cleanup()
		.catch(console.error)
		.then(() => {
			console.info("Exiting...");
			setTimeout(() => {
				process.kill(process.pid, "SIGUSR2");
				console.info("exited..");
			}, 1000); // 1-second delay to ensure cleanup completes
		});
});
