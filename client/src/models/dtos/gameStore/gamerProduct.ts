import {Product} from "../../Product.ts";
import {GamerProductType} from "../enums/gameProductType.ts";

export type GamerProduct = Product & {
    type: GamerProductType;
}