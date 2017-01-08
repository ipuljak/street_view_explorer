import React, { Component, PropTypes } from 'react';
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
 *      - allviews (the list of views that should be rendered on the page)
 *      - currentView (the currently desired view to be rendered)
 */
class Main extends Component {
  static propTypes = {
    //term: PropTypes.string.iuired,
    searchLocations: PropTypes.func.isRequired,
    setView: PropTypes.func.isRequired
  }

  // Load the data in immediately
  componentWillMount() {
    console.log("OWNPROPS", this.props.idd);
    // Search for new locations based on the parameter from react-router URL
    this.props.searchLocations(this.props.params.term);
  }

  // Scroll the page on any rerenders
  componentWillUpdate() {
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps) {
    const {allviews, currentView, setView, getComments} = this.props;

    console.log("SHOULD UPDATE", this.props.idd);

    // Preemptively load in the first view and it's comments and prevent a render
    if (nextProps.allviews !== allviews) {
      // Sort the locations first by type and then name
      const sortedLocations = nextProps.allviews.sort(fieldSorter(['type', 'name']));
      // Set the current view and fetch its comments
      setView(sortedLocations[0]);
      getComments(sortedLocations[0]._id)
      return false;
    }

    return true;
  }

  componentWillUnmount() {
    
  }

  // Toggle the sidebar to open or close it
  toggleSidebar() {
    document.getElementById("wrapper").classList.toggle("toggled");
  }

  // Check that all the appropriate data types have been loaded in before render
  handleLoading() {
    const {allviews, currentView} = this.props;

    return (!allviews || !currentView || 
      (allviews[0].location.city.toLowerCase() !== this.props.params.term.toLowerCase() &&
        allviews[0].type !== this.props.params.term && this.props.params.term !== 'landmark'));
  }

  render() {
    const {allviews, currentView, setView, getComments} = this.props;

    // Notfy the user that the locations are loading if they aren't ready
    if (this.handleLoading()) {
      return (<div className="padded-top">
        <h2><i>Loading...</i></h2>
      </div>);
    }

    return (
      <div className="padded-top container" id="wrapper">
        <Sidebar
          views={allviews}
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
    allviews: state.explorer.allviews,
    currentView: state.explorer.view,
    idd: ownProps.routeParams.term
    //term: ownProps.params.term,
    //loading: state.explorer.loading
  };
};

export default connect(mapStateToProps, actions)(Main);