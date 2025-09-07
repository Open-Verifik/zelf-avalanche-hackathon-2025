export class CommunicationService {
<<<<<<< HEAD
    constructor() {
        this.serviceWorkerReadyCallbacks = [];
    }
=======
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
    static getInstance() {
        if (!CommunicationService.instance) {
            CommunicationService.instance = new CommunicationService();
        }
        return CommunicationService.instance;
    }
    async getPasswords(website) {
        try {
            const response = await this.sendMessage({
<<<<<<< HEAD
                type: "GET_PASSWORDS",
                payload: { website },
=======
                type: 'GET_PASSWORDS',
                payload: { website }
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            });
            if (response.success && response.data) {
                return response.data;
            }
            return [];
        }
        catch (error) {
<<<<<<< HEAD
            console.error("Error fetching passwords:", error);
=======
            console.error('Error fetching passwords:', error);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            return [];
        }
    }
    async decryptPassword(passwordId) {
        try {
            const response = await this.sendMessage({
<<<<<<< HEAD
                type: "DECRYPT_PASSWORD",
                payload: { passwordId },
=======
                type: 'DECRYPT_PASSWORD',
                payload: { passwordId }
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            });
            if (response.success && response.data) {
                return response.data;
            }
            return null;
        }
        catch (error) {
<<<<<<< HEAD
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
=======
            console.error('Error decrypting password:', error);
            return null;
        }
    }
    async createPassword() {
        try {
            await this.sendMessage({
                type: 'CREATE_PASSWORD',
                payload: {}
            });
        }
        catch (error) {
            console.error('Error opening create password:', error);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        }
    }
    async authenticate() {
        try {
            const response = await this.sendMessage({
<<<<<<< HEAD
                type: "AUTHENTICATE",
                payload: {},
=======
                type: 'AUTHENTICATE',
                payload: {}
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            });
            return response.success;
        }
        catch (error) {
<<<<<<< HEAD
            console.error("Error authenticating:", error);
=======
            console.error('Error authenticating:', error);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            return false;
        }
    }
    sendMessage(message) {
        return new Promise((resolve, reject) => {
<<<<<<< HEAD
            console.log("Sending message to background script:", message);
            // Check if we're in a Chrome extension context
            if (typeof chrome !== "undefined" && chrome.runtime) {
                chrome.runtime.sendMessage(message, (response) => {
                    console.log("Received response from background script:", response);
                    if (chrome.runtime.lastError) {
                        console.error("Chrome runtime error:", chrome.runtime.lastError);
=======
            console.log('Sending message to background script:', message);
            // Check if we're in a Chrome extension context
            if (typeof chrome !== 'undefined' && chrome.runtime) {
                chrome.runtime.sendMessage(message, (response) => {
                    console.log('Received response from background script:', response);
                    if (chrome.runtime.lastError) {
                        console.error('Chrome runtime error:', chrome.runtime.lastError);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
                        reject(new Error(chrome.runtime.lastError.message));
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            else {
<<<<<<< HEAD
                reject(new Error("Chrome extension runtime not available"));
=======
                reject(new Error('Chrome extension runtime not available'));
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            }
        });
    }
    setupMessageListener() {
        // Listen for messages from the background script
<<<<<<< HEAD
        if (typeof chrome !== "undefined" && chrome.runtime) {
=======
        if (typeof chrome !== 'undefined' && chrome.runtime) {
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                this.handleMessage(message, sendResponse);
                return true; // Keep message channel open for async response
            });
        }
    }
    handleMessage(message, sendResponse) {
        // Handle any incoming messages from background script
<<<<<<< HEAD
        if (message.type === "SERVICE_WORKER_READY") {
            this.serviceWorkerReadyCallbacks.forEach((callback) => callback());
        }
        sendResponse({ success: true });
    }
    onServiceWorkerReady(callback) {
        this.serviceWorkerReadyCallbacks.push(callback);
    }
=======
        console.log('Content script received message:', message);
        sendResponse({ success: true });
    }
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
}
//# sourceMappingURL=communication.js.map