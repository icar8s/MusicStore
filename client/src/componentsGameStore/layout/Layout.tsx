import {Outlet} from "react-router-dom";
import {NavigationNav} from "../Nav/NavigationNav.tsx";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

const LayoutGameStore: ComponentWithMeta = () => {
    return <div>
        <NavigationNav />
        <Outlet />
    </div>
}

LayoutGameStore.meta = {
    route: "/",
    roles: ["admin", "moderator"]
}

export default LayoutGameStore;