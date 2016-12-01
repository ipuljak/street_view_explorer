import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <Link to="/" className="navbar-brand">The Armchair Tourist</Link>
            </nav>
        );
    }
}

export default Header;