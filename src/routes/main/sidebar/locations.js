import React from 'react';

/**
 *  Functional component which displays a list of views on a location page 
 *  that the user can then click to load in the selected view. 
 * 
 *  TO DO:
 *      include a note about views that are explorable indoors
 */
const Locations = props => {
  const {item} = props;
  
  return (
    <div className="list-group-item">
      {item.name}
      <div className="cityCountry capitalize">
        {item.location.city}, {item.location.country}
      </div>
    </div>
  );
};

export default Locations;