import { createStore } from 'redux';

import reducer from './reducers/root_reducer.js'

const store = createStore(reducer)

export default store;
