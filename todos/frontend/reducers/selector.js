// getter methods for the application state
// receive state and often return subset of the state date formatted in a specific way
export const allTodos = (state) => {
  return state ? Object.keys(state.todos).map(key => state.todos[key]) : [];
}

export const stepsById = (state, todo_id) => {
  return state.steps[todo_id] ? Object.keys(state.steps[todo_id]).map(key => state.steps[todo_id][key]) : [];
}
