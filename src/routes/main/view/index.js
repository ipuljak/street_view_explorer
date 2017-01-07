import React, { Component } from 'react';
import nl2br from 'react-newline-to-break';

import Street from './street_view/street_view_component';
import Comments from './comments/';

/**
 *  Function to clean newlines and other special characters in some text
 */
const cleanText = text => {
  return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
}

class View extends Component {
  render() {
    const {currentView, toggleSidebar} = this.props;

    return (
      <div id="page-content-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="view-menu visible-xs">
              <button onClick={() => {toggleSidebar()}} className="btn btn-primary pull-left viewBtn" id="menu-toggle">Views</button>
              <br />
            </div>
            <h2>{currentView.name}</h2>
            <hr />
            <div className="view">
              <Street view={currentView.view} />
              <hr />
              <div className="about">
                <img
                  className="aboutPic"
                  src={currentView.data.image}
                  role="presentation" />
                <p>
                  {nl2br(cleanText(currentView.data.info))}
                  <span>
                    Read more <a target="_blank" href={currentView.data.link}>here</a>.</span>
                </p>
              </div>
              <hr />
              <h3>Comments</h3>
              <Comments />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default View;