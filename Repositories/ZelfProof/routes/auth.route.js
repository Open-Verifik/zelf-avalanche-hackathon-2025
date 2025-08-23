const config = require("../../../Core/config");
const Controller = require("../controllers/auth.controller");
const Middleware = require("../middlewares/auth.middleware");

const base = "/auth";

/**
 * @swagger
 * components:
 *   schemas:
 *     AuthRequest:
 *       type: object
 *       required: [email, apiKey]
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User email for authentication
 *           example: "user@example.com"
 *         apiKey:
 *           type: string
 *           description: API key for authentication
 *           example: "your-api-key-here"
 *     AuthResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Whether authentication was successful
 *           example: true
 *         token:
 *           type: string
 *           description: JWT token for accessing protected endpoints
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         expiresIn:
 *           type: string
 *           description: Token expiration time
 *           example: "24h"
 *         message:
 *           type: string
 *           description: Success message
 *           example: "Authentication successful"
 *     AuthError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error type
 *           example: "Invalid credentials"
 *         message:
 *           type: string
 *           description: Error message
 *           example: "Email or API key is incorrect"
 */

module.exports = (server) => {
	const PATH = config.basePath(base);

	/**
	 * @swagger
	 * /api/auth/authenticate:
	 *   post:
	 *     summary: Authenticate user and get JWT token
	 *     description: Authenticate user with email and API key to receive a JWT token for accessing protected endpoints.
	 *     tags: [Authentication]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/AuthRequest'
	 *     responses:
	 *       200:
	 *         description: Authentication successful
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/AuthResponse'
	 *       400:
	 *         description: Validation error or missing fields
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 error:
	 *                   type: string
	 *                   example: "Missing required fields"
	 *                 details:
	 *                   type: object
	 *                   properties:
	 *                     email:
	 *                       type: string
	 *                       example: "Email is required"
	 *                     apiKey:
	 *                       type: string
	 *                       example: "X-API-Key header is required"
	 *       401:
	 *         description: Invalid credentials
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/AuthError'
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/AuthError'
	 */
	server.post(`${PATH}/authenticate`, Middleware.authValidation, Controller.authenticate);
};
