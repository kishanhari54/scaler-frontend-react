export default function AddToCart(properties) {
  function addQuantity() {
    properties.increaseCartQuantity(properties.product);
    console.log(properties.cart);
  }
  function subQuantity() {
    properties.decreaseCartQuantity(properties.product);
    console.log(properties.cart);
  }
  let quantity = properties.cart[properties.product.id]?.quantity || 0;

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
