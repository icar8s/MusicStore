import React from "react";
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

    if(!component.meta.roles.includes(role)){
        return <>You don't have permission to this resource'</>
    }

    return React.createElement(component)
}

interface IProtectedContent {
    children: React.ReactNode;
    scope: string[] | string;
}

export const ProtectedContent = ({children, scope}: IProtectedContent) => {
    const {role} = useIdentityStore();

    if((typeof scope === "string" && scope !== role) || !scope.includes(role)){
        return null
    }

    return children
}
