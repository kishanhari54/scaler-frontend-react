import { useContext } from "react";
import {default as cartContext} from "../../../Context/Cart.Context";

export default function Cart(){
    const {cart} = useContext(cartContext);
    const cartList = Object.values(cart);
    if(cartList.length ==0) {
        return <div> Cart is Empty</div>
    }else {
        let total = cartList.reduce((total,value) => { return total+= value.price * value.quantity},0) ;
       return( 
        <div>
        <ol>
            {
                cartList.map( (item) => {
                    return <li key={item.id}>
                        <div>{item.title} </div>
                        <div>{item.quantity}</div>
                        <div>{item.quantity * item.price}</div>
                        </li>
                })
            }
        </ol>
        <span>"Total" : {total} </span>
        </div>
       )
    }
    
}

