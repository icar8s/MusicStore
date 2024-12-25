import {ProductShort} from "./productShort.ts";

export type Cart<TProduct extends ProductShort> = {
    products: TProduct[];
}