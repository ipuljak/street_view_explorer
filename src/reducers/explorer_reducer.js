import {
    FETCH_TYPES,
    VIEWS_BY_TYPE,
    CURRENT_VIEW
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TYPES:
            console.log("FETCH TYPES REDUCER", action.payload);
            return {...state, types: action.payload};
        case VIEWS_BY_TYPE:
            console.log("VIEWS BY TYPE REDUCER", action.payload);
            return {...state, allviews: action.payload};
        case CURRENT_VIEW:
            console.log("CURRENT VIEW REDUCER", action.payload);
            return {...state, view: action.payload};
        default:
            return state;
    }
}