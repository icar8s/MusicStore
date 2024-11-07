import {Nav} from "../../shared/nav/Nav.tsx";
import {NavLink} from "react-router-dom";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ThemeSelector} from "../ThemeSelector/ThemeSelector.tsx";

export const NavigationNav = () => {
    const {selectedTheme} = useThemeStore();

    return <Nav>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"left"}>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={""}>

                Home
            </NavLink>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={""}>

                Products
            </NavLink>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={""}>

                Contact us
            </NavLink>
        </section>

        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"right"}>

            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={""}>

                Login</NavLink>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={""}>

                Register
            </NavLink>
            <ThemeSelector />
        </section>
    </Nav>
}