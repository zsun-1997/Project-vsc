import React, { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();
const Context = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // eslint-disable-next-line no-undef
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        // eslint-disable-next-line no-undef
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    );
};

export default Context;
