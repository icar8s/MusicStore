export enum ProductType {
    Guitar
}

export type ShortProduct = {
    name: string,
    image: string,
    price: number,
    actualPrice: number,
    sale?: Sale,
    type: ProductType,
}

export type Product = ShortProduct & {
    id: string,
    remaining: number,
    description: string,
}

export type Sale = {
    id: string,
    percentage: number,
}