import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import gameReducer from './gameReducer';
import chartsReducer from './chartsReducer';

const rootReducer = combineReducers({
    tableReducer,
    gameReducer,
    chartsReducer
});

export default rootReducer;
