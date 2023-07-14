import { createStore } from "redux";
function cartReducer(state = { items: {}}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const product = action.payload;
        // If State already has product.
        if (state.items[product.id]) {
          return {
            // Copy of the State , since spread is shallow copy , we are trying to make deep copy
            ...state,
            items: {
              ...state.items,
              [product.id]: {
                ...state.items[product.id],
                quantity: state.items[product.id].quantity+1,
              },
            },
          };
        } else {
          return {
            ...state,
            items: {
              ...state.items,
              [product.id]: {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
              },
            },
          };
        }
      }
      break;
    case "REMOVE_FROM_CART":
      {
        const product = action.payload;
        let quantity = state.items[product.id]?.quantity;
        if (quantity <= 1) {
          //Delete Product Key
          let obj = {
            ...state,
            items: {
              ...state.items,
            },
          };
          delete obj.items[product.id];
          return obj;
        } else {
          // Reduce Quantity by One.
          return {
            ...state,
            items: {
              ...state.items,
              [product.id]: {
                ...state.items[product.id],
                quantity: quantity - 1,
              },
            },
          };
        }
      }
      break;
    default:
      return state;
  }
}

const store = createStore(cartReducer);
export default store;
