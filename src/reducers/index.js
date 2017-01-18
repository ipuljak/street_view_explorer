import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';

import authReducer from './auth_reducer';
import streetViewReducer from './street_view_reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    streetView: streetViewReducer
});

export default rootReducer;
