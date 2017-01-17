import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';

import Header from '../../src/core/Header';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let storeStateMock = {
  auth: {
    authenticated: false
  }
};

let store, component, links;

/**
 *  Testing the Header component
 */
describe('Header', () => {
  store = mockStore(storeStateMock);
  component = shallow(<Header store={store} />).shallow();
  links = component.find('NavItem');

  it('renders the container', () => {
    expect(component.find('div').length).toEqual(1);
  });

  it('renders an IndexLinkContainer to "/"', () => {
    const indexLinkContainer = component.find('IndexLinkContainer').first();
    expect(indexLinkContainer.props().to).toBe('/');
  });

  it('renders a NavItem with the text "Home"', () => {
    const indexNavItem = links.first();
    expect(indexNavItem).toBeDefined();
    expect(indexNavItem.childAt(0).text()).toBe('Home');
  });

  it('renders a LinkContainer to "/categories"', () => {
    const categoriesLinkContainer = component.find('LinkContainer').first();
    expect(categoriesLinkContainer.props().to).toBe('/categories');
  });

  it('renders a NavItem with the text "Categories"', () => {
    const categoriesNavItem = component.findWhere(n => n.props().to === '/categories')
    expect(categoriesNavItem).toBeDefined();
    expect(categoriesNavItem.childAt(0).childAt(0).text()).toBe('Categories');
  });

  it('does not initially display a modal', () => {
    const modal = component.find('Modal').first();
    expect(modal).toBeDefined();
    expect(modal.props().show).toBeFalsy();
  });

  describe('when a user goes to sign up', () => {
    beforeEach(() => {
      const buttonClick = sinon.spy();
      store = mockStore(storeStateMock);
      component = shallow(<Header store={store} buttonClick={buttonClick} />).shallow();
    });

    it('sets showModal state to be true when the sign-in button is clicked', () => {
      const navItem = component.find('.fa-sign-in').first().parent();
      navItem.simulate('click');
      expect(component.state().showModal).toBeTruthy();
    });

    it('shows a modal when the sign-in button is clicked', () => {
      const navItem = component.find('.fa-sign-in').first().parent();
      navItem.simulate('click');
      const modal = component.find('Modal').first();
      expect(modal.props().show).toBeTruthy();
    });
  });

  describe('when not authenticated', () => {
    it('shows the user a sign-in NavItem', () => {
      expect(component.find('.fa-sign-in').length).toEqual(1);
    });

    it('does not show the user a sign out NavItem', () => {
      expect(component.find('.fa-sign-out').length).toEqual(0);
    });
  });

  describe('when authenticated', () => {
    // Switch authenticated state to be true
    beforeEach(() => {
      storeStateMock.auth.authenticated = true;
      store = mockStore(storeStateMock);
      component = shallow(<Header store={store} />).shallow();
    });

    it('shows the user a sign out NavItem', () => {
      expect(component.find('.fa-sign-out').length).toEqual(1);
    });

    it('does not show the user a sign in NavItem', () => {
      expect(component.find('.fa-sign-in').length).toEqual(0);
    });
  });
});