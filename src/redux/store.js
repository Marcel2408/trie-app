import { applyMiddleware, createStore } from 'redux';
import { createLogger as logger } from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(middlewares));

export default store;
