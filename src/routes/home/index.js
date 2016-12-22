import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';
import Scrollchor from 'react-scrollchor';


/**
 *  className component Welcome which serves as the homepage for the website. 
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
class Home extends Component {
  componentWillMount() {
    this.props.getDistincts();
  }

  componentDidMount() {
      window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
            <div id="header">
                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 id="homeHeading"><i className="fa fa-street-view"></i> The Street View Tourist</h1>
                        <hr />
                        <p>Tap, swipe, and scroll as you window shop your dream getaway!</p>
                        <Scrollchor to="#about"><button className="btn btn-primary btn-xl">Get Started</button></Scrollchor>
                    </div>
                </div>
            </div>

            <section className="bg-primary" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">How would you like to explore?</h2>
                            <hr className="light" />
                            <p className="text-faded">Our locations are indexed by both countries and categories You can search 
                            for the locations of the world by selecting a country and then city, or you may search globally by 
                            selecting a category type. Once you are on a city or category page, you may instantly select views 
                            to be loaded in through a scrollable side menu. If you are on mobile, this menu can be accessed by 
                            swiping left from the right edge.</p>
                            <Link to="/countries"><a className="btn btn-default btn-xl sr-button">Countries</a></Link>
                            <hr className="light" />
                            <Link to="/categories"><a className="btn btn-default btn-xl sr-button">Categories</a></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">What this website offers...</h2>
                            <hr className="primary" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-street-view text-primary sr-icons"></i>
                                <h3>Explore the World</h3>
                                <p className="text-muted">Harness the power of Google Street View and explore the world through our wonderfully categorized locations.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                                <h3>Save your Favorites</h3>
                                <p className="text-muted">Register for free to save all of your favorite locations and to be able to leave your comments.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-globe text-primary sr-icons"></i>
                                <h3>Up to Date</h3>
                                <p className="text-muted">We are always updating the database with more and more locations for you to explore and enjoy.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="service-box">
                                <i className="fa fa-4x fa-cogs text-primary sr-icons"></i>
                                <h3>Instant Loading</h3>
                                <p className="text-muted">This website is a single page application powered by the React framework offering a fast and responsive browsing experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">Contact</h2>
                            <hr className="light" />
                            <p>Questions? Concerns? Suggestions? We'll take anything you've got. Feel free to email me below. 
                            Curious on how this website was created? Want to make an improvement or change? See some of my 
                            other work? Visit my GitHub page!</p>
                        </div>
                        <div className="col-lg-4 col-lg-offset-2 text-center">
                            <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                            <p><a href="mailto:ivanpulj@gmail.com">ivanpulj@gmail.com</a></p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i className="fa fa-github fa-3x sr-contact"></i>
                            <p><a target="_blank" href="https://github.com/ipuljak">ipuljak</a></p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.explorer.types
  }
}

export default connect(mapStateToProps, actions)(Home);