import {create} from "zustand/index";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";
import {MusicProductDetail} from "../../models/dtos/musicStore/musicProductDetail.ts";

export type ProductState = {
    shortsProducts: MusicProductShort[];
    product: MusicProductDetail | null;
};

const initialState: ProductState = {
    shortsProducts: [],
    product: null,
}

type SetProductsAction = {
    type: "SET_MUSIC_PRODUCTS";
    payload: MusicProductShort[];
}

type CombinedMusicProductsAction = SetProductsAction

const reducer =
    (state: ProductState, action: CombinedMusicProductsAction): ProductState => {

    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
};

const useProductsStore = create<ProductState>((set) => ({
    ...initialState,
    dispatch: (action: CombinedMusicProductsAction) => set((state) => reducer(state, action))
}));

export { useProductsStore };