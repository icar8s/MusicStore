import {User} from "../../models/dtos/general/user.ts";

export interface IIdentityApiManager {
    signIn: (data: User) => Promise<void>;
}