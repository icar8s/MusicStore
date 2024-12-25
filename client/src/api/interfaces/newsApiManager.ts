import {IPageIndex} from "../../misc/requestHelpers/pageIndex.ts";
import {News} from "../../models/dtos/general/news.ts";
import {IToken} from "../../models/dtos/token.ts";
import {IResponseList} from "../../misc/requestHelpers/IResponseList.ts";
import {AxiosResponse} from "axios";

export interface INewsApiManager {
    getPage: (page: IPageIndex) => Promise<AxiosResponse<IResponseList<News>, unknown>>;
    create: (news: News, token: IToken) => Promise<AxiosResponse<string, unknown>>;
}