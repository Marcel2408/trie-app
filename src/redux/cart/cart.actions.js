/* eslint-disable no-param-reassign */
import { TOGGLE_CART_HIDDEN, ADD_TO_CART, REMOVE_FROM_CART } from './cart.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addToCart = (warehouse) => ({
  type: ADD_TO_CART,
  payload: warehouse,
});

export const removeFromCart = (warehouse) => ({
  type: REMOVE_FROM_CART,
  payload: warehouse,
});
