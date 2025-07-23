import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
import { useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const initialState = {
            cartProducts:JSON.parse(localStorage.getItem("clothes")) || []
            
        }
    const[cart , dispatch] = useReducer(cartReducer, initialState);
    const[selectedSize , setSelectedSize] = useState("M");
    
    return(
        <CartContext.Provider value={{cart,dispatch , selectedSize , setSelectedSize}} >
            {children}
        </CartContext.Provider>
    )
}

const useCarts = ()=> useContext(CartContext);
export {useCarts , CartContextProvider}