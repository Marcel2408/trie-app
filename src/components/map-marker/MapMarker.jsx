/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './MapMarker.scss';
import Popup from '../popup/Popup';

const MapMarker = ({ location }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    //  popup on click
    setIsClicked((prevClick) => !prevClick);
  };

  return (
    <div onClick={toggleClick} id={location.id} className="marker">
      {isClicked && <Popup onMouseOut={toggleClick} key={location.id} location={location} />}
    </div>
  );
};

export default MapMarker;
