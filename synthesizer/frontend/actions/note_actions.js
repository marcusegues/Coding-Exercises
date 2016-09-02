export const NOTES_CONSTANTS = {
  KEY_PRESSED: "KEY_PRESSED",
  KEY_RELEASED: "KEY_RELEASED",
  GROUP_UPDATE: "GROUP_UPDATE"
};

export const keyPressed = key => ({
  type: NOTES_CONSTANTS.KEY_PRESSED,
  key: key
});

export const keyReleased = key => ({
  type: NOTES_CONSTANTS.KEY_RELEASED,
  key: key
});

export const groupUpdate = notes => ({
  type: NOTES_CONSTANTS.GROUP_UPDATE,
  notes: notes
});
