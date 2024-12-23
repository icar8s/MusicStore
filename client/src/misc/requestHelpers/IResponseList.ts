export interface IResponseList<TData> {
   isSucceeded: boolean;

   data: TData[];

   currentPage: number;

   totalPages: number;

   totalCount: number;

   pageSize: number;

   hasPreviousPage: boolean;

   hasNextPage: boolean;
}