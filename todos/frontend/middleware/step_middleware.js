import { STEP_CONSTANTS, receiveSteps, receiveStep, removeStep} from './../actions/step_actions';
import { fetchSteps, createStep, updateStep, destroyStep } from './../util/step_api_util';

export const StepMiddleware = store => next => action => {
  switch(action.type) {
    case STEP_CONSTANTS.REQUEST_STEPS:
      const requestSuccess = (steps) => store.dispatch(receiveSteps(steps));
      fetchSteps(action.todo_id, requestSuccess);
      break;
    case STEP_CONSTANTS.CREATE_STEP:
      const createSuccess = (step) => store.dispatch(receiveStep(step));
      createStep(action.step, createSuccess);
      break;
    case STEP_CONSTANTS.UPDATE_STEP:
      const updateSuccess = (step) => store.dispatch(receiveStep(step));
      updateStep(action.step, updateSuccess);
      break;
    case STEP_CONSTANTS.DESTROY_STEP:
      const destroySuccess = (step) => store.dispatch(removeStep(step));
      destroyStep(action.step, destroySuccess);
      break;
    default:
      next(action);
  }
}
