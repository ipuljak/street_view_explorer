import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import * as actions from '../../actions';

class Signin extends Component {
    componentWillMount() {
        // Clear any errors from previous pages
        this.props.authError(null);
    }

    componentDidMount() {
        this.refs.username            // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus()                // on TextField
    }

    handleFormSubmit({username, password}) {
        this.props.signinUser({username, password});
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
        // this comes from this.props
        const {handleSubmit}= this.props;

        return (
            <div className="viewpage container">
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
                    <br/>
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {errorMessage: state.auth.error};
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

Signin = connect(mapStateToProps, actions)(Signin);

export default Signin;
