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
const CountryView = props => {
  const toggleSidebar = props.toggleSidebar;
  const view = props.country.info;
  const info = cleanText(view.data.info);

  return (
    <div className="view" id="page-content-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="view-menu visible-xs">
            <button onClick={() => {toggleSidebar()}} className="btn btn-primary pull-left viewBtn" id="menu-toggle">Explore Cities</button>
            <br />
          </div>
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
      </div>
    </div>
  );
}

export default CountryView;