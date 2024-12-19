import React from "react";

export type ComponentWithMeta = React.JSX.Element & {
    meta: {
        route: string;
        roles: string[];
    };
}