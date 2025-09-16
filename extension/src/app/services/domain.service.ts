import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { LicenseService } from "./license.service";

@Injectable({
    providedIn: "root",
})
export class DomainService {
    private _cachedDomain: string | null = null;
    private _defaultDomain = ".zelf";

    constructor(private _licenseService: LicenseService) {}

    /**
     * Get the current domain from license or fallback to default
     */
    async getCurrentDomain(): Promise<string> {
        // Check feature flag first
        if (!environment.enableDynamicDomain) {
            console.log("🔧 Dynamic domain disabled, using default:", this._defaultDomain);
            return this._defaultDomain;
        }

        // Return cached domain if available
        if (this._cachedDomain) {
            return this._cachedDomain;
        }

        try {
            // Try to get domain from license
            const licenseData = this._licenseService.getLicenseData();

            if (licenseData?.license?.licenseDomain) {
                const domain = licenseData.license.licenseDomain;
                this._cachedDomain = domain;
                console.log("✅ Domain loaded from license:", domain);
                return domain;
            }

            // Fallback: try to get from localStorage
            const storedLicense = await this._licenseService.getLicenseFromStorage();
            if (storedLicense?.license?.licenseDomain) {
                const domain = storedLicense.license.licenseDomain;
                this._cachedDomain = domain;
                console.log("✅ Domain loaded from localStorage:", domain);
                return domain;
            }

            // Final fallback to default
            console.log("⚠️ No license domain found, using default:", this._defaultDomain);
            return this._defaultDomain;
        } catch (error) {
            console.warn("⚠️ Error getting domain from license, using default:", error);
            return this._defaultDomain;
        }
    }

    /**
     * Get domain synchronously (returns cached or default)
     */
    getCurrentDomainSync(): string {
        // Check feature flag first
        if (!environment.enableDynamicDomain) {
            return this._defaultDomain;
        }

        return this._cachedDomain || this._defaultDomain;
    }

    /**
     * Check if domain is available from license
     */
    hasLicenseDomain(): boolean {
        // Check feature flag first
        if (!environment.enableDynamicDomain) {
            return false;
        }

        const licenseData = this._licenseService.getLicenseData();
        return !!licenseData?.license?.licenseDomain;
    }

    /**
     * Get the full domain with .zelf extension
     */
    async getFullDomain(): Promise<string> {
        const domain = await this.getCurrentDomain();
        return domain.includes(".zelf") ? domain : `${domain}.zelf`;
    }

    /**
     * Get the full domain synchronously
     */
    getFullDomainSync(): string {
        const domain = this.getCurrentDomainSync();
        return domain.includes(".zelf") ? domain : `${domain}.zelf`;
    }

    /**
     * Get domain without .zelf extension
     */
    async getBaseDomain(): Promise<string> {
        const domain = await this.getCurrentDomain();
        return domain.replace(".zelf", "");
    }

    /**
     * Get base domain synchronously
     */
    getBaseDomainSync(): string {
        const domain = this.getCurrentDomainSync();
        return domain.replace(".zelf", "");
    }

    /**
     * Clear cached domain (useful when license changes)
     */
    clearCache(): void {
        this._cachedDomain = null;
        console.log("🔄 Domain cache cleared");
    }

    /**
     * Set domain manually (for testing or override)
     */
    setDomain(domain: string): void {
        this._cachedDomain = domain;
        console.log("🔧 Domain manually set to:", domain);
    }

    /**
     * Get all available domain information
     */
    async getDomainInfo(): Promise<{
        current: string;
        full: string;
        base: string;
        fromLicense: boolean;
        hasLicense: boolean;
    }> {
        const current = await this.getCurrentDomain();
        const full = await this.getFullDomain();
        const base = await this.getBaseDomain();
        const fromLicense = this.hasLicenseDomain();
        const hasLicense = this._licenseService.hasLicense();

        return {
            current,
            full,
            base,
            fromLicense,
            hasLicense,
        };
    }
}
