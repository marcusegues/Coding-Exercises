import { combineReducers } from 'redux';
import notes_reducer from './notes_reducer';

const reducer = combineReducers({notes: notes_reducer});

export default reducer;
