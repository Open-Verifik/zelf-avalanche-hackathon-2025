/**
 * Helper Module - Utility functions for validation and common operations
 * @author Miguel Trevino <miguel@zelf.world>
 */

/**
 * Validate object against schema
 * @param {Object} schema - Validation schema
 * @param {Object} data - Data to validate
 * @returns {Object} - Validation result with error property if validation fails
 */
const validate = (schema, data) => {
	const errors = [];

	// Check required fields
	for (const [field, rules] of Object.entries(schema)) {
		if (rules.required && !data.hasOwnProperty(field)) {
			errors.push(`${field} is required`);
			continue;
		}

		if (data.hasOwnProperty(field)) {
			const value = data[field];

			// Check minLength
			if (rules.minLength && typeof value === "string" && value.length < rules.minLength) {
				errors.push(`${field} must be at least ${rules.minLength} characters long`);
			}

			// Check maxLength
			if (rules.maxLength && typeof value === "string" && value.length > rules.maxLength) {
				errors.push(`${field} must not exceed ${rules.maxLength} characters`);
			}

			// Check enum values
			if (rules.enum && !rules.enum.includes(value)) {
				errors.push(`${field} must be one of: ${rules.enum.join(", ")}`);
			}

			// Check pattern (regex)
			if (rules.pattern && typeof value === "string" && !rules.pattern.test(value)) {
				errors.push(`${field} format is invalid`);
			}

			// Check minKeys for objects
			if (rules.minKeys && typeof value === "object" && Object.keys(value).length < rules.minKeys) {
				errors.push(`${field} must have at least ${rules.minKeys} keys`);
			}

			// Check maxKeys for objects
			if (rules.maxKeys && typeof value === "object" && Object.keys(value).length > rules.maxKeys) {
				errors.push(`${field} must not exceed ${rules.maxKeys} keys`);
			}

			// Check base64 image validation
			if (rules.isBase64Image && typeof value === "string") {
				if (!isValidBase64Image(value)) {
					errors.push(`${field} must be a valid base64 encoded image`);
				}
			}
		}
	}

	if (errors.length > 0) {
		return {
			error: {
				message: errors.join("; "),
			},
		};
	}

	return { error: null };
};

/**
 * Validate that a string is a proper base64 encoded image
 * @param {string} base64String - The base64 string to validate
 * @returns {boolean} - True if valid base64 image, false otherwise
 */
const isValidBase64Image = (base64String) => {
	try {
		let base64Data;

		// Check if it's a data URL with proper format
		const dataUrlRegex = /^data:image\/(jpeg|jpg|png|gif|bmp|webp);base64,([A-Za-z0-9+/=]+)$/;
		const match = base64String.match(dataUrlRegex);

		if (match) {
			// Full data URL format
			base64Data = match[2];
		} else {
			// Check if it's raw base64 data (for test compatibility)
			if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64String)) {
				return false;
			}
			base64Data = base64String;
		}

		// Check minimum length (a real image should be much longer than example truncated strings)
		if (base64Data.length < 50) {
			return false;
		}

		// Validate base64 format
		if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64Data)) {
			return false;
		}

		// Check if the base64 string length is valid (must be multiple of 4)
		if (base64Data.length % 4 !== 0) {
			return false;
		}

		// Try to decode the base64 to ensure it's valid
		const decoded = Buffer.from(base64Data, "base64");

		// Check if decoded data has minimum size (real images should be at least a few bytes)
		if (decoded.length < 20) {
			return false;
		}

		// Check for common image file signatures (magic numbers)
		const imageSignatures = [
			[0xff, 0xd8, 0xff], // JPEG
			[0x89, 0x50, 0x4e, 0x47], // PNG
			[0x47, 0x49, 0x46, 0x38], // GIF
			[0x42, 0x4d], // BMP
			[0x52, 0x49, 0x46, 0x46], // WEBP (RIFF header)
		];

		const hasValidSignature = imageSignatures.some((signature) => {
			return signature.every((byte, index) => decoded[index] === byte);
		});

		if (!hasValidSignature) {
			return false;
		}

		return true;
	} catch (error) {
		return false;
	}
};

export { validate, isValidBase64Image };
