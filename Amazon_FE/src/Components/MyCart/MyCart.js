import React, { createContext } from "react";
import './MyCart.css';
import { useCart } from "react-use-cart";

export const Contexts = createContext();

export default function MyCart({ children }) {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart } = useCart();


    return <div >
        <Contexts.Provider value={{
            isEmpty,
            totalUniqueItems,
            items,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart
        }}>
            {children}
        </Contexts.Provider>
    </div>
}