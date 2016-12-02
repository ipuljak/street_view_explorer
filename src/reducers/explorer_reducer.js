import {
    FETCH_TYPES,
    LIST_VIEWS,
    CURRENT_VIEW
} from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TYPES:
            console.log("FETCH TYPES REDUCER", action.payload);
            return {...state, types: action.payload};
        case LIST_VIEWS:
            console.log("FETCH TYPES REDUCER", action.payload);
            return {...state, types: action.payload};
        case CURRENT_VIEW:
            console.log("CURRENT VIEW REDUCER", action.payload);
            return {...state, view: action.payload};
    }

    return state;
}