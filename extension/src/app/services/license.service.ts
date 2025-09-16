import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { ChromeService } from "../chrome.service";
import { HttpWrapperService } from "../http-wrapper.service";

@Injectable({
    providedIn: "root",
})
export class LicenseService {
    private _licenseData: any = null;
    private _isLoading: boolean = false;
    private _loadingPromise: Promise<void> | null = null;

    constructor(
        private _httpWrapperService: HttpWrapperService,
        private _chromeService: ChromeService
    ) {}

    /**
     * Initialize license data during app startup
     */
    async initializeLicense(): Promise<void> {
        if (this._loadingPromise) {
            return this._loadingPromise;
        }

        // Check if license is already loaded in memory
        if (this._licenseData) {
            return Promise.resolve();
        }

        // Check if license exists in localStorage
        const storedLicense = await this.getLicenseFromStorage();

        if (storedLicense && this._isLicenseValid(storedLicense)) {
            this._licenseData = storedLicense;
            console.log("✅ License loaded from localStorage:", storedLicense);
            return Promise.resolve();
        } else if (storedLicense && !this._isLicenseValid(storedLicense)) {
            console.log("⚠️ Stored license is expired, refreshing from server...");
        }

        this._isLoading = true;
        this._loadingPromise = this._loadLicense();

        return this._loadingPromise;
    }

    private async _loadLicense(): Promise<void> {
        try {
            const response = await this._httpWrapperService.sendRequest("get", `${environment.keysApiUrl}/api/license/zelfkeys`);

            if (response?.data?.success && response?.data?.license) {
                // Save license to localStorage
                const licenseData = {
                    license: response.data.license,
                    timestamp: new Date().toISOString(),
                    source: "zelf-main-server",
                };

                await this._chromeService.setItem("zelfKeysLicense", licenseData);

                this._licenseData = licenseData;
                console.log("✅ License loaded during app initialization:", licenseData);
            }
        } catch (error) {
            console.warn("⚠️ Failed to load license during initialization (user might not be authenticated):", error);
            // Don't throw error - this is expected for unauthenticated users
        } finally {
            this._isLoading = false;
        }
    }

    /**
     * Get cached license data
     */
    getLicenseData(): any {
        return this._licenseData;
    }

    /**
     * Check if license is available
     */
    hasLicense(): boolean {
        return this._licenseData !== null;
    }

    /**
     * Get license from localStorage
     */
    async getLicenseFromStorage(): Promise<any> {
        try {
            const stored = await this._chromeService.getItem("zelfKeysLicense");
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error("Error getting license from storage:", error);
            return null;
        }
    }

    /**
     * Check if license is currently loading
     */
    isLoading(): boolean {
        return this._isLoading;
    }

    /**
     * Wait for license loading to complete
     */
    async waitForLicenseLoading(): Promise<void> {
        if (this._loadingPromise) {
            await this._loadingPromise;
        }
    }

    /**
     * Check if stored license is still valid (not expired)
     */
    private _isLicenseValid(licenseData: any): boolean {
        if (!licenseData || !licenseData.timestamp) {
            return false;
        }

        // Check if license is older than 24 hours
        const licenseTime = new Date(licenseData.timestamp).getTime();
        const currentTime = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        return currentTime - licenseTime < twentyFourHours;
    }

    /**
     * Force refresh license from server (bypasses cache)
     */
    async refreshLicense(): Promise<void> {
        // Clear cached data
        this._licenseData = null;
        this._loadingPromise = null;

        // Force reload from server
        this._isLoading = true;
        this._loadingPromise = this._loadLicense();

        await this._loadingPromise;
    }
}
