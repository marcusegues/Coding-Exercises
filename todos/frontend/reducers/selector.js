// getter methods for the application state
// receive state and often return subset of the state date formatted in a specific way
export const allTodos = (state) => {
  return Object.keys(state.todos).map((id) => state[id]);
};
