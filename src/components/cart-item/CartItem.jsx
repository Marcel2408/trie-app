/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cart.actions';
import './CartItem.scss';

const CartItem = ({ item }) => {
  const { name, quantity } = item;
  const dispatch = useDispatch();
  const removeItem = () => dispatch(removeFromCart(item));

  return (
    <div className="cart-item">
      <div className="cart-item__icon" />
      <div className="cart-item__details">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__quantity">Space(s): {quantity}</div>
      </div>
      <div className="cart-item__wrapper">
        <button type="button" className="cart-item__remove" onClick={removeItem}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
