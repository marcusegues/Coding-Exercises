import { TODO_CONSTANTS } from './../actions/todo_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => newState[todo.id] = todo);
      return newState;
    case TODO_CONSTANTS.RECEIVE_TODO:
      const newTodo = merge({}, state, {[action.todo.id]: action.todo})
      return newTodo;
    case TODO_CONSTANTS.REMOVE_TODO:
      return delete Object.assign({}, state)[action.todo.id]
    default:
      return state;
  }
};

export default TodosReducer;
