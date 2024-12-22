import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

export const RegisterGameStore: ComponentWithMeta  = ()  => {

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
                            required
                        />
                    </label>
                    <label>
                        Login
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
                        type="submit">Registration</button>
                </form>
            </div>
        </div>
    );
}

RegisterGameStore.meta = {
    route: "/registerGameStore",
    roles: ["admin", "moderator"]
}