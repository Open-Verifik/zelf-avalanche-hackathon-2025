import { FormDetector } from "./services/form-detector";
import { UIOverlay } from "./services/ui-overlay";
import { PasswordManager } from "./services/password-manager";
import { AutofillEngine } from "./services/autofill-engine";
import { CommunicationService } from "./services/communication";
import { DetectedForm, FormField } from "./types/autofill.types";

class AutofillContentScript {
    private formDetector: FormDetector;
    private uiOverlay: UIOverlay;
    private passwordManager: PasswordManager;
    private autofillEngine: AutofillEngine;
    private communicationService: CommunicationService;
    private isInitialized: boolean = false;
    private serviceWorkerReady: boolean = false;

    constructor() {
        this.formDetector = new FormDetector();
        this.uiOverlay = new UIOverlay();
        this.passwordManager = new PasswordManager();
        this.autofillEngine = new AutofillEngine();
        this.communicationService = CommunicationService.getInstance();
    }

    public async initialize(): Promise<void> {
        if (this.isInitialized) return;

        try {
            // Set up communication
            this.communicationService.setupMessageListener();

            // Listen for service worker ready message
            this.communicationService.onServiceWorkerReady(() => {
                this.serviceWorkerReady = true;
                this.startFormDetection();
            });

            // Listen for detected forms FIRST
            window.addEventListener("zelfkey:formsDetected", this.handleFormsDetected.bind(this) as EventListener);

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
        } catch (error) {
            console.error("Error initializing ZelfKey Autofill:", error);
        }
    }

    private startFormDetection(): void {
        if (this.serviceWorkerReady) {
            // Start form detection when service worker is ready
            this.formDetector.startDetection();
        }
    }

    private handleFormsDetected(event: CustomEvent): void {
        const forms: DetectedForm[] = event.detail.forms;

        forms.forEach((form) => {
            this.processForm(form);
        });
    }

    private processForm(form: DetectedForm): void {
        // Validate the form
        const validation = this.autofillEngine.validateForm(form);

        if (!validation.isValid) {
            console.log("Invalid form detected:", validation.errors);
            return;
        }

        // Show icons for relevant fields
        form.fields.forEach((field) => {
            if (this.shouldShowIconForField(field)) {
                this.uiOverlay.showIconForField(field);
            }
        });
    }

    private shouldShowIconForField(field: FormField): boolean {
        // Show icon for password, username, and email fields
        return ["password", "username", "email"].includes(field.type);
    }

    private handleWindowResize(): void {
        // Debounce the resize handler
        if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.uiOverlay.updateIconPositions();
        }, 100);
    }

    private handleWindowScroll(): void {
        // Debounce the scroll handler
        if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.uiOverlay.updateIconPositions();
        }, 50);
    }

    private handleVisibilityChange(): void {
        if (document.hidden) {
            // Page is hidden, hide all icons
            this.uiOverlay.hideAllIcons();
        } else {
            // Page is visible, rescan for forms
            setTimeout(() => {
                const forms = this.formDetector.getCurrentForms();
                forms.forEach((form) => this.processForm(form));
            }, 100);
        }
    }

    private resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    private scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    public destroy(): void {
        this.formDetector.stopDetection();
        this.uiOverlay.hideAllIcons();
        this.passwordManager.clearCache();

        window.removeEventListener("zelfkey:formsDetected", this.handleFormsDetected.bind(this) as EventListener);
        window.removeEventListener("resize", this.handleWindowResize.bind(this));
        window.removeEventListener("scroll", this.handleWindowScroll.bind(this));
        document.removeEventListener("visibilitychange", this.handleVisibilityChange.bind(this));

        this.isInitialized = false;
    }
}

// Initialize the autofill when the script loads
const autofill = new AutofillContentScript();

// Wait for DOM to be ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        autofill.initialize();
    });
} else {
    autofill.initialize();
}

// Handle page unload
window.addEventListener("beforeunload", () => {
    autofill.destroy();
});

// Export for potential external use
(window as any).ZelfKeyAutofill = autofill;
