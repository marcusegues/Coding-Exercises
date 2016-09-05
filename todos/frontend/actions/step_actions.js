const STEP_CONSTANTS = {
  REQUEST_STEPS: "REQUEST_STEPS",
  RECEIVE_STEPS: "RECEIVE_STEPS",
  CREATE_STEP: "CREATE_STEP",
  TOGGLE_STEP: "TOGGLE_STEP",
  RECEIVE_STEP: "RECEIVE_STEP"
};

export const requestSteps = () => ({
  type: STEPS_CONSTANTS.REQUEST_STEPS
});

export const receiveSteps = (steps) => ({
  type: STEPS_CONSTANTS.RECEIVE_STEPS,
  steps: steps
});

export const createStep = (step) => ({
  type: STEPS_CONSTANTS.CREATE_STEP,
  step: step
});

export const toggleStep = (step) => ({
  type: STEPS_CONSTANTS.UPDATE_STEP,
  step: step
});

export const receiveStep = (step) => ({
  type: STEPS_CONSTANTS.RECEIVE_STEP,
  step: step
});
