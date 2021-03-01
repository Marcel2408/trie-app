import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0)
);
