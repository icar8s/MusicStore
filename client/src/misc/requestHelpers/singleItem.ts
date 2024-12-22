import axios, {AxiosError} from "axios";
import {IResult} from "./IResult.ts";
import {IRequestBuilder} from "../requestBuilder/requestBuilder.ts";

export interface ISingleItem<TData> {
    dataResult?: IResult<TData>;
    pending: boolean;
    error?: AxiosError<unknown, unknown> | undefined;
    fetch: (id: string) => void;
}

export class SingleItem<TData> implements ISingleItem<TData> {
    private _data?: IResult<TData>;
    private _pending: boolean = false;
    private _error?: AxiosError<unknown, unknown> | undefined;
    private readonly _requestBuilder: IRequestBuilder<IResult<TData>>

    constructor(requestBuilder: IRequestBuilder<IResult<TData>>) {
        this._requestBuilder = requestBuilder;
    }

    get error(): AxiosError<unknown, unknown> | undefined {
        return this._error;
    }

    private set error(value: AxiosError<unknown, unknown> | undefined) {
        this._error = value;
    }

    get pending(): boolean {
        return this._pending;
    }

    private set pending(value: boolean) {
        this._pending = value;
    }

    get dataResult(): IResult<TData> | undefined {
        return this._data;
    }

    private set dataResult(value: IResult<TData> | undefined) {
        this._data = value;
    }

    fetch = (id: string) => {
        this._pending = true;
        this.error = undefined;
        this._data = undefined;

        this._requestBuilder.addOrSetQueryParam({name: id, value: id})

        axios<IResult<TData>>(this._requestBuilder.build())
            .then(response => {
                this.dataResult = response.data;
            })
            .catch(error => {
                this.error = error as AxiosError;
            })
            .finally(() => this._pending = false);
    }
}