import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundSyncService {
  private isListening = false;

  constructor() {
    this.setupMessageListener();
  }

  private setupMessageListener(): void {
    if (this.isListening) return;

    // Listen for messages from background script
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      chrome.runtime.onMessage.addListener((message: any, sender: any, sendResponse: any) => {
        this.handleMessage(message, sender, sendResponse);
        return true; // Keep message channel open for async response
      });
    }

    this.isListening = true;
  }

  private handleMessage(message: any, sender: any, sendResponse: any): void {
    // Handle any incoming messages from background script
    console.log('Angular: Received message from background:', message);
    sendResponse({ success: true });
  }

  /**
   * Sync passwords with background script
   */
  async syncPasswords(passwords: any[]): Promise<void> {
    try {
      const message = {
        type: 'SYNC_PASSWORDS',
        payload: { passwords }
      };

      if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.sendMessage(message, (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error syncing passwords:', chrome.runtime.lastError);
          } else {
            console.log('Passwords synced with background script');
          }
        });
      }
    } catch (error) {
      console.error('Error syncing passwords with background:', error);
    }
  }

  /**
   * Send test message to background script
   */
  async sendTestMessage(): Promise<void> {
    try {
      const message = {
        type: 'TEST_MESSAGE',
        payload: {}
      };

      if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.sendMessage(message, (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error sending test message:', chrome.runtime.lastError);
          } else {
            console.log('Test message response:', response);
          }
        });
      }
    } catch (error) {
      console.error('Error sending test message to background:', error);
    }
  }
}
