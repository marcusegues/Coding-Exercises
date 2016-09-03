import { TODO_CONSTANTS } from './../actions/todo_actions';

export const TodoMiddleware = store => next => action => {
  switch(action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      console.log("Here is where the todos would be fetched");
    default:
      next(action);
  }
}
