import React from 'react';
// import mapboxgl from "mapbox-gl";
import './BaseMap.scss';

const BaseMap = () => {
  // mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

  // useEffect(() => {
  //   new mapboxgl.Map({
  //     container: "mapContainer",
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [-74.5, 40],
  //     zoom: 9,
  //   });
  // }, []);

  return <div id="mapContainer" className="map" />;
};

export default BaseMap;
