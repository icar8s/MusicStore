import {Base64Image} from "../Base64Image/Base64Image.tsx";
import noImage from "../../assets/images/sliderHome/slide1.jpg"
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {useProductsStore} from "../../stores/products/useProductsStore.ts";
import {useParams} from "react-router-dom";

export const ProductDetails  = ()  => {
    const { selectedTheme } = useThemeStore();
    const { id } = useParams<{ id: string }>(); // Извлечение id из URL
    const {products}  = useProductsStore();

    const product = products.find((item) => item.id === id);
    console.log(id)
    console.log(product.actualPrice)
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div className={`${selectedTheme}-theme product-image-container`}>
                { product.image ? (
                    <Base64Image
                        className={`${selectedTheme}-theme product-image`}
                        base64String={product.image}/>
                ) : (
                    <img
                        className={`${selectedTheme}-theme product-image`}
                        src={noImage} alt={'No Image Available'}/>
                )}
            </div>
            <div className={`${selectedTheme}-theme product-image-sale`}>
                {product.sale ? (
                    <div className="product-price-button">
                        <span className="sale">{product.sale.percentage}%</span>
                        <button className={`${selectedTheme}-theme product-price-button`}>{product.actualPrice} BYN</button>
                    </div>
                ) : (
                    <button className={`${selectedTheme}-theme product-price-button`}>{product.price} BYN</button>
                )}
            </div>
            <div className={`${selectedTheme}-theme product-content`}>
                <span className={`${selectedTheme}-theme product-name`}>{product.name}</span>
                <span className={`${selectedTheme}-theme product-description`}>{product.description}</span>
            </div>
        </div>
    );
};

ProductDetails.meta = {
    route: `/products/:id`,
    roles: ["admin", "moderator"]
};