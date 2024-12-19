import {Select} from "../../shared/select/Select.tsx";
import {SelectOption} from "../../shared/option/SelectOption.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {definedThemes, definedThemesKeys} from "../../laoyout/_themes/themify.ts";

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