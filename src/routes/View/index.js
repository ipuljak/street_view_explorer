import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactStreetview from 'react-streetview';
import * as actions from '../../actions';

import Street from './street_view';

class View extends Component {
    componentWillMount() {
        this.props.getLocationByID(this.props.params.viewname);
    }

    componentDidUpdate() {
        // renderUpdate();
    }
    
    render() {
        return (
            <div>
                This is the View container.
                <Street props={this.props.view}/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.explorer.view
    };
}

export default connect(mapStateToProps, actions)(View);