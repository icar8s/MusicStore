import {musicApi, MusicApi} from "./musicStore/api.ts";
import {gamerApi, GamerApi} from "./gamerStore/api.ts";
import {generalApi, GeneralApi} from "./api.ts";

export type IndexApi = {
    music: MusicApi
    gamer: GamerApi
    general: GeneralApi
}

//global pending

export const $api: IndexApi = {
    music: musicApi,
    gamer: gamerApi,
    general: generalApi,
}