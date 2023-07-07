import './ProductCard.css'
import {AddToCart} from "../AddToCart";
import {Rating} from "../RatingComponent"
export default function ProductCard(properties){
    return(
        <div className="product-card">
            <h3> Product Card</h3>
            <p>Title : {properties.product.title} </p>
            <p>Price : {properties.product.price} </p>
            <AddToCart product={properties.product} cart={properties.cart} increaseCartQuantity={properties.increaseCartQuantity} decreaseCartQuantity={properties.decreaseCartQuantity}></AddToCart>
            <Rating maxRating={5}  rating={properties.product.rating.rate} size={2}></Rating>
        </div>)
}

//export {ProductCard as default}