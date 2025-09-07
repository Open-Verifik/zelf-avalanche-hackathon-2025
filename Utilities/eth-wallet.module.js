import { ethers } from "ethers";

/**
 * Create ETH wallet from mnemonic phrase
 * @param {string} mnemonic - Mnemonic seed phrase
 * @returns {Object} Wallet object with address
 */
const createEthWallet = (mnemonic) => {
	try {
		const wallet = ethers.Wallet.fromPhrase(mnemonic);

		return {
			address: wallet.address,
		};
	} catch (exception) {
		const error = new Error("invalid_seed_phrase");
		error.status = 409;
		throw error;
	}
};

export { createEthWallet };
