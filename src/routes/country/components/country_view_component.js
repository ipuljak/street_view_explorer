import React from 'react';
import nl2br from 'react-newline-to-break';

import City from './city_item';

// Clean some of the special characters that may be in the text
const cleanText = (text) => {
  return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
}

// Render the cities of the given country
const showCities = (cities) => {
  return cities.map((item) => {
    return (
      <City key={item} name={item} />
    );
  })
}

/**
 *  Functional component that renders a list of cities of a country as well as
 *  a photograph and some information about itself.
 */
const CountryView = (country) => {
  const view = country.props.country;
  const info = cleanText(view.data.info);

  return (
    <div className="view">
      <h2>{view.name}</h2>
      <hr />
      <h3>Cities</h3>
      <div className="row">
        <div className="well">
          <div className="row">
            {showCities(country.props.cities)}
          </div>
        </div>
      </div>
      <hr />
      <div className="about">
        <img
          className="aboutPic"
          src={view.data.image}
          role="presentation" />
        <p>
          {nl2br(info)}
          <span>Read more <a target="_blank" href={view.data.link}>here</a>.</span>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default CountryView;