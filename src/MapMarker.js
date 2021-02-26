import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './MapMarker.css';
import Popup from './Popup';
import mapboxgl from 'mapbox-gl';


const MapMarker = ({ location, map }) => {

  const [isClicked, setIsClicked] = useState(false);

  const toggleClick =  (e) => {
      //  popup on click
    setIsClicked(prevClick => !prevClick)
  }



  return <div onClick={toggleClick} id={location.id} className="marker">
    {isClicked && <Popup onMouseOut={toggleClick} key={location.id} location={location} />}
  </div>;
}

export default MapMarker;