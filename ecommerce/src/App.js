import { useState } from "react";
import "./App.css";
import { ProductList } from "./Components/Product/";
function App() {
  const [cart, setCart] = useState({});

  function increaseCartQuantity(product) {
    const newCart = { ...cart }; // Get Reference to State Variable
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0,
      };
    }

    newCart[product.id].quantity += 1;
    setCart(newCart);
  }
  function decreaseCartQuantity(product) {
    const newCart = { ...cart }; // Get Reference to State Variable
    if (!newCart[product.id]) { return;
    }
    newCart[product.id].quantity -= 1;
    if(newCart[product.id].quantity == 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <div className="App">
      <ProductList cart={cart} increaseCartQuantity={increaseCartQuantity} decreaseCartQuantity={decreaseCartQuantity}/>
    </div>
  );
}

export default App;
