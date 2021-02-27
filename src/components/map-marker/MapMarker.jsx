/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './MapMarker.scss';
import Popup from '../popup/Popup';

const MapMarker = ({ location }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log(isClicked);
    //  popup on click
    setIsClicked(true);
  };

  const handleMouseLeave = () => {
    console.log(isClicked);
    setIsClicked(false);
  };

  return (
    <div>
      <div onClick={handleClick} id={location.id} className="marker" />
      {isClicked && (
        <Popup handleMouseLeave={handleMouseLeave} key={location.id} location={location} />
      )}
    </div>
  );
};

export default MapMarker;
