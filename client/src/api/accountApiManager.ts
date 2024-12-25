import { RegisterDto } from "../models/dtos/general/registerDto.ts";
import {IAccountApiManager} from "./interfaces/accountApiManager.ts";
import {getBaseEndpointUrl} from "../misc/endpointHelper.ts";
import axios from "axios";
import {IToken} from "../models/dtos/token.ts";

class AccountApiManager implements IAccountApiManager {
    getRole = async (token: IToken) => {
        const config = {
            url: getBaseEndpointUrl() + "api/account/role",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            }
        }
        try{
            return  await axios<string>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    register= async (register: RegisterDto) => {
        const config = {
            url: getBaseEndpointUrl() + "api/account",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: register
        }

        try{
            return await axios(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
}

export const accountApiManager = new AccountApiManager();