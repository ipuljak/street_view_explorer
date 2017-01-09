import React, { Component } from 'react';

import Locations from './locations';

class Sidebar extends Component {
  // If the user requests a new view, load it and its comments in
  setNextView(item) {
    const {setView, getComments, toggleSidebar} = this.props;

    setView(item);
    getComments(item._id);

    // Show the navigation sidebar if on mobile
    if (window.screen.width < 768) {
      toggleSidebar();
    }
  }

  // Show all of the possible locations in the sidebar depending on the view types selected
  renderLocations(location) {
    let currentType = '';
    let currentTypeHTML = '';

    return location.map((item) => {
      currentTypeHTML = '';
      // Create a header for the type if it has not been created yet
      if (currentType !== item.type) {
        currentType = item.type;
        // If a city page exists, put it at the front of the array so that it's loaded first
        if (item.type !== "_city") {
          currentTypeHTML = <p className="type-header capitalize">{item.type}</p>;
        }
      }

      return (
        <div key={item._id}>
          {currentTypeHTML}
          <div onClick={() => this.setNextView(item)}>
            <Locations item={item} />
          </div>
        </div>
      );
    });
  }

  render() {
    const {views} = this.props;

    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {this.renderLocations(views)}
        </ul>
      </div>
    );
  }
}

export default Sidebar;