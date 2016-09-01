import { combineReducers } from 'redux';
import notesReducer from './notes_reducer';
import recordingReducer from './is_recording_reducer';
import tracksReducer from './tracks_reducer';

const reducer = combineReducers({
  notes: notesReducer,
  isRecording: recordingReducer,
  tracks: tracksReducer
});

export default reducer;
