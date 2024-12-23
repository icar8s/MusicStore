import {MusicProductType} from "../enums/musicProductType.ts";
import {ProductDetail} from "../general/productDetail.ts";

export type MusicProductDetail = ProductDetail & {
    type: MusicProductType;
}