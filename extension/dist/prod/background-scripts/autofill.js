/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./content-scripts/autofill/services/form-detector.ts
class FormDetector {
    observedFields = new Set();
    observer;
    constructor() {
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

;// ./content-scripts/autofill/services/communication.ts
class CommunicationService {
    static instance;
    static getInstance() {
        if (!CommunicationService.instance) {
            CommunicationService.instance = new CommunicationService();
        }
        return CommunicationService.instance;
    }
    async getPasswords(website) {
        try {
            const response = await this.sendMessage({
                type: 'GET_PASSWORDS',
                payload: { website }
            });
            if (response.success && response.data) {
                return response.data;
            }
            return [];
        }
        catch (error) {
            console.error('Error fetching passwords:', error);
            return [];
        }
    }
    async decryptPassword(passwordId) {
        try {
            const response = await this.sendMessage({
                type: 'DECRYPT_PASSWORD',
                payload: { passwordId }
            });
            if (response.success && response.data) {
                return response.data;
            }
            return null;
        }
        catch (error) {
            console.error('Error decrypting password:', error);
            return null;
        }
    }
    async createPassword(urlInfo) {
        try {
            await this.sendMessage({
                type: 'CREATE_PASSWORD',
                payload: { urlInfo }
            });
        }
        catch (error) {
            console.error('Error opening create password:', error);
        }
    }
    async authenticate() {
        try {
            const response = await this.sendMessage({
                type: 'AUTHENTICATE',
                payload: {}
            });
            return response.success;
        }
        catch (error) {
            console.error('Error authenticating:', error);
            return false;
        }
    }
    sendMessage(message) {
        return new Promise((resolve, reject) => {
            console.log('Sending message to background script:', message);
            // Check if we're in a Chrome extension context
            if (typeof chrome !== 'undefined' && chrome.runtime) {
                chrome.runtime.sendMessage(message, (response) => {
                    console.log('Received response from background script:', response);
                    if (chrome.runtime.lastError) {
                        console.error('Chrome runtime error:', chrome.runtime.lastError);
                        reject(new Error(chrome.runtime.lastError.message));
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            else {
                reject(new Error('Chrome extension runtime not available'));
            }
        });
    }
    setupMessageListener() {
        // Listen for messages from the background script
        if (typeof chrome !== 'undefined' && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                this.handleMessage(message, sendResponse);
                return true; // Keep message channel open for async response
            });
        }
    }
    handleMessage(message, sendResponse) {
        // Handle any incoming messages from background script
        console.log('Content script received message:', message);
        sendResponse({ success: true });
    }
}

;// ./content-scripts/autofill/services/password-manager.ts

class PasswordManager {
    communicationService;
    cachedPasswords = new Map();
    constructor() {
        this.communicationService = CommunicationService.getInstance();
    }
    async getPasswordsForWebsite(website) {
        // Check cache first
        if (this.cachedPasswords.has(website)) {
            return this.cachedPasswords.get(website);
        }
        try {
            const passwords = await this.communicationService.getPasswords(website);
            // Cache the results
            this.cachedPasswords.set(website, passwords);
            return passwords;
        }
        catch (error) {
            console.error('Error fetching passwords for website:', website, error);
            return [];
        }
    }
    async decryptPassword(passwordId) {
        try {
            const result = await this.communicationService.decryptPassword(passwordId);
            if (result && result.metadata) {
                return {
                    username: result.metadata.username,
                    password: result.metadata.password
                };
            }
            return null;
        }
        catch (error) {
            console.error('Error decrypting password:', error);
            return null;
        }
    }
    async createNewPassword(urlInfo) {
        try {
            await this.communicationService.createPassword(urlInfo);
        }
        catch (error) {
            console.error('Error creating new password:', error);
        }
    }
    async authenticate() {
        try {
            return await this.communicationService.authenticate();
        }
        catch (error) {
            console.error('Error authenticating:', error);
            return false;
        }
    }
    clearCache() {
        this.cachedPasswords.clear();
    }
    clearCacheForWebsite(website) {
        this.cachedPasswords.delete(website);
    }
    getCachedPasswords(website) {
        return this.cachedPasswords.get(website) || null;
    }
}

;// ./content-scripts/autofill/services/ui-overlay.ts

class UIOverlay {
    passwordManager;
    icons = new Map();
    currentMenu = null;
    currentField = null;
    constructor() {
        this.passwordManager = new PasswordManager();
        this.setupStyles();
    }
    setupStyles() {
        const style = document.createElement("style");
        style.textContent = `
      .zelfkey-icon {
        position: absolute;
        width: 28px;
        height: 28px;
        cursor: pointer;
        opacity: 0.3;
        z-index: 10000;
        pointer-events: auto;
        transition: opacity 0.2s ease-in-out;
      }

      .zelfkey-icon:hover {
        opacity: 1;
      }

      .zelfkey-menu {
        position: absolute;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10001;
        min-width: 200px;
        max-width: 300px;
        max-height: 300px;
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .zelfkey-menu-item {
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
        gap: 12px;
        transition: background-color 0.2s ease;
      }

      .zelfkey-menu-item:hover {
        background-color: #f8f9fa;
      }

      .zelfkey-menu-item:last-child {
        border-bottom: none;
      }

      .zelfkey-menu-item.create {
        color: #007bff;
        font-weight: 500;
      }

      .zelfkey-menu-item.create:hover {
        background-color: #e3f2fd;
      }

      .zelfkey-menu-item.loading {
        color: #666;
        font-style: italic;
      }

      .zelfkey-menu-item.no-credentials {
        color: #999;
        font-style: italic;
        text-align: center;
        padding: 16px;
      }

      .zelfkey-menu-item.loading .loading-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid #e0e0e0;
        border-top: 2px solid #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .zelfkey-menu-item-icon {
        width: 20px;
        height: 20px;
        background: #171717;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 12px;
        font-weight: bold;
      }

      .zelfkey-menu-item-content {
        flex: 1;
        min-width: 0;
      }

      .zelfkey-menu-item-title {
        font-weight: 500;
        color: #333;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .zelfkey-menu-item-subtitle {
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
        document.head.appendChild(style);
    }
    showIconForField(field) {
        if (this.icons.has(field.element)) {
            return; // Icon already exists
        }
        const icon = this.createZelfKeyIcon(field);
        this.icons.set(field.element, icon);
        this.positionIcon(icon);
    }
    hideIconForField(field) {
        const icon = this.icons.get(field.element);
        if (icon) {
            icon.element.remove();
            this.icons.delete(field.element);
        }
    }
    hideAllIcons() {
        this.icons.forEach((icon) => icon.element.remove());
        this.icons.clear();
    }
    createZelfKeyIcon(field) {
        const iconElement = document.createElement("div");
        iconElement.className = "zelfkey-icon";
        iconElement.innerHTML = this.getZelfKeySVG();
        // Position the icon
        const rect = field.element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const position = {
            top: rect.top + scrollTop + (rect.height - 39) / 2,
            left: rect.right + scrollLeft - 60,
        };
        iconElement.style.top = `${position.top}px`;
        iconElement.style.left = `${position.left}px`;
        // Add click handler
        iconElement.addEventListener("click", (e) => {
            e.stopPropagation();
            this.handleIconClick(field);
        });
        document.body.appendChild(iconElement);
        return {
            element: iconElement,
            field,
            position,
        };
    }
    getZelfKeySVG() {
        return `
      <svg width="28" height="28" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="39" rx="4" fill="#171717"/>
        <path d="M20.022 5.97266C21.4836 8.01557 23.3686 10.3437 25.7409 12.7465H15.0908C17.3993 10.2408 18.9747 7.83793 20.0265 5.97266H20.022Z" fill="white"/>
        <path d="M7.00455 19.3558C8.88049 18.4255 11.3438 16.9529 13.8117 14.7136C14.0302 14.5173 14.2442 14.3163 14.4491 14.1152H23.97C23.97 14.1152 17.0718 24.1241 13.2972 24.1522C10.1827 24.1802 8.88049 20.5432 7 19.3511L7.00455 19.3558Z" fill="white"/>
        <path d="M20.6291 32.6794C19.4817 31.0759 18.0019 29.248 16.126 27.3594H24.8819C23.0287 29.2807 21.6445 31.132 20.6291 32.6794Z" fill="white"/>
        <path d="M26.269 25.7042C26.1688 25.7977 26.0641 25.8912 25.9639 25.9847H15.7373C15.7373 25.9847 22.7493 15.8449 26.5741 15.8262C29.7659 15.8122 31.0863 19.5287 33.0078 20.7488C31.0545 21.8755 28.6777 23.479 26.2644 25.7042H26.269Z" fill="white"/>
      </svg>
    `;
    }
    positionIcon(icon) {
        const rect = icon.field.element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const position = {
            top: rect.top + scrollTop + (rect.height - 28) / 2,
            left: rect.right + scrollLeft - 32,
        };
        icon.element.style.top = `${position.top}px`;
        icon.element.style.left = `${position.left}px`;
        icon.position = position;
    }
    async handleIconClick(field) {
        this.currentField = field;
        this.hideMenu();
        // Extract hostname from current URL
        const website = this.extractHostname(window.location.href);
        // Show menu immediately with loading state
        this.showMenuWithLoading(field, website);
        try {
            // Add timeout to prevent hanging
            const passwords = await Promise.race([
                this.passwordManager.getPasswordsForWebsite(website),
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve([]);
                    }, 2000);
                }),
            ]);
            this.updateMenuWithPasswords(passwords);
        }
        catch (error) {
            console.error("Error fetching passwords:", error);
            this.updateMenuWithPasswords([]);
        }
    }
    showMenuWithLoading(field, website) {
        this.hideMenu();
        const menu = document.createElement("div");
        menu.className = "zelfkey-menu";
        // Add loading indicator
        const loadingItem = this.createLoadingMenuItem();
        menu.appendChild(loadingItem);
        // Add create new password option (always available)
        const createItem = this.createCreateMenuItem();
        createItem.addEventListener("click", () => this.handleCreatePassword());
        menu.appendChild(createItem);
        // Position the menu
        const rect = field.element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        menu.style.top = `${rect.bottom + scrollTop + 5}px`;
        menu.style.left = `${rect.left + scrollLeft}px`;
        menu.style.zIndex = "10001";
        document.body.appendChild(menu);
        this.currentMenu = menu;
        // Add click outside handler
        setTimeout(() => {
            document.addEventListener("click", this.handleClickOutside.bind(this));
        }, 0);
    }
    updateMenuWithPasswords(passwords) {
        if (!this.currentMenu)
            return;
        // Clear existing content
        this.currentMenu.innerHTML = "";
        // Add existing passwords or "no credentials" message
        if (passwords.length > 0) {
            passwords.forEach((password) => {
                const item = this.createMenuItem(password);
                item.addEventListener("click", () => this.handlePasswordSelect(password));
                this.currentMenu.appendChild(item);
            });
        }
        else {
            // Add "no credentials found" message
            const noCredentialsItem = this.createNoCredentialsMenuItem();
            this.currentMenu.appendChild(noCredentialsItem);
        }
        // Add create new password option
        const createItem = this.createCreateMenuItem();
        createItem.addEventListener("click", () => this.handleCreatePassword());
        this.currentMenu.appendChild(createItem);
    }
    createMenuItem(password) {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item";
        // Extract host name from website/domain/url
        const hostName = this.extractHostName(password);
        const hostInitial = hostName.charAt(0).toUpperCase();
        const icon = document.createElement("div");
        icon.className = "zelfkey-menu-item-icon";
        icon.textContent = hostInitial;
        const content = document.createElement("div");
        content.className = "zelfkey-menu-item-content";
        const title = document.createElement("div");
        title.className = "zelfkey-menu-item-title";
        title.textContent = hostName;
        const subtitle = document.createElement("div");
        subtitle.className = "zelfkey-menu-item-subtitle";
        subtitle.textContent = this.extractUsername(password);
        content.appendChild(title);
        content.appendChild(subtitle);
        item.appendChild(icon);
        item.appendChild(content);
        return item;
    }
    extractHostName(password) {
        // Check if this is the new format with publicData
        if (password.publicData?.website) {
            try {
                const url = new URL(password.publicData.website);
                return url.hostname;
            }
            catch {
                return password.publicData.website;
            }
        }
        // Fallback to original format
        const source = password.website || password.domain || password.url || password.name;
        if (!source) {
            return "Unknown";
        }
        try {
            // If it's a full URL, extract the hostname
            if (source.includes("://")) {
                const url = new URL(source);
                return url.hostname;
            }
            // If it already looks like a hostname (contains dots but no protocol)
            if (source.includes(".") && !source.includes(" ")) {
                return source;
            }
            // Otherwise, use the source as fallback
            return source;
        }
        catch {
            // If URL parsing fails, use the source as is
            return source;
        }
    }
    extractUsername(password) {
        // Check if this is the new format with publicData
        if (password.publicData?.username) {
            return password.publicData.username;
        }
        // Fallback to original format
        return password.username || "No username";
    }
    createLoadingMenuItem() {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item loading";
        const spinner = document.createElement("div");
        spinner.className = "loading-spinner";
        const content = document.createElement("div");
        content.className = "zelfkey-menu-item-content";
        const title = document.createElement("div");
        title.className = "zelfkey-menu-item-title";
        title.textContent = "Loading passwords...";
        content.appendChild(title);
        item.appendChild(spinner);
        item.appendChild(content);
        return item;
    }
    createNoCredentialsMenuItem() {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item no-credentials";
        const content = document.createElement("div");
        content.className = "zelfkey-menu-item-content";
        const title = document.createElement("div");
        title.className = "zelfkey-menu-item-title";
        title.textContent = "No credentials found";
        content.appendChild(title);
        item.appendChild(content);
        return item;
    }
    createCreateMenuItem() {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item create";
        const icon = document.createElement("div");
        icon.className = "zelfkey-menu-item-icon";
        icon.textContent = "+";
        const content = document.createElement("div");
        content.className = "zelfkey-menu-item-content";
        const title = document.createElement("div");
        title.className = "zelfkey-menu-item-title";
        title.textContent = "Create new password";
        content.appendChild(title);
        item.appendChild(icon);
        item.appendChild(content);
        return item;
    }
    async handlePasswordSelect(password) {
        this.hideMenu();
        if (!this.currentField)
            return;
        // Check if authentication is needed
        const isAuthenticated = await this.passwordManager.authenticate();
        if (!isAuthenticated) {
            // Open biometrics modal - this would need to be implemented
            this.openBiometricsModal(password);
            return;
        }
        // Decrypt and fill password
        const decryptedData = await this.passwordManager.decryptPassword(password.id);
        if (decryptedData) {
            this.fillField(this.currentField, decryptedData);
        }
    }
    async handleCreatePassword() {
        this.hideMenu();
        // Get complete URL information
        const urlInfo = {
            hash: window.location.hash,
            hostname: window.location.hostname,
            href: window.location.href,
            origin: window.location.origin,
            pathname: window.location.pathname,
            port: window.location.port,
            protocol: window.location.protocol,
            search: window.location.search,
            title: document.title,
        };
        await this.passwordManager.createNewPassword(urlInfo);
    }
    openBiometricsModal(password) {
        // This would open the biometrics modal in the extension popup
        // For now, we'll just log it
        console.log("Opening biometrics modal for password:", password.id);
        // Send message to background script to open popup with biometrics modal
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.sendMessage({
                type: "OPEN_BIOMETRICS_MODAL",
                payload: { passwordId: password.id, fieldId: this.currentField?.element.id },
            });
        }
    }
    fillField(field, data) {
        // Find the form this field belongs to
        const form = field.element.closest("form");
        if (!form)
            return;
        // Find username field
        const usernameField = this.findUsernameFieldInForm(form);
        if (usernameField && data.username) {
            this.setFieldValue(usernameField, data.username);
        }
        // Fill password field
        if (field.type === "password" && data.password) {
            this.setFieldValue(field.element, data.password);
        }
    }
    findUsernameFieldInForm(form) {
        const selectors = [
            'input[type="email"]',
            'input[type="text"]',
            'input[name*="username" i]',
            'input[name*="email" i]',
            'input[id*="username" i]',
            'input[id*="email" i]',
        ];
        for (const selector of selectors) {
            const field = form.querySelector(selector);
            if (field && field.type !== "password") {
                return field;
            }
        }
        return null;
    }
    setFieldValue(field, value) {
        // Create and dispatch input events to ensure proper form handling
        field.focus();
        field.value = value;
        // Dispatch events
        field.dispatchEvent(new Event("input", { bubbles: true }));
        field.dispatchEvent(new Event("change", { bubbles: true }));
        field.dispatchEvent(new Event("blur", { bubbles: true }));
    }
    handleClickOutside(event) {
        if (this.currentMenu && !this.currentMenu.contains(event.target)) {
            this.hideMenu();
        }
    }
    hideMenu() {
        if (this.currentMenu) {
            this.currentMenu.remove();
            this.currentMenu = null;
        }
        document.removeEventListener("click", this.handleClickOutside.bind(this));
    }
    updateIconPositions() {
        this.icons.forEach((icon) => {
            this.positionIcon(icon);
        });
    }
    extractHostname(url) {
        try {
            const urlObj = new URL(url);
            let hostname = urlObj.hostname;
            // Remove 'www.' prefix if present
            if (hostname.startsWith("www.")) {
                hostname = hostname.substring(4);
            }
            return hostname;
        }
        catch (error) {
            // Fallback for invalid URLs (like file:// URLs)
            console.warn("Could not parse URL:", url, error);
            return "localhost";
        }
    }
}

;// ./content-scripts/autofill/services/autofill-engine.ts
class AutofillEngine {
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

;// ./content-scripts/autofill/autofill.ts





class AutofillContentScript {
    formDetector;
    uiOverlay;
    passwordManager;
    autofillEngine;
    communicationService;
    isInitialized = false;
    constructor() {
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
            // Listen for detected forms FIRST
            window.addEventListener("zelfkey:formsDetected", this.handleFormsDetected.bind(this));
            // Start form detection AFTER listener is set up
            this.formDetector.startDetection();
            // Handle window resize and scroll events to reposition icons
            window.addEventListener("resize", this.handleWindowResize.bind(this));
            window.addEventListener("scroll", this.handleWindowScroll.bind(this));
            // Handle page visibility changes
            document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this));
            this.isInitialized = true;
            console.log("ZelfKey Autofill initialized");
        }
        catch (error) {
            console.error("Error initializing ZelfKey Autofill:", error);
        }
    }
    handleFormsDetected(event) {
        const forms = event.detail.forms;
        forms.forEach((form) => {
            this.processForm(form);
        });
    }
    processForm(form) {
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
    shouldShowIconForField(field) {
        // Show icon for password, username, and email fields
        return ["password", "username", "email"].includes(field.type);
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
                forms.forEach((form) => this.processForm(form));
            }, 100);
        }
    }
    resizeTimeout = null;
    scrollTimeout = null;
    destroy() {
        this.formDetector.stopDetection();
        this.uiOverlay.hideAllIcons();
        this.passwordManager.clearCache();
        window.removeEventListener("zelfkey:formsDetected", this.handleFormsDetected.bind(this));
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
}
else {
    autofill.initialize();
}
// Handle page unload
window.addEventListener("beforeunload", () => {
    autofill.destroy();
});
// Export for potential external use
window.ZelfKeyAutofill = autofill;

/******/ })()
;
//# sourceMappingURL=autofill.js.map