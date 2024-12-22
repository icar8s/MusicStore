import {AxiosRequestConfig} from "axios";
import {getBaseEndpointUrl} from "../endpointHelper.ts";

export interface IRequestBuilder<TType> {
    setMethod: (method: string | undefined) => void;

    addOrSetParam: (param?: {name: string, value: string}) => void;
    clearParams: () => void;
    removeParam: (paramName: string | undefined) => void;

    addOrSetQueryParam: (param?: {name: string, value: string}) => void;
    clearQueryParams: () => void;
    removeQueryParam: (paramName: string | undefined) => void;

    setToken:(token: string | undefined) => void;
    clearToken: () => void;
    setUrl:(url: string) => void;

    build:(baseEndpoint?: string) => AxiosRequestConfig<TType>;
}

export class RequestBuilder<TType> implements IRequestBuilder<TType> {
    private _method: string = "GET";
    private _token: string | undefined;
    private _params: Record<string, string> = {};
    private _queryParams: Record<string, string> = {};
    private _url: string = "";

    setMethod = (method: string | undefined) => {
        if(method){
            this._method = method;
        }
    }

    addOrSetParam = (param?: { name: string; value: string; }) => {
        if (param) {
            this._params[param.name] = param.value;
        }
    }

    clearParams= () => {
        this._params = {};
    }

    removeParam = (paramName: string | undefined) => {
        if (paramName && this._params[paramName] !== undefined) {
            delete this._params[paramName];
        }
    }

    addOrSetQueryParam = (param?: { name: string; value: string; }) => {
        if (param) {
            this._queryParams[param.name] = param.value;
        }
    }

    clearQueryParams = () => {
        this._queryParams = {};
    }

    removeQueryParam = (paramName: string | undefined) => {
        if (paramName && this._queryParams[paramName] !== undefined) {
            delete this._queryParams[paramName];
        }
    }

    setToken = (token: string | undefined) => {
        if(token){
            this._token = token;
        }
    }

    clearToken = () => {
        this._token = undefined;
    }

    setUrl = (url: string) => {
        this._url = url;
    }

    build = (baseEndpoint?: string) :AxiosRequestConfig<TType> =>{

        let url = baseEndpoint ?? getBaseEndpointUrl() + this._url;
        for (const param in this._queryParams) {
            url = url.replace(`{${param}}`, this._queryParams[param]);
        }
        console.log(this._params)
        const config: AxiosRequestConfig<TType> = {
            method: this._method,
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            params: this._params,
        };

        if (this._token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${this._token}`,
            };
        }

        return config;
    }

}