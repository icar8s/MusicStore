import {NavLink} from "react-router-dom";
import styles from "../ContactUs/сontactUs.module.scss";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {RegisterGameStore} from "../Register/Register.tsx";

export const LoginGameStore: ComponentWithMeta  = () => {
    const {selectedTheme} = useThemeStore();

    return (
        <div className={styles["contact-us"]}>
            <div className={`${styles.card} ${styles["login-card"]}`}>
                <form className={styles["contact-form"]}>
                    <h2 className={styles.h2}>Login</h2>
                    <label className={styles["contact-form-label"]}>
                        Email
                        <input
                            type="text"
                            name="name"
                            className={styles["contact-form-input"]}
                            required
                        />
                    </label >
                    <label className={styles["contact-form-label"]}>
                        Password
                        <input
                            type="email"
                            name="email"
                            className={styles["contact-form-input"]}
                            required
                        />
                    </label>
                    <button
                        className={`${styles["contact-form-button-hover"]} ${styles["contact-form-button"]}`}
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
    roles: [""],
};
