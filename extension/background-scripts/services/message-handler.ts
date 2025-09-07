import { BrowserApiUtil } from './browser-api-util';
import { BackgroundCredentialManager } from './background-credential-manager';

export class MessageHandler {
  private credentialManager: BackgroundCredentialManager;

  constructor(private browserApi: BrowserApiUtil) {
    this.credentialManager = BackgroundCredentialManager.getInstance();
  }

  async handleAutofillMessage(message: any, sender: any, sendResponse: (response: any) => void) {
    try {
      switch (message.type) {
        case "TEST_MESSAGE":
          console.log("Background: Test message received");
          sendResponse({ success: true, message: "Service worker is active!" });
          break;
        case "GET_PASSWORDS":
          await this.handleGetPasswords(message.payload, sendResponse);
          break;
        case "DECRYPT_PASSWORD":
          await this.handleDecryptPassword(message.payload, sendResponse);
          break;
        case "CREATE_PASSWORD":
          await this.handleCreatePassword(sender, sendResponse);
          break;
        case "AUTHENTICATE":
          await this.handleAuthenticate(sendResponse);
          break;
        case "OPEN_BIOMETRICS_MODAL":
          await this.handleOpenBiometricsModal(message.payload, sender);
          sendResponse({ success: true });
          break;
        default:
          sendResponse({ success: false, error: "Unknown message type" });
      }
    } catch (error) {
      console.error("Error handling autofill message:", error);
      sendResponse({ success: false, error: (error as Error).message });
    }
  }

  private async handleGetPasswords(payload: any, sendResponse: (response: any) => void) {
    try {
      console.log("Background: Getting passwords for website:", payload.website);

      // Use credential manager directly (no fallback needed)
      console.log("Background: Using credential manager for password retrieval");
      const passwords = await this.credentialManager.getPasswords(payload.website);
      console.log("Background: Retrieved passwords from credential manager:", passwords);
      sendResponse({ success: true, data: passwords });
    } catch (error) {
      console.error("Error getting passwords:", error);
      sendResponse({ success: false, error: (error as Error).message });
    }
  }

  private async handleDecryptPassword(payload: any, sendResponse: (response: any) => void) {
    try {
      // Use credential manager directly (no fallback needed)
      console.log("Background: Using credential manager for password decryption");
      const decryptedData = await this.credentialManager.decryptPassword(payload.passwordId);
      console.log("Background: Decrypted password from credential manager:", decryptedData);
      sendResponse({ success: true, data: decryptedData });
    } catch (error) {
      console.error("Error decrypting password:", error);
      sendResponse({ success: false, error: (error as Error).message });
    }
  }

  private async handleCreatePassword(sender: any, sendResponse: (response: any) => void) {
    try {
      // Open the extension popup/sidebar to the create password page
      await this.openExtensionUI("create-password");
      sendResponse({ success: true });
    } catch (error) {
      sendResponse({ success: false, error: (error as Error).message });
    }
  }

  private async handleAuthenticate(sendResponse: (response: any) => void) {
    try {
      // Use credential manager directly (no fallback needed)
      console.log("Background: Using credential manager for authentication check");
      const isAuthenticated = this.credentialManager.isAuthenticated();
      console.log("Background: Authentication status from credential manager:", isAuthenticated);
      sendResponse({ success: isAuthenticated });
    } catch (error) {
      sendResponse({ success: false, error: (error as Error).message });
    }
  }

  private async handleOpenBiometricsModal(payload: any, sender: any) {
    try {
      // Open the extension popup/sidebar to the biometrics modal
      await this.openExtensionUI("biometrics", payload);
    } catch (error) {
      console.error("Error opening biometrics modal:", error);
    }
  }


  private async openExtensionUI(page: string, data: any = null) {
    try {
      // Store any data needed for the UI
      if (data && this.browserApi.has("storage")) {
        await (this.browserApi.storage as any).local.set({
          autofillData: data,
          autofillTimestamp: Date.now(),
        });
      }

      // Open the extension popup/sidebar - only use if/elseif for fundamentally different APIs
      if (this.browserApi.sidebarAction) {
        // Firefox
        (this.browserApi.sidebarAction as any).open();
      } else if (this.browserApi.sidePanel) {
        // Chrome
        const currentWindow = await (this.browserApi.windows as any).getCurrent();
        (this.browserApi.sidePanel as any).open({ windowId: currentWindow.id });
      } else {
        // Fallback to opening in new tab
        const runtime = this.browserApi.runtime;
        if (runtime) {
          const url = (runtime as any).getURL(`index.html#/${page}`);
          const tabs = this.browserApi.tabs;
          if (tabs) {
            (tabs as any).create({ url });
          }
        }
      }
    } catch (error) {
      console.error("Error opening extension UI:", error);
      // Fallback to opening in new tab
      const runtime = this.browserApi.runtime;

      if (!runtime) return;

      const url = (runtime as any).getURL(`index.html#/${page}`);
      const tabs = this.browserApi.tabs;

      if (!tabs) return;

      (tabs as any).create({ url });
    }
  }
}
