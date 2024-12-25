import {IAccountApiManager} from "../interfaces/accountApiManager.ts";
import {ICartApiManager} from "./interfaces/cartApiManager.ts";
import {IProductApiManager} from "./interfaces/productApiManager.ts";
import {INewsApiManager} from "../interfaces/newsApiManager.ts";
import {IIdentityApiManager} from "../interfaces/identityApiManager.ts";

export type GamerApi = {
    account: IAccountApiManager;
    cart: ICartApiManager;
    product: IProductApiManager;
    news: INewsApiManager;
    identity: IIdentityApiManager;
}