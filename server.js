import Koa from "koa";
import bodyParser from "koa-bodyparser";
import config from "./Core/config.js";
import cors from "@koa/cors";
import { koaSwagger } from "koa2-swagger-ui";
import swaggerSpec from "./Core/swagger.config.js";
import unprotectedRoutes from "./Routes/unprotected.js";
import protectedRoutes from "./Routes/protected.js";
import http from "http";

const app = new Koa();
app.proxy = true; // Trust the proxy's X-Forwarded-For header
app.use(bodyParser());

// Enable CORS
app.use(cors());

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

// Initialize routes before starting server
// Unprotected routes
app.use(unprotectedRoutes.routes());

// Custom JWT middleware for hackathon (accepts external tokens)
app.use(async (ctx, next) => {
	// Skip JWT validation for unprotected routes
	if (ctx.path.startsWith("/api/auth/") || ctx.path.startsWith("/swagger")) {
		return next();
	}

	const authHeader = ctx.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		ctx.status = 401;
		ctx.body = { error: "Protected resource, use Authorization header to get access" };
		return;
	}

	const token = authHeader.substring(7);

	try {
		// For hackathon: accept any JWT token that can be decoded
		// In production, you would verify the signature
		const parts = token.split(".");
		if (parts.length !== 3) {
			throw new Error("Invalid token format");
		}

		// Decode payload without verification
		const payload = JSON.parse(Buffer.from(parts[1], "base64").toString());

		// Check if token is expired
		if (payload.exp && Date.now() >= payload.exp * 1000) {
			ctx.status = 401;
			ctx.body = { error: "Token expired" };
			return;
		}

		// Set user info in context
		ctx.state.user = {
			id: payload.clientId || payload.sub,
			email: payload.email,
		};

		await next();
	} catch (error) {
		ctx.status = 401;
		ctx.body = { error: "Invalid token" };
	}
});

// Protected routes
app.use(protectedRoutes.routes());

console.info(`1. initialized routes.`);

// Create server instance
const server = http.createServer(app.callback());

// Only start listening if not in test mode
if (process.env.NODE_ENV !== "test") {
	server.listen(config.port, () => {
		console.info(`Server running on port ${config.port}`);
	});
}

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

// Export server for testing
export default server;
