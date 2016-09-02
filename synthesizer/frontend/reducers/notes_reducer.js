import { NOTES_CONSTANTS } from './../actions/note_actions';
import { NOTE_NAMES } from './../util/tones';

const validKeys = ["c", "d", "e", "f", "g"];

const keyMap = {};
validKeys.forEach((key, idx) => {
  keyMap[key] = NOTE_NAMES[idx];
});

const notesReducer = (state = [], action) => {
  const note = keyMap[action.key];
  const idx = state.indexOf(note);
  switch(action.type) {
    case NOTES_CONSTANTS.KEY_PRESSED:
      if (note && idx === -1) {
        return [...state, note];
      }
      return state;
    case NOTES_CONSTANTS.KEY_RELEASED:
      if (note && idx !== -1) {
        return [...state.slice(0, idx), ...state.slice(idx+1)];
      }
      return state;
    case NOTES_CONSTANTS.GROUP_UPDATE:
      return [...action.notes];
    default:
      return state;
  }
};

export default notesReducer;
