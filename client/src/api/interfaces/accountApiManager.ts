import {RegisterDto} from "../../models/dtos/general/registerDto.ts";
import {IToken} from "../../models/dtos/token.ts";
import {AxiosResponse} from "axios";
import {IResult} from "../../misc/requestHelpers/IResult.ts";

export interface IAccountApiManager {
    getRole: (token: IToken)=> Promise<AxiosResponse<IResult<string>, unknown>>;
    register: (register: RegisterDto) => Promise<AxiosResponse<IResult<unknown>, unknown>>;
}