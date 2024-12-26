import {Cart} from "../../../models/dtos/general/cart.ts";
import {GamerProductShort} from "../../../models/dtos/gameStore/gamerProductShort.ts";
import {IToken} from "../../../models/dtos/token.ts";
import {AxiosResponse} from "axios";

export interface ICartApiManager {
    getCart: (token: IToken) => Promise<AxiosResponse<Cart<GamerProductShort>, unknown>>;
    addItem: (itemId: string, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
    deleteItem: (itemId: string, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
}