import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';

import configureStore from './store/store';
import Root from './components/root';

const addLoggingToDispatch = (store) => (next) => (action) => {
  const dispatch = store.dispatch;
  console.log("Old State: ", store.getState());
  console.log("Action: ", action);
  let rv = dispatch(action);
  console.log("New State", store.getState());
  return rv;
}

const addMoreLoggingToDispatch = (store) => (next) => (action) => {
  const dispatch = store.dispatch;
  console.log("Middleware");
  let rv = next(action);
  return rv;
}

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });

  return Object.assign({}, store, { dispatch });
}

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const newStore = applyMiddlewares(store, addLoggingToDispatch, addMoreLoggingToDispatch);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={newStore} />, rootEl);
});
