const config = require("../../../Core/config");

const Controller = require("../controllers/zelf-proof.controller");

const Middleware = require("../middlewares/zelf-proof.middleware");

const base = "/zelf-proof";

/**
 * @swagger
 * components:
 *   schemas:
 *     ZelfProofEncryptRequest:
 *       type: object
 *       required: [publicData, faceBase64, livenessLevel, os, identifier]
 *       properties:
 *         livenessDetectionPriorCreation:
 *           type: boolean
 *           description: Whether to perform liveness detection before creation
 *           example: true
 *         publicData:
 *           type: object
 *           description: Public data to be encrypted (minimum 1 key required)
 *           example: { "name": "John Doe", "email": "john@example.com" }
 *         faceBase64:
 *           type: string
 *           description: Base64 encoded face image for biometric verification
 *           example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
 *         livenessLevel:
 *           type: string
 *           description: Liveness detection level
 *           example: "HIGH"
 *         metadata:
 *           type: object
 *           description: Additional metadata (minimum 1 key required)
 *           example: { "device": "iPhone 12", "location": "New York" }
 *         os:
 *           type: string
 *           enum: [DESKTOP, ANDROID, IOS]
 *           description: Operating system
 *           example: "IOS"
 *         password:
 *           type: string
 *           description: Optional password for additional security
 *           example: "secure_password_123"
 *         identifier:
 *           type: string
 *           description: Unique identifier for the proof
 *           example: "proof_123456789"
 *         referenceFaceBase64:
 *           type: string
 *           description: Reference face image for comparison
 *           example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
 *         requireLiveness:
 *           type: boolean
 *           description: Whether liveness detection is required
 *           example: true
 *         tolerance:
 *           type: string
 *           enum: [REGULAR, SOFT, HARDENED]
 *           description: Liveness tolerance level
 *           example: "REGULAR"
 *         verifierKey:
 *           type: string
 *           description: Optional verifier key for additional validation
 *           example: "verifier_key_123"
 *     ZelfProofDecryptRequest:
 *       type: object
 *       required: [faceBase64, os, zelfProof]
 *       properties:
 *         faceBase64:
 *           type: string
 *           description: Base64 encoded face image for biometric verification
 *           example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
 *         livenessLevel:
 *           type: string
 *           description: Liveness detection level
 *           example: "HIGH"
 *         os:
 *           type: string
 *           enum: [DESKTOP, ANDROID, IOS]
 *           description: Operating system
 *           example: "IOS"
 *         password:
 *           type: string
 *           description: Password used during encryption (if applicable)
 *           example: "secure_password_123"
 *         zelfProof:
 *           type: string
 *           description: Zelf proof data to decrypt
 *           example: "encrypted_zelf_proof_data"
 *         verifierKey:
 *           type: string
 *           description: Verifier key for validation (if applicable)
 *           example: "verifier_key_123"
 *     ZelfProofPreviewRequest:
 *       type: object
 *       required: [zelfProof]
 *       properties:
 *         zelfProof:
 *           type: string
 *           description: Zelf proof data to preview
 *           example: "zelf_proof_data"
 *         verifierKey:
 *           type: string
 *           description: Verifier key for validation (if applicable)
 *           example: "verifier_key_123"
 *     ZelfProofEncryptResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Whether the encryption was successful
 *           example: true
 *         zelfProof:
 *           type: string
 *           description: Encrypted zelf proof data
 *           example: "encrypted_proof_data_here"
 *         qrCode:
 *           type: string
 *           description: QR code data (for encrypt-qr-code endpoint)
 *           example: "qr_code_data_here"
 *         identifier:
 *           type: string
 *           description: Proof identifier
 *           example: "proof_123456789"
 *         metadata:
 *           type: object
 *           description: Additional metadata about the proof
 *           example: { "createdAt": "2024-01-15T00:00:00.000Z", "version": "2.0" }
 *     ZelfProofDecryptResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Whether the decryption was successful
 *           example: true
 *         publicData:
 *           type: object
 *           description: Decrypted public data
 *           example: { "name": "John Doe", "email": "john@example.com" }
 *         metadata:
 *           type: object
 *           description: Decrypted metadata
 *           example: { "device": "iPhone 12", "location": "New York" }
 *         identifier:
 *           type: string
 *           description: Proof identifier
 *           example: "proof_123456789"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the proof was created
 *           example: "2024-01-15T00:00:00.000Z"
 *     ZelfProofPreviewResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Whether the preview was successful
 *           example: true
 *         preview:
 *           type: object
 *           description: Preview data without full decryption
 *           properties:
 *             identifier:
 *               type: string
 *               description: Proof identifier
 *               example: "proof_123456789"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: When the proof was created
 *               example: "2024-01-15T00:00:00.000Z"
 *             hasPublicData:
 *               type: boolean
 *               description: Whether the proof contains public data
 *               example: true
 *             hasMetadata:
 *               type: boolean
 *               description: Whether the proof contains metadata
 *               example: true
 *             isEncrypted:
 *               type: boolean
 *               description: Whether the proof is encrypted
 *               example: true
 *     ZelfProofError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *           example: "Invalid face image"
 *     ZelfProofValidationError:
 *       type: object
 *       properties:
 *         validationError:
 *           type: string
 *           description: Validation error message
 *           example: "faceBase64 is required"
 */

module.exports = (server) => {
	const PATH = config.basePath(base);

	/**
	 * @swagger
	 * /api/zelf-proof/encrypt:
	 *   post:
	 *     summary: Encrypt data with ZelfProof
	 *     description: Create an encrypted ZelfProof using biometric face verification. Supports liveness detection and multiple security levels.
	 *     tags: [ZelfProof - Encryption]
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ZelfProofEncryptRequest'
	 *     responses:
	 *       200:
	 *         description: Data encrypted successfully
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofEncryptResponse'
	 *       403:
	 *         description: Access forbidden - requires super admin or client privileges
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       409:
	 *         description: Validation error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofError'
	 */
	server.post(`${PATH}/encrypt`, Middleware.encryptValidation, Controller.encrypt);

	/**
	 * @swagger
	 * /api/zelf-proof/encrypt-qr-code:
	 *   post:
	 *     summary: Encrypt data with ZelfProof and generate QR code
	 *     description: Create an encrypted ZelfProof with QR code generation for easy sharing and verification.
	 *     tags: [ZelfProof - Encryption]
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ZelfProofEncryptRequest'
	 *     responses:
	 *       200:
	 *         description: Data encrypted and QR code generated successfully
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofEncryptResponse'
	 *       403:
	 *         description: Access forbidden - requires super admin or client privileges
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       409:
	 *         description: Validation error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofError'
	 */
	server.post(`${PATH}/encrypt-qr-code`, Middleware.encryptValidation, Controller.encryptQRCode);

	/**
	 * @swagger
	 * /api/zelf-proof/decrypt:
	 *   post:
	 *     summary: Decrypt ZelfProof data
	 *     description: Decrypt a ZelfProof using biometric face verification to access the original data.
	 *     tags: [ZelfProof - Decryption]
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ZelfProofDecryptRequest'
	 *     responses:
	 *       200:
	 *         description: Data decrypted successfully
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofDecryptResponse'
	 *       403:
	 *         description: Access forbidden - requires super admin or client privileges
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       409:
	 *         description: Validation error or biometric verification failed
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofError'
	 */
	server.post(`${PATH}/decrypt`, Middleware.decryptValidation, Controller.decrypt);

	/**
	 * @swagger
	 * /api/zelf-proof/preview:
	 *   post:
	 *     summary: Preview ZelfProof data
	 *     description: Preview ZelfProof metadata without full decryption. Useful for validation and basic information retrieval.
	 *     tags: [ZelfProof - Preview]
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ZelfProofPreviewRequest'
	 *     responses:
	 *       200:
	 *         description: Preview generated successfully
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofPreviewResponse'
	 *       403:
	 *         description: Access forbidden - requires super admin or client privileges
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       409:
	 *         description: Validation error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofValidationError'
	 *       500:
	 *         description: Internal server error
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/ZelfProofError'
	 */
	server.post(`${PATH}/preview`, Middleware.previewValidation, Controller.preview);
};
