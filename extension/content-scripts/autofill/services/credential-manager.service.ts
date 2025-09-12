import { PasswordEntry, DecryptedPasswordData } from "../types/autofill.types";

// Chrome extension API declaration
declare const chrome: any;

export class CredentialManagerService {
    private static instance: CredentialManagerService;
    private accessKey: string | null = null;
    private accessKeyExpiry: number | null = null;
    private readonly API_BASE_URL = "https://api.zelfkey.com"; // Update with your actual API URL

    public static getInstance(): CredentialManagerService {
        if (!CredentialManagerService.instance) {
            CredentialManagerService.instance = new CredentialManagerService();
        }
        return CredentialManagerService.instance;
    }

    constructor() {
        this.loadAccessKeyFromStorage();
    }

    /**
     * Load access key from localStorage
     */
    private async loadAccessKeyFromStorage(): Promise<void> {
        try {
            if (typeof chrome !== "undefined" && chrome.storage) {
                const result = await chrome.storage.local.get(["zelfKeyJWT", "zelfKeyJWTExpiry"]);
                this.accessKey = result.zelfKeyJWT || null;
                this.accessKeyExpiry = result.zelfKeyJWTExpiry || null;
            }
        } catch (error) {
            console.error("Error loading access key from storage:", error);
        }
    }

    /**
     * Save access key to localStorage
     */
    private async saveAccessKeyToStorage(): Promise<void> {
        try {
            if (typeof chrome !== "undefined" && chrome.storage) {
                await chrome.storage.local.set({
                    zelfKeyJWT: this.accessKey,
                    zelfKeyJWTExpiry: this.accessKeyExpiry,
                });
            }
        } catch (error) {
            console.error("Error saving access key to storage:", error);
        }
    }

    /**
     * Get the current access key if valid
     */
    public getAccessKey(): string | null {
        if (this.accessKey && this.accessKeyExpiry && Date.now() < this.accessKeyExpiry) {
            return this.accessKey;
        }

        // Clear expired token
        this.accessKey = null;
        this.accessKeyExpiry = null;
        return null;
    }

    /**
     * Set a new access key
     */
    public setAccessKey(token: string, expiry?: number): void {
        this.accessKey = token;
        this.accessKeyExpiry = expiry || Date.now() + 24 * 60 * 60 * 1000; // Default 24 hours
        this.saveAccessKeyToStorage();
    }

    /**
     * Clear the access key
     */
    public clearAccessKey(): void {
        this.accessKey = null;
        this.accessKeyExpiry = null;
        this.saveAccessKeyToStorage();
    }

    /**
     * Check if user is authenticated
     */
    public isAuthenticated(): boolean {
        return !!this.getAccessKey();
    }

    /**
     * Initialize session and get access key
     */
    public async initializeSession(): Promise<boolean> {
        try {
            // Check if we already have a valid access key
            if (this.isAuthenticated()) {
                return true;
            }

            // Get wallet data from storage
            const walletData = await this.getWalletFromStorage();
            if (!walletData?.ethAddress) {
                console.error("No wallet found in storage");
                return false;
            }

            // Make API call to get new session
            const response = await this.makeApiCall("POST", "/api/sessions", {
                accessKey: walletData.accessKey,
                identifier: walletData.name,
            });

            if (response?.data?.token) {
                this.setAccessKey(response.data.token);
                return true;
            }

            return false;
        } catch (error) {
            console.error("Error initializing session:", error);
            return false;
        }
    }

    /**
     * Get wallet data from storage
     */
    private async getWalletFromStorage(): Promise<any> {
        try {
            if (typeof chrome !== "undefined" && chrome.storage) {
                const result = await chrome.storage.local.get(["wallet", "accessKey"]);
                return {
                    ...result.wallet,
                    accessKey: result.accessKey,
                };
            }
            return null;
        } catch (error) {
            console.error("Error getting wallet from storage:", error);
            return null;
        }
    }

    /**
     * Get passwords for a specific website
     */
    public async getPasswords(website: string): Promise<PasswordEntry[]> {
        try {
            // Ensure we have a valid session
            if (!(await this.initializeSession())) {
                console.error("Failed to initialize session");
                return [];
            }

            // Get all passwords
            const response = await this.makeApiCall("GET", "/api/zelf-key/list?category=password");

            if (!response?.data) {
                return [];
            }

            // Filter passwords for the specific website
            const targetDomain = website.replace(/^https?:\/\//, "").replace(/^www\./, "");

            const passwords: PasswordEntry[] = response.data
                .filter((password: any) => password.publicData?.type === "website_password")
                .filter((password: any) => {
                    if (!website) return true;

                    const passwordDomain = password.publicData?.website ? new URL(password.publicData.website).hostname : undefined;

                    return (
                        passwordDomain === targetDomain ||
                        password.publicData?.website?.includes(targetDomain) ||
                        password.publicData?.website === targetDomain
                    );
                });

            return passwords;
        } catch (error) {
            console.error("Error getting passwords:", error);
            return [];
        }
    }

    /**
     * Decrypt a password
     */
    public async decryptPassword(passwordId: string): Promise<DecryptedPasswordData | null> {
        try {
            // Ensure we have a valid session
            if (!(await this.initializeSession())) {
                console.error("Failed to initialize session");
                return null;
            }

            const response = await this.makeApiCall("POST", "/api/zelf-key/retrieve", {
                id: passwordId,
            });

            if (response?.data) {
                return response.data as DecryptedPasswordData;
            }

            return null;
        } catch (error) {
            console.error("Error decrypting password:", error);
            return null;
        }
    }

    /**
     * Make API call with authentication
     */
    private async makeApiCall(method: string, endpoint: string, data?: any): Promise<any> {
        const accessKey = this.getAccessKey();
        if (!accessKey) {
            throw new Error("No valid access key available");
        }

        const url = `${this.API_BASE_URL}${endpoint}`;
        const options: RequestInit = {
            method,
            headers: {
                Authorization: `Bearer ${accessKey}`,
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
            if (!(await this.initializeSession())) {
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
