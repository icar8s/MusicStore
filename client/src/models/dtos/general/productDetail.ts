import {Sale} from "./sale.ts";

export type ProductDetail = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    base64Image: string;
    description: string;
    sale?: Sale
}