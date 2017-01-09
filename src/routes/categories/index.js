import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../../actions';

import Footer from '../../core/Footer';

/**
 *  Categories container which fetches and displays every category type in the database
 */
class Categories extends Component {
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
  renderCategories() {
    if (this.props.types) {
      return this.props.types['type'].map((item) => {
        return (
          <Link
            key={item.name}
            to={`/location/${item.name.toLowerCase()}`}
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
        <div className="container-fluid">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Global Categories</h2>
            <hr className="primary" />
          </div>
          <div className="row">
            {this.renderCategories()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    types: state.explorer.types
  }
}

export default connect(mapStateToProps, actions)(Categories);