import _ from 'lodash';
import axios from 'axios';
import {browserHistory} from 'react-router';

import {
    AUTH_USER, 
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    FETCH_TYPES,
    VIEWS_BY_TYPE,
    CURRENT_COUNTRY,
    CURRENT_VIEW,
    CURRENT_COMMENTS
} from './types';

const ROOT_URL = 'http://138.197.143.248:3001';


/**
 * ========================================================
 *                  AUTHENTICATION ACTIONS
 * ========================================================
 */

export function signinUser({username, password}) {
    // gonna return a function instead of an object for an action creator
    // this function is how we get direct access to dispatch function
    // this is what redux thunk does. we do this so we get asynchronous abilities
    // it doesn't have to run immediately

    return function(dispatch) {
        // Submit username/password to server
        // have to use a promise because call is asynchronous -> therefore can't just use an if statement right away
        axios.post(`${ROOT_URL}/auth/signin`, {username, password}) //{username: username, password: password}
            .then(response => {
                // If request is good...
                // - Update state to indicate that the user is authenticated
                dispatch({type: AUTH_USER});
                // - Save the JWT token
                localStorage.setItem('token', response.data.token);
                // - Redirect to the route '/feature'
                browserHistory.push('/');
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError('Username or password is incorrect.'));
            });
    }
}

export function signupUser({username, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/auth/signup`, {username, password})
            .then(response => {
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/');
            })
            .catch(error => dispatch(authError(error.response.data.error)));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}

// redux thunk
export function fetchMessage() {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/auth`, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(response => {
                console.log(response);
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                });
            });
    }
}

// the above with redux promise
export function fetchMessage2() {
    const request = axios.get(`${ROOT_URL}/auth`, {
        headers: {authorization: localStorage.getItem('token')}
    });

    return {
        type: FETCH_MESSAGE,
        payload: request
    };
}


/**
 * ========================================================
 *                  STREET_VIEW ACTIONS
 * ========================================================
 */

/**
 *  Fetch all the distinct types of locations from the API server.
 */
export function getDistincts() {
    const API_CALL = `${ROOT_URL}/api/street_view/get_distincts`;
    return function(dispatch) {
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
 *  Given a country, fetch it's information and cities.
 */
export function setCountry(term) {
    const API_CALL = `${ROOT_URL}/api/street_view/get_country_info?country=${term}`;
    return function(dispatch) {
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
 *  Return a list of locations given a search term (city, type, etc).
 */
export function searchLocations(term) {
    const API_CALL = `${ROOT_URL}/api/street_view/search_locations?search=${term}`;
    return function(dispatch) {
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
 *  Return a list of comments given a view ID.
 */
export function getComments(id) {
    const API_CALL = `${ROOT_URL}/api/street_view/get_comments?id=${id}`;
    return function(dispatch) {
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
 *  Set the current view.
 */
export function setView(location) {
    return {
        type: CURRENT_VIEW,
        payload: location
    };
}