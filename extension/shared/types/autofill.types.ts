// Shared types for autofill functionality across background, content scripts, and Angular app

export interface AutofillMessage {
    type:
        | "GET_PASSWORDS"
        | "DECRYPT_PASSWORD"
        | "CREATE_PASSWORD"
        | "AUTHENTICATE"
        | "OPEN_BIOMETRICS_MODAL"
        | "FILL_PASSWORD"
        | "WAIT_FOR_FORM_READY"
        | "FORM_READY"
        | "TEST_MESSAGE"
        | "SYNC_PASSWORDS";
    payload?: any;
    requestId?: string;
    timestamp?: number;
}

export interface AutofillResponse {
    success: boolean;
    data?: any;
    error?: string;
    message?: string;
}

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

export interface DecryptedPasswordData {
    identifier: string;
    metadata: {
        password: string;
        username: string;
    };
    publicData: {
        category: string;
        zelfName: string;
        username: string;
        timestamp: string;
        type: string;
        website: string;
    };
    faceCropBase64: string;
    difficulty: string;
}

export interface MessageSender {
    tab?: {
        id?: number;
        url?: string;
    };
    frameId?: number;
}

export interface SendResponse {
    (response: AutofillResponse): void;
}

export interface AutofillRequest {
    type: AutofillMessage["type"];
    payload?: any;
    requestId: string;
    timestamp: number;
}
