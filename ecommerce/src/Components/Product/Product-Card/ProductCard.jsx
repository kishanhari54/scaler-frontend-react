import './ProductCard.css'
import {AddToCart} from "../AddToCart";
import {Rating} from "../RatingComponent"
import {ReduxAddToCart} from "../ReduxAddToCart"
export default function ProductCard(properties){
    return(
        <div className="product-card">
            <h3> Product Card</h3>
            <p>Title : {properties.product.title} </p>
            <p>Price : {properties.product.price} </p>
            
            <ReduxAddToCart product={properties.product}></ReduxAddToCart>
            <Rating maxRating={5}  rating={properties.product.rating.rate} size={2}></Rating>
        </div>)
}

//export {ProductCard as default}