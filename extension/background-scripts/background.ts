/// <reference types="webextension-polyfill"/>

import { BrowserApiUtil } from "./services/browser-api-util";
import { MessageHandler } from "./services/message-handler";
import { ExtensionLifecycle } from "./services/extension-lifecycle";

// Create the browser API utility instance
const browserApi = new BrowserApiUtil();

// Initialize the extension lifecycle
const extensionLifecycle = new ExtensionLifecycle(browserApi);

extensionLifecycle.initialize();

// Initialize the message handler
const messageHandler = new MessageHandler(browserApi);

if (!browserApi.has("runtime")) {
    console.error("[ZELF_KEYS] Runtime API not available - extension cannot function");

    throw new Error("Runtime API not available");
}

browserApi.addMessageListener((message, sender, sendResponse) => {
    messageHandler.handleAutofillMessage(message, sender, sendResponse);
    return true;
});
