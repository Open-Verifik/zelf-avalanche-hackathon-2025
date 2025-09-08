import jwt from "jsonwebtoken";
import configuration from "../Core/config.js";

/**
 * Sign and lock price data for a specific duration
 * @param {Object} priceData - Price data to lock
 * @param {number} durationMinutes - Lock duration in minutes (default: 30)
 * @returns {string} Signed JWT token
 */
const lockPriceData = (priceData, durationMinutes = 30) => {
	try {
		const lockData = {
			...priceData,
			lockedAt: new Date().toISOString(),
			expiresAt: new Date(Date.now() + durationMinutes * 60 * 1000).toISOString(),
			lockDuration: durationMinutes,
		};

		const token = jwt.sign(lockData, configuration.JWT_SECRET, {
			expiresIn: `${durationMinutes}m`,
		});

		return token;
	} catch (error) {
		console.error("Error locking price data:", error);
		throw new Error("Failed to lock price data");
	}
};

/**
 * Verify and decode locked price data
 * @param {string} token - JWT token containing locked price data
 * @returns {Object} Decoded price data
 */
const verifyLockedPrice = (token) => {
	try {
		const decoded = jwt.verify(token, configuration.JWT_SECRET);

		// Check if price lock has expired
		const now = new Date();
		const expiresAt = new Date(decoded.expiresAt);

		if (now > expiresAt) {
			throw new Error("Price lock has expired");
		}

		return {
			success: true,
			...decoded,
			isValid: true,
			remainingTime: Math.max(0, Math.floor((expiresAt - now) / 1000)), // seconds remaining
		};
	} catch (error) {
		console.error("Error verifying locked price:", error);

		//Error verifying locked price: TokenExpiredError: jwt expired
		// check for jwt expired
		if (error.name === "TokenExpiredError") {
			return {
				success: false,
				error: "Price lock has expired",
				isValid: false,
			};
		}

		if (error.name === "TokenExpiredError") {
			return {
				success: false,
				error: "Price lock has expired",
				isValid: false,
			};
		}

		return {
			success: false,
			error: error.message,
			isValid: false,
		};
	}
};

/**
 * Sign record data for verification
 * @param {Object} recordData - Data to sign
 * @returns {string} Signed JWT token
 */
const signRecordData = (recordData) => {
	try {
		const token = jwt.sign(recordData, configuration.JWT_SECRET);
		return token;
	} catch (error) {
		console.error("Error signing record data:", error);
		return { success: false, error: error.message };
	}
};

export { lockPriceData, verifyLockedPrice, signRecordData };
