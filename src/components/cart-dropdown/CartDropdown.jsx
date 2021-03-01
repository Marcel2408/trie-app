/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const dispatch = useDispatch();

  const handleMouseLeave = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown" onMouseLeave={handleMouseLeave}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <button type="button" className="btn" onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default withRouter(CartDropdown);
