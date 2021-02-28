import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toggleCartHidden from '../../redux/cart/cart.actions';
import './CartDropdown.scss';

const CartDropdown = () => {
  const dispatch = useDispatch();

  const handleMouseLeave = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown" onMouseLeave={handleMouseLeave}>
      <div className="cart-items" />
      <Link className="btn" to="/">
        GO TO CHECKOUT
      </Link>
    </div>
  );
};

export default CartDropdown;
