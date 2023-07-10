// Context - Global State
// Provider - pesudo Parent
// Selector - Extract global state in components

import { createContext } from "react";

//Inital State
const cartContext = createContext( { 
    cart : {},
    increaseQuantity: ()=>{},
    decreaseQuantity: ()=>{}
})

export default cartContext;