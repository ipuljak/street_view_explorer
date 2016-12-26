import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import LocationSelector from './components/selector';
import View from './components/view';

/** 
 *  Function which when given a parameter term, searches locations so that it's
 *  views may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters and new views).
 */
const loadData = props => {
    const {term} = props;
    props.searchLocations(term);
}

/**
 *  Class component Type which acts as a container listening for changes in:
 *      - allviews (the list of views that should be rendered on the page)
 *      - currentView (the currently desired view to be rendered)
 * 
 *  TO DO:
 *      - refactor code into smaller functional components
 *      - rename this from Type to something that makes more sense
 *      - make this container more legible
 */
class Type extends Component {
    static propTypes = {
        term: PropTypes.string.isRequired,
        searchLocations: PropTypes.func.isRequired,
        setView: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props);
    }

    componentWillUpdate() {
        window.scrollTo(0,0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.term !== this.props.term) {
            loadData(nextProps);
        }

        // Preemptively load in the first view
        if (nextProps.allviews !== this.props.allviews) {
            this.props.setView(nextProps.allviews[0]);
        }
    }

    renderTitle() {
        const {allviews, currentView} = this.props;

        // Display a message if the view is still being loaded in
        // FUTURE UPDATE: change to animated loading icon
        if (!currentView) {
            if (!allviews) {
                return <h2>Loading...</h2>
            }
            return <h2>Loading...</h2>
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
        const {allviews, currentView, term} = this.props;

        // Notfy the user that the locations are loading if they aren't ready'
        if (!allviews) {
            return (
                <h2><i>Oops! Something went wrong. </i></h2>
            );
        }

        return (
            <div className="container viewpage">
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
        term: ownProps.params.term
    };
};

export default connect(mapStateToProps, actions)(Type);