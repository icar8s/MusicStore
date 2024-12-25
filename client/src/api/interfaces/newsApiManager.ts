import {IPageIndex} from "../../misc/requestHelpers/pageIndex.ts";
import {News} from "../../models/dtos/general/news.ts";

export interface INewsApiManager {
    getPage: (page: IPageIndex) => Promise<News[]>;
    create: (news: News) => Promise<string>;
}