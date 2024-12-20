import axios, { AxiosResponse } from "axios";

import { AuthResponse } from "../../models/response/AuthResponse";

import $api from "../../api/autorized.ts";
import $login from "../../api/TokenApi.ts";

const CLIENT_ID = "Api";
const CLIENT_SECRET = "client_secret";
const SCOPE = "api";
const GRANT_TYPE = "password";

export default class AuthService {
    static async login(
        username: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        const credentials = {
            username,
            password,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            scope: SCOPE,
            grant_type: GRANT_TYPE,
        };

        try {
            return await $login.post<AuthResponse>("", credentials);
        } catch (error) {
            console.error("An error occurred during login:", error);
            throw error; // Перебрасываем ошибку, чтобы её можно было обработать в вызывающем коде
        }
    }

    static async registration(
        username: string,
        password: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/Profile/create", { username, password });
    }

    static async logout(): Promise<axios.AxiosResponse<any>> {
        return $api.post("/logout");
    }
}