import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import "./products.module.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {ProductGameStore} from "../Product/Product.tsx";
import {useEffect} from "react";

export const ProductsGameStore: ComponentWithMeta  = ()  => {
    const { shortMusicProducts, selectedGamerProductType} = useProductsStore();
    const { selectedTheme } = useThemeStore();

    useEffect(() => {
        if(selectedGamerProductType){
            shortMusicProducts.requestBuilder.addOrSetQueryParam({name: "type", value: selectedGamerProductType.toString()})
            shortMusicProducts.fetchFirst()
        }
    }, [selectedGamerProductType]);

    useEffect(() => {
        shortMusicProducts.fetchFirst()
    }, []);

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
                {shortMusicProducts.dataResult?.data?.map((product, index) => (
                    <ProductGameStore
                        key={index}
                        product={product}
                        //onAddToCart={handleAddToCart}
                    />
                ))}
            </Panel>
        </div>
    );
};

ProductsGameStore.meta = {
    route: "ProductsGameStore",
    roles: ["admin", "moderator"],
};