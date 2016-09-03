export const TODO_CONSTANTS = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS"
}

export const requestTodos = () => ({
  type: TODO_CONSTANTS.REQUEST_TODOS
});

export const receiveTodos = () => ({
  type: TODO_CONSTANTS.RECEIVE_TODOS
});
