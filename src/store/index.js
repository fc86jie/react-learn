import { applyMiddleware, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
// import { createStore } from '@/source/xredux';
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxLogger, reduxThunk, reduxPromise)));

export default store;
