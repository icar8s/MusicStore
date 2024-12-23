import React from 'react';
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import './input.scss'

interface IInput extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    type?: "text" | "password" | "number" | "email";
}

export const Input = ({
                          type = "text",
                          ...rest
                      }: IInput) => {

    const {selectedTheme} = useThemeStore();

    return <input
        className={`${selectedTheme}-theme input`}
        {...rest}
        type={type}
    />;
}