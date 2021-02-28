/* eslint-disable no-param-reassign */
import { TOGGLE_CART_HIDDEN, ADD_TO_CART, UPDATE_CART_ITEM } from './cart.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addToCart = (warehouse) => ({
  type: ADD_TO_CART,
  payload: warehouse,
});

export const updateCartItem = (warehouse, cartItems) => {
  const index = cartItems.findIndex((item) => item.id === warehouse.id);
  cartItems[index].quantity = warehouse.quantity;
  return {
    type: UPDATE_CART_ITEM,
    payload: cartItems,
  };
};
