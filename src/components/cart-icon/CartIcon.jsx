/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './CartIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
  const itemCount = useSelector((state) => selectCartItemsCount(state));
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="cart-counter">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
