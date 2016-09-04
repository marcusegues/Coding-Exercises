import { TODO_CONSTANTS, receiveTodos, receiveTodo, removeTodo } from './../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from './../util/todo_util_api';

export const TodoMiddleware = store => next => action => {
  switch(action.type) {
    case TODO_CONSTANTS.REQUEST_TODOS:
      const todosSuccess = (todos) => store.dispatch(receiveTodos(todos));
      fetchTodos(todosSuccess);
      break;
    case TODO_CONSTANTS.CREATE_TODO:
      const todoSuccess = (todo) => store.dispatch(receiveTodo(todo));
      createTodo(action.todo, todoSuccess);
      break;
    case TODO_CONSTANTS.UPDATE_TODO:
      const updateSuccess = (todo) => {
        store.dispatch(receiveTodo(todo));
      }
      updateTodo(action.todo, updateSuccess);
      break;
    case TODO_CONSTANTS.DESTROY_TODO:
      const destroySuccess = (todo) => store.dispatch(removeTodo(todo));
      destroyTodo(action.todo, destroySuccess);
      break;
    default:
      next(action);
  }
}

//Redux cycle
// So far, when the TodoList component mounts, it fires a dispatch through on of its props.
// In particular, it fires dispatch(requestTodos()) where requestTodos() returns an action object.
// The action object is sent to the middleware that we set up to fire API requests. On success, the middleware
// can either fire the next middleware (default) or do something else, like fire another dispatch.

// we want a form submit to start the redux cycle. We will package the data and dispatch an action
// createTodo, sending in the data from the form. The action will go through the middleware, which will
// fire an API request createTodo, and on success will fire another dispatch of receiveTodo, which should
// fall to the default action when it hits the middleware, and be dispatched to the reducer to actually update
// the state

//steps
// create the api function in util
// create the case in middleware that fires the api
// create a case in the todos_reducer
