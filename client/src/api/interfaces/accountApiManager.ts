import {RegisterDto} from "../../models/dtos/general/registerDto.ts";

export interface IAccountApiManager {
    getRole: ()=> Promise<string>;
    register: (register: RegisterDto) => Promise<void>;
}