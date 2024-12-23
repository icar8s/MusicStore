import {create} from "zustand/index";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";
import {MusicProductDetail} from "../../models/dtos/musicStore/musicProductDetail.ts";
import {IInFiniteList, InFiniteList} from "../../misc/requestHelpers/infiniteList.ts";
import {ISingleItem, SingleItem} from "../../misc/requestHelpers/singleItem.ts";
import {
    getGamerProductByIdBuilder,
    getGamerProductPageBuilder,
    getMusicProductByIdBuilder,
    getMusicProductPageBuilder
} from "./cfg.ts";
import {MusicProductType} from "../../models/dtos/enums/musicProductType.ts";
import {GamerProductShort} from "../../models/dtos/gameStore/gamerProductShort.ts";
import {GamerProductDetail} from "../../models/dtos/gameStore/gamerProductDetail.ts";
import {GamerProductType} from "../../models/dtos/enums/gameProductType.ts";
import {MusicProduct} from "../../models/dtos/musicStore/musicProduct.ts";
import {GamerProduct} from "../../models/dtos/gameStore/gamerProduct.ts";

export type ProductState = {
    shortMusicProducts: IInFiniteList<MusicProductShort>;
    productMusicDetail: ISingleItem<MusicProductDetail>;
    selectedMusicProductType?: MusicProductType;
    shortGamerProducts: IInFiniteList<GamerProductShort>;
    productGamerProducts: ISingleItem<GamerProductDetail>;
    selectedGamerProductType?: GamerProductType;
};

const initialState: ProductState = {
    shortMusicProducts: new InFiniteList(getMusicProductPageBuilder),
    productMusicDetail: new SingleItem(getMusicProductByIdBuilder),
    shortGamerProducts: new InFiniteList(getGamerProductPageBuilder),
    productGamerProducts: new SingleItem(getGamerProductByIdBuilder)
}

export type ProductDispatch = {
    selectMusicProductType: (payload: MusicProductType) => void;
    selectGamerProductType: (payload: GamerProductType) => void;
    createMusicProduct: (payload: MusicProduct, token: string) => void;
    updateMusicProduct: (payload: MusicProduct, token: string) => void;
    createGamerProduct: (payload: GamerProduct, token: string) => void;
    updateGamerProduct: (payload: GamerProduct, token: string) => void;
}

const useProductsStore = create<ProductState & ProductDispatch>((set) => ({
    ...initialState,
    selectMusicProductType: (payload: MusicProductType) => set((state) => {
        return {
            ...state,
            selectedProductType: state.selectedMusicProductType === payload ? payload : undefined
        };
    }),
    selectGamerProductType: (payload: GamerProductType) => set((state) => {
        return {
            ...state,
            selectedProductType: state.selectedGamerProductType === payload ? payload : undefined
        };
    }),
    createMusicProduct: async (payload: MusicProduct, token: string) => {
        console.log(payload, token);
    },
    updateMusicProduct: async (payload: MusicProduct, token: string) => {
        console.log(payload, token);
    },
    createGamerProduct: async (payload: GamerProduct, token: string) => {
        console.log(payload, token);
    },
    updateGamerProduct: async (payload: GamerProduct, token: string) => {
        console.log(payload, token);
    }
}));

export {useProductsStore};