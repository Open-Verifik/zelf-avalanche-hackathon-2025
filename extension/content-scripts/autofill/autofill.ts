import { FormDetector } from './services/form-detector';
import { UIOverlay } from './services/ui-overlay';
import { PasswordManager } from './services/password-manager';
import { AutofillEngine } from './services/autofill-engine';
import { CommunicationService } from './services/communication';
import { DetectedForm, FormField } from './types/autofill.types';

class AutofillContentScript {
  private formDetector: FormDetector;
  private uiOverlay: UIOverlay;
  private passwordManager: PasswordManager;
  private autofillEngine: AutofillEngine;
  private communicationService: CommunicationService;
  private isInitialized: boolean = false;

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

      // Listen for detected forms FIRST
      window.addEventListener('zelfkey:formsDetected', this.handleFormsDetected.bind(this) as EventListener);

      // Start form detection AFTER listener is set up
      this.formDetector.startDetection();

      // Handle window resize and scroll events to reposition icons
      window.addEventListener('resize', this.handleWindowResize.bind(this));
      window.addEventListener('scroll', this.handleWindowScroll.bind(this));

      // Handle page visibility changes
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));

      this.isInitialized = true;
      console.log('ZelfKey Autofill initialized');
    } catch (error) {
      console.error('Error initializing ZelfKey Autofill:', error);
    }
  }

  private handleFormsDetected(event: CustomEvent): void {
    const forms: DetectedForm[] = event.detail.forms;
    
    forms.forEach(form => {
      this.processForm(form);
    });
  }

  private processForm(form: DetectedForm): void {
    // Validate the form
    const validation = this.autofillEngine.validateForm(form);
    
    if (!validation.isValid) {
      console.log('Invalid form detected:', validation.errors);
      return;
    }

    // Show icons for relevant fields
    form.fields.forEach(field => {
      if (this.shouldShowIconForField(field)) {
        this.uiOverlay.showIconForField(field);
      }
    });
  }

  private shouldShowIconForField(field: FormField): boolean {
    // Show icon for password, username, and email fields
    return ['password', 'username', 'email'].includes(field.type);
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
        forms.forEach(form => this.processForm(form));
      }, 100);
    }
  }

  private resizeTimeout: ReturnType<typeof setTimeout> | null = null;
  private scrollTimeout: ReturnType<typeof setTimeout> | null = null;

  public destroy(): void {
    this.formDetector.stopDetection();
    this.uiOverlay.hideAllIcons();
    this.passwordManager.clearCache();
    
    window.removeEventListener('zelfkey:formsDetected', this.handleFormsDetected.bind(this) as EventListener);
    window.removeEventListener('resize', this.handleWindowResize.bind(this));
    window.removeEventListener('scroll', this.handleWindowScroll.bind(this));
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    
    this.isInitialized = false;
  }
}

// Initialize the autofill when the script loads
const autofill = new AutofillContentScript();

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    autofill.initialize();
  });
} else {
  autofill.initialize();
}

// Handle page unload
window.addEventListener('beforeunload', () => {
  autofill.destroy();
});

// Export for potential external use
(window as any).ZelfKeyAutofill = autofill;

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
