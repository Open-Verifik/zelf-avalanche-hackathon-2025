/// <reference types="webextension-polyfill"/>

// Browser API Utility - Smart wrapper that handles Chrome/Firefox differences automatically
export class BrowserApiUtil {
  private _chrome: typeof chrome | null = null;
  private _browser: typeof browser | null = null;
  private _isChrome = false;
  private _isBrowser = false;

  constructor() {
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
  get(moduleName: string) {
    if (this._isChrome && this._chrome?.[moduleName as keyof typeof chrome]) {
      return this._chrome[moduleName as keyof typeof chrome];
    }
    if (this._isBrowser && this._browser?.[moduleName as keyof typeof browser]) {
      return this._browser[moduleName as keyof typeof browser];
    }
    return null;
  }

  // Check if a module exists
  has(moduleName: string) {
    return this.get(moduleName) !== null;
  }

  // Get the runtime API with smart sendMessage handling
  get runtime() {
    const runtime = this.get("runtime");
    if (!runtime) return null;

    // Return a smart runtime object that handles sendMessage differences
    return {
      ...runtime,
      sendMessage: (message: any, callback?: (response: any) => void) => {
        if (this._isChrome) {
          // Chrome uses callback
          (runtime as any).sendMessage(message, callback);
        } else if (this._isBrowser) {
          // Firefox returns Promise
          return (runtime as any).sendMessage(message);
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
  sendMessage(message: any, callback?: (response: any) => void) {
    const runtime = this.runtime;
    if (!runtime) {
      throw new Error("Runtime API not available");
    }

    if (this._isChrome) {
      // Chrome uses callback
      (runtime as any).sendMessage(message, callback);
    } else if (this._isBrowser) {
      // Firefox returns Promise
      return (runtime as any).sendMessage(message);
    }
  }

  // Smart addMessageListener
  addMessageListener(listener: (message: any, sender: any, sendResponse: (response?: any) => void) => void) {
    const runtime = this.get("runtime");
    if (runtime) {
      (runtime as any).onMessage.addListener(listener);
    }
  }

  // Smart storage operations
  async getStorageItem(key: string) {
    const storage = this.storage;
    if (!storage?.local) return null;

    const result = await (storage as any).local.get(key);
    return result[key];
  }

  async setStorageItem(key: string, value: any) {
    const storage = this.storage;
    if (!storage?.local) return;

    await (storage as any).local.set({ [key]: value });
  }
}
