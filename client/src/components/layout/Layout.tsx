import {Outlet} from "react-router-dom";
import {NavigationNav} from "../Nav/NavigationNav.tsx";

export const Layout = () => {
    return <div>
        <NavigationNav />
        <Outlet />
    </div>
}