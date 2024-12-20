import {Sale} from "./sale.ts";

export type ProductDetail = {
    name: string;
    price: number;
    quantity: number;
    base64Image: string;
    description: string;
    sale?: Sale
}