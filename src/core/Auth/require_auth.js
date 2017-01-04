import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 *  Higher order component which is responsible for client-side authentication
 */
export default function (ComposedComponent) {

  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      // If the user is not authenticated, move them to the home page
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // When the component will update (i.e. user signs out) -> send them back home
    componentWillUpdate(nextProps, nextState) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}