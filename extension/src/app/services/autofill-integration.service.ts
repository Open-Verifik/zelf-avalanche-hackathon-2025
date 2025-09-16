import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { UrlInfo } from "@content/autofill/types/autofill.types";
import { AutofillMessage, AutofillResponse, MessageSender, SendResponse } from "@shared/types/autofill.types";
import { AutofillDataService, AutofillUrlInfo } from "./autofill-data.service";
import { PopoutCommunicationService } from "./popout-communication.service";

@Injectable({
    providedIn: "root",
})
export class AutofillIntegrationService {
    private isListening = false;
    private pendingFillData = new Map<number, any>();

    constructor(
        private _autofillDataService: AutofillDataService,
        private _popoutCommunicationService: PopoutCommunicationService,
        private _router: Router
    ) {
        this.setupMessageListener();
    }

    private setupMessageListener(): void {
        if (this.isListening) return;

        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message: any, sender: MessageSender, sendResponse: SendResponse) => {
                this.handleMessage(message, sender, sendResponse);

                return true;
            });

            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.type === "NAVIGATE_TO_ROUTE") {
                    const route = message.payload?.route;

                    if (route) this._router.navigate([`/${route}`]);

                    sendResponse({ success: true });
                } else if (message.type === "PASSWORD_DECRYPTOR_DATA") {
                    this._popoutCommunicationService.setDecryptionData(message.payload);

                    this._router.navigateByUrl("/passwords/decrypt", { replaceUrl: true });

                    sendResponse({ success: true });
                } else if (message.type === "CREATE_PASSWORD") {
                    this._router.navigate(["/passwords/new"], {
                        queryParams: { urlInfo: JSON.stringify(message.payload.urlInfo) },
                    });

                    sendResponse({ success: true });
                }

                return true;
            });
        }

        this.isListening = true;
    }

    private async handleMessage(message: any, sender: MessageSender, sendResponse: SendResponse): Promise<void> {
        try {
            switch (message.type) {
                case "PING":
                    sendResponse({ success: true });

                    break;
                case "CREATE_PASSWORD":
                    this.handleCreatePassword(message.payload, sendResponse);

                    break;
                case "AUTOFILL_CREATE_PASSWORD_DATA":
                    await this.handleAutofillCreatePasswordData(message.payload, sendResponse);

                    break;
                case "PASSWORD_DECRYPTOR_DATA":
                    await this.handlePasswordDecryptorData(message.payload, sendResponse);

                    break;
                case "FORM_READY":
                    await this.handleFormReady(message.payload, sendResponse);

                    break;
                default:
                    sendResponse({ success: false, error: "Unknown message type" });
            }
        } catch (error) {
            console.error("Error handling autofill message:", error);

            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

            sendResponse({ success: false, error: errorMessage });
        }
    }

    private async handleAutofillCreatePasswordData(payload: { urlInfo: any }, sendResponse: SendResponse): Promise<void> {
        try {
            // Forward the URL info to the AutofillDataService
            this._autofillDataService.setUrlInfo(payload.urlInfo);

            sendResponse({ success: true });
        } catch (error) {
            console.error("Error handling autofill create password data:", error);

            const errorMessage = error instanceof Error ? error.message : "Failed to handle autofill data";

            sendResponse({ success: false, error: errorMessage });
        }
    }

    private async handlePasswordDecryptorData(
        payload: { passwordId: string; publicData: any; fieldId?: string },
        sendResponse: SendResponse
    ): Promise<void> {
        try {
            // Set the decryption data in the popout communication service
            this._popoutCommunicationService.setDecryptionData({
                passwordId: payload.passwordId,
                publicData: payload.publicData,
                fieldId: payload.fieldId,
            });

            sendResponse({ success: true });
        } catch (error) {
            console.error("Error handling password decryptor data:", error);

            const errorMessage = error instanceof Error ? error.message : "Failed to handle password decryptor data";

            sendResponse({ success: false, error: errorMessage });
        }
    }

    public async sendMessageToContentScript(message: AutofillMessage): Promise<AutofillResponse> {
        return new Promise((resolve, reject) => {
            if (typeof chrome !== "undefined" && chrome.runtime) {
                chrome.runtime.sendMessage(message, (response: AutofillResponse) => {
                    if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
                    else resolve(response);
                });
            } else {
                reject(new Error("Chrome extension runtime not available"));
            }
        });
    }

    public async fillPasswordInContentScript(passwordId: string, fieldId: string): Promise<void> {
        try {
            await this.sendMessageToContentScript({
                type: "FILL_PASSWORD",
                payload: { passwordId, fieldId },
            });
        } catch (error) {
            console.error("Error filling password in content script:", error);
        }
    }

    public async waitForFormAndFill(tabId: number, fillData: any): Promise<void> {
        try {
            // Store the fill data for when the form is ready
            this.pendingFillData.set(tabId, fillData);

            // Send WAIT_FOR_FORM_READY message to the content script
            await this.sendMessageToContentScript({
                type: "WAIT_FOR_FORM_READY",
                payload: { tabId },
            });
        } catch (error) {
            console.error("Error waiting for form and filling:", error);
        }
    }

    private async handleFormReady(payload: { tabId: number }, sendResponse: SendResponse): Promise<void> {
        try {
            const tabId = payload.tabId;
            const fillData = this.pendingFillData.get(tabId);

            if (fillData) {
                // Send the actual fill data now that the form is ready
                await this.sendMessageToContentScript({
                    type: "FILL_PASSWORD",
                    payload: fillData,
                });

                // Clean up the pending data
                this.pendingFillData.delete(tabId);
                console.log("Form ready, sent fill data for tab:", tabId);
            }

            sendResponse({ success: true });
        } catch (error) {
            console.error("Error handling form ready:", error);
            sendResponse({ success: false, error: (error as Error).message });
        }
    }

    private handleCreatePassword(payload: { urlInfo: UrlInfo }, sendResponse: SendResponse): void {
        try {
            this._autofillDataService.setUrlInfo(payload.urlInfo as AutofillUrlInfo);
        } catch (error) {
            console.error("Error handling create password:", error);

            const errorMessage = error instanceof Error ? error.message : "Failed to handle create password";

            sendResponse({ success: false, error: errorMessage });
        }
    }
}
