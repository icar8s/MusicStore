import {IPageIndex} from "../../../misc/requestHelpers/pageIndex.ts";
import {MusicProductDetail} from "../../../models/dtos/musicStore/musicProductDetail.ts";
import {MusicProductShort} from "../../../models/dtos/musicStore/musicProductShort.ts";
import {MusicProduct} from "../../../models/dtos/musicStore/musicProduct.ts";
import {MusicProductType} from "../../../models/dtos/enums/musicProductType.ts";

export interface IProductApiManager {
    getProduct: (productId: string) => Promise<MusicProductDetail>;
    getProducts: (page: IPageIndex) => Promise<MusicProductShort[]>;
    getProductsByType: (type: MusicProductType, page: IPageIndex) => Promise<MusicProductShort[]>;
    create: (product: MusicProduct) => Promise<string>;
    update: (product: MusicProduct) => Promise<void>;
    delete: (productId: string) => Promise<void>;
}