import _ from 'lodash';
import axios from 'axios';

import {
    FETCH_TYPES,
    FETCH_TYPE_DATA,
    VIEWS_BY_TYPE,
    CURRENT_VIEW
} from './types';

//const API_URL = 'http://localhost:3001/api/street_view/';
const API_URL = 'http://192.168.1.2:3001/api/street_view/';

/**
 *  Fetch all the distinct types of locations from the API server.
 */
export function getTypes() {
    const API_CALL = `${API_URL}/get_distinct_types`;
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
 *  Fetch name and image data of all locations given a location type.
 */
export function getDataByType(type) {
    const API_CALL = `${API_URL}/get_base_info_by_type?type=${type}`;
    return function(dispatch) {
        axios.get(API_CALL)
            .then(response => {
                dispatch({
                    type: FETCH_TYPE_DATA,
                    payload: response.data
                })
            });
    }
}

/**
 *  Fetch a list of locations given a location type.
 */
export function getLocationsByType(type) {
    const API_CALL = `${API_URL}/get_locations?type=${type}`;
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
 *  Fetch a location by it's id.'
 */
export function getLocationByID(id) {
    const API_CALL = `${API_URL}/get_location_by_id?id=${id}`;
    return function(dispatch) {
        axios.get(API_CALL)
            .then(response => {
                dispatch({
                    type: CURRENT_VIEW,
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


