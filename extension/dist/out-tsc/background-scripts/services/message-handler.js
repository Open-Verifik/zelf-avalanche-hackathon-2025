<<<<<<< HEAD
<<<<<<< HEAD
import { BackgroundCredentialManager } from "./background-credential-manager";
export class MessageHandler {
    constructor(browserApi) {
        this.browserApi = browserApi;
        this.credentialManager = BackgroundCredentialManager.getInstance(this.browserApi);
        this.setupPopupNavigation();
    }
    setupPopupNavigation() {
        // Listen for when the popup opens and navigate to the pending route
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.type === "POPUP_READY" && this.pendingPopupRoute) {
                    this.navigatePopupToRoute(this.pendingPopupRoute);
                    this.pendingPopupRoute = undefined;
                }
                if (message.type === "POPUP_READY" && this.pendingDecryptionData) {
                    this.sendDecryptionDataToPopup();
                }
            });
        }
    }
    async navigatePopupToRoute(route) {
        try {
            console.log("Navigating popup to route:", route);
            // For popup mode, we don't need to find a tab - the popup will handle navigation
            // The popup will check for pending decryption data and navigate accordingly
            console.log("Popup navigation handled by popup itself");
        }
        catch (error) {
            console.error("Error navigating popup to route:", error);
        }
    }
    async sendDecryptionDataToPopup() {
        try {
            console.log("MessageHandler: Sending decryption data to popup...");
            console.log("MessageHandler: Pending decryption data:", this.pendingDecryptionData);
            if (this.pendingDecryptionData) {
                // Send message to all popup views
                const runtime = this.browserApi.runtime;
                if (runtime) {
                    try {
                        await runtime.sendMessage({
                            type: "PASSWORD_DECRYPTOR_DATA",
                            payload: this.pendingDecryptionData,
                        });
                        console.log("MessageHandler: Decryption data sent to popup");
                        this.pendingDecryptionData = undefined;
                    }
                    catch (error) {
                        console.error("MessageHandler: Error sending decryption data to popup:", error);
                    }
                }
            }
        }
        catch (error) {
            console.error("MessageHandler: Error in sendDecryptionDataToPopup:", error);
        }
    }
    /**
     * Notify all content scripts that the service worker is ready
     * This is called when the extension UI is opened to ensure content scripts
     * know the service worker is available even if it didn't go through activation
     */
    async notifyContentScriptsServiceWorkerReady() {
        try {
            console.log("MessageHandler: Notifying content scripts that service worker is ready...");
            if (this.browserApi.has("tabs")) {
                const tabsApi = this.browserApi.tabs;
                if (tabsApi?.query) {
                    const tabs = await tabsApi.query({});
                    let successCount = 0;
                    for (const tab of tabs) {
                        if (tab.id && tab.url && !tab.url.startsWith("chrome-extension://")) {
                            try {
                                if (tabsApi?.sendMessage) {
                                    await tabsApi.sendMessage(tab.id, {
                                        type: "SERVICE_WORKER_READY",
                                    });
                                    successCount++;
                                }
                            }
                            catch (error) {
                                // Tab might not have content script loaded yet, ignore
                                console.log(`Could not notify tab ${tab.id}:`, error);
                            }
                        }
                    }
                    console.log(`MessageHandler: Notified ${successCount} content scripts that service worker is ready`);
                }
            }
        }
        catch (error) {
            console.error("MessageHandler: Error notifying content scripts:", error);
        }
=======
export class MessageHandler {
    constructor(browserApi) {
        this.browserApi = browserApi;
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
=======
import { BackgroundCredentialManager } from './background-credential-manager';
export class MessageHandler {
    constructor(browserApi) {
        this.browserApi = browserApi;
        this.credentialManager = BackgroundCredentialManager.getInstance();
>>>>>>> 0cea6d0 (Fix watch/build scripts)
    }
    async handleAutofillMessage(message, sender, sendResponse) {
        try {
            switch (message.type) {
<<<<<<< HEAD
                case "GET_PASSWORDS":
                    await this.handleGetPasswords(message.payload, sendResponse);
                    break;
                case "CREATE_PASSWORD":
                    await this.handleCreatePassword(message.payload, sendResponse);
=======
                case "TEST_MESSAGE":
                    console.log("Background: Test message received");
                    sendResponse({ success: true, message: "Service worker is active!" });
                    break;
                case "GET_PASSWORDS":
                    await this.handleGetPasswords(message.payload, sendResponse);
                    break;
                case "DECRYPT_PASSWORD":
                    await this.handleDecryptPassword(message.payload, sendResponse);
                    break;
                case "CREATE_PASSWORD":
                    await this.handleCreatePassword(sender, sendResponse);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
                    break;
                case "AUTHENTICATE":
                    await this.handleAuthenticate(sendResponse);
                    break;
                case "OPEN_BIOMETRICS_MODAL":
                    await this.handleOpenBiometricsModal(message.payload, sender);
                    sendResponse({ success: true });
                    break;
<<<<<<< HEAD
                case "OPEN_PASSWORD_DECRYPTOR":
                    console.log("MessageHandler: Handling OPEN_PASSWORD_DECRYPTOR");
                    await this.handleOpenPasswordDecryptor(message.payload, sender);
                    sendResponse({ success: true });
                    break;
                case "SEND_DECRYPTION_DATA_TO_POPOUT":
                    await this.handleSendDecryptionDataToPopout(message.payload, sender);
                    sendResponse({ success: true });
                    break;
                case "DECRYPTION_RESULT_FROM_POPOUT":
                    await this.handleDecryptionResultFromPopout(message.payload, sender);
                    sendResponse({ success: true });
                    break;
=======
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
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
<<<<<<< HEAD
            const passwords = await this.credentialManager.getPasswords(payload.website);
            sendResponse({ success: true, data: passwords });
=======
            console.log("Background: Getting passwords for website:", payload.website);
<<<<<<< HEAD
            // Get stored passwords from the Angular app
            const response = await this.forwardToAngularApp({
                type: "GET_PASSWORDS",
                payload: payload,
            });
            console.log("Background: Received response from Angular app:", response);
            // Filter passwords for the specific website
            const websitePasswords = response.filter((password) => password.website === payload.website ||
                password.url === payload.website ||
                password.domain === payload.website);
            console.log("Background: Filtered passwords:", websitePasswords);
            sendResponse({ success: true, data: websitePasswords });
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
=======
            // Use credential manager directly (no fallback needed)
            console.log("Background: Using credential manager for password retrieval");
            const passwords = await this.credentialManager.getPasswords(payload.website);
            console.log("Background: Retrieved passwords from credential manager:", passwords);
            sendResponse({ success: true, data: passwords });
>>>>>>> 0cea6d0 (Fix watch/build scripts)
        }
        catch (error) {
            console.error("Error getting passwords:", error);
            sendResponse({ success: false, error: error.message });
        }
    }
<<<<<<< HEAD
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
                // Notify content scripts that service worker is ready after opening extension UI
                this.notifyContentScriptsServiceWorkerReady();
            }
=======
    async handleDecryptPassword(payload, sendResponse) {
        try {
            // Use credential manager directly (no fallback needed)
            console.log("Background: Using credential manager for password decryption");
            const decryptedData = await this.credentialManager.decryptPassword(payload.passwordId);
            console.log("Background: Decrypted password from credential manager:", decryptedData);
            sendResponse({ success: true, data: decryptedData });
        }
        catch (error) {
            console.error("Error decrypting password:", error);
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleCreatePassword(sender, sendResponse) {
        try {
            // Open the extension popup/sidebar to the create password page
            await this.openExtensionUI("create-password");
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            sendResponse({ success: true });
        }
        catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleAuthenticate(sendResponse) {
        try {
<<<<<<< HEAD
<<<<<<< HEAD
            const isAuthenticated = this.credentialManager.isAuthenticated();
            sendResponse({ success: isAuthenticated });
=======
            // Check if user is authenticated in the extension
            if (this.browserApi.has("storage")) {
                const authData = await this.browserApi.storage.local.get([
                    "zelfKeyJWT",
                    "isAuthenticated",
                ]);
                const isAuthenticated = authData.isAuthenticated && authData.zelfKeyJWT;
                sendResponse({ success: isAuthenticated });
            }
            else {
                sendResponse({ success: false, error: "No storage API available" });
            }
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
=======
            // Use credential manager directly (no fallback needed)
            console.log("Background: Using credential manager for authentication check");
            const isAuthenticated = this.credentialManager.isAuthenticated();
            console.log("Background: Authentication status from credential manager:", isAuthenticated);
            sendResponse({ success: isAuthenticated });
>>>>>>> 0cea6d0 (Fix watch/build scripts)
        }
        catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleOpenBiometricsModal(payload, sender) {
        try {
            // Open the extension popup/sidebar to the biometrics modal
<<<<<<< HEAD
            await this.openExtensionUI("biometrics");
            // Notify content scripts that service worker is ready after opening extension UI
            this.notifyContentScriptsServiceWorkerReady();
=======
            await this.openExtensionUI("biometrics", payload);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        }
        catch (error) {
            console.error("Error opening biometrics modal:", error);
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    async handleOpenPasswordDecryptor(payload, sender) {
        try {
            console.log("MessageHandler: Opening password decryptor popout...");
            console.log("MessageHandler: Payload:", payload);
            console.log("MessageHandler: Sender:", sender);
            // Open the extension popup for password decryption
            const tabId = await this.openExtensionUI("dashboard/passwords/decrypt");
            console.log("MessageHandler: openExtensionUI returned tab ID:", tabId);
            if (tabId) {
                console.log("MessageHandler: Password decryptor popout opened with tab ID:", tabId);
                // Store the sender tab ID for later communication
                this.pendingDecryptionRequests = this.pendingDecryptionRequests || new Map();
                this.pendingDecryptionRequests.set(payload.passwordId, sender.tab?.id);
                // Notify content scripts that service worker is ready after opening extension UI
                this.notifyContentScriptsServiceWorkerReady();
            }
            else {
                console.error("MessageHandler: Failed to open password decryptor popout");
            }
        }
        catch (error) {
            console.error("MessageHandler: Error opening password decryptor:", error);
        }
    }
    async handleSendDecryptionDataToPopout(payload, sender) {
        try {
            console.log("MessageHandler: Sending decryption data to popout...");
            console.log("MessageHandler: Payload:", payload);
            // Store the decryption data for the popup to pick up
            this.pendingDecryptionData = {
                passwordId: payload.passwordId,
                publicData: payload.publicData,
                fieldId: payload.fieldId,
            };
            console.log("MessageHandler: Stored decryption data for popup");
        }
        catch (error) {
            console.error("MessageHandler: Error sending decryption data to popout:", error);
        }
    }
    async handleDecryptionResultFromPopout(payload, sender) {
        try {
            // Get the original sender tab ID
            const originalTabId = this.pendingDecryptionRequests?.get(payload.passwordId);
            if (originalTabId) {
                // Send the result back to the content script
                const tabs = this.browserApi.tabs;
                if (tabs) {
                    await tabs.sendMessage(originalTabId, {
                        type: "DECRYPTION_RESULT",
                        payload: payload.result,
                    });
                }
                // Clean up
                this.pendingDecryptionRequests?.delete(payload.passwordId);
            }
        }
        catch (error) {
            console.error("Error handling decryption result from popout:", error);
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
            // For password decryptor, open the extension popup programmatically
            if (page === "dashboard/passwords/decrypt" || page === "passwords/decrypt") {
                console.log("Opening extension popup for password decryption...");
                // Store the route to navigate to when popup opens
                this.pendingPopupRoute = page;
                // Try to open the extension popup programmatically
                const action = this.browserApi.action;
                if (action) {
                    try {
                        console.log("Attempting to open popup...");
                        // Open the popup programmatically
                        await action.openPopup();
                        console.log("Extension popup opened successfully");
                        // Return a special ID to indicate popup mode
                        return -1; // Special ID for popup mode
                    }
                    catch (popupError) {
                        console.error("Failed to open popup:", popupError);
                        console.error("Popup error details:", popupError.message);
                        // Don't fall back to tab creation - this should be a popup
                        return null;
                    }
                }
                else {
                    console.error("Action API not available");
                    return null;
                }
            }
            // Default: open as tab
            const extensionUrl = runtime.getURL(`index.html#/${page}`);
            console.log("Extension URL:", extensionUrl);
            const tabs = this.browserApi.tabs;
            if (tabs) {
                console.log("Creating new tab...");
                const newTab = await tabs.create({
                    url: extensionUrl,
                    active: true,
                });
                console.log("Tab created:", newTab);
                return newTab.id;
            }
            else {
                console.error("Tabs API not available");
                return null;
=======
    async forwardToAngularApp(message) {
        try {
            console.log("Background: Forwarding message to Angular app:", message);
            // Method 1: Try direct runtime messaging (works without tabs)
            try {
                const response = await new Promise((resolve, reject) => {
                    // Much simpler - browserApi handles the Chrome/Firefox difference automatically
                    this.browserApi.sendMessage(message, (response) => {
                        if (this.browserApi.runtime?.lastError) {
                            reject(new Error(this.browserApi.runtime.lastError.message));
                        }
                        else {
                            resolve(response);
                        }
                    });
                });
                console.log("Background: Received response from Angular app via runtime:", response);
                return response?.data || [];
            }
            catch (runtimeError) {
                console.log("Runtime messaging failed, trying tab messaging:", runtimeError.message);
                // Method 2: Fallback to tab messaging if runtime fails
                if (this.browserApi.has("tabs")) {
                    const tabs = await this.browserApi.tabs.query({
                        url: this.browserApi.runtime.getURL("index.html"),
                    });
                    console.log("Background: Found extension tabs:", tabs.length);
                    if (tabs.length === 0) {
                        console.log("Background: No extension tabs found, returning empty array");
                        return [];
                    }
                    const response = await this.browserApi.tabs.sendMessage(tabs[0].id, message);
                    console.log("Background: Received response from Angular app via tab:", response);
                    return response?.data || [];
                }
                else {
                    console.log("Background: No tab API available");
                    return [];
                }
            }
        }
        catch (error) {
            console.error("Error communicating with Angular app:", error);
            return [];
        }
    }
=======
>>>>>>> 0cea6d0 (Fix watch/build scripts)
    async openExtensionUI(page, data = null) {
        try {
            // Store any data needed for the UI
            if (data && this.browserApi.has("storage")) {
                await this.browserApi.storage.local.set({
                    autofillData: data,
                    autofillTimestamp: Date.now(),
                });
            }
            // Open the extension popup/sidebar - only use if/elseif for fundamentally different APIs
            if (this.browserApi.sidebarAction) {
                // Firefox
                this.browserApi.sidebarAction.open();
            }
            else if (this.browserApi.sidePanel) {
                // Chrome
                const currentWindow = await this.browserApi.windows.getCurrent();
                this.browserApi.sidePanel.open({ windowId: currentWindow.id });
            }
            else {
                // Fallback to opening in new tab
                const runtime = this.browserApi.runtime;
                if (runtime) {
                    const url = runtime.getURL(`index.html#/${page}`);
                    const tabs = this.browserApi.tabs;
                    if (tabs) {
                        tabs.create({ url });
                    }
                }
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            }
        }
        catch (error) {
            console.error("Error opening extension UI:", error);
<<<<<<< HEAD
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
=======
            // Fallback to opening in new tab
            const runtime = this.browserApi.runtime;
            if (!runtime)
                return;
            const url = runtime.getURL(`index.html#/${page}`);
            const tabs = this.browserApi.tabs;
            if (!tabs)
                return;
            tabs.create({ url });
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        }
    }
}
//# sourceMappingURL=message-handler.js.map