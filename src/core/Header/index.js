/**
 *  TO DO:
 *      - add authentication
 *      - styling issues
 *      - code clean-up
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './header.css';

class Header extends Component {
    renderLinks() {
        //if (this.props.authenticated) {
            // FUTURE UPDATE: FIX WHEN YOU ADD AUTH
        if (false) {
            // show a link to sign out
            return (
                <LinkContainer to="/signout"><NavItem>Sign Out <i className="fa fa-sign-out"></i></NavItem></LinkContainer>
            );
        } else {
            // show a link to sign in or sign up
            // can return a list of components rather than just enclose everything in a div
            // hardcode the key because these components are static
            return [
                <LinkContainer to="/signin" key={1}><NavItem>Sign In <i className="fa fa-sign-in"></i></NavItem></LinkContainer>,
                <LinkContainer to="/signup" key={2}><NavItem>Register <i className="fa fa-user-plus"></i></NavItem></LinkContainer>
            ];
        }
    }

    render() {
        return (
            <Navbar className="navbar-default navbar-fixed-top navbar-settings" fluid collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><i className="fa fa-street-view"></i> The Street View Tourist</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to="/"><NavItem>Home</NavItem></LinkContainer>
                    <LinkContainer to="/countries"><NavItem>Countries</NavItem></LinkContainer>
                    <LinkContainer to="/categories"><NavItem>Categories</NavItem></LinkContainer>
                    {this.renderLinks()}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
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