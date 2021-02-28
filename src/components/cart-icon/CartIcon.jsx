/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './CartIcon.scss';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="cart-counter">0</span>
    </div>
  );
};

export default CartIcon;
