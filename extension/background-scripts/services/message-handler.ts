import { BrowserApiUtil } from "./browser-api-util";
import { BackgroundCredentialManager } from "./background-credential-manager";

export class MessageHandler {
    private credentialManager: BackgroundCredentialManager;
    private pendingDecryptionRequests?: Map<string, number>;
    private pendingPopupRoute?: string;

    constructor(private browserApi: BrowserApiUtil) {
        this.credentialManager = BackgroundCredentialManager.getInstance(this.browserApi);
        this.setupPopupNavigation();
    }

    private setupPopupNavigation() {
        // Listen for when the popup opens and navigate to the pending route
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.type === "POPUP_READY" && this.pendingPopupRoute) {
                    this.navigatePopupToRoute(this.pendingPopupRoute);
                    this.pendingPopupRoute = undefined;
                }
            });
        }
    }

    private async navigatePopupToRoute(route: string) {
        try {
            // Send a message to the popup to navigate to the route
            const runtime = this.browserApi.runtime;
            if (runtime) {
                console.log("Navigating popup to route:", route);

                // Send message to the popup to navigate
                const tabs = this.browserApi.tabs;
                if (tabs) {
                    // Find the popup tab and send navigation message
                    const allTabs = await (tabs as any).query({});
                    const popupTab = allTabs.find(
                        (tab: any) => tab.url && tab.url.includes("chrome-extension://") && tab.url.includes("index.html") && tab.type === "popup"
                    );

                    if (popupTab) {
                        await (tabs as any).sendMessage(popupTab.id, {
                            type: "NAVIGATE_TO_ROUTE",
                            payload: { route: route },
                        });
                    }
                }
            }
        } catch (error) {
            console.error("Error navigating popup to route:", error);
        }
    }

    async handleAutofillMessage(message: any, sender: any, sendResponse: (response: any) => void) {
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
                case "OPEN_PASSWORD_DECRYPTOR":
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
                default:
                    sendResponse({ success: false, error: "Unknown message type" });
            }
        } catch (error) {
            console.error("Error handling autofill message:", error);
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleGetPasswords(payload: any, sendResponse: (response: any) => void) {
        try {
            const passwords = await this.credentialManager.getPasswords(payload.website);
            sendResponse({ success: true, data: passwords });
        } catch (error) {
            console.error("Error getting passwords:", error);
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleCreatePassword(payload: any, sendResponse: (response: any) => void) {
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
        } catch (error) {
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleAuthenticate(sendResponse: (response: any) => void) {
        try {
            const isAuthenticated = this.credentialManager.isAuthenticated();
            sendResponse({ success: isAuthenticated });
        } catch (error) {
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private async handleOpenBiometricsModal(payload: any, sender: any) {
        try {
            // Open the extension popup/sidebar to the biometrics modal
            await this.openExtensionUI("biometrics");
        } catch (error) {
            console.error("Error opening biometrics modal:", error);
        }
    }

    private async handleOpenPasswordDecryptor(payload: any, sender: any) {
        try {
            console.log("Opening password decryptor popout...");

            // Open the extension popup for password decryption
            const tabId = await this.openExtensionUI("dashboard/passwords/decrypt");

            if (tabId) {
                console.log("Password decryptor popout opened with tab ID:", tabId);
                // Store the sender tab ID for later communication
                this.pendingDecryptionRequests = this.pendingDecryptionRequests || new Map();
                this.pendingDecryptionRequests.set(payload.passwordId, sender.tab?.id);
            } else {
                console.error("Failed to open password decryptor popout");
            }
        } catch (error) {
            console.error("Error opening password decryptor:", error);
        }
    }

    private async handleSendDecryptionDataToPopout(payload: any, sender: any) {
        try {
            // Find the popout tab and send the decryption data
            const tabs = this.browserApi.tabs;
            if (tabs) {
                const allTabs = await (tabs as any).query({});
                const popoutTab = allTabs.find((tab: any) => tab.url && tab.url.includes("#/dashboard/passwords/decrypt"));

                if (popoutTab) {
                    await this.waitForTabAndSendMessage(popoutTab.id, {
                        type: "PASSWORD_DECRYPTOR_DATA",
                        payload: {
                            passwordId: payload.passwordId,
                            publicData: payload.publicData,
                            fieldId: payload.fieldId,
                        },
                    });
                } else {
                    console.error("Popout tab not found");
                }
            }
        } catch (error) {
            console.error("Error sending decryption data to popout:", error);
        }
    }

    private async handleDecryptionResultFromPopout(payload: any, sender: any) {
        try {
            // Get the original sender tab ID
            const originalTabId = this.pendingDecryptionRequests?.get(payload.passwordId);

            if (originalTabId) {
                // Send the result back to the content script
                const tabs = this.browserApi.tabs;
                if (tabs) {
                    await (tabs as any).sendMessage(originalTabId, {
                        type: "DECRYPTION_RESULT",
                        payload: payload.result,
                    });
                }

                // Clean up
                this.pendingDecryptionRequests?.delete(payload.passwordId);
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

            // For password decryptor, open the extension popup programmatically
            if (page === "dashboard/passwords/decrypt") {
                console.log("Opening extension popup for password decryption...");

                // Store the route to navigate to when popup opens
                this.pendingPopupRoute = page;

                // Open the extension popup programmatically
                const action = this.browserApi.action;
                if (action) {
                    try {
                        // Open the popup programmatically
                        await (action as any).openPopup();
                        console.log("Extension popup opened");

                        // Return a special ID to indicate popup mode
                        return -1; // Special ID for popup mode
                    } catch (popupError) {
                        console.warn("Failed to open popup, falling back to tab:", popupError);
                        // Fall through to tab creation
                    }
                } else {
                    console.warn("Action API not available, falling back to tab");
                }
            }

            // Default: open as tab
            const extensionUrl = (runtime as any).getURL(`index.html#/${page}`);
            console.log("Extension URL:", extensionUrl);

            const tabs = this.browserApi.tabs;
            if (tabs) {
                console.log("Creating new tab...");
                const newTab = await (tabs as any).create({
                    url: extensionUrl,
                    active: true,
                });
                console.log("Tab created:", newTab);
                return newTab.id;
            } else {
                console.error("Tabs API not available");
                return null;
            }
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

                // Wait before retrying
                await new Promise((resolve) => setTimeout(resolve, retryDelay));
            }
        }
    }

    private async sendMessageToAngularApp(message: any) {
        try {
            const tabs = this.browserApi.tabs;
            if (!tabs) {
                console.error("Tabs API not available");
                return;
            }

            // Find the extension tab
            const allTabs = await (tabs as any).query({});
            const extensionTab = allTabs.find(
                (tab: any) =>
                    tab.url && tab.url.includes("index.html") && (tab.url.includes("chrome-extension://") || tab.url.includes("moz-extension://"))
            );

            if (extensionTab) {
                await (tabs as any).sendMessage(extensionTab.id, message);
            } else {
                console.error("No extension tab found to send message to");
            }
        } catch (error) {
            console.error("Error sending message to Angular app:", error);
        }
    }
}
