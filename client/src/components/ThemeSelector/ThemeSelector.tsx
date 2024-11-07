import {Select} from "../../shared/select/Select.tsx";
import {SelectOption} from "../../shared/option/SelectOption.tsx";
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";
import {definedThemesKeys} from "../../laoyout/_themes/themify.ts";



export const ThemeSelector = () => {



    const {selectedTheme, dispatch} = useThemeStore();

    return <Select
        defaultValue={selectedTheme}>
        {definedThemesKeys.map(theme =>
            <SelectOption
                key={theme}
                value={theme}
                onClick={() => dispatch({type: "SET_THEME", theme: theme})}>

                {theme}
            </SelectOption>
        )}
    </Select>
}