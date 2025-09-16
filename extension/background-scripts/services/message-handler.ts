import { AutofillMessage } from "@shared/types/autofill.types";
import { DecryptionRequest, MessagePayload, MessageSender, SendResponse } from "../../content-scripts/autofill/types/autofill.types";
import { BackgroundCredentialManager } from "./background-credential-manager";
import { BrowserApiUtil } from "./browser-api-util";

export class MessageHandler {
    private static instance: MessageHandler;
    private credentialManager: BackgroundCredentialManager;
    private pendingDecryptionRequests?: Map<string, number>;
    private pendingPopupRoute?: string;
    private pendingDecryptionData?: DecryptionRequest;

    public static getInstance(browserApi: BrowserApiUtil): MessageHandler {
        if (!MessageHandler.instance) {
            MessageHandler.instance = new MessageHandler(browserApi);
        }
        return MessageHandler.instance;
    }

    private constructor(private browserApi: BrowserApiUtil) {
        this.credentialManager = BackgroundCredentialManager.getInstance(this.browserApi);
    }

    private async navigatePopupToRoute(route: string) {
        try {
            // For popup mode, we don't need to find a tab - the popup will handle navigation
            // The popup will check for pending decryption data and navigate accordingly
        } catch (error) {
            console.error("Error navigating popup to route:", error);
        }
    }

    private async sendDecryptionDataToPopup() {
        try {
            if (!this.pendingDecryptionData) return;

            const runtime = this.browserApi.runtime;

            if (!runtime) return;

            try {
                await (runtime as any).sendMessage({
                    type: "PASSWORD_DECRYPTOR_DATA",
                    payload: this.pendingDecryptionData,
                });

                this.pendingDecryptionData = undefined;
            } catch (error) {
                console.error("MessageHandler: Error sending decryption data to popup:", error);
            }
        } catch (error) {
            console.error("MessageHandler: Error in sendDecryptionDataToPopup:", error);
        }
    }

    /**
     * Notify all content scripts that the service worker is ready
     * This is called when the extension UI is opened to ensure content scripts
     * know the service worker is available even if it didn't go through activation
     */
    private async notifyContentScriptsServiceWorkerReady(): Promise<void> {
        try {
            if (!this.browserApi.has("tabs")) return;

            const tabsApi = this.browserApi.tabs as any;

            if (!tabsApi?.query) return;

            const tabs = await tabsApi.query({});

            let successCount = 0;

            for (const tab of tabs) {
                if (!tab.id || !tab.url || tab.url.startsWith("chrome-extension://")) continue;

                try {
                    if (!tabsApi?.sendMessage) continue;

                    await tabsApi.sendMessage(tab.id, {
                        type: "SERVICE_WORKER_READY",
                    });

                    successCount++;
                } catch (error) {
                    continue;
                }
            }
        } catch (error) {
            console.error("MessageHandler: Error notifying content scripts:", error);
        }
    }

    /**
     * Handle close popup request
     */
    private async handleClosePopup(payload: MessagePayload, sender: MessageSender): Promise<void> {
        try {
            if (typeof chrome !== "undefined" && chrome.runtime) {
                chrome.runtime.sendMessage({
                    type: "CLOSE_POPUP",
                    payload: {},
                });
            } else {
                console.warn("MessageHandler: Chrome runtime not available for sending close message");
            }
        } catch (error) {
            console.error("MessageHandler: Error closing popup:", error);
        }
    }

    async handleAutofillMessage(
        message: { type: AutofillMessage["type"]; payload?: MessagePayload },
        sender: MessageSender,
        sendResponse: SendResponse
    ) {
        const timeout = setTimeout(() => {
            sendResponse({ success: false, error: "Request timeout" });
        }, 8000);

        try {
            console.log("MessageHandler: Handling message:", message.type);
            switch (message.type) {
                case "GET_PASSWORDS":
                    const passwords = await this.credentialManager.getPasswords(message.payload?.website || "");
                    sendResponse({ success: true, data: passwords });
                    break;
                case "CREATE_PASSWORD":
                    await this.handleCreatePassword(message.payload || {}, sendResponse);

                    break;
                case "AUTHENTICATE":
                    await this.handleAuthenticate(sendResponse);

                    break;
                case "OPEN_BIOMETRICS_MODAL":
                    await this.handleOpenBiometricsModal(message.payload || {}, sender);

                    sendResponse({ success: true });

                    break;
                case "OPEN_PASSWORD_DECRYPTOR":
                    await this.handleOpenPasswordDecryptor(message.payload || {}, sender);

                    sendResponse({ success: true });

                    break;
                case "SEND_DECRYPTION_DATA_TO_POPOUT":
                    await this.handleSendDecryptionDataToPopout(message.payload || {}, sender);

                    sendResponse({ success: true });

                    break;
                case "DECRYPTION_RESULT_FROM_POPOUT":
                    await this.handleDecryptionResultFromPopout(message.payload || {}, sender);

                    sendResponse({ success: true });

                    break;
                case "CLOSE_POPUP":
                    await this.handleClosePopup(message.payload || {}, sender);

                    sendResponse({ success: true });

                    break;
                case "POPUP_READY":
                    if (this.pendingPopupRoute) {
                        this.navigatePopupToRoute(this.pendingPopupRoute);

                        this.pendingPopupRoute = undefined;
                    }

                    if (this.pendingDecryptionData) {
                        this.sendDecryptionDataToPopup();
                    }

                    sendResponse({ success: true });

                    break;
                case "WAIT_FOR_FORM_READY":
                    await this.handleWaitForFormReady(message.payload || {}, sender, sendResponse);

                    break;
                case "FORM_READY":
                    await this.handleFormReady(message.payload || {}, sendResponse);

                    break;
                default:
                    sendResponse({ success: false, error: "Unknown message type" });
            }

            clearTimeout(timeout);
        } catch (error) {
            clearTimeout(timeout);

            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleGetPasswords(payload: MessagePayload, sendResponse: SendResponse) {
        try {
            const passwords = await this.credentialManager.getPasswords(payload.website || "");

            sendResponse({ success: true, data: passwords });
        } catch (error) {
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleCreatePassword(payload: MessagePayload, sendResponse: SendResponse) {
        try {
            const urlInfo = payload?.urlInfo || null;

            const tabId = await this.openExtensionUI("dashboard/passwords/new");

            if (tabId) {
                await this.waitForTabAndSendMessage(tabId, {
                    type: "CREATE_PASSWORD",
                    payload: { urlInfo },
                });

                this.notifyContentScriptsServiceWorkerReady();
            }

            sendResponse({ success: true });
        } catch (error) {
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleAuthenticate(sendResponse: SendResponse) {
        try {
            const isAuthenticated = await this.credentialManager.isAuthenticated();

            sendResponse({ success: isAuthenticated });
        } catch (error) {
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleOpenBiometricsModal(payload: MessagePayload, sender: MessageSender) {
        try {
            await this.openExtensionUI("biometrics");

            this.notifyContentScriptsServiceWorkerReady();
        } catch (error) {
            console.error("Error opening biometrics modal:", error);
        }
    }

    private async handleOpenPasswordDecryptor(payload: MessagePayload, sender: MessageSender) {
        try {
            const tabId = await this.openExtensionUI("dashboard/passwords/decrypt");

            if (tabId) {
                this.pendingDecryptionRequests = this.pendingDecryptionRequests || new Map();

                if (payload.passwordId && sender.tab?.id) {
                    this.pendingDecryptionRequests.set(payload.passwordId, sender.tab.id);
                }

                this.notifyContentScriptsServiceWorkerReady();
            } else {
                console.error("MessageHandler: Failed to open password decryptor popout");
            }
        } catch (error) {
            console.error("MessageHandler: Error opening password decryptor:", error);
        }
    }

    private async handleSendDecryptionDataToPopout(payload: MessagePayload, sender: MessageSender) {
        try {
            if (payload.passwordId && payload.publicData) {
                this.pendingDecryptionData = {
                    passwordId: payload.passwordId,
                    publicData: payload.publicData,
                    fieldId: payload.fieldId,
                };
            }
        } catch (error) {
            console.error("MessageHandler: Error sending decryption data to popout:", error);
        }
    }

    private async handleDecryptionResultFromPopout(payload: MessagePayload, sender: MessageSender) {
        try {
            const originalTabId = payload.passwordId ? this.pendingDecryptionRequests?.get(payload.passwordId) : undefined;

            if (originalTabId) {
                await this.sendDecryptionResultToTab(originalTabId, payload.result);
                this.cleanupDecryptionRequest(payload.passwordId);
            } else {
                console.error("MessageHandler: No original tab ID found for password:", payload.passwordId);
            }
        } catch (error) {
            console.error("Error handling decryption result from popout:", error);
        }
    }

    private async openExtensionUI(page: string): Promise<number | null> {
        try {
            // Get the extension URL
            const runtime = this.browserApi.runtime;
            if (!runtime) {
                console.error("Runtime API not available");
                return null;
            }

            if (page === "dashboard/passwords/decrypt" || page === "passwords/decrypt") {
                this.pendingPopupRoute = page;

                return this.openPopup();
            }

            return this.openAsTab(runtime, page);
        } catch (error) {
            console.error("Error opening extension UI:", error);
            return null;
        }
    }

    private async waitForTabAndSendMessage(tabId: number, message: any, maxRetries: number = 10, retryDelay: number = 500) {
        const tabs = this.browserApi.tabs;

        if (!tabs) {
            console.error("Tabs API not available");
            return;
        }

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                // Try to send a ping message first to check if the tab is ready
                await (tabs as any).sendMessage(tabId, { type: "PING" });

                // If ping succeeds, send the actual message
                await (tabs as any).sendMessage(tabId, message);

                return;
            } catch (error) {
                if (attempt === maxRetries) {
                    console.error("Max retries reached, failed to send message to tab", tabId);
                    return;
                }

                await new Promise((resolve) => setTimeout(resolve, retryDelay));
            }
        }
    }

    private async sendDecryptionResultToTab(tabId: number, result: any): Promise<void> {
        const tabs = this.browserApi.tabs;

        if (!tabs) {
            console.error("Tabs API not available");
            return;
        }

        await (tabs as any).sendMessage(tabId, {
            type: "DECRYPTION_RESULT",
            payload: result,
        });
    }

    private cleanupDecryptionRequest(passwordId?: string): void {
        if (!passwordId) return;

        this.pendingDecryptionRequests?.delete(passwordId);
    }

    private async openPopup(): Promise<number | null> {
        const action = this.browserApi.action;

        if (!action) {
            console.error("Action API not available");
            return null;
        }

        try {
            await (action as any).openPopup();

            return -1;
        } catch (popupError: any) {
            console.error("Failed to open popup:", popupError);

            return null;
        }
    }

    private async openAsTab(runtime: any, page: string): Promise<number | null> {
        const extensionUrl = runtime.getURL(`index.html#/${page}`);
        const tabs = this.browserApi.tabs;

        if (!tabs) {
            console.error("Tabs API not available");

            return null;
        }

        const newTab = await (tabs as any).create({
            url: extensionUrl,
            active: true,
        });

        return newTab.id;
    }

    /**
     * Handle wait for form ready request
     * Forwards the request to the content script of the specified tab
     */
    private async handleWaitForFormReady(payload: MessagePayload, sender: MessageSender, sendResponse: SendResponse): Promise<void> {
        try {
            if (!sender.tab?.id) {
                throw new Error("No tab ID provided for form wait request");
            }

            const tabs = this.browserApi.tabs;
            if (!tabs) {
                throw new Error("Tabs API not available");
            }

            await (tabs as any).sendMessage(sender.tab.id, {
                type: "WAIT_FOR_FORM_READY",
                payload,
            });

            sendResponse({ success: true });
        } catch (error) {
            console.error("MessageHandler: Error handling wait for form ready:", error);
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleFormReady(payload: MessagePayload, sendResponse: SendResponse) {
        try {
            console.log("MessageHandler: Form ready for tab:", payload.tabId);

            // Forward the FORM_READY message to the extension
            const runtime = this.browserApi.runtime;
            if (runtime) {
                await (runtime as any).sendMessage({
                    type: "FORM_READY",
                    payload: payload,
                });

                // If we have fill data for this tab, send it to the content script
                if (payload.tabId) {
                    const tabs = this.browserApi.tabs;
                    if (tabs) {
                        await (tabs as any).sendMessage(payload.tabId, {
                            type: "FILL_PASSWORD",
                            payload: payload.fillData,
                        });
                    }
                }
            }

            sendResponse({ success: true });
        } catch (error) {
            console.error("MessageHandler: Error handling form ready:", error);
            sendResponse({ success: false, error: (error as Error).message });
        }
    }
}
