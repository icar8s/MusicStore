import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {useNewsStore} from "../../stores/news/useNewsStore.ts";
import {useModal} from "../../misc/hooks/useModal.ts";
import {useEffect, useState} from "react";
import {IPageIndex} from "../../misc/requestHelpers/pageIndex.ts";
import {useApi} from "../../misc/hooks/useApi.tsx";
import {$api} from "../../api";
import {ProtectedContent} from "../../misc/Protected.tsx";
import create from "../../assets/images/sliderHome/plus-circle.png";
import {NewsModal} from "../../componentsGameStore/News/ModalNews/NewsModal.tsx";
import {Panel} from "../../shared/panel/Panel.tsx";
import {Base64Image} from "../../shared/Base64Image/Base64Image.tsx";

export const News: ComponentWithMeta  = () => {
    const { selectedTheme } = useThemeStore();
    const {addNews} = useNewsStore()
    const {openModal} = useModal();
    const [page, setPage] = useState<IPageIndex>({pageNumber: 1, pageSize: 10})
    const {data, hasNextPage} = useApi({method: $api.general.news.getPage, params: [page]})

    useEffect(() => {
        if(hasNextPage){
            setPage((prevPage) => ({
                ...prevPage,
                pageNumber: prevPage.pageNumber + 1
            }))
        }
    }, [data,hasNextPage]);

    useEffect(() => {
        if(data){
            addNews(data)
        }
    }, [data, addNews]);

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
                            onClick={() => openModal(<NewsModal/>)}
                        />
                    </div>
                </ProtectedContent>
            </div>

            <Panel className={`products-container ${selectedTheme}-theme`}>
                {data?.map((news, index) => (
                    <div key={index} style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "white"
                    }}>
                        <div ><Base64Image style={{width: "200px"}} base64String={news.base64Image} /></div>
                        <div>{news.name}</div>
                        <div>{news.description}</div>
                    </div>
                ))}
            </Panel>
        </div>
    );
};


News.meta = {
    route: "news",
    roles: [""],
}