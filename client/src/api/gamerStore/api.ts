import {ICartApiManager} from "./interfaces/cartApiManager.ts";
import {IProductApiManager} from "./interfaces/productApiManager.ts";
import {gamerCartApiManager} from "./cartApiManager.ts";
import {gamerProductApiManager} from "./productApiManager.ts";

export type GamerApi = {
    cart: ICartApiManager;
    product: IProductApiManager;
}

export const gamerApi: GamerApi = {cart: gamerCartApiManager, product: gamerProductApiManager}