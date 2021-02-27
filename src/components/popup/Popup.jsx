/* eslint-disable react/prop-types */
import React from 'react';
import './Popup.scss';
import { ReactComponent as Container } from '../../assets/container.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const Popup = ({ location, handleMouseLeave }) => {
  const { id, name, adress, availability } = location;

  const testClick = () => {
    console.log('clicked');
  };

  return (
    <div id={`popup-${id}`} className="popup" onMouseLeave={handleMouseLeave}>
      <h4 className="popup__title">{name}</h4>
      <p className="popup__text">{adress}</p>

      <div className="popup__section popup__section--availability">
        <Container className="popup__icon" />
        <p className="popup__text">{availability} space(s)</p>
      </div>
      <p>Book spaces:</p>
      <div className="popup__section popup__section--counter">
        <button type="button" className="popup__change-btn popup__change-btn--add">
          <Plus className="popup__change-icon" />
        </button>
        <p className="popup__count">0</p>
        <button type="button" className="popup__change-btn popup__change-btn--substract">
          <Minus className="popup__change-icon" />
        </button>
        {/* <p>Book spaces:</p>
        <div>
          <input type="text" />
        </div> */}
      </div>
      <button onClick={testClick} type="button" className="btn popup__btn">
        add to cart
      </button>
    </div>
  );
};

export default Popup;
