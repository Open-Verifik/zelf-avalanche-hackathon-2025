/// <reference types="webextension-polyfill"/>
// Browser API Utility - Smart wrapper that handles Chrome/Firefox differences automatically
export class BrowserApiUtil {
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
        if (!runtime)
            return null;
        // Return a smart runtime object that handles sendMessage differences
        return {
            ...runtime,
            sendMessage: (message, callback) => {
                if (this._isChrome) {
                    // Chrome uses callback
                    runtime.sendMessage(message, callback);
                }
                else if (this._isBrowser) {
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
<<<<<<< HEAD
    // Get action API (Chrome) or browserAction (Firefox)
    get action() {
        if (this._isChrome) {
            return this._chrome?.action;
        }
        if (this._isBrowser) {
            return this._browser?.browserAction;
        }
        return null;
    }
=======
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
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
        }
        else if (this._isBrowser) {
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
        if (!storage?.local)
            return null;
        const result = await storage.local.get(key);
        return result[key];
    }
    async setStorageItem(key, value) {
        const storage = this.storage;
        if (!storage?.local)
            return;
        await storage.local.set({ [key]: value });
    }
}
//# sourceMappingURL=browser-api-util.js.map