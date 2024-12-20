import {ProductShort} from "../general/productShort.ts";
import {GamerProductType} from "../enums/gameProductType.ts";

export type GamerProductShort = ProductShort & {
    type: GamerProductType;
}