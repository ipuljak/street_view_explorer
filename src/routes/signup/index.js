import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions';

const renderInput = field => 
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>


class Signup extends Component {
    handleFormSubmit(formProps) {
        // Call action creator to sign up the user
        // formProps are valid

        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    //fields: {email, password, passwordConfirm}

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="viewpage">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            name="email"
                            component={renderInput}
                            type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            name="password"
                            component={renderInput}
                            type="password" />
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Confirm Passord</label>
                        <Field
                            name="passwordConfirm"
                            component={renderInput}
                            type="password" />
                    </div>
                    {this.renderAlert()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};

    // todo : use foreach to validate

    if (!formProps.email) {
        errors.email = "Please enter an email.";
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

// in auth_reducer, we already have an AUTH_ERROR error message -> action.payload
// we use a mapstatetoprops function to use that error message

const mapStateToProps = state => {
    return {errorMessage: state.auth.error};
}

Signup = reduxForm({
    form: 'signup',
    validate: validate
})(Signup);

Signup = connect(mapStateToProps, actions)(Signup);

export default Signup;