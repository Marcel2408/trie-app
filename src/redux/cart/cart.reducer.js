import { TOGGLE_CART_HIDDEN, ADD_TO_CART, REMOVE_FROM_CART } from './cart.types';
import addItemToCart, { removeItemFromCart } from './cart.utils';

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
    case REMOVE_FROM_CART:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };
    default:
      return state;
  }
};

export default cartReducer;
