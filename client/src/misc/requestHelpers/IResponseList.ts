import {IResult} from "./IResult.ts";

export interface IResponseList<TData> extends Omit<IResult<TData>, 'data'> {
   isSucceeded: boolean;

   data: TData[];

   currentPage: number;

   totalPages: number;

   totalCount: number;

   pageSize: number;

   hasPreviousPage: boolean;

   hasNextPage: boolean;
}

export function isResponseList<TData>(response: IResult<TData> | IResponseList<TData>): response is IResponseList<TData> {
   return (
       Array.isArray(response.data)
   );
}