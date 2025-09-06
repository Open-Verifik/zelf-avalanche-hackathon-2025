export class AutofillEngine {
    fillForm(form, username, password) {
        const usernameField = this.findUsernameField(form.fields);
        const passwordField = this.findPasswordField(form.fields);
        if (usernameField && username) {
            this.fillField(usernameField, username);
        }
        if (passwordField && password) {
            this.fillField(passwordField, password);
        }
    }
    fillField(field, value) {
        this.setFieldValue(field.element, value);
    }
    clearForm(form) {
        form.fields.forEach(field => {
            this.clearField(field);
        });
    }
    clearField(field) {
        this.setFieldValue(field.element, '');
    }
    setFieldValue(field, value) {
        // Store the original value for comparison
        const originalValue = field.value;
        // Focus the field first
        field.focus();
        // Set the value
        field.value = value;
        // Dispatch input events to ensure proper form handling
        // This is important for React, Vue, and other frameworks that rely on input events
        const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true
        });
        const changeEvent = new Event('change', {
            bubbles: true,
            cancelable: true
        });
        // Dispatch the events
        field.dispatchEvent(inputEvent);
        field.dispatchEvent(changeEvent);
        // Some frameworks might need additional events
        const keydownEvent = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            key: 'Backspace'
        });
        const keyupEvent = new KeyboardEvent('keyup', {
            bubbles: true,
            cancelable: true,
            key: 'Backspace'
        });
        field.dispatchEvent(keydownEvent);
        field.dispatchEvent(keyupEvent);
        // Trigger any custom events that might be needed
        const customEvent = new CustomEvent('zelfkey:autofill', {
            detail: {
                field: field,
                value: value,
                originalValue: originalValue
            },
            bubbles: true
        });
        field.dispatchEvent(customEvent);
        // Blur the field to trigger any validation
        field.dispatchEvent(new Event('blur', { bubbles: true }));
    }
    findUsernameField(fields) {
        // Look for email fields first
        const emailField = fields.find(field => field.type === 'email');
        if (emailField)
            return emailField;
        // Then look for username fields
        const usernameField = fields.find(field => field.type === 'username');
        if (usernameField)
            return usernameField;
        // Fallback to any text field that's not a password
        return fields.find(field => field.type !== 'password') || null;
    }
    findPasswordField(fields) {
        return fields.find(field => field.type === 'password') || null;
    }
    detectFormType(form) {
        const passwordFields = form.fields.filter(field => field.type === 'password');
        const usernameFields = form.fields.filter(field => field.type === 'username' || field.type === 'email');
        // Check for common registration indicators
        const registrationIndicators = [
            'confirm', 'repeat', 'verify', 'confirm-password', 'confirm_password',
            'signup', 'sign-up', 'register', 'registration'
        ];
        const hasRegistrationIndicator = form.fields.some(field => field.name && registrationIndicators.some(indicator => field?.name?.toLowerCase().includes(indicator)));
        if (hasRegistrationIndicator || passwordFields.length > 1) {
            return 'register';
        }
        if (passwordFields.length === 1 && usernameFields.length >= 1) {
            return 'login';
        }
        return 'unknown';
    }
    validateForm(form) {
        const errors = [];
        if (form.fields.length === 0) {
            errors.push('No form fields detected');
        }
        const passwordFields = form.fields.filter(field => field.type === 'password');
        if (passwordFields.length === 0) {
            errors.push('No password field found');
        }
        const usernameFields = form.fields.filter(field => field.type === 'username' || field.type === 'email');
        if (usernameFields.length === 0) {
            errors.push('No username/email field found');
        }
        return {
            isValid: errors.length === 0,
            errors
        };
    }
    getFormData(form) {
        const data = {};
        form.fields.forEach(field => {
            const value = field.element.value;
            if (value) {
                const key = field.name || field.id || field.type;
                if (key) {
                    data[key] = value;
                }
            }
        });
        return data;
    }
    isFormFilled(form) {
        return form.fields.every(field => field.element.value.trim() !== '');
    }
    getEmptyFields(form) {
        return form.fields.filter(field => field.element.value.trim() === '');
    }
}
//# sourceMappingURL=autofill-engine.js.map