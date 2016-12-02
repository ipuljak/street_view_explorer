import { combineReducers } from 'redux';
import explorerReducer from './explorer_reducer';

const rootReducer = combineReducers({
    explorer: explorerReducer
});

export default rootReducer;
