import React, { Component } from 'react';

import Street from './street_view';
import Info from './info';
import Comments from './comments';
import FavoriteButton from './favorite';

/**
 *  Component which renders the entire view. Displays:
 *    - A button to toggle the sidebar
 *    - The title
 *    - The street view panorama window
 *    - The view's information (picture and text)
 *    - The comments section
 */
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
            <FavoriteButton />
            <hr />
            <div className="view">
              <Street view={currentView.view} />
              <hr />
              <Info data={currentView.data} />
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