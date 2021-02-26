import React from 'react';
import { Link } from 'react-router-dom';
import './CartDropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Link className="btn" to="/">
      GO TO CHECKOUT
    </Link>
  </div>
);

export default CartDropdown;
