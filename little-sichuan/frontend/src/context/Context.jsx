import React, { createContext, useReducer, useState } from 'react';

export const cartContext = createContext();
const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
    // const [state,dispatch] = useReducer(reducer,{

    // })
    return (
        <cartContext.Provider value={{ cart, setCart }}>
            {children}
        </cartContext.Provider>
    );
};

export default Context;
