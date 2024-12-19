import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";
import {Input} from "../../shared/input/Input.tsx";
import {Button} from "../../shared/Button/Button.tsx";

export const Register : () => JSX.Element = () => {
    return <div>
        <section>
            <span>
                Email
            </span>
            <Input/>
        </section>

        <section>
            <span>
                Login
            </span>
            <Input/>
        </section>

        <section>
            <span>
                Password
            </span>
            <Input/>
        </section>

        <Button>Sign Up</Button>
    </div>
}

Register.meta = {
    route: "register",
    roles: ["admin", "moderator"]
}