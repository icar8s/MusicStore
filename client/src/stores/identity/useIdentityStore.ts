import {create} from "zustand/index";



export type IdentityState = {
    role: string;
}

const initialState: IdentityState = {
    role: "admin",
}

type CombinedIdentityAction = {type: string}

//reducer invoke provided action
const reducer = (state: IdentityState, action: CombinedIdentityAction): IdentityState => {
    switch (action.type) {
        default:
            return state;
    }
}

const useIdentityStore = create<IdentityState & { dispatch: (action: CombinedIdentityAction) => void }>((set) => ({
    role: initialState.role,
    dispatch: (action: CombinedIdentityAction) => set((state) => reducer(state, action))
}));


export { useIdentityStore };