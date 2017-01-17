import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';

import App from '../../src/core/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let storeStateMock = {
  auth: {
    authenticated: false
  }
};

let store, component;

describe('App', () => {
  store = mockStore(storeStateMock);
  component = shallow(<Provider store={store}><App /></Provider>);

  it('renders the app', () => {
    expect(component).toBeDefined();
  });
});
