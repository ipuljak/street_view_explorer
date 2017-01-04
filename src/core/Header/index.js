import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import './header.css';

/**
 * 	Header component to be displayed at the top of every page
 */
class Header extends Component {
  // Show the appropriate authentication navigation items depending on whether the user is signed in or not
  renderLinks() {
    // If the user is authenticated, show only the sign out navigation item
    if (this.props.authenticated) {
      return (
        <LinkContainer to="/signout"><NavItem>Sign Out <i className="fa fa-sign-out"></i></NavItem></LinkContainer>
      );
    // Otherwise show only the sign up and sign in items
    } else {
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
            <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/countries"><NavItem>Countries</NavItem></LinkContainer>
            <LinkContainer to="/categories"><NavItem>Categories</NavItem></LinkContainer>
            {this.renderLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);