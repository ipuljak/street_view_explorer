import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import { routerReducer } from 'react-router-redux'

import authReducer from './auth_reducer';
import explorerReducer from './explorer_reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    explorer: explorerReducer,
    routing: routerReducer
});

export default rootReducer;
