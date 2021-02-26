import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

const CartIcon = () => {
  // const handleClick = (e) => {
  //   toggleCartDropdown();
  // };
  // onClick={handleClick}
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="cart-counter">0</span>
    </div>
  );
};

export default CartIcon;
