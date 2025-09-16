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

        this._isLoading = true;
        this._loadingPromise = this._loadLicense();

        return this._loadingPromise;
    }

    private async _loadLicense(): Promise<void> {
        try {
            const response = await this._httpWrapperService.sendRequest("get", `${environment.keysApiUrl}/api/license/zelfkeys`);

            if (response?.success && response?.data?.license) {
                // Save license to localStorage
                const licenseData = {
                    license: response.data.license,
                    rawLicense: response.data.rawLicense,
                    rawZelfAccount: response.data.rawZelfAccount,
                    timestamp: new Date().toISOString(),
                    source: "zelf-main-server",
                };

                await this._chromeService.setItem("zelfKeysLicense", JSON.stringify(licenseData));
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
}
