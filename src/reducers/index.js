import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';

import authReducer from './auth_reducer';
import explorerReducer from './explorer_reducer';

const rootReducer = combineReducers({
    form,
    auth: authReducer,
    explorer: explorerReducer
});

export default rootReducer;
