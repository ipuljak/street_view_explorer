import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import * as actions from '../../actions';

const renderInput = field => 
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>


class Signup extends Component {
    componentDidMount() {
        this.refs.username            // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus()                // on TextField
    }


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

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="viewpage">
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
                    <br/>
                    {this.renderAlert()}
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <br/>
                </form>
            </div>
        );
    }
}

function validate(formProps) {
    const errors = {};

    // todo : use foreach to validate

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