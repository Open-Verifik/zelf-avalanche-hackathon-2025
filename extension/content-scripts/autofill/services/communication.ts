import { AutofillMessage, AutofillResponse, PasswordEntry, DecryptedPasswordData } from '@shared/types/autofill.types';

// Chrome extension API declaration
declare const chrome: any;

export class CommunicationService {
  private static instance: CommunicationService;

  public static getInstance(): CommunicationService {
    if (!CommunicationService.instance) {
      CommunicationService.instance = new CommunicationService();
    }
    return CommunicationService.instance;
  }

  public async getPasswords(website: string): Promise<PasswordEntry[]> {
    try {
      const response: AutofillResponse = await this.sendMessage({
        type: 'GET_PASSWORDS',
        payload: { website }
      });

      if (response.success && response.data) {
        return response.data as PasswordEntry[];
      }
      return [];
    } catch (error) {
      console.error('Error fetching passwords:', error);
      return [];
    }
  }

  public async decryptPassword(passwordId: string): Promise<DecryptedPasswordData | null> {
    try {
      const response: AutofillResponse = await this.sendMessage({
        type: 'DECRYPT_PASSWORD',
        payload: { passwordId }
      });

      if (response.success && response.data) {
        return response.data as DecryptedPasswordData;
      }
      return null;
    } catch (error) {
      console.error('Error decrypting password:', error);
      return null;
    }
  }

  public async createPassword(): Promise<void> {
    try {
      await this.sendMessage({
        type: 'CREATE_PASSWORD',
        payload: {}
      });
    } catch (error) {
      console.error('Error opening create password:', error);
    }
  }

  public async authenticate(): Promise<boolean> {
    try {
      const response: AutofillResponse = await this.sendMessage({
        type: 'AUTHENTICATE',
        payload: {}
      });

      return response.success;
    } catch (error) {
      console.error('Error authenticating:', error);
      return false;
    }
  }

  private sendMessage(message: AutofillMessage): Promise<AutofillResponse> {
    return new Promise((resolve, reject) => {
      console.log('Sending message to background script:', message);
      
      // Check if we're in a Chrome extension context
      if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.sendMessage(message, (response: any) => {
          console.log('Received response from background script:', response);
          if (chrome.runtime.lastError) {
            console.error('Chrome runtime error:', chrome.runtime.lastError);
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(response);
          }
        });
      } else {
        reject(new Error('Chrome extension runtime not available'));
      }
    });
  }

  public setupMessageListener(): void {
    // Listen for messages from the background script
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.onMessage.addListener((message: any, sender: any, sendResponse: any) => {
        this.handleMessage(message, sendResponse);
        return true; // Keep message channel open for async response
      });
    }
  }

  private handleMessage(message: any, sendResponse: (response: any) => void): void {
    // Handle any incoming messages from background script
    console.log('Content script received message:', message);
    sendResponse({ success: true });
  }
}
