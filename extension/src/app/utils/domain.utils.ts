import { DomainService } from "../services/domain.service";

/**
 * Domain utility functions for easy access throughout the app
 * These functions provide a simple interface to get domain information
 */

let _domainService: DomainService | null = null;

let _defaultDomain = ".zelf";

/**
 * Initialize the domain service (call this in app initialization)
 */
export function initializeDomainService(domainService: DomainService): void {
    _domainService = domainService;
}

/**
 * Get the current domain from license or fallback to default
 */
export async function getCurrentDomain(): Promise<string> {
    if (!_domainService) {
        console.warn("⚠️ DomainService not initialized, using default domain");
        return _defaultDomain;
    }
    return await _domainService.getCurrentDomain();
}

/**
 * Get the current domain synchronously
 */
export function getCurrentDomainSync(): string {
    if (!_domainService) {
        console.warn("⚠️ DomainService not initialized, using default domain");
        return _defaultDomain;
    }
    return _domainService.getCurrentDomainSync();
}

/**
 * Get the full domain with .zelf extension
 */
export async function getFullDomain(): Promise<string> {
    if (!_domainService) {
        return _defaultDomain;
    }
    return await _domainService.getFullDomain();
}

/**
 * Get the full domain synchronously
 */
export function getFullDomainSync(): string {
    if (!_domainService) {
        return _defaultDomain;
    }
    return _domainService.getFullDomainSync();
}

/**
 * Get domain without .zelf extension
 */
export async function getBaseDomain(): Promise<string> {
    if (!_domainService) {
        return "";
    }
    return await _domainService.getBaseDomain();
}

/**
 * Get base domain synchronously
 */
export function getBaseDomainSync(): string {
    if (!_domainService) {
        return "";
    }
    return _domainService.getBaseDomainSync();
}

/**
 * Check if domain is available from license
 */
export function hasLicenseDomain(): boolean {
    if (!_domainService) {
        return false;
    }
    return _domainService.hasLicenseDomain();
}

/**
 * Get all domain information
 */
export async function getDomainInfo(): Promise<{
    current: string;
    full: string;
    base: string;
    fromLicense: boolean;
    hasLicense: boolean;
}> {
    if (!_domainService) {
        return {
            current: _defaultDomain,
            full: _defaultDomain,
            base: "",
            fromLicense: false,
            hasLicense: false,
        };
    }
    return await _domainService.getDomainInfo();
}

/**
 * Clear domain cache
 */
export function clearDomainCache(): void {
    if (_domainService) {
        _domainService.clearCache();
    }
}
