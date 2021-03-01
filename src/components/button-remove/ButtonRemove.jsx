/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cart.actions';
import './ButtonRemove.scss';

const ButtonRemove = ({ item }) => {
  const dispatch = useDispatch();
  const removeItem = () => dispatch(removeFromCart(item));

  return (
    <button type="button" className="btn-remove" onClick={removeItem}>
      &#10005;
    </button>
  );
};

export default ButtonRemove;
