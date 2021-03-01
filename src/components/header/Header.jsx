import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = () => {
  const isHidden = useSelector((state) => state.cart.isHidden);
  return (
    <header className="header section container">
      <div className="options">
        <Link className="option btn" to="/map">
          BACK TO MAP
        </Link>
      </div>
      <CartIcon />
      {isHidden ? null : <CartDropdown />}
    </header>
  );
};

export default Header;
