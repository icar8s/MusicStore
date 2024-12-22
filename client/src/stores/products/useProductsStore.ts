import {create} from "zustand/index";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";
import {MusicProductDetail} from "../../models/dtos/musicStore/musicProductDetail.ts";
import {IInFiniteList, InFiniteList} from "../../misc/requestHelpers/infiniteList.ts";
import {ISingleItem, SingleItem} from "../../misc/requestHelpers/singleItem.ts";
import {getMusicProductByIdBuilder, getMusicProductPageBuilder} from "./cfg.ts";
import {MusicProductType} from "../../models/dtos/enums/musicProductType.ts";

export type ProductState = {
    shortsProducts: IInFiniteList<MusicProductShort>;
    productDetail: ISingleItem<MusicProductDetail>;
    selectedProductType?: MusicProductType;
};

const initialState: ProductState = {
    shortsProducts: new InFiniteList(getMusicProductPageBuilder),
    productDetail: new SingleItem(getMusicProductByIdBuilder)
}

export type ProductDispatch = {
    selectProductType: (payload: MusicProductType) => void;
}

const useProductsStore = create<ProductState & ProductDispatch>((set) => ({
    ...initialState,
    selectProductType: (payload: MusicProductType) => set((state) => {
        return {
            ...state,
            selectedProductType: state.selectedProductType === payload ? payload : undefined
        };
    }),
}));

export {useProductsStore};