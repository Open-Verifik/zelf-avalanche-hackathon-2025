import { PasswordEntry } from '../types/autofill.types';
import { CommunicationService } from './communication';

export class PasswordManager {
  private communicationService: CommunicationService;
  private cachedPasswords: Map<string, PasswordEntry[]> = new Map();

  constructor() {
    this.communicationService = CommunicationService.getInstance();
  }

  public async getPasswordsForWebsite(website: string): Promise<PasswordEntry[]> {
    // Check cache first
    if (this.cachedPasswords.has(website)) {
      return this.cachedPasswords.get(website)!;
    }

    try {
      const passwords = await this.communicationService.getPasswords(website);
      
      // Cache the results
      this.cachedPasswords.set(website, passwords);
      
      return passwords;
    } catch (error) {
      console.error('Error fetching passwords for website:', website, error);
      return [];
    }
  }

  public async decryptPassword(passwordId: string): Promise<{ username: string; password: string } | null> {
    try {
      const result = await this.communicationService.decryptPassword(passwordId);
      if (result && result.metadata) {
        return {
          username: result.metadata.username,
          password: result.metadata.password
        };
      }
      return null;
    } catch (error) {
      console.error('Error decrypting password:', error);
      return null;
    }
  }

  public async createNewPassword(): Promise<void> {
    try {
      await this.communicationService.createPassword();
    } catch (error) {
      console.error('Error creating new password:', error);
    }
  }

  public async authenticate(): Promise<boolean> {
    try {
      return await this.communicationService.authenticate();
    } catch (error) {
      console.error('Error authenticating:', error);
      return false;
    }
  }

  public clearCache(): void {
    this.cachedPasswords.clear();
  }

  public clearCacheForWebsite(website: string): void {
    this.cachedPasswords.delete(website);
  }

  public getCachedPasswords(website: string): PasswordEntry[] | null {
    return this.cachedPasswords.get(website) || null;
  }
}
