import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import './Checkout.scss';

const Checkout = () => {
  const totalPrice = useSelector((state) => selectCartTotalPrice(state));
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__block checkout__block--name">
          <span>Warehouse</span>
        </div>
        <div className="checkout__block">
          <span>Location</span>
        </div>
        <div className="checkout__block">
          <span>Quantity</span>
        </div>
        <div className="checkout__block checkout__block--price">
          <span>Price</span>
        </div>
        <div className="checkout__block">
          <span />
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} />
      ))}
      <div className="checkout__total">
        <span>TOTAL: {totalPrice} €</span>
      </div>
    </div>
  );
};

export default Checkout;
