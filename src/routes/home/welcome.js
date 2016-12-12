import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

/**
 *  Class component Welcome which serves as the homepage for the website. 
 *  Renders a title and slogan, as well as two separate types of views:
 * 
 *      - Location Types
 *          which is a list of types of locations or structures that the 
 *          website is structured by and that the user can further explore
 *          when clicked. Links to /location/:type route.
 *          Examples of types are 'bridge', 'museum', 'zoo', etc.
 * 
 *      - Countries
 *          which is a list of the countries in the database. The user can 
 *          click to take them to a /country/:country route which then renders
 *          information about the country as well as it's cities (where views
 *          can finally be explored in depth.
 *          Examples of countries are 'Canada', 'Germany', etc.
 *  
 *  TODO:
 *      - include static proptypes for the props to clean redundancy
 *      - refactor some of the renders into separate functional components
 */
class Welcome extends Component {
    componentWillMount() {
        this.props.getDistincts();
    }
    
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderTypes() {
        if (this.props.types) {
            return this.props.types['type'].map((item) => {
                return (
                    <Link 
                        key={item}
                        to={`/location/${item}`} 
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="col-md-2 col-xs-6 center selectable">
                            <p>{this.capitalize(item)}</p>
                        </div>
                    </Link>
                );
            });
        }
    }

    renderCountries() {
        if (this.props.types) {
            return this.props.types['country'].map((item) => {
                return (
                    <Link 
                        key={item.name}
                        to={`/country/${item.name}`} 
                        style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="col-md-6 col-s-12">
                            <div className="thumbnail">
                                <img src={item.data.image} alt="" />
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                    </Link>
                );
            });
        }
    }

    render() {
        return (
            <div className="main">
                <div className="jumbotron logo">
                    <h1>>The Armchair Tourist</h1>
                    <p>Tap, swipe, and scroll as you window shop your dream getaway!</p>
                </div>
                <hr />
                <h2>Location Types</h2>
                <div className="row">
                    <div className="well">
                        <div className="row">
                            {this.renderTypes()}
                        </div>
                    </div>
                </div>
                <h2>Countries of the World</h2>
                <div className="col-md-12 center">
                    <div className="row">
                        {this.renderCountries()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        types: state.explorer.types
    }
}

export default connect(mapStateToProps, actions)(Welcome);