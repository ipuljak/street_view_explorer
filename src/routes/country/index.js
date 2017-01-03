import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import CountryView from './components/country_view_component';
import Footer from '../../core/Footer';

/** 
 *  Function which when given a parameter term, sets the country so that it's
 *  view may be rendered. Will be called each time the component receives new
 *  props (primarily for asynchronous loading given parameters).
 */
const loadData = props => {
    const {term} = props;
    props.setCountry(term);
}

/**
 *  Class component Country which loads and then renders the desired country 
 *  given a country paramater (term) from the Link route on the homepage or 
 *  manually entered in the url by the user.
 *      i.e. /country/:term
 */
class Country extends Component {
    static propTypes = {
        term: PropTypes.string.isRequired,
        setCountry: PropTypes.func.isRequired
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
    }

    render() {
        const {country} = this.props;

        if (!country) {
            // FUTURE UPDATE: render an animated loading icon instead
            return (
                <div className="padded-top">
                    <h2>Loading...</h2>
                    <Footer />
                </div>
            );
        }
        else {
            return (
                <div className="container padded-top">
                    <CountryView props={country} />
                    <Footer />
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        country: state.explorer.country,
        term: ownProps.params.country
    };
}

export default connect(mapStateToProps, actions)(Country);