import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import './Checkout.scss';

const Checkout = () => {
  const totalPrice = useSelector((state) => selectCartTotalPrice(state));
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
        <div className="checkout__block">
          <span>Price</span>
        </div>
        <div className="checkout__block">
          <span />
        </div>
      </div>
      <div className="checkout__total">
        <span>TOTAL {totalPrice} €</span>
      </div>
    </div>
  );
};

export default Checkout;
