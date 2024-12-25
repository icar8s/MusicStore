import {RegisterDto} from "../../models/dtos/general/registerDto.ts";
import {IToken} from "../../models/dtos/token.ts";
import {AxiosResponse} from "axios";

export interface IAccountApiManager {
    getRole: (token: IToken)=> Promise<AxiosResponse<string, unknown>>;
    register: (register: RegisterDto) => Promise<AxiosResponse<unknown, unknown>>;
}