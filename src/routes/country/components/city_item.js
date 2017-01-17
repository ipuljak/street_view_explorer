import React from 'react';
import { Link } from 'react-router';

/**
 *  Functional component that displays a single city for a country.
 *  It contains a Link tag to anchor it to a /location/:city route.
 */
const City = city => {
  return (
    <Link
      key={city.name}
      to={`/location/${city.name}`}
      style={{ textDecoration: 'none', color: 'black' }}>

      <div className="col-md-2 col-xs-6 center selectable">
        <p>{city.name.replace(/\b\w/g, l => l.toUpperCase())}</p>
      </div>
    </Link>
  );
}

export default City;
