import { Panel } from "../../shared/panel/Panel.tsx";
import { Product } from "../../shared/Product/Product.tsx";
import { useThemeStore } from "../../stores/theme/useThemeStore.ts";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import create from "../../assets/images/sliderHome/plus-circle.png"
import {ProductModal} from "./ModalProducts/ProductModal.tsx";
import {ProtectedContent} from "../../misc/Protected.tsx";
import {useModal} from "../../misc/hooks/useModal.ts";
import {useApi} from "../../misc/hooks/useApi.tsx";
import {$api} from "../../api";
import {useEffect, useState} from "react";
import {IPageIndex} from "../../misc/requestHelpers/pageIndex.ts";
import {useProductsStore} from "../../stores/products/useProductsStore.ts";

export const Products: ComponentWithMeta  = ()  => {
    const { selectedTheme } = useThemeStore();
    const {addMusicProducts} = useProductsStore()
    const {openModal} = useModal();
    const [page, setPage] = useState<IPageIndex>({pageNumber: 0, pageSize: 10})
    const {data, hasNextPage} = useApi({method: $api.music.product.getProducts, params: [page]})

    useEffect(() => {
        if(hasNextPage){
            setPage((prevPage) => ({
                ...prevPage,
                pageNumber: prevPage.pageNumber + 1
            }))
        }
    }, [data, hasNextPage]);

    useEffect(() => {
        if(data){
            addMusicProducts(data)
        }
    }, [data, addMusicProducts]);

    return (
        <div className={`products-wrapper ${selectedTheme}-theme`}>
            <div className="products-container">
                <ProtectedContent roles={"admin"}>
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

            <Panel className={`products-container ${selectedTheme}-theme`}>
                {data?.map((product, index) => (
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