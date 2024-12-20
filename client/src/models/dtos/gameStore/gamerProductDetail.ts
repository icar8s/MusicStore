import {ProductDetail} from "../general/productDetail.ts";
import {GamerProductType} from "../enums/gameProductType.ts";

export type GamerProductDetail = ProductDetail & {
    type: GamerProductType;
}