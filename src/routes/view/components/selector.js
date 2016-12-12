import React from 'react';

// Capitalize a given word.
const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 *  Functional component which displays a list of views on a location page 
 *  that the user can then click to load in the selected view. 
 * 
 *  TO DO:
 *      include a note about views that are explorable indoors
 */
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