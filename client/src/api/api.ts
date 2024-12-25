import {IAccountApiManager} from "./interfaces/accountApiManager.ts";
import {INewsApiManager} from "./interfaces/newsApiManager.ts";
import {IIdentityApiManager} from "./interfaces/identityApiManager.ts";
import {accountApiManager} from "./accountApiManager.ts";
import {newsApiManager} from "./newsApiManager.ts";
import {identityApiManager} from "./IdentityApiManager.ts";

export type GeneralApi = {
    account: IAccountApiManager;
    news: INewsApiManager;
    identity: IIdentityApiManager;
}

export const generalApi: GeneralApi = { account: accountApiManager, news: newsApiManager, identity: identityApiManager };