export function useHandleServerResponse<TData>(
    callback: (data: TData) => void,
    error?: (error: Error) => void,
){
    return {
        callback,
        ...error
    }
}