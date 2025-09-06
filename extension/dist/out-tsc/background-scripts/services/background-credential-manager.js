export class BackgroundCredentialManager {
    static getInstance(browserApi) {
        if (!BackgroundCredentialManager.instance) {
            BackgroundCredentialManager.instance = new BackgroundCredentialManager(browserApi);
        }
        return BackgroundCredentialManager.instance;
    }
    constructor(browserApi) {
        this.browserApi = browserApi;
        this.zelfKeyJWT = null;
        this.zelfKeyJWTExpiry = null;
        this.API_BASE_URL = "https://keys-api.zelf.world"; // ZelfKey API URL
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
//# sourceMappingURL=background-credential-manager.js.map