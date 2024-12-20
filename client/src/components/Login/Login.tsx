import { Input } from "../../shared/input/Input.tsx";
import { Button } from "../../shared/Button/Button.tsx";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {ContactUs} from "../ContactUs/ContactUs.tsx";
import {Register} from "../Register/Register.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {useProductsStore} from "../../stores/products/useProductsStore.ts";
import useAuthStore from "../../stores/autorized/useAuthStore.ts";

export const Login: () => JSX.Element = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login: authLogin } = useAuthStore();
    const {selectedTheme} = useThemeStore();

    const handleLoginClick = async () => {
        try {
            await authLogin(login, password); // Call the login function from AuthStore
            // If login is successful, you can redirect to a protected route or do something else
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    };

    return (
        <div className="contact-us">
            <div className="card login-card">
                <form className="contact-form">
                    <h2>Login</h2>
                    <label>
                        Email
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                    <NavLink
                        className={`${selectedTheme}-theme nav-link login-text`}
                        to={Register.meta.route}>

                        I don't have a account...
                    </NavLink>
                </form>
            </div>
        </div>
    );
};

// Определяем мета-информацию для компонента
Login.meta = {
    route: "login",
    roles: ["admin", "moderator"],
};
