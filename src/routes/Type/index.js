import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class Type extends Component {
    render() {
        //console.log( {params: {typename}} );
        return (
            <div>
                Types
            </div>
        );
    }
}

export default Type;