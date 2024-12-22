import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { Product } from "../Product/Product.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import "./products.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const Products: ComponentWithMeta  = ()  => {
    const { shortsProducts } = useProductsStore();
    const { selectedTheme } = useThemeStore();

    // Состояние для корзины
    //const [cart, setCart] = useState<Product[]>([]);

    // Функция добавления товара в корзину
    /*const handleAddToCart = (product: MusicProductShort) => {
        /!*setCart((prevCart) => {
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
        });*!/
    };*/

    return (
        <div className={`${selectedTheme}-theme products-wrapper products-all`}>
            {/* Отображение количества товаров для выбора */}
            <div></div>

            {/* Панель с товарами */}
            <Panel className={`${selectedTheme}-theme products-container`}>
                {shortsProducts.map((product, index) => (
                    <Product
                        key={index}
                        product={product}
                        //onAddToCart={handleAddToCart}
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