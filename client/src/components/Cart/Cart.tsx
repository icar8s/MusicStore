import React, { useState } from "react";
import { useThemeStore } from "../../stores/theme/useThemeStore";
import { Product } from "../../models/Product";
import "./cart.scss";
import noImage from "../../assets/images/sliderHome/slide1.jpg"

interface CartItem extends Product {
    quantity: number;
}

export const Cart: () => JSX.Element = () => {
    const { selectedTheme } = useThemeStore();

    // Состояние корзины
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Увеличить количество товара
    const increaseQuantity = (productId: string) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Уменьшить количество товара
    const decreaseQuantity = (productId: string) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === productId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // Удаляем из корзины, если количество 0
        );
    };

    // Рассчитать сумму
    const calculateTotal = (price: number, quantity: number) => price * quantity;

    // Рассчитать сумму со скидкой
    const calculateDiscountedTotal = (
        price: number,
        quantity: number,
        discount?: number
    ) => {
        const priceWithDiscount = discount
            ? price - price * (discount / 100)
            : price;
        return priceWithDiscount * quantity;
    };

    return (
        <div className={`${selectedTheme}-theme cart-wrapper cart-all`}>
            <h2>Shopping Cart</h2>
            <table className={`${selectedTheme}-theme cart-table`}>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Total with Discount</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <img
                                src={item.image || noImage}
                                alt={item.name}
                                className="cart-item-image"
                            />
                        </td>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            {item.quantity}
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </td>
                        <td>{item.actualPrice.toFixed(2)} BYN</td>
                        <td>
                            {item.sale ? `${item.sale}%` : "No Discount"}
                        </td>
                        <td>
                            {calculateDiscountedTotal(
                                item.actualPrice,
                                item.quantity,
                                item.sale
                            ).toFixed(2)}{" "}
                            BYN
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

Cart.meta = {
    route: "Cart",
    roles: ["admin", "moderator"],
};