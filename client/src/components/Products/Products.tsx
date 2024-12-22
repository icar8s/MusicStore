import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { Product } from "../Product/Product.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import styles from "./products.module.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const Products: ComponentWithMeta = () => {
    const { shortsProducts } = useProductsStore();
    const { selectedTheme } = useThemeStore();

    return (
        <div className={`${styles.productsWrapper} ${selectedTheme}-theme`}>
            {/* Отображение количества товаров для выбора */}
            <div className={styles["products-all"]}>

            </div>

            {/* Панель с товарами */}
            <Panel className={`${styles.productsContainer} ${selectedTheme}-theme`}>
                {shortsProducts.dataResult?.data?.map((product, index) => (
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