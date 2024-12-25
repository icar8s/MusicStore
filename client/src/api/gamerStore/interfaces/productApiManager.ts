import {GamerProductDetail} from "../../../models/dtos/gameStore/gamerProductDetail.ts";
import {IPageIndex} from "../../../misc/requestHelpers/pageIndex.ts";
import {GamerProductType} from "../../../models/dtos/enums/gameProductType.ts";
import {GamerProduct} from "../../../models/dtos/gameStore/gamerProduct.ts";
import {GamerProductShort} from "../../../models/dtos/gameStore/gamerProductShort.ts";
import {IResponseList} from "../../../misc/requestHelpers/IResponseList.ts";
import {IToken} from "../../../models/dtos/token.ts";
import {AxiosResponse} from "axios";

export interface IProductApiManager {
    getProduct: (productId: string) => Promise<AxiosResponse<GamerProductDetail, unknown>>;
    getProducts: (page: IPageIndex) => Promise<AxiosResponse<IResponseList<GamerProductShort>, unknown>>;
    getProductsByType: (type: GamerProductType, page: IPageIndex) => Promise<AxiosResponse<IResponseList<GamerProductShort>, unknown>>;
    create: (product: GamerProduct, token: IToken) => Promise<AxiosResponse<string, unknown>>;
    update: (product: GamerProduct, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
    delete: (productId: string, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
}