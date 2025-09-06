import { PasswordManager } from "./password-manager";
export class UIOverlay {
    constructor() {
        this.icons = new Map();
        this.currentMenu = null;
        this.currentField = null;
        this.passwordManager = new PasswordManager();
        this.setupStyles();
        // Listen for decryption results from popout
        this.setupDecryptionResultListener();
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
        return password.publicData.username || "No username";
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
        // Always open biometrics popout for password decryption
        // The JWT session is just for the API, but we still need biometric verification
        await this.openBiometricsPopout(password);
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
    async openBiometricsPopout(password) {
        try {
            console.log("Storing password decryption data for popup:", password.id);
            // Send message to background script to store decryption data
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
                    },
                });
                console.log("Response from background script:", response);
                if (response?.success) {
                    // Popup should open automatically, wait for it to be ready and send data
                    await this.waitForPopoutAndSendData(password);
                }
                else {
                    console.error("Failed to open popup:", response);
                }
            }
            else {
                console.error("Chrome runtime not available");
            }
        }
        catch (error) {
            console.error("Error storing password decryption data:", error);
        }
    }
    async waitForPopoutAndSendData(password) {
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
                        },
                    });
                    if (response?.success) {
                        console.log("Decryption data sent to popout successfully");
                        return;
                    }
                }
                catch (error) {
                    // Popout not ready yet, continue waiting
                }
                // Wait 500ms before retrying
                await new Promise((resolve) => setTimeout(resolve, 500));
                retries++;
            }
            console.error("Timeout waiting for popout to be ready");
        }
        catch (error) {
            console.error("Error waiting for popout and sending data:", error);
        }
    }
    setupDecryptionResultListener() {
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
    handleDecryptionResult(result) {
        if (result.success && result.data && this.currentField) {
            // Fill the field with the decrypted data
            this.fillField(this.currentField, result.data);
        }
        else if (!result.success) {
            console.error("Decryption failed:", result.error);
            // Could show an error message to the user
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
//# sourceMappingURL=ui-overlay.js.map