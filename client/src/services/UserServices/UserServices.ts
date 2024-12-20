import { AxiosResponse } from "axios";

import { IUser } from "../../models/userModels/IUser";
import $api from "../../api/autorized.ts";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/users");
    }
}