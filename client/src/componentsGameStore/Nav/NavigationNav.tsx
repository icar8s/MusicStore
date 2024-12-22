import {Nav} from "../../shared/nav/Nav.tsx";
import {NavLink} from "react-router-dom";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import login from "../../assets/images/sliderHome/login.png"
import korzina from "../../assets/images/sliderHome/korzina.png"
import './navigationNav.scss'
import {LoginGameStore} from "../Login/Login.tsx";
import {HomeGameStore} from "../Home/Home.tsx";
import {ProductsGameStore} from "../Products/Products.tsx";
import {ContactUsGameStore} from "../ContactUs/ContactUs.tsx";
import {CartGameStore} from "../Cart/Cart.tsx";


export const NavigationNav = () => {
    const {selectedTheme} = useThemeStore();

    return <Nav>
        <section
            className={`${selectedTheme}-theme section-left`}
            data-alignment={"left"}>
            <NavLink
                className={`${selectedTheme}-theme logo`}
                to={HomeGameStore.meta.route}>

                Game Store
            </NavLink>
        </section>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"center"}>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={HomeGameStore.meta.route}>

                Home
            </NavLink>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={ProductsGameStore.meta.route}>

                Products
            </NavLink>
            <NavLink
                className={`${selectedTheme}-theme nav-link`}
                to={ContactUsGameStore.meta.route}>

                Contact us
            </NavLink>
        </section>
        <section
            className={`${selectedTheme}-theme section`}
            data-alignment={"right"}>

            <NavLink
                className={`${selectedTheme}-theme`}
                to={CartGameStore.meta.route}>
                <img src={korzina}  className={"korzina"} alt="Music Store" />
            </NavLink>

            <NavLink
                className={`${selectedTheme}-theme`}
                to={LoginGameStore.meta.route}>
                <img src={login} className={"login"} alt="Music Store" />
            </NavLink>
        </section>
    </Nav>
}