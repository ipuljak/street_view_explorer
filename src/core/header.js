/**
 *  TO DO:
 *      - add authentication
 *      - styling issues
 *      - code clean-up
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    renderLinks() {
        //if (this.props.authenticated) {
            // FUTURE UPDATE: FIX WHEN YOU ADD AUTH
        if (false) {
            // show a link to sign out
            return (
                <li className="nav-item">
                    <Link to="/signout" className="nav-link">Sign Out</Link>
                </li>
            );
        } else {
            // show a link to sign in or sign up
            // can return a list of components rather than just enclose everything in a div
            // hardcode the key because these components are static
            return [
                <li className="nav-item" key={1}>
                    <Link to="/signin">Sign In</Link>
                </li>,

                <li className="nav-item" key={2}>
                    <Link to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">The Armchair Tourist</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         authenticated: state.auth.authenticated
//     };
// }
// export default connect(mapStateToProps)(Header);

export default Header;