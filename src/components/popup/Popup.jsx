/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Popup.scss';
import { useDispatch } from 'react-redux';
import { ReactComponent as Container } from '../../assets/container.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { addToCart } from '../../redux/cart/cart.actions';

const Popup = ({ location, togglePopupHidden }) => {
  const { id, name, adress, availability } = location;
  const [quantity, setQuantity] = useState(0);
  // const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  // const warehouse = cartItems.find((item) => item.id === location.id);

  useEffect(() => {
    // console.log('warehouse --> ', warehouse);
    // if (warehouse) {
    //   setQuantity(warehouse.quantity);
    //   location.quantity = warehouse.quantity;
    // }
  });

  const addWarehouseToCart = () => {
    location.quantity = quantity;
    dispatch(addToCart(location));
  };

  const updateQuantity = (action) => {
    if (action === 'add') {
      if (availability > quantity) {
        setQuantity((prevQuantity) => (prevQuantity += 1));
      }
    } else if (action === 'substract') {
      if (quantity > 0) {
        setQuantity((prevQuantity) => (prevQuantity -= 1));
      }
    }
  };

  return (
    <div id={`popup-${id}`} className="popup" onMouseLeave={togglePopupHidden}>
      <h4 className="popup__title">{name}</h4>
      <p className="popup__text">{adress}</p>

      <div className="popup__section popup__section--availability">
        <Container className="popup__icon" />
        <p className="popup__text">{availability} space(s)</p>
      </div>
      <p>Book spaces:</p>
      <div className="popup__section popup__section--counter">
        <button
          onClick={() => updateQuantity('add')}
          type="button"
          className="popup__change-btn popup__change-btn--add"
        >
          <Plus className="popup__change-icon" />
        </button>
        <p className="popup__count">{quantity}</p>
        <button
          onClick={() => updateQuantity('substract')}
          type="button"
          className="popup__change-btn popup__change-btn--substract"
        >
          <Minus className="popup__change-icon" />
        </button>
      </div>
      <button onClick={addWarehouseToCart} type="button" className="btn popup__btn">
        add to cart
      </button>
    </div>
  );
};

export default Popup;
