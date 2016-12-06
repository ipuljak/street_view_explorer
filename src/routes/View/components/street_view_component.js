import React from 'react';
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
            margin: '0 auto',
            width: '100%',
            height: '65vh',
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