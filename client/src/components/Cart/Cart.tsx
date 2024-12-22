import "./сart.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const Cart: ComponentWithMeta  = ()  => {
    return (
        <div className="cart-all cart-wrapper">
            PWNZ
        </div>
    );
};

Cart.meta = {
    route: "Cart",
    roles: ["admin", "moderator"],
};