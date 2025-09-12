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

        this.validateServiceWorkerContext();
        this.setupServiceWorkerEvents();
        this.setupSidePanel();
        this.setupEventListeners();
        this.scheduleServiceWorkerNotification();
    }

    private setupSidePanel() {
        this.setupChromeSidePanel();
        this.setupFirefoxSidePanel();
    }

    private setupEventListeners() {
        this.setupInstallListeners();
        this.setupRuntimeListeners();
        this.setupGlobalMessageListener();
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

    private validateServiceWorkerContext(): void {
        if (typeof self === "undefined") {
            console.error("Service worker is NOT running in correct context");
        } else {
            console.log("Service worker is running in correct context");
        }
    }

    private setupServiceWorkerEvents(): void {
        if (typeof self === "undefined") return;

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
                        console.log("Service worker activated successfully");
                        this.notifyServiceWorkerReady();
                        return Promise.resolve();
                    })
                    .catch((error: any) => {
                        console.error("Service worker activation failed:", error);
                        this.notifyServiceWorkerReady();
                        return Promise.resolve();
                    })
            );
        });
    }

    private setupChromeSidePanel(): void {
        if (this.browserApi.sidePanel) {
            (this.browserApi.sidePanel as any).setOptions({
                path: this.DEFAULT_INDEX,
                enabled: true,
            });
        }
    }

    private setupFirefoxSidePanel(): void {
        if (!this.browserApi.isBrowser) return;

        (this.browserApi.sidebarAction as any)?.setPanel({ panel: this.DEFAULT_INDEX });
        (this.browserApi.menus as any)?.onClicked.addListener(() => {
            if (this.browserApi.sidebarAction) (this.browserApi.sidebarAction as any).open();
        });
    }

    private setupInstallListeners(): void {
        if (this.browserApi.isBrowser) {
            (this.browserApi.runtime as any)?.onInstalled.addListener(() => {
                console.log("Extension installed (Firefox)");
            });
        } else if (this.browserApi.isChrome && this.browserApi.has("runtime")) {
            (this.browserApi.runtime as any)?.onInstalled.addListener(() => {
                console.log("Extension installed (Chrome)");
            });
        }
    }

    private setupRuntimeListeners(): void {
        if (!this.browserApi.has("runtime")) return;

        (this.browserApi.runtime as any)?.onStartup.addListener(() => {
            console.log("Background: Extension startup");
        });

        (this.browserApi.runtime as any)?.onSuspend.addListener(() => {
            console.log("Background: Extension suspending");
        });
    }

    private setupGlobalMessageListener(): void {
        if (typeof self !== "undefined") {
            self.addEventListener("message", (event) => {
                // Handle global messages if needed
            });
        }
    }

    private scheduleServiceWorkerNotification(): void {
        // For cases where the service worker is already active, notify immediately
        // This handles the case where the service worker doesn't go through install/activate
        setTimeout(() => {
            console.log("Scheduling service worker ready notification...");
            this.notifyServiceWorkerReady();
        }, 100);
    }
}
