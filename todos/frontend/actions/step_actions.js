export const STEP_CONSTANTS = {
  REQUEST_STEPS: "REQUEST_STEPS",
  RECEIVE_STEPS: "RECEIVE_STEPS",
  CREATE_STEP: "CREATE_STEP",
  TOGGLE_STEP: "TOGGLE_STEP",
  RECEIVE_STEP: "RECEIVE_STEP",
  DESTROY_STEP: "DESTROY_STEP",
  REMOVE_STEP: "REMOVE_STEP"
};

export const requestSteps = (todo) => ({
  type: STEP_CONSTANTS.REQUEST_STEPS,
  todo_id: todo.id
});

export const receiveSteps = (steps) => ({
  type: STEP_CONSTANTS.RECEIVE_STEPS,
  steps: steps
});

export const createStep = (step) => ({
  type: STEP_CONSTANTS.CREATE_STEP,
  step: step
});

export const toggleStep = (step) => ({
  type: STEP_CONSTANTS.UPDATE_STEP,
  step: Object.assign({}, step, {done: !step.done})
});

export const receiveStep = (step) => ({
  type: STEP_CONSTANTS.RECEIVE_STEP,
  step: step
});

export const destroyStep = (step) => ({
  type: STEP_CONSTANTS.DESTROY_STEP,
  step: step
});

export const removeStep = (step) => ({
  type: STEP_CONSTANTS.REMOVE_STEP,
  step: step
});
