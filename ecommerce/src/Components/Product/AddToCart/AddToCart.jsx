import { useContext } from "react";
import cartContext from "../../../Context/Cart.Context";

export default function AddToCart(properties) {
  const{ cart, increaseCartQuantity , decreaseCartQuantity} = useContext(cartContext)
  function addQuantity() {
    increaseCartQuantity(properties.product);
    //console.log(cart);
  }
  function subQuantity() {
    decreaseCartQuantity(properties.product);
    //console.log(cart);
  }
  let quantity = cart[properties.product.id]?.quantity || 0;

  if (quantity > 0) {
    return (
      <div>
        <button onClick={addQuantity}> + </button>
        <span>{quantity}</span>
        <button onClick={subQuantity}> - </button>
      </div>
    );
  } else {
    return <button onClick={addQuantity}>Add To Cart</button>;
  }
}
