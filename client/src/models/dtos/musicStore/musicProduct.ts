import {MusicProductType} from "../enums/musicProductType.ts";
import {Product} from "../general/product.ts";

export type MusicProduct = Product & {
    type: MusicProductType;
}