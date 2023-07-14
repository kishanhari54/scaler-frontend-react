import {useDispatch , useSelector} from "react-redux";

export default function ReduxAddToCart(properties) {

        //Redux Store Info
    const dispatch = useDispatch();
    const items = useSelector( (state)=> { 
        return state.items
    })

  function addQuantity() {
    console.log('Add Quantity')
        //dispatch( { type:'string'}, payload: 'product')
        dispatch( { type:'ADD_TO_CART', payload: properties.product})
    //increaseCartQuantity(properties.product);
    
  }
  function subQuantity() {
    dispatch( { type:'REMOVE_FROM_CART', payload: properties.product})
    //decreaseCartQuantity(properties.product);
    //console.log(cart);
  }
  let quantity = items[properties.product.id]?.quantity || 0;

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
