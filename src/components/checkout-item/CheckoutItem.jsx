/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cart.actions';
import ButtonRemove from '../button-remove/ButtonRemove';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, address, price, quantity, availability } = cartItem;
  const dispatch = useDispatch();
  const updateQuantity = (action) => {
    if (action === 'add') {
      if (availability > quantity) {
        cartItem.quantity += 1;
        dispatch(addToCart(cartItem));
      }
    } else if (action === 'substract') {
      if (quantity > 1) {
        cartItem.quantity -= 1;
        dispatch(addToCart(cartItem));
      } else {
        dispatch(removeFromCart(cartItem));
      }
    }
  };
  return (
    <div className="checkout-item">
      <div className="checkout-item__icon" />
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__location">{address}</span>
      <div className="checkout-item__quantity">
        <span className="checkout-item__availability">Availability: {availability - quantity}</span>
        <span className="checkout-item__counter">
          Booked:
          <div className="arrow" onClick={() => updateQuantity('substract')}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => updateQuantity('add')}>
            &#10095;
          </div>
        </span>
      </div>
      <span className="checkout-item__price">{price * quantity} €</span>
      <div className="checkout-item__wrapper">
        <ButtonRemove item={cartItem} />
      </div>
    </div>
  );
};

export default CheckoutItem;
