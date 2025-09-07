import { Injectable } from "@angular/core";

import {
  AutofillMessage,
  AutofillResponse,
  MessageSender,
  SendResponse,
} from "@shared/types/autofill.types";
import { AutofillDataService } from "./autofill-data.service";

@Injectable({
  providedIn: "root",
})
export class AutofillIntegrationService {
  private isListening = false;

  constructor(
    private autofillDataService: AutofillDataService
  ) {
    this.setupMessageListener();
  }

  private setupMessageListener(): void {
    if (this.isListening) return;

    // Listen for messages from background script and content scripts
    if (typeof chrome !== "undefined" && chrome.runtime) {
      chrome.runtime.onMessage.addListener(
        (message: any, sender: MessageSender, sendResponse: SendResponse) => {
          this.handleMessage(message, sender, sendResponse);

          return true; // Keep message channel open for async response
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
        case "PING":
          // Respond to ping to indicate the tab is ready
          sendResponse({ success: true });
          break;
        case "AUTOFILL_CREATE_PASSWORD_DATA":
          await this.handleAutofillCreatePasswordData(message.payload, sendResponse);
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

  private async handleAutofillCreatePasswordData(
    payload: { urlInfo: any },
    sendResponse: SendResponse
  ): Promise<void> {
    try {
      // Forward the URL info to the AutofillDataService
      this.autofillDataService.setUrlInfo(payload.urlInfo);
      
      sendResponse({ success: true });
    } catch (error) {
      console.error("Error handling autofill create password data:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to handle autofill data";

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
      } else {
        reject(new Error("Chrome extension runtime not available"));
      }
    });
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

  public testService(): void {
    // Test method for debugging
  }
}
