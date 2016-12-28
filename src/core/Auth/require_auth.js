import React, {Component} from 'react';
import {connect} from 'react-redux';

// this is a higher order component
// usually nest these in folder structure
export default function(ComposedComponent) {

    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            // if the user is not authenticated...
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }   
        }

        // when the component will update - ie user signs out -> send them back home
        componentWillUpdate(nextProps, nextState) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            //console.log(this.context); // resourceList
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        //return {authenticated: state.authenticated};
        return {authenticated: state.auth.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}

// // in some other location... not in this file...
// // we want to use this higher order component (HOC)

// import Authentication // this is my HOC
// import Resources // this is the component that i want to wrap

// const ComposedComponent = Authentication(Resources);

// // in some render method...
// <ComposedComponent />