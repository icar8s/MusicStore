import {ProductType} from "./Product.ts";

export type ProductForSelect = {
    type: ProductType;
    count: number;
    enabled: boolean;
}