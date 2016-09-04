export const TODO_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO"
}

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
