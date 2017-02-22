import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Modal } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

import './header.css';

/**
 * 	Header component to be displayed at the top of every page
 */
export class Header extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      modalType: null
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  // Open the appropriate modal type (signin vs signup)
  open(modalType) {
    this.setState({
      showModal: true,
      modalType: modalType
    });
  }

  // Close the modal
  close() {
    this.setState({
      showModal: false,
      modalType: null
    });
  }

  // If the user has been authenticated, close the modal
  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated) {
      this.close();
    }
  }

  // Show the appropriate authentication navigation items depending on whether the user is signed in or not
  renderLinks() {
    const {authenticated, signoutUser} = this.props;
    // If the user is authenticated, show only the sign out navigation item
    if (authenticated) {
      return (
        <NavItem onClick={() => signoutUser()}>Sign Out <i className="fa fa-sign-out"></i></NavItem>
      );
      // Otherwise show only the sign up and sign in items
    } else {
      return [
        <NavItem onClick={() => this.open("Sign In")} key={1}>Sign In <i className="fa fa-sign-in"></i></NavItem>,
        <NavItem onClick={() => this.open("Sign Up")} key={2}>Register <i className="fa fa-user-plus"></i></NavItem>
      ];
    }
  }

  // Show the appropriate modal - signin vs signup
  renderModal() {
    if (this.state.modalType === "Sign In") {
      return <Signin />;
    } else if (this.state.modalType === "Sign Up") {
      return <Signup />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
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
              <LinkContainer to="/categories"><NavItem>Categories</NavItem></LinkContainer>
              <LinkContainer to="/countries"><NavItem>Countries</NavItem></LinkContainer>
              {this.renderLinks()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalType}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.renderModal()}
          </Modal.Body>
          <Modal.Footer>
            <i className="fa fa-street-view"></i> The Street View Tourist
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Header);