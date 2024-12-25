import React from "react";
import './button.scss'
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";

export const Button = ({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {selectedTheme} = useThemeStore();

    return <button className={`${selectedTheme}-theme button`}
                   {...props}>
        {children}
    </button>
}