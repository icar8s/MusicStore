import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import React, { useState } from "react";
import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { ProductItem } from "../Product/ProductItem.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import { Product } from "../../models/Product.ts";
import "./products.scss";

export const Products : () => JSX.Element = () => {
    const { shortsProducts, productsForSelect } = useProductsStore();
    const { selectedTheme } = useThemeStore();

    // Состояние для корзины
    const [cart, setCart] = useState<Product[]>([]);

    // Функция добавления товара в корзину
    const handleAddToCart = (product: Product) => {
        setCart((prevCart) => {
            const productInCart = prevCart.find((item) => item.id === product.id);
            if (productInCart) {
                // Если товар уже в корзине, увеличиваем его количество
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }
            // Если товара нет в корзине, добавляем его с количеством 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className={`${selectedTheme}-theme products-wrapper products-all`}>
            {/* Отображение количества товаров для выбора */}
            <div>{productsForSelect.map((x) => x.count).join(" ")}</div>

            {/* Панель с товарами */}
            <Panel className={`${selectedTheme}-theme products-container`}>
                {shortsProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart} // Передаем функцию добавления в корзину
                    />
                ))}
            </Panel>
        </div>
    );
};

Products.meta = {
    route: "products",
    roles: ["admin", "moderator"],
};