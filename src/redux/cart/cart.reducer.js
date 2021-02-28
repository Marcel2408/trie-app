// setup initial state of hidden: true
// cart reducer func
// TOGGLE_CART_HIDDEN action.type
// make the action type
// make the action toggleCart passing the type
// dispatch the action from cartIcon
// add cartReducer to rootReducer
// todo select the isHidden piece of state from the store in Header
// todo commit

import TOGGLE_CART_HIDDEN from './cart.types';

const INITIAL_STATE_CART = {
  isHidden: true,
};

const cartReducer = (state = INITIAL_STATE_CART, action = {}) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export default cartReducer;
