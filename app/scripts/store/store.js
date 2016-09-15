import {applyMiddleware, createStore} from 'redux';
import {reducers} from './../reducers/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const middleware = applyMiddleware(thunk, logger());
export const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("changed", store.getState());
});
