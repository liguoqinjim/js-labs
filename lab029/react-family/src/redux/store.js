import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promissMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promissMiddleware));

export default store;