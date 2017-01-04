import {
  FETCH_TYPES,
  VIEWS_BY_TYPE,
  CURRENT_COUNTRY,
  CURRENT_VIEW,
  CURRENT_COMMENTS
} from '../actions/types';

/**
 *  Main reducer
 */
export default function (state = {}, action) {
  switch (action.type) {
    // Set types to be the categories/countries retrieved from the API
    case FETCH_TYPES:
      return {...state, types: action.payload };
    // Set allviews to be the list of available views once given a category/country
    case VIEWS_BY_TYPE:
      return {...state, allviews: action.payload };
    // Set country to be country retrieved from the API
    case CURRENT_COUNTRY:
      return {...state, country: action.payload };
    // Set view to be the currently selected view
    case CURRENT_VIEW:
      return {...state, view: action.payload };
    // Set comments to be the comments of the currently selected view
    case CURRENT_COMMENTS:
      return {...state, comments: action.payload };
    default:
      return state;
  }
}