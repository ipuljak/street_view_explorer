import reducer from '../../src/reducers/street_view_reducer';
import * as types from '../../src/actions/types';

describe('Street View Reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });

  it('should handle FETCH_TYPES', () => {
    expect(
      reducer({}, {
        type: types.FETCH_TYPES,
        payload: {
          categories: ['bridge', 'castle', 'park'],
          countries: ['Canada', 'Italy', 'United States']
        }
      })
    ).toEqual(
      {
        types: {
          categories: ['bridge', 'castle', 'park'],
          countries: ['Canada', 'Italy', 'United States']
        }
      });
  });

  it('should handle VIEWS_BY_TYPE', () => {
    expect(
      reducer({}, {
        type: types.VIEWS_BY_TYPE,
        payload: {
          bridge: ['Sydney Bridge', 'Rialto', 'Golden Gate']
        }
      })
    ).toEqual(
      {
        allViews: {
          bridge: ['Sydney Bridge', 'Rialto', 'Golden Gate']
        }
      });
  });

  it('should handle CURRENT_COUNTRY', () => {
    expect(
      reducer({}, {
        type: types.CURRENT_COUNTRY,
        payload: 'Canada'
      })
    ).toEqual(
      {
        country: 'Canada'
      });
  });

  it('should handle CURRENT_VIEW', () => {
    expect(
      reducer({}, {
        type: types.CURRENT_VIEW,
        payload: {
          name: 'CN Tower',
          city: 'Toronto',
          country: 'Canada'
        }
      })
    ).toEqual(
      {
        view: {
          name: 'CN Tower',
          city: 'Toronto',
          country: 'Canada'
        }
      });
  });

  it('should handle CURRENT_COMMENTS', () => {
    expect(
      reducer({}, {
        type: types.CURRENT_COMMENTS,
        payload: [
          'This is a nice place',
          'I cant wait to visit here',
          'Testing 123'
        ]
      })
    ).toEqual(
      {
        comments: [
          'This is a nice place',
          'I cant wait to visit here',
          'Testing 123'
        ]
      });
  });

  it('should handle DELETE_COMMENT', () => {
    // DELETE_COMMENT is deprecated: delete in a future update
    expect();
  });

  it('should handle USER_FAVORITES', () => {
    expect(
      reducer({}, {
        type: types.USER_FAVORITES,
        payload: ['CN Tower', 'Rogers Centre', 'Biokovo']
      })
    ).toEqual(
      {
        favorites: ['CN Tower', 'Rogers Centre', 'Biokovo']
      });
  });

  it('should handle ADD_FAVORITE', () => {
    expect(
      reducer({
        favorites: ['CN Tower']
      }, {
          type: types.ADD_FAVORITE,
          payload: 'Biokovo'
        })
    ).toEqual(
      {
        favorites: ['CN Tower', 'Biokovo']
      });
  });

  it('should handle REMOVE_FAVORITE', () => {
    expect(
      reducer({
        favorites: ['CN Tower', 'Biokovo']
      }, {
          type: types.REMOVE_FAVORITE,
          payload: 'Biokovo'
        })
    ).toEqual(
      {
        favorites: ['CN Tower']
      });
  });
});