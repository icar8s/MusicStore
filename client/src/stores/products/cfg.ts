import {RequestBuilder} from "../../misc/requestBuilder/requestBuilder.ts";

export const getMusicProductByIdBuilder = new RequestBuilder()
getMusicProductByIdBuilder.setUrl("api/product/{id}")

export const getMusicProductPageBuilder = new RequestBuilder()
getMusicProductPageBuilder.setUrl("api/product/page")

export const getGamerProductByIdBuilder = new RequestBuilder()
getGamerProductByIdBuilder.setUrl("api/product/{id}")

export const getGamerProductPageBuilder = new RequestBuilder()
getGamerProductPageBuilder.setUrl("api/product/page")

