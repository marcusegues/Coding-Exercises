export const TRACK_CONSTANTS = {
  START_RECORDING: "START_RECORDING",
  STOP_RECORDING: "STOP_RECORDING",
  ADD_NOTES: "ADD_NOTES"
};

export const startRecording = () => ({
  type: TRACK_CONSTANTS.START_RECORDING,
  timeNow: Date.now()
});

export const stopRecording = () => ({
  type: TRACK_CONSTANTS.STOP_RECORDING,
  timeNow: Date.now()
});

export const addNotes = (notes) => ({
  type: TRACK_CONSTANTS.ADD_NOTES,
  timeNow: Date.now(),
  notes: notes
});
