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

  return (
    <div className="App">
      <ProductList cart={cart} increaseCartQuantity={increaseCartQuantity}/>
    </div>
  );
}

export default App;
