import { BackgroundCredentialManager } from "./background-credential-manager";
export class MessageHandler {
    constructor(browserApi) {
        this.browserApi = browserApi;
        this.credentialManager = BackgroundCredentialManager.getInstance(this.browserApi);
    }
    async handleAutofillMessage(message, sender, sendResponse) {
        try {
            switch (message.type) {
                case "GET_PASSWORDS":
                    await this.handleGetPasswords(message.payload, sendResponse);
                    break;
                case "CREATE_PASSWORD":
                    await this.handleCreatePassword(message.payload, sendResponse);
                    break;
                case "AUTHENTICATE":
                    await this.handleAuthenticate(sendResponse);
                    break;
                case "OPEN_BIOMETRICS_MODAL":
                    await this.handleOpenBiometricsModal(message.payload, sender);
                    sendResponse({ success: true });
                    break;
                default:
                    sendResponse({ success: false, error: "Unknown message type" });
            }
        }
        catch (error) {
            console.error("Error handling autofill message:", error);
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleGetPasswords(payload, sendResponse) {
        try {
            const passwords = await this.credentialManager.getPasswords(payload.website);
            sendResponse({ success: true, data: passwords });
        }
        catch (error) {
            console.error("Error getting passwords:", error);
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleCreatePassword(payload, sendResponse) {
        try {
            // Get the URL info from the message payload
            const urlInfo = payload?.urlInfo || null;
            // Open the extension tab first
            const tabId = await this.openExtensionUI("dashboard/passwords/new");
            if (tabId) {
                // Wait for tab to be ready, then send message to Angular app
                await this.waitForTabAndSendMessage(tabId, {
                    type: "AUTOFILL_CREATE_PASSWORD_DATA",
                    payload: { urlInfo },
                });
            }
            sendResponse({ success: true });
        }
        catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleAuthenticate(sendResponse) {
        try {
            const isAuthenticated = this.credentialManager.isAuthenticated();
            sendResponse({ success: isAuthenticated });
        }
        catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleOpenBiometricsModal(payload, sender) {
        try {
            // Open the extension popup/sidebar to the biometrics modal
            await this.openExtensionUI("biometrics");
        }
        catch (error) {
            console.error("Error opening biometrics modal:", error);
        }
    }
    async openExtensionUI(page) {
        try {
            // Get the extension URL
            const runtime = this.browserApi.runtime;
            if (!runtime) {
                console.error("Runtime API not available");
                return null;
            }
            const extensionUrl = runtime.getURL(`index.html#/${page}`);
            // Always open a new tab for create password to ensure clean state
            const tabs = this.browserApi.tabs;
            if (tabs) {
                const newTab = await tabs.create({
                    url: extensionUrl,
                    active: true,
                });
                return newTab.id;
            }
            else {
                console.error("Tabs API not available");
                return null;
            }
        }
        catch (error) {
            console.error("Error opening extension UI:", error);
            return null;
        }
    }
    async waitForTabAndSendMessage(tabId, message, maxRetries = 10, retryDelay = 500) {
        const tabs = this.browserApi.tabs;
        if (!tabs) {
            console.error("Tabs API not available");
            return;
        }
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                // Try to send a ping message first to check if the tab is ready
                await tabs.sendMessage(tabId, { type: "PING" });
                // If ping succeeds, send the actual message
                await tabs.sendMessage(tabId, message);
                return;
            }
            catch (error) {
                if (attempt === maxRetries) {
                    console.error("Max retries reached, failed to send message to tab", tabId);
                    return;
                }
                // Wait before retrying
                await new Promise((resolve) => setTimeout(resolve, retryDelay));
            }
        }
    }
    async sendMessageToAngularApp(message) {
        try {
            const tabs = this.browserApi.tabs;
            if (!tabs) {
                console.error("Tabs API not available");
                return;
            }
            // Find the extension tab
            const allTabs = await tabs.query({});
            const extensionTab = allTabs.find((tab) => tab.url && tab.url.includes("index.html") && (tab.url.includes("chrome-extension://") || tab.url.includes("moz-extension://")));
            if (extensionTab) {
                await tabs.sendMessage(extensionTab.id, message);
            }
            else {
                console.error("No extension tab found to send message to");
            }
        }
        catch (error) {
            console.error("Error sending message to Angular app:", error);
        }
    }
}
//# sourceMappingURL=message-handler.js.map