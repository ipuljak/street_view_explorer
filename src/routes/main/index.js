import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Sidebar from './sidebar';
import View from './view';

import './main.css';

/**
 *  Sort an array of objects given a list of field parameters to sort by
 */
const fieldSorter = fields => {
  return (a, b) => fields.map(o => {
    let dir = 1;
    if (o[0] === '-') { dir = -1; o = o.substring(1); }
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
  }).reduce((p, n) => p ? p : n, 0);
}

/**
 *  Class component Type which acts as a container listening for changes in:
 *      - allViews (the list of views that should be rendered on the page)
 *      - currentView (the currently desired view to be rendered)
 */
class Main extends Component {
  // Load the data in immediately
  componentWillMount() {
    // Search for new locations based on the parameter from react-router URL
    this.props.searchLocations(this.props.params.term);
  }

  // Scroll the page on any rerenders
  componentWillUpdate() {
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps) {
    const {allViews, setView, getComments} = this.props;

    // Preemptively load in the first view and it's comments and prevent a render
    if (nextProps.allViews !== allViews) {
      // Sort the locations first by type and then name
      const sortedLocations = nextProps.allViews.sort(fieldSorter(['type', 'name']));
      // Set the current view and fetch its comments
      setView(sortedLocations[0]);
      getComments(sortedLocations[0]._id)
      return false;
    }

    return true;
  }

  // Toggle the sidebar to open or close it
  toggleSidebar() {
    document.getElementById("wrapper").classList.toggle("toggled");
  }

  // Check that data has been loaded in and work around some specific use cases before rendering
  handleLoading() {
    const {allViews, params} = this.props;

    return (
      // Check the page has views to display
      !allViews || 
      // Check that the city location matches the URL if it's a city term
      (allViews[0].location.city.toLowerCase() !== params.term.toLowerCase() &&
      // Check that the type location matches the URL if it's a type term
      allViews[0].type !== params.term && 
      // Check that the term is not a landmark
      params.term !== 'landmark'));
  }

  render() {
    const {allViews, currentView, setView, getComments} = this.props;

    // Notfy the user that the locations are loading if they aren't ready
    if (this.handleLoading()) {
      return <h2><i>Loading...</i></h2>;
    }

    return (
      <div className="container" id="wrapper">
        <Sidebar
          views={allViews}
          setView={setView}
          getComments={getComments}
          toggleSidebar={this.toggleSidebar} />
        <View
          currentView={currentView}
          toggleSidebar={this.toggleSidebar} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allViews: state.streetView.allViews,
    currentView: state.streetView.view
  };
};

export default connect(mapStateToProps, actions)(Main);