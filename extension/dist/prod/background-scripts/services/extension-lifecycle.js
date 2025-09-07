export class ExtensionLifecycle {
    constructor(browserApi) {
        this.browserApi = browserApi;
        this.DEFAULT_INDEX = "index.html";
        this.TAB_ID_STORAGE_KEY = "extensionTabId";
        this.TAB_OPEN_STORAGE_KEY = "isExtensionTabOpen";
    }
    initialize() {
        console.log("Background script starting up...");
        console.log("Service worker context:", typeof self !== "undefined");
        console.log("Browser API available:", this.browserApi.isBrowser);
        console.log("Chrome API available:", this.browserApi.isChrome);
        // Force immediate activation
        if (typeof self !== "undefined") {
            console.log("Service worker is running in correct context");
        }
        else {
            console.error("Service worker is NOT running in correct context");
        }
        // Force service worker activation
        if (typeof self !== "undefined") {
            self.addEventListener("install", (event) => {
                console.log("Service worker installing...");
                event.waitUntil(self.skipWaiting());
            });
            self.addEventListener("activate", (event) => {
                console.log("Service worker activating...");
                event.waitUntil(self.clients.claim());
            });
        }
        // Test service worker immediately
        setTimeout(() => {
            console.log("Service worker test - 5 seconds after startup");
        }, 5000);
        this.setupSidePanel();
        this.setupEventListeners();
    }
    setupSidePanel() {
        // Chrome API setup (primary)
        if (this.browserApi.sidePanel) {
            this.browserApi.sidePanel.setOptions({
                path: this.DEFAULT_INDEX,
                enabled: true,
            });
        }
        // Firefox specific (only if browser API is available)
        if (this.browserApi.isBrowser) {
            this.browserApi.sidebarAction?.setPanel({ panel: this.DEFAULT_INDEX });
            this.browserApi.menus?.onClicked.addListener(() => {
                if (this.browserApi.sidebarAction)
                    this.browserApi.sidebarAction.open();
            });
        }
    }
    setupEventListeners() {
        // Extension lifecycle events
        if (this.browserApi.isBrowser) {
            this.browserApi.runtime?.onInstalled.addListener(() => {
                console.log("Extension installed");
                // Don't automatically open full page - let popup work normally
                // this.openFullPage();
            });
        }
        else if (this.browserApi.isChrome && this.browserApi.has("runtime")) {
            this.browserApi.runtime?.onInstalled.addListener(() => {
                console.log("Extension installed");
                // Don't automatically open full page - let popup work normally
                // this.openFullPage();
            });
        }
        // Runtime startup and suspend events
        if (this.browserApi.has("runtime")) {
            this.browserApi.runtime?.onStartup.addListener(() => {
                console.log("Background: Extension startup");
            });
            this.browserApi.runtime?.onSuspend.addListener(() => {
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
    openFullPage() {
        const storage = this.browserApi.storage;
        const runtime = this.browserApi.runtime;
        const tabs = this.browserApi.tabs;
        if (!storage || !runtime || !tabs)
            return;
        storage.local.get([this.TAB_OPEN_STORAGE_KEY, this.TAB_ID_STORAGE_KEY]).then(() => {
            const url = runtime.getURL("index.html");
            tabs.create({ url }).then((tab) => {
                if (!tab || !tab.id)
                    return;
                storage.local.set({
                    [this.TAB_OPEN_STORAGE_KEY]: true,
                    [this.TAB_ID_STORAGE_KEY]: tab.id,
                });
            });
        });
    }
}
//# sourceMappingURL=extension-lifecycle.js.map