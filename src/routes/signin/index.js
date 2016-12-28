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

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
        this.props.signinUser({email, password});
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
