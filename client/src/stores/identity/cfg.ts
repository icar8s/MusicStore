import {RequestBuilder} from "../../misc/requestBuilder/requestBuilder.ts";
import {AxiosRequestConfig} from "axios";
import {getBaseEndpointUrl} from "../../misc/endpointHelper.ts";
import {RegisterDto} from "../../models/dtos/general/registerDto.ts";

export const getRoleBuilder = new RequestBuilder()
getRoleBuilder.setUrl("api/account/role")

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