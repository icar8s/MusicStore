import {Children, isValidElement, SelectHTMLAttributes, useMemo} from "react";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import './select.scss'
import {SelectOption} from "../option/SelectOption.tsx";


interface ISelect extends SelectHTMLAttributes<HTMLSelectElement>{
    preview?: boolean;
    previewContent?: string
}

export const Select = ({
                           previewContent,
                           preview,
                           children,
                           defaultValue,
                           ...rest
                       }: ISelect) => {

    const transientOptionKeyValue = "$!transient!option.transient.";

    const {selectedTheme} = useThemeStore();

    const isNoSelection = useMemo(() => {
        const hasDefaultValue = Children.toArray(children).some((child) => {
            return isValidElement(child) && child.props.value === defaultValue;
        });

        return !hasDefaultValue;
    },[children, defaultValue])

    return <select
        className={`${selectedTheme}-theme select`}
        defaultValue={preview && isNoSelection ? transientOptionKeyValue : defaultValue}
        {...rest}>
        {preview && isNoSelection ?
            <SelectOption
                disabled
                value={transientOptionKeyValue}>
                {previewContent}
            </SelectOption>
            : null}
        {children}
    </select>
}