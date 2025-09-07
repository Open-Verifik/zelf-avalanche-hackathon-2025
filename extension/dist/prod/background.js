/// <reference types="webextension-polyfill"/>
import { BrowserApiUtil } from './services/browser-api-util';
import { MessageHandler } from './services/message-handler';
import { ExtensionLifecycle } from './services/extension-lifecycle';
// Create the browser API utility instance
const browserApi = new BrowserApiUtil();
// Initialize the extension lifecycle
const extensionLifecycle = new ExtensionLifecycle(browserApi);
extensionLifecycle.initialize();
// Initialize the message handler
const messageHandler = new MessageHandler(browserApi);
// Handle messages from content scripts - much simpler now!
if (browserApi.has("runtime")) {
    browserApi.addMessageListener((message, sender, sendResponse) => {
        console.log("Background: Received message:", message);
        console.log("Background: Sender:", sender);
        messageHandler.handleAutofillMessage(message, sender, sendResponse);
        return true; // Keep message channel open for async response
    });
}
// Test comment
//# sourceMappingURL=background.js.map