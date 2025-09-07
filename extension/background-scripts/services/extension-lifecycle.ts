import { BrowserApiUtil } from './browser-api-util';

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
        (event as any).waitUntil((self as any).clients.claim());
      });
    }

    // Test service worker immediately
    setTimeout(() => {
      console.log("Service worker test - 5 seconds after startup");
    }, 5000);

    this.setupSidePanel();
    this.setupEventListeners();
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
        console.log(
          "Background: Received message via addEventListener:",
          event.data
        );
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
}
