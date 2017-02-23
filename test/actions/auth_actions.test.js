import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mock the localStorage functionality
var mock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      //store = _.omit(store, key);
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mock,
});

let store, component;

describe('Auth Actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  describe('signinUser', () => {
    const signUpDetails = {
      username: 'test_123',
      password: 'test_password'
    };

    it('should create an AUTH_USER action', () => {
      actions.signinUser(signUpDetails);
    });
  });

  describe('signoutUser', () => {
    beforeEach(() => {
      localStorage.setItem('token', 'random_token_string');
    });

    it('should create an UNAUTH_USER action', () => {
      expect(actions.signoutUser().type).toEqual(types.UNAUTH_USER);
    });

    it('should remove a token from localStorage', () => {
      actions.signoutUser();
      expect(localStorage.getItem('token')).toBeUndefined();
    });

    it('should handle an empty token special case', () => {
      localStorage.removeItem('token');
      expect(actions.signoutUser().type).toEqual(types.UNAUTH_USER);
    });
  });

  describe('authError', () => {
    const error = 'You need to be logged in to do that!';
    const expectedAction = {
      type: types.AUTH_ERROR,
      payload: error
    };

    it('should create an AUTH_ERROR action', () => {
      expect(actions.authError(error).type).toEqual(types.AUTH_ERROR);
    });

    it('should have the correct payload', () => {
      expect(actions.authError(error).payload).toEqual(error);
    });
  });
});