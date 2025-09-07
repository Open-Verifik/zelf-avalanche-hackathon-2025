/// <reference types="webextension-polyfill"/>

// Browser API Utility - Smart wrapper that handles Chrome/Firefox differences automatically
class BrowserApiUtil {
  constructor() {
    this._chrome = null;
    this._browser = null;
    this._isChrome = false;
    this._isBrowser = false;

    this.initializeApis();
  }

  initializeApis() {
    // Check for Chrome API
    if (typeof chrome !== "undefined") {
      this._chrome = chrome;
      this._isChrome = true;
    }

    // Check for Browser API (Firefox)
    if (typeof browser !== "undefined") {
      this._browser = browser;
      this._isBrowser = true;
    }
  }

  // Smart method that returns the appropriate API or null
  get(moduleName) {
    if (this._isChrome && this._chrome?.[moduleName]) {
      return this._chrome[moduleName];
    }
    if (this._isBrowser && this._browser?.[moduleName]) {
      return this._browser[moduleName];
    }
    return null;
  }

  // Check if a module exists
  has(moduleName) {
    return this.get(moduleName) !== null;
  }

  // Get the runtime API with smart sendMessage handling
  get runtime() {
    const runtime = this.get("runtime");
    if (!runtime) return null;

    // Return a smart runtime object that handles sendMessage differences
    return {
      ...runtime,
      sendMessage: (message, callback) => {
        if (this._isChrome) {
          // Chrome uses callback
          runtime.sendMessage(message, callback);
        } else if (this._isBrowser) {
          // Firefox returns Promise
          return runtime.sendMessage(message);
        }
      },
    };
  }

  // Get storage API
  get storage() {
    return this.get("storage");
  }

  // Get tabs API
  get tabs() {
    return this.get("tabs");
  }

  // Get windows API
  get windows() {
    return this.get("windows");
  }

  // Get menus API
  get menus() {
    return this.get("menus");
  }

  // Get sidePanel (Chrome) or sidebarAction (Firefox) - these are different APIs
  get sidePanel() {
    if (this._isChrome) {
      return this._chrome?.sidePanel;
    }
    return null;
  }

  get sidebarAction() {
    if (this._isBrowser) {
      return this._browser?.sidebarAction;
    }
    return null;
  }

  // Get extension API (Firefox only)
  get extension() {
    if (this._isBrowser) {
      return this._browser?.extension;
    }
    return null;
  }

  // Convenience getters
  get isExtension() {
    return this._isChrome || this._isBrowser;
  }

  get isChrome() {
    return this._isChrome;
  }

  get isBrowser() {
    return this._isBrowser;
  }

  // Smart sendMessage that handles both Chrome and Firefox
  sendMessage(message, callback) {
    const runtime = this.runtime;
    if (!runtime) {
      throw new Error("Runtime API not available");
    }

    if (this._isChrome) {
      // Chrome uses callback
      runtime.sendMessage(message, callback);
    } else if (this._isBrowser) {
      // Firefox returns Promise
      return runtime.sendMessage(message);
    }
  }

  // Smart addMessageListener
  addMessageListener(listener) {
    const runtime = this.get("runtime");
    if (runtime) {
      runtime.onMessage.addListener(listener);
    }
  }

  // Smart storage operations
  async getStorageItem(key) {
    const storage = this.storage;
    if (!storage?.local) return null;

    const result = await storage.local.get(key);
    return result[key];
  }

  async setStorageItem(key, value) {
    const storage = this.storage;
    if (!storage?.local) return;

    await storage.local.set({ [key]: value });
  }
}

// Create the browser API utility instance
const browserApi = new BrowserApiUtil();

console.log("Background script starting up...");
console.log("Service worker context:", typeof self !== "undefined");
console.log("Browser API available:", browserApi.isBrowser);
console.log("Chrome API available:", browserApi.isChrome);

// Force immediate activation
if (typeof self !== "undefined") {
  console.log("Service worker is running in correct context");
} else {
  console.error("Service worker is NOT running in correct context");
}

// Force service worker activation
self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
  event.waitUntil(self.clients.claim());
});

// Test service worker immediately
setTimeout(() => {
  console.log("Service worker test - 5 seconds after startup");
}, 5000);

const DEFAULT_INDEX = "index.html";
const TAB_ID_STORAGE_KEY = "extensionTabId";
const TAB_OPEN_STORAGE_KEY = "isExtensionTabOpen";

const openFullPage = () => {
  const storage = browserApi.storage;
  const runtime = browserApi.runtime;
  const tabs = browserApi.tabs;

  if (!storage || !runtime || !tabs) return;

  storage.local.get([TAB_OPEN_STORAGE_KEY, TAB_ID_STORAGE_KEY]).then(() => {
    const url = runtime.getURL("index.html");

    tabs.create({ url }).then((tab) => {
      if (!tab || !tab.id) return;

      storage.local.set({
        [TAB_OPEN_STORAGE_KEY]: true,
        [TAB_ID_STORAGE_KEY]: tab.id,
      });
    });
  });
};

// Chrome API setup (primary)
if (browserApi.sidePanel) {
  browserApi.sidePanel.setOptions({
    path: DEFAULT_INDEX,
    enabled: true,
  });
}

// Firefox specific (only if browser API is available)
if (browserApi.isBrowser) {
  browserApi.sidebarAction?.setPanel({ panel: DEFAULT_INDEX });

  browserApi.menus?.onClicked.addListener(() => {
    if (browserApi.sidebarAction) browserApi.sidebarAction.open();
  });

  browserApi.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    // Don't automatically open full page - let popup work normally
    // openFullPage();
  });
} else if (browserApi.isChrome && browserApi.has("runtime")) {
  browserApi.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    // Don't automatically open full page - let popup work normally
    // openFullPage();
  });
}

// Handle messages from content scripts - much simpler now!
if (browserApi.has("runtime")) {
  browserApi.addMessageListener((message, sender, sendResponse) => {
    console.log("Background: Received message:", message);
    console.log("Background: Sender:", sender);
    handleAutofillMessage(message, sender, sendResponse);
    return true; // Keep message channel open for async response
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

// Add a simple listener to activate the service worker
if (browserApi.has("runtime")) {
  browserApi.runtime.onStartup.addListener(() => {
    console.log("Background: Extension startup");
  });

  browserApi.runtime.onSuspend.addListener(() => {
    console.log("Background: Extension suspending");
  });
}

async function handleAutofillMessage(message, sender, sendResponse) {
  try {
    switch (message.type) {
      case "TEST_MESSAGE":
        console.log("Background: Test message received");
        sendResponse({ success: true, message: "Service worker is active!" });
        break;
      case "GET_PASSWORDS":
        await handleGetPasswords(message.payload, sendResponse);
        break;
      case "DECRYPT_PASSWORD":
        await handleDecryptPassword(message.payload, sendResponse);
        break;
      case "CREATE_PASSWORD":
        await handleCreatePassword(sender, sendResponse);
        break;
      case "AUTHENTICATE":
        await handleAuthenticate(sendResponse);
        break;
      case "OPEN_BIOMETRICS_MODAL":
        await handleOpenBiometricsModal(message.payload, sender);
        sendResponse({ success: true });
        break;
      default:
        sendResponse({ success: false, error: "Unknown message type" });
    }
  } catch (error) {
    console.error("Error handling autofill message:", error);
    sendResponse({ success: false, error: error.message });
  }
}

async function handleGetPasswords(payload, sendResponse) {
  try {
    console.log("Background: Getting passwords for website:", payload.website);

    // Get stored passwords from the Angular app
    const response = await forwardToAngularApp({
      type: "GET_PASSWORDS",
      payload: payload,
    });

    console.log("Background: Received response from Angular app:", response);

    // Filter passwords for the specific website
    const websitePasswords = response.filter(
      (password) =>
        password.website === payload.website ||
        password.url === payload.website ||
        password.domain === payload.website
    );

    console.log("Background: Filtered passwords:", websitePasswords);
    sendResponse({ success: true, data: websitePasswords });
  } catch (error) {
    console.error("Error getting passwords:", error);
    sendResponse({ success: false, error: error.message });
  }
}

async function handleDecryptPassword(payload, sendResponse) {
  try {
    // Decrypt password using the Angular app
    const response = await forwardToAngularApp({
      type: "DECRYPT_PASSWORD",
      payload: payload,
    });

    sendResponse({ success: true, data: response });
  } catch (error) {
    console.error("Error decrypting password:", error);
    sendResponse({ success: false, error: error.message });
  }
}

async function handleCreatePassword(sender, sendResponse) {
  try {
    // Open the extension popup/sidebar to the create password page
    await openExtensionUI("create-password");
    sendResponse({ success: true });
  } catch (error) {
    sendResponse({ success: false, error: error.message });
  }
}

async function handleAuthenticate(sendResponse) {
  try {
    // Check if user is authenticated in the extension
    if (browserApi.has("storage")) {
      const authData = await browserApi.storage.local.get([
        "zelfKeyJWT",
        "isAuthenticated",
      ]);
      const isAuthenticated = authData.isAuthenticated && authData.zelfKeyJWT;
      sendResponse({ success: isAuthenticated });
    } else {
      sendResponse({ success: false, error: "No storage API available" });
    }
  } catch (error) {
    sendResponse({ success: false, error: error.message });
  }
}

async function handleOpenBiometricsModal(payload, sender) {
  try {
    // Open the extension popup/sidebar to the biometrics modal
    await openExtensionUI("biometrics", payload);
  } catch (error) {
    console.error("Error opening biometrics modal:", error);
  }
}

async function forwardToAngularApp(message) {
  try {
    console.log("Background: Forwarding message to Angular app:", message);

    // Method 1: Try direct runtime messaging (works without tabs)
    try {
      const response = await new Promise((resolve, reject) => {
        // Much simpler - browserApi handles the Chrome/Firefox difference automatically
        browserApi.sendMessage(message, (response) => {
          if (browserApi.runtime?.lastError) {
            reject(new Error(browserApi.runtime.lastError.message));
          } else {
            resolve(response);
          }
        });
      });

      console.log(
        "Background: Received response from Angular app via runtime:",
        response
      );
      return response?.data || [];
    } catch (runtimeError) {
      console.log(
        "Runtime messaging failed, trying tab messaging:",
        runtimeError.message
      );

      // Method 2: Fallback to tab messaging if runtime fails
      if (browserApi.has("tabs")) {
        const tabs = await browserApi.tabs.query({
          url: browserApi.runtime.getURL("index.html"),
        });

        console.log("Background: Found extension tabs:", tabs.length);

        if (tabs.length === 0) {
          console.log(
            "Background: No extension tabs found, returning empty array"
          );
          return [];
        }

        const response = await browserApi.tabs.sendMessage(tabs[0].id, message);
        console.log(
          "Background: Received response from Angular app via tab:",
          response
        );

        return response?.data || [];
      } else {
        console.log("Background: No tab API available");
        return [];
      }
    }
  } catch (error) {
    console.error("Error communicating with Angular app:", error);
    return [];
  }
}

async function openExtensionUI(page, data = null) {
  try {
    // Store any data needed for the UI
    if (data && browserApi.has("storage")) {
      await browserApi.storage.local.set({
        autofillData: data,
        autofillTimestamp: Date.now(),
      });
    }

    // Open the extension popup/sidebar - only use if/elseif for fundamentally different APIs
    if (browserApi.sidebarAction) {
      // Firefox
      browserApi.sidebarAction.open();
    } else if (browserApi.sidePanel) {
      // Chrome
      const currentWindow = await browserApi.windows.getCurrent();
      browserApi.sidePanel.open({ windowId: currentWindow.id });
    } else {
      // Fallback to opening in new tab
      const runtime = browserApi.runtime;
      if (runtime) {
        const url = runtime.getURL(`index.html#/${page}`);
        const tabs = browserApi.tabs;
        if (tabs) {
          tabs.create({ url });
        }
      }
    }
  } catch (error) {
    console.error("Error opening extension UI:", error);
    // Fallback to opening in new tab
    const runtime = browserApi.runtime;

    if (!runtime) return;

    const url = runtime.getURL(`index.html#/${page}`);
    const tabs = browserApi.tabs;

    if (!tabs) return;

    tabs.create({ url });
  }
}
