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
            product.map( 
              function( product,index){
                return (
                  <ProductCard title={product.title} price={product.price} key={index}/>
                )
              })
            }
      
        </div>
    )
}

export {ProductList}