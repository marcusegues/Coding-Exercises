export const fetchSteps = (todo_id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/todos/${todo_id}/steps`,
    success,
    error
  });
};

export const createStep = (step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/todos/${step.todo_id}/steps`,
    data: {step},
    success,
    error
  });
};

export const updateStep = (step, success, error) => {
  $.ajax({
    method: 'PUT',
    url: `api/steps/${step.id}`,
    data: {step},
    success,
    error
  });
};

export const destroyStep = (step, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/steps/${step.id}`,
    success,
    error
  });
};
