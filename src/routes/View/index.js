import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

import LocationSelector from './view';

const loadData = props => {
    const {typeName} = props;
    props.getLocationsByType(typeName);
}

class Type extends Component {
    static propTypes = {
        typeName: PropTypes.string.isRequired,
        currentView: PropTypes.object.isRequired,
        getLocationsByType: PropTypes.func.isRequired,
        setView: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.typeName !== this.props.typeName) {
            loadData(nextProps);
        }
    }

    renderLocationData(location) {
        const {setView} = this.props;

        return location.map((item) => {
            return (
                <div onClick={() => setView(item)}>
                    <LocationSelector key={item._id} props={item} />
                </div>
            );
        });
    }

    renderView() {
        const {currentView} = this.props;
    
        if (!currentView) {
            return (
                <div class="list-group">
                    Just a temporary div
                </div>
            );
        }

        // WRITE THIS CODE NEXT!
        return (
            <div>HELLOOOO?</div>
        );
    }
        
    render() {
        const {allviews, typeName} = this.props;

        if (!allviews) {
            return (
                <h2><i>Loading {typeName} locations...</i></h2>
            );
        }

        return (
            <div>
                <h2>{typeName}</h2>
                <hr />
                <div className="col-md-2" id="left">
                    {this.renderLocationData(allviews)}
                </div>
                <div className="col-md-10" id="right">
                    {this.renderView()}
                </div>            
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allviews: state.explorer.allviews,
        currentView: state.explorer.view,
        typeName: ownProps.params.typename
    };
};

export default connect(mapStateToProps, actions)(Type);