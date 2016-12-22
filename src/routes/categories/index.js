import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class Categories extends Component {
  componentWillMount() {
    if (!this.props.types) {
      this.props.getDistincts();
    }
  }

  componentDidMount() {
      window.scrollTo(0,0);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderTypes() {
    if (this.props.types) {
      return this.props.types['type'].map((item) => {
        return (
          <Link 
            key={item}
            to={`/location/${item}`} 
            style={{ textDecoration: 'none', color: 'black' }}>
            <div className="col-md-2 col-xs-6 center selectable">
                <p>{this.capitalize(item)}</p>
            </div>
         </Link>
        );
      });
    }
  }

  render() {
    return (
      <div className="row viewpage">
        <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">Categories</h2>
            <hr className="light" />
            <div className="row">
                <div className="well">
                    <div className="row">
                        {this.renderTypes()}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.explorer.types
  }
}

export default connect(mapStateToProps, actions)(Categories);