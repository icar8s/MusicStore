import { GamerProductShort } from "../../models/dtos/gameStore/gamerProductShort.ts";
import { Cart } from "../../models/dtos/general/cart.ts";
import { IToken } from "../../models/dtos/token.ts";
import {ICartApiManager} from "./interfaces/cartApiManager.ts";
import axios from "axios";
import {getBaseGamerEndpointUrl} from "../../misc/endpointHelper.ts";

class CartApiManager implements ICartApiManager {
    getCart = async (token: IToken) => {
        const config = {
            url: getBaseGamerEndpointUrl() + "api/cart",
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access_token}`
            }
        }
        try{
            return  await axios<Cart<GamerProductShort>>(config)
        }
        catch(error){
            return Promise.reject(error);
        }
    }
    addItem = async (itemId: string, token: IToken) => {
        const config = {
            url: getBaseGamerEndpointUrl() + `api/cart/${itemId}`,
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
            url: getBaseGamerEndpointUrl() + `api/cart/${itemId}`,
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

export const gamerCartApiManager = new CartApiManager();
