import {AxiosError, AxiosResponse} from "axios";
import {ModalTitle} from "../../misc/providers/modalProvider.tsx";

export interface IResponseModal{
    error?: AxiosError;
    response?: AxiosResponse;
}

export const ResponseModal = ({error, response}: IResponseModal) => {
    return <div>
        <ModalTitle title={((error?.status ?? response?.status) ?? "").toString()}/>
        {error && <div>
            {error.message}
        </div>}
        {response && <div>
            Удачно
        </div>}
    </div>
}