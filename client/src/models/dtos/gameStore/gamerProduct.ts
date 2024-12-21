import {GamerProductType} from "../enums/gameProductType.ts";
import {Product} from "../general/product.ts";

export type GamerProduct = Product & {
    type: GamerProductType;
}