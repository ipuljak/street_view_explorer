import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 *  Sidebar class component
 *    -> Renders the sidebar for navigating a country's cities
 */
class Sidebar extends Component {
  // Show all of the possible cities in the sidebar
  renderLocations(cities) {
    // Sort the cities alphabetically
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