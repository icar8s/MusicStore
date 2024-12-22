import './background.scss'
import {useThemeStore} from "../../stores/theme/useThemeStore.ts";

export const Background = () => {
    const {selectedTheme} = useThemeStore();

    return <div className={`${selectedTheme}-theme container`}>
        <span className={`${selectedTheme}-theme content`}>Music Art</span>
    </div>
}