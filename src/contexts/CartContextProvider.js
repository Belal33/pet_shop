import { useState } from "react";
import { CartContext } from ".";

export default function CartContextProvider({ children }) {
    let data = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(data);

    const updateCartItems = (newCartItems) => {
        console.log("newCartItems:");
        console.log(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, updateCartItems }}>
            {children}
        </CartContext.Provider>
    );
}
