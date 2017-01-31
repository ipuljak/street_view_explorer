import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  // Show all of the possible locations in the sidebar depending on the view types selected
  renderLocations(cities) {
    // Sort the cities
    cities.sort();
    return cities.map((city) => {
      return (
        <Link key={city} to={`/location/${city}`} className="list-group-item capitalize">
          {city}
        </Link>
      );
    });
  }

  render() {
    const {country} = this.props;

    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <p className="type-header capitalize">{country.info.name}</p>
          {this.renderLocations(country.cities)}
        </ul>
      </div>
    );
  }
}

export default Sidebar;