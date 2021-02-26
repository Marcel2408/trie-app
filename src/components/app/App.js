import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import mapboxgl from 'mapbox-gl';

import './App.scss';
import locations from '../../db/locations';
import MapMarker from '../map-marker/MapMarker';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [2.131958079960207, 41.33007125593857],
      // zoom: 6
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
      // create marker
      const markerHTML = document.createElement('div');
      ReactDOM.render(<MapMarker key={loc.id} location={loc} />, markerHTML);

      // add marker to map
      new mapboxgl.Marker({
        element: markerHTML,
        anchor: 'bottom',
      })
        .setLngLat(loc.coordinates)
        .addTo(map);

      // extends the map bpund to include current location
      bounds.extend(loc.coordinates);
    });

    // fit all locations in the map bounds
    map.fitBounds(bounds, {
      padding: {
        top: 75,
        bottom: 75,
      },
    });

    // add navigation control (the +/- zoom buttons)
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;
