import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { Product } from "../Product/Product.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import styles from "./products.module.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import create from "../../assets/images/sliderHome/plus-circle.png"
import {useModal} from "../../misc/providers/ModalProvider.tsx";
import {ProductModal} from "../../componentsGameStore/Products/ModalProducts/ProductModal.tsx";
import {ProtectedContent} from "../../misc/Protected.tsx";

export const Products: ComponentWithMeta = () => {
    const { shortMusicProducts} = useProductsStore();
    const { selectedTheme } = useThemeStore();
    const {openModal} = useModal();

    return (
        <div className={`${styles.productsWrapper} ${selectedTheme}-theme ${styles["products-all"]}`}>
            <div className="products-container">
                <ProtectedContent roles={""}>
                    <div
                        style={{
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                        }}
                        className="images-row">
                        <img
                            style={{
                                position: "absolute",
                                top: "auto",
                                left: "auto",
                                right: "20px",
                                bottom: "50px",
                                width: "50px",
                                display: ""
                            }}
                            src={create}
                            alt="Product 1"
                            onClick={() => openModal(<ProductModal/>)}
                        />
                    </div>
                </ProtectedContent>
            </div>

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
    roles: [""],
};