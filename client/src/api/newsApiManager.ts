import { IPageIndex } from "../misc/requestHelpers/pageIndex.ts";
import { News } from "../models/dtos/general/news.ts";
import {INewsApiManager} from "./interfaces/newsApiManager.ts";
import {IToken} from "../models/dtos/token.ts";
import {getBaseEndpointUrl} from "../misc/endpointHelper.ts";
import axios from "axios";
import {IResponseList} from "../misc/requestHelpers/IResponseList.ts";
import {IResult} from "../misc/requestHelpers/IResult.ts";

class NewsApiManager implements INewsApiManager {
    getPage = async (page: IPageIndex) => {
        const config = {
            url: getBaseEndpointUrl() + `api/news/news?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };

        try{
            return await axios<IResponseList<News>>(config)
        }catch(error){
            return Promise.reject(error);
        }
    }
    create = async (news: News, token: IToken) => {
        const config = {
            url: getBaseEndpointUrl() + "api/news",
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token.access_token}`
            },
            data: news
        };

        try{
            return await axios<IResult<string>>(config)
        }catch(error){
            return Promise.reject(error);
        }
    }
}

export const newsApiManager = new NewsApiManager();