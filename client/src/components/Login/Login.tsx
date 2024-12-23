import {NavLink} from "react-router-dom";
import {Register} from "../Register/Register.tsx";
import styles from "../ContactUs/сontactUs.module.scss";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {useIdentityStore} from "../../stores/identity/useIdentityStore.ts";
import {Button} from "../../shared/button/Button.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {SignInType} from "../../models/dtos/token.ts";
import {Input} from "../../shared/input/Input.tsx";

export const Login: ComponentWithMeta  = () => {
    const {selectedTheme} = useThemeStore();
    const {signIn} = useIdentityStore();

    const [name, setName] = useState("admin");
    const [password, setPassword] = useState("!QAZ2wsx");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const signInData: SignInType = {
            client_id: "Api",
            client_secret: "client_secret",
            scope: "api offline_access",
            grant_type: "password",
            password: password,
            username: name,
        }
        signIn(signInData)
    };

    return (
        <div className={styles["contact-us"]}>
            <div className={`${styles.card} ${styles["login-card"]}`}>
                <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                    <h2 className={styles.h2}>Login</h2>
                    <label className={styles["contact-form-label"]}>
                        Name
                        <Input
                            type="text"
                            name="email"
                            className={styles["contact-form-input"]}
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </label>
                    <label className={styles["contact-form-label"]}>
                        Password
                        <Input
                            type="password"
                            name="password"
                            className={styles["contact-form-input"]}
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </label>
                    <Button
                        className={`${styles["contact-form-button-hover"]} ${styles["contact-form-button"]}`}
                        type="submit"
                        onClick={() => console.log("login")}
                    >
                        Login
                    </Button>
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
