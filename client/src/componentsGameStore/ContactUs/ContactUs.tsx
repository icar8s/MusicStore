import styles from './сontactUs.module.scss';
import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const ContactUsGameStore: ComponentWithMeta = () => {
    return (
        <div className={styles["contact-us"]}>
            <h1 className={styles.h1}>CONTACT US.</h1>
            <div className={styles["store-hours"]}>
                <h2 className={styles.h2}>Store hours</h2>
                <p>WELCOME BACK</p>
                <p>USERS!</p>
                <h2 className={styles.h2}>CONTACTS</h2>
                <p>pavkap20@gmail.com</p>
                <p>+375 (29) 121-50-11</p>
            </div>
            <div className={styles.card}>
                <form className={styles["contact-form"]}>
                    <h2 className={styles.h2}>Contact Form</h2>
                    <label className={styles["contact-form-label"]}>
                        NAME
                        <input
                            className={styles["contact-form-input"]}
                            type="text"
                            name="name"
                            required
                        />
                    </label>
                    <label>
                        EMAIL
                        <input
                            className={styles["contact-form-input"]}
                            type="email"
                            name="email"
                            required
                        />
                    </label>
                    <label>
                        MESSAGE
                        <input
                            className={styles["contact-form-input"]}
                            type="MESSAGE"
                            name="MESSAGE"
                            required
                        />
                    </label>
                    <button
                        className={`${styles["contact-form-button-hover"]} ${styles["contact-form-button"]}`}
                        type="submit"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};

ContactUsGameStore.meta = {
    route: "contactUs",
    roles: ["admin", "moderator"],
};