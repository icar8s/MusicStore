import "./cart.scss";

export const Cart  = ()  => {
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