import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import "./modal.scss"

interface IModalContext {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

interface IModalProvider {
    children: ReactNode;
}

export const ModalProvider = ({children} : IModalProvider) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) => setModalContent(content);

    const closeModal = () => setModalContent(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (modalContent) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalContent]);

    return <ModalContext.Provider value={{ openModal, closeModal }}>
        {children}
        {modalContent && (
            <div
                className={"modal-overlay"}
                onClick={closeModal}>
                <div
                    className={"modal-content"}
                    onClick={(e) => e.stopPropagation()}>
                    <button onClick={closeModal} className="modal-close">

                    </button>
                    {modalContent}
                </div>
            </div>
        )}
    </ModalContext.Provider>
}

export const useModal = (): IModalContext => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};