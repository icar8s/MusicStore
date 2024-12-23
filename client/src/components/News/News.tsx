import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const News: ComponentWithMeta  = () => {
    return (
        <div>
            НЯ пидор
        </div>
    );
};

News.meta = {
    route: "news",
    roles: [""],
}