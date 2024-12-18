import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {Input} from "../../shared/input/Input.tsx";
import {Button} from "../../shared/Button/Button.tsx";

const Login: ComponentWithMeta = () => {
    return <div>
        <section>
            <span>
                Login
            </span>
            <Input />
        </section>

        <section>
            <span>
                Password
            </span>
            <Input />
        </section>

        <Button>Sign In</Button>
    </div>
}

Login.meta = {
    route: "login",
    roles: ["admin", "moderator"]
}

export default Login;