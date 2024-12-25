import {useContext} from "react";
import {IModalContext, ModalContext} from "../contexts/modalContext.ts";

export const useModal = (): IModalContext => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};