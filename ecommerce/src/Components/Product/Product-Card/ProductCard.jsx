import './ProductCard.css'
import {AddToCart} from "../AddToCart";
export default function ProductCard(properties){
    return(
        <div className="product-card">
            <h3> Product Card</h3>
            <p>Title : {properties.product.title} </p>
            <p>Price : {properties.product.price} </p>
            <AddToCart product={properties.product} cart={properties.cart} increaseCartQuantity={properties.increaseCartQuantity} decreaseCartQuantity={properties.decreaseCartQuantity}></AddToCart>
        </div>)
}

//export {ProductCard as default}