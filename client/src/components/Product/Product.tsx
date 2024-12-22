import {Base64Image} from "../../shared/Base64Image/Base64Image.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import "./product.scss"
import noImage from "../../assets/images/sliderHome/slide1.jpg"
import {NavLink} from "react-router-dom";
import {ProductShort} from "../../models/dtos/general/productShort.ts";

interface ProductProps<TProduct extends ProductShort> {
    product: TProduct;
}

export const Product =<TProduct extends ProductShort, >({ product }: ProductProps<TProduct>) => {
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
                {product.base64Image ? (
                    <Base64Image className={`${selectedTheme}-theme product-image`} base64String={product.base64Image} />
                ) : (
                    <img className={`${selectedTheme}-theme product-image`} src={noImage} alt={'xui'} />
                )}
                <button className={`${selectedTheme}-theme product-price-button`} onClick={() => console.log(product.price)}>
                    {product.price} BYN
                </button>
            </div>
        </div>
    );
};