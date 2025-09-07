import bip39 from "bip39";

/**
 * Generate a random mnemonic seed phrase
 * @param {number} wordsCount - Number of words (12 or 24)
 * @returns {string} Generated mnemonic phrase
 */
const generateMnemonic = (wordsCount = 12) => {
	const strength = wordsCount === 24 ? 256 : 256 / 2;
	return bip39.generateMnemonic(strength);
};

export { generateMnemonic };
