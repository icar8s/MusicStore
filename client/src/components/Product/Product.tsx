import {ShortProduct} from "../../models/Product.ts";
import {Base64Image} from "../Base64Image/Base64Image.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import "./product.scss"

interface ProductProps {
    product: ShortProduct
}

export const Product = ({product}: ProductProps) => {

    const {selectedTheme} = useThemeStore();

    return <div
        className={`${selectedTheme}-theme product-wrapper`}
        data-sale={product.sale !== undefined}>
        <span className={`${selectedTheme}-theme product-percentage`}>{product.sale?.percentage} %</span>
        <span className={`${selectedTheme}-theme product-actual-price`}>{product.actualPrice}</span>
        <span className={`${selectedTheme}-theme product-price`}>{product.price}</span>
        <span className={`${selectedTheme}-theme product-name`}>{product.name}</span>
        <Base64Image
            className={`${selectedTheme}-theme product-image`}
            base64String={product.image}/>
    </div>
}