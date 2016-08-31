import { combineReducers } from 'redux';
import emReducer from './em_reducer.js';
import genReducer from './gen_reducer.js';

const reducer = combineReducers({
  general: genReducer,
  em: emReducer
});

export default reducer;
