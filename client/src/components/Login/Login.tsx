import {ComponentWithMeta} from "../../misc/ComponentWithMeta.ts";

const Login: ComponentWithMeta = () => {
    return <>Div</>
}

Login.meta = {
    route: "login",
    roles: ["admin", "moderator"]
}

export default Login;