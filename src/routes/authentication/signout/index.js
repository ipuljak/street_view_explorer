import { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../../actions';

/**
 *  Container responsible for the Signout route
 */
class Signout extends Component {
  componentWillMount() {
    // If this component gets mounted, sign the user out and push them to the home page
    this.props.signoutUser();
    browserHistory.push('/');
  }

  // No need to render anything
  render() {
    return null;
  }
}

export default connect(null, actions)(Signout);