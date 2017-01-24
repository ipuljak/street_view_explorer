import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import CountryView from './country_view';
import Sidebar from './sidebar';
import '../main/main.css';

/** 
 *  Function which when given a parameter term, sets the country so that it's
 *  view may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters).
 */
const loadData = props => {
  const {term} = props;
  props.setCountry(term);
}

/**
 *  Class component Country which loads and then renders the desired country 
 *  given a country paramater (term) from the Link route on the homepage or 
 *  manually entered in the url by the user.
 *      i.e. /country/:term
 */
export class Country extends Component {
  static propTypes = {
    term: PropTypes.string.isRequired,
    setCountry: PropTypes.func.isRequired
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
    if (nextProps.term !== this.props.term) {
      loadData(nextProps);
    }
  }

  // Toggle the sidebar to open or close it
  toggleSidebar() {
    document.getElementById("wrapper").classList.toggle("toggled");
  }

  render() {
    const {country} = this.props;

    // If the country has not been loaded in yet, let the user know it's loading
    if (!country) {
      // FUTURE UPDATE: render an animated loading icon instead
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    else {
      return (
        <div className="container" id="wrapper">
          <Sidebar
            country={country}
            toggleSidebar={this.toggleSidebar} />
          <div>
            <CountryView 
              country={country}
              toggleSidebar={this.toggleSidebar} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    country: state.streetView.country,
    term: ownProps.params.country
  };
}

export default connect(mapStateToProps, actions)(Country);