import React from 'react';

import { apiKEY } from '../../../../config.js';

import ReactStreetview from './street_view';


/**
 *  Functional component that contains the structure of the street view window.
 *  All of the parameters for the desired location are passed through here.
 *  The options to be included for Google's API can be set here.
 *  
 *  TO DO:
 *      find a way to include a clickable mini-map on the street view window
 */
const Street = item => {
  const view = item.view;

  const viewOptions = {
    position: {
      lat: view.lat,
      lng: view.lng
    },
    pov: {
      heading: view.heading,
      pitch: view.pitch
    },
    zoom: view.zoom,
    showRoadLabels: false,
    addressControl: false,
    motionTracking: false
  };
  
  return (
    <div style={{
      margin: '0 auto',
      width: '100%',
      height: '50vh',
      backgroundColor: '#EEEEEE'
    }}>
      <ReactStreetview
        apiKey={apiKEY}
        streetViewPanoramaOptions={viewOptions}
        />
    </div>
  );
}

export default Street;