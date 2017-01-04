import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import nl2br from 'react-newline-to-break';

import Title from './components/title';
import Street from './street_view/street_view_component';
import Comments from './comments/';
import Locations from './components/locations';

import './sidebar.css';

/** 
 *  Function which when given a parameter term, searches locations so that it's
 *  views may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters and new views)
 */
const loadData = props => {
  props.searchLocations(props.term);
}

/**
 *  Function to clean newlines and other special characters in some text
 */
const cleanText = text => {
  return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
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
class View extends Component {
  static propTypes = {
    term: PropTypes.string.isRequired,
    searchLocations: PropTypes.func.isRequired,
    setView: PropTypes.func.isRequired
  }

  // Load the data in immediately
  componentWillMount() {
    loadData(this.props);
  }

  // Scroll the page to the top once mounted
  componentWillUpdate() {
    window.scrollTo(0, 0);
  }

  // Reload the data if any the props have changed
  componentWillReceiveProps(nextProps) {
    const {term, allviews, setView, getComments} = this.props;

    if (nextProps.term !== term) {
      loadData(nextProps);
    }

    // Preemptively load in the first view and it's comments
    if (nextProps.allviews !== allviews) {
      // Sort the locations first by type and then name
      const sortedLocations = nextProps.allviews.sort(fieldSorter(['type', 'name']));
      // Set the current view and fetch its comments'
      setView(sortedLocations[0]);
      getComments(sortedLocations[0]._id)
    }
  }

  // If the user requests a new view, load it and its comments in
  setNextView(item) {
    const {setView, getComments} = this.props;

    setView(item);
    getComments(item._id);

    // Show the navigation sidebar if on mobile
    if (window.screen.width < 768) {
      this.toggleSidebar();
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
            <Locations props={item} />
          </div>
        </div>
      );
    });
  }

  // Toggle the sidebar to open or close it
  toggleSidebar() {
    document.getElementById("wrapper").classList.toggle("toggled");
  }

  render() {
    const {allviews, currentView} = this.props;

    // Notfy the user that the locations are loading if they aren't ready
    if (!allviews || !currentView) {
      return (
        <div className="padded-top">
          <h2><i>Loading...</i></h2>
        </div>
      );
    }

    return (
      <div>
        <div className="padded-top container" id="wrapper">
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              {this.renderLocations(allviews)}
            </ul>
          </div>
          <div id="page-content-wrapper">
            <div className="">
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-menu visible-xs">
                    <button onClick={() => { this.toggleSidebar() } } className="btn btn-primary pull-left viewBtn" id="menu-toggle">Views</button>
                    <br />
                  </div>
                  <Title cur={currentView} all={allviews} />
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
                          Read more <a target="_blank" href={currentView.data.link}>here</a>.
                                        </span>
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
          </div>
        </div>
        <div className="temp">

        </div>
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

export default connect(mapStateToProps, actions)(View);