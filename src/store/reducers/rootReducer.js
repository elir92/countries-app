import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
    tableReducer,
    gameReducer
});

export default rootReducer;
