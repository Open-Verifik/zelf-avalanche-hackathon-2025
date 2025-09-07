/// <reference types="webextension-polyfill"/>
<<<<<<< HEAD
import { BrowserApiUtil } from "./services/browser-api-util";
import { MessageHandler } from "./services/message-handler";
import { ExtensionLifecycle } from "./services/extension-lifecycle";
=======
import { BrowserApiUtil } from './services/browser-api-util';
import { MessageHandler } from './services/message-handler';
import { ExtensionLifecycle } from './services/extension-lifecycle';
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
// Create the browser API utility instance
const browserApi = new BrowserApiUtil();
// Initialize the extension lifecycle
const extensionLifecycle = new ExtensionLifecycle(browserApi);
extensionLifecycle.initialize();
// Initialize the message handler
const messageHandler = new MessageHandler(browserApi);
<<<<<<< HEAD
if (!browserApi.has("runtime"))
    process.exit(1);
browserApi.addMessageListener((message, sender, sendResponse) => {
    console.log("Background: Received message:", message);
    console.log("Background: Sender:", sender);
    messageHandler.handleAutofillMessage(message, sender, sendResponse);
    return true;
});
=======
// Handle messages from content scripts - much simpler now!
if (browserApi.has("runtime")) {
    browserApi.addMessageListener((message, sender, sendResponse) => {
        console.log("Background: Received message:", message);
        console.log("Background: Sender:", sender);
        messageHandler.handleAutofillMessage(message, sender, sendResponse);
        return true; // Keep message channel open for async response
    });
}
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
//# sourceMappingURL=background.js.map