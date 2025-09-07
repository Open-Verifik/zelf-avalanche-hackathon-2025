<<<<<<< HEAD
import { FormDetector } from "./services/form-detector";
import { UIOverlay } from "./services/ui-overlay";
import { PasswordManager } from "./services/password-manager";
import { AutofillEngine } from "./services/autofill-engine";
import { CommunicationService } from "./services/communication";
class AutofillContentScript {
    constructor() {
        this.isInitialized = false;
        this.serviceWorkerReady = false;
=======
import { FormDetector } from './services/form-detector';
import { UIOverlay } from './services/ui-overlay';
import { PasswordManager } from './services/password-manager';
import { AutofillEngine } from './services/autofill-engine';
import { CommunicationService } from './services/communication';
class AutofillContentScript {
    constructor() {
        this.isInitialized = false;
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        this.resizeTimeout = null;
        this.scrollTimeout = null;
        this.formDetector = new FormDetector();
        this.uiOverlay = new UIOverlay();
        this.passwordManager = new PasswordManager();
        this.autofillEngine = new AutofillEngine();
        this.communicationService = CommunicationService.getInstance();
    }
    async initialize() {
        if (this.isInitialized)
            return;
        try {
            // Set up communication
            this.communicationService.setupMessageListener();
<<<<<<< HEAD
            // Listen for service worker ready message
            this.communicationService.onServiceWorkerReady(() => {
                this.serviceWorkerReady = true;
                this.startFormDetection();
            });
            // Listen for detected forms FIRST
            window.addEventListener("zelfkey:formsDetected", this.handleFormsDetected.bind(this));
            // Handle window resize and scroll events to reposition icons
            window.addEventListener("resize", this.handleWindowResize.bind(this));
            window.addEventListener("scroll", this.handleWindowScroll.bind(this));
            // Handle page visibility changes
            document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
            this.isInitialized = true;
            // Fallback: If service worker doesn't respond within 3 seconds, start form detection anyway
            setTimeout(() => {
                if (!this.serviceWorkerReady) {
                    this.serviceWorkerReady = true;
                    this.startFormDetection();
                }
            }, 3000);
        }
        catch (error) {
            console.error("Error initializing ZelfKey Autofill:", error);
        }
    }
    startFormDetection() {
        if (this.serviceWorkerReady) {
            // Start form detection when service worker is ready
            this.formDetector.startDetection();
=======
            // Listen for detected forms FIRST
            window.addEventListener('zelfkey:formsDetected', this.handleFormsDetected.bind(this));
            // Start form detection AFTER listener is set up
            this.formDetector.startDetection();
            // Handle window resize and scroll events to reposition icons
            window.addEventListener('resize', this.handleWindowResize.bind(this));
            window.addEventListener('scroll', this.handleWindowScroll.bind(this));
            // Handle page visibility changes
            document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
            this.isInitialized = true;
            console.log('ZelfKey Autofill initialized');
        }
        catch (error) {
            console.error('Error initializing ZelfKey Autofill:', error);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        }
    }
    handleFormsDetected(event) {
        const forms = event.detail.forms;
<<<<<<< HEAD
        forms.forEach((form) => {
=======
        forms.forEach(form => {
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            this.processForm(form);
        });
    }
    processForm(form) {
        // Validate the form
        const validation = this.autofillEngine.validateForm(form);
        if (!validation.isValid) {
<<<<<<< HEAD
            console.log("Invalid form detected:", validation.errors);
            return;
        }
        // Show icons for relevant fields
        form.fields.forEach((field) => {
=======
            console.log('Invalid form detected:', validation.errors);
            return;
        }
        // Show icons for relevant fields
        form.fields.forEach(field => {
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            if (this.shouldShowIconForField(field)) {
                this.uiOverlay.showIconForField(field);
            }
        });
    }
    shouldShowIconForField(field) {
        // Show icon for password, username, and email fields
<<<<<<< HEAD
        return ["password", "username", "email"].includes(field.type);
=======
        return ['password', 'username', 'email'].includes(field.type);
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
    }
    handleWindowResize() {
        // Debounce the resize handler
        if (this.resizeTimeout)
            clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.uiOverlay.updateIconPositions();
        }, 100);
    }
    handleWindowScroll() {
        // Debounce the scroll handler
        if (this.scrollTimeout)
            clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.uiOverlay.updateIconPositions();
        }, 50);
    }
    handleVisibilityChange() {
        if (document.hidden) {
            // Page is hidden, hide all icons
            this.uiOverlay.hideAllIcons();
        }
        else {
            // Page is visible, rescan for forms
            setTimeout(() => {
                const forms = this.formDetector.getCurrentForms();
<<<<<<< HEAD
                forms.forEach((form) => this.processForm(form));
=======
                forms.forEach(form => this.processForm(form));
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
            }, 100);
        }
    }
    destroy() {
        this.formDetector.stopDetection();
        this.uiOverlay.hideAllIcons();
        this.passwordManager.clearCache();
<<<<<<< HEAD
        window.removeEventListener("zelfkey:formsDetected", this.handleFormsDetected.bind(this));
        window.removeEventListener("resize", this.handleWindowResize.bind(this));
        window.removeEventListener("scroll", this.handleWindowScroll.bind(this));
        document.removeEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
=======
        window.removeEventListener('zelfkey:formsDetected', this.handleFormsDetected.bind(this));
        window.removeEventListener('resize', this.handleWindowResize.bind(this));
        window.removeEventListener('scroll', this.handleWindowScroll.bind(this));
        document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        this.isInitialized = false;
    }
}
// Initialize the autofill when the script loads
const autofill = new AutofillContentScript();
// Wait for DOM to be ready
<<<<<<< HEAD
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
=======
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
        autofill.initialize();
    });
}
else {
    autofill.initialize();
}
// Handle page unload
<<<<<<< HEAD
window.addEventListener("beforeunload", () => {
=======
window.addEventListener('beforeunload', () => {
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
    autofill.destroy();
});
// Export for potential external use
window.ZelfKeyAutofill = autofill;
<<<<<<< HEAD
=======
// Send a test message to activate the service worker
setTimeout(() => {
    if (typeof chrome !== 'undefined' && chrome.runtime) {
        chrome.runtime.sendMessage({ type: 'TEST_MESSAGE' }, (response) => {
            console.log('Test message response:', response);
        });
    }
}, 1000);
// Test comment
// Test change Sun Sep  7 12:02:40 MDT 2025
// Test change Sun Sep  7 12:04:29 MDT 2025
// Test change Sun Sep  7 12:04:57 MDT 2025
// Test change Sun Sep  7 12:05:06 MDT 2025
// Test change Sun Sep  7 12:05:32 MDT 2025
// Test change Sun Sep  7 12:08:53 MDT 2025
// Test change Sun Sep  7 12:09:03 MDT 2025
// Test change Sun Sep  7 12:09:19 MDT 2025
// Test change Sun Sep  7 12:09:40 MDT 2025
// Test change Sun Sep  7 12:09:54 MDT 2025
// Test change Sun Sep  7 12:10:18 MDT 2025
// Test change Sun Sep  7 12:10:48 MDT 2025
// Test change Sun Sep  7 12:11:00 MDT 2025
// Test change Sun Sep  7 12:11:33 MDT 2025
// Final test change Sun Sep  7 12:11:40 MDT 2025
>>>>>>> cdc582f (Verify the messages can be received from the content scripts to the extension and vice versa)
//# sourceMappingURL=autofill.js.map