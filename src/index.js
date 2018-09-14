import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { tableReducer } from './store/reducers/table';
import { gameReducer } from './store/reducers/game';
import registerServiceWorker from './registerServiceWorker';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const logger = (createLogger());
    middlewares.push(logger);
}

const rootReducer = combineReducers({ tableReducer,gameReducer });
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const app = <Provider store={store}><App /></Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();