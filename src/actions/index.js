import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH_USER,
  AUTH_NAME,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_TYPES,
  VIEWS_BY_TYPE,
  CURRENT_COUNTRY,
  CURRENT_VIEW,
  CURRENT_COMMENTS,
  USER_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './types';

const ROOT_URL = 'https://streetviewtourist.com/api/street_view';

/**
 * ========================================================
 *                  AUTHENTICATION ACTIONS
 * ========================================================
 */

/**
 *  Authenticate and sign in a user given a username and password
 */
export function signinUser({username, password}) {
  return function (dispatch) {
    // Submit username/password to server
    axios.post(`${ROOT_URL}/auth/signin`, { username, password }) //{username: username, password: password}
      .then(response => {
        // If the request is good update state to indicate that the user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - Save their username
        dispatch({
          type: AUTH_NAME,
          payload: username
        });
        // - Redirect to the home route
        browserHistory.push('/');
      })
      .catch(() => {
        // If request is bad show an error to the user
        dispatch(authError('Username or password is incorrect.'));
      });
  }
}

/** 
 *  Register a user given a unique username and password
 */
export function signupUser({username, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/auth/signup`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: AUTH_NAME,
          payload: username
        });
        browserHistory.push('/');
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  }
}

/**
 *  Sign a user out
 */
export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

/**
 *  Set the state to AUTH_ERROR to indicate an error occured during an authentication API call
 */
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

/**
 * ========================================================
 *                  STREET_VIEW ACTIONS
 * ========================================================
 */

/**
 *  Fetch all the distinct categories of locations from the API server
 */
export function getDistincts() {
  const API_CALL = `${ROOT_URL}/info/get_distincts`;
  return function (dispatch) {
    axios.get(API_CALL)
      .then(response => {
        dispatch({
          type: FETCH_TYPES,
          payload: response.data
        });
      });
  }
}

/**
 *  Given a country, fetch its information and cities
 */
export function setCountry(term) {
  const API_CALL = `${ROOT_URL}/info/get_country_info?country=${term}`;
  return function (dispatch) {
    axios.get(API_CALL)
      .then(response => {
        dispatch({
          type: CURRENT_COUNTRY,
          payload: response.data
        });
      });
  }
}

/**
 *  Return a list of locations given a search term (city, type, etc)
 */
export function searchLocations(term) {
  const API_CALL = `${ROOT_URL}/info/search_locations?search=${term}`;
  return function (dispatch) {
    axios.get(API_CALL)
      .then(response => {
        dispatch({
          type: VIEWS_BY_TYPE,
          payload: response.data
        });
      });
  }
}

/**
 *  Set the current view
 */
export function setView(location) {
  return {
    type: CURRENT_VIEW,
    payload: location
  };
}

/**
 * ========================================================
 *                  COMMENTING ACTIONS
 * ========================================================
 */


/**
 *  Return a list of comments given a view ID
 */
export function getComments(id) {
  const API_CALL = `${ROOT_URL}/comments/get_comments?id=${id}`;
  return function (dispatch) {
    axios.get(API_CALL)
      .then(response => {
        dispatch({
          type: CURRENT_COMMENTS,
          payload: response.data
        });
      });
  }
}

/**
 * ========================================================
 *                  FAVORITING ACTIONS
 * ========================================================
 */


/**
 *  Return a list of a user's favorite views given their username
 */
export function getFavorites(username) {
  const API_CALL = `${ROOT_URL}/favorites/get_favorites?username=${username}`;
  return function (dispatch) {
    axios.get(API_CALL)
      .then(response => {
        dispatch({
          type: USER_FAVORITES,
          payload: response.data
        });
      });
  }
}

/**
 *  Add a favorite view to an authenticated user given a view id
 */
export function favorite(id) {
  const API_CALL = `${ROOT_URL}/favorites/add_favorite?id=${id}`;
  return function (dispatch) {
    axios.put(API_CALL, {}, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: ADD_FAVORITE,
          payload: id
        });
      });
  }
}

/**
 *  Remove a favorite view from an authenticated user given a view id
 */
export function unfavorite(id) {
  const API_CALL = `${ROOT_URL}/favorites/remove_favorite?id=${id}`;
  return function (dispatch) {
    axios.put(API_CALL, {}, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: REMOVE_FAVORITE,
          payload: id
        });
      });
  }
}