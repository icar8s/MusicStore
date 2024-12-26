import {useCallback, useEffect, useState} from "react";
import {AxiosError, AxiosResponse} from "axios";
import {IResult} from "../requestHelpers/IResult.ts";
import {isResponseList} from "../requestHelpers/IResponseList.ts";
import {useModal} from "./useModal.ts";
import {PendingModal} from "../../shared/pendingModal/PendingModal.tsx";
import {ResponseModal} from "../../shared/responseModal/ResponseModal.tsx";

export interface IUseApi<TParams extends unknown[], TData> {
    method: (...params: TParams) => Promise<AxiosResponse<IResult<TData>, unknown>>;
    params: TParams,
    auto?: boolean;
}

export const useApi = <TParams extends unknown[], TData>(
        {method, params, auto = true}: IUseApi<TParams, TData>
) => {

    const [data, setData] = useState<TData | undefined>(undefined);
    const [error, setError] = useState<AxiosError | undefined>(undefined);
    const [pending, setPending] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(0);
    const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
    const [hasNextPage, setHasNextPage] = useState<boolean>(false);
    const {openModal, closeModal} = useModal()

    const reFetch = useCallback(() => {
        setPending(true);
        openModal(<PendingModal />)
        method(...params)
            .then((response) => {
                if(isResponseList(response.data)){
                    setCurrentPage(response.data.currentPage);
                    setTotalPages(response.data.totalCount);
                    setPageSize(response.data.pageSize);
                    setTotalCount(response.data.totalCount);
                    setHasPreviousPage(response.data.hasPreviousPage);
                    setHasNextPage(response.data.hasNextPage);
                }
                closeModal()
                openModal(<ResponseModal response={response}/>)
                setData(response.data.data);
            })
            .catch((err) => {
                closeModal()
                openModal(<ResponseModal error={err}/>)
                setError(err as AxiosError);
            })
            .finally(() => {
                setPending(false);
            })
    },[method, ...params])

    useEffect(() => {
        if(auto){
            reFetch();
        }
    }, [method, ...params]);

    return {
        currentPage,
        totalPages,
        totalCount,
        pageSize,
        hasPreviousPage,
        hasNextPage,
        reFetch,
        data,
        error,
        pending,
    }
}