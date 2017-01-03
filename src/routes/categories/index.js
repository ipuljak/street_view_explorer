import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

import Footer from '../../core/Footer';

class Countries extends Component {
  componentWillMount() {
    if (!this.props.types) {
      this.props.getDistincts();
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

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
      <div className="padded-top">
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

function mapStateToProps(state) {
  return {
    types: state.explorer.types
  }
}

export default connect(mapStateToProps, actions)(Countries);