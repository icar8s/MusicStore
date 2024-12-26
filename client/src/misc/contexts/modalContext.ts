import {createContext, ReactNode} from "react";

export interface IModalContext {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);