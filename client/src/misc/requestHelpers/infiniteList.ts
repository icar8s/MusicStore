import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {IResponseList} from "./IResponseList.ts";
import {IFiniteList} from "./finiteList.ts";
import {IPageIndex} from "./pageIndex.ts";

export interface IInFiniteList<TData> extends Omit<IFiniteList<TData>, "fetch">{
    fetchNext: () => void;
    fetchPrevious: () => void;
    fetchFirst: () => void;
    fetchPage: (page: IPageIndex) => void;
}

export class InFiniteList<TData> implements IInFiniteList<TData> {
    private _pending: boolean = false;
    private _error?: AxiosError<unknown, unknown> | undefined;
    private _data?: IResponseList<TData>;

    private readonly _config: AxiosRequestConfig<IResponseList<TData>>;
    private readonly _pageSize: number;

    constructor(config: AxiosRequestConfig<IResponseList<TData>>,
                pageSize: number = 10) {
        this._config = config;
        this._pageSize = pageSize;
    }

    get data(): IResponseList<TData> | undefined {
        return this._data;
    }

    set data(value: IResponseList<TData> | undefined) {
        this._data = value;
    }
    get error(): AxiosError<unknown, unknown> | undefined {
        return this._error;
    }

    set error(value: AxiosError<unknown, unknown> | undefined) {
        this._error = value;
    }
    get pending(): boolean {
        return this._pending;
    }

    set pending(value: boolean) {
        this._pending = value;
    }

    fetchPage = (page: IPageIndex) => {
        this._pending = true;
        this._data = undefined;
        this._error = undefined;

        const config = {
            ...this._config,
            params: {
                ...this._config.params,
                page: page,
            },
        };

        axios<IResponseList<TData>>(config)
            .then(response => {
                this._data = response.data;
            })
            .catch(error => {
                this._error = error;
            })
            .finally(() => {
                this._pending = false;
            })
    }

    fetchNext = () => {
        const hasNext = this._data?.hasNextPage ?? true
        const currentPage = this._data?.currentPage ?? 1;

        if(hasNext) {
            this.fetchPage({pageNumber: currentPage + 1, pageSize: this._pageSize});
        }
    }


    fetchPrevious = () => {
        const hasPrevious = this._data?.hasPreviousPage ?? false
        const currentPage = this._data?.currentPage ?? 1;
        if(hasPrevious) {
            this.fetchPage({pageNumber: currentPage - 1, pageSize: this._pageSize});
        }
    }

    fetchFirst = () => {
        this.fetchPage({pageNumber: 1, pageSize: this._pageSize});
    }

}