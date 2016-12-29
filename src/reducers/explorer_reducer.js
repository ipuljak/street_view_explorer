import {
    FETCH_TYPES,
    VIEWS_BY_TYPE,
    CURRENT_COUNTRY,
    CURRENT_VIEW,
    CURRENT_COMMENTS
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TYPES:
            return {...state, types: action.payload};
        case VIEWS_BY_TYPE:
            return {...state, allviews: action.payload};
        case CURRENT_COUNTRY:
            return {...state, country: action.payload};
        case CURRENT_VIEW:
            return {...state, view: action.payload};
        case CURRENT_COMMENTS:
            return {...state, comments: action.payload};
        default:
            return state;
    }
}