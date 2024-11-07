enum DefinedThemes {
    Basic,
    Christmas
}

export type definedThemes = keyof typeof DefinedThemes;

export const definedThemesKeys: definedThemes[] = Object.keys(DefinedThemes)
    .filter(key => isNaN(Number(key)))
    .map(key => key as definedThemes)

export const isDefinedThemes = (predict: string | null | undefined): boolean => {
    if(predict === null || predict === undefined) return false;

    return predict in DefinedThemes;
}
