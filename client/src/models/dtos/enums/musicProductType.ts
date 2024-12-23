export enum MusicProductType{
    Guitar,
    Drums,
    Piano,
    Microphone,
    StudioMonitor
}

export type musicProductType = keyof typeof MusicProductType;

export const definedMusicProductKeys: musicProductType[] = Object.keys(MusicProductType)
    .filter(key => isNaN(Number(key)))
    .map(key => key as musicProductType)

export const isDefinedMusicProduct = (predict: string | null | undefined): boolean => {
    if(predict === null || predict === undefined) return false;

    return predict in MusicProductType;
}
