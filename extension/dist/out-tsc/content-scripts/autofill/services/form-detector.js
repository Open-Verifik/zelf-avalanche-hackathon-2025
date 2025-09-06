export class FormDetector {
    constructor() {
        this.observedFields = new Set();
        this.observer = new MutationObserver(this.handleMutations.bind(this));
    }
    startDetection() {
        this.scanForForms();
        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['type', 'name', 'id', 'placeholder']
        });
    }
    stopDetection() {
        this.observer.disconnect();
    }
    handleMutations(mutations) {
        let shouldRescan = false;
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const element = node;
                        if (element.tagName === 'INPUT' || element.querySelector('input')) {
                            shouldRescan = true;
                        }
                    }
                });
            }
            else if (mutation.type === 'attributes') {
                const target = mutation.target;
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
    scanForForms() {
        const passwordFields = this.findPasswordFields();
        const usernameFields = this.findUsernameFields();
        const emailFields = this.findEmailFields();
        // Group fields by their parent form
        const formGroups = new Map();
        [...passwordFields, ...usernameFields, ...emailFields].forEach(field => {
            const form = field.element.closest('form');
            if (form) {
                if (!formGroups.has(form)) {
                    formGroups.set(form, []);
                }
                formGroups.get(form).push(field);
            }
        });
        // Convert to DetectedForm objects
        const detectedForms = Array.from(formGroups.entries()).map(([form, fields]) => ({
            form,
            fields,
            website: this.getWebsiteFromUrl(window.location.href)
        }));
        // Emit event for detected forms
        this.emitFormsDetected(detectedForms);
    }
    findPasswordFields() {
        const selectors = [
            'input[type="password"]',
            'input[name*="password" i]',
            'input[id*="password" i]',
            'input[placeholder*="password" i]'
        ];
        return this.findFieldsBySelectors(selectors, 'password');
    }
    findUsernameFields() {
        const selectors = [
            'input[name*="username" i]',
            'input[id*="username" i]',
            'input[placeholder*="username" i]',
            'input[name*="user" i]',
            'input[id*="user" i]'
        ];
        return this.findFieldsBySelectors(selectors, 'username');
    }
    findEmailFields() {
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
    findFieldsBySelectors(selectors, type) {
        const fields = [];
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
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
    getWebsiteFromUrl(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname;
        }
        catch {
            return window.location.hostname;
        }
    }
    emitFormsDetected(forms) {
        const event = new CustomEvent('zelfkey:formsDetected', {
            detail: { forms }
        });
        window.dispatchEvent(event);
    }
    getCurrentForms() {
        const passwordFields = this.findPasswordFields();
        const usernameFields = this.findUsernameFields();
        const emailFields = this.findEmailFields();
        const formGroups = new Map();
        [...passwordFields, ...usernameFields, ...emailFields].forEach(field => {
            const form = field.element.closest('form');
            if (form) {
                if (!formGroups.has(form)) {
                    formGroups.set(form, []);
                }
                formGroups.get(form).push(field);
            }
        });
        return Array.from(formGroups.entries()).map(([form, fields]) => ({
            form,
            fields,
            website: this.getWebsiteFromUrl(window.location.href)
        }));
    }
}
//# sourceMappingURL=form-detector.js.map