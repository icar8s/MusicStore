import {IPageIndex} from "../../../misc/requestHelpers/pageIndex.ts";
import {MusicProductDetail} from "../../../models/dtos/musicStore/musicProductDetail.ts";
import {MusicProductShort} from "../../../models/dtos/musicStore/musicProductShort.ts";
import {MusicProduct} from "../../../models/dtos/musicStore/musicProduct.ts";
import {MusicProductType} from "../../../models/dtos/enums/musicProductType.ts";
import {IResponseList} from "../../../misc/requestHelpers/IResponseList.ts";
import {IToken} from "../../../models/dtos/token.ts";
import {AxiosResponse} from "axios";

export interface IProductApiManager {
    getProduct: (productId: string) => Promise<AxiosResponse<MusicProductDetail, unknown>>;
    getProducts: (page: IPageIndex) => Promise<AxiosResponse<IResponseList<MusicProductShort>, unknown>>;
    getProductsByType: (type: MusicProductType, page: IPageIndex) => Promise<AxiosResponse<IResponseList<MusicProductShort>, unknown>>;
    create: (product: MusicProduct, token: IToken) => Promise<AxiosResponse<string, unknown>>;
    update: (product: MusicProduct, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
    delete: (productId: string, token: IToken) => Promise<AxiosResponse<unknown, unknown>>;
}