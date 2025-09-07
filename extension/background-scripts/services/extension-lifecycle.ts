import { BrowserApiUtil } from "./browser-api-util";

export class ExtensionLifecycle {
    private readonly DEFAULT_INDEX = "index.html";
    private readonly TAB_ID_STORAGE_KEY = "extensionTabId";
    private readonly TAB_OPEN_STORAGE_KEY = "isExtensionTabOpen";

    constructor(private browserApi: BrowserApiUtil) {}

    initialize() {
        console.log("Background script starting up...");
        console.log("Service worker context:", typeof self !== "undefined");
        console.log("Browser API available:", this.browserApi.isBrowser);
        console.log("Chrome API available:", this.browserApi.isChrome);

        // Force immediate activation
        if (typeof self !== "undefined") {
            console.log("Service worker is running in correct context");
        } else {
            console.error("Service worker is NOT running in correct context");
        }

        // Force service worker activation
        if (typeof self !== "undefined") {
            self.addEventListener("install", (event) => {
                console.log("Service worker installing...");
                (event as any).waitUntil((self as any).skipWaiting());
            });

            self.addEventListener("activate", (event) => {
                console.log("Service worker activating...");
                (event as any).waitUntil(
                    (self as any).clients
                        .claim()
                        .then(() => {
                            // Notify content scripts after activation is complete
                            this.notifyServiceWorkerReady();
                            return Promise.resolve();
                        })
                        .catch((error: any) => {
                            console.error("Service worker activation failed:", error);
                            // Still try to notify content scripts even if activation had issues
                            this.notifyServiceWorkerReady();
                            return Promise.resolve();
                        })
                );
            });
        }

        this.setupSidePanel();
        this.setupEventListeners();

        // For cases where the service worker is already active, notify immediately
        // This handles the case where the service worker doesn't go through install/activate
        setTimeout(() => {
            this.notifyServiceWorkerReady();
        }, 100);
    }

    private setupSidePanel() {
        // Chrome API setup (primary)
        if (this.browserApi.sidePanel) {
            (this.browserApi.sidePanel as any).setOptions({
                path: this.DEFAULT_INDEX,
                enabled: true,
            });
        }

        // Firefox specific (only if browser API is available)
        if (this.browserApi.isBrowser) {
            (this.browserApi.sidebarAction as any)?.setPanel({ panel: this.DEFAULT_INDEX });

            (this.browserApi.menus as any)?.onClicked.addListener(() => {
                if (this.browserApi.sidebarAction) (this.browserApi.sidebarAction as any).open();
            });
        }
    }

    private setupEventListeners() {
        // Extension lifecycle events
        if (this.browserApi.isBrowser) {
            (this.browserApi.runtime as any)?.onInstalled.addListener(() => {
                console.log("Extension installed");
                // Don't automatically open full page - let popup work normally
                // this.openFullPage();
            });
        } else if (this.browserApi.isChrome && this.browserApi.has("runtime")) {
            (this.browserApi.runtime as any)?.onInstalled.addListener(() => {
                console.log("Extension installed");
                // Don't automatically open full page - let popup work normally
                // this.openFullPage();
            });
        }

        // Runtime startup and suspend events
        if (this.browserApi.has("runtime")) {
            (this.browserApi.runtime as any)?.onStartup.addListener(() => {
                console.log("Background: Extension startup");
            });

            (this.browserApi.runtime as any)?.onSuspend.addListener(() => {
                console.log("Background: Extension suspending");
            });
        }

        // Also listen for messages on the global object
        if (typeof self !== "undefined") {
            self.addEventListener("message", (event) => {
                console.log("Background: Received message via addEventListener:", event.data);
            });
        }
    }

    private openFullPage() {
        const storage = this.browserApi.storage;
        const runtime = this.browserApi.runtime;
        const tabs = this.browserApi.tabs;

        if (!storage || !runtime || !tabs) return;

        (storage as any).local.get([this.TAB_OPEN_STORAGE_KEY, this.TAB_ID_STORAGE_KEY]).then(() => {
            const url = (runtime as any).getURL("index.html");

            (tabs as any).create({ url }).then((tab: any) => {
                if (!tab || !tab.id) return;

                (storage as any).local.set({
                    [this.TAB_OPEN_STORAGE_KEY]: true,
                    [this.TAB_ID_STORAGE_KEY]: tab.id,
                });
            });
        });
    }

    private async notifyServiceWorkerReady(): Promise<void> {
        try {
            // Get all tabs and notify them that service worker is ready
            if (this.browserApi.has("tabs")) {
                const tabsApi = this.browserApi.tabs as any;
                if (tabsApi?.query) {
                    const tabs = await tabsApi.query({});

                    let successCount = 0;

                    for (const tab of tabs) {
                        if (tab.id) {
                            try {
                                if (tabsApi?.sendMessage) {
                                    await tabsApi.sendMessage(tab.id, {
                                        type: "SERVICE_WORKER_READY",
                                    });
                                    successCount++;
                                }
                            } catch (error) {
                                // Tab might not have content script loaded yet, ignore
                            }
                        }
                    }

                    // If no tabs were successfully notified, retry after a short delay
                    if (successCount === 0 && tabs.length > 0) {
                        setTimeout(() => {
                            this.notifyServiceWorkerReady();
                        }, 1000);
                    }
                }
            }
        } catch (error) {
            console.error("Error notifying content scripts:", error);
        }
    }
}
