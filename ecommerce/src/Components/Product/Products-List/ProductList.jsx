import { ProductCard } from "../Product-Card";
import "./productList.css";
import { useState } from "react";
/*
export default function ProductList(){
    return(
        <div>
        <ProductCard title="SampleTitle"/>
        <ProductCard title="Sample Title 1" price="20"/>
        </div>
    )
}
*/
const products = [
  { title: "TEST", price: "200" },
  { title: "Phone", price: "2000" },
];

//Attempt  2:
/*
function getProductsAPI(cb){
  setTimeout(() => {
    cb(products)
  }, 1000);
}

function ProductList(){
  let  product
   getProductsAPI( function(returnedProducts){
    product = returnedProducts;
    console.log(product)
   });
   
  
    return(
        <div>
        {
            products.map( 
              function( product,index){
                return (
                  <ProductCard title={product.title} price={product.price} key={index}/>
                )
              })
            }
      
        </div>
    )
}

*/

function getProductsAPI(cb) {
  setTimeout(() => {
    cb(products);
  }, 1000);
}

function ProductList() {
  const productsState = useState([]);
  let allProducts = productsState[0];
  let setAllProducts = productsState[1];

  let [isLoading, setLoading] = useState(true); // Destructured Syntax of Variable Assignment - JS Feature.

  getProductsAPI(function (returnedProducts) {
    setAllProducts(returnedProducts);
    setLoading(false);
  });

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        {allProducts.map(function (product, index) {
          return (
            <ProductCard
              title={product.title}
              price={product.price}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export { ProductList };
