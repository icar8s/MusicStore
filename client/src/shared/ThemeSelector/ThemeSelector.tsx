import {Select} from "../select/Select.tsx";
import {SelectOption} from "../option/SelectOption.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {definedThemes, definedThemesKeys} from "../../layout/_themes/themify.ts";

export const ThemeSelector = () => {

    const {selectedTheme, dispatch} = useThemeStore();

    return <Select
        onClick={(e)=> {
            const theme= e.currentTarget.value as definedThemes;
            dispatch({type: "SET_THEME", theme: theme})
        }
    }
        defaultValue={selectedTheme}
    >
        {definedThemesKeys.map(theme =>
            <SelectOption
                key={theme}
                value={theme}>
                {theme}
            </SelectOption>
        )}
    </Select>
}