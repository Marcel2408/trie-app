// setup initial state of hidden: true
// cart reducer func
// TOGGLE_CART_HIDDEN action.type
// make the action type
// make the action toggleCart passing the type
// dispatch the action from cartIcon
// add cartReducer to rootReducer
// select the isHidden piece of state from the store in Header
// commit

import { TOGGLE_CART_HIDDEN, ADD_TO_CART, UPDATE_CART_ITEM } from './cart.types';
import addItemToCart from './cart.utils';

const INITIAL_STATE_CART = {
  isHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE_CART, action = {}) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    case ADD_TO_CART:
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    case UPDATE_CART_ITEM:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
