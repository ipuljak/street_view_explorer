import {
    FETCH_TYPES,
    FETCH_TYPE_DATA,
    VIEWS_BY_TYPE,
    CURRENT_VIEW
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TYPES:
            console.log("FETCH TYPES REDUCER", action.payload);
            return {...state, types: action.payload};
        case FETCH_TYPE_DATA:
            console.log("FETCH TYPE DATA REDUCER", action.payload);
            return {...state, typedata: action.payload};
        case VIEWS_BY_TYPE:
            console.log("VIEWS BY TYPE REDUCER", action.payload);
            return {...state, allviews: action.payload};
        case CURRENT_VIEW:
            console.log("CURRENT VIEW REDUCER", action.payload);
            return {...state, view: action.payload};
    }

    return state;
}