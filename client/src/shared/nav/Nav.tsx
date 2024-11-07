import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {HTMLAttributes} from "react";
import "./nav.scss"

interface INav extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
    orientation?: "vertical" | "horizontal"
}

export const Nav = ({
                        orientation = "horizontal",
                        children,
                        ...rest
                    }: INav) => {
    const {selectedTheme} = useThemeStore();


    return <div
        data-orientation={orientation}
        className={`${selectedTheme}-theme nav`}
        {...rest}>
        {children}

    </div>
}
