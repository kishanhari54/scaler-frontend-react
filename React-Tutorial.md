# React General Information
## React
        * Library with bundled features
        * Control Flow - UniDirectional -> Parent to Child.

## Setup React
    * npx create-react-app my-app or npm i create-react-app Ecom
    * Execute "npm start" in terminal ( directory should be :Ecom)
    
### React Packages
    * react --> is a light weight package.
    * react-dom package is used for web application creation.
    * react-native package is used for mobile apps
    * react-ink is for creating cli applications

<br/>

# Things to Learn in React.



<br/>

# How to build a React App?

### Initial App Rendering explained
  * App.js has a function which returns JSX
  * Index.js , appends this function from App.js to a HTML element with id "root"
### Creating a Component in React
* Create a function ,in a js file , this function will return a JSX.* <br/>
       ```
       function Test(){ 
        return (
            <div> Content To be Sent </div>
        )
        }
        ```
### Creating a Child Component
  * Create a ProductList.js and ProductCard.js file 
    * export a JSX from ProductCard.js
    * import ProductCard in ProductList and use the selector.
  ```
    function ProductCard(properties){
            return ( <div>Product Card<div/>
            <p> Title : {properties.title}</p>
            <p> Title : {properties.price}</p>
            )
    }

    function ProductList(){
        return (
            <div class="productList">
            <ProductCard title="Heading" price="20">
            </div>
        )
    }
  ```
  * To Pass Parameters , the properties can be passed in the selector and consumed it with interpolation {}

### Looping to render elements multiple times
  * If you want to loop to create multiple child components. - Use Map Function.
  * Define a Product Array ,and loop through array to create the HTML Element.
  * We use Curly braces to define Javascript Expressions.
  ```
  products = [ {title: 'TEST' , price: '200'}]
  function ProductList(){
        return (
            <div class="productList">
            {products.map( 
              
              function( product){
              
                return (
                  <ProductCard title={product.title} price={product.price}>
                )
              
              }
            )
            }
            
            </div>
        )
    }
  ```    