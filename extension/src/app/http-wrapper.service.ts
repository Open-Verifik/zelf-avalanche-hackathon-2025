import * as openpgp from "openpgp";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DISABLE_GLOBAL_EXCEPTION_HANDLING } from "./interceptors/interceptor.model";

@Injectable({
	providedIn: "root",
})
export class HttpWrapperService {
	private publicKey!: string;

	public tail: Array<any> = [];

	get progress(): boolean {
		return !!this.tail.length;
	}

	constructor(private _http: HttpClient) {}

	/**
	 * Send request
	 * @param method - to determine which function we will be using
	 * @param url - URL that we will be requesting information from
	 * @param params - params that can go into the body or the query string param
	 * @param options - headers or some other sort of params
	 */
	async sendRequest<T = any>(method: string, url: string, params: any = {}, options: any = {}): Promise<any> {
		method = method.toLocaleLowerCase();

		// If custom headers are provided, we need to disable the JWT interceptor
		// and handle authorization manually to ensure custom headers take precedence
		if (options.headers && options.headers.Authorization) {
			// Add the context to disable JWT interceptor for this request
			options.context = options.context || new Map();
			options.context.set(DISABLE_GLOBAL_EXCEPTION_HANDLING, true);
		}

		try {
			switch (method) {
				case "get":
					return this.request(this._http.get<T>(url, { params, ...options }));
				case "post":
					return this.request(this._http.post<T>(url, params, { ...options }));
				case "put":
					return this.request(this._http.put<T>(url, params, { ...options }));
				case "delete":
					return this.request(this._http.delete<T>(url, { ...options }));
				default:
					throw new Error("Method not provided or unsupported");
			}
		} catch (error) {
			console.error("Error in sendRequest:", error);
			throw error;
		}
	}

	// // Helper method to process HTTP requests (just an example of what it might look like)
	private request(httpCall: any): Promise<any> {
		return httpCall
			.toPromise()
			.then((response: any) => response)
			.catch((error: any) => {
				throw error;
			});
	}

	setPublicKey(publicKey: string): void {
		this.publicKey = publicKey;
	}

	async encryptMessage(data: string): Promise<any> {
		if (!data) return data;

		if (!this.publicKey) throw new Error("cannot_encrypt_message");

		const publicKey = await openpgp.readKey({ armoredKey: this.publicKey }); // armoredKey > quitarle la armadura

		const encryptedMessage = await openpgp.encrypt({
			message: await openpgp.createMessage({ text: data }),
			encryptionKeys: publicKey,
		});

		return encryptedMessage;
	}
}
