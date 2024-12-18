import {ProductType} from "../models/Product.ts";

export const getProductTypeName = (type: ProductType) => {
    return type.toString()
}

export const getProductsTypeNames = (): string[] => {
    return Object.keys(ProductType).filter(key => isNaN(Number.parseInt(key)))
}