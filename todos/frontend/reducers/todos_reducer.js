import { TODO_CONSTANTS } from './../actions/todo_actions';

const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      return action.todos
    default:
      return state;
  }
};

export default TodosReducer;
