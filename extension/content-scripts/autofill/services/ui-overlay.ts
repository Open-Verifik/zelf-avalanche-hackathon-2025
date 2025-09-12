/// <reference path="../types/browser.d.ts" />
import { FormField, PasswordEntry, ZelfKeyIcon, DecryptedPasswordData } from "../types/autofill.types";
import { logger } from "./logger";
import { PasswordManager } from "./password-manager";

export class UIOverlay {
    private passwordManager: PasswordManager;
    private icons: Map<HTMLInputElement, ZelfKeyIcon> = new Map();
    private currentMenu: HTMLElement | null = null;
    private currentField: FormField | null = null;
    private currentFieldType: "username" | "email" | "password" | null = null;
    private isFetchingPasswords: boolean = false;

    constructor() {
        this.passwordManager = new PasswordManager();
        this.setupStyles();

        // Listen for decryption results from popout
        this.setupDecryptionResultListener();
    }

    private setupStyles(): void {
        const style = document.createElement("style");
        style.textContent = this.generateStyles();
        document.head.appendChild(style);
    }

    private generateStyles(): string {
        return `
            ${this.getIconStyles()}
            ${this.getMenuStyles()}
            ${this.getMenuItemStyles()}
            ${this.getSpinnerStyles()}
        `;
    }

    private getIconStyles(): string {
        return `
            .zelfkey-icon {
                position: absolute;
                width: 25px;
                height: 25px;
                cursor: pointer;
                opacity: 0.6;
                z-index: 10000;
                pointer-events: auto;
                transition: opacity 0.2s ease-in-out;
            }
            .zelfkey-icon:hover {
                opacity: 1;
            }
        `;
    }

    private getMenuStyles(): string {
        return `
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
        `;
    }

    private getMenuItemStyles(): string {
        return `
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
            .zelfkey-menu-item--create {
                color: #007bff;
                font-weight: 500;
            }
            .zelfkey-menu-item--create:hover {
                background-color: #e3f2fd;
            }
            .zelfkey-menu-item--loading {
                color: #666;
                font-style: italic;
            }
            .zelfkey-menu-item--no-credentials {
                color: #999;
                font-style: italic;
                text-align: center;
                padding: 16px;
            }
            .zelfkey-menu-item__icon {
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
            .zelfkey-menu-item__content {
                flex: 1;
                min-width: 0;
            }
            .zelfkey-menu-item__title {
                font-weight: 500;
                color: #333;
                margin-bottom: 2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .zelfkey-menu-item__subtitle {
                font-size: 12px;
                color: #666;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `;
    }

    private getSpinnerStyles(): string {
        return `
            .zelfkey-menu-item--loading .loading-spinner {
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
        `;
    }

    public showIconForField(field: FormField): void {
        if (this.icons.has(field.element)) {
            const icon = this.icons.get(field.element);

            if (icon) this.positionIcon(icon);

            return;
        }

        // Don't show icons on buttons or other non-input elements
        if (field.element.tagName !== "INPUT") return;

        // Don't show icons on very small inputs (likely decorative or hidden)
        const rect = field.element.getBoundingClientRect();

        if (rect.width < 30 || rect.height < 15) return;

        if (!this.isFieldVisibleAndFocusable(field.element)) return;

        const icon = this.createZelfKeyIcon(field);

        if (!icon) return;

        this.icons.set(field.element, icon);

        this.positionIcon(icon);
    }

    public hideIconForField(field: FormField): void {
        const icon = this.icons.get(field.element);
        if (icon) {
            icon.element.remove();
            this.icons.delete(field.element);
        }
    }

    public hideAllIcons(): void {
        this.icons.forEach((icon) => icon.element.remove());
        this.icons.clear();
    }

    public getIconCount(): number {
        return this.icons.size;
    }

    private _repositionTimeout: number | null = null;

    public repositionAllIcons(): void {
        // Debounce repositioning to avoid excessive calls
        if (this._repositionTimeout) {
            clearTimeout(this._repositionTimeout);
        }

        this._repositionTimeout = window.setTimeout(() => {
            this.icons.forEach((icon) => {
                this.positionIcon(icon);
            });
            this._repositionTimeout = null;
        }, 50); // 50ms debounce
    }

    public hasIconsInContainer(container: Element): boolean {
        for (const icon of this.icons.values()) {
            const iconRect = icon.element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Check if icon is visible within the container
            if (
                iconRect.top >= containerRect.top &&
                iconRect.bottom <= containerRect.bottom &&
                iconRect.left >= containerRect.left &&
                iconRect.right <= containerRect.right
            ) {
                return true;
            }
        }
        return false;
    }

    public validateIcons(): void {
        const iconsToRemove: HTMLInputElement[] = [];

        this.icons.forEach((icon, fieldElement) => {
            if (!document.contains(fieldElement) || !document.contains(icon.element)) {
                iconsToRemove.push(fieldElement);
                return;
            }

            if (!this.isFieldVisibleAndFocusable(fieldElement)) {
                this.hideIconForField({ element: fieldElement, type: icon.field.type } as FormField);
                iconsToRemove.push(fieldElement);
                return;
            }

            this.positionIcon(icon);
        });

        // Remove invalid icons
        iconsToRemove.forEach((fieldElement) => {
            this.icons.delete(fieldElement);
        });
    }

    private createZelfKeyIcon(field: FormField): ZelfKeyIcon | null {
        if (!document.body || !document.contains(field.element)) {
            logger.warn("Field element no longer in DOM or document.body not available");
            return null;
        }

        // Create isolated icon with selective CSS reset
        const iconElement = document.createElement("div");
        iconElement.style.cssText = `
            position: fixed;
            width: 25px;
            height: 25px;
            cursor: pointer;
            opacity: 0.6;
            z-index: 10000;
            pointer-events: auto;
            isolation: isolate;
            transition: opacity 0.2s ease-in-out;
            display: block;
            margin: 0;
            padding: 0;
            border: none;
            background: none;
            box-shadow: none;
            transform: none;
        `;
        iconElement.innerHTML = this.getZelfKeySVG();

        const position = this.calculateIconPosition(field.element);
        iconElement.style.top = `${position.top}px`;
        iconElement.style.left = `${position.left}px`;

        // Add click handler
        iconElement.addEventListener("click", (e) => {
            e.stopPropagation();
            this.handleIconClick(field);
        });

        // Add hover effects
        iconElement.addEventListener("mouseenter", () => {
            iconElement.style.opacity = "1";
        });

        iconElement.addEventListener("mouseleave", () => {
            if (!this.isFetchingPasswords) {
                iconElement.style.opacity = "0.6";
            }
        });

        document.body.appendChild(iconElement);

        return {
            element: iconElement,
            field,
            position,
        };
    }

    private updateIconLoadingState(icon: ZelfKeyIcon, isLoading: boolean): void {
        if (isLoading) {
            icon.element.style.opacity = "0.5";
            icon.element.style.cursor = "not-allowed";
            icon.element.title = "Loading passwords...";
            // Keep the same SVG, just disable interaction
        } else {
            icon.element.style.opacity = "0.6";
            icon.element.style.cursor = "pointer";
            icon.element.title = "ZelfKey Autofill";
        }
    }

    private updateAllIconsLoadingState(isLoading: boolean): void {
        this.icons.forEach((icon) => {
            this.updateIconLoadingState(icon, isLoading);
        });
    }

    private getZelfKeySVG(): string {
        return `
      <svg width="25" height="25" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; width: 25px; height: 25px;">
        <rect width="40" height="39" rx="4" fill="#171717"/>
        <path d="M20.022 5.97266C21.4836 8.01557 23.3686 10.3437 25.7409 12.7465H15.0908C17.3993 10.2408 18.9747 7.83793 20.0265 5.97266H20.022Z" fill="white"/>
        <path d="M7.00455 19.3558C8.88049 18.4255 11.3438 16.9529 13.8117 14.7136C14.0302 14.5173 14.2442 14.3163 14.4491 14.1152H23.97C23.97 14.1152 17.0718 24.1241 13.2972 24.1522C10.1827 24.1802 8.88049 20.5432 7 19.3511L7.00455 19.3558Z" fill="white"/>
        <path d="M20.6291 32.6794C19.4817 31.0759 18.0019 29.248 16.126 27.3594H24.8819C23.0287 29.2807 21.6445 31.132 20.6291 32.6794Z" fill="white"/>
        <path d="M26.269 25.7042C26.1688 25.7977 26.0641 25.8912 25.9639 25.9847H15.7373C15.7373 25.9847 22.7493 15.8449 26.5741 15.8262C29.7659 15.8122 31.0863 19.5287 33.0078 20.7488C31.0545 21.8755 28.6777 23.479 26.2644 25.7042H26.269Z" fill="white"/>
      </svg>
    `;
    }

    private positionIcon(icon: ZelfKeyIcon): void {
        const position = this.calculateIconPosition(icon.field.element);

        // Check if position actually changed to avoid unnecessary updates
        if (icon.position && Math.abs(icon.position.top - position.top) < 1 && Math.abs(icon.position.left - position.left) < 1) {
            return; // Position hasn't changed significantly
        }

        // Position the icon element
        icon.element.style.top = `${position.top}px`;
        icon.element.style.left = `${position.left}px`;
        icon.position = position;

        // Log positioning for debugging
        logger.logIconPositioning(icon.field.element, position);

        // Immediate verification of positioning
        setTimeout(() => {
            const actualRect = icon.element.getBoundingClientRect();

            // Only log if there's a significant positioning issue
            const verticalDiff = Math.abs(actualRect.top - position.top);
            const horizontalDiff = Math.abs(actualRect.left - position.left);

            // Position verification - no logging needed for production

            // Debug indicator removed to prevent red boxes
        }, 10);

        // Test and adjust position if needed
        this.testAndAdjustPosition(icon, icon.field.element);
    }

    private async handleIconClick(field: FormField): Promise<void> {
        // Prevent multiple simultaneous fetches
        if (this.isFetchingPasswords) {
            return;
        }

        this.currentField = field;
        this.currentFieldType = field.type;
        this.hideMenu();

        // Disable all icons during fetch
        this.updateAllIconsLoadingState(true);

        const website = this.extractHostname(window.location.href);
        this.showMenuWithLoading(field, website);

        this.isFetchingPasswords = true;
        try {
            const passwords = await this.fetchPasswordsWithTimeout(website);
            this.updateMenuWithPasswords(passwords);
        } catch (error) {
            logger.logError(error as Error, "Password fetching");
            this.updateMenuWithPasswords([]);
        } finally {
            this.isFetchingPasswords = false;
            // Re-enable all icons
            this.updateAllIconsLoadingState(false);
        }
    }

    private showMenuWithLoading(field: FormField, website: string): void {
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

    private updateMenuWithPasswords(passwords: PasswordEntry[]): void {
        if (!this.currentMenu) return;

        // Clear existing content
        this.currentMenu.innerHTML = "";

        // Add existing passwords or "no credentials" message
        if (passwords.length > 0) {
            passwords.forEach((password) => {
                const item = this.createMenuItem(password);
                item.addEventListener("click", () => this.handlePasswordSelect(password));
                this.currentMenu!.appendChild(item);
            });
        } else {
            // Add "no credentials found" message
            const noCredentialsItem = this.createNoCredentialsMenuItem();
            this.currentMenu!.appendChild(noCredentialsItem);
        }

        // Add create new password option
        const createItem = this.createCreateMenuItem();
        createItem.addEventListener("click", () => this.handleCreatePassword());
        this.currentMenu!.appendChild(createItem);
    }

    private createMenuItem(password: PasswordEntry): HTMLElement {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item";

        const hostName = this.extractHostName(password);
        const hostInitial = hostName.charAt(0).toUpperCase();

        const icon = document.createElement("div");
        icon.className = "zelfkey-menu-item__icon";
        icon.textContent = hostInitial;

        const content = document.createElement("div");
        content.className = "zelfkey-menu-item__content";

        const title = document.createElement("div");
        title.className = "zelfkey-menu-item__title";
        title.textContent = hostName;

        const subtitle = document.createElement("div");
        subtitle.className = "zelfkey-menu-item__subtitle";
        subtitle.textContent = this.extractUsername(password);

        content.appendChild(title);
        content.appendChild(subtitle);
        item.appendChild(icon);
        item.appendChild(content);

        return item;
    }

    private extractHostName(password: PasswordEntry): string {
        // Check if this is the new format with publicData
        if ((password as any).publicData?.website) {
            try {
                const url = new URL((password as any).publicData.website);
                return url.hostname;
            } catch {
                return (password as any).publicData.website;
            }
        }

        // Fallback to original format
        const source = password.publicData.website || password.url || password.name;

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
        } catch {
            // If URL parsing fails, use the source as is
            return source;
        }
    }

    private extractUsername(password: PasswordEntry): string {
        // Check if this is the new format with publicData
        if ((password as any).publicData?.username) {
            return (password as any).publicData.username;
        }

        // Fallback to original format
        return password.publicData.username || "No username";
    }

    private createLoadingMenuItem(): HTMLElement {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item zelfkey-menu-item--loading";

        const spinner = document.createElement("div");
        spinner.className = "loading-spinner";

        const content = document.createElement("div");
        content.className = "zelfkey-menu-item__content";

        const title = document.createElement("div");
        title.className = "zelfkey-menu-item__title";
        title.textContent = "Loading passwords...";

        content.appendChild(title);
        item.appendChild(spinner);
        item.appendChild(content);

        return item;
    }

    private createNoCredentialsMenuItem(): HTMLElement {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item zelfkey-menu-item--no-credentials";

        const content = document.createElement("div");
        content.className = "zelfkey-menu-item__content";

        const title = document.createElement("div");
        title.className = "zelfkey-menu-item__title";
        title.textContent = "No credentials found";

        content.appendChild(title);
        item.appendChild(content);

        return item;
    }

    private createCreateMenuItem(): HTMLElement {
        const item = document.createElement("div");
        item.className = "zelfkey-menu-item zelfkey-menu-item--create";

        const icon = document.createElement("div");
        icon.className = "zelfkey-menu-item__icon";
        icon.textContent = "+";

        const content = document.createElement("div");
        content.className = "zelfkey-menu-item__content";

        const title = document.createElement("div");
        title.className = "zelfkey-menu-item__title";
        title.textContent = "Create new password";

        content.appendChild(title);
        item.appendChild(icon);
        item.appendChild(content);

        return item;
    }

    private async handlePasswordSelect(password: PasswordEntry): Promise<void> {
        this.hideMenu();

        if (!this.currentField) return;

        // Always open biometrics popout for password decryption
        // The JWT session is just for the API, but we still need biometric verification
        await this.openBiometricsPopout(password);
    }

    private async handleCreatePassword(): Promise<void> {
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

    private async openBiometricsPopout(password: PasswordEntry): Promise<void> {
        try {
            if (typeof chrome !== "undefined" && chrome.runtime) {
                const response = await chrome.runtime.sendMessage({
                    type: "OPEN_PASSWORD_DECRYPTOR",
                    payload: {
                        passwordId: password.id,
                        publicData: {
                            zelfProof: password.publicData.zelfProof,
                            title: password.name || password.publicData.website,
                            website: password.publicData.website,
                        },
                        fieldId: this.currentField?.element.id,
                        fieldType: this.currentFieldType,
                    },
                });

                if (response?.success) {
                    await this.waitForPopoutAndSendData(password);
                } else {
                    logger.warn("Failed to open popup:", response);
                }
            } else {
                logger.warn("Chrome runtime not available");
            }
        } catch (error) {
            logger.logError(error as Error, "Password decryption data storage");
        }
    }

    private async waitForPopoutAndSendData(password: PasswordEntry): Promise<void> {
        try {
            // Wait for popout to be ready (with timeout)
            const maxRetries = 20; // 10 seconds total
            let retries = 0;

            while (retries < maxRetries) {
                try {
                    // Try to send data to the popout
                    const response = await chrome.runtime.sendMessage({
                        type: "SEND_DECRYPTION_DATA_TO_POPOUT",
                        payload: {
                            passwordId: password.id,
                            publicData: {
                                zelfProof: password.publicData.zelfProof,
                                title: password.name || password.publicData.website,
                                website: password.publicData.website,
                            },
                            fieldId: this.currentField?.element.id,
                            fieldType: this.currentFieldType,
                        },
                    });

                    if (response?.success) {
                        return;
                    }
                } catch (error) {
                    // Popout not ready yet, continue waiting
                }

                // Wait 500ms before retrying
                await new Promise((resolve) => setTimeout(resolve, 500));
                retries++;
            }

            logger.warn("Timeout waiting for popout to be ready");
        } catch (error) {
            logger.logError(error as Error, "Popout communication");
        }
    }

    private setupDecryptionResultListener(): void {
        // Listen for messages from background script about decryption results
        if (typeof chrome !== "undefined" && chrome.runtime) {
            chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (message.type === "DECRYPTION_RESULT") {
                    this.handleDecryptionResult(message.payload);
                    sendResponse({ success: true });
                }
                return true; // Keep message channel open
            });
        }
    }

    private handleDecryptionResult(result: any): void {
        if (result.success && result.data && this.currentField) {
            // Fill the field with the decrypted data
            this.fillField(this.currentField, result.data);
        } else if (!result.success) {
            logger.logError(new Error(result.error), "Password decryption");
            // Could show an error message to the user
        } else {
            logger.debug("Missing required data for form filling:", {
                success: result.success,
                hasData: !!result.data,
                hasField: !!this.currentField,
            });
        }
    }

    private fillField(field: FormField, data: DecryptedPasswordData): void {
        // Fill the specific field that was clicked based on its type (if visible)
        if (this.isFieldVisibleAndFocusable(field.element)) {
            if (field.type === "username" || field.type === "email") {
                if (data.username) {
                    this.setFieldValue(field.element, data.username);
                }
            } else if (field.type === "password") {
                if (data.password) {
                    this.setFieldValue(field.element, data.password);
                }
            }
        }

        // Also try to fill other fields in the same form if they exist and are visible
        const form = field.element.closest("form");
        if (form) {
            // Find and fill username field if current field is password
            if (field.type === "password" && data.username) {
                const usernameField = this.findUsernameFieldInForm(form);
                if (usernameField && usernameField !== field.element && this.isFieldVisibleAndFocusable(usernameField)) {
                    this.setFieldValue(usernameField, data.username);
                }
            }
            // Find and fill password field if current field is username/email
            else if ((field.type === "username" || field.type === "email") && data.password) {
                const passwordField = form.querySelector('input[type="password"]') as HTMLInputElement;
                if (passwordField && passwordField !== field.element && this.isFieldVisibleAndFocusable(passwordField)) {
                    this.setFieldValue(passwordField, data.password);
                }
            }
        }
    }

    private isFieldVisibleAndFocusable(element: HTMLInputElement): boolean {
        // Check if element exists
        if (!element) return false;

        // Check if element is in the DOM
        if (!document.contains(element)) return false;

        // Check if element is visible (not hidden by CSS)
        const style = window.getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
            return false;
        }

        // Check if element is not disabled
        if (element.disabled) return false;

        // Check if element is not readonly (for most cases, readonly fields can still be filled)
        // if (element.readOnly) return false;

        // Check if element has positive dimensions (not collapsed)
        const rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;

        // Check if element is not off-screen
        if (rect.top < -1000 || rect.left < -1000) return false;

        return true;
    }

    private findUsernameFieldInForm(form: HTMLFormElement): HTMLInputElement | null {
        const selectors = [
            'input[type="email"]',
            'input[type="text"]',
            'input[name*="username" i]',
            'input[name*="email" i]',
            'input[id*="username" i]',
            'input[id*="email" i]',
        ];

        for (const selector of selectors) {
            const field = form.querySelector(selector) as HTMLInputElement;
            if (field && field.type !== "password") {
                return field;
            }
        }

        return null;
    }

    private setFieldValue(field: HTMLInputElement, value: string): void {
        // Create and dispatch input events to ensure proper form handling
        field.focus();
        field.value = value;

        // Dispatch events
        field.dispatchEvent(new Event("input", { bubbles: true }));
        field.dispatchEvent(new Event("change", { bubbles: true }));
        field.dispatchEvent(new Event("blur", { bubbles: true }));
    }

    private handleClickOutside(event: MouseEvent): void {
        if (this.currentMenu && !this.currentMenu.contains(event.target as Node)) {
            this.hideMenu();
        }
    }

    private hideMenu(): void {
        if (this.currentMenu) {
            this.currentMenu.remove();
            this.currentMenu = null;
        }
        document.removeEventListener("click", this.handleClickOutside.bind(this));
    }

    public updateIconPositions(): void {
        this.icons.forEach((icon) => {
            this.positionIcon(icon);
        });
    }

    private extractHostname(url: string): string {
        try {
            const urlObj = new URL(url);
            let hostname = urlObj.hostname;

            if (hostname.startsWith("www.")) {
                hostname = hostname.substring(4);
            }

            return hostname;
        } catch (error) {
            console.warn("Could not parse URL:", url, error);
            return "localhost";
        }
    }

    private async fetchPasswordsWithTimeout(website: string): Promise<PasswordEntry[]> {
        return Promise.race([
            this.passwordManager.getPasswordsForWebsite(website),
            new Promise<PasswordEntry[]>((resolve) => {
                setTimeout(() => {
                    resolve([]);
                }, 3000);
            }),
        ]);
    }

    private calculateIconPosition(element: HTMLInputElement): { top: number; left: number } {
        const rect = element.getBoundingClientRect();

        // Icon size is now 25px (25% larger than 20px)
        const iconSize = 25;
        const padding = 6; // Small padding from the input edge

        // Get computed styles to understand the actual rendered input
        const computedStyle = window.getComputedStyle(element);

        // Calculate the actual content area (excluding borders but including padding)
        const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
        const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;
        const borderLeft = parseFloat(computedStyle.borderLeftWidth) || 0;
        const borderRight = parseFloat(computedStyle.borderRightWidth) || 0;

        const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
        const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
        const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
        const paddingRight = parseFloat(computedStyle.paddingRight) || 0;

        // Calculate the actual content area dimensions
        const contentWidth = rect.width - borderLeft - borderRight;
        const contentHeight = rect.height - borderTop - borderBottom;

        // Calculate the content area position (inside borders)
        const contentLeft = rect.left + borderLeft;
        const contentTop = rect.top + borderTop;
        const contentRight = contentLeft + contentWidth;
        const contentBottom = contentTop + contentHeight;

        // For position: fixed, we use viewport coordinates (no scroll offset needed)
        const top = rect.top + (rect.height - iconSize) / 2;

        // Position icon inside the content area on the right side
        // Account for right padding to avoid overlapping with text
        const minContentWidth = iconSize + padding * 2;
        let left;

        if (contentWidth >= minContentWidth) {
            // Content area is wide enough - position inside, accounting for right padding
            const rightPadding = Math.max(padding, paddingRight);
            // Position from the right edge of the input, accounting for right padding
            left = rect.right - iconSize - rightPadding;

            // Safety check: ensure icon is within the input bounds
            const iconRightEdge = left + iconSize;
            if (left < rect.left) {
                left = rect.left + 2; // Small margin from left edge
            }
            if (iconRightEdge > rect.right) {
                left = rect.right - iconSize - 2; // Small margin from right edge
            }
        } else {
            // Content area is too narrow - position just outside the input
            left = rect.right - iconSize - 2;
        }

        return { top, left };
    }

    private testAndAdjustPosition(icon: ZelfKeyIcon, element: HTMLInputElement): void {
        // After positioning, check if the icon is actually visible and properly positioned
        setTimeout(() => {
            const iconRect = icon.element.getBoundingClientRect();
            const inputRect = element.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(element);

            // Calculate the actual content area (same logic as positioning)
            const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
            const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;
            const borderLeft = parseFloat(computedStyle.borderLeftWidth) || 0;
            const borderRight = parseFloat(computedStyle.borderRightWidth) || 0;

            const contentWidth = inputRect.width - borderLeft - borderRight;
            const contentHeight = inputRect.height - borderTop - borderBottom;
            const contentLeft = inputRect.left + borderLeft;
            const contentTop = inputRect.top + borderTop;
            const contentRight = contentLeft + contentWidth;

            // Check if icon is positioned within reasonable bounds of the input
            const verticalDistance = Math.abs(iconRect.top - inputRect.top);
            const horizontalDistance = Math.abs(iconRect.left - inputRect.right);

            // Allow some tolerance for positioning
            const verticalTolerance = inputRect.height * 0.5; // Half the input height
            const horizontalTolerance = 30; // 30px horizontal tolerance

            if (verticalDistance > verticalTolerance || horizontalDistance > horizontalTolerance) {
                // Icon positioning needs adjustment

                // Reposition the icon
                this.positionIcon(icon);
            }
        }, 100);
    }
}
