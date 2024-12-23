import {ProductShort} from "../general/productShort.ts";
import {MusicProductType} from "../enums/musicProductType.ts";

export type MusicProductShort = ProductShort & {
    type: MusicProductType;
}