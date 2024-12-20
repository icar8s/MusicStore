import {useState} from "react";

export const Register  = ()  => {
    const [email, setEmail] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="contact-us">
            <div className="card login-card">
                <form className="contact-form">
                    <h2>Registration</h2>
                    <label>
                        Email
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Login
                        <input
                            type="text"
                            onChange={(e) => setLogin(e.target.value)}
                            name="name"
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