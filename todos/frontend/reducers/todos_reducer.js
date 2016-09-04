import { TODO_CONSTANTS } from './../actions/todo_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      return action.todos
    case TODO_CONSTANTS.RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo})
    default:
      return state;
  }
};

export default TodosReducer;
