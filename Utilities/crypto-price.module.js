import axios from "axios";

/**
 * Create axios instance for crypto price API calls
 */
const instance = axios.create({
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

/**
 * Get ticker price from Binance API
 * @param {Object} params - Parameters object
 * @param {string} params.symbol - The crypto symbol (e.g., "AVAX")
 * @returns {Object} Price data
 */
const getTickerPrice = async (params) => {
	try {
		// https://api.binance.us/api/v3/ticker/price?symbol=AVAXUSDT
		const url = `https://api.binance.us/api/v3/ticker/price?symbol=${params.symbol}USDT`;

		const { data } = await instance.get(url);

		return {
			price: parseFloat(data.price),
			symbol: params.symbol,
			pair: `${params.symbol}USDT`,
			timestamp: new Date().toISOString(),
		};
	} catch (error) {
		console.error(`Error fetching ${params.symbol} price:`, error);
		throw new Error(`Failed to fetch ${params.symbol} price: ${error.response?.data?.msg || error.message}`);
	}
};

/**
 * Calculate crypto amount needed for USD price
 * @param {number} usdAmount - Amount in USD
 * @param {string} cryptoSymbol - Crypto symbol (e.g., "AVAX")
 * @returns {Object} Calculation result
 */
const calculateCryptoAmount = async (usdAmount, cryptoSymbol = "AVAX") => {
	try {
		const priceData = await getTickerPrice({ symbol: cryptoSymbol });
		const cryptoAmount = usdAmount / priceData.price;

		return {
			usdAmount,
			cryptoAmount: parseFloat(cryptoAmount.toFixed(6)), // 6 decimal places for precision
			cryptoPrice: priceData.price,
			symbol: cryptoSymbol,
			calculatedAt: priceData.timestamp,
		};
	} catch (error) {
		console.error("Error calculating crypto amount:", error);
		throw error;
	}
};

export { getTickerPrice, calculateCryptoAmount };
