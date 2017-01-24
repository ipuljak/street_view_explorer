import React from 'react';
import nl2br from 'react-newline-to-break';

// Clean some of the special characters that may be in the text
const cleanText = text => {
  return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
}

/**
 *  Functional component that renders a list of cities of a country as well as
 *  a photograph and some information about itself.
 */
const CountryView = country => {
  const view = country.props.country;
  const info = cleanText(view.data.info);

  return (
    <div className="view">
      <h2>{view.name}</h2>
      <hr />
      <div className="about">
        <div className="aboutImage">
          <img
            src={view.data.image}
            role="presentation" />
          <div>{view.data.source}</div>
        </div>
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