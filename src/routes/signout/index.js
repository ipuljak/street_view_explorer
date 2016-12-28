import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
        browserHistory.push('/');
    }

    render() {
        return null;
    }
}

export default connect(null, actions)(Signout);