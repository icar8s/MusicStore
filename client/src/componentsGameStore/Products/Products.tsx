import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import "./products.module.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {useModal} from "../../misc/providers/ModalProvider.tsx";
import styles from "../../components/Products/products.module.scss";
import {ProtectedContent} from "../../misc/Protected.tsx";
import create from "../../assets/images/sliderHome/plus-circle.png";
import {ProductModal} from "./ModalProducts/ProductModal.tsx";
import {Product} from "../../components/Product/Product.tsx";

export const ProductsGameStore: ComponentWithMeta  = ()  => {
    const { shortGamerProducts} = useProductsStore();
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
                                display: "",
                                cursor: "pointer"
                            }}
                            src={create}
                            alt="Product 1"
                            onClick={() => openModal(<ProductModal/>)}
                        />
                    </div>
                </ProtectedContent>
            </div>

            <Panel className={`${styles.productsContainer} ${selectedTheme}-theme`}>
                {shortGamerProducts.dataResult?.data?.map((product, index) => (
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

ProductsGameStore.meta = {
    route: "ProductsGameStore",
    roles: [""],
};