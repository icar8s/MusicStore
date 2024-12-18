import React from 'react';
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import "./panel.scss"

export const Panel: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
    const {selectedTheme} = useThemeStore();

    return <div
        className={className? className : `${selectedTheme}-theme panel`}>
        {children}
    </div>;
};