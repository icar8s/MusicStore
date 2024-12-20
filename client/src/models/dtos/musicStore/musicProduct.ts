import {MusicProductType} from "../enums/musicProductType.ts";
import {Product} from "../../Product.ts";

export type MusicProduct = Product & {
    type: MusicProductType;
}