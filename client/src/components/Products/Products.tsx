import { Panel } from "../../shared/panel/Panel.tsx";
import { useProductsStore } from "../../stores/products/useProductsStore.ts";
import { Product } from "../Product/Product.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import styles from "./products.module.scss";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {useState} from "react";
import {Modal} from "../ModalProducts/ModalProductsCreate.tsx";
import create from "../../assets/images/sliderHome/plus-circle.png"
import change from "../../assets/images/sliderHome/cross-circle.png"
import remove from "../../assets/images/sliderHome/Group 35.png"

export const Products: ComponentWithMeta = () => {
    const { shortsProducts } = useProductsStore();
    const { selectedTheme } = useThemeStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={`${styles.productsWrapper} ${selectedTheme}-theme ${styles["products-all"]}`}>
            <div className="products-container">
                <div className="images-row">
                    <img
                        src={create}
                        alt="Product 1"
                        onClick={handleImageClick}
                    />
                    <img
                        src={change}
                        alt="Product 2"
                        onClick={handleImageClick}
                    />
                    <img
                        src={remove}
                        alt="Product 3"
                        onClick={handleImageClick}
                    />
                </div>

                {/* Модальное окно */}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
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