import _ from 'lodash';
import axios from 'axios';

import {
    FETCH_TYPES,
    VIEWS_BY_TYPE,
    CURRENT_VIEW
} from './types';

const API_URL = 'http://138.197.143.248:3001/api/street_view';
//const API_URL = 'http://localhost:3001/api/street_view/';
//const API_URL = 'http://192.168.1.2:3001/api/street_view/';

/**
 *  Fetch all the distinct types of locations from the API server.
 */
export function getDistincts() {
    const API_CALL = `${API_URL}/get_distincts`;
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
 *  Return a list of locations given a search term (city, type, etc).
 */
export function searchLocations(term) {
    const API_CALL = `${API_URL}/search_locations?search=${term}`;
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
 *  Set the current view.
 */
export function setView(location) {
    return {
        type: CURRENT_VIEW,
        payload: location
    };
}