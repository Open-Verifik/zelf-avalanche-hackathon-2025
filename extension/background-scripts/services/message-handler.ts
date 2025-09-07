import { BrowserApiUtil } from './browser-api-util';

export class MessageHandler {
  constructor(private browserApi: BrowserApiUtil) {}

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

      // Get stored passwords from the Angular app
      const response = await this.forwardToAngularApp({
        type: "GET_PASSWORDS",
        payload: payload,
      });

      console.log("Background: Received response from Angular app:", response);

      // Filter passwords for the specific website
      const websitePasswords = response.filter(
        (password: any) =>
          password.website === payload.website ||
          password.url === payload.website ||
          password.domain === payload.website
      );

      console.log("Background: Filtered passwords:", websitePasswords);
      sendResponse({ success: true, data: websitePasswords });
    } catch (error) {
      console.error("Error getting passwords:", error);
      sendResponse({ success: false, error: (error as Error).message });
    }
  }

  private async handleDecryptPassword(payload: any, sendResponse: (response: any) => void) {
    try {
      // Decrypt password using the Angular app
      const response = await this.forwardToAngularApp({
        type: "DECRYPT_PASSWORD",
        payload: payload,
      });

      sendResponse({ success: true, data: response });
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
      // Check if user is authenticated in the extension
      if (this.browserApi.has("storage")) {
        const authData = await (this.browserApi.storage as any).local.get([
          "zelfKeyJWT",
          "isAuthenticated",
        ]);
        const isAuthenticated = authData.isAuthenticated && authData.zelfKeyJWT;
        sendResponse({ success: isAuthenticated });
      } else {
        sendResponse({ success: false, error: "No storage API available" });
      }
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

  private async forwardToAngularApp(message: any) {
    try {
      console.log("Background: Forwarding message to Angular app:", message);

      // Method 1: Try direct runtime messaging (works without tabs)
      try {
        const response = await new Promise((resolve, reject) => {
          // Much simpler - browserApi handles the Chrome/Firefox difference automatically
          this.browserApi.sendMessage(message, (response: any) => {
            if ((this.browserApi.runtime as any)?.lastError) {
              reject(new Error((this.browserApi.runtime as any).lastError.message));
            } else {
              resolve(response);
            }
          });
        });

        console.log(
          "Background: Received response from Angular app via runtime:",
          response
        );
        return (response as any)?.data || [];
      } catch (runtimeError) {
        console.log(
          "Runtime messaging failed, trying tab messaging:",
          (runtimeError as Error).message
        );

        // Method 2: Fallback to tab messaging if runtime fails
        if (this.browserApi.has("tabs")) {
          const tabs = await (this.browserApi.tabs as any).query({
            url: (this.browserApi.runtime as any).getURL("index.html"),
          });

          console.log("Background: Found extension tabs:", tabs.length);

          if (tabs.length === 0) {
            console.log(
              "Background: No extension tabs found, returning empty array"
            );
            return [];
          }

          const response = await (this.browserApi.tabs as any).sendMessage(tabs[0].id, message);
          console.log(
            "Background: Received response from Angular app via tab:",
            response
          );

          return response?.data || [];
        } else {
          console.log("Background: No tab API available");
          return [];
        }
      }
    } catch (error) {
      console.error("Error communicating with Angular app:", error);
      return [];
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
