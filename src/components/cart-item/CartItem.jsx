/* eslint-disable react/prop-types */
import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { name, quantity } }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__icon" />
      <div className="cart-item__details">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__quantity">Quantity: {quantity}</div>
      </div>
      <div className="cart-item__wrapper">
        <button type="button" className="cart-item__remove">
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
