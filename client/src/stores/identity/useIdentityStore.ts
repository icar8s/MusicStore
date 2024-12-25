import {create} from "zustand/index";
import {IToken, SignInType} from "../../models/dtos/token.ts";
import {getRoleBuilder, signUpConfig} from "./cfg.ts";
import {ISingleItem, SingleItem} from "../../misc/requestHelpers/singleItem.ts";
import axios from "axios";
import {RegisterDto} from "../../models/dtos/general/registerDto.ts";
import {$api} from "../../api";

export type IdentityState = {
    role: ISingleItem<string>;
    token?: IToken;
}

const initialState: IdentityState = {
    role: new SingleItem(getRoleBuilder),
}

export type InitialDispatch = {
    signIn: (payload: SignInType) => void;
    signUp: (payload: RegisterDto) => void;
}

const useIdentityStore = create<IdentityState & InitialDispatch>((set) => ({
    role: initialState.role,
    signIn: async (payload: SignInType) => {
        const token = await $api?.general.identity.signIn(payload);
        set((state) => {
            return {
                ...state,
                token: token,
            }
        })
    },
    signUp: async (payload: RegisterDto) => {
        try{
            await axios<IToken>(signUpConfig(payload))
        }
        catch(error){
            console.error(error)
        }
    }
}));


export { useIdentityStore };