export const PLAYING_CONSTANTS = {
  START_PLAYING: "START_PLAYING",
  STOP_PLAYING: "STOP_PLAYING"
};

export const startPlaying = () => ({
  type: PLAYING_CONSTANTS.START_PLAYING
});

export const stopPlaying = () => ({
  type: PLAYING_CONSTANTS.STOP_PLAYING
});
