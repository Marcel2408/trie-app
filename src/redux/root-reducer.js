import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import popupReducer from './popup/popup.reducer';

export default combineReducers({
  cart: cartReducer,
  popup: popupReducer,
});
