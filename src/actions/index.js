import _ from 'lodash';
import axios from 'axios';

import {
    FETCH_TYPES,
    LIST_VIEWS,
    CURRENT_VIEW
} from './types';

const API_URL = 'http://localhost:3001/api/street_view/';

/**
 *  Fetch all all the distinct types of locations from the API server.
 */
export function getTypes() {
    console.log("Get types action called");
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
 *  Fetch a list of locations given a location type.
 */
export function getLocationsByType(type) {
    const API_CALL = `${API_URL}/get_locations?type=${type}`;
    return function(dispatch) {
        axios.get(API_CALL)
            .then(response => {
                dispatch({
                    type: LIST_VIEWS,
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
    console.log("Set view action", location);

    return {
        type: CURRENT_VIEW,
        payload: location
    };
}

