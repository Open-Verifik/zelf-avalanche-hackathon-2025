export interface PasswordEntry {
    id: string;
    name: string;
    url: string;
    size: number;
    timestamp: string;
    publicData: {
        type: string;
        website: string;
        category: string;
        username: string;
        zelfName: string;
        timestamp: string;
        zelfProof: string;
    };
}

export interface FormField {
    element: HTMLInputElement;
    type: "username" | "email" | "password";
    name?: string;
    id?: string;
    placeholder?: string;
}

export interface DetectedForm {
    fields: FormField[];
    form: HTMLFormElement;
    website: string;
}

export interface AutofillMessage {
    type: "GET_PASSWORDS" | "DECRYPT_PASSWORD" | "CREATE_PASSWORD" | "AUTHENTICATE" | "OPEN_BIOMETRICS_MODAL" | "FILL_PASSWORD";
    payload?: any;
}

export interface AutofillResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export interface DecryptedPasswordData {
    username: string;
    password: string;
    website?: string;
    name?: string;
}

export interface ZelfKeyIcon {
    element: HTMLElement;
    field: FormField;
    position: { top: number; left: number };
}

export interface MessageSender {
    tab?: {
        id: number;
        url: string;
    };
    frameId?: number;
}

export interface SendResponse {
    (response: AutofillResponse): void;
}

export interface DecryptionRequest {
    passwordId: string;
    publicData: {
        zelfProof: string;
        title: string;
        website: string;
    };
    fieldId?: string;
    fieldType?: "username" | "email" | "password";
}

export interface DecryptionResult {
    success: boolean;
    data?: DecryptedPasswordData;
    error?: string;
}

export interface UrlInfo {
    hash: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    title: string;
}

export interface TabInfo {
    id: number;
    url: string;
    active?: boolean;
}

export interface MessagePayload {
    website?: string;
    urlInfo?: UrlInfo;
    passwordId?: string;
    publicData?: any;
    fieldId?: string;
    fieldType?: string;
    result?: DecryptionResult;
}
