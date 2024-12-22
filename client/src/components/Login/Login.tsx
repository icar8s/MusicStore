import {NavLink} from "react-router-dom";
import {Register} from "../Register/Register.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";

export const Login  = ()  => {
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
