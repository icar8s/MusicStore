import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {useParams} from "react-router-dom";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const ProductDetailGameStore: ComponentWithMeta  = ()  => {
    const { selectedTheme } = useThemeStore();
    const { id } = useParams<{ id: string }>(); // Извлечение id из URL

    console.log(id)

    return (
        <div>
            <div className={`${selectedTheme}-theme product-image-container`}>
               {/* { product.image ? (
                    <Base64Image
                        className={`${selectedTheme}-theme product-image`}
                        base64String={product.image}/>
                ) : (
                    <img
                        className={`${selectedTheme}-theme product-image`}
                        src={noImage} alt={'No Image Available'}/>
                )}*/}
            </div>
            <div className={`${selectedTheme}-theme product-image-sale`}>
               {/* {product.sale ? (
                    <div className="product-price-button">
                        <span className="sale">{product.sale.percentage}%</span>
                        <button className={`${selectedTheme}-theme product-price-button`}>{product.actualPrice} BYN</button>
                    </div>
                ) : (
                    <button className={`${selectedTheme}-theme product-price-button`}>{product.price} BYN</button>
                )}*/}
            </div>
            <div className={`${selectedTheme}-theme product-content`}>
               {/* <span className={`${selectedTheme}-theme product-name`}>{product.name}</span>
                <span className={`${selectedTheme}-theme product-description`}>{product.description}</span>*/}
            </div>
        </div>
    );
};

ProductDetailGameStore.meta = {
    route: `/productDetailGameStore/:id`,
    roles: ["admin", "moderator"]
};