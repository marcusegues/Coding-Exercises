import TRACK_CONSTANTS from './../actions/track_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

export const tracksReducer = (state = {}, action) => {
  let currTrack = state[currTrackId];
  switch(action.type) {
    case TRACK_CONSTANTS.START_RECORDING:
      currTrackId += 1;
      const newTrack = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      };
      return merge({}, state, {currTrackId: newTrack});
    case TRACK_CONSTANTS.STOP_RECORDING:
      return merge(
        {},
        currTrack,
        {
          roll: [...currTrack.roll,
            { notes: [], timeSlice: action.timeNow - currTrack.timeStart }]
        }
      );
    case TRACK_CONSTANTS.ADD_NOTES:
      return merge(
        {},
        currTrack,
        {
          roll: [...currTrack.roll,
            {notes: action.notes, timeSlice: action.timeNow - currTrack.timeStart}]
        }
      );
    default:
      return state;
  }
};
