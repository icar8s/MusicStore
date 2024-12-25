import {GamerProductDetail} from "../../../models/dtos/gameStore/gamerProductDetail.ts";
import {IPageIndex} from "../../../misc/requestHelpers/pageIndex.ts";
import {GamerProductType} from "../../../models/dtos/enums/gameProductType.ts";
import {GamerProduct} from "../../../models/dtos/gameStore/gamerProduct.ts";
import {GamerProductShort} from "../../../models/dtos/gameStore/gamerProductShort.ts";

export interface IProductApiManager {
    getProduct: (productId: string) => Promise<GamerProductDetail>;
    getProducts: (page: IPageIndex) => Promise<GamerProductShort[]>;
    getProductsByType: (type: GamerProductType, page: IPageIndex) => Promise<GamerProductShort[]>;
    create: (product: GamerProduct) => Promise<string>;
    update: (product: GamerProduct) => Promise<void>;
    delete: (productId: string) => Promise<void>;
}