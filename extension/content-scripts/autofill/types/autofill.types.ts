export interface PasswordEntry {
  id: string;
  name: string;
  username?: string;
  website?: string;
  url?: string;
  domain?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FormField {
  element: HTMLInputElement;
  type: 'username' | 'email' | 'password';
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
  type: 'GET_PASSWORDS' | 'DECRYPT_PASSWORD' | 'CREATE_PASSWORD' | 'AUTHENTICATE' | 'OPEN_BIOMETRICS_MODAL' | 'FILL_PASSWORD';
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
