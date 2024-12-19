import {definedThemes} from "../../laoyout/_themes/themify.ts";
import {create} from "zustand";

type SetThemeAction = {
    type: "SET_THEME";
    theme: definedThemes;
}

export type ThemeState = {
    selectedTheme: definedThemes;
}

const initialState: ThemeState = {
    selectedTheme: "Basic",
}

type CombinedThemeAction = SetThemeAction

//reducer invoke provided action
const reducer = (state: ThemeState, action: CombinedThemeAction): ThemeState => {
    debugger
    switch (action.type) {
        case "SET_THEME":
            return {...state, selectedTheme: action.theme};
        default:
            return state;
    }
}

const useThemeStore = create<ThemeState & { dispatch: (action: CombinedThemeAction) => void }>((set) => ({
    selectedTheme: initialState.selectedTheme,
    dispatch: (action: CombinedThemeAction) => set((state) => reducer(state, action))
}));


export { useThemeStore };