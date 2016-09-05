import { STEP_CONSTANTS } from './../actions/step_actions';

const StepsReducer = (state = {}, action) => {
  switch(action.type) {
    case STEP_CONSTANTS.RECEIVE_STEPS:
      let newState = {};
      action.steps.forEach((step) => {
        newState[step.todo_id] = newState[step.todo_id] || {};
        newState[step.todo_id][step.id] =  step;
      });
      return Object.assign({}, state, newState)
    case STEP_CONSTANTS.RECEIVE_STEP:
      newState = Object.assign({}, state[action.step.todo_id]);
      newState[action.step.id] = action.step;
      return Object.assign({}, state, {[action.step.todo_id]: newState});
    case STEP_CONSTANTS.REMOVE_STEP:
      newState = Object.assign({}, state[action.step.todo_id]);
      delete newState[action.step.id];
      return Object.assign({}, state, {[action.step.todo_id]: newState});
    default:
      return state;
  };
};

export default StepsReducer;
