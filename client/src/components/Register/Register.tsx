import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import styles from "../ContactUs/сontactUs.module.scss";
import {Input} from "../../shared/input/Input.tsx";
import {Button} from "../../shared/button/Button.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {RegisterDto} from "../../models/dtos/general/registerDto.ts";
import {useIdentityStore} from "../../stores/identity/useIdentityStore.ts";

export const Register: ComponentWithMeta = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {signUp} = useIdentityStore();

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const user: RegisterDto = {
            email: email,
            userName: name,
            password,
            passwordConfirmation: confirmPassword
        }
        signUp(user)
    };

    return (
        <div className={styles["contact-us"]}>
            <div className={`${styles.card} ${styles["login-card"]}`}>
                <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                    <h2 className={styles.h2}>Registration</h2>
                    <label className={styles["contact-form-label"]}>
                        Name
                        <Input
                            type="text"
                            name="name"
                            className={styles["contact-form-input"]}
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </label>
                    <label className={styles["contact-form-label"]}>
                        Email
                        <Input
                            type="email"
                            name="email"
                            className={styles["contact-form-input"]}
                            value={email}
                            onChange={handleEmailChange}
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
                    </label><label className={styles["contact-form-label"]}>
                    Confirm Password
                    <Input
                        type="password"
                        name="confirmPassword"
                        className={styles["contact-form-input"]}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </label>
                    <Button
                        className={`${styles["contact-form-button-hover"]} ${styles["contact-form-button"]}`}
                        type="submit">Registration</Button>
                </form>
            </div>
        </div>
    );
}

Register.meta = {
    route: "/register",
    roles: ["admin", "moderator"]
}