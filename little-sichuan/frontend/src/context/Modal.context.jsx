import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(null);
    const [modalComponent, setModalComponent] = useState(null);

    const toggleModal = (component) => {
        if (component) {
            setModalComponent(component);
        } else {
            setModalComponent(null);
        }

        setIsOpen(!isOpen);
    };

    return (
        <ModalContext.Provider value={{ isOpen, toggleModal }}>
            {modalComponent}
            {children}
        </ModalContext.Provider>
    );
};

const ModalConsumer = ModalContext.Consumer;

export { ModalProvider, ModalConsumer };
