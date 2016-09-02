import { TRACK_CONSTANTS } from './../actions/track_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  debugger;
  let currTrack = state[currTrackId];
  switch(action.type) {
    case TRACK_CONSTANTS.START_RECORDING:
      currTrackId += 1;
      const newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      return merge({}, state, {[currTrackId]: newTrack});
    case TRACK_CONSTANTS.STOP_RECORDING:
      const finalTrack = merge(
        {},
        currTrack,
        {
          roll: [...currTrack.roll,
            { notes: [], timeSlice: action.timeNow - currTrack.timeStart }]
        }
      );
      return merge({}, state, {[currTrackId]: finalTrack});
    case TRACK_CONSTANTS.ADD_NOTES:
      const updatedTrack = merge(
        {},
        currTrack,
        {
          roll: [...currTrack.roll,
            {notes: action.notes, timeSlice: action.timeNow - currTrack.timeStart}]
        }
      );
      return merge({}, state, {[currTrackId]: updatedTrack});
    default:
      return state;
  }
};

export default tracksReducer;
