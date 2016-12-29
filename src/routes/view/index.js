import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import Locations from './components/locations';
import Title from './components/title';
import ViewDisplay from './components/view';

/** 
 *  Function which when given a parameter term, searches locations so that it's
 *  views may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters and new views).
 */
const loadData = (props) => {
    props.searchLocations(props.term);
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
class View extends Component {
    static propTypes = {
        term: PropTypes.string.isRequired,
        searchLocations: PropTypes.func.isRequired,
        setView: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
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

        // Preemptively load in the first view and it's comments
        if (nextProps.allviews !== this.props.allviews) {
            this.props.setView(nextProps.allviews[0]);
            this.props.getComments(nextProps.allviews[0]._id)
        }
    }

    setNextView(item) {
        const {setView, getComments} = this.props;
        setView(item);
        getComments(item._id);
    }

    renderLocations(location) {
        const {setView} = this.props;

        return location.map((item) => {
            return (
                <div key={item._id} onClick={() => this.setNextView(item)}>
                    <Locations props={item} />
                </div>
            );
        });
    }
        
    render() {
        const {allviews, currentView, currentComments} = this.props;

        // Notfy the user that the locations are loading if they aren't ready
        if (!allviews) {
            return (
                <h2><i>Oops! Something went wrong.</i></h2>
            );
        }

        return (
            <div className="container viewpage">
                <Title cur={currentView} all={allviews} />
                <hr />
                <div className="col-md-10" id="left">
                    <ViewDisplay cur={currentView} />
                </div>  
                <div className="col-md-2" id="right">
                    {this.renderLocations(allviews)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allviews: state.explorer.allviews,
        currentView: state.explorer.view,
        currentComments: state.explorer.currentComments,
        term: ownProps.params.term
    };
};

export default connect(mapStateToProps, actions)(View);