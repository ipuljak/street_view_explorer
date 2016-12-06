import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import LocationSelector from './components/selector';
import View from './components/view';

const loadData = props => {
    const {typeName} = props;
    props.getLocationsByType(typeName);
}

class Type extends Component {
    static propTypes = {
        typeName: PropTypes.string.isRequired,
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

    renderTitle() {
        const {allviews, currentView} = this.props;

        if (!currentView) {
            if (!allviews) {
                return <h2>Loading...</h2>
            }

            return <h3>Select a location to get started!</h3>
        }

        return <h2>{currentView.name}</h2>

    }

    renderLocationData(location) {
        const {setView} = this.props;

        return location.map((item) => {
            return (
                <div key={item._id} onClick={() => setView(item)}>
                    <LocationSelector props={item} />
                </div>
            );
        });
    }

    renderView(view) { 
        if (!view) {
            return (
                <div></div>
            );
        }

        return (
            <View props={view} />
        );
    }
        
    render() {
        const {allviews, currentView, typeName} = this.props;

        // Notfy the user that the locations are loading if they aren't ready'
        if (!allviews) {
            return (
                <h2><i>Loading {typeName} locations...</i></h2>
            );
        }

        return (
            <div>
                {this.renderTitle()}
                <hr />
                <div className="col-md-10" id="left">
                    {this.renderView(currentView)}
                </div>  
                <div className="col-md-2" id="right">
                    {this.renderLocationData(allviews)}
                </div>
                <hr />     
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