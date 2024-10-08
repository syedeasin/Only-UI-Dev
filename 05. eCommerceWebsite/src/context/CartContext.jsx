// src/context/CartContext.jsx
import React, { createContext, useReducer } from 'react';

// Create the CartContext
const CartContext = createContext();

// Initial state for the cart
const initialState = {
    items: [],
    total: 0,
};

// Reducer function to handle state changes
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        default:
            return state;
    }
};

// CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
