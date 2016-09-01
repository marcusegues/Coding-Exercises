import TRACK_CONSTANTS from './../actions/track_actions';

export const recording = (state = false, action) => {
  switch(action.type) {
    case TRACK_CONSTANTS.START_RECORDING:
      return {isRecording: true};
    case TRACK_CONSTANTS.STOP_RECORDING:
    return {isRecording: false};
    default:
      return state;
  }
};
