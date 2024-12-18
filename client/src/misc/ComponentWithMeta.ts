import React from "react";

export type ComponentWithMeta = React.FC & {
    meta: {
        route: string;
        roles: string[];
    };
}