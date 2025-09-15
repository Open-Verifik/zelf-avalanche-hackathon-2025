import { BrowserApiUtil } from "./browser-api-util";

export interface PasswordEntry {
    id: string;
    website?: string;
    domain?: string;
    url?: string;
    name?: string;
    username?: string;
    publicData?: {
        type: string;
        website?: string;
        username?: string;
    };
}

export interface DecryptedPasswordData {
    metadata: {
        username: string;
        password: string;
    };
}

export interface WalletData {
    ethAddress?: string;
    name?: string;
    publicData?: {
        zelfName?: string;
    };
}

export class BackgroundCredentialManager {
    private static instance: BackgroundCredentialManager;
    private zelfKeyJWT: string | null = null;
    private zelfKeyJWTExpiry: number | null = null;
    private readonly API_BASE_URL = "https://keys-api.zelf.world"; // ZelfKey API URL

    public static getInstance(browserApi?: BrowserApiUtil): BackgroundCredentialManager {
        if (!BackgroundCredentialManager.instance) {
            BackgroundCredentialManager.instance = new BackgroundCredentialManager(browserApi);
        }
        return BackgroundCredentialManager.instance;
    }

    constructor(private browserApi?: BrowserApiUtil) {
        this.loadJWTFromStorage().catch((error) => {
            console.error("Error loading JWT from storage in constructor:", error);
        });
    }

    /**
     * Load JWT from storage (replicating Angular service behavior)
     */
    private async loadJWTFromStorage(): Promise<void> {
        try {
            if (this.browserApi?.has("storage")) {
                const result = await (this.browserApi.storage as any).local.get(["zelfKeyJWT", "zelfKeyJWTExpiry"]);
                this.zelfKeyJWT = result.zelfKeyJWT || null;
                this.zelfKeyJWTExpiry = result.zelfKeyJWTExpiry || null;

                if (this.isTokenExpired()) {
                    this.clearExpiredToken();
                    await this.saveJWTToStorage();
                }
            } else {
                console.error("Storage API not available through BrowserApiUtil");
            }
        } catch (error) {
            console.error("Error loading JWT from storage:", error);
        }
    }

    /**
     * Save JWT to storage (replicating Angular service behavior)
     */
    private async saveJWTToStorage(): Promise<void> {
        try {
            if (this.browserApi?.has("storage")) {
                await (this.browserApi.storage as any).local.set({
                    zelfKeyJWT: this.zelfKeyJWT,
                    zelfKeyJWTExpiry: this.zelfKeyJWTExpiry,
                });
            } else {
                console.error("Storage API not available through BrowserApiUtil");
            }
        } catch (error) {
            console.error("Error saving JWT to storage:", error);
        }
    }

    /**
     * Get wallet data from storage
     */
    private async getWalletData(): Promise<WalletData | null> {
        try {
            if (this.browserApi?.has("storage")) {
                const result = await (this.browserApi.storage as any).local.get(["wallet"]);
                return result.wallet || null;
            }
            return null;
        } catch (error) {
            console.error("Error getting wallet data:", error);
            return null;
        }
    }

    public async getZelfKeyJWT(): Promise<string | null> {
        if (this.hasValidToken()) {
            return this.zelfKeyJWT;
        }

        await this.loadJWTFromStorage();
        if (this.hasValidToken()) {
            return this.zelfKeyJWT;
        }

        const sessionResult = await this.initZelfKeySession();
        return sessionResult?.data?.token || null;
    }

    public clearZelfKeyJWT(): void {
        this.zelfKeyJWT = null;
        this.zelfKeyJWTExpiry = null;
        this.saveJWTToStorage();
    }

    public async isAuthenticated(): Promise<boolean> {
        const jwt = await this.getZelfKeyJWT();
        return !!jwt;
    }

    private isTokenExpired(): boolean {
        return !!(this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() >= this.zelfKeyJWTExpiry);
    }

    private hasValidToken(): boolean {
        return !!(this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() < this.zelfKeyJWTExpiry);
    }

    private clearExpiredToken(): void {
        this.zelfKeyJWT = null;
        this.zelfKeyJWTExpiry = null;
    }

    private cacheToken(token: string): void {
        this.zelfKeyJWT = token;
        this.zelfKeyJWTExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        this.saveJWTToStorage();
    }

    private filterPasswordsByWebsite(data: any[], website: string): PasswordEntry[] {
        return data
            .filter((password: any) => password.publicData?.type === "website_password")
            .filter((password: any) => this.matchesWebsite(password, website));
    }

    private matchesWebsite(password: any, website: string): boolean {
        if (!website) return true;

        const targetDomain = website.replace(/^https?:\/\//, "").replace(/^www\./, "");
        const passwordDomain = password.publicData?.website ? new URL(password.publicData.website).hostname : undefined;

        return (
            passwordDomain === targetDomain || password.publicData?.website?.includes(targetDomain) || password.publicData?.website === targetDomain
        );
    }

    public async initZelfKeySession(): Promise<any> {
        if (this.hasValidToken()) {
            return { data: { token: this.zelfKeyJWT } };
        }

        const { wallet } = await this.getAllWalletsFromStorage();

        if (!wallet?.ethAddress) {
            throw new Error("No wallet found in storage - user needs to authenticate first");
        }

        const response = await this.makeApiCall("POST", "/api/sessions", {
            address: wallet.ethAddress,
            identifier: wallet.publicData?.zelfName,
        });

        if (response?.data?.token) {
            this.cacheToken(response.data.token);
        }

        return response;
    }

    /**
     * Get all wallets from storage (replicating getAllWalletsFromStorage from Angular service)
     */
    private async getAllWalletsFromStorage(): Promise<{ wallet: WalletData | null; wallets: WalletData[] }> {
        try {
            if (!this.browserApi?.has("storage")) {
                console.error("Storage API not available through BrowserApiUtil");
                return { wallet: null, wallets: [] };
            }

            const result = await (this.browserApi.storage as any).local.get(["wallet", "wallets"]);
            const wallet = result.wallet || {};
            const wallets = result.wallets || [];

            if (!wallet?.ethAddress) {
                if (!wallets.length) {
                    return { wallet, wallets: [] };
                }
                // Set first wallet as current if no current wallet
                const firstWallet = wallets[0];
                await (this.browserApi.storage as any).local.set({ wallet: firstWallet });
                return { wallet: firstWallet, wallets };
            }

            return { wallet, wallets };
        } catch (error) {
            console.error("Error getting wallets from storage:", error);
            return { wallet: null, wallets: [] };
        }
    }

    public async listStoredPasswords(): Promise<any> {
        const jwt = await this.getZelfKeyJWT();
        if (!jwt) {
            throw new Error("Unable to authenticate with ZelfKey API");
        }
        return this.makeApiCall("GET", "/api/zelf-key/list?category=password");
    }

    public async getPasswords(website: string): Promise<PasswordEntry[]> {
        try {
            const rawResponse = await this.listStoredPasswords();
            const data = rawResponse.data || rawResponse || [];
            return this.filterPasswordsByWebsite(data, website);
        } catch (error) {
            console.error("Error getting passwords:", error);
            return [];
        }
    }

    /**
     * Make API call with authentication (replicating HttpWrapperService behavior)
     */
    private async makeApiCall(method: string, endpoint: string, data?: any): Promise<any> {
        const jwt = await this.getZelfKeyJWT();
        if (!jwt) {
            throw new Error("No valid JWT token available");
        }

        const url = `${this.API_BASE_URL}${endpoint}`;
        const options: RequestInit = {
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
    public async storePassword(passwordData: any): Promise<boolean> {
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
        } catch (error) {
            console.error("Error storing password:", error);
            return false;
        }
    }
}
