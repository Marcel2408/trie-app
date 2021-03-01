/* eslint-disable react/prop-types */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ location: { pathname } }) => {
  const isHidden = useSelector((state) => state.cart.isHidden);
  return (
    <header className="header section container">
      <div className="options">
        {pathname === '/checkout' ? (
          <Link className="option btn" to="/map">
            BACK TO MAP
          </Link>
        ) : null}
      </div>
      <CartIcon />
      {isHidden ? null : <CartDropdown />}
    </header>
  );
};

export default withRouter(Header);
