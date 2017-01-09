import _ from 'lodash';
import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_TYPES,
  VIEWS_BY_TYPE,
  CURRENT_COUNTRY,
  CURRENT_VIEW,
  CURRENT_COMMENTS
} from './types';

const ROOT_URL = 'http://138.197.143.248:3001/api/street_view';

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
 *  Set the current view
 */
export function setView(location) {
  return {
    type: CURRENT_VIEW,
    payload: location
  };
}