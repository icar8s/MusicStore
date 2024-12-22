import "./cart.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const CartGameStore: ComponentWithMeta  = ()  => {
    return (
        <div className="cart-all cart-wrapper">
            PWNZ
        </div>
    );
};

CartGameStore.meta = {
    route: "CartGameStore",
    roles: ["admin", "moderator"],
};