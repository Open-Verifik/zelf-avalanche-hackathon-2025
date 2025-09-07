/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./background-scripts/services/browser-api-util.ts
/// <reference types="webextension-polyfill"/>
// Browser API Utility - Smart wrapper that handles Chrome/Firefox differences automatically
class BrowserApiUtil {
    _chrome = null;
    _browser = null;
    _isChrome = false;
    _isBrowser = false;
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

;// ./background-scripts/services/background-credential-manager.ts
class BackgroundCredentialManager {
    browserApi;
    static instance;
    zelfKeyJWT = null;
    zelfKeyJWTExpiry = null;
    API_BASE_URL = "https://keys-api.zelf.world"; // ZelfKey API URL
    static getInstance(browserApi) {
        if (!BackgroundCredentialManager.instance) {
            BackgroundCredentialManager.instance = new BackgroundCredentialManager(browserApi);
        }
        return BackgroundCredentialManager.instance;
    }
    constructor(browserApi) {
        this.browserApi = browserApi;
        // Load JWT from storage asynchronously
        this.loadJWTFromStorage().catch((error) => {
            console.error("Error loading JWT from storage in constructor:", error);
        });
    }
    /**
     * Load JWT from storage (replicating Angular service behavior)
     */
    async loadJWTFromStorage() {
        try {
            if (this.browserApi?.has("storage")) {
                const result = await this.browserApi.storage.local.get(["zelfKeyJWT", "zelfKeyJWTExpiry"]);
                this.zelfKeyJWT = result.zelfKeyJWT || null;
                this.zelfKeyJWTExpiry = result.zelfKeyJWTExpiry || null;
                // Check if token is expired
                if (this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() >= this.zelfKeyJWTExpiry) {
                    console.log("JWT token expired, clearing from storage");
                    this.zelfKeyJWT = null;
                    this.zelfKeyJWTExpiry = null;
                    await this.saveJWTToStorage();
                }
            }
            else {
                console.error("Storage API not available through BrowserApiUtil");
            }
        }
        catch (error) {
            console.error("Error loading JWT from storage:", error);
        }
    }
    /**
     * Save JWT to storage (replicating Angular service behavior)
     */
    async saveJWTToStorage() {
        try {
            if (this.browserApi?.has("storage")) {
                await this.browserApi.storage.local.set({
                    zelfKeyJWT: this.zelfKeyJWT,
                    zelfKeyJWTExpiry: this.zelfKeyJWTExpiry,
                });
            }
            else {
                console.error("Storage API not available through BrowserApiUtil");
            }
        }
        catch (error) {
            console.error("Error saving JWT to storage:", error);
        }
    }
    /**
     * Get wallet data from storage
     */
    async getWalletData() {
        try {
            if (this.browserApi?.has("storage")) {
                const result = await this.browserApi.storage.local.get(["wallet"]);
                return result.wallet || null;
            }
            return null;
        }
        catch (error) {
            console.error("Error getting wallet data:", error);
            return null;
        }
    }
    /**
     * Get the current JWT token if valid, or initialize session if needed
     */
    async getZelfKeyJWT() {
        // Check if we have a valid cached token
        if (this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() < this.zelfKeyJWTExpiry) {
            return this.zelfKeyJWT;
        }
        // Try to reload from storage first
        await this.loadJWTFromStorage();
        // Check again after loading from storage
        if (this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() < this.zelfKeyJWTExpiry) {
            return this.zelfKeyJWT;
        }
        // If still no valid token, try to initialize a new session
        const sessionResult = await this.initZelfKeySession();
        return sessionResult?.data?.token || null;
    }
    /**
     * Clear the JWT token (replicating clearZelfKeyJWT from Angular service)
     */
    clearZelfKeyJWT() {
        this.zelfKeyJWT = null;
        this.zelfKeyJWTExpiry = null;
        this.saveJWTToStorage();
    }
    /**
     * Check if user is authenticated
     */
    async isAuthenticated() {
        const jwt = await this.getZelfKeyJWT();
        return !!jwt;
    }
    /**
     * Initialize ZelfKey session (replicating initZelfKeySession from Angular service)
     */
    async initZelfKeySession() {
        // Check if we have a valid cached JWT token
        if (this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() < this.zelfKeyJWTExpiry) {
            return { data: { token: this.zelfKeyJWT } };
        }
        const { wallet } = await this.getAllWalletsFromStorage();
        if (!wallet?.ethAddress) {
            throw new Error("No wallet found in storage - user needs to authenticate first");
        }
        const response = await this.makeApiCall("POST", "/api/sessions", {
            address: wallet.ethAddress,
            identifier: wallet.name,
        });
        // Cache the JWT token with expiry (24 hours)
        if (response?.data?.token) {
            this.zelfKeyJWT = response.data.token;
            this.zelfKeyJWTExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
            this.saveJWTToStorage();
        }
        return response;
    }
    /**
     * Get all wallets from storage (replicating getAllWalletsFromStorage from Angular service)
     */
    async getAllWalletsFromStorage() {
        try {
            if (!this.browserApi?.has("storage")) {
                console.error("Storage API not available through BrowserApiUtil");
                return { wallet: null, wallets: [] };
            }
            const result = await this.browserApi.storage.local.get(["wallet", "wallets"]);
            const wallet = result.wallet || {};
            const wallets = result.wallets || [];
            if (!wallet?.ethAddress) {
                if (!wallets.length) {
                    return { wallet, wallets: [] };
                }
                // Set first wallet as current if no current wallet
                const firstWallet = wallets[0];
                await this.browserApi.storage.local.set({ wallet: firstWallet });
                return { wallet: firstWallet, wallets };
            }
            return { wallet, wallets };
        }
        catch (error) {
            console.error("Error getting wallets from storage:", error);
            return { wallet: null, wallets: [] };
        }
    }
    /**
     * List stored passwords from IPFS (replicating listStoredPasswords from Angular service)
     */
    async listStoredPasswords() {
        const jwt = await this.getZelfKeyJWT();
        if (!jwt) {
            throw new Error("Unable to authenticate with ZelfKey API");
        }
        return this.makeApiCall("GET", "/api/zelf-key/list?category=password");
    }
    /**
     * Get passwords for a specific website (wrapper for listStoredPasswords with filtering)
     */
    async getPasswords(website) {
        try {
            const rawResponse = await this.listStoredPasswords();
            // Handle different response formats
            const data = rawResponse.data || rawResponse || [];
            // Transform the raw password data to match PasswordEntry interface
            const passwords = data
                .filter((password) => {
                return password.publicData?.type === "website_password";
            })
                .filter((password) => {
                // Filter by website if provided
                if (!website)
                    return true;
                const targetDomain = website.replace(/^https?:\/\//, "").replace(/^www\./, "");
                const passwordDomain = password.publicData?.website ? new URL(password.publicData.website).hostname : undefined;
                return (passwordDomain === targetDomain ||
                    password.publicData?.website?.includes(targetDomain) ||
                    password.publicData?.website === targetDomain);
            });
            return passwords;
        }
        catch (error) {
            console.error("Error getting passwords:", error);
            return [];
        }
    }
    /**
     * Make API call with authentication (replicating HttpWrapperService behavior)
     */
    async makeApiCall(method, endpoint, data) {
        const jwt = await this.getZelfKeyJWT();
        if (!jwt) {
            throw new Error("No valid JWT token available");
        }
        const url = `${this.API_BASE_URL}${endpoint}`;
        const options = {
            method,
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json",
            },
        };
        if (data && (method === "POST" || method === "PUT")) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`API call failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    /**
     * Store a new password
     */
    async storePassword(passwordData) {
        try {
            // Ensure we have a valid session
            await this.initZelfKeySession();
            const jwt = this.getZelfKeyJWT();
            if (!jwt) {
                console.error("Failed to initialize session");
                return false;
            }
            const response = await this.makeApiCall("POST", "/api/zelf-key/store/password", passwordData);
            return !!response?.data;
        }
        catch (error) {
            console.error("Error storing password:", error);
            return false;
        }
    }
}

;// ./background-scripts/services/message-handler.ts

class MessageHandler {
    browserApi;
    credentialManager;
    constructor(browserApi) {
        this.browserApi = browserApi;
        this.credentialManager = BackgroundCredentialManager.getInstance(this.browserApi);
    }
    async handleAutofillMessage(message, sender, sendResponse) {
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
            const passwords = await this.credentialManager.getPasswords(payload.website);
            sendResponse({ success: true, data: passwords });
        }
        catch (error) {
            console.error("Error getting passwords:", error);
            sendResponse({ success: false, error: error.message });
        }
    }
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
            }
            sendResponse({ success: true });
        }
        catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleAuthenticate(sendResponse) {
        try {
            const isAuthenticated = this.credentialManager.isAuthenticated();
            sendResponse({ success: isAuthenticated });
        }
        catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    async handleOpenBiometricsModal(payload, sender) {
        try {
            // Open the extension popup/sidebar to the biometrics modal
            await this.openExtensionUI("biometrics");
        }
        catch (error) {
            console.error("Error opening biometrics modal:", error);
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
            const extensionUrl = runtime.getURL(`index.html#/${page}`);
            // Always open a new tab for create password to ensure clean state
            const tabs = this.browserApi.tabs;
            if (tabs) {
                const newTab = await tabs.create({
                    url: extensionUrl,
                    active: true,
                });
                return newTab.id;
            }
            else {
                console.error("Tabs API not available");
                return null;
            }
        }
        catch (error) {
            console.error("Error opening extension UI:", error);
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
        }
    }
}

;// ./background-scripts/services/extension-lifecycle.ts
class ExtensionLifecycle {
    browserApi;
    DEFAULT_INDEX = "index.html";
    TAB_ID_STORAGE_KEY = "extensionTabId";
    TAB_OPEN_STORAGE_KEY = "isExtensionTabOpen";
    constructor(browserApi) {
        this.browserApi = browserApi;
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

;// ./background-scripts/background.ts
/// <reference types="webextension-polyfill"/>



// Create the browser API utility instance
const browserApi = new BrowserApiUtil();
// Initialize the extension lifecycle
const extensionLifecycle = new ExtensionLifecycle(browserApi);
extensionLifecycle.initialize();
// Initialize the message handler
const messageHandler = new MessageHandler(browserApi);
// Handle messages from content scripts - much simpler now!
if (browserApi.has("runtime")) {
    browserApi.addMessageListener((message, sender, sendResponse) => {
        console.log("Background: Received message:", message);
        console.log("Background: Sender:", sender);
        messageHandler.handleAutofillMessage(message, sender, sendResponse);
        return true; // Keep message channel open for async response
    });
}
// Test comment

/******/ })()
;
//# sourceMappingURL=background.js.map