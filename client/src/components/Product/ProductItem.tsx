import {Product, ShortProduct} from "../../models/Product.ts";
import {Base64Image} from "../Base64Image/Base64Image.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import "./product.scss"
import noImage from "../../assets/images/sliderHome/slide1.jpg"
import {NavLink} from "react-router-dom";
import React from "react";

interface ProductProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export const ProductItem = ({ product, onAddToCart }: ProductProps) => {
    const { selectedTheme } = useThemeStore();

    return (
        <div className={`${selectedTheme}-theme product-wrapper`} data-sale={product.sale !== undefined}>
            <div className={`${selectedTheme}-theme product-content`}>
                <span className={`${selectedTheme}-theme product-name`}>{product.name}</span>
                <NavLink className={`${selectedTheme}-theme product-learn-more`} to={`/products/${product.id}`}>
                    Learn more &#x279C;
                </NavLink>
                <div className={`${selectedTheme}-theme product-image-background`}></div>
            </div>
            <div className={`${selectedTheme}-theme product-image-container`}>
                {product.image ? (
                    <Base64Image className={`${selectedTheme}-theme product-image`} base64String={product.image} />
                ) : (
                    <img className={`${selectedTheme}-theme product-image`} src={noImage} alt={'xui'} />
                )}
                <button className={`${selectedTheme}-theme product-price-button`} onClick={() => onAddToCart(product)}>
                    {product.actualPrice} BYN
                </button>
            </div>
        </div>
    );
};