export class AutofillDataService {
    constructor() {
        this.urlInfo = null;
        this.listeners = [];
        this.setupMessageListener();
    }
    static getInstance() {
        if (!AutofillDataService.instance) {
            AutofillDataService.instance = new AutofillDataService();
        }
        return AutofillDataService.instance;
    }
    setupMessageListener() {
        // Listen for messages from the background script
        if (typeof window !== 'undefined') {
            const messageListener = (event) => {
                // Only listen to messages from the extension
                if (event.source !== window)
                    return;
                if (event.data && event.data.type === 'AUTOFILL_CREATE_PASSWORD_DATA') {
                    console.log('Received autofill data:', event.data.payload);
                    this.setUrlInfo(event.data.payload.urlInfo);
                }
            };
            window.addEventListener('message', messageListener);
        }
    }
    setUrlInfo(urlInfo) {
        console.log('Setting URL info in service:', urlInfo);
        this.urlInfo = urlInfo;
        this.notifyListeners();
    }
    getUrlInfo() {
        return this.urlInfo;
    }
    clearUrlInfo() {
        console.log('Clearing URL info from service');
        this.urlInfo = null;
        this.notifyListeners();
    }
    subscribe(callback) {
        this.listeners.push(callback);
        // Return unsubscribe function
        return () => {
            const index = this.listeners.indexOf(callback);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.urlInfo));
    }
    generateTitleFromUrl(urlInfo) {
        // Generate a friendly title from the URL
        const hostname = urlInfo.hostname;
        const pathname = urlInfo.pathname;
        // Remove 'www.' prefix if present
        const cleanHostname = hostname.replace(/^www\./, '');
        // Capitalize first letter
        const capitalizedHostname = cleanHostname.charAt(0).toUpperCase() + cleanHostname.slice(1);
        // Add path if it's not just '/'
        if (pathname && pathname !== '/') {
            const pathParts = pathname.split('/').filter(part => part.length > 0);
            if (pathParts.length > 0) {
                return `${capitalizedHostname} - ${pathParts[0]}`;
            }
        }
        return capitalizedHostname;
    }
}
//# sourceMappingURL=autofill-data.service.js.map