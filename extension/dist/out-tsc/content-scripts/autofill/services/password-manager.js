import { CommunicationService } from './communication';
export class PasswordManager {
    constructor() {
        this.cachedPasswords = new Map();
        this.communicationService = CommunicationService.getInstance();
    }
    async getPasswordsForWebsite(website) {
        // Check cache first
        if (this.cachedPasswords.has(website)) {
            return this.cachedPasswords.get(website);
        }
        try {
            const passwords = await this.communicationService.getPasswords(website);
            // Cache the results
            this.cachedPasswords.set(website, passwords);
            return passwords;
        }
        catch (error) {
            console.error('Error fetching passwords for website:', website, error);
            return [];
        }
    }
    async decryptPassword(passwordId) {
        try {
            const result = await this.communicationService.decryptPassword(passwordId);
            if (result && result.metadata) {
                return {
                    username: result.metadata.username,
                    password: result.metadata.password
                };
            }
            return null;
        }
        catch (error) {
            console.error('Error decrypting password:', error);
            return null;
        }
    }
    async createNewPassword(urlInfo) {
        try {
            await this.communicationService.createPassword(urlInfo);
        }
        catch (error) {
            console.error('Error creating new password:', error);
        }
    }
    async authenticate() {
        try {
            return await this.communicationService.authenticate();
        }
        catch (error) {
            console.error('Error authenticating:', error);
            return false;
        }
    }
    clearCache() {
        this.cachedPasswords.clear();
    }
    clearCacheForWebsite(website) {
        this.cachedPasswords.delete(website);
    }
    getCachedPasswords(website) {
        return this.cachedPasswords.get(website) || null;
    }
}
//# sourceMappingURL=password-manager.js.map