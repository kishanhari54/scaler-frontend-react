import {ProductCard} from "../Product-Card"
import "./productList.css"
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
const products = [ {title: 'TEST' , price: '200'},{title: 'Phone' , price: '2000'}]


function getProductsAPI(){
  setTimeout(() => {
    return products
  }, 1000);
}

function ProductList(){
  var product = getProductsAPI();
  console.log( product)
    return(
        <div>
        {
            products.map( 
              function( product){
                return (
                  <ProductCard title={product.title} price={product.price} />
                )
              })
            }
      
        </div>
    )
}

export {ProductList}