import axios, {AxiosError} from "axios";
import {IResponseList} from "./IResponseList.ts";
import {IRequestBuilder} from "../requestBuilder/requestBuilder.ts";

export interface IFiniteList<TData> {
    pending: boolean;
    error?: AxiosError<unknown, unknown> | undefined;
    dataResult?: IResponseList<TData>;
    requestBuilder: IRequestBuilder<IResponseList<TData>>
    fetch:()=>void;
}

export class FiniteList<TData> implements IFiniteList<TData> {
    private _pending: boolean = false;
    private _error?: AxiosError<unknown, unknown>;
    private _data?: IResponseList<TData> = undefined;

    private readonly _requestBuilder: IRequestBuilder<IResponseList<TData>>

    constructor(requestBuilder: IRequestBuilder<IResponseList<TData>>) {
        this._requestBuilder = requestBuilder;
    }

    public get requestBuilder() {
        return this._requestBuilder;
    }

    public get pending() {
        return this._pending;
    }

    private set pending(value: boolean) {
        this._pending = value;
    }

    get dataResult(): IResponseList<TData> | undefined {
        return this._data;
    }

    private set dataResult(value: IResponseList<TData> | undefined) {
        this._data = value;
    }

    get error(): AxiosError<unknown, unknown> | undefined {
        return this._error;
    }

    private set error(value: AxiosError<unknown, unknown> | undefined) {
        this._error = value;
    }

    fetch = () => {
        this._pending = true;
        this.error = undefined;
        this._data = undefined;
        axios<IResponseList<TData>>(this._requestBuilder.build())
            .then(response => {
                this.dataResult = response.data;
            })
            .catch(error => {
                this.error = error;
            })
            .finally(() => {
                this.pending = false;
            })
    };
}
