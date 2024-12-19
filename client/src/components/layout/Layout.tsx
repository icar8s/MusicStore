import {Outlet} from "react-router-dom";
import {NavigationNav} from "../Nav/NavigationNav.tsx";

const Layout: () => JSX.Element = () => {
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