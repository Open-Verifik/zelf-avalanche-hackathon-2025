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

module.exports = {
	validate,
};
