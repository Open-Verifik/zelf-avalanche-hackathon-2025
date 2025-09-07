import { FormField, DetectedForm } from '../types/autofill.types';

export class FormDetector {
  private observedFields: Set<HTMLInputElement> = new Set();
  private observer: MutationObserver;

  constructor() {
    this.observer = new MutationObserver(this.handleMutations.bind(this));
  }

  public startDetection(): void {
    this.scanForForms();
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['type', 'name', 'id', 'placeholder']
    });
  }

  public stopDetection(): void {
    this.observer.disconnect();
  }

  private handleMutations(mutations: MutationRecord[]): void {
    let shouldRescan = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'INPUT' || element.querySelector('input')) {
              shouldRescan = true;
            }
          }
        });
      } else if (mutation.type === 'attributes') {
        const target = mutation.target as HTMLInputElement;
        if (target.tagName === 'INPUT' && 
            ['type', 'name', 'id', 'placeholder'].includes(mutation.attributeName || '')) {
          shouldRescan = true;
        }
      }
    });

    if (shouldRescan) {
      setTimeout(() => this.scanForForms(), 100);
    }
  }

  private scanForForms(): void {
    const passwordFields = this.findPasswordFields();
    const usernameFields = this.findUsernameFields();
    const emailFields = this.findEmailFields();

    // Group fields by their parent form
    const formGroups = new Map<HTMLFormElement, FormField[]>();

    [...passwordFields, ...usernameFields, ...emailFields].forEach(field => {
      const form = field.element.closest('form');
      if (form) {
        if (!formGroups.has(form)) {
          formGroups.set(form, []);
        }
        formGroups.get(form)!.push(field);
      }
    });

    // Convert to DetectedForm objects
    const detectedForms: DetectedForm[] = Array.from(formGroups.entries()).map(([form, fields]) => ({
      form,
      fields,
      website: this.getWebsiteFromUrl(window.location.href)
    }));

    // Emit event for detected forms
    this.emitFormsDetected(detectedForms);
  }

  private findPasswordFields(): FormField[] {
    const selectors = [
      'input[type="password"]',
      'input[name*="password" i]',
      'input[id*="password" i]',
      'input[placeholder*="password" i]'
    ];

    return this.findFieldsBySelectors(selectors, 'password');
  }

  private findUsernameFields(): FormField[] {
    const selectors = [
      'input[name*="username" i]',
      'input[id*="username" i]',
      'input[placeholder*="username" i]',
      'input[name*="user" i]',
      'input[id*="user" i]'
    ];

    return this.findFieldsBySelectors(selectors, 'username');
  }

  private findEmailFields(): FormField[] {
    const selectors = [
      'input[type="email"]',
      'input[name*="email" i]',
      'input[id*="email" i]',
      'input[placeholder*="email" i]',
      'input[name*="mail" i]',
      'input[id*="mail" i]'
    ];

    return this.findFieldsBySelectors(selectors, 'email');
  }

  private findFieldsBySelectors(selectors: string[], type: 'username' | 'email' | 'password'): FormField[] {
    const fields: FormField[] = [];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
      elements.forEach(element => {
        if (!this.observedFields.has(element)) {
          this.observedFields.add(element);
          fields.push({
            element,
            type,
            name: element.name || undefined,
            id: element.id || undefined,
            placeholder: element.placeholder || undefined
          });
        }
      });
    });

    return fields;
  }

  private getWebsiteFromUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return window.location.hostname;
    }
  }

  private emitFormsDetected(forms: DetectedForm[]): void {
    const event = new CustomEvent('zelfkey:formsDetected', {
      detail: { forms }
    });
    window.dispatchEvent(event);
  }

  public getCurrentForms(): DetectedForm[] {
    const passwordFields = this.findPasswordFields();
    const usernameFields = this.findUsernameFields();
    const emailFields = this.findEmailFields();

    const formGroups = new Map<HTMLFormElement, FormField[]>();

    [...passwordFields, ...usernameFields, ...emailFields].forEach(field => {
      const form = field.element.closest('form');
      if (form) {
        if (!formGroups.has(form)) {
          formGroups.set(form, []);
        }
        formGroups.get(form)!.push(field);
      }
    });

    return Array.from(formGroups.entries()).map(([form, fields]) => ({
      form,
      fields,
      website: this.getWebsiteFromUrl(window.location.href)
    }));
  }
}
