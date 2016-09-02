import { TRACK_CONSTANTS } from './../actions/track_actions';

const recordingReducer = (state = false, action) => {
  debugger;
  switch(action.type) {
    case TRACK_CONSTANTS.START_RECORDING:
      return true;
    case TRACK_CONSTANTS.STOP_RECORDING:
      return false;
    default:
      return state;
  }
};

export default recordingReducer;
