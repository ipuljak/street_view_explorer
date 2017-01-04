import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import * as actions from '../../../actions';

/**
 *  Validate the form given a username and password
 */
const validate = formProps => {
  const errors = {};

  if (!formProps.username) {
    errors.username = "Please enter an username.";
  }

  if (!formProps.password) {
    errors.password = "Please enter a password.";
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation.";
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = "Passwords must match!";
  }

  return errors;
}

/**
 *  Container responsible for the Signout route
 */
class Signup extends Component {
  componentWillMount() {
    // Clear any authentication errors from previous pages
    this.props.authError(null);
  }

  // MaterialUI requirements
  componentDidMount() {
    this.refs.username
      .getRenderedComponent()
      .getRenderedComponent()
      .focus()
  }

  // Submit the form and attempt to sign the user up
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  // Submit the form and attempt to sign in the user
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div>
            <Field
              name="username"
              component={TextField}
              hintText="Enter your desired username"
              floatingLabelText="Username"
              ref="username" withRef />
          </div>
          <div>
            <Field
              name="password"
              component={TextField}
              type="password"
              hintText="Enter a password"
              floatingLabelText="Password" />
          </div>
          <div>
            <Field
              name="passwordConfirm"
              component={TextField}
              type="password"
              hintText="Confirm your password"
              floatingLabelText="Password Confirm" />
          </div>
          <br />
          {this.renderAlert()}
          <button className="btn btn-primary" type="submit">Submit</button>
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error };
}

// ReduxForm state
Signup = reduxForm({
  form: 'signup',
  validate: validate
})(Signup);

Signup = connect(mapStateToProps, actions)(Signup);

export default Signup;