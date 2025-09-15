import { AutofillMessage, AutofillResponse, DecryptedPasswordData, PasswordEntry } from "@shared/types/autofill.types";

// Chrome extension API declaration
declare const chrome: any;

export class CommunicationService {
    private static instance: CommunicationService;
    private serviceWorkerReadyCallbacks: (() => void)[] = [];

    public static getInstance(): CommunicationService {
        if (!CommunicationService.instance) CommunicationService.instance = new CommunicationService();

        return CommunicationService.instance;
    }

    public async getPasswords(website: string): Promise<PasswordEntry[]> {
        try {
            const response: AutofillResponse = await this.sendMessage({
                type: "GET_PASSWORDS",
                payload: { website },
            });

            if (response.success && response.data) {
                return response.data as PasswordEntry[];
            }
            return [];
        } catch (error) {
            console.error("Error fetching passwords:", error);
            return [];
        }
    }

    public async decryptPassword(passwordId: string): Promise<DecryptedPasswordData | null> {
        try {
            const response: AutofillResponse = await this.sendMessage({
                type: "DECRYPT_PASSWORD",
                payload: { passwordId },
            });

            if (response.success && response.data) {
                return response.data as DecryptedPasswordData;
            }
            return null;
        } catch (error) {
            console.error("Error decrypting password:", error);
            return null;
        }
    }

    public async createPassword(urlInfo?: any): Promise<void> {
        try {
            await this.sendMessage({
                type: "CREATE_PASSWORD",
                payload: { urlInfo },
            });
        } catch (error) {
            console.error("Error opening create password:", error);
        }
    }

    public async authenticate(): Promise<boolean> {
        try {
            const response: AutofillResponse = await this.sendMessage({
                type: "AUTHENTICATE",
                payload: {},
            });

            return response.success;
        } catch (error) {
            console.error("Error authenticating:", error);
            return false;
        }
    }

    public sendMessage(message: AutofillMessage): Promise<AutofillResponse> {
        return new Promise((resolve, reject) => {
            console.log("Sending message to background script:", message);

            // Check if we're in a Chrome extension context
            if (typeof chrome !== "undefined" && chrome.runtime) {
                // Add timeout to prevent hanging
                const timeout = setTimeout(() => {
                    console.error("Message timeout after 10 seconds");
                    reject(new Error("Message timeout - background script did not respond"));
                }, 10000);

                chrome.runtime.sendMessage(message, (response: any) => {
                    clearTimeout(timeout);
                    console.log("Received response from background script:", response);
                    if (chrome.runtime.lastError) {
                        console.error("Chrome runtime error:", chrome.runtime.lastError);
                        reject(new Error(chrome.runtime.lastError.message));
                    } else {
                        resolve(response);
                    }
                });
            } else {
                reject(new Error("Chrome extension runtime not available"));
            }
        });
    }

    public setupMessageListener(): void {
        // Listen for messages from the background script
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message: any, sender: any, sendResponse: any) => {
                this.handleMessage(message, sendResponse);
                return true; // Keep message channel open for async response
            });
        }
    }

    private handleMessage(message: any, sendResponse: (response: any) => void): void {
        // Handle any incoming messages from background script
        if (message.type === "SERVICE_WORKER_READY") {
            this.serviceWorkerReadyCallbacks.forEach((callback) => callback());
        } else if (message.type === "WAIT_FOR_FORM_READY") {
            // Store the tab ID and wait for forms to be ready
            this.waitForFormReady(message.payload?.tabId);
        }

        sendResponse({ success: true });
    }

    private waitForFormReady(tabId: number): void {
        // Check if forms are already present
        const hasForms = document.querySelectorAll('input[type="password"], input[type="email"], input[type="text"]').length > 0;

        if (hasForms) {
            // Forms are already ready, send immediate response
            this.sendFormReadyMessage(tabId);
        } else {
            // Wait for forms to appear
            const observer = new MutationObserver((mutations) => {
                const hasFormsNow = document.querySelectorAll('input[type="password"], input[type="email"], input[type="text"]').length > 0;
                if (hasFormsNow) {
                    observer.disconnect();
                    this.sendFormReadyMessage(tabId);
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });

            // Timeout after 10 seconds
            setTimeout(() => {
                observer.disconnect();
                this.sendFormReadyMessage(tabId);
            }, 10000);
        }
    }

    private sendFormReadyMessage(tabId: number): void {
        // Send message back to the extension
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.sendMessage({
                type: "FORM_READY",
                payload: { tabId },
            });
        }
    }

    public onServiceWorkerReady(callback: () => void): void {
        this.serviceWorkerReadyCallbacks.push(callback);
    }
}
