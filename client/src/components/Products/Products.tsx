import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {Panel} from "../../shared/panel/Panel.tsx";
import {useProductsStore} from "../../stores/products/useProductsStore.ts";
import {Product} from "../Product/Product.tsx";
import "./products.scss"
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";

export const Products : ComponentWithMeta = () => {

    const {products, productsForSelect} = useProductsStore();

    const {selectedTheme} = useThemeStore();

    return <div className={`${selectedTheme}-theme products-wrapper`}>
        <div>
            {productsForSelect.map(x=>x.count).join(" ")}
        </div>
        <Panel className={`${selectedTheme}-theme products-container`}>
            {products.map(x => <Product product={x} />)}
        </Panel>
    </div>
}

Products.meta = {
    route: "products",
    roles: ["admin", "moderator"]
}