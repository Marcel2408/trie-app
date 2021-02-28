import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './CartDropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleMouseLeave = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown" onMouseLeave={handleMouseLeave}>
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="cart-item">
              {item.name}
            </div>
          );
        })}
      </div>
      <Link className="btn" to="/">
        GO TO CHECKOUT
      </Link>
    </div>
  );
};

export default CartDropdown;
