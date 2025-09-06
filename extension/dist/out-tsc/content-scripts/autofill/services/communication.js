export class CommunicationService {
    constructor() {
        this.serviceWorkerReadyCallbacks = [];
    }
    static getInstance() {
        if (!CommunicationService.instance) {
            CommunicationService.instance = new CommunicationService();
        }
        return CommunicationService.instance;
    }
    async getPasswords(website) {
        try {
            const response = await this.sendMessage({
                type: "GET_PASSWORDS",
                payload: { website },
            });
            if (response.success && response.data) {
                return response.data;
            }
            return [];
        }
        catch (error) {
            console.error("Error fetching passwords:", error);
            return [];
        }
    }
    async decryptPassword(passwordId) {
        try {
            const response = await this.sendMessage({
                type: "DECRYPT_PASSWORD",
                payload: { passwordId },
            });
            if (response.success && response.data) {
                return response.data;
            }
            return null;
        }
        catch (error) {
            console.error("Error decrypting password:", error);
            return null;
        }
    }
    async createPassword(urlInfo) {
        try {
            await this.sendMessage({
                type: "CREATE_PASSWORD",
                payload: { urlInfo },
            });
        }
        catch (error) {
            console.error("Error opening create password:", error);
        }
    }
    async authenticate() {
        try {
            const response = await this.sendMessage({
                type: "AUTHENTICATE",
                payload: {},
            });
            return response.success;
        }
        catch (error) {
            console.error("Error authenticating:", error);
            return false;
        }
    }
    sendMessage(message) {
        return new Promise((resolve, reject) => {
            console.log("Sending message to background script:", message);
            // Check if we're in a Chrome extension context
            if (typeof chrome !== "undefined" && chrome.runtime) {
                chrome.runtime.sendMessage(message, (response) => {
                    console.log("Received response from background script:", response);
                    if (chrome.runtime.lastError) {
                        console.error("Chrome runtime error:", chrome.runtime.lastError);
                        reject(new Error(chrome.runtime.lastError.message));
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            else {
                reject(new Error("Chrome extension runtime not available"));
            }
        });
    }
    setupMessageListener() {
        // Listen for messages from the background script
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                this.handleMessage(message, sendResponse);
                return true; // Keep message channel open for async response
            });
        }
    }
    handleMessage(message, sendResponse) {
        // Handle any incoming messages from background script
        if (message.type === "SERVICE_WORKER_READY") {
            this.serviceWorkerReadyCallbacks.forEach((callback) => callback());
        }
        sendResponse({ success: true });
    }
    onServiceWorkerReady(callback) {
        this.serviceWorkerReadyCallbacks.push(callback);
    }
}
//# sourceMappingURL=communication.js.map