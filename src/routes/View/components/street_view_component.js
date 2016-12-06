import React, {Component} from 'react';
import ReactStreetview from '../containers/street_view_container';
import {apiKEY} from '../../../config.js';

const Street = (item) => {
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
        addressControl: false
    };

    return (
        <div style={{
            width: '70%',
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