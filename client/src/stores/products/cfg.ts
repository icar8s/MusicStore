import {IResult} from "../../misc/requestHelpers/IResult.ts";
import {MusicProductDetail} from "../../models/dtos/musicStore/musicProductDetail.ts";
import {IResponseList} from "../../misc/requestHelpers/IResponseList.ts";
import {MusicProductShort} from "../../models/dtos/musicStore/musicProductShort.ts";
import {RequestBuilder} from "../../misc/requestBuilder/requestBuilder.ts";

export const getMusicProductByIdBuilder = new RequestBuilder<IResult<MusicProductDetail>>()
getMusicProductByIdBuilder.setUrl("api/product/{id}")

export const getMusicProductPageBuilder = new RequestBuilder<IResponseList<MusicProductShort>>()
getMusicProductPageBuilder.setUrl("api/product/page")
