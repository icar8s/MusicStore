import {MusicApi} from "./musicStore/api.ts";
import {GamerApi} from "./gamerStore/api.ts";

export type IndexApi = {
    music: MusicApi
    gamer: GamerApi
}

//global pending

export const $api: IndexApi | null = null