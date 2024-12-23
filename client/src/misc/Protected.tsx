import React, {JSX} from "react";
import {useIdentityStore} from "../stores/identity/useIdentityStore.ts";

type ComponentWithMeta = React.ComponentType & {
    meta: {
        route: string;
        roles: string[];
    };
};

interface IProtectedRoute {
    component: ComponentWithMeta;
}

export const ProtectedRoute = ({
                                   component
                               }: IProtectedRoute) => {

    const {role} = useIdentityStore();

    if(!component.meta.roles.includes(role.dataResult?.data ?? "")){
        return <>You don't have permission to this resource'</>
    }

    return React.createElement(component)
}

interface IProtectedContent {
    children: JSX.Element;
    roles: string[] | string;
}

export const ProtectedContent = ({children, roles}: IProtectedContent) => {
    const {role} = useIdentityStore();

    if((typeof roles === "string" &&
        (role.dataResult?.data ?? "") !== roles) ||
        !roles.includes(role.dataResult?.data ?? "")){

        return null
    }

    return <>{children}</>
}
