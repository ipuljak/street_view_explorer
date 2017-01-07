import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Sidebar from './sidebar';
import View from './view';

import './main.css';

/** 
 *  Function which when given a parameter term, searches locations so that it's
 *  views may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters and new views)
 */
const loadData = props => {
  console.log("Load data term", props.term);
  props.searchLocations(props.term);
}

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
    term: PropTypes.string.isRequired,
    searchLocations: PropTypes.func.isRequired,
    setView: PropTypes.func.isRequired
  }

  constructor(props) {
    super();

    //this.state = {view: null};
  }

  // Load the data in immediately
  componentWillMount() {
    loadData(this.props);
  }

  // Scroll the page on any rerenders
  componentWillUpdate() {
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps) {
    const {allviews, term} = this.props;

    console.log("should update", nextProps.term, term);

    if (nextProps.term !== term) {
      console.log("TERM IS CALLED");
      return false;
    }

    if (nextProps.allviews !== allviews) {
      console.log("ALLVIEWS IS CALLED");
      return false;
    }

    return true;
  }

  // Reload the data if any the props have changed
  componentWillReceiveProps(nextProps) {
    const {allviews, setView, getComments} = this.props;

    // Preemptively load in the first view and it's comments
    if (nextProps.allviews !== allviews) {
      // Sort the locations first by type and then name
      const sortedLocations = nextProps.allviews.sort(fieldSorter(['type', 'name']));
      // Set the current view and fetch its comments
      
      //this.setState({view:sortedLocations[0]});
      //console.log(this.state);
      
      setView(sortedLocations[0]);
      getComments(sortedLocations[0]._id)
    }
  }

  // Toggle the sidebar to open or close it
  toggleSidebar() {
    document.getElementById("wrapper").classList.toggle("toggled");
  }

  render() {
    const {allviews, currentView, setView, getComments} = this.props;

    // Notfy the user that the locations are loading if they aren't ready
    if (!allviews || !currentView) {
      return (
        <div className="padded-top">
          <h2><i>Loading...</i></h2>
        </div>
      );
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
    term: ownProps.params.term
  };
};

export default connect(mapStateToProps, actions)(Main);