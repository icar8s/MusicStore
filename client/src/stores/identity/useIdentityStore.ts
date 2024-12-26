import {create} from "zustand/index";
import {IToken} from "../../models/dtos/token.ts";


export type IdentityState = {
    role: string;
    token: IToken;
}

const initialState: IdentityState = {
    role: "guest",
    token: {
        access_token: "",
        expires_in: -1,
        refresh_token: "",
        scope: "",
    }
}

export type InitialDispatch = {
    setToken: (token: IToken) => void;
    setRole: (role: string) => void;
}

const useIdentityStore = create<IdentityState & InitialDispatch>((set) => ({
    ...initialState,
    setToken: (token: IToken) => set((state) => ({...state, token: token})),
    setRole: (role: string) => set((state) => ({...state, role: role})),
}));


export { useIdentityStore };