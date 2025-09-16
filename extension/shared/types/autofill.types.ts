export type MessageType =
    | "AUTHENTICATE"
    | "AUTOFILL_CREATE_PASSWORD_DATA"
    | "CLOSE_POPUP"
    | "CREATE_PASSWORD"
    | "DECRYPT_PASSWORD"
    | "DECRYPTION_RESULT_FROM_POPOUT"
    | "DECRYPTION_RESULT"
    | "FILL_PASSWORD"
    | "FORM_READY"
    | "GET_PASSWORDS"
    | "OPEN_BIOMETRICS_MODAL"
    | "OPEN_PASSWORD_DECRYPTOR"
    | "PASSWORD_DECRYPTOR_DATA"
    | "POPUP_READY"
    | "RETRIEVAL_ERROR"
    | "SEND_DECRYPTION_DATA_TO_POPOUT"
    | "SERVICE_WORKER_READY"
    | "STORAGE_ERROR"
    | "SYNC_PASSWORDS"
    | "TEST_MESSAGE"
    | "WAIT_FOR_FORM_READY";

export interface AutofillMessage {
    type: MessageType;
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
    type: MessageType;
    payload?: any;
    requestId: string;
    timestamp: number;
}
