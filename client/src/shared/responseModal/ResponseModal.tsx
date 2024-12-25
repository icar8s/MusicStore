import {AxiosError, AxiosResponse} from "axios";

export interface IResponseModal{
    error?: AxiosError;
    response?: AxiosResponse;
}

export const ResponseModal = ({error, response}: IResponseModal) => {
    return <div>{error?.status ?? response?.status}</div>
}