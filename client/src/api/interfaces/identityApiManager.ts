import {IToken, SignInType} from "../../models/dtos/token.ts";
import {IResult} from "../../misc/requestHelpers/IResult.ts";
import {AxiosResponse} from "axios";

export interface IIdentityApiManager {
    signIn: (signInData: SignInType) => Promise<AxiosResponse<IResult<IToken>, unknown>>;
}