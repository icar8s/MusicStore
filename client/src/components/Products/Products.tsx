import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { Product } from "../Product/Product.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import styles from "./products.module.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {Modal} from "../ModalProducts/ModalProductsCreate.tsx";
import create from "../../assets/images/sliderHome/plus-circle.png"
import change from "../../assets/images/sliderHome/cross-circle.png"
import remove from "../../assets/images/sliderHome/Group 35.png"
import {useModal} from "../../misc/providers/ModalProvider.tsx";

export const Products: ComponentWithMeta = () => {
    const { shortMusicProducts } = useProductsStore();
    const { selectedTheme } = useThemeStore();
    const {openModal} = useModal();

    return (
        <div className={`${styles.productsWrapper} ${selectedTheme}-theme ${styles["products-all"]}`}>
            <div className="products-container">
                <div className="images-row">
                    <img
                        src={create}
                        alt="Product 1"
                        onClick={()=> openModal(<Modal/>)}
                    />
                    <img
                        src={change}
                        alt="Product 2"
                        onClick={()=> openModal(<Modal/>)}
                    />
                    <img
                        src={remove}
                        alt="Product 3"
                        onClick={()=> openModal(<Modal/>)}
                    />
                </div>
            </div>

            {/* Панель с товарами */}
            <Panel className={`${styles.productsContainer} ${selectedTheme}-theme`}>
                {shortMusicProducts.dataResult?.data?.map((product, index) => (
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