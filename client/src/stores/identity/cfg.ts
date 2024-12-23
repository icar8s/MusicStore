import {RequestBuilder} from "../../misc/requestBuilder/requestBuilder.ts";
import {SignInType, storeType} from "../../models/dtos/token.ts";
import {AxiosRequestConfig} from "axios";
import {getBaseEndpointUrl, getBaseIdentityUrl} from "../../misc/endpointHelper.ts";
import {RegisterDto} from "../../models/dtos/general/registerDto.ts";

export const getRoleBuilder = new RequestBuilder()
getRoleBuilder.setUrl("api/account/role")

export const signInConfig = (signInData: SignInType): AxiosRequestConfig  => {
    const encodedData = new URLSearchParams();
    encodedData.append('client_id', signInData.client_id);
    encodedData.append('client_secret', signInData.client_secret);
    encodedData.append('scope', signInData.scope);
    encodedData.append('grant_type', signInData.grant_type);
    encodedData.append('password', signInData.password);
    encodedData.append('username', signInData.username);

    return {
        url: getBaseIdentityUrl(),
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Store-Type": storeType
        },
        data: encodedData.toString(), // Convert the data to a URL-encoded string
    };
}

export const signUpConfig = (signUpData: RegisterDto): AxiosRequestConfig => {

    return {
        url: getBaseEndpointUrl() + "api/account",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: signUpData
    }
}