import { Injectable } from "@angular/core";

export interface FormData {
	[key: string]: any;
}

export interface ApiResult {
	success: boolean;
	zelfProof: string;
	zelfQR: string;
	NFT?: {
		success: boolean;
		tokenId: string;
		transactionHash: string;
		recipient: string;
		cost: string;
		metadata: any;
		metadataUrl: string;
		explorerUrl: string;
		owner: string;
		contractAddress: string;
	};
	ipfs?: {
		hash: string;
		gatewayUrl: string;
		pinSize: number;
		timestamp: string;
		name: string;
		metadata: any;
	};
	publicData?: any;
	message: string;
}

@Injectable({
	providedIn: "root",
})
export class DataPassingService {
	private dataStore: { [key: string]: FormData } = {};
	private resultStore: { [key: string]: ApiResult } = {};

	/**
	 * Store form data for a specific form type
	 */
	storeData(formType: string, data: FormData): void {
		console.log(`🔍 DEBUG DataPassingService - Storing form data for ${formType}:`, data);
		this.dataStore[formType] = data;
	}

	/**
	 * Retrieve form data for a specific form type
	 */
	getData(formType: string): FormData | null {
		const data = this.dataStore[formType];
		console.log(`🔍 DEBUG DataPassingService - Retrieving form data for ${formType}:`, data);
		return data || null;
	}

	/**
	 * Store API result for a specific form type
	 */
	storeResult(formType: string, result: ApiResult): void {
		console.log(`🔍 DEBUG DataPassingService - Storing result for ${formType}:`, result);
		this.resultStore[formType] = result;
	}

	/**
	 * Retrieve API result for a specific form type
	 */
	getResult(formType: string): ApiResult | null {
		const result = this.resultStore[formType];
		console.log(`🔍 DEBUG DataPassingService - Retrieving result for ${formType}:`, result);
		return result || null;
	}

	/**
	 * Clear form data for a specific form type
	 */
	clearData(formType: string): void {
		console.log(`🔍 DEBUG DataPassingService - Clearing form data for ${formType}`);
		delete this.dataStore[formType];
	}

	/**
	 * Clear result data for a specific form type
	 */
	clearResult(formType: string): void {
		console.log(`🔍 DEBUG DataPassingService - Clearing result for ${formType}`);
		delete this.resultStore[formType];
	}

	/**
	 * Clear all data for a specific form type (both form and result)
	 */
	clearAll(formType: string): void {
		console.log(`🔍 DEBUG DataPassingService - Clearing all data for ${formType}`);
		this.clearData(formType);
		this.clearResult(formType);
	}

	/**
	 * Check if form data exists for a specific form type
	 */
	hasData(formType: string): boolean {
		return !!this.dataStore[formType];
	}

	/**
	 * Check if result data exists for a specific form type
	 */
	hasResult(formType: string): boolean {
		return !!this.resultStore[formType];
	}

	/**
	 * Get all stored data for debugging
	 */
	getAllData(): { formData: { [key: string]: FormData }; resultData: { [key: string]: ApiResult } } {
		return {
			formData: { ...this.dataStore },
			resultData: { ...this.resultStore },
		};
	}
}
