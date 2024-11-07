import {OptionHTMLAttributes} from "react";

interface ISelectOption extends  OptionHTMLAttributes<HTMLOptionElement> {
    //some attributes will be here
}

export const SelectOption = ({...rest}: ISelectOption) => {
    return <option {...rest}>{rest.children}</option>
}