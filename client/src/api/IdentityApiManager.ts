import {IIdentityApiManager} from "./interfaces/identityApiManager.ts";
import {SignInType, storeType} from "../models/dtos/token.ts";
import {getBaseIdentityUrl} from "../misc/endpointHelper.ts";
import axios from "axios";

class IdentityApiManager implements IIdentityApiManager {
    signIn = async (signInData: SignInType) => {
        const encodedData = new URLSearchParams();
        encodedData.append('client_id', signInData.client_id);
        encodedData.append('client_secret', signInData.client_secret);
        encodedData.append('scope', signInData.scope);
        encodedData.append('grant_type', signInData.grant_type);
        encodedData.append('password', signInData.password);
        encodedData.append('username', signInData.username);

        const config = {
            url: getBaseIdentityUrl(),
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Store-Type": storeType
            },
            data: encodedData.toString(),
        };

        try{
            const token = await axios(config)

            token.data = {
                data: token.data,
                IsSucceeded: true
            }
            return Promise.resolve(token);
        }
        catch(error){
            return Promise.reject(error);
        }
    };
}

export const identityApiManager = new IdentityApiManager();