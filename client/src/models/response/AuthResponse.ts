export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    expires_in: number;
    token_type: string;
}

export interface AuthActions {
    // eslint-disable-next-line no-unused-vars
    login: (username: string, password: string) => Promise<void>;
}