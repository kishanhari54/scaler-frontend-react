import './ProductCard.css'

export default function ProductCard(properties){
    return(
        <div className="product-card">
            <h3> Product Card</h3>
            <p>Title : {properties.title} </p>
            <p>Price : {properties.price} </p>
        </div>)
}

//export {ProductCard as default}