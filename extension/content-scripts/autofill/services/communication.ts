import { AutofillMessage, AutofillResponse, PasswordEntry, DecryptedPasswordData } from '../types/autofill.types';

// Browser extension API declarations
declare const chrome: any;
declare const browser: any;

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
      
      // Check if we're in a browser extension context
      if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.sendMessage(message, (response) => {
          console.log('Received response from background script:', response);
          if (chrome.runtime.lastError) {
            console.error('Chrome runtime error:', chrome.runtime.lastError);
            reject(new Error(chrome.runtime.lastError.message));
          } else {
            resolve(response);
          }
        });
      } else if (typeof browser !== 'undefined' && browser.runtime) {
        browser.runtime.sendMessage(message).then((response) => {
          console.log('Received response from background script:', response);
          resolve(response as AutofillResponse);
        }).catch(reject);
      } else {
        reject(new Error('Extension runtime not available'));
      }
    });
  }

  public setupMessageListener(): void {
    // Listen for messages from the background script
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        this.handleMessage(message, sendResponse);
        return true; // Keep message channel open for async response
      });
    } else if (typeof browser !== 'undefined' && browser.runtime) {
      browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
        this.handleMessage(message, sendResponse);
        return true;
      });
    }
  }

  private handleMessage(message: any, sendResponse: (response: any) => void): void {
    // Handle any incoming messages from background script
    console.log('Content script received message:', message);
    sendResponse({ success: true });
  }
}
