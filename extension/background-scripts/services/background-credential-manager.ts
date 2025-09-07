import { BrowserApiUtil } from './browser-api-util';

export interface PasswordEntry {
  id: string;
  website?: string;
  domain?: string;
  url?: string;
  name?: string;
  username?: string;
  publicData?: {
    type: string;
    website?: string;
    username?: string;
  };
}

export interface DecryptedPasswordData {
  metadata: {
    username: string;
    password: string;
  };
}

export interface WalletData {
  ethAddress?: string;
  name?: string;
  publicData?: {
    zelfName?: string;
  };
}

export class BackgroundCredentialManager {
  private static instance: BackgroundCredentialManager;
  private zelfKeyJWT: string | null = null;
  private zelfKeyJWTExpiry: number | null = null;
  private readonly API_BASE_URL = 'https://keys-api.zelf.world'; // ZelfKey API URL

  public static getInstance(): BackgroundCredentialManager {
    if (!BackgroundCredentialManager.instance) {
      BackgroundCredentialManager.instance = new BackgroundCredentialManager();
    }
    return BackgroundCredentialManager.instance;
  }

  constructor(private browserApi?: BrowserApiUtil) {
    this.loadJWTFromStorage();
  }

  /**
   * Load JWT from storage (replicating Angular service behavior)
   */
  private async loadJWTFromStorage(): Promise<void> {
    try {
      if (this.browserApi?.has("storage")) {
        const result = await (this.browserApi.storage as any).local.get(['zelfKeyJWT', 'zelfKeyJWTExpiry']);
        this.zelfKeyJWT = result.zelfKeyJWT || null;
        this.zelfKeyJWTExpiry = result.zelfKeyJWTExpiry || null;
      }
    } catch (error) {
      console.error('Error loading JWT from storage:', error);
    }
  }

  /**
   * Save JWT to storage (replicating Angular service behavior)
   */
  private async saveJWTToStorage(): Promise<void> {
    try {
      if (this.browserApi?.has("storage")) {
        await (this.browserApi.storage as any).local.set({
          zelfKeyJWT: this.zelfKeyJWT,
          zelfKeyJWTExpiry: this.zelfKeyJWTExpiry
        });
      }
    } catch (error) {
      console.error('Error saving JWT to storage:', error);
    }
  }

  /**
   * Get the current JWT token if valid (replicating getZelfKeyJWT from Angular service)
   */
  public getZelfKeyJWT(): string | null {
    if (this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() < this.zelfKeyJWTExpiry) {
      return this.zelfKeyJWT;
    }

    // Clear expired token
    this.zelfKeyJWT = null;
    this.zelfKeyJWTExpiry = null;
    return null;
  }

  /**
   * Clear the JWT token (replicating clearZelfKeyJWT from Angular service)
   */
  public clearZelfKeyJWT(): void {
    this.zelfKeyJWT = null;
    this.zelfKeyJWTExpiry = null;
    this.saveJWTToStorage();
  }

  /**
   * Check if user is authenticated
   */
  public isAuthenticated(): boolean {
    return !!this.getZelfKeyJWT();
  }

  /**
   * Initialize ZelfKey session (replicating initZelfKeySession from Angular service)
   */
  public async initZelfKeySession(): Promise<any> {
    // Check if we have a valid cached JWT token
    if (this.zelfKeyJWT && this.zelfKeyJWTExpiry && Date.now() < this.zelfKeyJWTExpiry) {
      return { data: { token: this.zelfKeyJWT } };
    }

    const { wallet } = await this.getAllWalletsFromStorage();

    if (!wallet?.ethAddress) {
      console.error('No wallet found in storage');
      return null;
    }

    const response = await this.makeApiCall('POST', '/api/sessions', {
      address: wallet.ethAddress,
      identifier: wallet.name,
    });

    // Cache the JWT token with expiry (24 hours)
    if (response?.data?.token) {
      this.zelfKeyJWT = response.data.token;
      this.zelfKeyJWTExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
      this.saveJWTToStorage();
    }

    return response;
  }

  /**
   * Get all wallets from storage (replicating getAllWalletsFromStorage from Angular service)
   */
  private async getAllWalletsFromStorage(): Promise<{ wallet: WalletData | null; wallets: WalletData[] }> {
    try {
      if (!this.browserApi?.has("storage")) {
        return { wallet: null, wallets: [] };
      }

      const result = await (this.browserApi.storage as any).local.get(['wallet', 'wallets']);
      const wallet = result.wallet || {};
      const wallets = result.wallets || [];

      if (!wallet?.ethAddress) {
        if (!wallets.length) return { wallet, wallets: [] };
        // Set first wallet as current if no current wallet
        const firstWallet = wallets[0];
        await (this.browserApi.storage as any).local.set({ wallet: firstWallet });
        return { wallet: firstWallet, wallets };
      }

      return { wallet, wallets };
    } catch (error) {
      console.error('Error getting wallets from storage:', error);
      return { wallet: null, wallets: [] };
    }
  }

  /**
   * List stored passwords from IPFS (replicating listStoredPasswords from Angular service)
   */
  public async listStoredPasswords(): Promise<any> {
    const jwt = this.getZelfKeyJWT();

    if (!jwt) {
      // Try to initialize session if no JWT available
      await this.initZelfKeySession();
      const newJwt = this.getZelfKeyJWT();
      if (!newJwt) {
        throw new Error("Unable to authenticate with ZelfKey API");
      }
    }

    return this.makeApiCall('GET', '/api/zelf-key/list?category=password');
  }

  /**
   * Get passwords for a specific website (wrapper for listStoredPasswords with filtering)
   */
  public async getPasswords(website: string): Promise<PasswordEntry[]> {
    try {
      console.log('Getting passwords for website:', website);
      
      const rawResponse = await this.listStoredPasswords();
      console.log('Raw response from listStoredPasswords:', rawResponse);
      
      // Handle different response formats
      const data = rawResponse.data || rawResponse || [];
      console.log('Extracted data:', data);
      
      // Transform the raw password data to match PasswordEntry interface
      const passwords: PasswordEntry[] = data
        .filter((password: any) => {
          console.log('Checking password:', password.name, 'type:', password.publicData?.type);
          return password.publicData?.type === 'website_password';
        })
        .filter((password: any) => {
          // Filter by website if provided
          if (!website) return true;
          
          const targetDomain = website.replace(/^https?:\/\//, '').replace(/^www\./, '');
          const passwordDomain = password.publicData?.website ? new URL(password.publicData.website).hostname : undefined;
          
          console.log('Comparing domains - target:', targetDomain, 'password:', passwordDomain);
          
          return passwordDomain === targetDomain || 
                 password.publicData?.website?.includes(targetDomain) ||
                 password.publicData?.website === targetDomain;
        });

      console.log('Filtered passwords for website:', website, passwords);
      return passwords;
    } catch (error) {
      console.error('Error getting passwords:', error);
      return [];
    }
  }

  /**
   * Retrieve/decrypt a stored password (replicating retrievePassword from Angular service)
   */
  public async retrievePassword(payload: any): Promise<any> {
    const jwt = this.getZelfKeyJWT();

    if (!jwt) {
      // Try to initialize session if no JWT available
      await this.initZelfKeySession();
      const newJwt = this.getZelfKeyJWT();
      if (!newJwt) {
        throw new Error("Unable to authenticate with ZelfKey API");
      }
    }

    return this.makeApiCall('POST', '/api/zelf-key/retrieve', payload);
  }

  /**
   * Decrypt a password (wrapper for retrievePassword)
   */
  public async decryptPassword(passwordId: string): Promise<DecryptedPasswordData | null> {
    try {
      const response = await this.retrievePassword({ id: passwordId });
      
      if (response?.data) {
        return response.data as DecryptedPasswordData;
      }

      return null;
    } catch (error) {
      console.error('Error decrypting password:', error);
      return null;
    }
  }

  /**
   * Make API call with authentication (replicating HttpWrapperService behavior)
   */
  private async makeApiCall(method: string, endpoint: string, data?: any): Promise<any> {
    const jwt = this.getZelfKeyJWT();
    if (!jwt) {
      throw new Error('No valid JWT token available');
    }

    const url = `${this.API_BASE_URL}${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    };

    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Store a new password
   */
  public async storePassword(passwordData: any): Promise<boolean> {
    try {
      // Ensure we have a valid session
      await this.initZelfKeySession();
      const jwt = this.getZelfKeyJWT();
      if (!jwt) {
        console.error('Failed to initialize session');
        return false;
      }

      const response = await this.makeApiCall('POST', '/api/zelf-key/store/password', passwordData);
      return !!response?.data;
    } catch (error) {
      console.error('Error storing password:', error);
      return false;
    }
  }
}
