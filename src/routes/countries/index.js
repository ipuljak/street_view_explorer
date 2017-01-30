import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions';

import Footer from '../../core/Footer';

/**
 *  Countries container which fetches and displays every category type in the database
 */
class Countries extends Component {
  // If the types (categories/countries) have not been loaded yet, then fetch them from the database
  componentWillMount() {
    if (!this.props.types) {
      this.props.getDistincts();
    }
  }

  // Scroll the page to the top once mounted
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Render each of the individual categories in thumbnails
  renderCountries() {
    if (this.props.types) {
      return this.props.types['country'].map((item) => {
        return (
          <Link
            key={item.name}
            to={`/country/${item.name}`}
            style={{ textDecoration: 'none', color: 'black' }}>
            <div className="col-lg-4 col-md-6">
              <div className="thumbnail">
                <img src={item.data.image} alt="" />
                <h4>{item.name}</h4>
              </div>
            </div>
          </Link>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col-lg-12">
            <h2>Countries of the World</h2>
            <hr className="primary" />
          </div>
          <div className="row">
            {this.renderCountries()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    types: state.streetView.types
  }
}

export default connect(mapStateToProps, actions)(Countries);