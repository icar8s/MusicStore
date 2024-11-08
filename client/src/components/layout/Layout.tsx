import {Outlet} from "react-router-dom";
import {NavigationNav} from "../Nav/NavigationNav.tsx";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

const Layout: ComponentWithMeta = () => {
    return <div>
        <NavigationNav />

        <Outlet />
    </div>
}

Layout.meta = {
    route: "/",
    roles: ["admin", "moderator"]
}

export default Layout;