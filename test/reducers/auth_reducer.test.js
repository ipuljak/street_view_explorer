import reducer from '../../src/reducers/auth_reducer';
import * as types from '../../src/actions/types';

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });

  it('should handle AUTH_USER', () => {
    expect(
      reducer({}, {
        type: types.AUTH_USER
      })
    ).toEqual(
      {
        error: '',
        authenticated: true
      });
  });

  it('should handle AUTH_NAME', () => {
    expect(
      reducer({}, {
        type: types.AUTH_NAME,
        payload: 'Ivan'
      })
    ).toEqual(
      {
        username: 'Ivan'
      });
  });

  it('should handle UNAUTH_USER without data', () => {
    expect(
      reducer({}, {
        type: types.UNAUTH_USER
      })
    ).toEqual(
      {
        authenticated: false
      });
  });

  it('should handle UNAUTH_USER with data', () => {
    expect(
      reducer({
        data: 'This should be deleted from the state after UNAUTH_USER call'
      }, {
          type: types.UNAUTH_USER
        })
    ).toEqual(
      {
        authenticated: false
      });
  });

  it('should handle AUTH_ERROR', () => {
    expect(
      reducer({}, {
        type: types.AUTH_ERROR,
        payload: 'There was a problem signing in!'
      })
    ).toEqual(
      {
        error: 'There was a problem signing in!'
      });
  });
});