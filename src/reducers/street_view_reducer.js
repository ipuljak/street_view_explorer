import {
  FETCH_TYPES,
  VIEWS_BY_TYPE,
  CURRENT_COUNTRY,
  CURRENT_VIEW,
  CURRENT_COMMENTS,
  DELETE_COMMENT,
  USER_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/types';

/**
 *  Main street_view reducer
 */
export default function (state = {}, action) {
  switch (action.type) {
    // Set types to be the categories/countries retrieved from the API
    case FETCH_TYPES:
      return {...state, types: action.payload };
    // Set allViews to be the list of available views once given a category/country
    case VIEWS_BY_TYPE:
      return {...state, allViews: action.payload };
    // Set country to be country retrieved from the API
    case CURRENT_COUNTRY:
      return {...state, country: action.payload };
    // Set view to be the currently selected view
    case CURRENT_VIEW:
      return {...state, view: action.payload };
    // Set comments to be the comments of the currently selected view
    case CURRENT_COMMENTS:
      return {...state, comments: action.payload };
    // Remove a comment that a user has posted
    // case DELETE_COMMENT:
    //   var cIndex = state.comments.indexOf(action.payload);
    //   if (cIndex > -1) {
    //     state.comments.splice(cIndex, 1);
    //   }
    //   return {...state, comments: [...state.comments] };
    // Set favorites to be a list of the user's favorite views
    case USER_FAVORITES:
      return {...state, favorites: action.payload };
    // Add a favorite into the list of a user's favorite views
    case ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload] };
    // Remove a favorite into the list of a user's favorite views
    case REMOVE_FAVORITE:
      var fIndex = state.favorites.indexOf(action.payload);
      if (fIndex > -1) {
        state.favorites.splice(fIndex, 1);
      }
      return {...state, favorites: [...state.favorites] };
    default:
      return state;
  }
}