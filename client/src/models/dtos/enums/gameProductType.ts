export enum GamerProductType {
    VideoCard,
    Ssd,
    Tablet,
    RamMemory,
    Laptop,
    Screen,
    Mouse,
    Computer,
}



export type gamerProductType = keyof typeof GamerProductType;

export const definedGamerProductKeys: gamerProductType[] = Object.keys(GamerProductType)
    .filter(key => isNaN(Number(key)))
    .map(key => key as gamerProductType)

export const isDefinedGamerProduct = (predict: string | null | undefined): boolean => {
    if(predict === null || predict === undefined) return false;

    return predict in GamerProductType;
}
