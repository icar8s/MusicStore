export interface IToken {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string
}

export type SignInType = {
    client_id: string;
    client_secret: string;
    scope: string;
    grant_type: string;
    password: string;
    username: string;
}

export const storeType = import.meta.env.VITE_APP_SCOPE === "MsStore"? "Music" : "Gamer"