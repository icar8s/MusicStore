import {Nav} from "../../shared/nav/Nav.tsx";
import {NavLink} from "react-router-dom";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ThemeSelector} from "../ThemeSelector/ThemeSelector.tsx";
import {ProtectedContent} from "../../misc/Protected.tsx";
import {Products} from "../Products/Products.tsx";
import {Login} from "../Login/Login.tsx";
import {Register} from "../Register/Register.tsx";
import {AdminPanel} from "../AdminPanel/AdminPanel.tsx";
import {ModerationPanel} from "../ModerationPanel/ModerationPanel.tsx";
import {ContactUs} from "../ContactUs/ContactUs.tsx";
import Layout from "../layout/Layout.tsx";
import {Home} from "../Home/Home.tsx";
import logo from './logo/logo.jpg';
import './navigationNav.scss'


export const NavigationNav = () => {
    const {selectedTheme} = useThemeStore();

    return <Nav>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"left"}>
            <img
                src={logo}
                alt="Logo"
                className={`${selectedTheme}-theme logo`}
            />
        </section>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"center"}>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={Home.meta.route}>

                Home
            </NavLink>
            <ProtectedContent scope={["admin", "moderator"]}>
                <NavLink
                    className={`${selectedTheme}-theme nav-link`}
                    to={AdminPanel.meta.route}>

                    Admin Panel
                </NavLink>
            </ProtectedContent>
            <ProtectedContent scope={["admin", "moderator"]}>
                <NavLink
                    className={`${selectedTheme}-theme nav-link`}
                    to={ModerationPanel.meta.route}>

                    Moderation Panel
                </NavLink>
            </ProtectedContent>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={Products.meta.route}>

                Products
            </NavLink>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={ContactUs.meta.route}>

                Contact us
            </NavLink>
        </section>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"right"}>

            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={Login.meta.route}>

                Login
            </NavLink>

            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={Register.meta.route}>

                Register
            </NavLink>
            <ThemeSelector/>
        </section>
    </Nav>
}