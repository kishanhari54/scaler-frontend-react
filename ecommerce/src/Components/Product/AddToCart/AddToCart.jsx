
export default function AddToCart(properties){
    function addQuantity(){
        properties.increaseCartQuantity(properties.product);
        console.log(properties.cart)
    }
    return (
        <button onClick={addQuantity}>Add To Cart</button>
    )
}