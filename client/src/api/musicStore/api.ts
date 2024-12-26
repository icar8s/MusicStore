import {ICartApiManager} from "./interfaces/cartApiManager.ts";
import {IProductApiManager} from "./interfaces/productApiManager.ts";
import {musicCartApiManager} from "./cartApiManager.ts";
import {musicProductApiManager} from "./productApiManager.ts";

export type MusicApi = {
    cart: ICartApiManager;
    product: IProductApiManager;
}

export const musicApi : MusicApi = {cart: musicCartApiManager, product: musicProductApiManager}