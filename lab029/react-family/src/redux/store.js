import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promissMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promissMiddleware));

if (module.hot) {
    module.hot.accept("./reducers", () => {
        const nextCombineReducers = require('./reducers').default;
        store.replaceReducer(nextCombineReducers)
    })
}

export default store;