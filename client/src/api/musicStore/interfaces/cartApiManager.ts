import {Cart} from "../../../models/dtos/general/cart.ts";
import {MusicProductShort} from "../../../models/dtos/musicStore/musicProductShort.ts";
import {IToken} from "../../../models/dtos/token.ts";
import {AxiosResponse} from "axios";

export interface ICartApiManager {
    getCart: (token: IToken) => Promise<AxiosResponse<Cart<MusicProductShort>, unknown>>;
    addItem: (itemId: string, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
    deleteItem: (itemId: string, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
}