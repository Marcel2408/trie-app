/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './MapMarker.scss';
import Popup from '../popup/Popup';

const MapMarker = ({ location }) => {
  const [isHidden, setisHidden] = useState(true);
  const togglePopupHidden = () => {
    setisHidden((prevHidden) => !prevHidden);
  };

  return (
    <div>
      <div onClick={togglePopupHidden} id={location.id} className="marker" />
      {isHidden ? null : (
        <Popup key={location.id} location={location} togglePopupHidden={togglePopupHidden} />
      )}
    </div>
  );
};

export default MapMarker;
