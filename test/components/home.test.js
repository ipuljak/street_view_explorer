import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';

import Home from '../../src/routes/home';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let storeStateMock = {
  streetView: {
    types: {}
  }
};

let store, component;

describe('Home', () => {
  store = mockStore(storeStateMock);
  component = mount(<Home store={store} />);

  it('renders the container', () => {
    expect(component).toBeDefined();
  });

  it('contains a footer', () => {
    expect(component.find('Footer').length).toEqual(1);
  });

  it('scrolled to the top when it was loaded', () => {
    expect(window.scrollY).toEqual(0);
  })
});