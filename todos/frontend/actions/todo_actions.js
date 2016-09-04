export const TODO_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DESTROY_TODO: "DESTROY_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DESTROY_TODO: "DESTROY_TODO"
};

export const requestTodos = () => ({
  type: TODO_CONSTANTS.REQUEST_TODOS
});

export const receiveTodos = (todos) => ({
  type: TODO_CONSTANTS.RECEIVE_TODOS,
  todos: todos
});

export const createTodo = (todo) => ({
  type: TODO_CONSTANTS.CREATE_TODO,
  todo: todo
});

export const receiveTodo = (todo) => ({
  type: TODO_CONSTANTS.RECEIVE_TODO,
  todo: todo
});

export const toggleTodo = (todo) => ({
  type: TODO_CONSTANTS.UPDATE_TODO,
  todo: Object.assign({}, todo, { done: !todo.done })
});

// action to destroy todo on the backend
export const destroyTodo = (todo) => ({
  type: TODO_CONSTANTS.DESTROY_TODO,
  todo: todo
});

// action to remove todo from frontend
// used in success callback to the ajax request made when destroyTodo action
// is dispatched
export const removeTodo = (todo) => ({
  type: TODO_CONSTANTS.REMOVE_TODO,
  todo: todo
});
