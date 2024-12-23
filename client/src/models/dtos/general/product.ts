import {Sale} from "./sale.ts";

export type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    base64Image: string;
    description: string;
    sale?: Sale;
    percentage: number;
}