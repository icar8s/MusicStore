import {create} from "zustand/index";
import {GamerProductShort} from "../../models/dtos/gameStore/gamerProductShort.ts";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";


export type ProductState = {
    gamerProducts: GamerProductShort[];
    musicProducts: MusicProductShort[];
};

const initialState: ProductState = {
    gamerProducts: [],
    musicProducts: [],
}

export type ProductDispatch = {
    addGamerProducts: (products: GamerProductShort[]) => void;
    addMusicProducts: (products: MusicProductShort[]) => void;
}

const useProductsStore = create<ProductState & ProductDispatch>((set) => ({
    ...initialState,
    addGamerProducts: (products: GamerProductShort[]) => set((state) => ({...state, gamerProducts: [...state.gamerProducts, ...products]})),
    addMusicProducts: (products: MusicProductShort[]) => set((state) => ({...state, musicProducts: [...state.musicProducts, ...products]})),
}));

export {useProductsStore};