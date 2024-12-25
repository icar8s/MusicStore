import {Cart} from "../../../models/dtos/general/cart.ts";
import {MusicProductShort} from "../../../models/dtos/musicStore/musicProductShort.ts";

export interface ICartApiManager {
    getCart: () => Promise<Cart<MusicProductShort>>;
    addItem: (itemId: string, amount: number) => Promise<void>;
    deleteItem: (itemId: string) => Promise<void>;
}