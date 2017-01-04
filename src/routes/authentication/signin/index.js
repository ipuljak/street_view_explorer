import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import * as actions from '../../../actions';

/**
 *  Container responsible for the Signin route
 */
class Signin extends Component {
  componentWillMount() {
    // Clear any errors from previous pages
    this.props.authError(null);
  }

  // MaterialUI requirements
  componentDidMount() {
    this.refs.username
      .getRenderedComponent()
      .getRenderedComponent()
      .focus()
  }

  // Submit the form and attempt to sign in the user
  handleFormSubmit({username, password}) {
    this.props.signinUser({ username, password });
  }

  // Show an error message to the user if there is a problem signing in
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="padded-top container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div>
            <Field
              name="username"
              component={TextField}
              hintText="Enter your username"
              floatingLabelText="Username"
              ref="username" withRef />
          </div>
          <div>
            <Field
              name="password"
              component={TextField}
              type="password"
              hintText="Enter your password"
              floatingLabelText="Password" />
          </div>
          <br />
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
}

// ReduxForm state
Signin = reduxForm({
  form: 'signin'
})(Signin);

Signin = connect(mapStateToProps, actions)(Signin);

export default Signin;
