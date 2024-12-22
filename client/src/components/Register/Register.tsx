import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import styles from "../ContactUs/сontactUs.module.scss";

export const Register: ComponentWithMeta  = ()  => {

    return (
        <div className={styles["contact-us"]}>
            <div className={`${styles.card} ${styles["login-card"]}`}>
                <form className={styles["contact-form"]}>
                    <h2 className={styles.h2}>Registration</h2>
                    <label className={styles["contact-form-label"]}>
                        Email
                        <input
                            type="text"
                            name="name"
                            className={styles["contact-form-input"]}
                            required
                        />
                    </label>
                    <label className={styles["contact-form-label"]}>
                        Login
                        <input
                            type="text"
                            name="name"
                            className={styles["contact-form-input"]}
                            required
                        />
                    </label>
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
                        type="submit">Registration</button>
                </form>
            </div>
        </div>
    );
}

Register.meta = {
    route: "/register",
    roles: ["admin", "moderator"]
}