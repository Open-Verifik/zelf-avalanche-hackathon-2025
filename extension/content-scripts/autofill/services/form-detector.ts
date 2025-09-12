import { logger } from "./logger";
import { FormField, DetectedForm } from "../types/autofill.types";

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
            attributeFilter: ["type", "name", "id", "placeholder", "class", "style"],
        });

        // Also monitor for any input elements being added
        this.observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["type", "name", "id", "placeholder", "class", "style"],
        });
    }

    public stopDetection(): void {
        this.observer.disconnect();
    }

    private handleMutations(mutations: MutationRecord[]): void {
        let shouldRescan = false;

        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const element = node as Element;
                        if (
                            element.tagName === "INPUT" ||
                            element.querySelector("input") ||
                            element.tagName === "FORM" ||
                            element.querySelector("form")
                        ) {
                            shouldRescan = true;
                        }
                    }
                });
            } else if (mutation.type === "attributes") {
                const target = mutation.target as HTMLInputElement;
                if (target.tagName === "INPUT" && ["type", "name", "id", "placeholder", "class", "style"].includes(mutation.attributeName || "")) {
                    shouldRescan = true;
                }
            }
        });

        if (shouldRescan) {
            setTimeout(() => this.scanForForms(), 50); // Faster response
        }
    }

    public scanForForms(): void {
        const passwordFields = this.findPasswordFields();
        const usernameFields = this.findUsernameFields();
        const emailFields = this.findEmailFields();
        const genericFields = this.findGenericInputFields();
        const fallbackFields = this.findFallbackFields();

        // Group fields by their parent form
        const formGroups = new Map<HTMLFormElement, FormField[]>();

        [...passwordFields, ...usernameFields, ...emailFields, ...genericFields, ...fallbackFields].forEach((field) => {
            const form = field.element.closest("form");
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
            website: this.getWebsiteFromUrl(window.location.href),
        }));

        // Log form detection results
        logger.logFormDetection(
            detectedForms.length,
            passwordFields.length + usernameFields.length + emailFields.length + genericFields.length + fallbackFields.length
        );

        // Emit event for detected forms
        this.emitFormsDetected(detectedForms);
    }

    private findPasswordFields(): FormField[] {
        const selectors = ['input[type="password"]', 'input[name*="password" i]', 'input[id*="password" i]', 'input[placeholder*="password" i]'];

        return this.findFieldsBySelectors(selectors, "password");
    }

    private findUsernameFields(): FormField[] {
        const selectors = [
            'input[name*="username" i]',
            'input[id*="username" i]',
            'input[placeholder*="username" i]',
            'input[name*="user" i]',
            'input[id*="user" i]',
            'input[name*="login" i]',
            'input[id*="login" i]',
            'input[name*="account" i]',
            'input[id*="account" i]',
            'input[type="text"]:not([type="password"]):not([type="email"])',
        ];

        return this.findFieldsBySelectors(selectors, "username");
    }

    private findEmailFields(): FormField[] {
        const selectors = [
            'input[type="email"]',
            'input[name*="email" i]',
            'input[id*="email" i]',
            'input[placeholder*="email" i]',
            'input[name*="mail" i]',
            'input[id*="mail" i]',
        ];

        return this.findFieldsBySelectors(selectors, "email");
    }

    private findGenericInputFields(): FormField[] {
        const selectors = [
            'input[type="text"]',
            "input:not([type])",
            'input[type="email"]',
            'input[type="password"]',
            'input[type="tel"]',
            'input[type="url"]',
            'input[type="search"]',
            'input[type="number"]',
            'input[type="date"]',
            'input[type="time"]',
            'input[type="datetime-local"]',
            'input[type="month"]',
            'input[type="week"]',
            'input[type="color"]',
            'input[type="range"]',
            'input[type="file"]',
            'input[type="hidden"]',
            'input[type="checkbox"]',
            'input[type="radio"]',
            'input[type="submit"]',
            'input[type="reset"]',
            'input[type="button"]',
            'input[type="image"]',
        ];

        return this.findFieldsBySelectors(selectors, "username");
    }

    private findFallbackFields(): FormField[] {
        // Find ANY visible input element that might be a form field
        const allInputs = document.querySelectorAll("input");
        const fields: FormField[] = [];

        allInputs.forEach((input) => {
            // Enhanced visibility and security checks
            if (this.isElementVisibleAndSecure(input)) {
                // Determine field type based on comprehensive context analysis
                const fieldType = this.determineFieldType(input);

                fields.push({
                    element: input,
                    type: fieldType,
                    name: input.name || undefined,
                    id: input.id || undefined,
                    placeholder: input.placeholder || undefined,
                });
            }
        });

        return fields;
    }

    private isElementVisibleAndSecure(element: HTMLInputElement): boolean {
        // Basic visibility check
        if (!this.isElementVisibleAndFocusable(element)) {
            return false;
        }

        // Security checks to avoid hijacking forms
        const computedStyle = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        // Check for suspicious positioning (off-screen, high z-index)
        if (rect.top < -1000 || rect.left < -1000) {
            return false;
        }

        // Check for suspicious z-index (potential overlay hijacking)
        const zIndex = parseInt(computedStyle.zIndex);
        if (zIndex > 1000) {
            return false;
        }

        // Check for hidden or very small elements
        if (rect.width < 10 || rect.height < 10) {
            return false;
        }

        // Check for elements with suspicious opacity
        if (computedStyle.opacity === "0" || computedStyle.visibility === "hidden") {
            return false;
        }

        // Check for elements that are positioned off-screen but have normal dimensions
        if (rect.top > window.innerHeight + 100 || rect.left > window.innerWidth + 100) {
            return false;
        }

        return true;
    }

    private determineFieldType(input: HTMLInputElement): "username" | "email" | "password" {
        // Check explicit type first
        if (input.type === "password") {
            return "password";
        }
        if (input.type === "email") {
            return "email";
        }

        // Analyze context for intelligent type detection
        const name = input.name?.toLowerCase() || "";
        const id = input.id?.toLowerCase() || "";
        const placeholder = input.placeholder?.toLowerCase() || "";
        const className = input.className?.toLowerCase() || "";

        // Password indicators
        const passwordKeywords = ["password", "pass", "pwd", "secret", "key", "pin", "code"];
        if (
            passwordKeywords.some(
                (keyword) => name.includes(keyword) || id.includes(keyword) || placeholder.includes(keyword) || className.includes(keyword)
            )
        ) {
            return "password";
        }

        // Email indicators
        const emailKeywords = ["email", "mail", "e-mail", "address"];
        if (
            emailKeywords.some(
                (keyword) => name.includes(keyword) || id.includes(keyword) || placeholder.includes(keyword) || className.includes(keyword)
            )
        ) {
            return "email";
        }

        // Username indicators
        const usernameKeywords = ["user", "login", "account", "name", "id", "username"];
        if (
            usernameKeywords.some(
                (keyword) => name.includes(keyword) || id.includes(keyword) || placeholder.includes(keyword) || className.includes(keyword)
            )
        ) {
            return "username";
        }

        // Default to username for text inputs
        return "username";
    }

    private findFieldsBySelectors(selectors: string[], type: "username" | "email" | "password"): FormField[] {
        const fields: FormField[] = [];

        selectors.forEach((selector) => {
            const elements = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
            elements.forEach((element) => {
                if (this.isElementVisibleAndFocusable(element) && !this.observedFields.has(element)) {
                    this.observedFields.add(element);
                    fields.push(this.createFormField(element, type));
                }
            });
        });

        return fields;
    }

    private isElementVisibleAndFocusable(element: HTMLInputElement): boolean {
        if (!element || !document.contains(element) || element.disabled) {
            return false;
        }

        const style = window.getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
            return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.top >= -1000 && rect.left >= -1000;
    }

    private getWebsiteFromUrl(url: string): string {
        try {
            return new URL(url).hostname;
        } catch {
            return window.location.hostname;
        }
    }

    private emitFormsDetected(forms: DetectedForm[]): void {
        const event = new CustomEvent("zelfkey:formsDetected", {
            detail: { forms },
        });
        window.dispatchEvent(event);
    }

    public getCurrentForms(): DetectedForm[] {
        const allFields = [...this.findPasswordFields(), ...this.findUsernameFields(), ...this.findEmailFields()];

        return this.groupFieldsByForm(allFields);
    }

    private createFormField(element: HTMLInputElement, type: "username" | "email" | "password"): FormField {
        return {
            element,
            type,
            name: element.name || undefined,
            id: element.id || undefined,
            placeholder: element.placeholder || undefined,
        };
    }

    private groupFieldsByForm(fields: FormField[]): DetectedForm[] {
        const formGroups = new Map<HTMLFormElement, FormField[]>();

        fields.forEach((field) => {
            const form = field.element.closest("form");
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
            website: this.getWebsiteFromUrl(window.location.href),
        }));
    }
}
