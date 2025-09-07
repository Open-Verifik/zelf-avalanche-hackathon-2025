import { Injectable } from "@angular/core";

import {
  AutofillMessage,
  AutofillResponse,
  DecryptedPasswordData,
  MessageSender,
  PasswordEntry,
  SendResponse,
} from "../types/autofill.types";
import { WalletService } from "../wallet.service";
import { PasswordDataService } from "./password-data.service";

@Injectable({
  providedIn: "root",
})
export class AutofillIntegrationService {
  private isListening = false;

  constructor(
    private walletService: WalletService,
    private passwordDataService: PasswordDataService
  ) {
    this.setupMessageListener();
  }

  private setupMessageListener(): void {
    if (this.isListening) return;

    // Listen for messages from content scripts
    if (typeof chrome !== "undefined" && chrome.runtime) {
      chrome.runtime.onMessage.addListener(
        (message: any, sender: MessageSender, sendResponse: SendResponse) => {
          this.handleMessage(message, sender, sendResponse);

          return true; // Keep message channel open for async response
        }
      );
    } else if (typeof browser !== "undefined" && browser.runtime) {
      browser.runtime.onMessage.addListener(
        (message: any, sender: MessageSender, sendResponse: SendResponse) => {
          this.handleMessage(message, sender, sendResponse);

          return true;
        }
      );
    }

    this.isListening = true;
  }

  private async handleMessage(
    message: any,
    sender: MessageSender,
    sendResponse: SendResponse
  ): Promise<void> {
    try {
      switch (message.type) {
        case "GET_PASSWORDS":
          await this.handleGetPasswords(message.payload, sendResponse);

          break;
        case "DECRYPT_PASSWORD":
          await this.handleDecryptPassword(message.payload, sendResponse);

          break;
        case "CREATE_PASSWORD":
          await this.handleCreatePassword(sendResponse);

          break;
        case "AUTHENTICATE":
          await this.handleAuthenticate(sendResponse);

          break;
        case "OPEN_BIOMETRICS_MODAL":
          await this.handleOpenBiometricsModal(message.payload, sendResponse);

          break;
        default:
          sendResponse({ success: false, error: "Unknown message type" });
      }
    } catch (error) {
      console.error("Error handling autofill message:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      sendResponse({ success: false, error: errorMessage });
    }
  }

  private async handleGetPasswords(
    payload: { website: string },
    sendResponse: SendResponse
  ): Promise<void> {
    try {
      console.log('Getting passwords for website:', payload.website);
      
      const rawResponse = await this.walletService.listStoredPasswords();
      console.log('Raw response from listStoredPasswords:', rawResponse);
      
      // Handle different response formats
      const data = rawResponse.data || rawResponse || [];
      console.log('Extracted data:', data);
      
      // Transform the raw password data to match PasswordEntry interface
      const passwords: PasswordEntry[] = data
        .filter((password: any) => {
          console.log('Checking password:', password.name, 'type:', password.publicData?.type);
          return password.publicData?.type === 'website_password';
        })
        .filter((password: any) => {
          // Filter by website if provided
          if (!payload.website) return true;
          
          const targetDomain = payload.website.replace(/^https?:\/\//, '').replace(/^www\./, '');
          const passwordDomain = password.publicData?.website ? new URL(password.publicData.website).hostname : undefined;
          
          console.log('Comparing domains - target:', targetDomain, 'password:', passwordDomain);
          
          return passwordDomain === targetDomain || 
                 password.publicData?.website?.includes(targetDomain) ||
                 password.publicData?.website === targetDomain;
        });

      console.log('Filtered passwords for website:', payload.website, passwords);

      sendResponse({ success: true, data: passwords });
    } catch (error) {
      console.error("Error fetching passwords:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch passwords";

      sendResponse({ success: false, error: errorMessage });
    }
  }

  private async handleDecryptPassword(
    payload: { passwordId: string },
    sendResponse: SendResponse
  ): Promise<void> {
    try {
      const { data } = await this.walletService.retrievePassword(payload) as { data: DecryptedPasswordData };
      
      // Transform the decrypted data to match DecryptedPasswordData interface
      const decryptedData: DecryptedPasswordData = data;

      console.log('Decrypted password data:', decryptedData);
      sendResponse({ success: true, data: decryptedData });
    } catch (error) {
      console.error("Error decrypting password:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to decrypt password";

      sendResponse({ success: false, error: errorMessage });
    }
  }

  private async handleCreatePassword(
    sendResponse: SendResponse
  ): Promise<void> {
    try {
      // Navigate to create password page
      // This would need to be implemented based on your routing
      sendResponse({ success: true });
    } catch (error) {
      console.error("Error creating password:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to create password";

      sendResponse({ success: false, error: errorMessage });
    }
  }

  private async handleAuthenticate(sendResponse: SendResponse): Promise<void> {
    try {
      // Check if user is authenticated
      const jwt = this.walletService.getZelfKeyJWT();

      const isAuthenticated = !!jwt;

      sendResponse({ success: isAuthenticated });
    } catch (error) {
      console.error("Error checking authentication:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to check authentication";

      sendResponse({ success: false, error: errorMessage });
    }
  }

  public async sendMessageToContentScript(
    message: AutofillMessage
  ): Promise<AutofillResponse> {
    return new Promise((resolve, reject) => {
      if (typeof chrome !== "undefined" && chrome.runtime) {
        chrome.runtime.sendMessage(message, (response: AutofillResponse) => {
          if (chrome.runtime.lastError)
            reject(new Error(chrome.runtime.lastError.message));
          else resolve(response);
        });
      } else if (typeof browser !== "undefined" && browser.runtime) {
        browser.runtime
          .sendMessage(message)
          .then((response: any) => resolve(response))
          .catch(reject);
      } else {
        reject(new Error("Extension runtime not available"));
      }
    });
  }

  private async handleOpenBiometricsModal(
    payload: { passwordId: string; fieldId?: string },
    sendResponse: SendResponse
  ): Promise<void> {
    try {
      // Store the password ID and field ID for the biometrics modal
      // This could trigger navigation to a biometrics modal page
      console.log('Opening biometrics modal for password:', payload.passwordId);
      
      // You could emit an event here to trigger the biometrics modal in the UI
      // or navigate to a specific route
      
      sendResponse({ success: true });
    } catch (error) {
      console.error("Error opening biometrics modal:", error);
      
      const errorMessage =
        error instanceof Error ? error.message : "Failed to open biometrics modal";
      
      sendResponse({ success: false, error: errorMessage });
    }
  }

  public async fillPasswordInContentScript(
    passwordId: string,
    fieldId: string
  ): Promise<void> {
    try {
      await this.sendMessageToContentScript({
        type: "FILL_PASSWORD",
        payload: { passwordId, fieldId },
      });
    } catch (error) {
      console.error("Error filling password in content script:", error);
    }
  }
}
