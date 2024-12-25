import {NavLink} from "react-router-dom";
import styles from "../ContactUs/сontactUs.module.scss";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {RegisterGameStore} from "../Register/Register.tsx";
import {useApi} from "../../misc/hooks/useApi.tsx";
import {$api} from "../../api";
import {FormEvent, useEffect, useState} from "react";
import {SignInType} from "../../models/dtos/token.ts";
import {useIdentityStore} from "../../stores/identity/useIdentityStore.ts";

export const LoginGameStore: ComponentWithMeta  = () => {
    const {selectedTheme} = useThemeStore();
    const [signInData, setSignInData] = useState<SignInType>({
        client_secret: "client_secret",
        client_id: "Api",
        scope: "api",
        grant_type: "password",
        password: "",
        username: ""
    })

    const {token: t, setToken, setRole} = useIdentityStore();

    const {data: token, reFetch: signIn} = useApi({method: $api.general.identity.signIn, params:[signInData], auto: false})
    const {data: role, reFetch: getRole} = useApi({method: $api.general.account.getRole, params: [token ?? t], auto: false})

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        signIn()
    }

    useEffect(() => {
        if(token){
            setToken(token)
            getRole()
        }
    }, [token]);

    useEffect(() => {
       if(role){
           setRole(role)
       }
    }, [role]);

    return (
        <div className={styles["contact-us"]}>
            <div className={`${styles.card} ${styles["login-card"]}`}>
                <form
                    onSubmit={handleSubmit}
                    className={styles["contact-form"]}>
                    <h2 className={styles.h2}>Login</h2>
                    <label className={styles["contact-form-label"]}>
                        Email
                        <input
                            type="text"
                            name="name"
                            value={signInData.username}
                            onChange={(event) => setSignInData((prevState) => ({...prevState, username: event.target?.value ?? prevState.username}))}
                            className={styles["contact-form-input"]}
                            required
                        />
                    </label >
                    <label className={styles["contact-form-label"]}>
                        Password
                        <input
                            value={signInData.password}
                            onChange={(event) => setSignInData((prevState) => ({...prevState, password: event.target?.value ?? prevState.password}))}
                            type="password"
                            name="password"
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
