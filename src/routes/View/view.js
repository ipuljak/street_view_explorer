import React, {Component} from 'react';
import {setView} from '../../actions';

const LocationSelector = (item) => {
    return (
        <div className="list-group-item">
            {item.props.name}
            <div className="cityCountry">
                {item.props.location.city}, {item.props.location.country}
            </div>
        </div>
    );
};

export default LocationSelector;