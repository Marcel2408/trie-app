import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import './BaseMap.scss';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import locations from '../../db/locations';
import MapMarker from '../map-marker/MapMarker';

import store from '../../redux/store';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const BaseMap = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
      // create marker
      const markerHTML = document.createElement('div');
      ReactDom.render(
        <Provider store={store}>
          <MapMarker key={loc.id} location={loc} />
        </Provider>,
        markerHTML
      );

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
    map.addControl(nav, 'bottom-right');

    return () => map.remove();
  }, []);

  return (
    <main className="basemap">
      <div className="map-container" ref={mapContainerRef} />
    </main>
  );
};

export default BaseMap;
