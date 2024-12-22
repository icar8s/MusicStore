import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const NewsGameStore: ComponentWithMeta  = () => {
    return (
        <div>

        </div>
    );
};

NewsGameStore.meta = {
    route: "news",
    roles: ["admin", "moderator"],
};