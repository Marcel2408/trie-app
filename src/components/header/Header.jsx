import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';

const Header = () => {
  return (
    <header className="header section container">
      <div className="options">
        <Link className="option btn" to="/">
          BACK TO MAP
        </Link>
      </div>
      <CartIcon />
      {/* {isHidden ? null : <CartDropdown />} */}
    </header>
  );
};

export default Header;
