import {Sale} from "./sale.ts";

export type ProductShort = {
    id: string;
    name: string;
    price: number;
    base64Image: string;
    sale?: Sale
}