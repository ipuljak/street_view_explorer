import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import TestUtils from 'react-addons-test-utils';
import configureMockStore from 'redux-mock-store';

import Signin from '../../src/core/Auth/Signin';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let storeStateMock = {
  auth: {
    authenticated: false
  }
};

let store, component;

describe('Signin', () => {
  store = mockStore(storeStateMock);
  component = shallow(<Provider store={store}><Signin /></Provider>);

  it('renders the container', () => {
    expect(component).toBeDefined();
  });

  it('contains a Redux Form', () => {
    expect(component.name()).toEqual('Connect(ReduxForm)');
  });
});