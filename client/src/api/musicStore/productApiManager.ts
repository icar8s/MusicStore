import { IPageIndex } from "../../misc/requestHelpers/pageIndex.ts";
import {IProductApiManager} from "./interfaces/productApiManager.ts";
import axios from "axios";
import {IResponseList} from "../../misc/requestHelpers/IResponseList.ts";
import {IToken} from "../../models/dtos/token.ts";
import {MusicProductDetail} from "../../models/dtos/musicStore/musicProductDetail.ts";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";
import {MusicProductType} from "../../models/dtos/enums/musicProductType.ts";
import {MusicProduct} from "../../models/dtos/musicStore/musicProduct.ts";
import {getBaseMusicEndpointUrl} from "../../misc/endpointHelper.ts";

class ProductApiManager implements IProductApiManager {
    getProduct = async (productId: string) => {
        const config = {
            url: getBaseMusicEndpointUrl() + `api/product/${productId}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try{
            return  await axios<MusicProductDetail>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }

    getProducts = async (page: IPageIndex) => {
        const config = {
            url: getBaseMusicEndpointUrl() + `api/product/page`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                pageNumber: page.pageNumber,
                pageSize: page.pageSize,
            }
        }
        try{
            return  await axios<IResponseList<MusicProductShort>>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    getProductsByType = async (type: MusicProductType, page: IPageIndex) => {
        const config = {
            url: getBaseMusicEndpointUrl() + `api/product/page/${type}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                pageNumber: page.pageNumber,
                pageSize: page.pageSize,
            }
        }
        try{
            return  await axios<IResponseList<MusicProductShort>>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    create = async (product: MusicProduct, token: IToken) => {
        const config = {
            url: getBaseMusicEndpointUrl() + "api/product/add",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            },
            data: product
        }

        try{
            return  await axios<string>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    update = async (product: MusicProduct, token: IToken) => {
        const config = {
            url: getBaseMusicEndpointUrl() + "api/product/update",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            },
            data: product
        }

        try{
            return await axios<boolean>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    delete = async (productId: string, token: IToken) => {
        const config = {
            url: getBaseMusicEndpointUrl() + `api/product/delete/${productId}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            }
        }

        try{
            return await axios<boolean>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
}

export const musicProductApiManager = new ProductApiManager();