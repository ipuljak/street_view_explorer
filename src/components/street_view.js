import React, {Component} from 'react';
import ReactStreetview from 'react-streetview';

class Street extends Component {
    render() {
        const apiKEY = 'AIzaSyBXgICZ3gA1RMmwCACIn1CA5bD6e0sbJuQ';
        const viewOptions = {
            position: {
                lat: 43.6779984,
                lng: -79.4094524
            },
            pov: {
                heading: 300,
                pitch: 20
            },
            zoom: 0,
            showRoadLabels: false,
            addressControl: false
        };

        return (
            <div style={{
                width: '1200px',
                height: '700px',
                backgroundColor: '#eeeeee'
            }}>
                <ReactStreetview
                    apiKey={apiKEY}
                    streetViewPanoramaOptions={viewOptions}
                />
            </div>
        );
    }
}

export default Street;