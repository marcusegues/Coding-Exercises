import { createStore } from 'redux';
import reducer from './../reducers/index';

const configureStore = (preloadedState = {}) => {
  return createStore(reducer, preloadedState);
};

export default configureStore;
