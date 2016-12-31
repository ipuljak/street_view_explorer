import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import nl2br from 'react-newline-to-break';

import Title from './components/title';
import Street from './street_view/street_view_component';
import Comments from './comments/';
import Locations from './components/locations';

import './sidebar.css';

/** 
 *  Function which when given a parameter term, searches locations so that it's
 *  views may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters and new views).
 */
const loadData = (props) => {
    props.searchLocations(props.term);
}

/**
 *  Function to clean newlines and other special characters in some text.
 */
const cleanText = (text) => {
    return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
}

/**
 *  Class component Type which acts as a container listening for changes in:
 *      - allviews (the list of views that should be rendered on the page)
 *      - currentView (the currently desired view to be rendered)
 */
class View extends Component {
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
        const {term, allviews, setView, getComments} = this.props;

        if (nextProps.term !== term) {
            loadData(nextProps);
        }

        // Preemptively load in the first view and it's comments
        if (nextProps.allviews !== allviews) {
            setView(nextProps.allviews[0]);
            getComments(nextProps.allviews[0]._id)
        }
    }

    setNextView(item) {
        const {setView, getComments} = this.props;

        setView(item);
        getComments(item._id);
    }

    renderLocations(location) {
        return location.map((item) => {
            return (
                <div key={item._id} onClick={() => this.setNextView(item)}>
                    <Locations props={item} />
                </div>
            );
        });
    }

    toggleSidebar() {
        document.getElementById("wrapper").classList.toggle("toggled");
    }
        
    render() {
        const {allviews, currentView} = this.props;

        // Notfy the user that the locations are loading if they aren't ready
        if (!allviews || !currentView) {
            return (
                <h2><i>Oops! Something went wrong.</i></h2>
            );
        }

        return (
            <div className="viewpage" id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {this.renderLocations(allviews)}                        
                    </ul>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-12">
                            <button onClick={() => {this.toggleSidebar()}} className="btn btn-primary pull-left" id="menu-toggle">Toggle Views</button>
                            <br/>
                            <Title cur={currentView} all={allviews} />
                            <hr />
                            <div className="view">
                                <Street view={currentView.view} />
                                <hr />
                                <div className="about">
                                    <img 
                                        className="aboutPic" 
                                        src={currentView.data.image} 
                                        role="presentation" />
                                    <p> 
                                        {nl2br(cleanText(currentView.data.info))} 
                                        <span>
                                            Read more <a target="_blank" href={currentView.data.link}>here</a>.
                                        </span>
                                    </p>
                                </div>
                                <hr />
                                <h3>Comments</h3>
                                <Comments />
                                <hr />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, actions)(View);