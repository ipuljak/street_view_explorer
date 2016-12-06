import React from 'react';

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const LocationSelector = (item) => {
    return (
        <div className="list-group-item">
            {item.props.name}
            <div className="cityCountry">
                {capitalize(item.props.location.city)}, {item.props.location.country}
            </div>
        </div>
    );
};

export default LocationSelector;