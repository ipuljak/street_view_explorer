import React from 'react';

/**
 *  Locations functional component 
 *    -> Displays a list of views on a location page that the 
 *       user can then click to load in the selected view. 
 * 
 *    TO DO:
 *      include a note about views that are explorable indoors
 */
const Locations = item => {
  return (
    <div className="list-group-item">
      {item.props.name}
      <div className="cityCountry capitalize">
        {item.props.location.city}, {item.props.location.country}
      </div>
      <div className="detailedView">
        {item.props.view.indoor ? '- Detailed View -' : ''}
      </div>
    </div>
  );
};

export default Locations;
