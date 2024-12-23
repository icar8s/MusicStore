import {MusicProductType} from "../models/dtos/enums/musicProductType.ts";
import {GamerProductType} from "../models/dtos/enums/gameProductType.ts";

export function getProductTypeName<Type extends MusicProductType | GamerProductType>(type: Type): string {
    return type.toString()
}

export function getProductsTypeNames<Type extends MusicProductType | GamerProductType>(type: Type): string[] {
    return Object.keys(type).filter(key => isNaN(Number.parseInt(key)))
}