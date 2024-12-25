import { IPageIndex } from "../../misc/requestHelpers/pageIndex.ts";
import { GamerProductType } from "../../models/dtos/enums/gameProductType.ts";
import { GamerProduct } from "../../models/dtos/gameStore/gamerProduct.ts";
import { GamerProductDetail } from "../../models/dtos/gameStore/gamerProductDetail.ts";
import { GamerProductShort } from "../../models/dtos/gameStore/gamerProductShort.ts";
import {IProductApiManager} from "./interfaces/productApiManager.ts";
import {getBaseGamerEndpointUrl} from "../../misc/endpointHelper.ts";
import axios from "axios";
import {IResponseList} from "../../misc/requestHelpers/IResponseList.ts";
import {IToken} from "../../models/dtos/token.ts";

class ProductApiManager implements IProductApiManager {
    getProduct = async (productId: string) => {
        const config = {
            url: getBaseGamerEndpointUrl() + `api/product/${productId}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try{
            return  await axios<GamerProductDetail>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    getProducts = async (page: IPageIndex) => {
        const config = {
            url: getBaseGamerEndpointUrl() + `api/product/page`,
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
            return  await axios<IResponseList<GamerProductShort>>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    getProductsByType = async (type: GamerProductType, page: IPageIndex) => {
        const config = {
            url: getBaseGamerEndpointUrl() + `api/product/page/${type}`,
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
            return  await axios<IResponseList<GamerProductShort>>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    create = async (product: GamerProduct, token: IToken) => {
        const config = {
            url: getBaseGamerEndpointUrl() + "api/product/add",
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
    update = async (product: GamerProduct, token: IToken) => {
        const config = {
            url: getBaseGamerEndpointUrl() + "api/product/update",
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
            url: getBaseGamerEndpointUrl() + `api/product/delete/${productId}`,
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

export const gamerProductApiManager = new ProductApiManager();