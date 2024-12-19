import { Input } from "../../shared/input/Input.tsx";
import { Button } from "../../shared/Button/Button.tsx";

export const Login: () => JSX.Element = () => {
    return (
        <div>
            <section>
                <span>Login</span>
                <Input />
            </section>
            <section>
                <span>Password</span>
                <Input />
            </section>
            <Button>Sign In</Button>
        </div>
    );
};

// Определяем мета-информацию для компонента
Login.meta = {
    route: "login",
    roles: ["admin", "moderator"],
};
