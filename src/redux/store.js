import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import products from './reducers/productReducer';

export default createStore(
    combineReducers({
        products
    }),
    {},
    applyMiddleware(
        createLogger()
    )
);