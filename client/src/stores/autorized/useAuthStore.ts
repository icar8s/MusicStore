
import AuthService from "../../services/AuthServices/AuthServices.ts";
import {AuthActions} from "../../models/response/AuthResponse.ts";
import {create} from "zustand";

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    expires_in: number | null;
    token_type: string | null;
}

const useAuthStore = create<AuthState & AuthActions>((set) => ({
    accessToken: null,
    refreshToken: null,
    expires_in: null,
    token_type: null,

    login: async (username: string, password: string) => {
        try {
            const response = await AuthService.login(username, password);
            set({
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
                expires_in: response.data.expires_in,
                token_type: response.data.token_type,
            });
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    },
}));

export default useAuthStore;