import {Cart} from "../../../models/dtos/general/cart.ts";
import {GamerProductShort} from "../../../models/dtos/gameStore/gamerProductShort.ts";

export interface ICartApiManager {
    getCart: () => Promise<Cart<GamerProductShort>>;
    addItem: (itemId: string, amount: number) => Promise<void>;
    deleteItem: (itemId: string) => Promise<void>;
}