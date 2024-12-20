import {Nav} from "../../shared/nav/Nav.tsx";
import {NavLink} from "react-router-dom";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ProtectedContent} from "../../misc/Protected.tsx";
import {Products} from "../Products/Products.tsx";
import {Login} from "../Login/Login.tsx";
import {Register} from "../Register/Register.tsx";
import {ContactUs} from "../ContactUs/ContactUs.tsx";
import {Home} from "../Home/Home.tsx";
import login from "../../assets/images/sliderHome/login.png"
import korzina from "../../assets/images/sliderHome/korzina.png"
import './navigationNav.scss'
import React from "react";
import {Cart} from "../Cart/Cart.tsx";


export const NavigationNav = () => {
    const {selectedTheme} = useThemeStore();

    return <Nav>
        <section
            className={`${selectedTheme}-theme section-left`}
            data-alignment={"left"}>
            <NavLink
                className={`${selectedTheme}-theme logo`}
                to={Home.meta.route}>

                Gamer Store
            </NavLink>
        </section>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"center"}>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={Home.meta.route}>

                Home
            </NavLink>
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
                className={`${selectedTheme}-theme`}
                to={Cart.meta.route}>
                <img src={korzina}  className={"korzina"} alt="Music Store" />
            </NavLink>

            <NavLink
                className={`${selectedTheme}-theme`}
                to={Login.meta.route}>
                <img src={login} className={"login"} alt="Music Store" />
            </NavLink>
        </section>
    </Nav>
}