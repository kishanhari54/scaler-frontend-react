# React General Information
## React
        * Library with bundled features
        * Control Flow - UniDirectional -> Parent to Child.

## Setup React
    * npx create-react-app my-app or npm i create-react-app Ecom
    * Execute "npm start" in terminal ( directory should be :Ecom)
    
## React Packages
    * react --> is a light weight package.
    * react-dom package is used for web application creation.
    * react-native package is used for mobile apps
    * react-ink is for creating cli applications

<br/>

# Things to Learn in React.
    Scaler Codebox: https://codesandbox.io/s/react-sessions-7cnm7x?file=/src/App.js


<br/>

# How to build a React App?

## Initial App Rendering explained
  * App.js has a function which returns JSX
  * Index.js , appends this function from App.js to a HTML element with id "root"
## Creating a Component in React
* Create a function ,in a js file , this function will return a JSX.* <br/>
       ```
       function Test(){ 
        return (
            <div> Content To be Sent </div>
        )
        }
        ```

<br/>


## Creating a Child Component
  * Create a ProductList.js and ProductCard.js file 
    * export a JSX from ProductCard.js
    * import ProductCard in ProductList and use the selector.
    * To Pass data , pass it along its element , in example we have passed title and price
    * It is recommended to use "className" to define css classes (to not confuse with class keyword of js)
  ```
    function ProductCard(properties){
            return ( <div>Product Card<div/>
            <p> Title : {properties.title}</p>
            <p> Title : {properties.price}</p>
            )
    }

    function ProductList(){
        return (
            <div className="productList">
            <ProductCard title="Heading" price="20">
            </div>
        )
    }
  ```
  * To Pass Parameters , the properties can be passed in the selector and consumed it with interpolation {}

<br/>

## Looping to render elements multiple times
  * If you want to loop to create multiple child components. - Use Map Function.
  * Define a Product Array ,and loop through array to create the HTML Element.
  * We use Curly braces to define Javascript Expressions.
```
  products = [ {title: 'TEST' , price: '200'}]
  function ProductList(){
        return (
            <div className="productList">
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

<br/> 

## Importing CSS
  * Create a css file and import it in js file.
    * CSS File was "productCard.css"
    * in ProductCard.js file use " import "./productCard.css"

## Named Exports and Imports
  * We can create a index.js file for every component and export the function in this file.
  * The advantage of this is : It helps for cleaner import statements. 
  * Import statements can specify till folder and need not provide js name specifically.

<br/>

## State Variable
### Mocking a API Response to Render. -- Issue Explained with async calls
  * Attempt 1: Lets say , we want to display Products from a function with some delay.
     ```  
    products = [ {title: 'Book' , price: 20}]
    function getProductsAPI()
          {
            setTimeout( function(){ return products},1000)
          }
      
    function ProductsList(){
        let product = getProductsAPI();
      return (
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

  
<mark> Note: 
     This would give an undefined response in our Products List JSX Function , due to async nature.
     </mark>

*  Attempt 2 : Use a call back function as argument to getProductsAPI and pass products as parameter to this callback function inside setTimeout.

      ```
        products = [ {title: 'Book' , price: 20}]
          function getProductsAPI(cb){
            setTimeout( function() { cb(products)}, 1000)
          }
          function ProductsList(){
            let product;
            getProductsAPI( function(productsReturned) { 
              product = productsReturned; // This assigns the array of products
            })
            return (
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
     ```
  <mark>
   Even this would throw an error as product.map will expect an array to be available - but it would be assigned the array value later. Hence we need "state"
   </mark>
    
<br/>

  * Hence we need  State Variable :-A Variable--> when assigned a value , the UI will to be re-rendered 

  ## React Hooks

  *
     Hooks are some helper functions --> we have some available from React and we can create our custom hooks if needed

     *  useState -  A Helper function which will create a state variable
        *  returns : [ stateVariable  , setterFunctionForState]
              *  Use Setter Function to set the value of State variable.
                 *   Code: 
                      ```

                       function getProductsList(){
                        const productsState = useState([]);
                        let  allProducts = productsState[0]; // Variable to hold value
                        let  setAllProducts = productsState[1]; // Setter Function to set Varialbe value
                        
                        getProductsAPI( function(returnedProducts){
                          setAllProducts(returnedProducts)
                        });
                           
                          
                          return (
                              <div>
                              {
                                allProducts.map( 
                                  function( product,index){
                                    return (
                                      <ProductCard title={product.title} price={product.price} key={index}/>
                                    )
                                  })
                                }
                          
                              </div>
                              )
                          } 
                      ```
                    * Loader
                        *  Till the data is loading , the spinner can be displayed
                        *  Create a Loader Component , Display it initially , once data has reached --> render the actual DOM.
                        * Have a flag --> isLoading , initailly its true, once data has arrived ,its set to false.
                        * We might have to useState here as well --> os once variable is changed ,the page is re-rendered to hide loading indicator again.
                        * Code:
                         ```
                               function ProductList() {
                                            const productsState = useState([]);
                                            let allProducts = productsState[0];
                                            let setAllProducts = productsState[1];

                                            let [isLoading, setLoading] = useState(true);  // Destructured Syntax of JS

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
                               ```
                    <mark>Performance Drawback</mark>

                    * Mounting (Component Loading):- Initially once Page was set. 
                    * UnMounting (Component Updating):
                        *  Now Data was loaded --> useState made page to re-render once
                        *  Now Loading was set --> useState made the page to re-render once again.
     *  useEffect 
           *  Whenever a state Variable changes , if we need to do something  -> useEffect hook can be used.
        *   The Callback provided in useEffect
            *   would be called when the function is being mounted (intiial Rendered)
            *   would also be called when any state variables changes (unmounting) 
            *   to prevent useEffect from executing again , pass a depedency array(with state variables references) as second parameter to its callback function , now whenever the state variables in dependency array have changed , only then useEffect will execute its callback.
            *  Code: - allProducts and isLoading State Variables are passed in dependency array.
                ```
                function ProductList() {
                            const productsState = useState([]);
                            let allProducts = productsState[0];
                            let setAllProducts = productsState[1];

                            let [isLoading, setLoading] = useState(true);  // Destructured Syntax of JS

                            useEffect( () => { 
                              console.log('Use Effect Called')
                              getProductsAPI(function (returnedProducts) {
                              setAllProducts(returnedProducts);
                              setLoading(false);
                            });
                            ,[allProducts,isLoading]
                            })

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
                          ```
     * [useContext](#redux-state-management) 
         *  has been explained in Context API Section
     
     * React.Memo       
         * A Child will re-render ,if the state has changed in parent even if there is no dependency for this child component and the state that has changed. This re-rendering is waste of resource as nothing is going to change in child component.
     
        * React provides as <mark>React.memo</mark> - Wrap the Child Component with this and this unnecessary re-render will be prevented.
            
              ```
                //Code
                const childComponent = React.memo(function ChildComponent(){
                  return <div>No Changes</div>
                })
                
                export default childComponent
              ```

       *  Note: If you have a function in parent ,which you pass as props in child , --The React Memo becomes useless , as everytime the state in parent has changed , the function is re-created as new function , hence the child component keeps re-rendering.
            
            ```  
              export function App(){
                const [count,setCount] = useState();
                const [input,setInput] = useState();

                const incrementCount = ()=> setCount( count + 1)

                return  (
                  <div>
                  <input onChange = { (e) => setInput(e.target.value)}>
                  <button onclick={incrementCount}>Increment Count</button>
                  <h3> Input Text: {input}</h3>
                  <h3> Count {count}</h3>
                  <ChildComponent count={count} onClick={incrementCount}/>
                  </div>
                )
              }

              const ChildComponent = function({count,onClick}){
                return(
                  <div>
                  <h2>Child Component</h2>
                  <h4>Count : {count}</h4>
                  <button onClick={onClick}> Increment Count</button>
                  </div>
                )
              }
            ```
            This issue is solved using useCallback

     * useCallback 
       * This will Memoize the function and will not re-instantiate thus prevent issue that was happening with useMemo
       * Whenever we are passing a function as a Prop in Child -> the function reference should not change so it doesnt keep re-rendering if parent re-renders.
         ```
          // Define the callback functions that will be passed to child components in below manner 
            export function App(){
                const incrementCount = useCallback(()=> setCount( count + 1),[count])
          }
          ```
## Global State  
   ### Props Drilling : 
  <br/>

  * We have a AddToCart Child Component ,which needs to store the information of products which has been added to Cart.
     * Since in ProductCard , We have this ChildComponent of AddToCart rendered ,on Click somehow we need to hold this data.
     * so , we create a global state variable  "cart" in "App" , and pass this state to every child component.
     * Code:
        * In App Function , we create Cart state variable
          '''
              
              function App() {
                        const [cart,setCart] = useState({});
                        return (
                          <div className="App">
                                <ProductList cart={cart}/> 
                          </div>
                        );
                      }

                  // In Product List Component , this will be passed in
                    function productCard(){
                      <ProductCard
                        title={product.title}
                        price={product.price}
                        key={product.id}
                        cart={props.cart}
                      />
                    }   
                    
                    // In Product Card , this will be passed to AddToCart
                      export default function ProductCard(properties){
                        return(
                            <div className="product-card">
                            <h3> Product Card</h3>
                            <p>Title : {properties.title} </p>
                            <p>Price : {properties.price} </p>
                            <AddToCart cart={properties.cart}></AddToCart>
                        </div>)
                    } 
                    
        '''

   * To Increase Quantity in Cart   
     * have a function in "App" which gets product as input and updates the cart state variable
      * Now do  "Prop Drilling" of this function with all components (ProductList , ProductCard, AddToCard) and when AddToCart is Clicked , call this function.
          ```
          function App(){ 
              const [cart, setCart] = useState({});

              function increaseCartQuantity(product) {
                const newCart = { ...cart }; // Get Reference to State Variable
                // If No Item , Set default
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
                  setCart(newCart);
                }
          }

          //Products List and Card , is supposed to pass this increaseCartQuantity function in Props


          // In Add To Cart Component 
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
          ```
          * NOTE:  Whenever we add/remove the quantity, since the state variable at App level ,changes ,all the child components are being re-rendered (Too costly) - Hence we need some way to handle this and solution was - <mark>Redux State Management.</mark>

## Redux State Management
  * For Managing States and updating UI - Redux State management can be used.
  * React gave "Context API" to do the same thing.
    ### Context API - of React
       *  Create a Context Folder - and Create CartContext.js
          *  Define
             *  Context - Global State
             *  Provider - pseudo Parent
             *  Selector - Extract global state in component
          *  ```
              const cartContext = createContext( { 
                  cart : {},
                  increaseQuantity: ()=>{},
                  decreaseQuantity: ()=>{}
              })
              ```
          * ```
            // Create Provider wrapper on parent and it can be used in any child

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
                  <cartContext.Provider
                  value={{cart,increaseCartQuantity,decreaseCartQuantity}}
                  >
                  <div className="App">
                    <ProductList />
                  </div>
                  </cartContext.Provider>
                );
            }
            ```
        
     * useContext - React Hook
       * use this hook to get global state in any child component.
       
       * ```
            export default function AddToCart(properties) {
            const{ cart, increaseCartQuantity , decreaseCartQuantity} = useContext(cartContext)
              // Same Logic
            }
          ```





<br/>

## To Display Icons - Ratings Component
  *  We install packages @mdi/react and @mdi/js
     *  import Icon from "@mdi/react";
        import { mdiStar } from "@mdi/js";
      * Icon provides a container to display the icon 
      *  mdi/js provides all material design icons 
