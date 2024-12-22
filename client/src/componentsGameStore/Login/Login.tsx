import {NavLink} from "react-router-dom";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {RegisterGameStore} from "../Register/Register.tsx";

export const LoginGameStore: ComponentWithMeta  = () => {
    const {selectedTheme} = useThemeStore();

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
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="email"
                            name="email"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        onClick={() => console.log("login")}
                    >
                        Login
                    </button>
                    <NavLink
                        className={`${selectedTheme}-theme nav-link login-text`}
                        to={RegisterGameStore.meta.route}>

                        I don't have a account...
                    </NavLink>
                </form>
            </div>
        </div>
    );
};

// Определяем мета-информацию для компонента
LoginGameStore.meta = {
    route: "LoginGameStore",
    roles: ["admin", "moderator"],
};
