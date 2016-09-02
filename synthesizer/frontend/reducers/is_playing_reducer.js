import { PLAYING_CONSTANTS } from './../actions/playing_actions';

const isPlayingReducer = (state = false, action) => {
  switch(action.type) {
    case PLAYING_CONSTANTS.START_PLAYING:
      return true;
    case PLAYING_CONSTANTS.STOP_PLAYING:
      return false;
    default:
      return state;
  }
};

export default isPlayingReducer;
