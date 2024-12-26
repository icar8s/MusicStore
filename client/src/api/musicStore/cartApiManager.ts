import { Cart } from "../../models/dtos/general/cart.ts";
import { IToken } from "../../models/dtos/token.ts";
import {ICartApiManager} from "./interfaces/cartApiManager.ts";
import {getBaseMusicEndpointUrl} from "../../misc/endpointHelper.ts";
import axios from "axios";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";

class CartApiManager implements ICartApiManager {
    getCart = async (token: IToken) => {
        const config = {
            url: getBaseMusicEndpointUrl() + "api/cart",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            }
        }
        try{
            return await axios<Cart<MusicProductShort>>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    addItem = async (itemId: string, token: IToken) => {
        const config = {
            url: getBaseMusicEndpointUrl() + `api/cart/${itemId}`,
            method: 'PUT',
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
    deleteItem = async (itemId: string, token: IToken) => {
        const config = {
            url: getBaseMusicEndpointUrl() + `api/cart/${itemId}`,
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

export const musicCartApiManager = new CartApiManager();