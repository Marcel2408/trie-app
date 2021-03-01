/* eslint-disable react/prop-types */
import React from 'react';
import ButtonRemove from '../button-remove/ButtonRemove';
import './CartItem.scss';

const CartItem = ({ item }) => {
  const { name, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item__icon" />
      <div className="cart-item__details">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__quantity">Space(s): {quantity}</div>
      </div>
      <div className="cart-item__wrapper">
        <ButtonRemove item={item} />
      </div>
    </div>
  );
};

export default CartItem;
